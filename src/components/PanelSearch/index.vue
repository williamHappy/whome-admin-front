<template>
  <div :class="hoverMode ? 'can-hover' : ''" class="panel-search-item" flex>
    <div class="panel-search-item__icon" flex-box="0">
      <div class="panel-search-item__icon-box" flex="main:center cross:center">
        <!-- <icon v-if="item.icon" :name="item.icon"/>
        <icon-svg v-else-if="item.iconSvg" :name="item.iconSvg"/>
        <icon v-else name="file-o"/> -->
        <svg-icon :class-name="item.icon" :icon-class="item.icon" />
      </div>
    </div>
    <div class="panel-search-item__info" flex-box="1" flex="dir:top">
      <div class="panel-search-item__info-title" flex-box="1" flex="cross:center">
        <span>{{ item.title }}</span>
      </div>
      <div class="panel-search-item__info-fullTitle" flex-box="0">
        <span>{{ item.fullTitle }}</span>
      </div>
      <div class="panel-search-item__info-path" flex-box="0">
        <span>{{ item.path }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    hoverMode: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.show()
  },
  methods: {
    show() {
      console.log(this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '~@/assets/style/public.scss';

// 禁止用户选中 鼠标变为手形
%unable-select {
  user-select: none;
  cursor: pointer;
}

.panel-search-item {
  height: 64px;
  margin: 0px -20px;
  &.can-hover {
    @extend %unable-select;
    margin: 0px;
    &:hover {
      background-color: #F5F7FA;
      .panel-search-item__icon {
        .panel-search-item__icon-box {
          i {
            font-size: 24px;
            color: #409EFF;
          }
        }
      }
      .panel-search-item__info {
        .panel-search-item__info-title {
          color: #303133;
        }
        .panel-search-item__info-fullTitle {
          color: #606266;
        }
        .panel-search-item__info-path {
          color: #606266;
        }
      }
    }
  }
  .panel-search-item__icon {
    width: 64px;
    .panel-search-item__icon-box {
      height: 64px;
      width: 64px;
      border-right: 1px solid #EBEEF5;
      i {
        font-size: 20px;
        color: #909399;
      }
      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
  .panel-search-item__info {
    margin-left: 10px;
    .panel-search-item__info-title {
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
      color: #606266;
    }
    .panel-search-item__info-fullTitle {
      font-size: 10px;
      line-height: 14px;
      color: #C0C4CC;
    }
    .panel-search-item__info-path {
      margin-bottom: 4px;
      font-size: 10px;
      line-height: 14px;
      color: #C0C4CC;
    }
  }
}
</style>
