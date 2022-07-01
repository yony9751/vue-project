<template>
<div>
  <button type="button" @click="getProductList">조회</button>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>배송료</th>
        <th>카테고리</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(products, i) in productList">
        <td>{{products.product_name}}</td>
        <td>{{products.price}}</td>
        <td>{{products.delivery_price}}</td>
        <td>{{products.category}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import ApiMixin from '../api.js';
import MonitoringMixin from '../monitoring.js';
export default {
  /* eslint-disable */
  name: '',
  components: {},
  mixins : [ApiMixin,MonitoringMixin],
  data(){
    return {
      productList: []
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log("컴포넌트 mounted()");
  },
  unmounted() {},
  methods: {
    async getProductList(){
      this.productList = await this.$callAPI('https://c2a53a2d-52c1-4f5e-92da-c74784938d57.mock.pstmn.io/productList','get',{});
      console.log(this.productList);
    }
  }
}
</script>
