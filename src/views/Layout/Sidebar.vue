<template>
    <el-csrollbar class="el-csrollbar">
        <el-menu class="el-menu-slide">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
        </el-menu>
    </el-csrollbar>
</template>

<script >
import {Component,Vue} from 'vue-property-decorator'
@Component({
    component:{}
})

export default class Sidebar extends Vue {
        
    }
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>