import Axios from '@/utils/axios'

export function getList(params) {
  return Axios({
    url: '/table/list',
    method: 'get',
    params
  })
}
