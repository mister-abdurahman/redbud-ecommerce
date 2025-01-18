export interface ICartDisplay {
  img_url: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IBrand {
  id: number;
  name: string;
  description: string;
}

export interface IOrder {
  id?: number;
  created_at?: string;
  user_id: number;
  status: boolean;
  shipping_address: string;
  total_amount: number;
}
export interface IOrderItem {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
}

export interface ICart {
  img_url: string;
  name: string;
  price: number;
  id: number;
  quantity: number;
  status?: boolean;
  product_id?: number;
  user_id?: number;
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

export interface IAvailableLocation {
  state: string;
  locations: {
    address: string;
    price: number;
  }[];
}

export interface IProfile {
  id: string;
  email: string;
  state: string;
  city: string;
  country: string;
  first_name: string;
  last_name: string;
  street_address: string;
  phone_number: number;
}
