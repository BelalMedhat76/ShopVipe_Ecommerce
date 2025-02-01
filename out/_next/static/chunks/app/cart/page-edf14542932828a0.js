(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{5531:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var r=s(2265);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:c="",children:l,iconNode:d,...o},u)=>(0,r.createElement)("svg",{ref:u,...n,width:t,height:t,stroke:e,strokeWidth:i?24*Number(s)/Number(t):s,className:a("lucide",c),...o},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let s=(0,r.forwardRef)(({className:s,...n},l)=>(0,r.createElement)(c,{ref:l,iconNode:t,className:a(`lucide-${i(e)}`,s),...n}));return s.displayName=`${e}`,s}},8291:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},4891:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},9883:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},2546:function(e,t,s){Promise.resolve().then(s.bind(s,3726))},3726:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var r=s(7437),i=s(2265),a=s(5251),n=s(8291),c=s(4891),l=s(9883),d=s(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,d.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var u=s(1396),h=s.n(u),m=s(4033);function x(){let[e,t]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("cartItems"))||[];t(e)},[]);let s=(s,r)=>{t(e=>e.map(e=>e.id===s?{...e,quantity:Math.max(1,e.quantity+r)}:e)),localStorage.setItem("cartItems",JSON.stringify(e))},d=s=>{let r=e.filter(e=>e.id!==s);t(r),localStorage.setItem("cartItems",JSON.stringify(r))},u=e.reduce((e,t)=>e+t.price*t.quantity,0),x=(0,m.useRouter)();return(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Shopping Cart"}),0===e.length?(0,r.jsxs)("div",{className:"text-center py-12",children:[(0,r.jsx)("p",{className:"text-muted-foreground mb-6",children:"Your cart is empty"}),(0,r.jsxs)(h(),{href:"/products",className:"inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity",children:["Continue Shopping",(0,r.jsx)(n.Z,{className:"ml-2 h-5 w-5"})]})]}):(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)("div",{className:"space-y-4",children:e.map(e=>(0,r.jsxs)(a.E.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm",children:[(0,r.jsx)("img",{src:e.image,alt:e.name,className:"w-24 h-24 object-cover rounded-md"}),(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsx)("h3",{className:"font-semibold",children:e.name}),(0,r.jsxs)("p",{className:"text-muted-foreground",children:["$",e.price]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("button",{onClick:()=>s(e.id,-1),className:"p-1 hover:bg-muted rounded",children:(0,r.jsx)(c.Z,{size:16})}),(0,r.jsx)("span",{className:"w-8 text-center",children:e.quantity}),(0,r.jsx)("button",{onClick:()=>s(e.id,1),className:"p-1 hover:bg-muted rounded",children:(0,r.jsx)(l.Z,{size:16})})]}),(0,r.jsx)("button",{onClick:()=>d(e.id),className:"p-2 hover:bg-muted rounded",children:(0,r.jsx)(o,{size:18})})]},e.id))})}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"text-lg font-semibold",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{children:"Subtotal:"}),(0,r.jsxs)("span",{children:["$",u.toFixed(2)]})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{children:"Shipping:"}),(0,r.jsxs)("span",{children:["$",10]})]}),(0,r.jsxs)("div",{className:"flex justify-between font-bold",children:[(0,r.jsx)("span",{children:"Total:"}),(0,r.jsxs)("span",{children:["$",(u+10).toFixed(2)]})]})]}),(0,r.jsx)("button",{onClick:()=>{x.push("/checkout")},className:"w-full px-6 py-3 bg-blue-700 text-primary-foreground rounded-md hover:opacity-90 transition-opacity",children:"Proceed to Checkout"})]})]})]})}},4033:function(e,t,s){e.exports=s(290)}},function(e){e.O(0,[220,396,971,864,744],function(){return e(e.s=2546)}),_N_E=e.O()}]);