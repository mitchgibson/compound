<template>
  <FlexBox dir="row" gap-x="4" gap-y="4" class="p-4 w-full h-10rem" :wrap="true">
    <FloatLabel>
      <InputNumber id="initialValue" v-model="initialValue" />
      <label for="initialValue">Initial Value</label>
    </FloatLabel>
    <FloatLabel>
      <InputNumber id="compoundRate" v-model="compoundRate" :min-fraction-digits="0" :max-fraction-digits="2" />
      <label for="compoundRate">Compound Rate (%)</label>
    </FloatLabel>
    <FloatLabel>
      <InputNumber id="annualContribution" v-model="annualContribution" />
      <label for="annualContribution">Annual Contribution</label>
    </FloatLabel>
    <FloatLabel>
      <InputNumber id="years" v-model="years" />
      <label for="years">Years</label>
    </FloatLabel>
  </FlexBox>
  <FlexBox dir="column" items="center" content="start" class="w-full overflow-hidden max-h-28rem">
    <DataTable :value="yearlyValueTable" class="w-4 overflow-auto">
      <Column field="year" header="Year"></Column>
      <Column field="value" header="Value"></Column>
    </DataTable>
  </FlexBox>
  <FlexBox class="w-full mb-8" dir="column" items="center">
    <span class="text-sm mb-2">Final Value</span>
    <span class="text-xl text-primary">{{ finalValue }}</span>
  </FlexBox>
</template>

<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import FlexBox from "../flex-box/FlexBox.vue";
import InputNumber from "primevue/inputnumber";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { computed, ref } from "vue";

const initialValue = ref<number>(10000);
const compoundRate = ref<number>(7);
const annualContribution = ref<number>(0);
const years = ref<number>(10);

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
</script>
