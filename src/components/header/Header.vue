<template>
  <Toolbar>
    <template #start></template>
    <template #center></template>
    <template #end>
      <Button outlined :icon="`pi pi-${themeIcon}`" @click="theme.toggleTheme" class="mr-2" />
    </template>
  </Toolbar>
</template>

<script lang="ts" setup>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import { useThemeStore } from "../../stores/ThemeStore";
import { computed } from "vue";

const theme = useThemeStore();
const themeIcon = computed(() => theme.isDark ? 'moon' : 'sun');
</script>