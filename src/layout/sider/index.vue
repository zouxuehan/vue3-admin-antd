<template>
  <Sider>
    <LayoutMenu></LayoutMenu>
  </Sider>
</template>

<script lang="ts">
  import LayoutMenu from '../menu/index.vue'
  import { defineComponent } from 'vue'
  import { Layout } from 'ant-design-vue'
  export default defineComponent({
    name: 'LayoutSider',
    components: { Sider: Layout.Sider, LayoutMenu },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
