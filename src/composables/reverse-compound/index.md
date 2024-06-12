# ReverseCompound

Provides functionality to calculate compound interest rate base off start and end values and a time frame.

## Usage

```typescript
import { useReverseCompound } from './composables';

const {
  startValue,
  endValue,
  compoundRate,
} = useReverseCompound();
```

### Configuration (Optional)

Optional configuration object that can be passed to the `useCompound` function.

```typescript
type ReverseCompoundConfig = Partial<{
  startValue: number;
  endValue: number;
  years: number;
  precision: number;
}>;
```

### Return Value

Returns an object with the following properties:

```typescript
interface ReverseCompound {
  startValue: Ref<number>;
  endValue: Ref<number>;
  years: Ref<number>;
  precision: Ref<number>;
  compoundRate: ComputedRef<number>;
  compoundRatePercentage: ComputedRef<string>;
}
```

## Reactive Properties

- `startValue`: The initial value.
- `endValue`: The final value.
- `years`: The number of years between start and end values.

## Calculated Properties

- `compoundRate`: The calculated compound rate.
- `compoundRatePercentage`: The calculated compound rate as a percentage value.

## Example

### Template

```html
<template>
  <input type="number" name="startValue" v-model="startValue" />
  <input type="number" name="endValue" v-model="endValue" />
  <input type="number" name="years" v-model="years" />
  <div>
    <span class="text-sm mb-2">Compound Rate</span>
    <span class="text-xl text-primary">{{ compoundRate }} ({{compoundRatePercentage}}%)</span>
  </div>
</template>
```

### Script

```typescript
<script setup lang="ts">
import { useReverseCompound } from "../../composables/revers-compound";

const {
  startValue,
  endValue,
  years,
  precision,
  compoundRate,
  compoundRatePercentage
} = useReverseCompound();
</script>
```
