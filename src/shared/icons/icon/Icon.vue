<template>
  <component :is="dynamicComponent" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, defineProps, computed } from "vue";

interface Props {
  name: string;
}
const props = defineProps<Props>();

const name = computed(
  () => props.name.charAt(0).toUpperCase() + props.name.slice(1)
);

const dynamicComponent = defineAsyncComponent(
  () => import(`../${props.name}/${name.value}.vue`)
);
</script>
