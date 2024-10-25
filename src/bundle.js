// 该文件是用于打包的入口文件
// 1.---------第三方的依赖-------
/* import the fontawesome core */
import {
  library
} from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
/* import all icons */
import {
  fas
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

// 2.-------------引入样式-------
import './styles/index.scss'

// 3.-------------引入自定义组件-----
import Icon from './components/Icon'
// 不写全路径，会自动去找 index.js
import Button from './components/Button'
import Card from './components/Card'
import Dialog from './components/Dialog'
import Pager from './components/Pager'
import Collapse from './components/Collapse'
import CollapseItem from './components/Collapse'
import Tooltip from './components/Tooltip'
import Dropdown from './components/Dropdown'

// 接下来就和 main.js 不一样了，接下来的重点是提供一个 install 方法

const componentsArr = [Icon, Button, Card, Dialog, Pager, Collapse, CollapseItem, Tooltip, Dropdown]

// 这个就是我们要对外提供的 install 方法
const install = (app) => {
  // 这里要做的事情很简单，就是遍历注册所有的组件
  componentsArr.forEach((component) => {
    app.component(component.name, component)
  })
  // 有一个组件要单独注册
  app.component('font-awesome-icon', FontAwesomeIcon)
}

// 最后一步，就是导出
// 注意这里的导出分为两种：全部导出和按需导出

// 全部导出
export default {
  install
}

// 按需导出，到时候使用的时候就是按需引入
export {
  install,
  Icon,
  Button,
  Card,
  Dialog,
  Pager,
  Collapse,
  CollapseItem,
  Tooltip,
  Dropdown
}
