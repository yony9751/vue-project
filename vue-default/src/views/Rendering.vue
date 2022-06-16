<template>
<div>
  <select name="" id="">
    <option :value="city.v" :key="i" v-for="(city, i) in options">{{city.t}}</option>
  </select>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>제품가격</th>
        <th>배송비</th>
        <th>제품카테고리</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in table" :key="i">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.ship_price}}</td>
        <td>{{item.category}}</td>
      </tr>  
    </tbody>
  </table>
  <!-- 랜더링 문법  -->
  <h1>v-if / v-show 차이 : v-if 는 아예 생성을 안함 / v-show는 display:none으로 안보이게 함</h1>
  <h2 v-if="Rendering">true이면 보입니다</h2>
  <h2 v-if="A=='a'">A가 a이면 보입니다</h2>
  <h2 v-else-if="A=='b'">A가 b이면 보입니다</h2>
  <h2 v-else>A가 a도 b도 아니면 보입니다</h2>
  <h2 v-show="B=='b'">B가 b이면 보입니다.(v-show)</h2>
</div>
</template>
<script>
export default {
  name: 'RenderingSample',
  components: {},
  data(){
    return {
      options: [
        {v:'02', t:'서울'},
        {v:'21', t:'부산'},
        {v:'064', t:'제주'}
      ],
      table : [
        {name: '기계식 키보드', price :'25000', ship_price :'5000', category : '전자제품'},
        {name: '마우스', price :'5000', ship_price :'3000', category : '전자제품2'}
      ],
      Rendering : true,
      A: 'a',
      B: 'b'
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
  }
}
</script>