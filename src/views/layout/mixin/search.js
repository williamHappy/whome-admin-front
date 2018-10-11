import { mapGetters, mapMutations } from 'vuex'

import hotkeys from 'hotkeys-js'

export default {
  mounted() {
    // 绑定搜索功能快捷键 [ 打开 ]
    hotkeys(this.searchHotkey.open, event => {
      event.preventDefault()
      this.searchPanelOpen()
    })
    // 绑定搜索功能快捷键 [ 关闭 ]
    hotkeys(this.searchHotkey.close, event => {
      event.preventDefault()
      this.searchPanelClose()
    })
  },
  beforeDestroy() {
    hotkeys.unbind(this.searchHotkey.open)
    hotkeys.unbind(this.searchHotkey.close)
  },
  computed: {
    ...mapGetters({
      searchActive: 'active',
      searchHotkey: 'hotkey'
    }),
    dialogActive: {
      get() {
        return this.searchActive
      },
      set(value) {
        this.searchSet(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      searchToggle: 'search/toggle',
      searchSet: 'search/set'
    }),
    /**
     * 接收点击搜索按钮
     */
    handleSearchClick() {
      this.searchToggle()
      if (this.searchActive) {
        this.focus()
      }
    },
    searchPanelOpen() {
      if (!this.searchActive) {
        this.searchSet(true)
        this.focus()
      }
    },
    // 关闭搜索面板
    searchPanelClose() {
      if (this.searchActive) {
        this.searchSet(false)
      }
    },
    /**
     * @description 聚焦输入框
     */
    focus() {
      this.input = ''
      setTimeout(() => {
        this.$refs.input.focus()
        // 还原
        this.searchText = ''
        this.results = []
      }, 500)
    }
  }
}
