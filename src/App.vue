<template>

  <main>

    <Recipients show={this.state.recipients} toggleModalView={this.toggleModalView} />
    <Variables show={this.state.variables} toggleModalView={this.toggleModalView} />
    <!-- <modal view="Settings" /> -->
    <Settings/>
    <!-- <Branding toggleModalView={this.toggleModalView} /> -->
    <Templates />
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
import Modal from "@/components/Modal.vue";
import Recipients from "@/components/Recipients.vue";
import Variables from "@/components/Variables.vue";
import Templates from "@/components/Templates.vue";
export default {
  components: {
    Settings,
    Modal,
    Recipients,
    Variables,
    Templates
  }
};
</script>
