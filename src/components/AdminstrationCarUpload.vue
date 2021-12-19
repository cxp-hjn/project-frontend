<template>
  <v-conatiner>
    <v-card>
      <v-card-title class="justify-center">
        上传车辆信息
      </v-card-title>
      <v-card-text class="justify-center">
        <v-row class="justify-center">
          <v-col
              cols="6"
          >
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="car band"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="car number"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="car price($/d)"
                  required
              ></v-text-field>

              <v-select
                  v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="car type"
                  required
              ></v-select>





              <v-btn
                  color="warning"
                  @click="resetValidation"
              >
                Reset Validation
              </v-btn>
            </v-form>
          </v-col>
        </v-row>

      </v-card-text>
    </v-card>
  </v-conatiner>
</template>

<script>
export default {
  name: "AdminstrationCarUpload",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],

    select: null,
    items: [
      'suv',
      '越野',
      '跑车',
    ],

  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },

  },

}
</script>

<style scoped>

</style>