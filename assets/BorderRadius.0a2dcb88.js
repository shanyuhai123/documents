import{g as d,h as f,i as _,o as C,c as v,a as p}from"./app.e62aeb11.js";import{_ as m}from"./plugin-vue_export-helper.5a098b48.js";const T=d({setup(){const s=f(),l=f(),c=(e,o,n,t,a,r)=>{e.beginPath(),e.moveTo(o+r,n),e.lineTo(o+t-r,n),e.quadraticCurveTo(o+t,n,o+t,n+r),e.lineTo(o+t,n+a-r),e.quadraticCurveTo(o+t,n+a,o+t-r,n+a),e.lineTo(o+r,n+a),e.quadraticCurveTo(o,n+a,o,n+a-r),e.lineTo(o,n+r),e.quadraticCurveTo(o,n,o+r,n),e.closePath()},i=()=>{const e=s.value.getContext("2d");c(e,10,10,280,280,10),e.strokeStyle="#004643",e.stroke(),e.fillStyle="#f9bc60",e.fill(),e.restore()},u=()=>{const e=l.value.getContext("2d");e.save(),e.beginPath(),e.arc(150,150,130,0,Math.PI*2,!1),e.strokeStyle="#232946",e.stroke(),e.clip(),e.fillStyle="#eebbc3",e.fill(),e.restore()};return _(()=>{i(),u()}),{roundCorner:s,circle:l}}}),b={style:{display:"flex","align-items":"center","justify-content":"space-between"}},k={ref:"roundCorner",width:"300",height:"300"},g={ref:"circle",width:"300",height:"300"};function q(s,l,c,i,u,e){return C(),v("div",b,[p("canvas",k,null,512),p("canvas",g,null,512)])}var S=m(T,[["render",q]]);export{S as default};
