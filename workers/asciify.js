let e={columns:20,rows:20,chars:"·*+=$@#",charColorSource:"custom",charCustomColor:"#ffffff",charBackgroundColorSource:"sample",charCustomBackgroundColor:"#000000",fontSize:1,geometryPrecision:3};self.addEventListener("message",(f=>{let[n,c]=f.data;c=t(e,c);let i=r(n),{width:h,height:$}=n,m=h/c.columns,u=$/c.rows,g=u*c.fontSize,d=`<svg viewBox="0 0 ${h} ${$}">`;for(let e=0;e<c.rows;e+=1){let t=e*u,r=t+u/2;for(let e=0;e<c.columns;e+=1){let f=e*m,g=f+m/2,[p,x,y,C]=o(g/h,r/$,n,i);if(C>0){let e=a(p,x,y,C),r="sample"===c.charBackgroundColorSource?e:c.charCustomBackgroundColor;d+=`<rect ${s({x:l(f,c.geometryPrecision),y:l(t,c.geometryPrecision),width:l(m,c.geometryPrecision),height:l(u,c.geometryPrecision),style:`fill: ${r};`})}></rect>`}}}for(let e=0;e<c.rows;e+=1){let t=e*u,r=t+u/2;d+=`<text ${s({y:l(t+u/2,c.geometryPrecision),style:`white-space: pre; text-anchor: middle; dominant-baseline: central; font-family: monospace; font-size: ${g}px;`})}>`;for(let e=0;e<c.columns;e+=1){let t=e*m,f=t+m/2,[u,g,p,x]=o(f/h,r/$,n,i),y=(u+g+p)*(x/255),C=765/(c.chars.length-1),b=c.chars[Math.round(y/C)];if(x>0){let e=a(u,g,p,x),r="sample"===c.charColorSource?e:c.charCustomColor;d+=`<tspan ${s({x:l(t+m/2,c.geometryPrecision),style:`fill: ${r};`})}>${b}</tspan>`}}d+="</text>"}d+="</svg>",self.postMessage(d)}));let t=(e,t)=>{let l={};for(let[r,o]of Object.entries(e))l[r]=void 0!==t[r]?t[r]:e[r];return l},l=(e,t=0)=>{let l=Math.pow(10,t);return Math.round((e+Number.EPSILON)*l)/l},r=e=>{let t=new OffscreenCanvas(e.width,e.height).getContext("2d");t.drawImage(e,0,0);let l=t.getImageData(0,0,e.width,e.height),r=[];for(let e=0;e<l.data.length;e+=4)r.push([l.data[e],l.data[e+1],l.data[e+2],l.data[e+3]]);return r},o=(e,t,l,r)=>r[Math.round(e*l.width)+Math.round(t*l.height)*l.width]||[0,0,0,0],a=(e,t,r,o)=>{let a=e=>{let t=e.toString(16);return 1==t.length?"0"+t:t};return 255===o?"#"+a(e)+a(t)+a(r):0===o?"rgba(0,0,0,0)":`rgba(${e},${t},${r},${o=l(o/255,2)})`},s=e=>Object.entries(e).map((([e,t])=>`${e}="${t}"`)).join(" ");