import { defineStore } from "pinia";

export default defineStore("StatusStore", {
  state: () => ({
    isLoading: false,
  }),
  getters: {},
  actions: {
    updateLoading(status) {
      this.isLoading = status;
    },
  },
});
