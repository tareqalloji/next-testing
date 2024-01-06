// Order Type
export type Order = {
  id: number;
  user_id: number;
  product_id: number;
  status: "Done" | "InProgress";
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
  };
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
    comments: number;
    rate: number;
    created_at: string;
    updated_at: string;
  };
};
// Product Type
export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  comments: number;
  rate: number;
  created_at: string;
  updated_at: string;
};

// Product Details Type
export type ProductDetails = {
  id: number;
  title: string;
  description: string;
  image: string;
  rate: number;
  created_at: string;
  updated_at: string;
  comments: Comments[];
};

// Comments Type
export type Comments = {
  id: number;
  user_id: number;
  product_id: number;
  content: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
  };
};
