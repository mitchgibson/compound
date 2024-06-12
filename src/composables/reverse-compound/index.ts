import { computed, ComputedRef, ref, Ref } from "vue";

export type ReverseCompoundConfig = Partial<{
  startValue: number;
  endValue: number;
  years: number;
  precision: number;
}>;

export interface ReverseCompound {
  startValue: Ref<number>;
  endValue: Ref<number>;
  years: Ref<number>;
  precision: Ref<number>;
  compoundRate: ComputedRef<number>;
  compoundRatePercentage: ComputedRef<string>;
}

export function useReverseCompound(config: ReverseCompoundConfig = {}): ReverseCompound {

  const startValue = ref(config.startValue || 0);
  const endValue = ref(config.endValue || 0);
  const years = ref(config.years || 0);
  const precision = ref(config.precision || 2);

  const compoundRate = computed(() => {
    return (endValue.value / startValue.value) ** (1 / years.value) - 1;
  });

  const compoundRatePercentage = computed(() => {
    return (compoundRate.value * 100).toFixed(precision.value);
  });

  return {
    startValue,
    endValue,
    years,
    precision,
    compoundRate,
    compoundRatePercentage,
  };
}
