import { version } from '../package'

const setting = {
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 版本
  releases: {
    version: version
  }
}

export default setting
