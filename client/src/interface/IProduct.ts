export interface IRating {
  count: number;
  rate: number;
}

export interface IProduct {
  description: string,
  id: number,
  price: number,
  title: string,
  image: string,
  rating: IRating;
}
