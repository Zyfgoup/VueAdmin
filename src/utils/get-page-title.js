import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin'
// 设置页面标题  页面标题-项目名
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
