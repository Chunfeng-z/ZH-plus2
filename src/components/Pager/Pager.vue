<template>
  <!-- 最外层的容器 -->
  <div
    class="ZH-pager"
    :class="{ [`ZH-pager--${type}`]: type, [`ZH-pager--${size}`]: size }"
  >
    <!-- 首页 -->
    <a
      :class="currentPage === 1 ? 'disabled' : ''"
      @click.prevent="goToFirstPage"
      >首页</a
    >
    <!-- 上一页 -->
    <a
      :class="currentPage === 1 ? 'disabled' : ''"
      @click.prevent="currentPage === 1 ? null : prevClick"
    >
      <ZH-Icon icon="angles-left" />
    </a>
    <!-- 页码 -->
    <!-- 多个类名的形式写成数组 -->
    <a
      v-for="index in pager"
      :key="index"
      :class="[
        currentPage === index ? 'active' : '',
        index === '...' ? 'ZH-ellipsis' : '',
      ]"
      @click.prevent="index === '...' ? null : pageClick(index)"
      >{{ index }}</a
    >

    <!-- 下一页 -->
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="currentPage === total ? null : nextClick"
    >
      <ZH-Icon icon="angles-right" />
    </a>
    <!-- 尾页 -->
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="goToLastPage"
      >尾页</a
    >
  </div>
</template>
<!-- 
1. 如何创建首页尾页的样式表示
* ...根据前后页码多少来分布
* elementui的分页组件是采用li实现的，采用a标签是为了不让默认换行
2. 如何控制无法显示的情况
* 主要是通过计算属性进行设置
* click.prevent阻止默认行为
* 注意a标签是没有disabled属性的，所以不匹配就直接将点击事件置为null,或者之间在跳转前判断一下
3. 暴露的ref指向的是什么值
-->
<script setup>
import propObj from './props'
import { ref, computed } from 'vue'
const props = defineProps(propObj)
defineOptions({
  name: 'ZH-Pager',
})
const pager = computed(() => {
  // 数组存储需要渲染的页码
  const renderPage = []
  // 1.总页数小于分页限制的可以全部渲染
  const { total, currentPage, pagerCount } = props
  console.log(total, currentPage, pagerCount)
  if (total <= pagerCount) {
    for (let i = 1; i <= total; i++) {
      renderPage.push(i)
    }
  } else {
    // 2.总的页码数大于可渲染的页码数，无法全部渲染，只能渲染一部分
    // 这里分为三种情况
    // 2.1当前页码比较靠前：[1] 2 3 4 5 ... 20
    // 2.2当前页码比较靠后：1 ... 16 17 18 19 [20]
    // 2.3当前页码在中间：1 ... 8 9 [10] 11 12 ... 20
    if (currentPage <= 5) {
      for (let i = 1; i <= 5; i++) {
        renderPage.push(i)
      }
      renderPage.push('...')
      renderPage.push(total)
    } else if (currentPage >= total - 4) {
      renderPage.push(1)
      renderPage.push('...')
      for (let i = total - 4; i <= total; i++) {
        renderPage.push(i)
      }
    } else {
      renderPage.push(1)
      renderPage.push('...')
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        renderPage.push(i)
      }
      renderPage.push('...')
      renderPage.push(total)
    }
  }
  return renderPage
})
const _ref = ref(null)
defineExpose({
  ref: _ref,
})
// 触发当前页码的变化
// 关于页码的跳转所对应的事件处理函数
// 无论是上一页，下一页、首页、尾页，还是点击具体的页码，做的事情都是一样的
// 都是要触发 current-change 事件，只不过传递的参数不一样
// 总之会将最新的当前页码传递给父组件，让父组件去处理
const emit = defineEmits(['current-change'])
const goToFirstPage = () => {
  emit('current-change', 1)
}
const prevClick = () => {
  console.log('prevClick')
  emit('current-change', props.currentPage - 1)
}

const nextClick = () => {
  emit('current-change', props.currentPage + 1)
}

const goToLastPage = () => {
  emit('current-change', props.total)
}
const pageClick = index => {
  emit('current-change', index)
}
</script>

<style lang="scss" scoped>
</style>