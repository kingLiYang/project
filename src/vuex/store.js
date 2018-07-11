import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isRed : false,
    nodeVoteCount: 1,//node的初始票数
    vueVoteCount: 2 // vue的初始票数
}
// 声明 一个常量 mutations 将所有的mutation放入其中
const mutations = {
    ADDNODEVOTE(state){
        state.nodeVoteCount++;
    },
    ADDVUEVOTE(state, voteNum = 1){
        state.vueVoteCount+= voteNum;
    }
}
// getters 为 vuex中的计算属性
const getters = {
    sunCount(state){// state即是存储状态的对象
        return state.nodeVoteCount+state.vueVoteCount
    }
}
// 让外部引用vuex   暴露  store mutations
export default new Vuex.Store({
    state,
    mutations,
    getters
})