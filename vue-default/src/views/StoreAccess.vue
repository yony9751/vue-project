<template>
<div>
  <h1>장바구니 : {{cartCount}}</h1>
  <h1>Product A : {{productACount}}</h1>
  <h2>Count : {{count2}}</h2>
  <button type="button" @click="increment">increment</button>
</div>
</template>
<script>
export default {
  computed : {
    count2(){
      return this.$store.state.count;
    },
    productACount(){
      return this.$store.getters.productACount;
    },
    cartCount(){
      return this.$store.getters.cartCount;
    }
  },
  //methods 에서 함수 실행할때는 commit 을 해줘야함
  methods : {
    increment(){
      this.$store.commit("increment");
    }
  }
}
</script>
