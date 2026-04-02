import OnboardingHeader from "../OnboardingHeader";
import StepIndicator from "../StepIndicator";
import BottomButton from "../BottomButton";
import ConditionCard from "../ConditionCard";

const CONDITIONS = [
  { icon: "📐", title: "넓은 공간", description: "2층 이상, 혹은 약 20인 이상 수용 가능" },
  { icon: "🔌", title: "콘센트 유무", description: "사용 가능한 콘센트 두 곳 이상" },
  { icon: "🪑", title: "편한 의자와 테이블", description: "등받이 의자 + 노트북 작업 가능한 테이블 다수" },
  { icon: "🎧", title: "작업 친화적 분위기", description: "1인 작업자 유무, 시간제한 없는 곳" },
  { icon: "🚇", title: "역세권", description: "가까운 지하철역 도보 10분 이내" },
  { icon: "🚻", title: "화장실 시설", description: "실외 화장실과 공용 화장실 제외" },
];

interface StepEssentialProps {
  selectedConditions: string[];
  onConditionsChange: (conditions: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepEssential = ({ selectedConditions, onConditionsChange, onNext, onBack }: StepEssentialProps) => {
  const toggleCondition = (title: string) => {
    if (selectedConditions.includes(title)) {
      onConditionsChange(selectedConditions.filter((c) => c !== title));
    } else if (selectedConditions.length < 3) {
      onConditionsChange([...selectedConditions, title]);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <OnboardingHeader title="중요한 조건 선택" onBack={onBack} />
      <StepIndicator currentStep={1} />

      <div className="flex-1 overflow-y-auto px-5 pt-4">
        <h1 className="text-xl font-bold text-foreground">
          작업 공간을 고를 때<br />중요한 점은?
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">1개~3개 선택 가능</p>

        <div className="mt-5 flex flex-col gap-3 pb-4">
          {CONDITIONS.map((condition) => (
            <ConditionCard
              key={condition.title}
              icon={condition.icon}
              title={condition.title}
              description={condition.description}
              selected={selectedConditions.includes(condition.title)}
              onToggle={() => toggleCondition(condition.title)}
            />
          ))}
        </div>
      </div>

      <BottomButton
        label="다음"
        disabled={selectedConditions.length === 0}
        onClick={onNext}
      />
    </div>
  );
};

export default StepEssential;
