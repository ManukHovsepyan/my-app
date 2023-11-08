import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import image from "assets/images/eee.jpg";
import image1 from "assets/images/nkar1.jpg";

export interface Product {
  id: number;
  title: string;
  description: string;
  src: any;
  isLike: boolean;
  price: number,
}

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      title: "Dry fruit apicote 1",
      description: "nice product 123123",
      src: image1,
      isLike: false,
      price: 3000,
    },
		{
      id: 2,
      title: "Dry fruit apicote 2",
      description: "nice product",
      src: image1,
      isLike: false,
      price: 3500,
    },
		{
      id: 3,
      title: "Dry fruit apicote 3",
      description: "nice product",
      src: image1,
      isLike: false,
      price: 4000,
    },
		{
      id: 4,
      title: "Dry fruit apicote 4",
      description: "nice product",
      src: image,
      isLike: false,
      price: 4500,
    },
		{
      id: 5,
      title: "Dry fruit apicote 5",
      description: "nice product",
      src: image,
      isLike: false,
      price: 5000,
    },
		{
      id: 6,
      title: "Dry fruit apicote 6",
      description: "nice product",
      src: image,
      isLike: false,
      price: 3800,
    },

  ],
};

export const selectLikedProductCount = createSelector(
  (state: { products: { products: Product[] } }) => state.products.products,
  products => products.filter(product => product.isLike).length
);

export const selectLikedProducts = createSelector(
  (state: {products: {products: Product[]}}) => state.products.products,
  products => products.filter(product => product.isLike)
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingProduct = state.products.find(product => product.id === productId);
      if (existingProduct) {
        existingProduct.isLike = !existingProduct.isLike;
      }
    },
    getLikedProducts: (state) => {
      const products = state.products.filter(product => product.isLike)
      console.log(products)
    }
  },
});

export const { toggleLike, getLikedProducts } = productSlice.actions;
export default productSlice.reducer;
