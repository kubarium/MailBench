<template>
  <modal :title="this.$options._componentTag" parent="settings">
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
          <label class="label has-text-info has-background-light" @click="toggle('patterns')" @toggle="toggle('patterns')">Variable Patterns
            <toggle :toggled="section==='patterns'" />
          </label>
          <div class="field has-addons" v-show="section==='patterns'">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Like {*} or %*%. Use * to mark any characters between selectors" v-model="settings.pattern">
            </p>
            <p class="control">
              <button class="button is-info" @click="$store.commit('addPattern', settings.pattern)" :disabled="settings.pattern.length===0">
                <span class="icon is-small">
                  <i class="fas fa-plus"></i>
                </span>
              </button>
            </p>
          </div>
          <div class="field" v-show="section==='patterns'">
            <div class="control">
              <div class="tags">
                <span class="tag is-link" v-for="(pattern,index) in settings.patterns" :key="index">{{pattern}}
                  <button class="delete is-medium" @click="$store.commit('removePattern',index)"></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="field">
          <label class="label has-text-info has-background-light" @click="toggle('recipients')" @toggle="toggle('recipients')">Recipients
            <span class="is-size-7 has-text-dark">(Up to 3)</span>
            <toggle :toggled="section==='recipients'" />
          </label>
          <div class="field has-addons" v-show="section==='recipients'">
            <p class="control is-expanded">
              <input class="input" type="email" placeholder="Email address of the recipient" v-model="settings.recipient">
            </p>
            <p class="control">
              <button class="button is-info" @click="$store.commit('addRecipient', settings.recipient)" :disabled="settings.recipient.length===0 || settings.recipients.length>2">
                <span class="icon is-small">
                  <i class="fas fa-plus"></i>
                </span>
              </button>
            </p>
          </div>
          <div class="field" v-show="section==='recipients'">
            <div class="control">
              <div class="tags">
                <span class="tag is-link" v-for="(recipient,index) in settings.recipients" :key="index">{{recipient}}
                  <button class="delete is-medium" @click="$store.commit('removeRecipient',index)"></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";
import Toggle from "@/components/Toggle";

export default {
  name: "Settings",
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

<style lang="scss" scoped>
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
