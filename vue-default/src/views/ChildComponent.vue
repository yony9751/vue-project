<template>
<div>
  likes : {{likes}} <br>
  isOk : {{isOk}}<br>
  <div>{{ author.name }} {{ author.company }}</div>
  <button type="button" @click="childFunc" ref="child_btn">자식 클릭</button>
  {{msg}}
  <button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button>
  <button type="button" @click="changeData">자식 컴포넌트 데이터 변경하기(동기화)</button>
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
      msg: '자식 데이터'
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    childFunc(){
      alert('부모 컴포넌트에서 클릭한 이벤트');
    },
    sendFromChild(){
      this.$emit('send-message', this.msg);
    },
    changeData(){
      this.msg = '자식 컴포넌트로에서 데이터가 변경되었습니다.' 
    }
  }
}
</script>