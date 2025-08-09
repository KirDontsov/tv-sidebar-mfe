import { defineStore } from "pinia";
import { checkAuth } from "@/shared";

export const useAuthStore = defineStore("counter", {
  state: () => ({
    isAuthenticated: false,
    checkAuthLoading: false,
  }),
  actions: {
    async checkAuth() {
      try {
        this.checkAuthLoading = true;

        const res = await checkAuth();

        this.isAuthenticated = !!res?.data?.user?.id || false;
      } catch (e) {
        console.log("e", e);
      } finally {
        this.checkAuthLoading = false;
      }
    },
  },
});
