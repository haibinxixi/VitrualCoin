<template>
  <div id="app">
    <router-view></router-view>
     <tabbar @on-index-change="ontabbarIndexChange">
      <tabbar-item selected link="/">
        <i slot="icon" class="fa fa-fw fa-user"></i>
        <i slot="icon-active" class="fa fa-fw fa-users"></i>
        <span slot="label">短讯</span>
      </tabbar-item>
      <tabbar-item link="/specials">
        <i slot="icon" class="fa fa-fw fa-times"></i>
        <span slot="label">专栏</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Confirm } from 'vux';

export default {
  components: {
    Tabbar,
    TabbarItem,
    Confirm
  },
  methods: {
    ontabbarIndexChange(idx) {
      this.showPlugin(idx);
    },
    showPlugin(val) {
      this.$vux.confirm.show({
        title: 'Title' + val,
        content: 'Content',
        onShow() {
          console.log('plugin show');
        },
        onHide() {
          console.log('plugin hide');
        },
        onCancel() {
          console.log('plugin cancel');
        },
        onConfirm() {
          console.log('plugin confirm');
        }
      });
    }
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
