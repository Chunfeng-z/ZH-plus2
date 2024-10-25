import Collapse from './Collapse.vue'

// 为组件单独提供 install 安装方法，供按需引入
Collapse.install = function (app) {
  app.component(Collapse.name, Collapse)
}

export default Collapse
