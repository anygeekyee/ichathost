import request from '@/utils/request'

export function getAccountCurrentInfo(data) {
  return request({
    url: `/account/current-info`,
    method: 'get',
    data,
  })
}
