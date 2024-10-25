import './assets/main.css'
import './styles/index.scss'

import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import {
  library
} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

// /* import specific icons */引入所有图标
import {
  fas
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

const app = createApp(App)
// 全局引入组件
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Pager from './components/Pager/Pager.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
// 注册自定义组件
app.component('ZH-Icon', Icon)
app.component('ZH-Button', Button)
app.component('ZH-Card', Card)
app.component('ZH-Dialog', Dialog)
app.component('ZH-Pager', Pager)
app.component('ZH-Collapse', Collapse)
app.component('ZH-CollapseItem', CollapseItem)
app.component('ZH-Tooltip', Tooltip)
app.use(router)

// 注册font-awesome-icon组件
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
