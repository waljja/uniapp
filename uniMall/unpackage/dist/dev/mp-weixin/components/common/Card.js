"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Card",
  props: {
    cardTitle: String
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.cardTitle)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3879f0e9"], ["__file", "D:/uniapp/uniMall/components/common/Card.vue"]]);
wx.createComponent(Component);
