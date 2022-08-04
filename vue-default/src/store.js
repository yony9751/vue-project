//store 로그인 유저정보, 장바구니 등등 상태 변화 감시가 필요한 부분에 쓰임

import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
      count : 0,
      cart : [
        {
          product_id :1, 
          product_name :'아이폰 거치대',
          category : 'A'
        },
        {
          product_id :2, 
          product_name :'아이폰 거치대',
          category : 'A'
        },
        {
          product_id :3, 
          product_name :'무선 마우스',
          category : 'B'
        }
      ]
    }
  },
  mutations :{
    increment(state){
      state.count = state.count + 1;
    }
  },
  getters : {
    cartCount : (state) => {
      return state.cart.length;
    },
    productACount : (state) => {
      return state.cart.filter(p => p.category =='A').length;
    }
  }
})

export default store;