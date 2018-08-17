<template>
  <main>
    <div class="container">
      <Navbar/>
      <div class="section">
        <router-view></router-view>
      </div>
    </div>
    <Settings/>
    <AddTemplate/>
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
import AddTemplate from "@/components/AddTemplate.vue";
import Navbar from "@/views/Navbar.vue";

export default {
  components: {
    Settings,
    AddTemplate,
    Navbar
  }
};
</script>
