<template>
  <section class="zkui-user-alliance">
    <zk-head title='战略联盟'></zk-head>
    <div class="banner">

    </div>
    <div class="from">
      <div class="from-col">
        <popup-picker title="请选择联盟属性" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="please select"></popup-picker>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入对应姓名或单位名称"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入联系电话" mask="99999999999" :max="11" is-type="mobile"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入邮箱" name="email" is-type="email"></x-input>
      </div>
      <div class="from-col-checker">
        <div class="box">
          <p>请选择合作需求(多选)</p>
        </div>
        <checker v-model="demo1CheckboxMax" default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected">
          <checker-item value="1" type="default">商家对接</checker-item>
          <checker-item value="2" type="default">团队对接</checker-item>
          <checker-item value="3" type="default">代理加盟</checker-item>
          <checker-item value="4" type="default">投融资</checker-item>
        </checker>
      </div>
      <div class="from-col">
        <popup-picker title="选择区域" :data="addressData" :columns="3" show-name v-model="addressValue" ref="addressRef"></popup-picker>
      </div>
      <div class="from-col-checker">
        <x-textarea :max="50" placeholder="输入详细地址" :rows="3"></x-textarea>
      </div>
      <div class="sumbit">
        <x-button type="primary" action-type="button"> 确认提交</x-button>

      </div>
    </div>
    <!-- <zk-foot></zk-foot> -->
  </section>
</template>

<script>
  import { XInput, PopupPicker, Picker, Checker, CheckerItem, XTextarea, XButton } from 'zkui'
  import { ZkAddress } from 'widgets/address'
  import address from 'src/service/common/address'

  export default {
    components: {
      XInput,
      PopupPicker,
      Picker,
      Checker,
      CheckerItem,
      ZkAddress,
      XTextarea,
      XButton
    },
    data () {
      return {
        list1: [['个人', '机构', '企业', '政府']],
        value1: ['个人'],
        demo1CheckboxMax: [],
        addressValue: [],
        addressData: []
      }
    },
    mounted () {
      this.addressData = address.addressData
    },
    methods: {
      onChange (val) {
        console.log('val change', val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      }
    }
  }
</script>

<style lang="less">
  .zkui-user-alliance {
    .banner {
      width: 100%;
      height: 90px;
    }
    .from {
      padding: 0 40*@rem;
      .weui-cell:before {
        content: none;
      }
      .from-col {
        border: 2px solid @info;
        height: 42*@rem;
        border-radius: 20px;
        margin-bottom: 10px;
        .weui-label {
          color: @gray-600;
        }
        .vux-cell-value {
          color: @gray-600;
        }
      }
      .from-col-checker {
        min-height: 42*@rem;
        border: 2px solid @info;
        border-radius: 20px;
        margin-bottom: 10px;
        padding-bottom: 0.83333333rem;
        .box {
          padding: 0.83333333rem 1.25rem;
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          p {
            color: @gray-600;
          }
        }
        .vux-checker-item {
          color: @gray-600;
        }
      }
      .sumbit {
        padding: 2rem 4rem;
        button {
          height: 3rem;
        }
      }
    }
  }
</style>

