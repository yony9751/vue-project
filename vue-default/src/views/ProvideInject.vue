<template>
<div>
<!-- <ProvideInjectChild :itemLength="items.length"/> -->
<ProvideInjectChild />
</div>
</template>
<script>
import ProvideInjectChild from './ProvideInjectChild';
export default {
  components : {ProvideInjectChild},
  data(){
    return{
      items : ["a","b"]
    }
  },
  provide(){
    return{
      itemLength : this.items.length, // 키값 : inject에 전달하고자하는 데이터
      items : this.items
    }
  }
}
</script>
