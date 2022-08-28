"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Commodity",
  props: {
    dataList: Array,
    itemW: {
      type: String,
      default: "375rpx"
    },
    imgH: {
      type: String,
      default: "375rpx"
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.dataList, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.pprice),
        d: common_vendor.t(item.dprice),
        e: common_vendor.t(item.discount),
        f: index
      };
    }),
    b: common_vendor.s("height: " + $props.imgH + ";"),
    c: common_vendor.s("width: " + $props.itemW + ";")
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/uniMall/components/common/Commodity.vue"]]);
wx.createComponent(Component);
