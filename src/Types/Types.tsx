export type Product = {
  avatar: string;
  description: string;
  id: string;
  name: string;
  price: Number;
  rating: Object;
  createdAt: Date;
  category: string;
  developerEmail: string;
};
export type Category = {
  createdAt: Date;
  id: string;
  name: string;
};

export type Nav = {
  navigate: (value: string, params?: Object) => void;
  addListener?: any;
  goBack: () => void;
};
