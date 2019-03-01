<template>
  <div id="e3" style="max-width: 200px; margin: auto;">
    <v-container fluid style="min-height: 400;" grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card target="_blank" :href="url" :color="color" class="black--text rounded-card">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">{{title}}</div>
                    <div>{{location}}</div>
                  </div>
                  <br>
                  <br>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ['title', 'location', 'url', 'color']
}
</script>

<style scoped>
.rounded-card {
    border-radius:10px;
}


</style>
