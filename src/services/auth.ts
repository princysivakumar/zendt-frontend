const API_BASE_URL = import.meta.env.VITE_AUTH_API ?? "http://localhost:5001";

async function handleResponse(response: Response) {
  if (!response.ok) {
    const message = await response
      .json()
      .catch(() => ({ message: "Request failed." }));
    throw new Error(message.message ?? "Request failed.");
  }

  return response.json();
}

export async function requestSignup(payload: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_BASE_URL}/api/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

export async function requestLogin(payload: { email: string; password: string }) {
  const response = await fetch(`${API_BASE_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

export async function verifyTwoFactor(payload: { twoFactorToken: string; code: string }) {
  const response = await fetch(`${API_BASE_URL}/api/verify-2fa`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}
