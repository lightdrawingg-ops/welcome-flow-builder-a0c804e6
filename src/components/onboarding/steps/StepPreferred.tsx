import OnboardingHeader from "../OnboardingHeader";
import StepIndicator from "../StepIndicator";
import BottomButton from "../BottomButton";
import PreferredCard from "../PreferredCard";

const PREFERRED_OPTIONS = [
  { title: "눈치 안 보이는\n무료공간", image: "/images/condition_free.jpg" },
  { title: "오롯이 집중!\n예약제 공간", image: "/images/condition_reserved.jpg" },
  { title: "통창뷰를\n볼 수 있는 공간", image: "/images/condition_window.jpg" },
  { title: "회의실 또는 폰부스가\n있는 공간", image: "/images/condition_meeting.jpg" },
  { title: "늦게까지 운영하는 곳\n*최소 21시 마감", image: "/images/condition_late.jpg" },
  { title: "차로 이동해요,\n주차장이 있는 공간", image: "/images/condition_parking.jpg" },
];

interface StepPreferredProps {
  selectedPreferred: string[];
  onPreferredChange: (preferred: string[]) => void;
  onComplete: () => void;
  onBack: () => void;
}

const StepPreferred = ({ selectedPreferred, onPreferredChange, onComplete, onBack }: StepPreferredProps) => {
  const togglePreferred = (title: string) => {
    if (selectedPreferred.includes(title)) {
      onPreferredChange(selectedPreferred.filter((p) => p !== title));
    } else {
      onPreferredChange([...selectedPreferred, title]);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <OnboardingHeader title="선호 조건 선택" onBack={onBack} />
      <StepIndicator currentStep={2} />

      <div className="flex-1 overflow-y-auto px-5 pt-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-foreground">
            선호하는 작업 공간 조건이 있나요?
          </h1>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            선택
          </span>
          <p className="text-sm text-muted-foreground">중복 선택 가능해요</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-[12px] pb-4">
          {PREFERRED_OPTIONS.map((option) => (
            <PreferredCard
              key={option.title}
              title={option.title}
              image={option.image}
              selected={selectedPreferred.includes(option.title)}
              onToggle={() => togglePreferred(option.title)}
            />
          ))}
        </div>
      </div>

      <BottomButton label="완료하기" onClick={onComplete} />
    </div>
  );
};

export default StepPreferred;
