<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <input type="text" v-model="title">
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: '', 
  components :{},
  data(){
    return {
      title : 'Hello World'
    }
  }, // 데이터 쌍방향 통신
  setup(){}, //
  created(){}, // 뷰 컴포넌트가 실행되는 순간
  mounted(){}, // html DOM이 실제 화면이 로딩이 되는 순간
  unmounted(){}, // 다른 컴포넌트로 이동할 때
  methods:{ // 함수 methods

  }
}
</script>
<style scoped>

</style>