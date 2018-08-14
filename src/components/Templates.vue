<template>
    <div class="columns is-variable is-2 is-multiline" style="outline: 1px solid red">
        <div class="column is-one-quarter" v-for="(template,index) in templates" :key="index">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">

                    <p class="title is-4">Description:</p>
                    <p class="subtitle is-6">asdasds</p>

                    <div class="content">
                        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br> -->
                    </div>
                    <hr>
                    <time datetime="2016-1-1" class="is-size-7">
                        Last Edit: 11:09 PM - 1 Jan 2016
                    </time>
                    <p class="subtitle is-7">ID: asdasds</p>

                </div>
                <footer class="card-footer">
                    <router-link to="/detail/" class="card-footer-item">Edit</router-link>
                    <a href="#" class="card-footer-item">Delete</a>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
/* Array.from(new Array(100), (x, i) => i).map(num => (
        <Thumbnail key={num} src="/assets/thumbnaildiv.png" alt="242x200">
          <h3>Thumbnail {num}</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="danger">Delete</Button>
          </p>
        </Thumbnail>
      )) */
export default {
  data() {
    return {
      templates: Array.from(new Array(10))
    };
  }
};
</script>
<style>
.column {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
