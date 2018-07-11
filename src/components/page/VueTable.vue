<template>
    <div>
       {{$store.state.isRed}}
        <deleteDia></deleteDia>
        <div><h2>总票数：{{sunCount}}</h2></div>
        <div>
          <h3>如何通过node对数据进行md5加密</h3>
          <input type="button" value='投票' @click="ADDNODEVOTE()">票数：{{nodeVoteCount}}
        </div>
        <hr/>
        <div>
          <h3>真正掌握vuex的使用方法-</h3>
          <input type="button" value='投票' @click="ADDVUEVOTE()">票数：{{vueVoteCount}}
          <!--commit方法的第二个参数即为要传入的值-->
            <input type="button" value="加2" @click="ADDVUEVOTE(2)">票数：{{vueVoteCount}}
        </div>
        <hr/>
        <div class='sss'>
          <input type="button" value='第一' :class="{active: index==0}" @click="index=0">
          <input type="button" value='第er' :class="{active: index==1}" @click="index=1">
          <input type="button" value='第san' :class="{active: index==2}" @click="index=2">
          <div v-show='index == 0'>
            <p>第一</p>
            <p>第一</p>
            <p>第一</p>
            <p>第一</p>
            <p>第一</p>
          </div>
          <div v-show="index==1">
            <p>第二</p>
            <p>第二</p>
            <p>第二</p>
            <p>第二</p>
          </div>
          <div v-show="index==2">
            <p>第三</p>
            <p>第三</p>
            <p>第三</p>
          </div>
        </div>
    </div>
</template>

<script>
import { formatDate } from "./../../js/data";
import deleteDia from "./pubilc/delete.vue";
import {mapState,mapMutations,mapGetters} from "vuex";
export default {
  data: function() {
    return {
        index: 0
    };
  },
  components: {
    deleteDia
  },
  beforeCreate(){

  },
  created() {
      let that = this;
      this.$axios({
        url: this.URL_API+":6868",
        type: 'get',
        data: {},
        success: function(res){
          console.log(res,111);
          // if (res.data.code == "0") {
          //   window.sessionStorage.setItem('username',that.account);
          //   window.sessionStorage.setItem('token',res.data.data.token);
          //   window.sessionStorage.setItem('items',JSON.stringify(res.data.data.menu));
          //   that.$router.push({path:'/home'});

          // }else{
          //   that.$message(res.data.message);
          // }
        },
        error: function(err){
          console.log(err);

          
        }
      })
      // let that = this;
      // this.$axios({
      //   url: "api/getTagList",
      //   method: "get",
      //   data: { },
      //   transformRequest: [
      //     function(data) {
      //       let ret = "";
      //       for (let it in data) {
      //         ret +=
      //           encodeURIComponent(it) +
      //           "=" +
      //           encodeURIComponent(data[it]) +
      //           "&";
      //       }
      //       return ret;
      //     }
      //   ],
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" }
      // }).then(function(res) {
      //   console.log(res,111);
      //   // if(res.data.code == '0'){
      
          
      //   //   that.optionCompany = res.data.data;
      //   // }else if(res.data.code == '450'){
      //   //   that.$message("暂无权限");
      //   // }
        
      // });
  },
  methods: {
    ...mapMutations(['ADDNODEVOTE','ADDVUEVOTE']),
    ...{
      // 写自己定义的方法
    }
  },
  // assign方法 第一个参数为目标对象，其余参数为源对象
  // 通过该方法可以将所有的源对象的值copy到目标对象
  // 刚方法的返回值既为这个目标对象
  // computed: Object.assign(mapState(['vueVoteCount','nodeVoteCount']),{
  //   // 写自己的计算属性
  // }),
  computed:{
    ...mapState(['vueVoteCount','nodeVoteCount']),
    ...mapGetters(['sunCount'])
  },
  beforeMount() {},
  filters: {
    // formatDate(time) {
    //   var date = new Date(time * 1000);
    //   return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    // }
  }
};
</script>

<style scoped>
  input,p{
    margin: 5px;
    padding:5px;
  }
  input.active{
    background: red;
  }
  .sss div{
    border:1px solid red;
  }
</style>