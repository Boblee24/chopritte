const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const HomeHeroSkeleton = () => {
  return (
    <div
      className={`${shimmer} relative mb-4 h-[254px] w-[280px] flex-nowrap flex-shrink-0 rounded-md bg-gray-100 overflow-hidden`}
    >
      <div className="h-[180px] w-full rounded-md bg-gray-200 " />
      <div className="flex p-2">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-auto h-4 w-20 rounded-md bg-gray-200" />
      </div>
      <div className="flex p-2">
        <div className="h-5 w-5 rounded-full bg-gray-200" />
        <div className="ml-auto h-7 w-7 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};
export function MenuHerosSkeleton() {
  return (
    <div className="flex justify-between gap-3 overflow-hidden px-6">
      <HomeHeroSkeleton />
      <HomeHeroSkeleton />
      <HomeHeroSkeleton />
    </div>
  );
}
export function AllFoods () {
  return (
    <div className="flex flex-col justify-between gap-3 overflow-hidden px-6">
      <HomeHeroSkeleton />
      <HomeHeroSkeleton />
      <HomeHeroSkeleton />
    </div>
  );
}
export const PopularCategorySkeleton = () => {
  return (
    <div
      className={` ${shimmer} relative w-[150px] h-[231px] flex-shrink-0 flex flex-col items-center justify-between bg-gray-200 shadow-sm overflow-hidden`}
    >
      <div className="w-[110px] h-[110px] bg-gray-300 rounded-full"></div>

      <div className="h-4 w-[60%] bg-gray-300 rounded"></div>

      <div className="flex w-full justify-between px-4">
        <div className="h-4 w-[40px] bg-gray-300 rounded" />
        <div className="h-4 w-[40px] bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export const PopularCategoriesSkeleton = () => {
  return (
    <div className="flex overflow-hidden gap-4 px-6">
      <PopularCategorySkeleton />
      <PopularCategorySkeleton />
      <PopularCategorySkeleton />
    </div>
  );
};
