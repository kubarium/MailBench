<template>
    <span class="icon is-pulled-right" @click="toggle">
        <i class="fas fa-angle-right" :class="{'fa-angle-down':toggled}"></i>
    </span>
</template>
<script>
export default {
  props: ["toggled", "section"],
  methods: {
    toggle() {
      this.$el.parentElement.dispatchEvent(new Event("toggle"));
    }
  }
};
</script>
