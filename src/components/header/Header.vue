<template>
  <Toolbar>
    <template #start>Battery: {{ levelPercent }} | FPS: {{ fps }} | Coords: {{ coords.latitude }}, {{ coords.longitude }}</template>
    <template #center></template>
    <template #end>
      <Button outlined :icon="`pi pi-${themeIcon}`" @click="theme.toggleTheme" class="mr-2" />
    </template>
  </Toolbar>
</template>

<script lang="ts" setup>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import { useThemeStore } from "../../stores";
import { computed } from "vue";
import { useBattery, useFps, useGeolocation } from '@vueuse/core'

const { level } = useBattery();
const fps = useFps({ every: 50});
const { coords } = useGeolocation({ enableHighAccuracy: true });
const theme = useThemeStore();
const themeIcon = computed(() => theme.isDark ? 'moon' : 'sun');
const levelPercent = computed(() => Math.round(level.value * 100) + '%');
</script>