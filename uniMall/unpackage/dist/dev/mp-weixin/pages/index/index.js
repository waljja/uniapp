"use strict";
var common_vendor = require("../../common/vendor.js");
const IndexSwiper = () => "../../components/index/IndexSwiper2.js";
const Recommend = () => "../../components/index/Recommend.js";
const Card = () => "../../components/common/Card.js";
const CommodityList = () => "../../components/common/CommodityList.js";
const Banner = () => "../../components/index/Banner.js";
const Icons = () => "../../components/index/Icons.js";
const Hot = () => "../../components/index/Hot.js";
const Shop = () => "../../components/index/Shop.js";
const _sfc_main = {
  components: {
    IndexSwiper,
    Recommend,
    Card,
    CommodityList,
    Banner,
    Icons,
    Hot,
    Shop
  },
  data() {
    return {
      topBarIndex: 0,
      topBar: [
        {
          name: "1"
        },
        {
          name: "2"
        },
        {
          name: "3"
        },
        {
          name: "4"
        },
        {
          name: "5"
        },
        {
          name: "6"
        }
      ]
    };
  },
  methods: {
    changeTab(index) {
      if (this.topBarIndex === index) {
        return;
      }
      this.topBarIndex = index;
    },
    onChangeTab(e) {
      this.changeTab(e.detail.current);
    }
  }
};
if (!Array) {
  const _component_Banner = common_vendor.resolveComponent("Banner");
  const _component_IndexSwiper = common_vendor.resolveComponent("IndexSwiper");
  const _component_Icons = common_vendor.resolveComponent("Icons");
  const _component_Recommend = common_vendor.resolveComponent("Recommend");
  const _component_Card = common_vendor.resolveComponent("Card");
  const _component_CommodityList = common_vendor.resolveComponent("CommodityList");
  const _component_Hot = common_vendor.resolveComponent("Hot");
  const _component_Shop = common_vendor.resolveComponent("Shop");
  const _component_card = common_vendor.resolveComponent("card");
  (_component_Banner + _component_IndexSwiper + _component_Icons + _component_Recommend + _component_Card + _component_CommodityList + _component_Hot + _component_Shop + _component_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.topBar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.changeTab(index), index)
      };
    }),
    b: common_vendor.f($data.topBar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index
      };
    }),
    c: common_vendor.o((...args) => $options.onChangeTab && $options.onChangeTab(...args)),
    d: $data.topBarIndex,
    e: common_vendor.p({
      cardTitle: "\u731C\u4F60\u559C\u6B22"
    }),
    f: common_vendor.p({
      cardTitle: "\u4E3A\u60A8\u63A8\u8350"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4bde1ecc"], ["__file", "C:/Users/dingguozhao/Desktop/uniapp/uniMall/pages/index/Index.vue"]]);
wx.createPage(MiniProgramPage);
