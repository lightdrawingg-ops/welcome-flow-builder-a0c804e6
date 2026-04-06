import { useState, useRef } from "react";
import StepArea from "@/components/onboarding/steps/StepArea";
import StepEssential from "@/components/onboarding/steps/StepEssential";
import StepPreferred from "@/components/onboarding/steps/StepPreferred";
import Result from "@/pages/Result";
import Home from "@/pages/Home";

const Index = () => {
  const [step, setStep] = useState(-1);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedPreferred, setSelectedPreferred] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleComplete = () => {
    setStep(3);
  };

  if (step === -1) {
    return <Home onStartOnboarding={() => setStep(0)} />;
  }

  if (step === 3) {
    return <Result />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div ref={containerRef} className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-3xl bg-background shadow-2xl">
        {step === 0 && (
          <StepArea
            selectedAreas={selectedAreas}
            onAreasChange={setSelectedAreas}
            onNext={() => setStep(1)}
            containerRef={containerRef}
          />
        )}
        {step === 1 && (
          <StepEssential
            selectedConditions={selectedConditions}
            onConditionsChange={setSelectedConditions}
            onNext={() => setStep(2)}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && (
          <StepPreferred
            selectedPreferred={selectedPreferred}
            onPreferredChange={setSelectedPreferred}
            onComplete={handleComplete}
            onBack={() => setStep(1)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
