<template>
<div v-html="htmlString">
</div>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: '',
  components: {},
  data(){
    return {
      htmlString: '<p style="color:red">This is a red string.</p>'
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