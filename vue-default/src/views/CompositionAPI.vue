<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="state.num1" @keyup="plusNumbers">
      <span> + </span>
      <input type="text" v-model.number="state.num2" @keyup="plusNumbers">
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>
<script>
import {reactive} from 'vue';
export default {
  // eslint-disable-next-line
  name: 'calculator',
  setup() {
    let state = reactive({ //reactive 를 이용해서 num1, num2, result를 실시간 변경사항에 대한 반응형 적용
      num1: 0,
      num2: 0,
      result :0
    });
    function plusNumbers(){
      state.result = state.num1 + state.num2;
    }
    return {
      // reactive 로 선언된 state와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션 처럼 쓸 수 있음
      state,
      plusNumbers
    }
  }
}
</script>