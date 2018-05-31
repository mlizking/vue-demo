<template>
  <v-app>
    <v-toolbar dark>
      <v-menu transition="slide-x-transition" bottom right>
        <v-toolbar-side-icon slot="activator" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="(item, i) in item2" :key="i" @click="">
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
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" flat class="hidden-sm-and-down">login</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Login</span>
              </v-card-title>
              <v-container>
                <v-text-field label="Username"></v-text-field>
                <v-text-field label="Password" type="Password"></v-text-field>
              </v-container>
              <v-card-actions>
                <v-btn flat color="green">login</v-btn>
                <v-btn flat color="red">cancle</v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" flat outline color="red accent-3" class="hidden-sm-and-down">signup</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Signup</span>
              </v-card-title>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-text-field label="First name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field label="Last name"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Username"></v-text-field>
                    <v-text-field label="Password" type="Password"></v-text-field>
                    <v-text-field label="E-mail"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card-actions>
                <v-btn flat color="green">Signup</v-btn>
                <v-btn flat color="red">cancle</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
