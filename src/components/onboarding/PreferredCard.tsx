import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PreferredCardProps {
  title: string;
  image: string;
  selected: boolean;
  onToggle: () => void;
}

const PreferredCard = ({ title, image, selected, onToggle }: PreferredCardProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative flex h-[160px] w-full flex-col justify-end overflow-hidden rounded-[8px] border transition-colors",
        selected ? "border-primary" : "border-transparent"
      )}
    >
      <img
        src={image}
        alt={title.replace("\n", " ")}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Text label - below overlay in z-order so it's hidden when selected */}
      <div className="absolute inset-0 z-10 p-[12px]">
        <p className="text-left text-sm font-semibold leading-tight text-primary-foreground drop-shadow-md whitespace-pre-line">
          {title.split('\n').map((line, i) => (
            <span key={i}>
              {line.startsWith('*') ? <span className="text-[12px] font-medium">{line}</span> : line}
              {i < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
      
      {/* Blue overlay - above text (z-20) so it covers the text */}
      {selected && (
        <div className="absolute inset-0 z-20 flex items-center justify-center" style={{ backgroundColor: 'rgba(26, 117, 255, 0.7)', backdropFilter: 'blur(2px)' }}>
          <Check className="h-8 w-8 text-primary-foreground" strokeWidth={3} />
        </div>
      )}
    </button>
  );
};

export default PreferredCard;
