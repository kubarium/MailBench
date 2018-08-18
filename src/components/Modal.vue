<template>
    <div class="modal" :class="{'is-active':$store.state[parent].show}">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{title}}</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <slot name="body"></slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    <button class="button is-success" @click="$parent.saveChanges" :disabled="!$parent.$data.hasUnsavedChanges">Save Changes</button>
                </slot>
                <button class="button" @click="closeModal">Close</button>
            </footer>
        </div>
    </div>
</template>


<script>
export default {
  name: "Modal",
  props: ["title", "parent"],
  methods: {
    closeModal() {
      this.$store.commit("toggleModal", { modal: this.parent, toggle: false });
    }
  }
};
</script>
