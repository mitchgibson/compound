import { computed, ComputedRef, Ref, ref } from "vue";

export type UseCompoundConfig = Partial<{
  initialValue: number;
  compoundRate: number;
  annualContribution: number;
  years: number;
}>;

export interface UseCompound {
  initialValue: Ref<number>;
  compoundRate: Ref<number>;
  annualContribution: Ref<number>;
  years: Ref<number>;
  finalValue: ComputedRef<string>;
  yearlyValueTable: ComputedRef<{ year: number; value: string }[]>;
}

/**
 * useCompound
 * @param {UseCompoundConfig} config
 * @returns 
 */
export function useCompound(config: UseCompoundConfig = {}): UseCompound {

  const initialValue = ref<number>(config.initialValue || 10000);
  const compoundRate = ref<number>(config.compoundRate || 7);
  const annualContribution = ref<number>(config.annualContribution || 0);
  const years = ref<number>(config.years || 10);

  const finalValue = computed(() => {
    return (
      initialValue.value * (1 + compoundRate.value / 100) ** years.value +
      annualContribution.value * (((1 + compoundRate.value / 100) ** years.value - 1) / (compoundRate.value / 100))
    ).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  });
  
  const yearlyValueTable = computed(() => {
    const table = [];
    let value = initialValue.value;
    for (let i = 0; i < years.value; i++) {
      // Apply the compound interest for the year
      value = value * (1 + compoundRate.value / 100);
      // Add the annual contribution at the end of the year
      value += annualContribution.value;
      table.push({
        year: i + 1,
        value: value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      });
    }
    return table;
  });

  return {
    initialValue,
    compoundRate,
    annualContribution,
    years,
    finalValue,
    yearlyValueTable,
  };
}