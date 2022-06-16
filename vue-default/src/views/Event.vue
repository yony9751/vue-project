<template>
<div>
  <button type="button" @click="increaseCount">Add 1</button>
  <p>The count is : {{count}} </p>
  <br><br><br> 
  <button type="button" @click="one(), two()">함수 두 개 이상 동시에 호출하기</button>
  <br><br><br> 
  <div>@change 연습</div>
  <select name="" id="" v-model="city" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>
  <br><br><br> 
  <div>@keyup.enter / 과 비슷하게 쓸 수 있는 것들 : tab, delete, esc, space, up, down, left, right</div>
  <input type="text" @keyup.enter="two">
  <br><br><br>
  <div>computed 연습</div>
  <input type="text" v-model="lastName">
  <input type="text" v-model="firstName">
  <div>Hello, {{getFullName()}}</div> 
  <div>method 로 하는 경우 / 매번 호출할 때마다 동일한 연산을 계속 하게함</div>
  <div>Hello, {{fullName}}</div> 
  <div>computed 이용하는 경우 / 딱 한 번 호출함, 데이터 필드의 변동사항을 계속 감시하고 반영함</div>
  <br><br>
  <div>watch 연습</div>
  <input type="text" v-model.number="x1">
  <input type="text" v-model.number="x2">
  <div>watch 사용하는 경우 </div>
  <input type="text" v-model="y">
  <div>computed 사용하는 경우</div>
  <input type="text" v-model="getPlus">
</div>
</template>
<script>
export default {
  name: 'EventSample',
  components: {},
  data(){
    return {
      count: 0,
      city: '',
      firstName: '재석',
      lastName : '유',
      x1 : '',
      x2 : '',
      y : ''
    };
  },
  watch : {
    x1(){
      this.y = this.x1 + this.x2
    },
    x2(){
      this.y = this.x1 + this.x2
    }
  },
  computed : {
    fullName() {
      return this.lastName + this.firstName
    },
    getPlus(){
      return this.x1 + this.x2
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increaseCount(){
      this.count = this.count + 1;
    },
    one(){
      alert(1);
    },
    two(){
      alert(2);
    },
    changeSelect(){
      alert(this.city);
    },
    getFullName(){
      return this.lastName + this.firstName
    }
  }
}
</script>
