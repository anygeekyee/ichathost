const baseUrlList = {
  // 本地研发环境
  local: 'http://10.2.176.14:30780/api',
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
  }
}
