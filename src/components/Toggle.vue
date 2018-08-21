<template>
  <span class="icon is-pulled-right">
    <font-awesome-icon :icon="['fas',toggled ? 'angle-down':'angle-right']" />
  </span>
</template>
<script>
export default {
  props: ["toggled"]
};
</script>
