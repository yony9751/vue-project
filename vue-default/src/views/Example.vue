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
  <img alt="Vue logo" v-bind:src="url" style="width:200px;"> <br>
  <input type="text" v-model="textValue">
  <button type="button" v-bind:disabled="textValue == ''">클릭</button>
  <br><br>
  <div>클래스 , style 데이터 바인딩</div>
  <br>
  <div class="container" v-bind:class="{'active':isActive, 'red':isRed}">클래스 데이터 바인딩 연습</div>
  <div class="container" v-bind:class="[isActive, isRed]">클래스 데이터 바인딩 연습</div>
  <div>인라인 style 데이터 바인딩</div>
  <br>
  <div v-bind:style="styleObject">인라인 스타일 테스트 테스트 </div>
  <div v-bind:style="[baseStyle,addStyle]">인라인 스타일 테스트 테스트 </div>
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
      picked :'',
      url : '../assets/logo.png', //상대경로는 안먹는건가?
      textValue : '',
      //클래스 바인딩
      isActive : 'active',
      isRed : 'red',
      //인라인 스타일 
      styleObject : {
        backgroundColor : 'yellow',
        color: 'red',
        fontWeight : 'bold'
      },
      baseStyle : 'background-color:yellow;',
      addStyle : 'color:red;font-weight:bold'
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
<style scoped>
  .container{width:100%;font-size: 20px;;}
  .active{font-size: 25px;background: yellow;}
  .red{color: red;}
</style>