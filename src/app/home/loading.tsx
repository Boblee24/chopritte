import { HomeHerosSkeleton, PopularCategoriesSkeleton } from "../ui/skeleton"

const Loading = () => {
    return (
        <div>
            <HomeHerosSkeleton/>
            <PopularCategoriesSkeleton/>
        </div>
    )
}

export default Loading