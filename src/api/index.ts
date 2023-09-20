import request from '@/utils/request'

export function getBot(data: any) {
  return request({
    url: `/bot`,
    method: 'get',
    data,
  })
}
