import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({ expanded: useLocalStorage("sidebar-expanded", "true") }),
  getters: {},
  actions: {
    setExpanded(value: boolean) {
      this.expanded = value;
    },
    toggleExpanded() {
      this.expanded = !this.expanded;
    },
  },
});
