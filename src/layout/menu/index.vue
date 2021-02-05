<template>
  <div>
    <Menu>
      <template v-for="item in items" :key="item.path">
        <BasicSubMenuItem></BasicSubMenuItem>
      </template>
    </Menu>
  </div>
</template>

<script lang="ts">
  import BasicSubMenuItem from './components/BasicSubMenuItem.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: { BasicSubMenuItem },
    data() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
