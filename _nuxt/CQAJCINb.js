import{d,ay as _,y as f,I as a,b as x,c as z,a2 as I,M as o,l as S}from"./D5A51bDx.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;_(s=>({"1147c5ae":o(m)}));const e=f();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=a(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=a(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=a(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(x(),z("span",{style:I({width:o(c),height:o(c)})},null,4))}}),b=S(y,[["__scopeId","data-v-3d9afb63"]]);export{b as default};
