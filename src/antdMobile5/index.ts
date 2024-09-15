import { getComponentMap, getPropsMap } from './mapping'

export function antdMobile5() {
  return {
    uiName: 'antd-mobile5',
    map: getPropsMap(),
    lib: 'antd-mobile',
  }
}

export function antdMobile5Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'antd-mobile',
    isReact: true,
  }
}
