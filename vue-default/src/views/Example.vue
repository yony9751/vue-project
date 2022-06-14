<template>
<div>
  <input type="text" v-model="sampleData">
  <input type="number" v-model.number="sampleData2">
  <textarea name="" id="" cols="30" rows="10" v-model="sampleData3"></textarea>
  <select name="" id="" v-model="city">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select>
  <div>체크박스 연습</div>
  <!-- <label for=""><input type="checkbox" v-model="checked">{{checked}}</label> -->
  <label for=""><input type="checkbox" value="서울" v-model="checked">서울</label>
  <label for=""><input type="checkbox" value="부산" v-model="checked">부산</label>
  <label for=""><input type="checkbox" value="제주" v-model="checked">제주</label>
  <br><br><div>체크한 지역 : {{checked}}</div>
  <br>
  <div>라디오 연습</div>
  <br>
  <label for=""><input type="radio" v-bind:value="radio[0]" v-model="picked">서울</label>
  <label for=""><input type="radio" v-bind:value="radio[1]" v-model="picked">부산</label>
  <label for=""><input type="radio" v-bind:value="radio[2]" v-model="picked">제주</label>
  <br><br><div>선택한 지역 : {{picked}}</div>
  
</div>
</template>
<script>
export default {
  name: 'InputSample',
  components: {},
  data(){
    return {
      sampleData: 'South Korea',
      sampleData2: 12,
      sampleData3: '안녕하세요',
      city: 21,
      checked : [],
      radio:["서울","부산","제주"],
      radio1 :"서울2",
      radio2 :"부산2",
      radio3 :"제주2",
      picked :''
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.sampleData2);
  },
  unmounted() {},
  methods: {
  }
}
</script>