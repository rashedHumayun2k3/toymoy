export interface ProductItem {
  id: string;
  name: string;
  image: string;
  newPrice: number;
  oldPrice?: number;
  discount?: string;
  manufacturer: string;
  manufacturerLink: string;
  stars: string[];
  link: string; // Add this property
  sticker: string;
  quantity: number;
}

  