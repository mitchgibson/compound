# Compound

Provides functionality to calculate compound interest.

## Interface

```typescript
import { useCompound } from './composables';

const {
  initialValue,
  compoundRate,
  annualContribution,
  years,
  finalValue,
  yearlyValueTable,
} = useCompound();
```

### Configuration (Optional)

Optional configuration object that can be passed to the `useCompound` function.

```typescript
type UseCompoundConfig = Partial<{
  initialValue: number;
  compoundRate: number;
  annualContribution: number;
  years: number;
}>;
```

### Return Value

The `useCompound` function returns an object with the following properties:

```typescript
interface UseCompound {
  initialValue: Ref<number>;
  compoundRate: Ref<number>;
  annualContribution: Ref<number>;
  years: Ref<number>;
  finalValue: ComputedRef<number>;
  yearlyValueTable: ComputedRef<{ year: number; value: number }[]>;
}
```

## Reactive Properties

- `initialValue`: The initial value of the investment.
- `compoundRate`: The compound rate of the investment.
- `annualContribution`: The annual contribution to the investment.
- `years`: The number of years the investment will be held.

## Calculated Properties

- `finalValue`: The final value of the investment.
- `yearlyValueTable`: A table of the investment's value for each year.

## Example

### Template

```html
<template>
  <input type="number" name="initialValue" v-model="initialValue" />
  <input type="number" name="compoundRate" v-model="compoundRate" />
  <input type="number" name="annualContribution" v-model="annualContribution" />
  <input type="number" name="years" v-model="years" />
  <div>
    <span class="text-sm mb-2">Final Value</span>
    <span class="text-xl text-primary">{{ finalValue }}</span>
  </div>
  <div v-for="yearlyValue in yearlyValueTable" :key="yearlyValue.year">
    <span>{{ yearlyValue.year }}</span>
    <span>{{ yearlyValue.value }}</span>
  </div>
</template>
```

### Script

```typescript
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
```
