<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <ZH-Icon icon="user-secret" />
    <ZH-Icon icon="bars" />
    <ZH-Icon icon="shield-halved" />
    <ZH-Icon icon="file" />
    <ZH-Icon icon="filter" />
    <ZH-Icon icon="gear" />
    <ZH-Icon icon="barcode" />
    <ZH-Icon icon="folder" />
    <ZH-Icon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <ZH-Icon icon="user-secret" size="2xs" />
    <ZH-Icon icon="bars" size="xs" />
    <ZH-Icon icon="shield-halved" size="sm" />
    <ZH-Icon icon="file" size="lg" />
    <ZH-Icon icon="filter" size="xl" />
    <ZH-Icon icon="gear" size="2xl" />
    <ZH-Icon icon="barcode" size="2x" />
    <ZH-Icon icon="folder" size="3x" />
    <ZH-Icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <ZH-Icon icon="user-secret" rotation="90" size="xl" />
    <ZH-Icon icon="bars" rotation="270" size="xl" />
    <ZH-Icon icon="shield-halved" rotation="180" size="xl" />
    <ZH-Icon icon="file" flip="horizontal" size="xl" />
    <ZH-Icon icon="filter" flip="vertical" size="xl" />
    <ZH-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <ZH-Icon icon="user-secret" size="xl" beat />
    <ZH-Icon icon="bars" size="xl" beat-fade />
    <ZH-Icon icon="shield-halved" size="xl" bounce />
    <ZH-Icon icon="file" size="xl" fade />
    <ZH-Icon icon="filter" size="xl" flip />
    <ZH-Icon icon="gear" size="xl" shake />
    <ZH-Icon icon="barcode" size="xl" spin />
    <ZH-Icon icon="folder" size="xl" spin spin-reverse />
    <ZH-Icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <ZH-Icon icon="user-secret" size="xl" type="primary" />
    <ZH-Icon icon="bars" size="xl" type="success" />
    <ZH-Icon icon="shield-halved" size="xl" type="info" />
    <ZH-Icon icon="file" size="xl" type="warning" />
    <ZH-Icon icon="filter" size="xl" type="danger" />
    <ZH-Icon icon="gear" size="xl" color="#e47412" />
    <ZH-Icon icon="barcode" size="xl" color="#7ec102" />
    <ZH-Icon icon="folder" size="xl" color="skyblue" />
    <ZH-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
</style>