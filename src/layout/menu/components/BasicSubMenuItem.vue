<template>
  <div>
    <BasicMenuItem></BasicMenuItem>
    <SubMenu>
      <template #title>
        <MenuItemContent></MenuItemContent>
      </template>
      <template v-for="child in item.children" :key="child.path">
        <BasicSubMenuItem></BasicSubMenuItem>
      </template>
    </SubMenu>
  </div>
</template>

<script lang="ts">
  import MenuItemContent from './MenuItemContent.vue'
  import BasicMenuItem from './BasicMenuItem.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: { BasicMenuItem, MenuItemContent },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
