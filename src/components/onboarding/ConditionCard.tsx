import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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
          : "border-onboarding-card-border bg-card"
      )}
    >
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>
      {selected && (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
          <Check className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
    </button>
  );
};

export default ConditionCard;
