<template>
  <v-container>
    <v-row>
      <v-col cols="6" v-for="(value ,index) in car_information"
             :key="index">
        <v-card
            class="mx-auto my-12"
        >
          <v-img
              height="250"
              :src='require("../assets/car3.jpeg")'
          ></v-img>

          <v-card-title>{{value['car_band']}}</v-card-title>



          <v-card-text>
            <v-row
                align="center"
                class="mx-0 justify-space-between"

            >
              <div class="my-4 text-subtitle-1">
                {{value['car_number']}} {{value['car_type']}}
              </div>
              <div>
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>


              </div>

            </v-row>



            <div class="my-4 text-subtitle-1">
              address : {{value['car_address']}}
            </div>
            <div class="my-4 text-subtitle-1">
              {{value['car_price']}}
            </div>
            <div class="my-4 text-subtitle-1">
              {{value['car_status']}}
            </div>
          </v-card-text>





          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>

  </v-container>

</template>

<script>
export default {
  name: "AdminstrationCarBasicInformation",
  data: function () {
    return {
      car_information: [
        {
          car_number:'沪C12345',
          car_type:'suv',
          car_price:'123 $/d',
          car_band:'宝宝巴士牌汽车',
          car_address:"中国江苏省南通市启东市松花江中路",
          pic:'../assets/car.jpg',
          car_status:'等待出租'
        },
        {
          car_number:'12345',
          car_type:'suv',
          car_price:'123 $/d',
          car_band:'宝宝巴士牌汽车',
          car_address:"中国江苏省南通市启东市松花江中路",
          pic:'../assets/car.jpg',
          car_status:'已经出租'
        },
        {
          car_number:'12345',
          car_type:'suv',
          car_price:'123 $/d',
          car_band:'宝宝巴士牌汽车',
          car_address:"中国江苏省南通市启东市松花江中路",
          pic:'../assets/car.jpg',
          car_status:'已经预约'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>