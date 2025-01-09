export interface ICart {
  id: number;
  quantity: number;
  name: string;
  price: number;
  img_url: string;
}

export interface IProduct {
  brand_id: number;
  category_id: number;
  description: string;
  id: number;
  img_url: string;
  name: string;
  price: number;
  reviews: IReview;
  status: boolean;
}

export interface IReview {
  coment: string;
  ratings: number;
  reviewer: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
}
export interface IBrand {
  id: number;
  name: string;
  description: string;
}

export interface IAvailableLocation {
  state: string;
  locations: {
    address: string;
    price: number;
  }[];
}
