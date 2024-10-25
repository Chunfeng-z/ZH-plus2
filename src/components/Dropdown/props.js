import TooltipOptions from '../Tooltip/props';
export default {
  ...TooltipOptions,
  // 下拉列表数组
  menuOptions: {
    type: Array,
    required: true
  },
  // 点击下拉菜单之后是否隐藏下拉菜单
  hideAfterClick: {
    type: Boolean,
    default: false
  }
}
