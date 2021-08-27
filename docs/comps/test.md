#### 哈哈哈

::: demo 适用广泛的基础单选
```html
<template>
  <div>
    <span v-for="i in 3">{{i}}</span>  
    <aaa></aaa>
    <Button type="primary" @click="test" ghost>Primary</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      aa: 'testrgsh'
    }
  },
  methods: {
    test () {
      console.log('hello world')
    }
  }
}
</script>
```
:::