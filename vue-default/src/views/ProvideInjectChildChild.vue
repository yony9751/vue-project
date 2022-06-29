<template>
<div>
  Item Length : {{this.itemLength}} / {{this.items.length}}
</div>
</template>
<script>
export default {
  // props : {
  //   itemLength : {
  //     type: Number,
  //     default : 0
  //   }
  // }
  inject : ["itemLength","items"] 
  // provide 에서 전달한 키값을 배열 형태로! 부모에서 제공한 데이터를 바로 받아 적용할 수 있음 
  // 단점 : 어디서 보내는지 어디서 받는지 다 찾아봐야 알 수 있기 때문에 잘 써야함 .
}
</script>
