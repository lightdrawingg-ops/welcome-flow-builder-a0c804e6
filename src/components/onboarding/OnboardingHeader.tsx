import { ArrowLeft, X } from "lucide-react";

interface OnboardingHeaderProps {
  title: string;
  onBack?: () => void;
  onClose?: () => void;
}

const OnboardingHeader = ({ title, onBack, onClose }: OnboardingHeaderProps) => {
  return (
    <div className="relative flex h-14 items-center justify-center px-4">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute left-4 flex h-10 w-10 items-center justify-center text-foreground"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      )}
      <span className="text-base font-semibold text-foreground">{title}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 flex h-10 w-10 items-center justify-center text-foreground"
        >
          <X className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default OnboardingHeader;
