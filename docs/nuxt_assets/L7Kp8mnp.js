import{f as l,g as v,$ as m,Y as h,c as o,i as r,a as t,t as e,d as x,F as u,m as g,o as i}from"./BmVZmq9Z.js";import{u as p}from"./CN9iHeLy.js";import{_ as y}from"./DlAUqK2U.js";import{u as C}from"./Cs4Ec6UP.js";const S={class:"container"},M={key:0,class:"view"},T={class:"left"},k={class:"text_one"},F={class:"text_two"},H={class:"text_three"},L=["innerHTML"],A={class:"text_four"},B={class:"text_six"},I={class:"text_seven"},N={class:"right"},V={class:"img_container"},w=["src"],D={class:"text"},E={class:"text"},Y={class:"text"},b={class:"text"},q={class:"text"},P={class:"text"},R={class:"text"},W={__name:"detil",setup($){const d=l.getPageSeoConfig("lan-fatty_acid-detil");d.type==="useSeoMetaConfig"?p(d.useSeoMetaConfig):d.type==="useHeadConfig"&&C(d.useSeoMetaConfig);const f=m();v(()=>{const c=f.query.id;l.FATTY_ACID_LIST.forEach(a=>{a.id==c&&(s.data=a.detil)})});const s=h({data:null});return(c,a)=>{var n;return i(),o("div",S,[s.data?(i(),o("div",M,[t("div",T,[t("div",k,e(s.data.cn_name),1),t("div",F,e(s.data.en_name),1),t("div",H,[a[0]||(a[0]=x("来源：")),(n=s.data)!=null&&n.source?(i(),o("span",{key:0,innerHTML:s.data.source},null,8,L)):r("",!0)]),t("div",A,"功效："+e(s.data.efficacy),1),a[1]||(a[1]=t("div",{class:"text_five"},"衍生文献：",-1)),(i(!0),o(u,null,g(s.data.literature,_=>(i(),o(u,null,[t("div",B,e(_.source),1),t("div",I,e(_.des),1)],64))),256))]),t("div",N,[t("div",V,[t("img",{src:s.data.pic,alt:"",srcset:""},null,8,w)]),t("div",D,"CAS号:"+e(s.data.cas),1),t("div",E,"化学式:"+e(s.data.chemicalFormula),1),t("div",Y,"分子量:"+e(s.data.molecularWeight),1),t("div",b,"密度:"+e(s.data.density),1),t("div",q,"熔点:"+e(s.data.melting),1),t("div",P,"沸点:"+e(s.data.boiling),1),t("div",R,"酸度系数:"+e(s.data.acidity),1)])])):r("",!0)])}}},K=y(W,[["__scopeId","data-v-967ef50d"]]);export{K as default};
