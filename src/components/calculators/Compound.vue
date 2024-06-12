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
import { useCompound } from "../../composables/compound

const {
  initialValue,
  compoundRate,
  annualContribution,
  years,
  yearlyValueTable,
  finalValue,
} = useCompound();
</script>
