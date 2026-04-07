import { useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import BottomTabBar from "@/components/BottomTabBar";

const BEST_CAFES = [
  {
    name: "카페 타센",
    category: "카페",
    image: "/images/result_best_01.jpg",
    location: "서울 서초구 서초동",
    badges: ["운영자Pick", "콘센트넉넉"],
  },
  {
    name: "인포메이션카페",
    category: "카페",
    image: "/images/result_best_02.jpg",
    location: "서울 서초구 서초동",
    badges: ["낮은조도"],
  },
  {
    name: "스티머스 팩토리샵",
    category: "카페",
    image: "/images/result_best_03.jpg",
    location: "서울 서초구 서초동",
    badges: ["커피맛집"],
  },
  {
    name: "밤부 베이커리&브루잉...",
    category: "카페",
    image: "/images/result_best_04.jpg",
    location: "서울 서초구 서초동",
    badges: ["통창뷰"],
  },
];

const Result = () => {
  const bestSectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bestSectionRef.current && scrollContainerRef.current) {
      const offset = bestSectionRef.current.offsetTop - 56;
      scrollContainerRef.current.scrollTop = offset;
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="relative flex h-[844px] w-full max-w-[390px] flex-col overflow-hidden rounded-3xl bg-background shadow-2xl">
        {/* GNB - Fixed */}
        <div className="sticky top-0 left-0 right-0 z-50 flex h-[56px] items-center justify-between bg-background px-[16px] border-b border-[#E1E2E4]">
            <img
              src="/images/logo_black.png"
              alt="Logo"
              className="h-[24px] object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <button className="flex h-[32px] w-[32px] items-center justify-center">
              <img
                src="/images/button_search.png"
                alt="Search"
                className="h-[24px] w-[24px] object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const icon = document.createElement('span');
                    icon.innerHTML = '🔍';
                    parent.appendChild(icon);
                  }
                }}
              />
            </button>
        </div>

        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
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

          {/* Region Dropdown Button */}
          <div className="mt-[16px] ml-[16px]">
            <button className="flex items-center gap-[6px] rounded-[6px] border border-[#E1E2E4] px-[14px] py-[8px] text-[13px] font-medium text-foreground">
              서울시 서초구 외 3
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Best Recommendation Section */}
          <div ref={bestSectionRef} className="mt-[24px] px-[16px]">
            <h2 className="text-[18px] font-bold text-foreground">희설님 베스트 추천 공간</h2>
            <p className="mt-[4px] text-[13px] text-muted-foreground">
              선택하신 정보를 바탕으로 가장 추천하는 곳이에요
            </p>

            <div className="mt-[16px] grid grid-cols-2 gap-x-[12px] gap-y-[32px]">
              {BEST_CAFES.map((cafe) => (
                <div key={cafe.name}>
                  <div className="relative w-full overflow-hidden rounded-[6px]">
                    <img
                      src={cafe.image}
                      alt={cafe.name}
                      className="h-[232px] w-full object-cover"
                    />
                    <button className="absolute right-[10px] top-[10px] h-[24px] w-[24px]">
                      <img src="/images/button_like.png" alt="좋아요" className="h-full w-full" />
                    </button>
                  </div>
                  <div className="mt-[8px]">
                    <p className="text-[14px] text-foreground">
                      <span className="font-bold">{cafe.name}</span>
                      {cafe.category && <span className="ml-[4px] text-[12px] font-normal text-muted-foreground">{cafe.category}</span>}
                    </p>
                    <p className="mt-[2px] text-[12px] text-muted-foreground">{cafe.location}</p>
                    <div className="mt-[6px] flex flex-wrap gap-[4px]">
                      {cafe.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-[4px] px-[6px] py-[2px] text-[11px] font-medium"
                          style={{ backgroundColor: '#F4F4F5', color: '#70737C' }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More Button */}
            <button className="mt-[16px] mb-[16px] flex h-[48px] w-full items-center justify-center gap-[6px] rounded-[8px] border border-[#E1E2E4] text-[14px] font-medium text-foreground">
              더 보기
              <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <BottomTabBar activeTab="홈" />
      </div>
    </div>
  );
};

export default Result;
