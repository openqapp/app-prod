(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{829:function(t,e,n){"use strict";n.r(e);var c={props:{nft:{type:Object,default:null},perms:{type:Array,default:function(){return[]}}}},o=n(11),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-around align-items-center px-2"},[n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("MINT")||t.perms[0]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1),t._v(" "),n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("TRANSFER")||t.perms[1]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1),t._v(" "),n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("SET_ISSUE_GOVTOKEN")||t.perms[2]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1),t._v(" "),n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("CREATE_PROPOSAL")||t.perms[3]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);