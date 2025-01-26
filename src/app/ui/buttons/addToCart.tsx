import { useCartStore } from "@/app/store/cartStore"

const AddToCart = ({foodId} : {foodId: string}) => {
    const {addToCart} = useCartStore((state) => ({
        addToCart: state.addToCart
    }))
    return (
        <div>
            
        </div>
    )
}

export default AddToCart