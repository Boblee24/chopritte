export interface ingredient {
  name: string;
  image: string;
  mass: number
}
export interface about{
  fats: number;
  calories: number;
  carbs: number;
  vitamins: number;
  description:string;
}

export interface CartState {
  cart: Foods[];
  addToCart: (food: Foods) => void;
  removeFromCart: (foodId: string) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
  clearCart: () => void;
}

export interface FoodCartItem {
  id: string;
}

export interface Foods {
  id: string;
  name: string;
  image: string;
  ingredients: ingredient[];
  about: about;
  price: number;
  person_name: string;
  person_image: string;
  quantity: number;
  rating: number;
}
export type mainFood = {
    id: string,
    name: string,
    image: string,
    person_name: string,
    person_image: string,
    rating: number
}

export const heroSettings = {
    // dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    centerMode:true,
    centerPadding : "0px 5px 0px 0px ",
}