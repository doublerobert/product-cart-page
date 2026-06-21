export type ProductSchema = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  id: string;
  name: string;
  category: string;
  price: number;
};
