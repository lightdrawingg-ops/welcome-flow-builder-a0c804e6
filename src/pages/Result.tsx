const BEST_CAFES = [
  {
    name: "카페 마치",
    image: "/images/result_best_01.jpg",
    location: "서울 성동구 성수동",
    badges: ["넓은 공간", "콘센트"],
  },
  {
    name: "어반플랜트",
    image: "/images/result_best_02.jpg",
    location: "서울 마포구 연남동",
    badges: ["역세권", "분위기"],
  },
  {
    name: "스터디엔커피",
    image: "/images/result_best_03.jpg",
    location: "서울 강남구 역삼동",
    badges: ["콘센트", "좌석"],
  },
  {
    name: "하이브러리",
    image: "/images/result_best_04.jpg",
    location: "서울 서초구 방배동",
    badges: ["통창뷰", "역세권"],
  },
];

const Result = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-3xl bg-background shadow-2xl">
        <div className="h-full overflow-y-auto">
          {/* Hero Banner */}
          <div className="px-[16px] pt-[16px]">
            <div className="relative w-full overflow-hidden rounded-[10px]" style={{ height: 200 }}>
              <img
                src="/images/hero_01.jpg"
                alt="카공과 산책을 함께 즐길 수 있는 곳들"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-[20px]">
                <h1 className="text-[20px] font-bold leading-tight text-primary-foreground">
                  카공과 산책을{"\n"}함께 즐길 수 있는 곳들
                </h1>
                <p className="mt-[6px] text-[13px] text-primary-foreground/80">
                  선설님의 기 취향리스트 확인
                </p>
              </div>
            </div>
          </div>

          {/* Best Recommendation Section */}
          <div className="mt-[28px]">
            <div className="flex items-center justify-between px-[20px]">
              <h2 className="text-[18px] font-bold text-foreground">히설님 베스트 추천 공간</h2>
              <button className="text-[13px] text-muted-foreground">전체보기</button>
            </div>

            <div className="mt-[14px] flex gap-[10px] overflow-x-auto px-[20px] pb-[20px] [&::-webkit-scrollbar]:hidden">
              {BEST_CAFES.map((cafe) => (
                <div key={cafe.name} className="w-[156px] shrink-0">
                  <div className="relative h-[180px] w-full overflow-hidden rounded-[6px]">
                    <img
                      src={cafe.image}
                      alt={cafe.name}
                      className="h-full w-full object-cover"
                    />
                    <button className="absolute right-[10px] top-[10px] h-[24px] w-[24px]">
                      <img src="/images/button_like.png" alt="좋아요" className="h-full w-full" />
                    </button>
                  </div>
                  <div className="mt-[8px]">
                    <p className="text-[14px] font-bold text-foreground">{cafe.name}</p>
                    <p className="mt-[2px] text-[12px] text-muted-foreground">{cafe.location}</p>
                    <div className="mt-[6px] flex flex-wrap gap-[4px]">
                      {cafe.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-[4px] bg-secondary px-[6px] py-[2px] text-[11px] font-medium text-muted-foreground"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
