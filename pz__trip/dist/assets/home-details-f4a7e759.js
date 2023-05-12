import{c as K,n as U,t as H,h as q,H as z,Z as Q,w as W,a0 as X,a6 as Y}from"./index-829999cc.js";import{I as E}from"./HY_Request-a32531ce.js";import{d as r,e as ee,r as P,_ as b,o,c as a,L as w,b as t,F as f,I as p,M as Z,G as i,K as M,J,E as j,N as V,O as te,p as O,a as F,j as se,P as oe,A as ae,f as G,w as ne,H as g}from"./index-bf93e4ef.js";import{u as ce,R as le,a as ie,s as re}from"./scroll_Listener-c4014451.js";function de(e,u){const c=ce(e,!0);return n=>r("div",{class:u("placeholder"),style:{height:c.value?`${c.value}px`:void 0}},[n()])}const[_e,x]=K("nav-bar"),ue={title:String,fixed:Boolean,zIndex:U,border:H,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:H};var he=ee({name:_e,props:ue,emits:["clickLeft","clickRight"],setup(e,{emit:u,slots:c}){const n=P(),s=de(n,x),l=m=>u("clickLeft",m),d=m=>u("clickRight",m),h=()=>c.left?c.left():[e.leftArrow&&r(E,{class:x("arrow"),name:"arrow-left"},null),e.leftText&&r("span",{class:x("text")},[e.leftText])],v=()=>c.right?c.right():r("span",{class:x("text")},[e.rightText]),_=()=>{const{title:m,fixed:D,border:C,zIndex:I}=e,A=q(I),T=e.leftArrow||e.leftText||c.left,N=e.rightText||c.right;return r("div",{ref:n,style:A,class:[x({fixed:D}),{[Q]:C,"van-safe-area-top":e.safeAreaInsetTop}]},[r("div",{class:x("content")},[T&&r("div",{class:[x("left"),e.clickable?z:""],onClick:l},[h()]),r("div",{class:[x("title"),"van-ellipsis"]},[c.title?c.title():m]),N&&r("div",{class:[x("right"),e.clickable?z:""],onClick:d},[v()])])])};return()=>e.fixed&&e.placeholder?s(_):_()}});const me=W(he);const fe={class:"swipe"},ve=["src"],pe={class:"custom-indicator"},ye={class:"text"},$e={key:0,class:"count"},ge={__name:"home-details-swipe",props:{swipeData:{type:Array,default:()=>[]}},setup(e){const u=e,c={};for(const l of u.swipeData){let d=c[l.enumPictureCategory];d||(d=[],c[l.enumPictureCategory]=d),d.push(l)}console.log(c);const n=l=>l.replace("：","").replace("【","").replace("】","");function s(l){return c[l.enumPictureCategory].findIndex(h=>h===l)+1}return(l,d)=>{const h=Y,v=X;return o(),a("div",fe,[r(v,{class:"swipe-list",autoplay:2500,"indicator-color":"white"},{indicator:w(({active:_})=>[t("div",pe,[(o(),a(f,null,p(c,(m,D,C)=>{var I,A,T;return t("div",{key:D,class:Z(["item",{active:((I=e.swipeData[_])==null?void 0:I.enumPictureCategory)==D}])},[t("span",ye,i(n((A=m[C])==null?void 0:A.title)),1),((T=e.swipeData[_])==null?void 0:T.enumPictureCategory)==D?(o(),a("span",$e,i(s(e.swipeData[_]))+"/"+i(m.length),1)):M("",!0)],2)}),64))])]),default:w(()=>[(o(!0),a(f,null,p(e.swipeData,(_,m)=>(o(),J(h,{key:m,class:"swipe-item"},{default:w(()=>[t("img",{src:_==null?void 0:_.url,alt:""},null,8,ve)]),_:2},1024))),128))]),_:1})])}}},be=b(ge,[["__scopeId","data-v-6eb21047"]]);const xe={class:"infos"},ke={class:"name"},we={class:"tags"},De={class:"comment"},Ce={class:"left"},Ie={class:"score"},Te={class:"scoreTitle"},Se={class:"brief"},Be={class:"right"},Me={class:"count"},Ae={class:"locaton comment"},Le={class:"left"},Pe={class:"address"},Re={class:"right"},Ne={class:"position"},Oe={__name:"home-details-infos",props:{infosData:{type:Object,default:()=>({})}},setup(e){return(u,c)=>{const n=E;return o(),a("div",xe,[t("div",ke,i(e.infosData.houseName),1),t("div",we,[(o(!0),a(f,null,p(e.infosData.houseTags,(s,l)=>{var d,h,v,_;return o(),a("span",{key:l,class:"item",style:V({color:(d=s==null?void 0:s.tagText)==null?void 0:d.color,background:(v=(h=s==null?void 0:s.tagText)==null?void 0:h.background)==null?void 0:v.color})},i((_=s==null?void 0:s.tagText)==null?void 0:_.text),5)}),128))]),t("div",De,[t("div",Ce,[t("span",Ie,i(e.infosData.commentBrief.overall),1),t("span",Te,i(e.infosData.commentBrief.scoreTitle),1),t("span",Se,"“"+i(e.infosData.commentBrief.commentBrief)+"”",1)]),t("div",Be,[t("span",Me,[j(i(e.infosData.commentBrief.totalCount)+" 条评论 ",1),r(n,{name:"arrow"})])])]),t("div",Ae,[t("div",Le,[t("span",Pe,i(e.infosData.nearByPosition.address),1)]),t("div",Re,[t("span",Ne,[j(" 地图·周边 "),r(n,{name:"arrow"})])])])])}}},Fe=b(Oe,[["__scopeId","data-v-7fb39a61"]]);const je=e=>(O("data-v-5bbb0d6d"),e=e(),F(),e),Ee={class:"facility"},Ve={class:"facility-inner"},He={class:"details-facility"},ze=je(()=>t("span",null,"默认插槽",-1)),Ge={key:0,class:"footer"},Ze={class:"infos"},Je={__name:"details-facility",props:{title:{type:String,default:"默认标题"},infos:{type:String,default:""}},setup(e){return(u,c)=>{const n=E;return o(),a("div",Ee,[t("div",Ve,[t("h2",null,i(e.title),1)]),t("div",He,[te(u.$slots,"default",{},()=>[ze],!0)]),e.infos.length?(o(),a("div",Ge,[t("span",Ze,[j(i(e.infos)+" ",1),r(n,{name:"arrow"})])])):M("",!0)])}}},R=b(Je,[["__scopeId","data-v-5bbb0d6d"]]);const Ke=e=>(O("data-v-5b9beb26"),e=e(),F(),e),Ue={class:"facility"},qe={class:"facility-inner"},Qe={class:"head"},We=["src"],Xe={class:"text"},Ye={class:"list"},et={class:"item"},tt=Ke(()=>t("i",{class:"icon_check icon"},null,-1)),st={__name:"home-details-facility",props:{houseFacility:{type:Object,default:()=>({})}},setup(e){return(u,c)=>(o(),a("div",Ue,[r(R,{title:"房屋设备",infos:"查看更多设备"},{default:w(()=>{var n;return[t("div",qe,[(o(!0),a(f,null,p((n=e.houseFacility)==null?void 0:n.houseFacilitys,(s,l)=>{var d,h;return o(),a(f,null,[(h=(d=e.houseFacility)==null?void 0:d.facilitySort)!=null&&h.includes(l)?(o(),a("div",{class:"item",key:l},[t("div",Qe,[t("img",{src:s.icon,alt:""},null,8,We),t("div",Xe,i(s.groupName),1)]),t("div",Ye,[(o(!0),a(f,null,p(s.facilitys.slice(0,4),(v,_)=>(o(),a("div",et,[tt,t("span",null,i(v.name),1)]))),256))])])):M("",!0)],64)}),256))])]}),_:1})]))}},ot=b(st,[["__scopeId","data-v-5b9beb26"]]);const at=e=>(O("data-v-25fc7996"),e=e(),F(),e),nt={class:"app"},ct={class:"intro"},lt={class:"top"},it=["src"],rt={class:"header"},dt={class:"left"},_t={class:"avatar"},ut=["src"],ht={class:"info"},mt={class:"name"},ft={class:"tags"},vt={key:0,class:"divider"},pt=at(()=>t("div",{class:"right"},[t("div",{class:"contact"},"联系房东")],-1)),yt={class:"bottom"},$t={class:"item"},gt={class:"title"},bt={class:"score"},xt={class:"desc"},kt={__name:"home-details-host",props:{landlord:{type:Object,default:()=>({})}},setup(e){return(u,c)=>(o(),a("div",nt,[r(R,{title:"房东信息",infos:"查看房东信息"},{default:w(()=>[t("div",ct,[t("div",lt,[t("img",{src:e.landlord.topScroll,alt:""},null,8,it)]),t("div",rt,[t("div",dt,[t("div",_t,[t("img",{src:e.landlord.hotelLogo,alt:""},null,8,ut)]),t("div",ht,[t("div",mt,i(e.landlord.hotelName),1),t("div",ft,[(o(!0),a(f,null,p(e.landlord.hotelTags,(n,s)=>(o(),a("div",{class:"item",style:V({color:n.tagText.color})},[t("span",null,i(n.tagText.text),1),s!==e.landlord.hotelTags.length-1?(o(),a("span",vt,"|")):M("",!0)],4))),256))])])]),pt]),t("div",yt,[(o(!0),a(f,null,p(e.landlord.hotelSummary,(n,s)=>(o(),a("div",$t,[t("div",gt,i(n.title),1),t("div",bt,i(n.introduction),1),t("div",xt,i(n.tip),1)]))),256))])])]),_:1})]))}},wt=b(kt,[["__scopeId","data-v-25fc7996"]]);const Dt=e=>(O("data-v-3aa8e6b1"),e=e(),F(),e),Ct={class:"comment"},It={class:"comment"},Tt={class:"header"},St={class:"left"},Bt={class:"score"},Mt={class:"text"},At=Dt(()=>t("div",{class:"line"},null,-1)),Lt={class:"info"},Pt={class:"title"},Rt={class:"count"},Nt={class:"star"},Ot={class:"right"},Ft={class:"tags"},jt={class:"content"},Et={class:"user"},Vt={class:"avatar"},Ht=["src"],zt={class:"profile"},Gt={class:"name"},Zt={class:"date"},Jt={class:"text"},Kt={__name:"home-details-comment",props:{comment:{type:Object,default:()=>({})}},setup(e){return(u,c)=>{const n=le;return o(),a("div",Ct,[r(R,{title:"房客点评",infos:"查看全部评论"},{default:w(()=>[t("div",It,[t("div",Tt,[t("div",St,[t("div",Bt,[t("span",Mt,i(e.comment.overall),1),At]),t("div",Lt,[t("div",Pt,i(e.comment.scoreTitle),1),t("div",Rt,i(e.comment.totalCount)+"条评论",1),t("div",Nt,[r(n,{modelValue:e.comment.overall,"onUpdate:modelValue":c[0]||(c[0]=s=>e.comment.overall=s),color:"#ff9645",size:"12",readonly:"","allow-half":""},null,8,["modelValue"])])])]),t("div",Ot,[(o(!0),a(f,null,p(e.comment.subScores,(s,l)=>(o(),a("span",{key:s,class:"item"},i(s),1))),128))])]),t("div",Ft,[(o(!0),a(f,null,p(e.comment.commentTagVo,(s,l)=>(o(),a("span",{key:l,class:"item",style:V({color:s.color,background:s.backgroundColor})},i(s.text),5))),128))]),t("div",jt,[t("div",Et,[t("div",Vt,[t("img",{src:e.comment.comment.userAvatars,alt:""},null,8,Ht)]),t("div",zt,[t("div",Gt,i(e.comment.comment.userName),1),t("div",Zt,i(e.comment.comment.checkInDate),1)])]),t("div",Jt,i(e.comment.comment.commentDetail),1)])])]),_:1})])}}},Ut=b(Kt,[["__scopeId","data-v-3aa8e6b1"]]);const qt={class:"notice"},Qt={class:"notice-inner"},Wt={class:"title"},Xt={class:"intro"},Yt={key:0,class:"tip"},es={__name:"home-details-notice",props:{orderRules:{type:Array,defalut:()=>[]}},setup(e){return(u,c)=>(o(),a("div",qt,[r(R,{title:"预定需知"},{default:w(()=>[t("div",Qt,[(o(!0),a(f,null,p(e.orderRules,(n,s)=>(o(),a("div",{key:s,class:"item"},[t("span",Wt,i(n.title),1),t("span",Xt,i(n.introduction),1),n.tips?(o(),a("span",Yt,"查看说明")):M("",!0)]))),128))])]),_:1})]))}},ts=b(es,[["__scopeId","data-v-333f8b55"]]);const ss={class:"map"},os={__name:"home-details-map",props:{position:{type:Object,defalut:()=>({})}},setup(e){const u=e,c=P();return se(()=>{var n=new BMapGL.Map(c.value),s=new BMapGL.Point(u.position.longitude,u.position.latitude);n.centerAndZoom(s,15);var l=new BMapGL.Marker(s);n.addOverlay(l)}),(n,s)=>(o(),a("div",ss,[r(R,{title:"周边地图",infos:"查看更多周边"},{default:w(()=>[t("div",{class:"baidu",ref_key:"mapEl",ref:c},null,512)]),_:1})]))}},as=b(os,[["__scopeId","data-v-c727ca15"]]);const ns={props:{ListConent:{type:Array,default(){return[]}}},data(){return{currentIndex:0}},emits:["listDesc"],methods:{btnClick(e){this.currentIndex=e,this.$emit("listDesc",e)},setCurrentIndex(e){this.currentIndex=e}}},cs={class:"list"},ls=["onClick"];function is(e,u,c,n,s,l){return o(),a("div",cs,[(o(!0),a(f,null,p(c.ListConent,(d,h)=>(o(),a("p",{class:Z(["list-nav",{active:h===s.currentIndex}]),key:d,onClick:v=>l.btnClick(h)},i(d),11,ls))),128))])}const rs=b(ns,[["render",is],["__scopeId","data-v-17d0fa75"]]);const ds={key:1,class:"main"},_s={__name:"home-details",setup(e){var N;const u=oe();console.log(u.params.id);const c=ae();function n(){c.back()}const s=ie(),l=(N=s==null?void 0:s.detailsData)==null?void 0:N.mainPart,d=P(),{scrollTop:h}=re(d),v=G(()=>h.value>300),_=P({}),m=y=>{if(!y)return;const S=y.$el.getAttribute("name");_.value[S]=y.$el},D=G(()=>Object.keys(_.value));let C=!1,I=0;const A=y=>{const S=Object.keys(_.value)[y];let $=_.value[S].offsetTop;y!==0&&($=$-56),C=!0,I=$,d.value.scrollTo({top:$,behavior:"smooth"})},T=P();return ne(h,y=>{var L;if(I===y&&(C=!1),C)return;const S=Object.values(_.value),B=[];for(let k=0;k<S.length;k++)B.push(S[k].offsetTop);let $=B.length-1;for(let k=0;k<B.length;k++)if(y<B[k]){$=k-1;break}(L=T.value)==null||L.setCurrentIndex($)}),(y,S)=>{var $,L;const B=me;return o(),a("div",{class:"details",ref_key:"element",ref:d},[g(v)?(o(),J(rs,{key:0,ListConent:g(D),class:"tabs-ctrl",onListDesc:A,ref_key:"tabCtrlRef",ref:T},null,8,["ListConent"])):M("",!0),r(B,{title:"房屋详情","left-text":"返回","left-arrow":"",onClickLeft:n}),g(l)?(o(),a("div",ds,[r(be,{"swipe-data":g(l).topModule.housePicture.housePics},null,8,["swipe-data"]),r(Fe,{ref:m,name:"内容","infos-data":g(l).topModule},null,8,["infos-data"]),r(ot,{ref:m,name:"房屋","house-facility":g(l).dynamicModule.facilityModule.houseFacility},null,8,["house-facility"]),r(wt,{ref:m,name:"房东",landlord:($=g(l).dynamicModule)==null?void 0:$.landlordModule},null,8,["landlord"]),r(Ut,{ref:m,name:"评论",comment:(L=g(l).dynamicModule)==null?void 0:L.commentModule},null,8,["comment"]),r(ts,{ref:m,name:"预定","order-rules":g(l).dynamicModule.rulesModule.orderRules},null,8,["order-rules"]),r(as,{ref:m,name:"周边",position:g(l).dynamicModule.positionModule},null,8,["position"])])):M("",!0)],512)}}},vs=b(_s,[["__scopeId","data-v-7074db29"]]);export{vs as default};