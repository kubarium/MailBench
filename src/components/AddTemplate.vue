<template>
    <modal title="Add New Template" parent="addTemplate">
        <div slot="body">asdasd</div>
    </modal>
</template>

<script>
import Modal from "@/components/Modal";
import Toggle from "@/components/Toggle";

export default {
  name: "AddTemplate",
  mounted() {
    ["change", "keyup"].forEach(event => {
      this.$el.addEventListener(event, () => (this.hasUnsavedChanges = true));
    });
  },
  data() {
    return {
      section: "recipients",
      hasUnsavedChanges: false
    };
  },
  methods: {
    toggle(section) {
      this.section = section;
    },
    saveChanges() {
      this.hasUnsavedChanges = false;
      this.$store.commit("updateSettings", this.settings);
    }
  },
  computed: {
    settings: {
      get() {
        return this.$store.state.settings;
      }
    }
  },
  components: {
    Modal,
    Toggle
  }
};
</script>
