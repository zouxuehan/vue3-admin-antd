<template>
  <div>
    <MenuItem>
      <MenuItemContent></MenuItemContent>
    </MenuItem>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Layout } from 'ant-design-vue'
  export default defineComponent({
    components: { MenuItem: Layout.MenuItem },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
