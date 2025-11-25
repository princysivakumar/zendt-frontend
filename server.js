import express from "express";
import cors from "cors";
import { randomUUID } from "node:crypto";

const app = express();
app.use(cors());
app.use(express.json());

const users = new Map(); // email -> { password, firstName, lastName }
const twoFactorTokens = new Map(); // token -> { code, email, intent }

function generateTwoFactorCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function createTwoFactorChallenge(email, intent) {
  const token = randomUUID();
  const code = generateTwoFactorCode();
  twoFactorTokens.set(token, { code, email, intent, createdAt: Date.now() });
  return { twoFactorToken: token, message: "Two-factor verification required.", demoCode: code };
}

app.post("/api/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body ?? {};
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Missing required fields." });
  }
  if (users.has(email)) {
    return res.status(409).json({ message: "Account already exists." });
  }

  users.set(email, { password, firstName, lastName });
  return res.json(createTwoFactorChallenge(email, "signup"));
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password." });
  }

  const user = users.get(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  return res.json(createTwoFactorChallenge(email, "login"));
});

app.post("/api/verify-2fa", (req, res) => {
  const { twoFactorToken, code } = req.body ?? {};
  if (!twoFactorToken || !code) {
    return res.status(400).json({ message: "Missing verification data." });
  }

  const record = twoFactorTokens.get(twoFactorToken);
  if (!record) {
    return res.status(400).json({ message: "Token expired or invalid." });
  }

  if (record.code !== code) {
    return res.status(401).json({ message: "Incorrect verification code." });
  }

  twoFactorTokens.delete(twoFactorToken);
  return res.json({ success: true, message: "Verification successful.", email: record.email });
});

const PORT = process.env.PORT ?? 5001;
app.listen(PORT, () => {
  console.log(`Mock auth server listening on http://localhost:${PORT}`);
});
