<template>
  <modal-layout>
    <template v-slot:header>
      <h1>헤더입니다</h1>
    </template>
    <template v-slot:default>
      <p>메인내용</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </modal-layout>
</template>
<script>
import SlotModalLayoutVue from './SlotModalLayout.vue';
export default {
  // eslint-disable-next-line
  name: '',
  components: {
    'modal-layout' : SlotModalLayoutVue
  },
  data(){
    return {
      sampleData: ''
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
  }
}
</script>
