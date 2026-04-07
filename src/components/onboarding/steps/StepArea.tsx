import { useState, RefObject } from "react";
import { ChevronDown, ChevronRight, Check, RotateCcw, X } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerPortal, DrawerOverlay } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import OnboardingHeader from "../OnboardingHeader";
import StepIndicator from "../StepIndicator";
import BottomButton from "../BottomButton";

const REGIONS: Record<string, string[]> = {
  서울: ["서울 전체", "서촌/북촌/종로", "망원/합정/마포", "연남/연희/서대문", "강남/역삼/삼성", "서초/방배/반포", "성수/건대/성동", "여의도/영등포/당산", "송파/잠실/강동", "이태원/한남/용산", "홍대/신촌/마포"],
  성남: ["성남 전체", "분당/판교/정자", "수정/신흥/태평", "중원/성남역/모란"],
  파주: ["파주 전체", "운정/목동동", "금촌/금릉", "교하/문발"],
  부산: ["부산 전체", "해운대/마린시티/송정", "수영/광안리/민락", "서면/부산진/전포", "동래/온천/사직", "경성대/대연/남구"],
  인천: ["인천 전체", "미추홀/숭의/주안", "연수/송도/옥련", "남동/구월/간석", "부평/삼산/갈산"],
  대전: ["대전 전체", "유성/봉명/궁동", "둔산/탄방/서구", "은행/대흥/중구", "대덕/신탄진/읍내"],
};

interface StepAreaProps {
  selectedAreas: string[];
  onAreasChange: (areas: string[]) => void;
  onNext: () => void;
  containerRef?: RefObject<HTMLDivElement>;
}

const StepArea = ({ selectedAreas, onAreasChange, onNext, containerRef }: StepAreaProps) => {
  const [activeRegion, setActiveRegion] = useState("서울");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const subAreas = REGIONS[activeRegion] || [];

  const toggleSubArea = (area: string) => {
    const fullArea = `${activeRegion} ${area}`;
    if (selectedAreas.includes(fullArea)) {
      onAreasChange(selectedAreas.filter((a) => a !== fullArea));
    } else {
      onAreasChange([...selectedAreas, fullArea]);
    }
  };

  const handleReset = () => {
    onAreasChange([]);
  };

  const handleDrawerNext = () => {
    setDrawerOpen(false);
    onNext();
  };

  return (
    <div className="flex h-full flex-col">
      <OnboardingHeader title="지역 선택" onClose={() => {}} />
      <StepIndicator currentStep={0} />

      <div className="flex-1 px-5 pt-4">
        <h1 className="text-xl font-bold text-foreground">
          주로 작업하는 지역을<br />알려주세요
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          선택한 지역 기반으로 작업 공간을 추천해 드려요
        </p>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} disablePreventScroll>
          <DrawerTrigger asChild>
            <button className="mt-6 flex w-full items-center justify-between rounded-xl border border-input bg-card px-4 py-4">
              <span className={cn(
                "text-sm",
                selectedAreas.length > 0 ? "text-foreground font-medium" : "text-muted-foreground"
              )}>
                {selectedAreas.length > 0
                  ? `${selectedAreas.length}개 지역 선택됨`
                  : "지역 선택"}
              </span>
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </button>
          </DrawerTrigger>

          <DrawerPortal container={containerRef?.current}>
            <DrawerOverlay className="absolute inset-0 z-50 bg-black/80" />
            <div className="absolute inset-x-0 bottom-0 z-50 max-h-[65vh] mx-auto max-w-[390px] overflow-hidden flex flex-col rounded-t-[10px] border bg-background [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
              <div className="relative flex !h-[52px] !min-h-[52px] items-center justify-center px-[20px] border-b-[1px] border-border">
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="absolute left-[20px] flex h-[32px] w-[32px] items-center justify-center text-foreground"
                >
                  <X className="h-[20px] w-[20px]" />
                </button>
                <span className="text-[18px] font-bold text-foreground">지역 선택</span>
              </div>

              <div className="flex min-h-0 flex-1 overflow-hidden">
                <div className="w-[132px] shrink-0 overflow-y-auto border-r border-border bg-secondary [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                  {Object.keys(REGIONS).map((region) => (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={cn(
                        "flex w-full items-center gap-[4px] pl-[24px] pr-[16px] text-left text-[16px] h-[54px] transition-colors",
                        activeRegion === region
                          ? "bg-background font-bold text-foreground"
                          : "bg-secondary font-medium text-muted-foreground"
                      )}
                    >
                      {region}
                      {activeRegion === region && (
                        <ChevronRight className="h-4 w-4 text-foreground" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="w-[258px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {subAreas.map((area) => {
                    const fullArea = `${activeRegion} ${area}`;
                    const isSelected = selectedAreas.includes(fullArea);
                    return (
                      <button
                        key={area}
                        onClick={() => toggleSubArea(area)}
                        className="flex w-full items-center justify-between pl-[20px] pr-[16px] text-left h-[54px]"
                      >
                        <span
                          className={cn(
                            "text-[16px]",
                            isSelected ? "font-bold text-foreground" : "font-medium text-muted-foreground"
                          )}
                        >
                          {area}
                        </span>
                        {isSelected && (
                          <Check className="h-6 w-6" style={{ color: "#1A75FF" }} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 px-5 pb-8 pt-4 border-t border-border">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 rounded-xl border border-input px-4 py-3.5 text-sm font-medium text-muted-foreground"
                >
                  <RotateCcw className="h-4 w-4" />
                  초기화
                </button>
                <button
                  onClick={handleDrawerNext}
                  disabled={selectedAreas.length === 0}
                  className={cn(
                    "flex-1 rounded-xl py-3.5 text-sm font-bold transition-colors",
                    selectedAreas.length > 0
                      ? "bg-accent text-accent-foreground"
                      : "bg-onboarding-disabled-bg text-onboarding-disabled-text cursor-not-allowed"
                  )}
                >
                  다음
                </button>
              </div>
            </div>
          </DrawerPortal>
        </Drawer>

        {selectedAreas.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      <BottomButton
        label="다음"
        disabled={selectedAreas.length === 0}
        onClick={onNext}
      />
    </div>
  );
};

export default StepArea;
