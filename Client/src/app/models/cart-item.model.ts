import {Item} from "../components/catalog/model/catalog.model";

export interface CartItem {
  id: string;
  numberOfItems: number;
  item: Item;
}