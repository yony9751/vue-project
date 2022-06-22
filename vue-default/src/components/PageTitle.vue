<template>
  <h2 class="page-title">페이지 타이틀 {{title}}입니다</h2>
</template>
<script>
export default {
  props : {
    title : {
      type : String,
      default : '1번 페이지'
    }
  }
}
</script>
<style scoped>
.page-title{font-size:18px;padding-left:10px;border-left: 5px solid red;}
</style>
