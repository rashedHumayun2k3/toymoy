// app.state.ts
import { ProductsState } from './products/products.reducer';

// Define the global state interface
export interface AppState {
  products: ProductsState;
}
