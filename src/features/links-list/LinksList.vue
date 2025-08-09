<template>
  <ul v-if="authStore.isAuthenticated" class="space-y-2 font-medium">
    <li v-for="link in links" :key="link.id">
      <a
        :href="link.url"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <icon :name="link.icon" />
        <span :class="{ hidden: !sidebarStore.expanded }" class="ms-3">
          {{ link.name }}
        </span>
      </a>
    </li>
  </ul>
  <a
    v-else
    href="/login"
    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
  >
    <svg
      class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
      />
    </svg>
    <span
      :class="{ hidden: !sidebarStore.expanded }"
      class="flex-1 ms-3 whitespace-nowrap"
    >
      Log In
    </span>
  </a>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore, useSidebarStore } from "@/entities/index.js";
import Icon from "@/shared/icons/icon/Icon.vue";

const links = [
  { id: 1, name: "Dashboard", icon: "dashboard", url: "/" },
  { id: 2, name: "Log In", icon: "login", url: "/login" },
];

const authStore = useAuthStore();
const sidebarStore = useSidebarStore();

onMounted(() => {
  authStore.checkAuth();
});
</script>

<style></style>
