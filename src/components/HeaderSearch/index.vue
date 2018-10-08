<template>
  <el-button class="d2-mr btn-text can-hover" type="text" @click="handleClick">
    <d2-icon name="search" style="font-size: 18px;"/>
  </el-button>
</template>

<script>
export default {
  components: {
    'd2-icon': () => import('@/components/d2-icon')
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
