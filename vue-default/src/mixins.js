//글로벌 mixin test 

import axios from 'axios';

export default{
  //mounted() 믹스인 되는 경우 믹스인 파일이 먼저 실행, 그다음 컴포넌트 실행
  mounted() {
    console.log("믹스인 mounted()");
  },
  methods: {
    async $api(url, method, data){ //충돌 방지를 위해 $함수명 사용
      return (await axios({
        method: method, // get post delete put
        url : url,
        data : data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  }
}