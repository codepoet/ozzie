(self.webpackChunk=self.webpackChunk||[]).push([[74,88],{2088:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var o=r(5166),a={class:"bg-white border-t-4 border-indigo relative z-10"},n={class:"max-w-4xl mx-auto px-2"},c={class:"flex justify-between items-center"},s=(0,o.createVNode)("h1",{class:"flex items-center"},[(0,o.createVNode)("span",{class:"font-light text-5xl text-indigo"},"O"),(0,o.createVNode)("span",{class:"uppercase text-2xl leading-normal text-black-light font-semibold font-sans tracking-wide"},"zzie")],-1),l=(0,o.createVNode)("p",{class:"font-sans italic font-normal leading-normal tracking-tight text-grey-blue-darkest"}," Addressing our open source debt ",-1),i={class:"bg-frost font-sans relative overflow-x-auto z-0"},d={class:"max-w-4xl mx-auto px-2 pb-6"};const p={name:"Layout",props:{title:{type:String,default:"Ozzie"}},watch:{title:{immediate:!0,handler:function(e){document.title=e}}},render:function(e,t,r,p,u,m){var h=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",a,[(0,o.createVNode)("section",n,[(0,o.createVNode)("div",c,[(0,o.createVNode)(h,{href:e.$route("projects.index"),method:"get"},{default:(0,o.withCtx)((function(){return[s]})),_:1},8,["href"]),l])])]),(0,o.createVNode)("div",i,[(0,o.createVNode)("div",d,[(0,o.renderSlot)(e.$slots,"default")])])])}},u=p},9074:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var o=r(5166),a=(0,o.createTextVNode)(" Pull Request "),n={class:"mt-4 flex items-center text-black-lighter"},c=(0,o.createVNode)("span",{class:"text-indigo"}," Conversation ",-1),s=(0,o.createVNode)("span",{class:"text-indigo"}," Commits ",-1),l=(0,o.createVNode)("span",{class:"text-indigo"}," Files changed ",-1);var i=r(1670),d=(0,o.createVNode)("svg",{class:"mr-1 h-6 w-6 inline",viewBox:"0 0 14 16","aria-hidden":"true"},[(0,o.createVNode)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"})],-1);const p={name:"IconCommit",render:function(e,t,r,a,n,c){return(0,o.openBlock)(),(0,o.createBlock)("span",null,[d])}},u=p;var m=(0,o.createVNode)("svg",{class:"mr-1 h-6 w-6 inline",viewBox:"0 0 13 16","aria-hidden":"true"},[(0,o.createVNode)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z"})],-1);const h={name:"IconFileDiff",render:function(e,t,r,a,n,c){return(0,o.openBlock)(),(0,o.createBlock)("span",null,[m])}},k=h;var f=(0,o.createVNode)("svg",{class:"mr-1 h-6 w-6 inline",viewBox:"0 0 16 16",width:"128","aria-hidden":"true"},[(0,o.createVNode)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"})],-1);const g={name:"IconFileDiff",render:function(e,t,r,a,n,c){return(0,o.openBlock)(),(0,o.createBlock)("span",null,[f])}},b={components:{IconConversation:g,IconCommit:u,IconFileDiff:k,GithubItem:i.Z},props:{project:{type:Object,required:!0},pullRequest:{type:Object,required:!0}},methods:{baseUrl:function(e){return e?"".concat(this.pullRequest.html_url,"/").concat(e):this.pullRequest.html_url}},render:function(e,t,r,i,d,p){var u=(0,o.resolveComponent)("IconConversation"),m=(0,o.resolveComponent)("IconCommit"),h=(0,o.resolveComponent)("IconFileDiff"),k=(0,o.resolveComponent)("GithubItem");return(0,o.openBlock)(),(0,o.createBlock)(k,{project:r.project,issue:r.pullRequest},{"github-item-type":(0,o.withCtx)((function(){return[a]})),"title-extra":(0,o.withCtx)((function(){return[(0,o.createVNode)("div",n,[(0,o.createVNode)("a",{class:"flex items-center",href:p.baseUrl(),target:"_blank"},[(0,o.createVNode)(u),c],8,["href"]),(0,o.createVNode)("a",{class:"ml-8 flex items-center",href:p.baseUrl("commits"),target:"_blank"},[(0,o.createVNode)(m),s],8,["href"]),(0,o.createVNode)("a",{class:"ml-8 flex items-center",href:p.baseUrl("files"),target:"_blank"},[(0,o.createVNode)(h),l],8,["href"])])]})),_:1},8,["project","issue"])}},x=b},173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var o=r(5166),a={class:"flex mt-2"},n=(0,o.createTextVNode)(" Home "),c={key:0,class:"mx-1"},s={key:2,class:"mx-1"},l={key:3};const i={name:"BreadCrumb",props:{project:{type:Object,default:null},issue:{type:Object,default:null}},render:function(e,t,r,i,d,p){var u=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createBlock)("div",a,[(0,o.createVNode)(u,{class:"text-indigo",href:e.$route("projects.index"),method:"get"},{default:(0,o.withCtx)((function(){return[n]})),_:1},8,["href"]),r.project?((0,o.openBlock)(),(0,o.createBlock)("span",c,">")):(0,o.createCommentVNode)("",!0),r.project?((0,o.openBlock)(),(0,o.createBlock)(u,{key:1,class:"text-indigo",href:e.$route("projects.show",{namespace:r.project.namespace,name:r.project.name}),method:"get"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(r.project.namespace)+"/"+(0,o.toDisplayString)(r.project.name),1)]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0),r.issue?((0,o.openBlock)(),(0,o.createBlock)("span",s,">")):(0,o.createCommentVNode)("",!0),r.issue?((0,o.openBlock)(),(0,o.createBlock)("span",l,"#"+(0,o.toDisplayString)(r.issue.number),1)):(0,o.createCommentVNode)("",!0)])}},d=i},2240:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(5166),a={class:"table table-auto w-full border border-grey flex flex-col bg-white"};const n={name:"Card",render:function(e,t,r,n,c,s){return(0,o.openBlock)(),(0,o.createBlock)("div",a,[(0,o.renderSlot)(e.$slots,"default")])}},c=n},5352:(e,t,r)=>{"use strict";r.d(t,{Z:()=>B});var o=r(5166),a={class:"table-auto w-full border border-grey"},n={class:"bg-grey-blue-light border-grey border-b-2 text-left"},c={key:0,class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"},s=(0,o.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Debt Score ",-1),l=(0,o.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Debt Score Graph ",-1),i=(0,o.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Old Prs ",-1),d=(0,o.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Old Issues ",-1),p=(0,o.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Prs ",-1),u=(0,o.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Issues ",-1),m={key:1,class:"text-xs p-4"},h={class:"bg-white divide-y divide-smoke"},k={key:0,class:"p-4"},f={class:"text-black-lightest p-4"},g={class:"text-black-lightest p-4"},b={class:"text-black-lightest p-4"},x={class:"text-black-lightest p-4"},V={class:"text-black-lightest p-4"},y={class:"text-black-lightest p-4"},N={key:1,class:"p-4"};const v={name:"DebtTable",props:{projects:{type:Object,required:!0},hacktoberfest:{type:Boolean,default:!1},showProjectName:{type:Boolean,default:!0}},render:function(e,t,r,v,B,j){var w=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createBlock)("table",a,[(0,o.createVNode)("thead",n,[(0,o.createVNode)("tr",null,[r.showProjectName?((0,o.openBlock)(),(0,o.createBlock)("th",c," Project Name ")):(0,o.createCommentVNode)("",!0),s,l,i,d,p,u,r.hacktoberfest?((0,o.openBlock)(),(0,o.createBlock)("th",m," 🎃 ")):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)("tbody",h,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.projects,(function(t){return(0,o.openBlock)(),(0,o.createBlock)("tr",{key:t.id},[r.showProjectName?((0,o.openBlock)(),(0,o.createBlock)("td",k,[(0,o.createVNode)(w,{class:"text-indigo no-underline p-2 -mx-2",href:e.$route("projects.show",{namespace:t.namespace,name:t.name}),method:"get"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.namespace)+"/"+(0,o.toDisplayString)(t.name),1)]})),_:2},1032,["href"])])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("td",f,(0,o.toDisplayString)(t.debt_score),1),(0,o.createVNode)("td",g,[(0,o.createVNode)("img",{src:"data:image/jpeg;base64, ".concat(t.debt_score_graph)},null,8,["src"])]),(0,o.createVNode)("td",b,(0,o.toDisplayString)(t.old_pull_requests_count),1),(0,o.createVNode)("td",x,(0,o.toDisplayString)(t.old_issues_count),1),(0,o.createVNode)("td",V,(0,o.toDisplayString)(t.pull_requests_count),1),(0,o.createVNode)("td",y,(0,o.toDisplayString)(t.issues_count),1),r.hacktoberfest?((0,o.openBlock)(),(0,o.createBlock)("td",N,[(0,o.createVNode)("a",{class:"text-indigo no-underline p-2 -mx-2",href:"https://github.com/"+t.namespace+"/"+t.name+"/labels/hacktoberfest",target:"_blank"},(0,o.toDisplayString)(t.hacktoberfestIssues),9,["href"])])):(0,o.createCommentVNode)("",!0)])})),128))])])}},B=v},1670:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var o=r(5166),a={class:"text-3xl"},n={class:"ml-2 font-thin text-grey-dark"},c={class:"mt-1"},s={class:"text-grey-blue-dark"},l={key:0,class:"mt-4 markdown-body"},i={key:1,class:"pb-4 text-grey-darker"},d=(0,o.createVNode)("em",null," No description provided. ",-1);var p=r(2088),u=r(9945),m=r(2240),h=r(5352);const k={components:{BreadCrumb:r(173).Z,Card:m.Z,Layout:p.default,ProjectHeader:u.Z,DebtTable:h.Z},props:{project:{type:Object,required:!0},issue:{required:!0,type:Object}},data:function(){return{parsedGithubItemBody:"",loaded:!1}},mounted:function(){var e=this,t={headers:{Authorization:"token ".concat(window.githubToken)}},r={text:this.issue.body};this.$http.post("https://api.github.com/markdown",r,t).then((function(t){e.parsedGithubItemBody=t.data,e.loaded=!0}))},render:function(e,t,r,p,u,m){var h=(0,o.resolveComponent)("BreadCrumb"),k=(0,o.resolveComponent)("ProjectHeader"),f=(0,o.resolveComponent)("DebtTable"),g=(0,o.resolveComponent)("Card"),b=(0,o.resolveComponent)("Layout");return(0,o.openBlock)(),(0,o.createBlock)(b,{title:"Ozzie - "+r.project.namespace+"/"+r.project.name+" - #"+r.issue.number},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(h,{project:r.project,issue:r.issue},null,8,["project","issue"]),(0,o.createVNode)(k,{project:r.project,issue:r.issue},null,8,["project","issue"]),(0,o.createVNode)(f,{"show-project-name":!1,projects:[r.project],class:"mt-4"},null,8,["projects"]),(0,o.createVNode)(g,{class:"mt-4 px-4 pt-4"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)("h2",a,[(0,o.createTextVNode)((0,o.toDisplayString)(r.issue.title),1),(0,o.createVNode)("span",n,"#"+(0,o.toDisplayString)(r.issue.number),1)]),(0,o.createVNode)("p",c,[(0,o.createVNode)("a",{class:"font-semibold text-grey-blue-darkest",href:r.issue.user.login,target:"_blank"},(0,o.toDisplayString)(r.issue.user.login),9,["href"]),(0,o.createVNode)("span",s," opened this issue "+(0,o.toDisplayString)(e.$luxon.fromISO(r.issue.created_at).toRelative()),1)]),(0,o.renderSlot)(e.$slots,"title-extra"),u.loaded?((0,o.openBlock)(),(0,o.createBlock)("div",l,[""!==r.issue.body?((0,o.openBlock)(),(0,o.createBlock)("article",{key:0,innerHTML:u.parsedGithubItemBody},null,8,["innerHTML"])):((0,o.openBlock)(),(0,o.createBlock)("div",i,[d]))])):(0,o.createCommentVNode)("",!0)]})),_:3})]})),_:1},8,["title"])}},f=k},9945:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(5166),a={class:"mt-6 flex justify-between items-center"},n={class:"text-2xl text-black-lightest tracking-wide"},c={class:"text-black-lightest"},s=(0,o.createTextVNode)(" Maintained by "),l={class:"mt-1 text-grey-dark font-light"},i={key:0,class:"text-grey-dark font-light"};const d={name:"ProjectHeader",components:{BreadCrumb:r(173).Z},props:{project:{type:Object,required:!0},issue:{type:Object,default:null}},render:function(e,t,r,d,p,u){return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("div",a,[(0,o.createVNode)("h1",n,(0,o.toDisplayString)(r.project.namespace)+"/"+(0,o.toDisplayString)(r.project.name),1),(0,o.createVNode)("p",c,[s,((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.project.maintainers,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("a",{key:e,class:"text-indigo no-underline",href:"https://github.com/".concat(e),target:"_blank"}," @"+(0,o.toDisplayString)(e),9,["href"])})),128))])]),(0,o.createVNode)("p",l," Synced "+(0,o.toDisplayString)(e.$luxon.fromISO(r.project.updated_at).toRelative()),1),r.project.hasDownloads?((0,o.openBlock)(),(0,o.createBlock)("p",i,(0,o.toDisplayString)((new Intl.NumberFormat).format(r.project.downloads_total))+" downloads ("+(0,o.toDisplayString)((new Intl.NumberFormat).format(r.project.downloads_last_30_days))+" per month) ",1)):(0,o.createCommentVNode)("",!0)],64)}},p=d}}]);