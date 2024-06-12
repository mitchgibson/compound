<template>
  <Toolbar>
    <template #start>Battery: {{ levelPercent }}</template>
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
import { useBattery } from '@vueuse/core'

const { level } = useBattery();
const theme = useThemeStore();
const themeIcon = computed(() => theme.isDark ? 'moon' : 'sun');
const levelPercent = computed(() => Math.round(level.value * 100) + '%');
</script>