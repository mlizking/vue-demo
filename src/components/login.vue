<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Sign In</h3>
    </v-flex>
    <v-flex xs12 class="text-xs-center">
      <form>
            <v-text-field
              name="username"
              label="Username"
              id="username"
              type="username"
              required></v-text-field>
         
            <v-text-field
              name="password"
              label="Password"
              id="password"
              type="password"
              required></v-text-field>
          
            <v-btn primary type="submit">Sign In</v-btn> 
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {}
</script>