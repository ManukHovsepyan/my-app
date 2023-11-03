import { createSlice } from '@reduxjs/toolkit';
import { setLanguageInLocalStorage, getLanguageFromLocalStorage } from 'helpers/localStorageLanguage';
import i18n from 'language/i18n';

export interface AppState {
  isSidebarShow: boolean;
  language: string,
  wrapperSpace: boolean
}

const initialState: AppState = {
  isSidebarShow: false,
  language: getLanguageFromLocalStorage() || "am",
  wrapperSpace: true
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebarShow(state) {
      state.isSidebarShow = !state.isSidebarShow;
    },
    updateLanguage(state, action) {
      setLanguageInLocalStorage(action.payload);
      state.language = action.payload
      i18n.changeLanguage(action.payload)
    },
    toggleWrapperSpace(state, action) {
      state.wrapperSpace = action.payload
    }
  },
});

export const { toggleSidebarShow, updateLanguage, toggleWrapperSpace } = appSlice.actions;

export default appSlice.reducer;
