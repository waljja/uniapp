"use strict";
var common_vendor = require("../../common/vendor.js");
const Commodity = () => "../common/Commodity.js";
const _sfc_main = {
  name: "Shop",
  components: {
    Commodity
  },
  data() {
    return {
      shopList: [
        {
          id: 1,
          imgUrl: "../../static/commodity/\u88D9\u5B50\u7EFF.jpg",
          name: "\u88D9\u5B50\u7EFF",
          pprice: "1000",
          dprice: "2000",
          discount: "5"
        },
        {
          id: 2,
          imgUrl: "../../static/commodity/\u88D9\u5B50\u767D.jpg",
          name: "\u88D9\u5B50\u767D",
          pprice: "1000",
          dprice: "2000",
          discount: "5"
        },
        {
          id: 3,
          imgUrl: "../../static/commodity/\u88D9\u5B50\u7EA2.jpg",
          name: "\u88D9\u5B50\u7EA2",
          pprice: "1000",
          dprice: "2000",
          discount: "5"
        },
        {
          id: 4,
          imgUrl: "../../static/commodity/\u5973\u88C5.jpg",
          name: "\u5973\u88C5",
          pprice: "1000",
          dprice: "2000",
          discount: "5"
        },
        {
          id: 5,
          imgUrl: "../../static/commodity/1.jpg",
          name: "\u624B\u673A",
          pprice: "1000",
          dprice: "2000",
          discount: "5"
        },
        {
          id: 6,
          imgUrl: "../../static/commodity/2.jpg",
          name: "\u6298\u53E0",
          pprice: "1000",
          dprice: "2000",
          discount: "5"
        }
      ]
    };
  }
};
if (!Array) {
  const _component_Commodity = common_vendor.resolveComponent("Commodity");
  _component_Commodity();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      dataList: $data.shopList,
      wrap: "nowrap",
      itemW: "200rpx",
      imgH: "200rpx"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aaa41fa4"], ["__file", "C:/Users/dingguozhao/Desktop/uniapp/uniMall/components/index/Shop.vue"]]);
wx.createComponent(Component);
