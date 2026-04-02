import { cn } from "@/lib/utils";

interface BottomButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const BottomButton = ({ label, disabled = false, onClick }: BottomButtonProps) => {
  return (
    <div className="px-5 pb-8 pt-3">
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "w-full rounded-xl py-4 text-base font-bold transition-colors",
          disabled
            ? "bg-onboarding-disabled-bg text-onboarding-disabled-text cursor-not-allowed"
            : "bg-accent text-accent-foreground active:opacity-90"
        )}
      >
        {label}
      </button>
    </div>
  );
};

export default BottomButton;
