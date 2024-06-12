<template>
  <FlexBox dir="column" items="center" content="center" :grow="true" gap-y="4">
    <slot></slot>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
</script>