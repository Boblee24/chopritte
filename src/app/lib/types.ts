export interface Ingredient {
  name: string;
  image: string;
}


export interface Foods {
  id: string;
  name: string;
  image: string;
  Ingredient: Ingredient[];
  person_name: string;
  person_image: string;
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