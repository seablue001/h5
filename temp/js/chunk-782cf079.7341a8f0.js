(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-782cf079"],{"558f":function(t,e,s){"use strict";var i=s("f103"),c=s.n(i);c.a},a580:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"make-order"},[s("div",{staticClass:"container"},[s("h3",{staticClass:"title"},[t._v("代客下单")]),t._m(0),s("div",{staticClass:"distribution-time"},[s("span",[t._v("配送时间")]),s("div",{on:{click:t.selectTime}},[t._v("\n    \t\t\t"+t._s(t.selectDistributionTime)+"\n    \t\t\t"),s("i",{staticClass:"cubeic-arrow"})])]),s("div",{staticClass:"search"},[s("cube-input",{attrs:{placeholder:t.placeholder,clearable:t.clearable}},[t._v("选择")]),s("cube-button",{attrs:{type:"submit"}},[t._v("搜索")])],1),s("div",{staticClass:"book-list"},[s("table",[t._m(1),s("tbody",[s("tr",[s("td",[s("div",{staticClass:"text"},[s("cube-checkbox",{attrs:{shape:"square"},model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}},[s("span")])],1)]),t._m(2),s("td",[s("div",{staticClass:"text book"},[t._v("\n\t\t\t\t\t\t\t\t黑猫警长\n\t\t\t\t\t\t\t\t"),s("div",{staticClass:"label"},[s("cube-button",[t._v("2-4岁")]),s("cube-button",[t._v("3-6岁")])],1)])]),t._m(3)]),s("tr",[s("td",[s("div",{staticClass:"text"},[s("cube-checkbox",{attrs:{shape:"square"},model:{value:t.checked2,callback:function(e){t.checked2=e},expression:"checked2"}},[s("span")])],1)]),t._m(4),s("td",[s("div",{staticClass:"text book"},[t._v("\n\t\t\t\t\t\t\t\t小猪佩琪\n\t\t\t\t\t\t\t\t"),s("div",{staticClass:"label"},[s("cube-button",[t._v("2-4岁")])],1)])]),t._m(5)])])]),s("cube-button",{staticClass:"add"},[t._v("添加")])],1),s("cube-button",{staticClass:"submit-order",on:{click:t.submitOrder}},[t._v("提交订单")])],1)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"memebr-address"},[s("p",[t._v("请添加收货地址")]),s("span",{staticClass:"add"},[t._v("新增")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("选择")]),s("th",[t._v("ID")]),s("th",[t._v("图书名称")]),s("th",[t._v("库存")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("div",{staticClass:"text"},[t._v("10001")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("div",{staticClass:"text"},[t._v("2")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("div",{staticClass:"text"},[t._v("10002")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("div",{staticClass:"text"},[t._v("1")])])}],a={data:function(){return{timePicker:null,distributionTimes:[{text:"工作日",value:"工作日"},{text:"周末",value:"周末"},{text:"工作日及周末",value:"工作日及周末"}],selectDistributionTime:"工作日及周末",placeholder:"请输入图书id/名称/标签",clearable:{visible:!0,blurHidden:!0},checked1:!1,checked2:!0}},props:{},methods:{selectTime:function(){this.timePicker?this.timePicker.show():this.timePicker=this.$createPicker({title:"配送时间",data:[this.distributionTimes],selectedIndex:[2],onSelect:this.selectHandle,onCancel:this.cancelHandle}).show()},selectHandle:function(t,e,s){this.selectDistributionTime=t[0]},cancelHandle:function(){},submitOrder:function(){var t=this;this.$createDialog({type:"confirm",icon:"cubeic-alert",title:"订单操作",content:"是否确定提交此订单",confirmBtn:{text:"确定按钮",active:!0,disabled:!1,href:"javascript:;"},cancelBtn:{text:"取消按钮",active:!1,disabled:!1,href:"javascript:;"},onConfirm:function(){t.$createToast({type:"correct",time:1e3,txt:"订单已提交"}).show()},onCancel:function(){}}).show()}}},n=a,l=(s("558f"),s("048f")),r=Object(l["a"])(n,i,c,!1,null,"0a972a20",null);r.options.__file="MakeOrder.vue";e["default"]=r.exports},f103:function(t,e,s){}}]);
//# sourceMappingURL=chunk-782cf079.7341a8f0.js.map