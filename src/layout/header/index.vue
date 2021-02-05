<template>
  <div class="header-wrapper">
    <Header class="myHeader">
      <div class="header-left">
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="header-action">
        <UserDropDown></UserDropDown>
      </div>
    </Header>
    <layout-tabs></layout-tabs>
  </div>
</template>

<script lang="ts">
  import LayoutTabs from '../tabs/index.vue'
  import UserDropDown from './components/UserDropDown/index.vue'
  import Breadcrumb from './components/Breadcrumb/index.vue'
  import { defineComponent } from 'vue'
  import { Layout } from 'ant-design-vue'
  export default defineComponent({
    name: 'LayoutHeader',
    components: { Header: Layout.Header, Breadcrumb, UserDropDown, LayoutTabs },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
