<template>
<div>
  <input type="text" v-model="sampleData">
  <input type="number" v-model.number="sampleData2">
  <textarea name="" id="" cols="30" rows="10" v-model="sampleData3"></textarea>
</div>
</template>
<script>
export default {
  name: 'InputSample',
  components: {},
  data(){
    return {
      sampleData: 'South Korea',
      sampleData2: 12,
      sampleData3: '안녕하세요'
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.sampleData2);
  },
  unmounted() {},
  methods: {
  }
}
</script>