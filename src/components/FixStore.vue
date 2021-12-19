<template>
  <v-container>
    <v-img
        :src="require('../assets/car.jpg')"
        width="100%"
        height="400px"
    >
    </v-img>
    <v-card>
      <v-card-title>
        <span class="text-h4">{{ store_name }}</span>
      </v-card-title>
      <v-card-text class="font-weight-bold">
        {{ store_description }}
      </v-card-text>
      <v-card-text>
        <span class="text-body-1">address:</span>{{ store_address }}   <span class="text-body-1">contact</span>:{{store_contact}}
      </v-card-text>
      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row>
      </v-card-text>
      <v-divider>

      </v-divider>
      <v-card-text class="text-h6">
        big sale:{{ store_discount }}
      </v-card-text>
      <v-card-text>
        {{sale_description}}
      </v-card-text>


    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FixStore",
  data: function () {
    return {
      store_name: '中华汽修店',
      store_address: " 中国上海市浦东新区沪南公路7866号",
      store_description: '4S店一般采取一个品牌在一个地区分布一个或相对等距离的几个专卖店，按照生产厂家的统一店内外设计要求建造，投资巨大，动辄上千万，甚至几千万，豪华气派。\n' +
          '4S店是集汽车销售、维修、配件和信息服务为一体的销售店,一家投资2500万元左右建立起来的4S店在5-10年之内都不会落后。在中国,4S店还有很长一段路要走。\n' +
          '4S店模式这几年在国内发展极为迅速。汽车行业的4S店就是 汽车厂家为了满足客户在服务方面的需求而推出的一种业务模式。4S店的核心含义是“汽车终身服务解决方案”。\n' +
          '有评论家这样评价该模式：“4S店模式其实是汽车市场激烈竞争下的产物。随着市场逐渐成熟，用户的消费心 理也逐渐成熟，用户需求多样化，对产品、服务的要求也越来越高，越来越严格，原有的代理销售体制已不能适应市场与用户的需求。\n' +
          '4S店的出现，恰好能满足用户的各种需求，它可以提供装备精良、整洁干净的维修区，现代化的设备和服务管 理，高度职业化的气氛，保养良好的服务设施，充足的零配件供应，迅速及时地跟踪服务体系。通过4S店的服务，可以使用户对品牌产生信赖 感，从而扩大销售量。”\n' +
          '因此，“4S”的关键词是“解决方案”和“服务”。其实在“服务经济社会”的大背景下，“4S”模式其实和其 他一些已进入“以方案和服务为核心竞争力时代”的行业销售服务模式殊路同归，只不过叫法更时尚、更新一些。',
      store_discount: "10%",
      store_contact: "+86 21 5817 7000",
      sale_description:'现在进店享受超值大优惠，赶快来体验吧！'

    }
  }
}
</script>

<style scoped>

</style>