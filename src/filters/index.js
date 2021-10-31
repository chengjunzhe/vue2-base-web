//过滤器
import dayjs from 'dayjs'

// 图片 blob 流转化为可用 src
export function imgHandle(obj) {
  return window.URL.createObjectURL(obj)
}

// 时间戳转换成指定日期格式
export function TimestampToFormatDay(timestamp, format) {
  return dayjs.unix(timestamp).format(format)
}
