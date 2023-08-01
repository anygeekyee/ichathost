const baseUrlList = {
  // 本地研发环境
  local: 'http://10.2.128.74:3000', // lidian
}
module.exports = {
  port: '9001',
  projectName: '',
  baseUrlList,
  env: {
    local: {
      name: 'local',
      api: baseUrlList.local,
    },
  },
}
