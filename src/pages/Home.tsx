import BottomTabBar from "@/components/BottomTabBar";

const CONDITIONS = [
  { icon: "📐", title: "넓은 공간", description: "2층 이상, 혹은 약 20인 이상 수용 가능" },
  { icon: "⚡", title: "콘센트 유무", description: "사용 가능한 콘센트 두 곳 이상" },
  { icon: "🪑", title: "편한 의자와 테이블", description: "등받이 의자 + 노트북 작업 가능한 테이블 다수" },
];

interface HomeProps {
  onStartOnboarding: () => void;
}

const Home = ({ onStartOnboarding }: HomeProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="relative flex h-[844px] w-full max-w-[390px] flex-col overflow-hidden rounded-3xl bg-background shadow-2xl">
        {/* GNB - Fixed */}
        <div className="sticky top-0 left-0 right-0 z-50 flex h-[56px] items-center justify-between bg-background px-[16px] border-b border-[#E1E2E4]">
          <img src="/images/logo_black.png" alt="Logo" className="h-[24px] object-contain" />
          <button className="flex h-[32px] w-[32px] items-center justify-center">
            <img src="/images/button_search.png" alt="Search" className="h-[24px] w-[24px] object-contain" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          {/* Hero Banner */}
          <div className="px-[16px] pt-[16px]">
            <div className="relative w-full overflow-hidden rounded-[10px]" style={{ aspectRatio: '1/1' }}>
              <img
                src="/images/hero_01.jpg"
                alt="카공과 산책을 함께 즐길 수 있는 곳들"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-[32px] left-[24px]">
                <h1 className="text-[20px] font-bold leading-tight text-primary-foreground whitespace-pre-line">
                  {"카공과 산책을\n함께 즐길 수 있는 곳들"}
                </h1>
                <p className="mt-[6px] text-[13px] text-primary-foreground/80">
                  생산성이 더 올라갈지도 몰라요
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-[24px] px-[16px]">
            <h2 className="text-[18px] font-bold text-foreground">작업 공간을 고를 때 중요한 점은?</h2>
            <p className="mt-[4px] text-[13px] text-muted-foreground">1개~3개 선택 가능</p>

            <div className="relative mt-[16px]">
              <div className="flex flex-col gap-3">
                {CONDITIONS.map((c) => (
                  <div
                    key={c.title}
                    className="flex h-[66px] w-full items-center gap-3 rounded-xl border border-[#E1E2E4] bg-card px-4 text-left"
                  >
                    <span style={{ fontSize: "20px", lineHeight: 1 }}>{c.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{c.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* White gradient overlay */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px]"
                style={{ background: "linear-gradient(to bottom, transparent, white)" }}
              />
            </div>

            <button
              onClick={onStartOnboarding}
              className="mt-[16px] mb-[80px] w-full rounded-xl py-4 text-[15px] font-bold"
              style={{ backgroundColor: "#FFF048", color: "#171717" }}
            >
              맞춤 공간 추천 받기 →
            </button>
          </div>
        </div>

        <BottomTabBar activeTab="홈" />
      </div>
    </div>
  );
};

export default Home;
