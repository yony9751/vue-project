<template>
<div>
  <!-- <ProvideInjectChildChild :itemLength ="itemLength"/> -->
  <ProvideInjectChildChild />
</div>
</template>
<script>
import ProvideInjectChildChild from './ProvideInjectChildChild';
export default {
  components : {ProvideInjectChildChild},
  // props : {
  //   itemLength:{
  //     type: Number,
  //     default : 0
  //   }
  // }
}
</script>
