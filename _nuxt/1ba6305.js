(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{863:function(t,e,n){"use strict";n.r(e);n(143),n(103);var r={props:{user:{type:Object,default:null},address:{type:String,default:""}},data:function(){return{copyAddressSuccess:!1,copyDirectLinkSuccess:!1}},methods:{getDirectLink:function(t){return"".concat(window.location.origin,"/#/u/").concat(t,"/1.5")},copiedAddress:function(){var t=this;this.copyAddressSuccess=!0,setTimeout((function(){t.copyAddressSuccess=!1}),1e3)},copiedDirectLink:function(){var t=this;this.copyDirectLinkSuccess=!0,setTimeout((function(){t.copyDirectLinkSuccess=!1}),1e3)}}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border rounded-xl px-1",staticStyle:{"margin-top":"-56px","padding-top":"56px"}},[n("div",{staticClass:"embed rounded-top pb-3 px-2"},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",{staticClass:"d-flex"},[n("GithubAvatar",{attrs:{"profile-url":t.user.url,"avatar-url":t.user.avatarUrl,size:"1.5rem"}}),t._v(" "),n("b",{staticClass:"text-nowrap text-truncate"},[t._v(t._s(t.user.name))])],1),t._v(" "),n("div",{staticClass:"text-nowrap"},[n("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.getDirectLink(t.user.login),expression:"getDirectLink(user.login)"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copiedDirectLink,expression:"copiedDirectLink",arg:"success"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Send link",trigger:"hover"},expression:"{\n            content: 'Send link',\n            trigger: 'hover',\n          }"}],staticClass:"btn btn-sm btn-light"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.copyDirectLinkSuccess?n("span",{staticClass:"text-muted"},[t._v("\n              copied\n              "),n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"],"fixed-width":""}})],1):n("font-awesome-icon",{staticClass:"text-muted",attrs:{icon:["fas","share-alt"],"fixed-width":""}})],1)],1),t._v(" "),t.address?n("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.address,expression:"address"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copiedAddress,expression:"copiedAddress",arg:"success"},{name:"tooltip",rawName:"v-tooltip",value:{content:t.address.substr(0,12)+"..."+t.address.substr(32),trigger:"hover"},expression:"{\n            content: address.substr(0, 12) + '...' + address.substr(32),\n            trigger: 'hover',\n          }"}],staticClass:"btn btn-sm btn-light"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.copyAddressSuccess?n("span",{staticClass:"text-muted"},[t._v("\n              copied\n              "),n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"],"fixed-width":""}})],1):n("font-awesome-icon",{staticClass:"text-muted",attrs:{icon:["fab","ethereum"],"fixed-width":""}})],1)],1):t._e(),t._v(" "),t.user.email?n("a",{staticClass:"btn btn-sm btn-light text-muted",attrs:{href:"mailto:"+t.user.email}},[n("font-awesome-icon",{attrs:{icon:["fas","envelope"],"fixed-width":""}})],1):t._e(),t._v(" "),t.user.twitterUsername?n("a",{staticClass:"btn btn-sm btn-light text-muted",attrs:{href:"https://twitter.com/"+t.user.twitterUsername,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"],"fixed-width":""}})],1):t._e(),t._v(" "),t.user.websiteUrl?n("a",{staticClass:"btn btn-sm btn-light text-muted",attrs:{href:t.user.websiteUrl,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fas","globe-americas"],"fixed-width":""}})],1):t._e()])]),t._v(" "),n("small",{staticClass:"d-flex justify-content-between text-muted mt-1"},[n("span",[t._v("GitHub user since:")]),t._v(" "),n("span",[t._v(t._s(t._f("moment")(t.user.createdAt,"MMMM Do YYYY")))])]),t._v(" "),n("small",{staticClass:"d-flex justify-content-between text-muted mt-1"},[n("span",[t._v("Last seen:")]),t._v(" "),n("span",[t._v(t._s(t.$moment(t.user.updatedAt).fromNow()))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GithubAvatar:n(385).default})}}]);