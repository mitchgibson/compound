import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { usePrimeVue } from 'primevue/config';

export const useThemeStore = defineStore('theme', () => {

  const theme = ref("aura-dark-amber");
  const isDark = ref(true);
  const PrimeVue = usePrimeVue();

  function setTheme(newTheme: "aura-dark-amber" | "aura-light-amber") {
    PrimeVue.changeTheme(theme.value, newTheme, 'theme-link');

    theme.value = newTheme;
    isDark.value = newTheme === "aura-dark-amber";
  }

  const getTheme = computed(() => theme.value);

  function toggleTheme() {
    if (theme.value === "aura-dark-amber") {
      setTheme("aura-light-amber");
    } else {
      setTheme("aura-dark-amber");
    }
  }

  return {
    getTheme,
    setTheme,
    toggleTheme,
    isDark,
  };
});