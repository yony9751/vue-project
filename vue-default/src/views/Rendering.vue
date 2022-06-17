<template>
<div>
  <select name="" id="" v-model="selectedCity">
    <option :value="city.v" :key="i" v-for="(city, i) in options">{{city.t}}</option>
  </select>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>제품가격</th>
        <th>배송비</th>
        <th>제품카테고리</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in table" :key="i">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.ship_price}}</td>
        <td>{{item.category}}</td>
      </tr>  
    </tbody>
  </table>
  <!-- 랜더링 문법  -->
  <h1>v-if / v-show 차이 : v-if 는 아예 생성을 안함 / v-show는 display:none으로 안보이게 함</h1>
  <h2 v-if="Rendering">true이면 보입니다</h2>
  <h2 v-if="A=='a'">A가 a이면 보입니다</h2>
  <h2 v-else-if="A=='b'">A가 b이면 보입니다</h2>
  <h2 v-else>A가 a도 b도 아니면 보입니다</h2>
  <h2 v-show="B=='b'">B가 b이면 보입니다.(v-show)</h2>
  <br><br>
  <div>
    <h2>조회/저장 연습하기</h2>
    <input type="text" v-model="userName" @keyup.enter="searchUserList">
    <button type="button" @click="searchUserList">조회하기</button>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>직업</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(user, i) in userList">
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
          <td>{{user.job}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <h2>저장하기 연습</h2>
    <label for="save1">이름</label><input type="text" v-model="name" id="save1">
    <label for="save2">나이</label><input type="text" v-model.number="age" id="save2">
    <label for="save3">직업</label><input type="text" v-model="job" id="save3">
    <button type="button" @click="saveUserInfo">저장하기</button>
  </div>
</div>
</template>
<script>
export default {
  name: 'RenderingSample',
  components: {},
  data(){
    return {
      options: [
        {v:'02', t:'서울'},
        {v:'21', t:'부산'},
        {v:'064', t:'제주'}
      ],
      table : [
        {name: '기계식 키보드', price :'25000', ship_price :'5000', category : '전자제품'},
        {name: '마우스', price :'5000', ship_price :'3000', category : '전자제품2'}
      ],
      Rendering : true,
      A: 'a',
      B: 'b',
      selectedCity : '',
      userName: '',
      userList: '',
      name: '',
      age : 0,
      job : ''
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    //조회하기
    searchUserList(){
      const params = {
        selectedCity : this.selectedCity,
        userName : this.UserName
      }
      this.userList = this.getUserList(params);
    },
    // 서버 대체
    getUserList(params){
      console.log(params);
      let list = [
        {name:'유재석', age:50, job: "연예인"},
        {name:'하하', age:30, job: "연예인"},
        {name:'정준하', age:30, job: "연예인"}
      ];
      return list;
    },
    //저장하기
    saveUserInfo(){
      const params = {
        name : this.name,
        age : this.age,
        job : this.job
      }
      if(this.name == ''){
        //return alert('이름을 입력해주세요');
        return this.$swal('사용자 이름을 입력해주세요'); // sweetalert2 사용하는 경우
      }
      if(this.age == 0){
        return alert('나이를 입력해주세요');
      }
      const r = this.saveData(params);
      if(r == 'S'){
        alert('저장이 완료되었습니다');
      }else{
        alert('저장 실패')
      }
    },
    saveData(params){
      console.log(params);
      const r = 'F';
      return r;
    }
  }
}
</script>