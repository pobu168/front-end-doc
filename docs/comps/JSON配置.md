## JSON配置
本组件提供一种JSON格式数据的可视化编辑功能，结果无需额外校验。
通过入参类型，提供两种模式：
## 纯JSON输入
当入参为纯JSON格式时，页面会出现一组JSON配置操作区，支持无限嵌套。
::: demo
```html
<template>
  <div>
    <jsonConfig :jsonData="jsonData"></jsonConfig>
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsonData: {a:1}
    }
  }
}
</script>
```
:::

## JSON数组输入
当入参为JSON数组格式时，组件会根据数组中JSON对象个数渲染多组配置，同时支持在数组中新增对象。
::: demo
```html
<template>
  <div>
    <jsonConfig :jsonData="jsonData"></jsonConfig>
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsonData: [{a:1}]
    }
  }
}
</script>
```
:::

::: warning 待优化项

1、JSON值支持数据格式配置

2、JSON数组支持删除功能

:::