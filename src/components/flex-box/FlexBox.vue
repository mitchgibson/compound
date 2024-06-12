<template>
  <div class="flex" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dir?: "row" | "column";
    items?: "start" | "center" | "end" | "stretch" | "baseline" | "evenly" | "between" | "around";
    content?: "start" | "center" | "end" | "between" | "around" | "evenly";
    gapX?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    gapY?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    grow?: boolean;
    wrap?: boolean;
    class?: string;
  }>(),
  {
    dir: "column",
    items: "center",
    content: "center",
  }
);

const classes = [
  `flex-${props.dir ?? "column"}`,
  `align-items-${props.items ?? "center"}`,
  `justify-content-${props.content ?? "center"}`,
  props.gapX && `column-gap-${props.gapX}`,
  props.gapY && `row-gap-${props.gapY}`,
  props.gap && `gap-${props.gap}`,
  props.class && props.class,
  props.grow && "flex-grow-1",
  props.wrap && "flex-wrap max-w-full",
]
  .filter(Boolean)
  .join(" ");
</script>
