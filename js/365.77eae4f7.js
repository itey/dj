"use strict";(self["webpackChunkDOUJI_AI"]=self["webpackChunkDOUJI_AI"]||[]).push([[365],{56343:function(t,e,a){a.d(e,{Z:function(){return c}});a(57658);var l=function(){var t=this,e=t._self._c;return t.item&&t.item.image?e("div",{staticClass:"product-item"},[e("img",{staticStyle:{width:"100%",height:"194px"},attrs:{src:t.item.image}}),t.item.pltform?e("span",{staticClass:"type"},[t._v(t._s(t.item.pltform))]):t._e(),e("div",{staticClass:"label text-color",on:{click:function(e){return t.$router.push({path:"/news-detail",query:{tokenId:t.item.token_id}})}}},[t._v(t._s(t.item.title))]),e("div",{staticClass:"product-bottom"},[t._m(0),e("div",{staticClass:"bottom-right"},[e("img",{staticStyle:{width:"16px",height:"14px"},attrs:{src:a(76960)}}),e("span",{staticClass:"star text-sub-color"},[t._v(t._s(t.item.praise_count))])])])]):t._e()},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bottom-left"},[e("span",{staticClass:"value text-color"},[t._v("2500")]),e("span",{staticClass:"transform text-sub-color"},[t._v("≈$0.57")])])}],o={name:"ProductItem",props:{item:{type:Object}}},s=o,r=a(1001),n=(0,r.Z)(s,l,i,!1,null,"70ecbd28",null),c=n.exports},33365:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"market-container"},[e("el-breadcrumb",{staticStyle:{"margin-top":"38px"},attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("Home")]),e("el-breadcrumb-item",[t._v("Marketplace")])],1),t._m(0),e("div",{staticClass:"search-container"},[e("el-select",{staticStyle:{width:"209px"},attrs:{clearable:"",filterable:"",placeholder:"ALL Types"},on:{change:t.onTypeChange},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},t._l(t.typeOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:"en"==t.$i18n.locale?a.e_name:a.c_name,value:a.e_name}})})),1),e("el-select",{staticStyle:{width:"395px"},attrs:{clearable:"",filterable:"",placeholder:"ALL Category"},model:{value:t.categoryValue,callback:function(e){t.categoryValue=e},expression:"categoryValue"}},t._l(t.categoryOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:"en"==t.$i18n.locale?a.e_name:a.c_name,value:a.e_name}})})),1),e("el-select",{staticStyle:{width:"209px"},attrs:{clearable:"",filterable:"",placeholder:"ALL Platform"},model:{value:t.platformValue,callback:function(e){t.platformValue=e},expression:"platformValue"}},t._l(t.platformOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:"en"==t.$i18n.locale?a.e_name:a.c_name,value:a.e_name}})})),1),e("el-select",{staticStyle:{width:"209px"},attrs:{clearable:"",filterable:"",placeholder:"Most viewed"},model:{value:t.viewedValue,callback:function(e){t.viewedValue=e},expression:"viewedValue"}},t._l(t.viewedOptions,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),e("el-input",{staticStyle:{width:"344px"},attrs:{placeholder:"Search by name or Token ID"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e("div",{staticClass:"content"},[e("div",{staticClass:"list"},t._l(t.list,(function(t,a){return e("div",{key:a,staticClass:"item"},[e("product-item",{attrs:{item:t}})],1)})),0),e("el-pagination",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{background:"",layout:"pager,next","next-text":"下一页","page-count":t.pageSize,total:t.totalCount},on:{"current-change":t.onPageChange}})],1)],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-container"},[e("span",{staticClass:"text-color title"},[t._v("ALL DOUJI NFTs")]),e("span",{staticClass:"text-sub-color sub"},[t._v("28,308 result")])])}],o=a(56343),s=a(96347),r={name:"market-view",components:{ProductItem:o.Z},data(){return{typeOptions:[],typeValue:"",categoryOptions:[],categoryValue:"",platformOptions:[],platformValue:"",viewedOptions:[{value:"Late creation time",label:"Late creation time"},{value:"Early creation time",label:"Early creation time"},{value:"High price",label:"High price"},{value:"Low price",label:"Low price"}],viewedValue:"Late creation time",list:[],pageNo:1,pageSize:20,totalCount:0}},created(){this.loadTypeList(),this.loadPageList()},methods:{onPageChange(t){this.pageNo=t,this.loadPageList()},loadPageList(){const t={page:this.pageNo,content_type:this.typeValue,category:this.categoryValue,pltform:this.platformValue};var e=this.$loading({background:"rgba(0, 0, 0, 0.8)"});(0,s.WZ)(t).then((t=>{1==t.code&&(this.list=t.data.list,this.totalCount=t.data.pageCount,this.pageNo=t.data.page)})).finally((()=>{e.close()}))},onTypeChange(t){this.categoryOptions=[],this.platformOptions=[],this.loadCategoryList(t),this.loadPlatformList(t),this.typeValue="",this.categoryValue=""},loadTypeList(){(0,s.Xw)().then((t=>{1==t.code?this.typeOptions=t.data.list:this.$toast.error(t.message)})).catch((t=>{console.log(t),this.$toast.error(this.$t("common.network_error"))}))},loadCategoryList(t){t&&(0,s.RP)(t).then((t=>{1==t.code?this.categoryOptions=t.data.list:this.$toast.error(t.message)})).catch((t=>{console.log(t),this.$toast.error(this.$t("common.network_error"))}))},loadPlatformList(t){(0,s.dG)(t).then((t=>{1==t.code?this.platformOptions=t.data.list:this.$toast.error(t.message)})).catch((t=>{console.log(t),this.$toast.error(this.$t("common.network_error"))}))}}},n=r,c=a(1001),u=(0,c.Z)(n,l,i,!1,null,"0234bf1c",null),p=u.exports},76960:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAA7VJREFUSEu9ll2IG1UUx/9nZly3W6EvrSzkRdAqfVHxTQulfqCVqijIIq0tBOZOQma61PVBBZURFPyAotnNpplkG1iVdcM+Cn3wYdWqiA+KCAVZiy/9ABdhU4p2s8k9cmcncTqZZLJx67wl95z7/51zzzn3Em7SV61WRxuNhpbJZP7qJ0Fxi9OVyn5NymMg2g/gdgBrYD4PYGn18uVF13WbcX75ubn7dOaTYD4EYDyw+ZOIvmApp23L+i7qdwNAqVTavaHrc8T8TE9qohViPp4T4vu2jeu6xu5U6hQBDoDYoALbBUNKM5yVjnGhWh1Hs3kOwF2BcR1ENWL+WQI6gAcIeB7ATgDXmchyTPPjWq02slqvLwF4OvDbAFBjoi8h5VVN0+5k5hcA3OuvMy+vX7t2eGpq6m/10wdwXVfbk0p9A+DBYJPFhmFkX0qn18KZyJ85s0dvtRYAPBr8fxpAKiT+S0vK5yYzmQthP2amYrnsMNGHADQGCo4QKlubAAXPOwqiT3xAolOOab7c6whiIt4MDPjhFikfz2Qy9V6+s56XZaIigJbeau3LZrMrmwDl8rcAHgJwccww9qbT6ev9KrcLgnnZYH4qqeLDWkT0ds4036AP5ud3jq2vX/VTkxB9GKoDwawZzBODiCv/UBbO2UIcoBnPu5uIfg0KxLItqzzoaFAQynZiYqIxqM9MpXKAmL8C8JstxF4qFot3SMP43S8I5smcZU0PutkwdoVK5RCYz6ruylnW/ZTP52/Vd+xQ1T4KYNEWQrXMTftmPO8tInqzrdXugs9BdBjAhgTuOSGEn5Ht/gqFwm0YGVkJpuQRW4gFH2C6XD6oAcuB4I+GlI/0a6dhwGq1mr66trYEomfV+a9eurRPjfTOJJz1vHkmOjZoT28FQon/Ua/PE3BEZZmJHnNM82u/7tob+bUwOnoWRA9vJ0REXDLzUceyPmvrRi+jsSaRqodtgYiKg/m4bVmfhrPXdXOVSqVtgYiIq0voxaj4DUcQpvqvEFFxBnKOEOoO6Pp63t3DQmxFvGcG2phbhYhJ+0nbsj7q1zH9Xi++XxcE83lJ9MSkEBfDG3eJA6/ZQryb1K6JAB0IXV8C85NB2i40gYNtiGHFE48gTK9eNbOVyiyAbBhifNeuK6Eho5besYV4PSny2DmQ5BQHwcBP2HwrqtfUe45pvpq0T985kOQchejYM79vW9YrSf7R9YFqIOoUA3E6Z5o5IuL/BcBP9781gWHFt1SEcZEpCH+TISJv7/cPGgQAO01TcgwAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=365.77eae4f7.js.map