<template>
  <Header>
    头部
  </Header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Layout } from 'ant-design-vue'
  export default defineComponent({
    name: 'LayoutHeader',
    components: { Header: Layout.Header },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
