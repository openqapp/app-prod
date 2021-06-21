(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9,11,27],{830:function(t,e,n){"use strict";n.r(e);var r={props:{githubUserId:{type:String,default:""},fromAddress:{type:String,default:""},forceShowAddress:{type:Boolean,default:!1}},data:function(){return{githubUser:null}},mounted:function(){var t=this;this.githubUserId?this.$github.getUserById(this.githubUserId).then((function(e){t.githubUser=e})):this.fromAddress&&this.$subgraph.getUserAddress(this.fromAddress).then((function(e){e&&t.$github.getUserById(e.user.id).then((function(e){t.githubUser=e}))}))}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.githubUser?n("div",{staticClass:"d-flex align-items-center"},[n("GithubAvatar",{attrs:{"profile-url":t.githubUser.url,"avatar-url":t.githubUser.avatarUrl}}),t._v(" "),n("div",{staticClass:"d-flex flex-column"},[n("a",{staticClass:"font-weight-bold",attrs:{href:t.githubUser.url,target:"_blank"}},[t._v("\n        "+t._s(t.githubUser.login)+"\n      ")]),t._v(" "),t.fromAddress&&t.forceShowAddress?n("a",{staticClass:"d-flex text-muted",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[n("small",[n("AddressShort",{attrs:{address:t.fromAddress}})],1)]):t._e()])],1):t.fromAddress?n("div",[n("a",{staticClass:"font-weight-bold",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[n("AddressShort",{attrs:{address:t.fromAddress}})],1)]):n("div",[n("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GithubAvatar:n(385).default,AddressShort:n(384).default})},845:function(t,e,n){"use strict";n.r(e);n(219);var r=n(0),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{issue:{type:Object,default:null}},data:function(){return{deposits:[]}},computed:l(l({},Object(o.b)(["githubUser"])),{},{amount:function(){return this.deposits.reduce((function(t,e){return BigInt(t)+BigInt(e.amount)}),BigInt("0"))}}),mounted:function(){var t=this;this.$subgraph.getIssue(this.issue.id).then((function(e){e&&(t.deposits=e.deposits)}))}},m=n(9),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border rounded-xl px-2 pb-2 mb-2",staticStyle:{"margin-top":"-56px","padding-top":"56px"}},[n("a",{staticClass:"text-truncate d-block font-weight-bold text-dark mr-1 mb-1",attrs:{href:t.issue.url,target:"_blank",title:t.issue.title}},[n("svg",{class:"text-"+(t.issue.closed?"danger":"success"),staticStyle:{width:"16px",height:"16px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"}})]),t._v("\n    "+t._s(t.issue.title)+"\n  ")]),t._v(" "),n("span",{staticClass:"d-flex justify-content-between align-items-start"},[n("small",{staticClass:"text-muted mr-2 d-flex align-items-center"},[t._v("\n      "+t._s(t._f("moment")(t.issue.createdAt,"MMM Do YYYY"))+"\n      by\n      "),n("a",{staticClass:"mx-1 text-muted",attrs:{href:t.issue.author.url,target:"_blank"}},[n("b",[t._v(t._s(t.githubUser&&t.githubUser.login===t.issue.author.login?"you":t.issue.author.login))])]),t._v(" "),n("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:["far","comment-alt"]}}),t._v("\n      "+t._s(t.issue.comments.totalCount)+"\n    ")],1),t._v(" "),t.amount?n("small",{staticClass:"font-weight-bold text-nowrap bg-secondary text-white rounded-xl px-2 py-1"},[t._v("\n      "+t._s(Number(t.$web3utils.fromWei(t.amount.toString(),"ether")).toFixed(2))+"\n      ETH\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},863:function(t,e,n){"use strict";n.r(e);n(143),n(103);var r={props:{user:{type:Object,default:null},address:{type:String,default:""}},data:function(){return{copyAddressSuccess:!1,copyDirectLinkSuccess:!1}},methods:{getDirectLink:function(t){return"".concat(window.location.origin,"/#/u/").concat(t,"/1.5")},copiedAddress:function(){var t=this;this.copyAddressSuccess=!0,setTimeout((function(){t.copyAddressSuccess=!1}),1e3)},copiedDirectLink:function(){var t=this;this.copyDirectLinkSuccess=!0,setTimeout((function(){t.copyDirectLinkSuccess=!1}),1e3)}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border rounded-xl px-1",staticStyle:{"margin-top":"-56px","padding-top":"56px"}},[n("div",{staticClass:"embed rounded-top pb-3 px-2"},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",{staticClass:"d-flex"},[n("GithubAvatar",{attrs:{"profile-url":t.user.url,"avatar-url":t.user.avatarUrl,size:"1.5rem"}}),t._v(" "),n("b",{staticClass:"text-nowrap text-truncate"},[t._v(t._s(t.user.name))])],1),t._v(" "),n("div",{staticClass:"text-nowrap"},[n("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.getDirectLink(t.user.login),expression:"getDirectLink(user.login)"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copiedDirectLink,expression:"copiedDirectLink",arg:"success"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Send link",trigger:"hover"},expression:"{\n            content: 'Send link',\n            trigger: 'hover',\n          }"}],staticClass:"btn btn-sm btn-light"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.copyDirectLinkSuccess?n("span",{staticClass:"text-muted"},[t._v("\n              copied\n              "),n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"],"fixed-width":""}})],1):n("font-awesome-icon",{staticClass:"text-muted",attrs:{icon:["fas","share-alt"],"fixed-width":""}})],1)],1),t._v(" "),t.address?n("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.address,expression:"address"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copiedAddress,expression:"copiedAddress",arg:"success"},{name:"tooltip",rawName:"v-tooltip",value:{content:t.address.substr(0,12)+"..."+t.address.substr(32),trigger:"hover"},expression:"{\n            content: address.substr(0, 12) + '...' + address.substr(32),\n            trigger: 'hover',\n          }"}],staticClass:"btn btn-sm btn-light"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.copyAddressSuccess?n("span",{staticClass:"text-muted"},[t._v("\n              copied\n              "),n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"],"fixed-width":""}})],1):n("font-awesome-icon",{staticClass:"text-muted",attrs:{icon:["fab","ethereum"],"fixed-width":""}})],1)],1):t._e(),t._v(" "),t.user.email?n("a",{staticClass:"btn btn-sm btn-light text-muted",attrs:{href:"mailto:"+t.user.email}},[n("font-awesome-icon",{attrs:{icon:["fas","envelope"],"fixed-width":""}})],1):t._e(),t._v(" "),t.user.twitterUsername?n("a",{staticClass:"btn btn-sm btn-light text-muted",attrs:{href:"https://twitter.com/"+t.user.twitterUsername,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"],"fixed-width":""}})],1):t._e(),t._v(" "),t.user.websiteUrl?n("a",{staticClass:"btn btn-sm btn-light text-muted",attrs:{href:t.user.websiteUrl,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fas","globe-americas"],"fixed-width":""}})],1):t._e()])]),t._v(" "),n("small",{staticClass:"d-flex justify-content-between text-muted mt-1"},[n("span",[t._v("GitHub user since:")]),t._v(" "),n("span",[t._v(t._s(t._f("moment")(t.user.createdAt,"MMMM Do YYYY")))])]),t._v(" "),n("small",{staticClass:"d-flex justify-content-between text-muted mt-1"},[n("span",[t._v("Last seen:")]),t._v(" "),n("span",[t._v(t._s(t.$moment(t.user.updatedAt).fromNow()))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GithubAvatar:n(385).default})},884:function(t,e,n){"use strict";n.r(e);n(143),n(105),n(21),n(64),n(218),n(103);var r=n(0),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={mixins:[n(46).a],data:function(){return{username:"",user:null,userEthAddress:null,issueUrl:"",issue:null,loadingRecipient:!1,amount:0,sending:!1,showSendSuccess:!1,showIssueDepositSuccess:!1,loadRecipientTimeout:null,refundingUserDeposit:0,departmentForIssue:null}},computed:l(l({},Object(o.b)(["account","selectedRecipientType","redirectPrefills","ownDepartments","githubUser","outgoingUserDeposits"])),{},{confirmDisabled:function(){if(!this.sending&&this.amount>0){if("User"===this.selectedRecipientType&&this.user)return!1;if("Issue"===this.selectedRecipientType&&this.issue)return!1}return!0}}),watch:{account:function(){this.$store.dispatch("updateOutgoingUserDeposits")},redirectPrefills:function(){this.redirectPrefills&&("send-user"===this.redirectPrefills.type?(this.$store.commit("setSelectedRecipientType","User"),this.username=this.redirectPrefills.username,this.amount=this.redirectPrefills.amount):"send-issue"===this.redirectPrefills.type&&(this.$store.commit("setSelectedRecipientType","Issue"),this.issueUrl="https://github.com/".concat(this.redirectPrefills.username,"/").concat(this.redirectPrefills.repository,"/issues/").concat(this.redirectPrefills.issue),this.amount=this.redirectPrefills.amount))},username:function(t){var e=this;clearTimeout(this.loadRecipientTimeout),this.loadRecipientTimeout=setTimeout((function(){t.match(/^[\w-]+$/)?(e.loadingRecipient=!0,e.user=null,e.$github.getUserByUsername(t).then((function(t){e.user=t})).catch((function(){e.user=null,e.userEthAddress=null})).finally((function(){return e.loadingRecipient=!1}))):(e.user=null,e.userEthAddress=null,e.loadingRecipient=!1)}),800)},issueUrl:function(t){var e=this;clearTimeout(this.loadRecipientTimeout),this.loadRecipientTimeout=setTimeout((function(){var n=t.match(/^https:\/\/github\.com\/([\w-]+)\/([\w-]+)\/issues\/(\d+)$/);if(n){var r=n[1],o=n[2],c=n[3];e.loadingRecipient=!0,e.issue=null,e.$github.getIssueByOwnerRepoNumber(r,o,Number(c)).then((function(t){e.issue=t})).catch((function(){e.issue=null})).finally((function(){return e.loadingRecipient=!1}))}else e.issue=null,e.loadingRecipient=!1}),500)}},mounted:function(){this.redirectPrefills&&("send-user"===this.redirectPrefills.type?(this.$store.commit("setSelectedRecipientType","User"),this.username=this.redirectPrefills.username,this.amount=this.redirectPrefills.amount):"send-issue"===this.redirectPrefills.type&&(this.$store.commit("setSelectedRecipientType","Issue"),this.issueUrl="https://github.com/".concat(this.redirectPrefills.username,"/").concat(this.redirectPrefills.repository,"/issues/").concat(this.redirectPrefills.issue),this.amount=this.redirectPrefills.amount)),this.account&&this.$store.dispatch("updateOutgoingUserDeposits")},methods:{confirm:function(){"User"===this.selectedRecipientType?this.depositForUser():"Issue"===this.selectedRecipientType&&this.depositForIssue()},depositForUser:function(){var t=this;this.sending=!0,this.octobay.methods.depositEthForGithubUser(this.user.id).send({from:this.account,value:this.$web3utils.toWei(this.amount,"ether")}).then((function(){t.amount=0,t.showSendSuccess=!0,setTimeout((function(){return t.$store.dispatch("updateOutgoingUserDeposits")}),1e3),t.$store.dispatch("updateEthBalance")})).catch((function(t){console.log(t)})).finally((function(){t.sending=!1}))},depositForIssue:function(){var t=this;this.sending=!0,this.departmentForIssue?this.octobay.methods.depositAndSetGovTokenForIssue(this.issue.id,this.departmentForIssue.tokenAddress,this.departmentForIssue.projectId).send({from:this.account,value:this.$web3utils.toWei(this.amount,"ether")}).then((function(){t.$store.dispatch("updateIssues"),t.$store.dispatch("updateEthBalance"),t.sending=!1,t.showIssueDepositSuccess=!0,t.amount=0})).catch((function(t){console.log(t)})).finally((function(){t.sending=!1})):this.octobay.methods.depositEthForIssue(this.issue.id).send({from:this.account,value:this.$web3utils.toWei(this.amount,"ether")}).then((function(){t.$store.dispatch("updateIssues"),t.$store.dispatch("updateEthBalance"),t.sending=!1,t.showIssueDepositSuccess=!0,t.amount=0})).catch((function(t){console.log(t)})).finally((function(){t.sending=!1}))},refundUserDeposit:function(t){var e=this;this.refundingUserDeposit=t,this.octobay.methods.refundUserDeposit(t).send({from:this.account}).then((function(){e.$store.dispatch("updateEthBalance"),setTimeout((function(){return e.$store.dispatch("updateOutgoingUserDeposits")}),1e3)})).catch((function(t){return console.log(t)})).finally((function(){return e.refundingUserDeposit=0}))}}},m=n(9),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"360px"}},[n("div",{staticClass:"card-body"},[t._m(0),t._v(" "),t.showSendSuccess?n("div",{staticClass:"alert alert-success border-0"},[n("button",{staticClass:"close text-success",attrs:{type:"button"},on:{click:function(e){t.showSendSuccess=!1}}},[n("span",[t._v("×")])]),t._v(" "),n("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v("\n      Transfer confirmed! :)\n    ")],1):t._e(),t._v(" "),t.showIssueDepositSuccess?n("div",{staticClass:"alert alert-success border-0"},[n("button",{staticClass:"close text-success",attrs:{type:"button"},on:{click:function(e){t.showIssueDepositSuccess=!1}}},[n("span",[t._v("×")])]),t._v(" "),n("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v("\n      Issue deposit confirmed! :)\n    ")],1):t._e(),t._v(" "),"User"==t.selectedRecipientType?n("div",{staticClass:"input-with-embed select-input select-input-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-lg form-control-with-embed mb-2",staticStyle:{"padding-right":"2.5rem"},attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),n("span",{staticClass:"btn btn-primary shadow-sm",staticStyle:{width:"95px"},on:{click:function(e){return t.$store.commit("setShowRecipientTypeList",!0)}}},[n("span",[t._v("User")]),t._v(" "),n("small",[n("font-awesome-icon",{staticStyle:{opacity:"0.5"},attrs:{icon:["fas","chevron-down"]}})],1)]),t._v(" "),t.user?n("a",{staticClass:"position-absolute text-muted-light",staticStyle:{top:"12px",right:"12px","z-index":"2"},attrs:{href:"#"},on:{click:function(e){t.user=null,t.username=""}}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])]):t._e(),t._v(" "),t.loadingRecipient||t.user?n("div",[t.loadingRecipient?n("div",{staticClass:"text-center mb-2"},[n("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1):t._e(),t._v(" "),t.user?n("UserEmbed",{staticClass:"mb-2",attrs:{user:t.user,address:t.userEthAddress}}):t._e()],1):t._e()]):t._e(),t._v(" "),"Issue"==t.selectedRecipientType?n("div",{staticClass:"input-with-embed select-input select-input-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.issueUrl,expression:"issueUrl"}],staticClass:"form-control form-control-lg form-control-with-embed mb-2 pr-5",attrs:{type:"text",placeholder:"Issue URL"},domProps:{value:t.issueUrl},on:{input:function(e){e.target.composing||(t.issueUrl=e.target.value)}}}),t._v(" "),n("span",{staticClass:"btn btn-primary shadow-sm",staticStyle:{width:"103px"},on:{click:function(e){return t.$store.commit("setShowRecipientTypeList",!0)}}},[n("span",[t._v("Bounty")]),t._v(" "),n("small",[n("font-awesome-icon",{staticStyle:{opacity:"0.5"},attrs:{icon:["fas","chevron-down"]}})],1)]),t._v(" "),t.issue?n("a",{staticClass:"position-absolute text-muted-light",staticStyle:{top:"12px",right:"10px","z-index":"2"},attrs:{href:"#"},on:{click:function(e){t.issue=null,t.issueUrl=""}}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])]):t._e(),t._v(" "),t.loadingRecipient||t.issue?n("div",[t.loadingRecipient?n("div",{staticClass:"text-center mb-2"},[n("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1):t._e(),t._v(" "),t.issue?n("IssueEmbed",{attrs:{issue:t.issue}}):t._e(),t._v(" "),t.issue&&t.ownDepartments.length?n("div",{staticClass:"border rounded-xl mt-3 px-3 pt-2",staticStyle:{"margin-bottom":"-48px","padding-bottom":"60px"}},[n("div",{staticClass:"text-muted d-block text-center mb-2"},[t._v("\n            Which governance token shall be minted for the contributor?\n          ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.departmentForIssue,expression:"departmentForIssue"}],staticClass:"custom-select rounded-xl",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.departmentForIssue=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:null}},[t._v("No Governance Minting")]),t._v(" "),t._l(t.ownDepartments,(function(e){return n("option",{key:e.id,domProps:{value:e}},[t._v("\n              "+t._s(e.name)+" ("+t._s(e.symbol)+")\n            ")])}))],2)]):t._e()],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"select-input mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control form-control-lg mb-2",attrs:{type:"number",min:"0",step:"0.01",novalidate:"",placeholder:"0.00"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),n("span",{staticClass:"btn btn-light disabled"},[t._v("ETH")])]),t._v(" "),n("ConnectActionButton",{staticClass:"mt-4",attrs:{action:t.confirm,disabled:t.confirmDisabled,required:["wallet"],size:"lg"}},[t.sending?n("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):t._e(),t._v("\n      "+t._s(t.sending?"Waiting for confirmation...":"Confirm")+"\n    ")],1)],1),t._v(" "),t.outgoingUserDeposits.length?n("div",{staticClass:"card-body mt-2 pt-2 border-top"},[n("h5",{staticClass:"text-center text-muted-light py-2 px-4"},[t._v("Pending")]),t._v(" "),t._l(t.outgoingUserDeposits,(function(e,r){return n("div",{key:r,staticClass:"d-flex justify-content-between align-items-center mt-2"},[n("small",{staticClass:"text-muted"},[n("GithubUser",{attrs:{"github-user-id":e.user.id}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-column mb-0 ml-auto mr-2 text-right"},[n("b",[t._v(t._s(t.$web3utils.fromWei(e.amount,"ether")))]),t._v(" "),n("sup",{staticClass:"pt-2"},[t._v("ETH")])]),t._v(" "),n("button",{staticClass:"btn btn-primary shadow-sm text-nowrap ml-1",attrs:{disabled:0!=t.refundingUserDeposit},on:{click:function(n){return t.refundUserDeposit(e.id)}}},[t.refundingUserDeposit===e.id?n("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):t._e(),t._v("\n        "+t._s(t.refundingUserDeposit===e.id?"":"cancel")+"\n      ")],1)])}))],2):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"text-center text-muted-light py-2 px-4"},[t._v("\n      Send funds to any"),n("br"),t._v("GitHub user or issue.\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UserEmbed:n(863).default,IssueEmbed:n(845).default,ConnectActionButton:n(386).default,GithubUser:n(830).default})}}]);