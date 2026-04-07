interface Tab {
  label: string;
  activeIcon: string;
  inactiveIcon: string;
}

const TABS: Tab[] = [
  { label: "홈", activeIcon: "/images/icon_home_active.png", inactiveIcon: "/images/icon_home_inactive.png" },
  { label: "지도", activeIcon: "/images/icon_map_active.png", inactiveIcon: "/images/icon_map_inactive.png" },
  { label: "저장", activeIcon: "/images/icon_bookmark_active.png", inactiveIcon: "/images/icon_bookmark_inactive.png" },
  { label: "MY", activeIcon: "/images/icon_my_active.png", inactiveIcon: "/images/icon_my_inactive.png" },
];

interface BottomTabBarProps {
  activeTab?: string;
}

const BottomTabBar = ({ activeTab = "홈" }: BottomTabBarProps) => {
  return (
    <div
      className="flex items-center justify-around bg-background py-[4px]"
      style={{ borderTop: "1px solid #E1E2E4", height: "54px" }}
    >
      {TABS.map((tab) => {
        const isActive = tab.label === activeTab;
        return (
          <button key={tab.label} className="flex flex-col items-center justify-center gap-[2px]">
            <img
              src={isActive ? tab.activeIcon : tab.inactiveIcon}
              alt={tab.label}
              className="h-[20px] w-[20px] object-contain"
            />
            <span
              className="font-medium"
              style={{ fontSize: "11px", color: isActive ? "#171717" : "#5A5C63" }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomTabBar;
