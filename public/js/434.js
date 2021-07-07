(self.webpackChunk=self.webpackChunk||[]).push([[434,435],{6434:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var o=r(5166),n=(0,o.createTextVNode)(" Issue ");const a={components:{GitHubItem:r(8897).Z},props:{project:{type:Object,required:!0},issue:{type:Object,required:!0},body:{type:String,required:!0}},render:function(e,t,r,a,l,c){var s=(0,o.resolveComponent)("GitHubItem");return(0,o.openBlock)(),(0,o.createBlock)(s,{project:r.project,issue:r.issue,body:r.body},{"github-item-type":(0,o.withCtx)((function(){return[n]})),_:1},8,["project","issue","body"])}},l=a},8435:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var o=r(5166),n={class:"bg-white border-t-4 border-indigo relative z-10"},a={class:"max-w-4xl mx-auto px-2"},l={class:"flex justify-between items-center"},c=(0,o.createVNode)("h1",{class:"flex items-center"},[(0,o.createVNode)("span",{class:"font-light text-5xl text-indigo"},"O"),(0,o.createVNode)("span",{class:"uppercase text-2xl leading-normal text-black-light font-semibold font-sans tracking-wide"},"zzie")],-1),s=(0,o.createVNode)("p",{class:"font-sans italic font-normal leading-normal tracking-tight text-grey-blue-darkest"}," Addressing our open source debt ",-1),i={class:"bg-frost font-sans relative overflow-x-auto z-0"},d={class:"max-w-4xl mx-auto px-2 pb-6"};const u={name:"Layout",props:{title:{type:String,default:"Ozzie"}},watch:{title:{immediate:!0,handler:function(e){document.title=e}}},render:function(e,t,r,u,p,m){var f=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",n,[(0,o.createVNode)("section",a,[(0,o.createVNode)("div",l,[(0,o.createVNode)(f,{href:e.$route("projects.index"),method:"get"},{default:(0,o.withCtx)((function(){return[c]})),_:1},8,["href"]),s])])]),(0,o.createVNode)("div",i,[(0,o.createVNode)("div",d,[(0,o.renderSlot)(e.$slots,"default")])])])}},p=u},4187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(5166),n={class:"flex mt-2"},a=(0,o.createTextVNode)(" Home "),l={key:0,class:"mx-1"},c={key:2,class:"mx-1"},s={key:3};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var o,n,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){c=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}const u={name:"BreadCrumb",props:{project:{type:Object,default:null},issue:{type:Object,default:null}},methods:{ozzieUrl:function(e){var t=i(e.split("/"),2),r=t[0],o=t[1];return this.$route("projects.show",{vendor:r,name:o})}},render:function(e,t,r,i,d,u){var p=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)(p,{class:"text-indigo",href:e.$route("projects.index"),method:"get"},{default:(0,o.withCtx)((function(){return[a]})),_:1},8,["href"]),r.project?((0,o.openBlock)(),(0,o.createBlock)("span",l,">")):(0,o.createCommentVNode)("",!0),r.project?((0,o.openBlock)(),(0,o.createBlock)(p,{key:1,class:"text-indigo",href:u.ozzieUrl(r.project.packagist_name),method:"get"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(r.project.packagist_name),1)]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0),r.issue?((0,o.openBlock)(),(0,o.createBlock)("span",c,">")):(0,o.createCommentVNode)("",!0),r.issue?((0,o.openBlock)(),(0,o.createBlock)("span",s,"#"+(0,o.toDisplayString)(r.issue.number),1)):(0,o.createCommentVNode)("",!0)])}},p=u},2240:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(5166),n={class:"table table-auto w-full border border-grey flex flex-col bg-white"};const a={name:"Card",render:function(e,t,r,a,l,c){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.renderSlot)(e.$slots,"default")])}},l=a},1858:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var o=r(5166),n={class:"mt-6 table-auto w-full border border-grey"},a={class:"bg-grey-blue-light border-grey border-b-2 text-left"},l={key:0,class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"},c=(0,o.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Debt Score ",-1),s=(0,o.createVNode)("th",{class:"text-grey-darkest hidden md:table-cell font-bold uppercase text-xs leading-none tracking-wide p-4"}," Debt Score Graph ",-1),i=(0,o.createVNode)("th",{class:"text-grey-darkest hidden md:table-cell font-bold uppercase text-xs leading-none tracking-wide p-4"}," Old Prs ",-1),d=(0,o.createVNode)("th",{class:"text-grey-darkest hidden md:table-cell font-bold uppercase text-xs leading-none tracking-wide p-4"}," Old Issues ",-1),u=(0,o.createVNode)("th",{class:"text-grey-darkest hidden md:table-cell font-bold uppercase text-xs leading-none tracking-wide p-4"}," Prs ",-1),p=(0,o.createVNode)("th",{class:"text-grey-darkest hidden md:table-cell font-bold uppercase text-xs leading-none tracking-wide p-4"}," Issues ",-1),m={key:1,class:"text-xs p-4 hidden md:table-cell"},f={class:"bg-white divide-y divide-smoke"},b={key:0,class:"p-4"},h={class:"text-black-lightest p-4"},g={class:"flex items-baseline"},y={class:"text-black-lightest hidden md:table-cell p-4"},x={class:"text-black-lightest hidden md:table-cell p-4"},k={class:"text-black-lightest hidden md:table-cell p-4"},N={class:"text-black-lightest hidden md:table-cell p-4"},V={class:"text-black-lightest hidden md:table-cell p-4"},j={key:1,class:"p-4 hidden md:table-cell"};function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var o,n,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){c=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}const B={name:"DebtTable",props:{projects:{type:Object,required:!0},hacktoberfest:{type:Boolean,default:!1},showProjectName:{type:Boolean,default:!0}},methods:{debtScoreClass:function(e){return e>5?"bg-red":e>1?"bg-orange":""},ozzieUrl:function(e){var t=v(e.split("/"),2),r=t[0],o=t[1];return this.$route("projects.show",{vendor:r,name:o})}},render:function(e,t,r,v,w,B){var S=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createBlock)("table",n,[(0,o.createVNode)("thead",a,[(0,o.createVNode)("tr",null,[r.showProjectName?((0,o.openBlock)(),(0,o.createBlock)("th",l," Project Name ")):(0,o.createCommentVNode)("",!0),c,s,i,d,u,p,r.hacktoberfest?((0,o.openBlock)(),(0,o.createBlock)("th",m," 🎃 ")):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)("tbody",f,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.projects,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("tr",{key:e.id},[r.showProjectName?((0,o.openBlock)(),(0,o.createBlock)("td",b,[(0,o.createVNode)(S,{class:"text-indigo no-underline",href:B.ozzieUrl(e.packagist_name),method:"get"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.namespace)+"/"+(0,o.toDisplayString)(e.name),1)]})),_:2},1032,["href"])])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("td",h,[(0,o.createVNode)("div",g,(0,o.toDisplayString)(e.debt_score),1)]),(0,o.createVNode)("td",y,[(0,o.createVNode)("img",{src:"data:image/jpeg;base64, ".concat(e.debt_score_graph),alt:"debt score graph for project ".concat(e.namespace,"/").concat(e.name),width:"80",height:"20"},null,8,["src","alt"])]),(0,o.createVNode)("td",x,(0,o.toDisplayString)(e.old_pull_requests_count),1),(0,o.createVNode)("td",k,(0,o.toDisplayString)(e.old_issues_count),1),(0,o.createVNode)("td",N,(0,o.toDisplayString)(e.pull_requests_count),1),(0,o.createVNode)("td",V,(0,o.toDisplayString)(e.issues_count),1),r.hacktoberfest?((0,o.openBlock)(),(0,o.createBlock)("td",j,[(0,o.createVNode)("a",{class:"text-indigo no-underline p-2 -mx-2",href:"https://github.com/"+e.namespace+"/"+e.name+"/labels/hacktoberfest",target:"_blank"},(0,o.toDisplayString)(e.hacktoberfest_issues),9,["href"])])):(0,o.createCommentVNode)("",!0)])})),128))])])}},S=B},8897:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var o=r(5166),n={class:"flex flex-col md:flex-row text-2xl md:text-3xl text-indigo"},a={class:"ml-1 md:ml-2 text-xl md:text-3xl font-thin text-grey-dark"},l={class:"mt-1"},c={class:"text-grey-blue-dark"};var s=r(8435),i=r(7728),d=r(2240),u=r(1858);const p={components:{BreadCrumb:r(4187).Z,Card:d.Z,Layout:s.default,ProjectHeader:i.Z,DebtTable:u.Z},props:{project:{type:Object,required:!0},issue:{required:!0,type:Object},body:{type:String,required:!0}},data:function(){return{parsedGitHubItemBody:"",loaded:!1}},render:function(e,t,r,s,i,d){var u=(0,o.resolveComponent)("BreadCrumb"),p=(0,o.resolveComponent)("ProjectHeader"),m=(0,o.resolveComponent)("DebtTable"),f=(0,o.resolveComponent)("Card"),b=(0,o.resolveComponent)("Layout");return(0,o.openBlock)(),(0,o.createBlock)(b,{title:"Ozzie - "+r.project.namespace+"/"+r.project.name+" - #"+r.issue.number},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(u,{project:r.project,issue:r.issue},null,8,["project","issue"]),(0,o.createVNode)(p,{project:r.project,issue:r.issue},null,8,["project","issue"]),(0,o.createVNode)(m,{"show-project-name":!1,projects:[r.project],class:"hidden md:table"},null,8,["projects"]),(0,o.createVNode)(f,{class:"mt-4 px-2 pt-2 md:px-4 md:pt-4"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)("a",{href:r.issue.html_url,title:"View #"+r.issue.number+" on GitHub",class:"no-underline","aria-label":"Launch",target:"_blank",rel:"noopener noreferrer"},[(0,o.createVNode)("h2",n,[(0,o.createTextVNode)((0,o.toDisplayString)(r.issue.title),1),(0,o.createVNode)("span",a,"#"+(0,o.toDisplayString)(r.issue.number),1)])],8,["href","title"]),(0,o.createVNode)("p",l,[(0,o.createVNode)("a",{href:"https://github.com/".concat(r.issue.user.login),title:"View ".concat(r.issue.user.login,"'s profile overview on GitHub"),target:"_blank",rel:"noopener noreferrer",class:"text-indigo"},(0,o.toDisplayString)(r.issue.user.login),9,["href","title"]),(0,o.createVNode)("span",c," opened this issue "+(0,o.toDisplayString)(e.$luxon.fromISO(r.issue.created_at).toRelative()),1)]),(0,o.renderSlot)(e.$slots,"title-extra"),(0,o.createVNode)("div",{class:"my-4 markdown-body",innerHTML:r.body},null,8,["innerHTML"])]})),_:3})]})),_:1},8,["title"])}},m=p},1851:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(5166),n=(0,o.createVNode)("svg",{class:"fill-current text-grey-blue-darkest inline-block w-5 h-5",height:"32",viewBox:"0 0 16 16",width:"32","aria-hidden":"true"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})],-1),a=(0,o.createVNode)("span",{class:"sr-only"}," Open on GitHub ",-1);const l={name:"IconGitHub",render:function(e,t,r,l,c,s){return(0,o.openBlock)(),(0,o.createBlock)("span",null,[n,a])}},c=l},7728:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var o=r(5166),n={class:"mt-2 md:mt-6 flex flex-col md:flex-rows justify-between"},a={class:"text-2xl text-black-lightest tracking-wide"},l={class:"text-black-lightest"},c=(0,o.createTextVNode)(" Maintained by "),s={class:"md:mt-1 text-grey-dark font-light"},i={key:0,class:"text-grey-dark font-light"};const d={name:"ProjectHeader",components:{IconGitHub:r(1851).Z},props:{project:{type:Object,required:!0},issue:{type:Object,default:null}},render:function(e,t,r,d,u,p){var m=(0,o.resolveComponent)("IconGitHub");return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("div",n,[(0,o.createVNode)("h1",a,[(0,o.createVNode)("a",{href:"https://github.com/".concat(r.project.namespace,"/").concat(r.project.name),title:"View project ".concat(r.project.namespace,"/").concat(r.project.name," on GitHub"),target:"_blank",rel:"noopener noreferrer"},[(0,o.createTextVNode)((0,o.toDisplayString)(r.project.namespace)+"/"+(0,o.toDisplayString)(r.project.name),1),(0,o.createVNode)(m,{class:"ml-1"})],8,["href","title"])]),(0,o.createVNode)("p",l,[c,((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.project.maintainers,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("a",{key:e,href:"https://github.com/".concat(e),title:"View ".concat(e,"'s profile overview on GitHub"),target:"_blank",rel:"noopener noreferrer",class:"text-indigo no-underline"}," @"+(0,o.toDisplayString)(e),9,["href","title"])})),128))])]),(0,o.createVNode)("p",s," Synced "+(0,o.toDisplayString)(e.$luxon.fromISO(r.project.updated_at).toRelative()),1),r.project.has_downloads?((0,o.openBlock)(),(0,o.createBlock)("p",i,(0,o.toDisplayString)((new Intl.NumberFormat).format(r.project.downloads_total))+" downloads ("+(0,o.toDisplayString)((new Intl.NumberFormat).format(r.project.downloads_last_30_days))+" per month) ",1)):(0,o.createCommentVNode)("",!0)],64)}},u=d}}]);