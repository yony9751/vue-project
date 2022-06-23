<template>
<div class="container">
  <input type="text" v-model="sampleData">
  <input type="number" v-model.number="sampleData2">
  <textarea name="" id="" cols="20" rows="5" v-model="sampleData3"></textarea>
  <select name="" id="" v-model="city">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select>
  <div class="title">input 체크박스 연습</div>
  <!-- <label for=""><input type="checkbox" v-model="checked">{{checked}}</label> -->
  <label for=""><input type="checkbox" value="서울" v-model="checked">서울</label>
  <label for=""><input type="checkbox" value="부산" v-model="checked">부산</label>
  <label for=""><input type="checkbox" value="제주" v-model="checked">제주</label>
  <br><br><div>체크한 지역 : {{checked}}</div>
  <br>
  <div class="title">input 라디오 연습</div>
  <br>
  <label for=""><input type="radio" v-bind:value="radio[0]" v-model="picked">서울</label>
  <label for=""><input type="radio" v-bind:value="radio[1]" v-model="picked">부산</label>
  <label for=""><input type="radio" v-bind:value="radio[2]" v-model="picked">제주</label>
  <br><br><div>선택한 지역 : {{picked}}</div>
  <img alt="Vue logo" v-bind:src="url" style="width:200px;"> <br>
  <input type="text" v-model="textValue">
  <button type="button" v-bind:disabled="textValue == ''">클릭</button>
  <br><br>
  <div class="title">클래스 , style 데이터 바인딩</div>
  <br>
  <div v-bind:class="{'active':isActive, 'red':isRed}">클래스 데이터 바인딩 연습</div>
  <div v-bind:class="[isActive, isRed]">클래스 데이터 바인딩 연습</div>
  <div class="title">인라인 style 데이터 바인딩</div>
  <br>
  <div v-bind:style="styleObject">인라인 스타일 테스트 테스트 </div>
  <div v-bind:style="[baseStyle,addStyle]">인라인 스타일 테스트 테스트 </div>
  <h1 class="title">컴포넌트에서 다른 컴포넌트 활용하기 / 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달</h1>
  <page-title title="2번 페이지" />
  <span>동적으로 v:bind 데이터 전달 하는 방법</span>
  <page-title :title="title2" />
  <!-- <ChildComponent :likes="likes" isOk="true"/> -->
  <div>위 경우 isOk="true" 는 불리언 true 값이 아닌 문자 true 로 전달됨 <br>아래 두 가지 방법으로 전달 가능!</div>
  <!-- <ChildComponent :likes="likes" :isOk="true" /> -->
  <div>부모 컴포넌트에서 자식 컴포넌트의 이벤트 발생</div>
  <ChildComponent :likes="likes" :isOk="isOk" :commentIds="commentIds" :author="author" ref="child" /> 
  <button type="button" @click="callChildFunc">부모 클릭</button>
</div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import ChildComponent from './ChildComponent.vue';
export default {
  // eslint-disable-next-line
  name: '',
  components: {
    'page-title' : PageTitle, //소문자 쓰고 싶을 때 바꾸는 법
    ChildComponent
  }, 
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
      addStyle : 'color:red;font-weight:bold',
      title2 : "헬롱",
      likes : 23,
      isOk : true,
      commentIds : [1,3,6,8],
      author : {name : "홍길동", company : 22}
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.sampleData2);
    console.log(this.commentIds)
  },
  unmounted() {},
  methods: {
    callChildFunc(){
      this.$refs.child.childFunc();
      this.$refs.child.msg = '부모 컴포넌트에서 변경';
      //데이터 값을 바꿀 때 $refs 로 자식 컴포넌트로 접근 후 바로 변경 가능
    }
  }
}
</script>
<style scoped>
  .title{background:#333;color:#fff;line-height: 30px;font-size: 16px;font-weight: bold;}
  .container{width:100%;font-size: 16px;font-family: 'Nanum Gothic';}
  .active{font-size: 16px;background: yellow;}
  .red{color: red;}
</style>