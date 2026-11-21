export type productModel = {
  id: number;
  name: string;
  des: string;
  price: number;
  img: string;
  badge: string;
};

export type productCartModel = productModel & {
  quantity: number;
};
