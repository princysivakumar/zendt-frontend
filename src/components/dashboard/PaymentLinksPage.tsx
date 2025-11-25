import { useState, type ReactNode } from "react";
import BackButton from "./BackButton";
import PageContainer from "./PageContainer";
import { Link } from "react-router-dom";
import ToggleCheckbox from "./ToggleCheckbox";

const sortOptions = ["Newest first", "Oldest first", "Amount high to low"];
const statusOptions = [
  "Created",
  "Partially paid",
  "Paid",
  "Cancelled",
  "Expired",
];
const durationOptions = ["Past 7 days", "Past 30 days", "Past 90 days"];

export default function PaymentLinksPage() {
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [statusOpen, setStatusOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([
    "Created",
  ]);
  const [durationOpen, setDurationOpen] = useState(false);
  const [duration, setDuration] = useState(durationOptions[0]);

  const toggleStatus = (status: string) => {
    setSelectedStatuses((current) =>
      current.includes(status)
        ? current.filter((item) => item !== status)
        : [...current, status]
    );
  };

  const Section = ({ children }: { children: ReactNode }) => (
    <section className="rounded-[36px] border border-white/10 bg-[#0c0c0f]/90 p-5 shadow-[0_25px_45px_rgba(4,4,7,0.55)] space-y-4">
      {children}
    </section>
  );

  const Input = ({ placeholder }: { placeholder: string }) => (
    <input
      placeholder={placeholder}
      className="w-full rounded-3xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
    />
  );

  return (
    <PageContainer className="text-white space-y-6">
      <div className="flex items-center justify-between">
        <BackButton />
        <Link
          to="/dashboard/payment-links/new"
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          + Create link
        </Link>
      </div>

      <Section>
        <FieldToggle
          label="Sort by"
          value={sortBy}
          onClick={() => setSortBy(nextSort(sortBy))}
        />
        <Input placeholder="Payment link id" />
        <Input placeholder="Reference id" />
        <Input placeholder="Count" />
        <Input placeholder="Customer contact" />
        <Input placeholder="Customer E-mail" />
        <div>
          <FieldToggle
            label="Payment link status"
            trailingIcon={
              statusOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="none">
                  <path d="M19.7014 0.311523L13.1226 6.89035C11.4016 8.6113 8.61142 8.61131 6.89047 6.89036L0.31164 0.311523" stroke="white" strokeWidth="0.881353" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="none" className="rotate-180">
                  <path d="M19.7014 0.311523L13.1226 6.89035C11.4016 8.6113 8.61142 8.61131 6.89047 6.89036L0.31164 0.311523" stroke="white" strokeWidth="0.881353" />
                </svg>
              )
            }
            onClick={() => setStatusOpen((prev) => !prev)}
          />
          {statusOpen && (
            <div className="mt-3 rounded-3xl border border-white/10 bg-black/30 p-4 space-y-2 text-sm text-white/80">
              <label className="flex items-center gap-3">
                <ToggleCheckbox
                  size="sm"
                  checked={selectedStatuses.length === statusOptions.length}
                  onChange={(checked) =>
                    setSelectedStatuses(checked ? statusOptions : [])
                  }
                />
                All
              </label>
              {statusOptions.map((status) => (
                <label key={status} className="flex items-center gap-3">
                  <ToggleCheckbox
                    size="sm"
                    checked={selectedStatuses.includes(status)}
                    onChange={() => toggleStatus(status)}
                  />
                  {status}
                </label>
              ))}
            </div>
          )}
        </div>
        <div>
          <FieldToggle
            label="Duration"
            trailingIcon={
              durationOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="none">
                  <path d="M19.7014 0.311523L13.1226 6.89035C11.4016 8.6113 8.61142 8.61131 6.89047 6.89036L0.31164 0.311523" stroke="white" strokeWidth="0.881353" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="none" className="rotate-180">
                  <path d="M19.7014 0.311523L13.1226 6.89035C11.4016 8.6113 8.61142 8.61131 6.89047 6.89036L0.31164 0.311523" stroke="white" strokeWidth="0.881353" />
                </svg>
              )
            }
            value={duration}
            onClick={() => setDurationOpen((prev) => !prev)}
          />
          {durationOpen && (
            <div className="flex gap-2 rounded-3xl border border-white/10 bg-black/30 p-2">
              <div className="flex-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl border border-white/15 px-3 py-2 text-left text-sm"
                >
                  Past 7 days
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="none">
                    <path
                      d="M19.7014 0.311523L13.1226 6.89035C11.4016 8.6113 8.61142 8.61131 6.89047 6.89036L0.31164 0.311523"
                      stroke="white"
                      strokeWidth="0.881353"
                    />
                  </svg>
                </button>
                <div className="mt-2 rounded-2xl border border-white/10">
                  {durationOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={[
                        "block w-full px-4 py-2 text-left text-sm",
                        option === duration
                          ? "bg-white/10"
                          : "hover:bg-white/5",
                      ].join(" ")}
                      onClick={() => {
                        setDuration(option);
                        setDurationOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-white/15 px-3 py-2 text-sm">
                12 Aug 2023 to 25 Aug 2023
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          className="mt-2 rounded-[28px] bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
        >
          Apply
        </button>
      </Section>
    </PageContainer>
  );
}

function FieldToggle({
  label,
  value,
  trailingIcon,
  onClick,
}: {
  label: string;
  value?: string;
  trailingIcon?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-left"
      onClick={onClick}
    >
      <div className="text-sm text-white/70">{label}</div>
      <div className="flex items-center gap-3 text-white/80 text-sm">
        {value && <span>{value}</span>}
        <span>
          {trailingIcon ?? (
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="none">
              <path
                d="M19.7014 0.311523L13.1226 6.89035C11.4016 8.6113 8.61142 8.61131 6.89047 6.89036L0.31164 0.311523"
                stroke="white"
                strokeWidth="0.881353"
              />
            </svg>
          )}
        </span>
      </div>
    </button>
  );
}

function nextSort(current: string) {
  const index = sortOptions.indexOf(current);
  return sortOptions[(index + 1) % sortOptions.length];
}
