
<!-----------------------------删除   弹框  组件------------------------>

<template>
  <div>
    <input type="button" 
                :class="{active:$store.state.isRed}"  
                value="改变"
               @click="$store.state.isRed=!$store.state.isRed">
      <!-- <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <h3 style="text-align:center;">确定删除吗？</h3>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="delOrder()">确 定</el-button>
            </span>
            </el-dialog> -->
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
    .active{
        background:red;
    }
</style>
