<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {Component,Vue} from 'vue-property-decorator'
@Component({
    component:{}
})

export default class App extends Vue {
        created(){
          this.$store.dispatch("setUser",localStorage.tsToken);
        }
    }
</script>

<style lang="scss" scoped>
#app {
   width:100%;
   height: 100%;
}
</style>
