"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const search_data = common_vendor.reactive({
      s_height: 0,
      s_top: 0
    });
    const { s_height, s_top } = common_vendor.toRefs(search_data);
    common_vendor.onMounted(() => {
      capSule();
    });
    function capSule() {
      const but_data = wx.getMenuButtonBoundingClientRect();
      console.log(but_data);
      search_data.s_height = but_data.top;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s("height:" + common_vendor.unref(s_top) + "px;")
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/dingguozhao/Desktop/uniMall/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
