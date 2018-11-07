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
  },
  gbs: {
    host: 'http://springic.com',
    lockr_prefix: 'SPRINGIC_WHOME_',
    secret_key: '^#rwd6Ffz$X5alRN',
    domain: '.springic.com',
    secret: {
      key_str: '^#rwd6Ffz$X5alRN',
      iv_str: '^#rwd6Ffz$X5alRN'
    }
  }
}

export default setting
