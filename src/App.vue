<template>
  <v-app>
    <v-toolbar dark>
      <v-menu transition="slide-x-transition" bottom right>
        <v-toolbar-side-icon slot="activator" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="(item, i) in item2" :key="i">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>  
      <v-toolbar-title>keeramera</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field label="search" class="hidden-sm-and-down"></v-text-field>
        <v-btn icon class="hidden-sm-and-down">
          <v-icon>search</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
                <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
        <v-btn flat class="hidden-sm-and-down" to="/upload" exact>upload</v-btn>
        <v-btn flat class="hidden-sm-and-down" to="/story">story</v-btn>
        <v-btn flat class="hidden-sm-and-down" to="/login">login</v-btn>
        <v-btn flat outline color="red accent-3" class="hidden-sm-and-down" to="/signup">signup</v-btn>
                 <!-- </v-toolbar-items> -->
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer dark fixed>
      <v-layout row wrap justify-center >
        <strong>keeramera &copy; 2018</strong>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>


import Firebase from 'firebase'



export default {
  data() {
    return {

      item2: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Keeramera"
    };
  },
  name: "App"
};
</script>
