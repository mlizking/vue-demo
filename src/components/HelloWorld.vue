<template>
  <div id="app">
    <v-app id="inspire">
      <v-parallax src="./static/3.jpg" height="600">
        <v-layout column align-center justify-center>
          <h1>free for all</h1>
        </v-layout>
      </v-parallax>
      <v-layout row wrap justify-center >
        <!-- <v-card width="500"> -->
        <v-form v-model="valid">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-btn class="success">submit</v-btn>
        </v-form>
        <!-- </v-card> -->
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]
  })
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* #inspire img {
  height: 100%
} */
</style>
