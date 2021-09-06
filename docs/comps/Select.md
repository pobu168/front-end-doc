## Select

WeCube中使用的Select组件基本都是IView组件库中的Select组件，那为什么还要单独拿出来介绍呢？
因为我们发现，在使用Select组件作为选择数据来源时，往往伴随着对数据源的新增、编辑等功能。于是想到是否可以将对数据源的管理放入同一个组件中管理，提升用户体验，就有了如下Select组件。

## 组件示例
::: demo
```html
<template>
  <div>
    <DemoSelect></DemoSelect>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
```
:::

## 其他

Select组件使用时建议提供`filter`及`Clearable`作为基础功能
