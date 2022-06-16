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
  
</div>
</template>
<script>
export default {
  name: 'EventSample',
  components: {},
  data(){
    return {
      count: 0,
      city: ''
    };
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
    }
  }
}
</script>
