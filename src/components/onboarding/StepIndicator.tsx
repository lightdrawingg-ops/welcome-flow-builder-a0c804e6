import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

const StepIndicator = ({ currentStep, totalSteps = 3 }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-2 w-2 rounded-full transition-colors",
            i === currentStep ? "bg-primary" : "bg-secondary"
          )}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
