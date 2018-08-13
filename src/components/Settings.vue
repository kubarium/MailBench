<template>
  <modal :title="this.$options._componentTag">
    <div slot="body">
      <div class="box">

        <div class="field">
          <label class="label has-text-info has-background-light" @click="toggle('litmus')" @toggle="toggle('litmus')">Litmus Checklist
            <toggle :toggled="section==='litmus'" />
          </label>
          <div class="field has-addons" v-show="section==='litmus'">

            <p class="control is-expanded">
              <input class="input" type="email" placeholder="Your Litmus test address to create a new Checklist" v-model="settings.litmus">
            </p>
            <p class="control">
              <a class="button is-static">
                @litmustest.com
              </a>
            </p>
            <p class="control">
              <a class="button is-info" href="//litmus.com/settings" target="_blank">
                <span class="icon is-small">
                  <i class="fas fa-question"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="field">
          <label class="label has-text-info has-background-light" @click="toggle('server')" @toggle="toggle('server')">Mail Server
            <toggle :toggled="section==='server'" />
          </label>
          <div v-show="section==='server'">

            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">
                  Host/Port
                </label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="mail.domain.com" v-model="settings.mail.host">
                    <span class="icon is-small is-left">
                      <i class="fas fa-server"></i>
                    </span>
                  </p>
                </div>
                <div class="field is-narrow">
                  <p class="control has-icons-left">
                    <input class="input" type="number" min="0" placeholder="22" v-model="settings.mail.port">
                    <span class="icon is-small is-left">
                      <i class="fas fa-globe"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">
                  Encryption
                </label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control is-expanded">
                    <div class="select is-fullwidth">
                      <select @change="$store.commit('changeEncryption',$event.target.value)">
                        <option value="22">Unencrpted</option>
                        <option value="465">SSL/TLS</option>
                        <option value="587">STARTTLS</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field is-vertically-centered is-narrow">
                  <div class="control is-expanded">
                    <label class="checkbox is-fullwidth">
                      Authenticate
                      <input type="checkbox" v-model="settings.mail.auth" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">
                  Credentials
                </label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Username/Email" v-model="settings.mail.username">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="settings.mail.password">
                    <span class=" icon is-small is-left">
                      <i class="fas fa-key"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">

        <div class="field">
          <label class="label has-text-info has-background-light" @click="toggle('email')" @toggle="toggle('email')">Email Variables
            <toggle :toggled="section==='email'" />
          </label>
          <div class="field has-addons" v-show="section==='email'">

            <p class="control is-expanded">
              <input class="input" type="email" placeholder="Your Litmus test address to create a new Checklist" v-model="settings.litmus">
            </p>
            <p class="control">
              <a class="button is-static">
                @litmustest.com
              </a>
            </p>
            <p class="control">
              <a class="button is-info" href="//litmus.com/settings" target="_blank">
                <span class="icon is-small">
                  <i class="fas fa-question"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";
import Toggle from "@/components/Toggle";
import { mapState } from "vuex";

export default {
  name: "Settings",
  mounted() {
    ["change", "keyup"].forEach(event =>
      this.$el.addEventListener(event, () => (this.hasUnsavedChanges = true))
    );
  },
  data() {
    return {
      section: "litmus",
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

<style lang="scss" scoped>
input[type="number"] {
}
.is-vertically-centered {
  display: flex;
  align-items: center;
}
.is-narrow {
  width: 110px;
  flex-grow: 0;
}
label:not(:last-child) {
  padding: 0.25rem;
  border-radius: 3px;
  cursor: pointer;
}
</style>

