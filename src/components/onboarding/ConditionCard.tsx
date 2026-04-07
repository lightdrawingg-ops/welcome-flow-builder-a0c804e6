import { cn } from "@/lib/utils";

interface ConditionCardProps {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  onToggle: () => void;
}

const ConditionCard = ({ icon, title, description, selected, onToggle }: ConditionCardProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left transition-colors",
        selected
          ? "border-onboarding-card-active-border bg-card"
          : "border-[#E1E2E4] bg-card"
      )}
    >
      <span style={{ fontSize: "20px", lineHeight: 1 }}>{icon}</span>
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>
      {selected && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M5 13l4 4L19 7" stroke="#1A75FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
};

export default ConditionCard;
