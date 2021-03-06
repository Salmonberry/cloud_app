// widgets 下面的模块在zkui之上，zkui是底层UI库，基本上满足了系统所需要的样式
// widgets 在zkui上进行在再度封装，主要是包含了数据，包括了数据交互
// wigets 下面的模块后期主要配合后台的可视化编辑来
// widgts 下面模块全部以zk-开头

import ZkHead from 'src/widgets/zk-head' // 头部
import ZkFoot from 'src/widgets/zk-foot' // 底部
import ZkSwiper from 'src/widgets/zk-swiper' // 轮播图
import ZkCell from 'src/widgets/zk-cell' // 轮播图
import ZkGrid from 'src/widgets/zk-grid'
import ZkList from 'src/widgets/zk-list'
import ZkProductItem from 'src/widgets/zk-product-item'
import ZkPhoneVerifiy from 'src/widgets/zk-phone-verifiy' // 手机验证码
import ZkPassword from 'src/widgets/zk-password' // 输入支付密码
import ZkPay from 'src/widgets/zk-pay' // 支付方式列表
import ZkAddress from 'src/widgets/zk-address' // 支付方式列表
import ZkUpload from 'src/widgets/zk-upload/index' // 图片上传
import ZkdebtFoot from 'src/widgets/zkdebt-foot' // 云债通专用底部
import ZkNotdata from 'src/widgets/zk-notdata' // 暂无数据
import ZkSinglead from 'src/widgets/zk-singleAd' // 广告图
import ZkGroupbuy from 'src/widgets/zk-groupbuy' // 拼团
import ZkTimedown from 'src/widgets/zk-tiemdown' // 倒计时

export {
  ZkSwiper,
  ZkHead,
  ZkFoot,
  ZkCell,
  ZkGrid,
  ZkProductItem,
  ZkList,
  ZkPhoneVerifiy,
  ZkPassword,
  ZkPay,
  ZkAddress,
  ZkUpload,
  ZkdebtFoot,
  ZkNotdata,
  ZkSinglead,
  ZkGroupbuy,
  ZkTimedown
}
