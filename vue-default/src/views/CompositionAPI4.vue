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
import {plusCalculator} from '../common.js';
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