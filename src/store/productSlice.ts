import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import image from "assets/images/eee.jpg";

export interface Product {
  id: number;
  title: string;
  description: string;
  src: any;
  isLike: boolean;
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
      src: image,
      isLike: false,
    },
		{
      id: 2,
      title: "Dry fruit apicote 2",
      description: "nice product",
      src: image,
      isLike: false,
    },
		{
      id: 3,
      title: "Dry fruit apicote 3",
      description: "nice product",
      src: image,
      isLike: false,
    },
		{
      id: 4,
      title: "Dry fruit apicote 4",
      description: "nice product",
      src: image,
      isLike: false,
    },
		{
      id: 5,
      title: "Dry fruit apicote 5",
      description: "nice product",
      src: image,
      isLike: false,
    },
		{
      id: 6,
      title: "Dry fruit apicote 6",
      description: "nice product",
      src: image,
      isLike: false,
    },

  ],
};

export const selectLikedProductCount = createSelector(
  (state: { products: { products: Product[] } }) => state.products.products,
  products => products.filter(product => product.isLike).length
);

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
  },
});

export const { toggleLike } = productSlice.actions;
export default productSlice.reducer;
