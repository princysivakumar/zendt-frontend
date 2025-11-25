import BackButton from "./BackButton";
import PageContainer from "./PageContainer";

const paragraphs = new Array(4).fill(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`);

export default function TermsPage() {
  return (
    <PageContainer>
      <BackButton />
      <div className="rounded-[40px] bg-[#0f0f11]/90 text-white shadow-[0_35px_65px_rgba(4,4,7,0.55)] border border-white/5 overflow-hidden">
        <div className="p-6 space-y-6">
          <h2 className="text-3xl font-semibold">Terms of service</h2>
          <div className="space-y-4 text-sm leading-relaxed text-white/80">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
