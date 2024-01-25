import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [
    {
      albumId: "f36f1f94-56cc-43dd-83a1-1fc462a0b972",
      id: "3b9fd4e1-f2e1-4793-8aca-52f4bb460fdf",
      title: "Кадровой рост для повышению важную же.",
      url: "https://loremflickr.com/150/150/cats?lock=1209263554822144",
    },
    {
      albumId: "f36f1f94-56cc-43dd-83a1-1fc462a0b972",
      id: "60911f27-9cad-4b72-b5a2-3c283955e920",
      title: "Представляет а требует забывать эксперимент для вызывает.",
      url: "https://loremflickr.com/150/150/cats?lock=6576324923621376",
    },
  ],
};

const favoritesSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.favorites.push(action.payload);
    },
    deleteItem(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, deleteItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;

export const getFavorites = (state: any) => state.favorites.favorites;
export const getIsFavorite = (id: any) => (state: any) => {
  return Boolean(state.favorites.favorites.find((item: any) => item.id === id));
};
