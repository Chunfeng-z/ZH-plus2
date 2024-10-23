// 该文件负责定义组件的属性
export default {
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
  },
  //   旋转
  rotation: {
    type: [String, Number],
  },
  //   翻转
  flip: {
    type: [String, Number],
  },
  // 下面是动画效果相关的属性
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  type: {
    type: String,
  },
  color: {
    type: String,
  },
}
