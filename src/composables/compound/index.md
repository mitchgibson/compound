# Compound

Provides functionality to calculate compound interest.

## Usage

```typescript
import { useCompound } from './composables';

const {
  initialValue,
  compoundRate,
  annualContribution,
  years,
  finalValue,
  finalValueUSD,
  yearlyValueTable,
} = useCompound();
```

### Configuration (Optional)

Optional configuration object that can be passed to the `useCompound` function.

```typescript
type CompoundConfig = Partial<{
  initialValue: number;
  compoundRate: number;
  annualContribution: number;
  years: number;
}>;
```

### Return Value

Returns an object with the following properties:

```typescript
interface Compound {
  initialValue: Ref<number>;
  compoundRate: Ref<number>;
  annualContribution: Ref<number>;
  years: Ref<number>;
  finalValue: ComputedRef<number>;
  finalValueUSD: ComputedRef<string>;
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
- `finalValueUSD`: The final value of the investment formatted as a USD currency string.
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
    <span class="text-xl text-primary">{{ finalValueUSD }}</span>
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
import { useCompound } from "../../composables/compound";

const {
  initialValue,
  compoundRate,
  annualContribution,
  years,
  yearlyValueTable,
  finalValueUSD,
} = useCompound();
</script>
```
