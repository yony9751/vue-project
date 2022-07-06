<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1">
      <span> + </span>
      <input type="text" v-model.number="num2">
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>
<script>
import {reactive, computed, toRefs} from 'vue';

//외부로 함수 만들어 쓰기
function plusCalculator(){
  let state = reactive({ //reactive 를 이용해서 num1, num2, result를 실시간 변경사항에 대한 반응형 적용
    num1: 0,
    num2: 0,
    result : computed(() => 
      state.num1+state.num2
    )
  });
  
  return toRefs(state);
  //반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 사용하기 위해 toRefs
}
export default {
  // eslint-disable-next-line
  name: 'calculator',
  setup() {
    let {num1, num2, result} = plusCalculator(); //외부 function
    return {
      num1,
      num2,
      result
    }
  }
}
</script>