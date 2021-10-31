/**
 * 校验手机号
 * ***/
export function validMobile(str) {
  return /^1[3-9]\d{9}$/.test(str)
}
