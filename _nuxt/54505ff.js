(window.webpackJsonp=window.webpackJsonp||[]).push([[30,5],{836:function(t,e,o){var content=o(843);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("82d5a4fc",content,!0,{sourceMap:!1})},841:function(t,e,o){var content=o(853);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("1ddbc26c",content,!0,{sourceMap:!1})},842:function(t,e,o){"use strict";o(836)},843:function(t,e,o){var n=o(27)(!1);n.push([t.i,".issue[data-v-6dd52981]{border-top:1px solid fff;cursor:pointer;position:relative}.issue[data-v-6dd52981]:hover{background:#f8f8f8}.issue.showDetails[data-v-6dd52981]{background:#f8f8f8;box-shadow:inset 0 0 7px rgba(0,0,0,.2)}.issue.showDetails .details[data-v-6dd52981]{max-height:40px;cursor:default}.issue.showDetails .details.action[data-v-6dd52981]{max-height:100px}.issue.showDetails .details.deposits[data-v-6dd52981]{max-height:350px}",""]),t.exports=n},844:function(t,e,o){var content=o(855);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("b1a5c078",content,!0,{sourceMap:!1})},847:function(t,e,o){"use strict";o.r(e);o(143),o(81),o(108),o(65),o(104),o(21),o(109);var n=o(0),r=o(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={mixins:[o(46).a],props:{issue:{type:Object,default:null}},data:function(){return{issueNode:null,showDetails:!1,action:null,refundingDeposit:!1,isRepoAdmin:!1,linkedPullRequests:[],loading:!1,canWithdrawIssue:!1}},computed:l(l({},Object(r.b)(["account","githubUser","githubAccessToken"])),{},{sortedLinkedPullRequests:function(){return this.linkedPullRequests.filter((function(t){return t})).sort((function(a){return"MERGED"===a.state?-1:1}))}}),watch:{showDetails:function(t){var e=this;t&&(this.githubUser?this.$github.isRepoAdmin(this.githubUser.login,this.issueNode.owner,this.issueNode.repository).then((function(t){return e.isRepoAdmin=t})).catch((function(){return e.isRepoAdmin=!1})):this.isRepoAdmin=!1,this.linkedPullRequests=[],this.$axios.$get("".concat("https://octobay.uber.space","/github/linked-pullrequests/").concat(this.issueNode.id)).then((function(t){t.forEach((function(t){e.$github.getPullRequestById(t).then((function(t){e.linkedPullRequests.push(t)}))}))})).catch((function(){return e.linkedPullRequests=[]})))}},mounted:function(){var t=this;this.loading=!0,this.$github.getIssueById(this.issue.id).then((function(e){e&&(t.issueNode={id:e.id,number:e.number,title:e.title,owner:e.repository.owner.login,repository:e.repository.name,repositoryOwner:e.repository.owner.login,primaryLanguage:e.repository.primaryLanguage,labels:e.labels.edges.map((function(label){return label.node})),closed:e.closed},t.githubUser?t.$axios.$get("https://octobay.uber.space"+"/github/can-withdraw-from-issue/".concat(t.githubUser.node_id,"/").concat(t.issueNode.id)).then((function(e){t.canWithdrawIssue=e})):t.canWithdrawIssue=!1)})).finally((function(){return t.loading=!1}))},methods:{fundIssue:function(){this.$store.commit("setRedirectPrefills",{type:"send-issue",username:this.issueNode.owner,repository:this.issueNode.repository,issue:this.issueNode.number,amount:"1.0"}),this.$store.commit("setView","send")},claimIssue:function(){this.$store.commit("setRedirectPrefills",{type:"claim-issue",url:"https://github.com/"+this.issueNode.owner+"/"+this.issueNode.repository+"/issues/"+this.issueNode.number}),this.$store.commit("setView","claim")},changeAction:function(t){this.action===t?this.action=null:this.action=t},refundIssueDeposit:function(t){var e=this;this.refundingDeposit=t,this.octobay.methods.refundIssueDeposit(t).send({from:this.account}).then((function(){e.$store.commit("removeDeposit",{issueId:e.issue.id,depositId:t})})).catch((function(t){return console.log(t)})).finally((function(){return e.refundingDeposit=!1}))}}},m=(o(842),o(9)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[!t.loading&&t.issueNode?o("div",{class:["issue d-flex flex-column",{showDetails:t.showDetails}],on:{click:function(e){t.showDetails=!t.showDetails}}},[o("div",{staticClass:"position-relative"},[o("div",{staticClass:"d-flex align-items-top px-3 py-2"},[o("div",{class:{"text-truncate":!t.showDetails}},[o("small",{staticClass:"text-muted text-truncate"},[o("small",[o("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","check-double"]}}),t._v("\n              "+t._s(t.issueNode.owner)+"/"+t._s(t.issueNode.repository)+"\n            ")],1)]),t._v(" "),o("div",{class:{"text-truncate":!t.showDetails}},[t.issue.boostAmount?o("span",[o("svg",{staticStyle:{width:"14px",height:"14px"},attrs:{viewBox:"0 0 24 24"}},[o("path",{attrs:{fill:"currentColor",d:"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z"}})])]):t._e(),t._v("\n            "+t._s(t.issueNode.title)+"\n          ")])]),t._v(" "),o("div",{staticClass:"text-nowrap text-right ml-auto pl-3"},[o("div",{staticClass:"mb-0 d-flex align-items-center"},[o("div",{staticClass:"text-center d-flex flex-column align-items-end"},[o("div",[t._v("\n                "+t._s(t.$web3utils.fromWei(t.issue.depositAmount,"ether"))+"\n                "),o("img",{attrs:{src:"/eth-logo.png",width:"16px",height:"16"}})])])])])]),t._v(" "),t.issueNode.primaryLanguage?o("div",{class:["px-3 pb-3",{"text-truncate":!t.showDetails}],staticStyle:{"text-overflow":"' ...'"}},[o("span",{class:"mr-1 badge badge-pill"+(t.brightnessByColor(t.issueNode.primaryLanguage.color)<180?" text-white":""),style:"background-color: "+t.issueNode.primaryLanguage.color},[t._v("\n          "+t._s(t.issueNode.primaryLanguage.name)+" ")]),t._l(t.issueNode.labels,(function(label){return o("span",{key:label.color,class:"mr-1 badge badge-pill"+(t.brightnessByColor("#"+label.color)<180?" text-white":""),style:"background-color: #"+label.color},[t._v("\n          "+t._s(label.name)+"\n        ")])}))],2):t._e()]),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.showDetails?o("div",{class:["d-flex flex-column justify-content-start align-items-center",{action:!!t.action,deposits:"deposits"==t.action}],staticStyle:{cursor:"default"},on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"border-top border-bottom w-100 py-2 text-nowrap d-flex justify-content-between align-items-center px-4"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Fund issue",trigger:"hover"},expression:"{ content: 'Fund issue', trigger: 'hover' }"}],staticClass:"btn btn-sm btn-light text-muted",on:{click:function(e){return t.fundIssue()}}},[o("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1),t._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Deposits",trigger:"hover"},expression:"{ content: 'Deposits', trigger: 'hover' }"}],class:["btn btn-sm btn-light text-muted",{active:"deposits"===t.action}],on:{click:function(e){return t.changeAction("deposits")}}},[o("font-awesome-icon",{attrs:{icon:["fas","coins"]}})],1),t._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Pull Requests",trigger:"hover"},expression:"{ content: 'Pull Requests', trigger: 'hover' }"}],class:["btn btn-sm btn-light text-muted",{active:"pull-requests"===t.action}],on:{click:function(e){return t.changeAction("pull-requests")}}},[o("span",{domProps:{innerHTML:t._s(t.$octicons["git-pull-request"].toSVG())}})]),t._v(" "),o("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Open on GitHub",trigger:"hover"},expression:"{ content: 'Open on GitHub', trigger: 'hover' }"}],staticClass:"btn btn-sm btn-light text-muted",attrs:{href:"https://github.com/"+t.issueNode.owner+"/"+t.issueNode.repository+"/issues/"+t.issueNode.number,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v(" "),o("font-awesome-icon",{staticClass:"text-muted-light ml-1",attrs:{icon:["fas","external-link-alt"]}})],1),t._v(" "),t.canWithdrawIssue?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Claim",trigger:"hover"},expression:"{ content: 'Claim', trigger: 'hover' }"}],staticClass:"btn btn-sm btn-primary shadow-sm",on:{click:function(e){return t.claimIssue()}}},[o("font-awesome-icon",{attrs:{icon:["fas","hand-holding-usd"]}})],1):t._e()]),t._v(" "),o("div",{staticClass:"w-100 px-3"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},["deposits"===t.action?o("div",{key:"deposits",staticClass:"py-3"},t._l(t.issue.deposits,(function(e,n){return o("div",{key:n,staticClass:"d-flex mb-2 justify-content-between align-items-center"},[o("div",{staticClass:"d-flex flex-column"},[o("h5",{staticClass:"mb-0"},[t._v("\n                    "+t._s(Number(t.$web3utils.fromWei(e.amount,"ether")))+"\n                    "),o("small",[t._v("ETH")])]),t._v(" "),o("small",{staticClass:"text-muted"},[o("GithubUser",{attrs:{"from-address":e.from}})],1)]),t._v(" "),e.from===t.account?o("button",{staticClass:"btn btn-primary shadow-sm",attrs:{disabled:t.refundingDeposit},on:{click:function(o){return t.refundIssueDeposit(e.id)}}},[t.refundingDeposit===e.id?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):o("span",[t._v("withdraw")])],1):t._e()])})),0):t._e(),t._v(" "),"pull-requests"===t.action?o("div",{key:"pull-requests",staticClass:"py-3"},[o("a",{staticClass:"btn btn-sm btn-dark btn-block",attrs:{href:"https://github.com/"+t.issueNode.owner+"/"+t.issueNode.repository+"/fork"}},[o("span",{domProps:{innerHTML:t._s(t.$octicons["repo-forked"].toSVG())}}),t._v("\n                start working\n              ")]),t._v(" "),t.linkedPullRequests.length?o("div",t._l(t.sortedLinkedPullRequests,(function(e){return o("a",{key:e.id,staticClass:"btn btn-light btn-sm btn-block mt-2 d-flex align-items-center border-light",attrs:{href:e.url,target:"_blank"}},[o("svg",{class:"text-"+("MERGED"==e.state?"merged":"CLOSED"==e.state?"danger":"success"),staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[o("path",{attrs:{fill:"currentColor",d:"M6,3A3,3 0 0,1 9,6C9,7.31 8.17,8.42 7,8.83V15.17C8.17,15.58 9,16.69 9,18A3,3 0 0,1 6,21A3,3 0 0,1 3,18C3,16.69 3.83,15.58 5,15.17V8.83C3.83,8.42 3,7.31 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5M6,17A1,1 0 0,0 5,18A1,1 0 0,0 6,19A1,1 0 0,0 7,18A1,1 0 0,0 6,17M21,18A3,3 0 0,1 18,21A3,3 0 0,1 15,18C15,16.69 15.83,15.58 17,15.17V7H15V10.25L10.75,6L15,1.75V5H17A2,2 0 0,1 19,7V15.17C20.17,15.58 21,16.69 21,18M18,17A1,1 0 0,0 17,18A1,1 0 0,0 18,19A1,1 0 0,0 19,18A1,1 0 0,0 18,17Z"}})]),t._v(" "),o("span",{staticClass:"mr-auto ml-2 pr-2 text-truncate"},[t._v(t._s(e.title))]),t._v(" "),e.autoMergeRequest?o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover",content:"AutoMerge enabled"},expression:"{\n                      trigger: 'hover',\n                      content: 'AutoMerge enabled',\n                    }"}],staticClass:"badge badge-light mr-2 rounded-xl"},[o("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}),t._v(" "),o("font-awesome-icon",{attrs:{icon:["fas","angle-double-right"]}})],1):t._e(),t._v("\n                  "+t._s(e.comments.totalCount)+"\n                  "),o("font-awesome-icon",{staticClass:"ml-1 mr-2 text-muted",attrs:{icon:["far","comment-alt"]}})],1)})),0):o("small",{staticClass:"text-muted d-block text-center mt-2"},[t._v("\n                No linked pull requests yet.\n              ")]),t._v(" "),o("small",{staticClass:"d-block text-center"},[o("a",{attrs:{href:"https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword",target:"_blank"}},[t._v("\n                  What does that mean?\n                ")])])]):t._e()])],1)]):t._e()])],1):t.loading?o("div",{staticClass:"d-flex justify-content-center p-4 m-3 rounded-lg"},[o("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1):t.loading||t.issueNode?t._e():o("div",{staticClass:"d-flex justify-content-center p-3 rounded-lg"},[o("small",{staticClass:"text-muted d-block text-center border rounded-xl px-3 py-1"},[o("small",[o("font-awesome-icon",{attrs:{icon:["fas","exclamation-triangle"]}})],1),t._v("\n      Issue not found.\n    ")])])])}),[],!1,null,"6dd52981",null);e.default=component.exports;installComponents(component,{GithubUser:o(830).default})},852:function(t,e,o){"use strict";o(841)},853:function(t,e,o){var n=o(27)(!1);n.push([t.i,".issue-list[data-v-7fa1b240]{margin:0 -1.25rem}.issue-list>a[data-v-7fa1b240]{border:1px solid eee;color:#333}.issue-list>a[data-v-7fa1b240]:hover{border-color:transparent;background:#0366d6;color:#fff}.issue-list>a:hover .text-danger[data-v-7fa1b240],.issue-list>a:hover .text-muted[data-v-7fa1b240]{color:#fff!important}.issue-list>a:hover .badge-pill[data-v-7fa1b240]{background:#fff;color:#0366d6}",""]),t.exports=n},854:function(t,e,o){"use strict";o(844)},855:function(t,e,o){var n=o(27)(!1);n.push([t.i,".input-with-button[data-v-1c1cce61]{position:relative}.input-with-button input[data-v-1c1cce61]{padding-right:50px}.input-with-button button[data-v-1c1cce61]{position:absolute;right:5px;bottom:5px}",""]),t.exports=n},864:function(t,e,o){"use strict";o.r(e);o(81),o(387);var n=o(0),r=o(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{showIssuesNum:10}},computed:l(l({},Object(r.b)(["issues"])),{},{issuesSorted:function(){return this.issues.filter((function(t){return 0===t.status})).sort((function(a,b){return a.boostAmount===b.boostAmount?a.depositAmount<b.depositAmount:a.boostAmount<b.boostAmount}))},issuesLazy:function(){return this.issuesSorted.slice(0,this.showIssuesNum)}}),mounted:function(){this.$store.dispatch("updateIssues")}},m=(o(852),o(9)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"card-body pb-0"},[t.issuesLazy.length?o("div",{staticClass:"issue-list"},t._l(t.issuesLazy,(function(t){return o("Issue",{key:t.id,attrs:{issue:t}})})),1):o("div",{staticClass:"text-center text-muted my-3"},[t._v("\n      Currently no pinned issues.\n    ")])]),t._v(" "),t.issues.length>t.showIssuesNum?o("div",{staticClass:"card-body p-0"},[o("button",{staticClass:"btn btn-lg btn-light text-center btn-block",staticStyle:{"border-top-left-radius":"0","border-top-right-radius":"0"},on:{click:function(e){t.showIssuesNum+=10}}},[t._v("\n      more\n    ")])]):t._e()])}),[],!1,null,"7fa1b240",null);e.default=component.exports;installComponents(component,{Issue:o(847).default})},865:function(t,e,o){"use strict";o.r(e);o(143),o(105),o(21),o(64),o(218),o(103);var n=o(0),r=o(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={mixins:[o(46).a],data:function(){return{url:"",loadingIssue:!1,issue:null,score:0,waitingForOracleRequest:!1,waitingForOracleFulfillment:!1,showWithdrawalSuccess:!1,withdrawingUserDeposit:0,canWithdrawIssue:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["account","redirectPrefills","githubUser"])),watch:{redirectPrefills:function(){this.redirectPrefills&&"claim-issue"===this.redirectPrefills.type&&(this.url=this.redirectPrefills.url)},url:function(t){var e=this;this.issue=null;var o=t.match(/^https:\/\/github\.com\/([\w-]+)\/([\w-]+)\/issues\/(\d+)$/);if(o){var n=o[1],r=o[2],c=o[3];this.loadingIssue=!0,this.canWithdrawIssue=null,this.$github.getIssueByOwnerRepoNumber(n,r,Number(c)).then((function(t){e.issue=t,e.githubUser?e.$axios.$get("https://octobay.uber.space"+"/github/can-withdraw-from-issue/".concat(e.githubUser.node_id,"/").concat(e.issue.id)).then((function(t){e.canWithdrawIssue=t})):e.canWithdrawIssue=!1})).finally((function(){return e.loadingIssue=!1}))}}},mounted:function(){this.$store.dispatch("updateGithubUser"),this.redirectPrefills&&"claim-issue"===this.redirectPrefills.type&&(this.url=this.redirectPrefills.url)},methods:{withdrawFromIssue:function(){var t=this;this.oracleRequest(this.octobay.methods.withdrawFromIssue,[this.issue.id],(function(e){return t.waitingForOracleRequest=e}),(function(e){return t.waitingForOracleFulfillment=e})).then((function(){t.$store.commit("removeIssue",t.issue.id),t.showWithdrawalSuccess=!0,t.issue=null,t.url="",t.canWithdrawIssue=!1}))},withdrawUserDeposit:function(t){var e=this;this.withdrawingUserDeposit=t,this.octobay.methods.withdrawUserDeposit(t).send({from:this.account}).then((function(){setTimeout((function(){return e.$store.dispatch("updateGithubUser")}),1e3),setTimeout((function(){return e.$store.dispatch("updateGithubUser")}),5e3),e.$store.dispatch("updateEthBalance")})).catch((function(t){return console.log(t)})).finally((function(){return e.withdrawingUserDeposit=0}))}}},d=o(9),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"card-body"},[t.showWithdrawalSuccess?o("div",{staticClass:"alert alert-success border-0"},[o("button",{staticClass:"close text-success",attrs:{type:"button"},on:{click:function(e){t.showWithdrawalSuccess=!1}}},[o("span",[t._v("×")])]),t._v(" "),o("font-awesome-icon",{attrs:{icon:["far","smile"]}}),t._v("\n      Withdrawal successful!\n    ")],1):t._e(),t._v(" "),o("h5",{staticClass:"text-center text-muted-light py-2 px-4"},[t._v("\n      Paste the URL of an issue you worked on.\n    ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control form-control-lg form-control-with-embed mb-2",attrs:{type:"text",placeholder:"https://github.com/..."},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),t.loadingIssue?o("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}}):t.issue?o("IssueEmbed",{attrs:{issue:t.issue}}):t._e(),t._v(" "),t.issue&&!1===t.canWithdrawIssue?o("div",{staticClass:"alert bg-secondary text-white text-center border-0 mb-2 mt-3"},[t._v("\n      This issue has not been closed by a pull request of yours and was not\n      released to you manually.\n    ")]):t._e(),t._v(" "),o("ConnectActionButton",{staticClass:"mt-4",attrs:{action:t.withdrawFromIssue,disabled:t.waitingForOracleRequest||!t.issue||!t.githubUser||!t.canWithdrawIssue,size:"lg"}},[t.waitingForOracleRequest?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):t._e(),t._v("\n      "+t._s(t.waitingForOracleRequest?"Waiting for confirmation...":"Claim")+"\n    ")],1)],1),t._v(" "),t.githubUser&&t.githubUser.incomingDeposits.length?o("div",{staticClass:"card-body border-top mt-2 pt-2"},[o("h5",{staticClass:"text-center text-muted-light py-2 px-4 mt-2"},[t._v("\n      Claim funds sent to your GitHub account.\n    ")]),t._v(" "),t._l(t.githubUser.incomingDeposits,(function(e,n){return o("div",{key:n,staticClass:"d-flex justify-content-between align-items-center mt-2"},[o("small",{staticClass:"text-muted"},[o("GithubUser",{attrs:{"from-address":e.from,"force-show-address":!0}})],1),t._v(" "),o("div",{staticClass:"d-flex flex-column mb-0 ml-auto mr-2 text-right"},[o("b",[t._v(t._s(t.$web3utils.fromWei(e.amount,"ether")))]),t._v(" "),o("sup",{staticClass:"pt-2"},[t._v("ETH")])]),t._v(" "),o("ConnectActionButton",{staticClass:"text-nowrap ml-1",attrs:{action:function(){return t.withdrawUserDeposit(e.id)},disabled:0!=t.withdrawingUserDeposit}},[t.withdrawingUserDeposit===e.id?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):t._e(),t._v("\n        "+t._s(t.withdrawingUserDeposit===e.id?"":"Claim")+"\n      ")],1)],1)}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IssueEmbed:o(845).default,ConnectActionButton:o(386).default,GithubUser:o(830).default})},866:function(t,e,o){"use strict";o.r(e);o(104),o(388);var n=o(0),r=o(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={data:function(){return{newOracle:{ethAddress:"",name:"",registerJobId:""},oracleUpdating:!1,jobUpdating:!1,addingNewOracle:!1,removingOralce:!1,newOracleJob:{oracle:null,jobName:null,jobId:null,jobFee:null},addingOracleJob:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["config","account","oracles"])),methods:{isNewOracleValid:function(){return 42===this.newOracle.ethAddress.length&&this.newOracle.ethAddress.startsWith("0x")&&this.newOracle.name&&32===this.newOracle.registerJobId.length},addNewOracle:function(){var t=this;this.addingNewOracle=!0;this.octobay.methods.addOracle(this.newOracle.ethAddress,this.newOracle.name,["register"],[[this.$web3utils.toHex(this.newOracle.registerJobId),"10000000000000000"]]).send({from:this.account}).then((function(){t.newOracle.ethAddress="",t.newOracle.name="",t.newOracle.registerJobId="",t.$store.dispatch("updateOracles").then((function(){t.addingNewOracle=!1}))}))},updateJobId:function(t,e,o,n){var r=this;n||(n="10000000000000000"),this.oracleUpdating=t,this.jobUpdating=e,this.octobay.methods.setOracleJob(t,e,this.$web3utils.toHex(o),n).send({from:this.account}).then((function(){r.oracleUpdating=!1,r.jobUpdating=!1}))},removeOracle:function(address){var t=this;this.removingOralce=address,this.octobay.methods.removeOracle(address).send({from:this.account}).then((function(){t.$store.dispatch("updateOracles").then((function(){t.removingOralce=!1}))}))},addOracleJob:function(){var t=this;this.addingOracleJob=!0,this.octobay.methods.addOracleJob(this.newOracleJob.oracle,this.newOracleJob.jobName,[this.$web3utils.toHex(this.newOracleJob.jobId),this.newOracleJob.jobFee]).send({from:this.account}).then((function(){t.addingOracleJob=!1,t.newOracleJob.oracle=null,t.newOracleJob.jobName=null,t.newOracleJob.jobId=null,t.newOracleJob.jobFee=null}))}}},d=(o(854),o(9)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card-body",staticStyle:{"max-width":"360px"}},[o("div",[o("b",{staticClass:"d-flex justify-content-between"},[t._v("\n      OpenQ\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+t.octobay.options.address}},[o("small",[t._v("etherscan")])])]),t._v(" "),o("div",[o("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.octobay.options.address}})])]),t._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[t._v("\n      Governor\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+t.config.octobayGovernor}},[o("small",[t._v("etherscan")])])]),t._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:t.config.octobayGovernor}})])]),t._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[t._v("\n      GovNFT\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+t.config.octobayGovNFT}},[o("small",[t._v("etherscan")])])]),t._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:t.config.octobayGovNFT}})])]),t._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[t._v("\n      OracleStorage\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+t.config.oracleStorage}},[o("small",[t._v("etherscan")])])]),t._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:t.config.oracleStorage}})])]),t._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[t._v("\n      DepositStorage\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+t.config.depositStorage}},[o("small",[t._v("etherscan")])])]),t._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:t.config.depositStorage}})])]),t._v(" "),o("div",{staticClass:"mt-2"},[o("b",{staticClass:"d-flex justify-content-between"},[t._v("\n      UserAddressStorage\n      "),o("a",{attrs:{href:"https://kovan.etherscan.io/address/"+t.config.userAddressStorage}},[o("small",[t._v("etherscan")])])]),t._v(" "),o("div",[o("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",readonly:""},domProps:{value:t.config.userAddressStorage}})])]),t._v(" "),o("div",{staticClass:"mt-3"},[o("b",[t._v("New Oracle")]),t._v(" "),o("div",[o("small",{staticClass:"text-muted"},[t._v("Address:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newOracle.ethAddress,expression:"newOracle.ethAddress"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newOracle.ethAddress},on:{input:function(e){e.target.composing||t.$set(t.newOracle,"ethAddress",e.target.value)}}})]),t._v(" "),o("div",[o("small",{staticClass:"text-muted"},[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newOracle.name,expression:"newOracle.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newOracle.name},on:{input:function(e){e.target.composing||t.$set(t.newOracle,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"input-with-button"},[o("small",{staticClass:"text-muted"},[t._v("Register Job ID")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newOracle.registerJobId,expression:"newOracle.registerJobId"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newOracle.registerJobId},on:{input:function(e){e.target.composing||t.$set(t.newOracle,"registerJobId",e.target.value)}}})]),t._v(" "),o("button",{staticClass:"btn btn-primary mt-3 w-100 shadow-sm",attrs:{disabled:!t.isNewOracleValid()},on:{click:function(e){return t.addNewOracle()}}},[t.addingNewOracle?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):o("span",[t._v("Add new Oracle")])],1)]),t._v(" "),t._l(t.oracles,(function(e){return o("div",{key:e.id,staticClass:"border rounded-xl p-3 mt-3"},[o("div",[o("small",{staticClass:"text-muted"},[t._v("Address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.ethAddress,expression:"oracle.ethAddress"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.ethAddress},on:{input:function(o){o.target.composing||t.$set(e,"ethAddress",o.target.value)}}})]),t._v(" "),o("div",[o("small",{staticClass:"text-muted"},[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"oracle.name"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.name},on:{input:function(o){o.target.composing||t.$set(e,"name",o.target.value)}}})]),t._v(" "),t._l(e.jobs,(function(e){return o("div",{key:e.id},[o("small",{staticClass:"text-muted"},[t._v(t._s(e.name))]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.id}})])})),t._v(" "),o("button",{staticClass:"btn btn-danger mt-3 w-100 shadow-sm",attrs:{disabled:t.removingOralce==e.ethAddress},on:{click:function(o){return t.removeOracle(e.ethAddress)}}},[t.removingOralce==e.ethAddress?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):o("span",[t._v("Remove Oracle")])],1)],2)})),t._v(" "),o("div",{staticClass:"mt-2"},[o("b",[t._v("New Oracle Job")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newOracleJob.oracle,expression:"newOracleJob.oracle"}],staticClass:"form-control mb-1",attrs:{type:"text",placeholder:"Oracle Address"},domProps:{value:t.newOracleJob.oracle},on:{input:function(e){e.target.composing||t.$set(t.newOracleJob,"oracle",e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newOracleJob.jobName,expression:"newOracleJob.jobName"}],staticClass:"form-control mb-1",attrs:{type:"text",placeholder:"Oracle Job Name"},domProps:{value:t.newOracleJob.jobName},on:{input:function(e){e.target.composing||t.$set(t.newOracleJob,"jobName",e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newOracleJob.jobId,expression:"newOracleJob.jobId"}],staticClass:"form-control mb-1",attrs:{type:"text",placeholder:"Oracle Job ID"},domProps:{value:t.newOracleJob.jobId},on:{input:function(e){e.target.composing||t.$set(t.newOracleJob,"jobId",e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newOracleJob.jobFee,expression:"newOracleJob.jobFee"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Oracle Job Fee"},domProps:{value:t.newOracleJob.jobFee},on:{input:function(e){e.target.composing||t.$set(t.newOracleJob,"jobFee",e.target.value)}}}),t._v(" "),o("button",{staticClass:"btn btn-primary mt-3 w-100 shadow-sm",on:{click:function(e){return t.addOracleJob()}}},[t.addingOracleJob?o("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):o("span",[t._v("Add Oracle Job")])],1)])],2)}),[],!1,null,"1c1cce61",null);e.default=component.exports},887:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={transition:"fade",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["view","account","isOctobayOwner","isOctobayAdmin"])),mounted:function(){this.$store.commit("setView","send")}},d=o(9),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content card overflow-hidden border-0 shadow-lg"},[o("div",{staticClass:"d-flex justify-content-around mt-4 px-2 font-weight-bold"},[o("a",{class:"mx-2 text-"+("send"===t.view?"primary":"muted"),attrs:{href:"#"},on:{click:function(e){return t.$store.commit("setView","send")}}},[t._v("Send")]),t._v(" "),o("a",{class:"mx-2 text-"+("issues"===t.view?"primary":"muted"),attrs:{href:"#"},on:{click:function(e){return t.$store.commit("setView","issues")}}},[t._v("Pinboard")]),t._v(" "),o("a",{class:"mx-2 text-"+("claim"===t.view?"primary":"muted"),attrs:{href:"#"},on:{click:function(e){return t.$store.commit("setView","claim")}}},[t._v("Claim")]),t._v(" "),t.isOctobayOwner||t.isOctobayAdmin?o("a",{class:"mx-2 text-"+("admin"===t.view?"primary":"muted-light"),attrs:{href:"#"},on:{click:function(e){return t.$store.commit("setView","admin")}}},[o("font-awesome-icon",{attrs:{icon:["fas","sliders-h"]}})],1):t._e()]),t._v(" "),o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("keep-alive",["send"==t.view?o("SendForm"):"issues"==t.view?o("IssuesList"):"claim"==t.view?o("Claim"):"admin"==t.view?o("Admin"):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SendForm:o(884).default,IssuesList:o(864).default,Claim:o(865).default,Admin:o(866).default})}}]);