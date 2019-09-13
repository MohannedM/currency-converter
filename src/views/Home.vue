<template>
  <div>
    <v-form class="pa-4 mt-4 grey lighten-4" ref="form" style="border-radius: 10px">
      <v-layout row class="justify-space-between mb-2">
        <v-flex xs12 sm6 class="pa-1">
          <v-layout>
            <v-flex xs11>
           <v-text-field type="number" white label="Purchase price" :value="items.price">Title</v-text-field>

            </v-flex>
                  <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
            <v-flex xs1 style="border-right: ">
           <v-select small :items="currencies" :value="items.currency"></v-select>

            </v-flex>
          </v-layout>

        </v-flex>
        <v-flex xs12 sm4 class="pa-1 mx-2">
          <v-text-field type="number" label="Plot size" white :value="items.plotSize" suffix="m2"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row class="my-2 justify-space-between">
        <v-flex xs12 sm4 class="pa-1 mx-2">
          <v-text-field type="number" label="Years of construction" white :value="items.yearOfConstruction"></v-text-field>
        </v-flex>
        <v-flex xs12 sm4 class="pa-1 mx-2">
          <v-text-field type="number" label="Net rent total" white :value="items.netRentTotal" suffix="$ / p.a."></v-text-field>
        </v-flex>
      </v-layout>
      </v-form>
  </div>
</template>

<script>
export default {
props:{
  items:{
    required: true
  },
  currencies:{
    required:true
  }
}
}
</script>