<template>
  <Sider> </Sider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Layout } from 'ant-design-vue'
  export default defineComponent({
    name: 'LayoutSider',
    components: { Sider: Layout.Sider },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
