<template>
  <Footer>
    Created by ZXH 2021
  </Footer>
</template>

<script>
  import { defineComponent } from 'vue'
  import { Layout } from 'ant-design-vue'
  export default defineComponent({
    name: 'LayoutFooter',
    components: { Footer: Layout.Footer },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
