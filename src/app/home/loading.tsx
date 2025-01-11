import { HomeHerosSkeleton, PopularCategorySkeleton } from "../ui/skeleton"

const Loading = () => {
    return (
        <div>
            <HomeHerosSkeleton/>
            <PopularCategorySkeleton/>
        </div>
    )
}

export default Loading