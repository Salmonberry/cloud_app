<template>
  <section class="zkui-order-isonLineDeliver">
    <zk-head title='线下发货'></zk-head>
    <div class="order-isonLineDeliver-box">
      <ul class="zkui-order-cart-box">
        <li class="zkui-order-cart-item">
          <div class="order-cart-commodity">
            <div slot="content" class="demo-content " style="min-height:7.8rem">
              <ul class="flex order-cart-commodity-box" v-for="(item,index) in data" :key="index">
                <li class="flex_one">
                  <div class="order-cart-commodit-into flex">
                    <div class="order-cart-commodity-into_left">
                      <router-link :to="'/product/show/'+item.productId">
                        <img :src="item.thumbnailUrl" alt="">
                      </router-link>
                    </div>
                    <div class="flex_one order-cart-commodity-into_right ">
                      <router-link :to="'/product/show/'+item.productId">
                        <p>{{item.name}}</p>
                      </router-link>
                      规格：
                      <span v-for="(t,i) in item.skuStocks" :key="i">{{t.propertyValueDesc}}</span>
                      <div class="price-box flex">
                        <div class="price-box-right flex_one">
                          <div class="flex">
                            <div class="right-icon">
                              虚拟
                            </div>
                            <div class="right-test">
                              库存：{{item.skuStocks[0].stock}}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="isonline-bottom">
      <x-button type="primary" @click.native="sumbit()">确定</x-button>
    </div>
  </section>
</template>

<script>
  import { XButton } from 'zkui'
  import userService from 'src/service/api/erp.api'
  export default {
    data () {
      return {
        data: []
      }
    },
    components: {
      XButton
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        let par = {
          OrderId: this.$route.params.id
        }
        console.log('this.$route.params.id', this.$route.params.id)
        var response = await userService.offlineDeliveryProduct(par)
        if (response.data.status === 1) {
          this.data = response.data.result
        }
        console.log('response', response)
      },
      async sumbit () {
        let par = {
          UserId: this.LoginUser().id,
          OrderId: this.$route.params.id
        }
        console.log('par', par)
        var response = await userService.offlineDelivery(par)
        console.log('response', response)
        if (response.data.status === 1) {
          this.$vux.toast.success(response.data.message)
          this.$router.push({
            name: 'order_Deliver'
          })
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>
<style  lang="less">
  .zkui-order-isonLineDeliver {
    .flex {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .flex_one {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .zkui-order-cart-box {
      padding-bottom: 3.5rem;
      .cart_item-box {
        border-bottom: 8 * @rem solid rgba(229, 229, 229, 0.5);
        .weui-cells_checkbox {
          .vux-checklist-icon-checked::before {
            margin-left: 0.5rem;
            margin-right: 0;
            font-size: 1.3rem;
          }
        }
        .weui-cells:after {
          content: none;
        }
        .weui-cells:before {
          content: none;
        }
      }
      .weui-cells_checkbox {
        .cart_item-title {
          padding: 0.3rem 0;
          border-bottom: 1px solid rgba(229, 229, 229, 0.5);
        }
      }
      .zkui-order-cart-item {
        background: @white;
      }
      .order-cart-store {
        height: 3.5rem;
        border-bottom: 1px solid @load-more-line-color;
        background: @white;
        h2 {
          line-height: 3.5rem;
          padding-left: 5 * @rem;
          color: @black;
          font-size: @h5-font-size;
        }
      }
      .order-cart-commodity {
        min-height: 7.8rem;
        ul.order-cart-commodity-box {
          height: 100%;
        }
        .order-cart-commodity-left {
          width: 2.5rem;
          position: relative;
          .weui-cells_checkbox {
            width: 2.5rem;
            height: 3.5rem;
            margin-top: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            .weui-cell {
              padding: 0;
            }
          }
          .weui-cells:before,
          .weui-cells:after {
            content: none;
          }
        }
        .flex_one {
          .order-cart-commodit-into {
            height: 100%;
            .order-cart-commodity-into_left {
              width: 6.5rem;
              height: 6.5rem;
              margin-top: 0.8rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .order-cart-commodity-into_right {
              border-bottom: 1px solid rgba(229, 229, 229, 0.5);
              margin-top: 0.8rem;
              padding: 0 0.8rem;
              padding: 0 0.8rem 0.8rem 0.8rem;
              position: relative;
              min-height: 7rem;
              p {
                padding: 5px 0;
                font-size: @h6-font-size;
                color: @brand;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              span {
                font-size: 0.8rem;
                color: @gray-500;
              }
              div.price-box {
                width: 100%;
                height: 2.5rem;
                line-height: 2.5rem;
                .price-box-left {
                  width: 3rem;
                  line-height: 2.5rem;
                  height: 2.5rem;
                  font-size: @h5-font-size;
                  text-align: center;
                  font-weight: bold;
                }
                .price-box-right {
                  line-height: 2.5rem;
                  height: 2.5rem;
                  .right-icon {
                    margin-top: 0.5rem;
                    width: 3.2rem;
                    height: 1.5rem;
                    font-size: @h6-font-size;
                    font-weight: bold;
                    line-height: 1.5rem;
                    text-align: center;
                    border-radius: 5px;
                    color: @warning;
                    border: 2px solid @warning;
                  }
                  .right-test {
                    margin-left: 1.5rem;
                    line-height: 2.5rem;
                    height: 2.5rem;
                    font-size: @h6-font-size;
                    color: @gray-600;
                  }
                }
              }
            }
          }
        }
      }
    }
    .isonline-bottom {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 3.5rem;
      width: 100%;
      border-top: 1px solid rgba(229, 229, 229, 0.7);
      border-bottom: 1px solid rgba(229, 229, 229, 0.7);
      .weui-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30%;
        height: 3.5rem;
        border-radius: 0;
      }
    }
  }
</style>

