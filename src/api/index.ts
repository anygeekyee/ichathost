import request from '@/utils/request'

export function getBot(data: any) {
  return request({
    url: `/bot`,
    method: 'get',
    data,
  })
}

export function startBot(data: any) {
  return request({
    url: '/bot/start',
    method: 'post',
    params: data,
  })
}

export function stopBot(data: any) {
  return request({
    url: '/bot/stop',
    method: 'post',
    params: data,
  })
}
