<template>
    <modal title="Add New Template" parent="addTemplate">
        <div slot="body">

            <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">
                        From
                    </label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded has-icons-left">
                            <input class="input" type="text" placeholder="Mailbench <email@domain.com>" v-model="addTemplate.from">
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="user-tie" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">
                        Subject
                    </label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="text" placeholder="Your awesome subject line" v-model="addTemplate.subject">
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="comment" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">
                        Template
                    </label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="file is-info has-name is-fullwidth">
                            <label class="file-label">
                                <input class="file-input" type="file" @change="readTemplate">
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <font-awesome-icon icon="upload" />
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                                <span class="file-name">
                                    {{template}}
                                </span>
                            </label>
                        </div>
                        <div class="has-text-danger" v-show="binary">Oh no! Pick an HTML, PHP or another similar file type.</div>
                    </div>
                </div>
            </div>
        </div>
        <button slot="footer" class="button is-success" @click="$store.dispatch('addTemplate')" :disabled="!template">Start Previewing</button>
    </modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "AddTemplate",
  mounted() {
    ["change", "keyup"].forEach(event => {
      this.$el.addEventListener(event, () => (this.hasUnsavedChanges = true));
    });
  },
  data() {
    return {
      template: "",
      binary: false,
      hasUnsavedChanges: false
    };
  },
  methods: {
    readTemplate(event) {
      const file = event.target.files[0];

      if (!file) return;

      //const type = file.type;
      const extension = file.name.split(".")[1];

      if (["html", "htm", "php", "asp", "cfm"].includes(extension) == false) {
        this.binary = true;
        this.template = "";
      } else {
        this.binary = false;
        this.template = file.name;
      }
    },
    saveChanges() {
      this.hasUnsavedChanges = false;
      this.$store.commit("addTemplate", this.addTemplate);
    }
  },
  computed: {
    addTemplate: {
      get() {
        return this.$store.state.addTemplate;
      }
    }
  },
  components: {
    Modal
  }
};
</script>
<style lang="scss">
.box {
  /* border-style: dashed;
  border-width: 1px; */
}
</style>
