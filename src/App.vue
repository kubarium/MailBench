<template>
  <main>
    <div class="container">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item has-text-link">

            Mailbench

          </router-link>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <button class="button" @click="$store.commit('toggleModal',{modal:'settings',toggle:true})">
                    <span class="icon">
                      <i class="fas fa-cogs"></i>
                    </span>
                    <span>
                      Settings
                    </span>
                  </button>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="section">
        <router-view></router-view>
      </div>
    </div>
    <Settings/>
    <!-- <Preview /> -->
    <!-- <Grid>
          <Row>
            <Col md={12} sm={12} lg={12}>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12} sm={12} lg={12}>
            </Col>
          </Row>
        </Grid> -->
  </main>
</template>
<script>
import Settings from "@/components/Settings.vue";

export default {
  components: {
    Settings
  }
};
</script>
