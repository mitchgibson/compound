import { computed, ComputedRef, Ref, ref } from "vue";

export type CompoundConfig = Partial<{
  initialValue: number;
  compoundRate: number;
  annualContribution: number;
  years: number;
}>;

export interface Compound {
  initialValue: Ref<number>;
  compoundRate: Ref<number>;
  annualContribution: Ref<number>;
  years: Ref<number>;
  finalValue: ComputedRef<number>;
  finalValueUSD: ComputedRef<string>;
  yearlyValueTable: ComputedRef<{ year: number; value: string }[]>;
}

export function useCompound(config: CompoundConfig = {}): Compound {

  const initialValue = ref<number>(config.initialValue || 10000);
  const compoundRate = ref<number>(config.compoundRate || 7);
  const annualContribution = ref<number>(config.annualContribution || 0);
  const years = ref<number>(config.years || 10);

  const finalValueUSD = computed(() => {
    return finalValue.value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  });

  const finalValue = computed(() => {
    return (
      initialValue.value * (1 + compoundRate.value / 100) ** years.value +
      annualContribution.value * (((1 + compoundRate.value / 100) ** years.value - 1) / (compoundRate.value / 100))
    );
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
    finalValueUSD,
    finalValue,
    yearlyValueTable,
  };
}