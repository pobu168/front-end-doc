<template>
  <div class=" ">
    <Select
        v-model="selectedItem"
        filterable
        clearable
      >
        <Button type="success" style="width:100%" @click="addItem" size="small">
          <Icon type="ios-add" size="24"></Icon>
        </Button>
        <Option v-for="(item,itemIndex) in itemOptions" :value="item.value" :key="item.value"
          >{{ item.label
          }}<span style="float:right">
            <Button @click="editItem(item)" icon="ios-create-outline" type="primary" size="small"></Button>
            <Button @click="deleteItem(itemIndex)" icon="ios-trash" type="error" size="small"></Button>
          </span>
        </Option>
      </Select>

      <Modal
        v-model="modalData.isShow"
        :title="(modalData.isAdd ? '新增' : '编辑') + '数据'"
        @on-ok="ok"
        @on-cancel="cancel">
          <Form>
            <FormItem label="Label">
              <Input type="text" v-model="modalData.data.label"></Input>
            </FormItem>
            <FormItem label="Value">
              <Input type="text" v-model="modalData.data.value"></Input>
            </FormItem>
          </Form>
      </Modal>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      selectedItem: '',
      itemOptions: [
        { label: '孙悟空', value: 'MonkeyKing' },
        { label: '猪八戒', value: 'ZhuBajie' }
      ],
      modalData: {
        isShow: false,
        isAdd: true,
        data: {
          label: '',
          value: ''
        }
      }
    }
  },
  methods: {
    addItem () {
      this.cancel()
      this.modalData.isAdd = true
      this.modalData.isShow = true
    },
    ok () {
      this.itemOptions.push(this.modalData.data)
      this.selectedItem = this.modalData.data.value
    },
    cancel () {
      this.modalData.data = {
        label: '',
        value: ''
      }
    },
    editItem (item) {
      this.modalData.isAdd = false
      this.modalData.data = {
        ...item
      }
      this.modalData.isShow = true
    },
    deleteItem (itemIndex) {
      this.$Modal.confirm({
        title: '确认删除',
        'z-index': 1000000,
        onOk: () => {
          this.itemOptions.splice(itemIndex, 1)
        },
        onCancel: () => {}
      })
    }
  },
  components: {},
}
</script>

<style scoped lang="scss">
</style>
