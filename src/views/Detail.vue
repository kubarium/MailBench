<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Recipients show={this.state.recipients} toggleModalView={this.toggleModalView} />
    <Variables show={this.state.variables} toggleModalView={this.toggleModalView} />
    <!-- <modal view="Settings" /> -->

    <!-- <Branding toggleModalView={this.toggleModalView} /> -->

  </div>
</template>
<script>
import Recipients from "@/components/Recipients.vue";
import Variables from "@/components/Variables.vue";
export default {
  components: {
    Recipients,
    Variables
  },
  updated() {
    console.log("feeble");
  },
  watch: {
    $route: (to, from) => {
      console.log(to, from);
      /* if (this.$route.params === "") {
        console.log("Smarten up");
        this.$route.push("home");
      } */
    }
  }
};
</script>
