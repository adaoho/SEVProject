import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalHeader: false,
  modalBody: false,
  modalConfirmation: false,
  loading: false,
  error: {},
  drawerComment: false,
  showSessionExpiredToast: false,
  refresh: false,
  modalContact: false,
  contactName: "",
  modalShowVideo: false,
  drawerContactUsMobile: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setRefresh(state) {
      state.refresh = !state.refresh;
    },
    setModalHeader(state, action) {
      state.modalHeader = action.payload;
    },
    setDrawerContactUsMobile(state, action) {
      state.drawerContactUsMobile = action.payload;
    },
    setModalVideo(state, action) {
      state.modalShowVideo = action.payload;
    },
    setModalBody(state, action) {
      state.modalBody = action.payload;
    },
    setModalConfirmation(state, action) {
      state.modalConfirmation = action.payload;
    },
    setModalContact(state, action) {
      state.modalContact = action.payload;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setDrawerComment(state, action) {
      state.drawerComment = action.payload;
    },
    setCloseModal(state) {
      state.modalBody = false;
      state.modalHeader = false;
      state.modalConfirmation = false;
    },
    setSessionExpiredToast(state, action) {
      state.showSessionExpiredToast = action.payload;
    },
  },
});

export const {
  setDrawerContactUsMobile,
  setModalVideo,
  setModalContact,
  setRefresh,
  setSessionExpiredToast,
  setDrawerComment,
  setModalBody,
  setModalHeader,
  setModalConfirmation,
  setCloseModal,
  setLoading,
  setError,
} = mainSlice.actions;

export default mainSlice.reducer;
