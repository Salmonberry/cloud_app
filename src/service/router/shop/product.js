import equipment from 'src/service/common/equipment'
export default [{
    path: '/product/class',
    //  分类页面
    meta: {
      title: '分类'
    },
    name: 'product_class',
    component: function (resolve) {
      require(['src/views/shop/product/class.vue'], resolve)
    }
  },
  {
    path: '/product/list', // 商品列表页
    params: {
      value: ''
    },
    meta: {
      title: '商品列表页'
    },
    name: 'product_list',
    component: function (resolve) {
      require(['src/' + equipment.equipment + '/shop/product/list.vue'], resolve)
    }
  },
  {
    path: '/product/show/:id', // 商品详情页
    meta: {
      title: '商品详情'
    },
    name: 'product_show',
    component: function (resolve) {
      require(['src/' + equipment.equipment + '/shop/product/show'], resolve)
    }
  },
  {
    path: '/product/show1/:id', // 商品详情页
    meta: {
      title: '商品详情'
    },
    name: 'product_show1',
    component: function (resolve) {
      require(['src/' + equipment.equipment + '/shop/product/show1'], resolve)
    }
  },
  {
    path: '/product/search', // 商品搜索页
    meta: {
      title: '商品搜索'
    },
    name: 'product_search',
    component: function (resolve) {
      require(['src/views/shop/product/search.vue'], resolve)
    }
  },
  {
    path: '/user/product/footprint', // 商品搜索页
    meta: {
      title: '我的足迹',
      login: true
    },
    component: function (resolve) {
      require(['src/views/shop/product/footprint.vue'], resolve)
    }
  },
  {
    path: '/pc/index', // 商品搜索页
    meta: {
      title: 'PC首页',
      login: true
    },
    component: function (resolve) {
      require(['src/pages/index'], resolve)
    }
  }
]
