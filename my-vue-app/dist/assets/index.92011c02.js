import{d as e,u as l,r as n,o as t,c as a,w as s,a as o,b as i,e as u}from"./index.d0b19b4a.js";var c=e({setup(){const e=l();return{clickRoute:l=>{e.push(l)}}}});const d=i("首页"),r=i("活动管理"),f=i("活动列表"),p=i("活动详情");c.render=function(e,l,i,u,c,h){const m=n("el-breadcrumb-item"),v=n("el-breadcrumb");return t(),a(v,{"separator-class":"el-icon-arrow-right"},{default:s((()=>[o(m,{to:{path:"/Home"}},{default:s((()=>[d])),_:1}),o(m,null,{default:s((()=>[r])),_:1}),o(m,null,{default:s((()=>[f])),_:1}),o(m,null,{default:s((()=>[p])),_:1})])),_:1})};var h=e({setup(){const e=u(!1);return l(),{isCollapse:e,handleOpen:(e,l)=>{},handleClose:(e,l)=>{}}}});const m={class:"menu"},v={class:"main"},_=o("i",{class:"el-icon-location"},null,-1),x=o("span",null,"导航一",-1),g=i("选项1"),C=i("选项2"),b=i("选项3"),w=i("选项1"),O=o("i",{class:"el-icon-menu"},null,-1),y=i("导航二"),k=o("i",{class:"el-icon-setting"},null,-1),M=i(" 导航四 "),N={class:"footer"};h.render=function(e,l,i,u,c,d){const r=n("el-menu-item"),f=n("el-menu-item-group"),p=n("el-submenu"),h=n("el-menu"),R=n("el-button");return t(),a("div",m,[o("div",v,[o(h,{uniqueOpened:!0,"default-active":"2",class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,"background-color":"#2e3035","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse,style:{height:"calc(100vh - 80px)"}},{default:s((()=>[o(p,{index:"1"},{title:s((()=>[_,x])),default:s((()=>[o(f,null,{title:s((()=>[])),default:s((()=>[o(r,{index:"1-1"},{default:s((()=>[g])),_:1}),o(r,{index:"1-2"},{default:s((()=>[C])),_:1}),o(r,{index:"1-3"},{default:s((()=>[b])),_:1}),o(r,{index:"1-4"},{default:s((()=>[w])),_:1})])),_:1})])),_:1}),o(r,{index:"2"},{title:s((()=>[y])),default:s((()=>[O])),_:1}),o(r,{index:"4"},{title:s((()=>[M])),default:s((()=>[k])),_:1})])),_:1},8,["onOpen","onClose","collapse"]),o("div",N,[o(R,{icon:e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold",onClick:l[1]||(l[1]=l=>e.isCollapse=!e.isCollapse)},null,8,["icon"])])])])};const R={},j={style:{width:"100%",height:"100%"}};R.render=function(e,l){const s=n("router-view");return t(),a("div",j,[o(s)])};var q=e({components:{Nav:c,Menu:h,Content:R},setup(){const e=l();return{clickRoute:l=>{e.push(l)},handleOpen:(e,l)=>{console.log(e,l)},handleClose:(e,l)=>{console.log(e,l)}}}});const H={class:"layout"},z={class:"left"},A={class:"right"};q.render=function(e,l,i,u,c,d){const r=n("Menu"),f=n("Nav"),p=n("el-header"),h=n("Content"),m=n("el-main"),v=n("el-container");return t(),a("div",H,[o("div",z,[o(r)]),o("div",A,[o(v,{style:{height:"100%",width:"100%"}},{default:s((()=>[o(p,{class:"header"},{default:s((()=>[o(f)])),_:1}),o(m,{style:{height:"calc(100vh - 30px)",width:"100%",padding:"0px",margin:"0px"}},{default:s((()=>[o(h)])),_:1})])),_:1})])])};export default q;
