<template>
  <div>
    <Layout class="layout-wrapper">
      <layout-sider class="sider-wrapper">Sider</layout-sider>
      <Layout class="main-wrapper">
        <layout-header class="header-wrapper">Header</layout-header>
        <layout-content class="content-wrapper">Content</layout-content>
        <layout-footer class="footer-wrapper">Footer</layout-footer>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
  import { Layout } from 'ant-design-vue'
  import LayoutSider from './sider/index.vue'
  import LayoutHeader from './header/index.vue'
  import LayoutContent from './content/index.vue'
  import LayoutFooter from './footer/index.vue'
  export default {
    components: { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter },
    data() {
      return {}
    },
  }
</script>
<style lang="scss" scoped></style>
