<template>
<div>
  likes : {{likes}} <br>
  isOk : {{isOk}}<br>
  <div>{{ author.name }} {{ author.company }}</div>
</div>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: 'ChildComponent',
  props : {
      likes : {
        type : Number,
        default : 23
      },
      isOk : {
        type : Boolean,
        default : false
      },
      commentIds :{
        type : Array,
      },
      author : {
        type : Object
      }
    },
  components: {},
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