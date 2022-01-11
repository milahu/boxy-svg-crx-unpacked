import e from"/modules/pako/pako.js";var r,t,n,a={};a.toRGBA8=function(e){var r=e.width,t=e.height;if(null==e.tabs.acTL)return[a.toRGBA8.decodeImage(e.data,r,t,e).buffer];var n=[];null==e.frames[0].data&&(e.frames[0].data=e.data);for(var i=r*t*4,f=new Uint8Array(i),o=new Uint8Array(i),l=new Uint8Array(i),s=0;s<e.frames.length;s++){var c=e.frames[s],u=c.rect.x,d=c.rect.y,h=c.rect.width,v=c.rect.height,g=a.toRGBA8.decodeImage(c.data,h,v,e);if(0!=s)for(var p=0;p<i;p++)l[p]=f[p];if(0==c.blend?a._copyTile(g,h,v,f,r,t,u,d,0):1==c.blend&&a._copyTile(g,h,v,f,r,t,u,d,1),n.push(f.buffer.slice(0)),0==c.dispose);else if(1==c.dispose)a._copyTile(o,h,v,f,r,t,u,d,0);else if(2==c.dispose)for(p=0;p<i;p++)f[p]=l[p]}return n},a.toRGBA8.decodeImage=function(e,r,t,n){var i=r*t,f=a.decode._getBPP(n),o=Math.ceil(r*f/8),l=new Uint8Array(4*i),s=new Uint32Array(l.buffer),c=n.ctype,u=n.depth,d=a._bin.readUshort;Date.now();if(6==c){var h=i<<2;if(8==u)for(var v=0;v<h;v+=4)l[v]=e[v],l[v+1]=e[v+1],l[v+2]=e[v+2],l[v+3]=e[v+3];if(16==u)for(v=0;v<h;v++)l[v]=e[v<<1]}else if(2==c){var g=n.tabs.tRNS;if(null==g){if(8==u)for(v=0;v<i;v++){var p=3*v;s[v]=255<<24|e[p+2]<<16|e[p+1]<<8|e[p]}if(16==u)for(v=0;v<i;v++){p=6*v;s[v]=255<<24|e[p+4]<<16|e[p+2]<<8|e[p]}}else{var b=g[0],w=g[1],m=g[2];if(8==u)for(v=0;v<i;v++){var y=v<<2;p=3*v;s[v]=255<<24|e[p+2]<<16|e[p+1]<<8|e[p],e[p]==b&&e[p+1]==w&&e[p+2]==m&&(l[y+3]=0)}if(16==u)for(v=0;v<i;v++){y=v<<2,p=6*v;s[v]=255<<24|e[p+4]<<16|e[p+2]<<8|e[p],d(e,p)==b&&d(e,p+2)==w&&d(e,p+4)==m&&(l[y+3]=0)}}}else if(3==c){var A=n.tabs.PLTE,U=n.tabs.tRNS,_=U?U.length:0;if(1==u)for(var H=0;H<t;H++){var I=H*o,M=H*r;for(v=0;v<r;v++){y=M+v<<2;var q=3*(R=e[I+(v>>3)]>>7-((7&v)<<0)&1);l[y]=A[q],l[y+1]=A[q+1],l[y+2]=A[q+2],l[y+3]=R<_?U[R]:255}}if(2==u)for(H=0;H<t;H++)for(I=H*o,M=H*r,v=0;v<r;v++){y=M+v<<2,q=3*(R=e[I+(v>>2)]>>6-((3&v)<<1)&3);l[y]=A[q],l[y+1]=A[q+1],l[y+2]=A[q+2],l[y+3]=R<_?U[R]:255}if(4==u)for(H=0;H<t;H++)for(I=H*o,M=H*r,v=0;v<r;v++){y=M+v<<2,q=3*(R=e[I+(v>>1)]>>4-((1&v)<<2)&15);l[y]=A[q],l[y+1]=A[q+1],l[y+2]=A[q+2],l[y+3]=R<_?U[R]:255}if(8==u)for(v=0;v<i;v++){var R;y=v<<2,q=3*(R=e[v]);l[y]=A[q],l[y+1]=A[q+1],l[y+2]=A[q+2],l[y+3]=R<_?U[R]:255}}else if(4==c){if(8==u)for(v=0;v<i;v++){y=v<<2;var T=e[x=v<<1];l[y]=T,l[y+1]=T,l[y+2]=T,l[y+3]=e[x+1]}if(16==u)for(v=0;v<i;v++){var x;y=v<<2,T=e[x=v<<2];l[y]=T,l[y+1]=T,l[y+2]=T,l[y+3]=e[x+2]}}else if(0==c)for(b=n.tabs.tRNS?n.tabs.tRNS:-1,H=0;H<t;H++){var z=H*o,D=H*r;if(1==u)for(var N=0;N<r;N++){var P=(T=255*(e[z+(N>>>3)]>>>7-(7&N)&1))==255*b?0:255;s[D+N]=P<<24|T<<16|T<<8|T}else if(2==u)for(N=0;N<r;N++){P=(T=85*(e[z+(N>>>2)]>>>6-((3&N)<<1)&3))==85*b?0:255;s[D+N]=P<<24|T<<16|T<<8|T}else if(4==u)for(N=0;N<r;N++){P=(T=17*(e[z+(N>>>1)]>>>4-((1&N)<<2)&15))==17*b?0:255;s[D+N]=P<<24|T<<16|T<<8|T}else if(8==u)for(N=0;N<r;N++){P=(T=e[z+N])==b?0:255;s[D+N]=P<<24|T<<16|T<<8|T}else if(16==u)for(N=0;N<r;N++){T=e[z+(N<<1)],P=d(e,z+(N<<1))==b?0:255;s[D+N]=P<<24|T<<16|T<<8|T}}return l},a.decode=function(e){for(var r,t=new Uint8Array(e),n=8,i=a._bin,f=i.readUshort,o=i.readUint,l={tabs:{},frames:[]},s=new Uint8Array(t.length),c=0,u=0,d=[137,80,78,71,13,10,26,10],h=0;h<8;h++)if(t[h]!=d[h])throw"The input is not a PNG file!";for(;n<t.length;){var v=i.readUint(t,n);n+=4;var g=i.readASCII(t,n,4);if(n+=4,"IHDR"==g)a.decode._IHDR(t,n,l);else if("CgBI"==g)l.tabs[g]=t.slice(n,n+4);else if("IDAT"==g){for(h=0;h<v;h++)s[c+h]=t[n+h];c+=v}else if("acTL"==g)l.tabs[g]={num_frames:o(t,n),num_plays:o(t,n+4)},r=new Uint8Array(t.length);else if("fcTL"==g){var p;if(0!=u)(p=l.frames[l.frames.length-1]).data=a.decode._decompress(l,r.slice(0,u),p.rect.width,p.rect.height),u=0;var b={x:o(t,n+12),y:o(t,n+16),width:o(t,n+4),height:o(t,n+8)},w=f(t,n+22);w=f(t,n+20)/(0==w?100:w);var m={rect:b,delay:Math.round(1e3*w),dispose:t[n+24],blend:t[n+25]};l.frames.push(m)}else if("fdAT"==g){for(h=0;h<v-4;h++)r[u+h]=t[n+h+4];u+=v-4}else if("pHYs"==g)l.tabs[g]=[i.readUint(t,n),i.readUint(t,n+4),t[n+8]];else if("cHRM"==g){l.tabs[g]=[];for(h=0;h<8;h++)l.tabs[g].push(i.readUint(t,n+4*h))}else if("tEXt"==g||"zTXt"==g){null==l.tabs[g]&&(l.tabs[g]={});var y=i.nextZero(t,n),A=i.readASCII(t,n,y-n),U=n+v-y-1;if("tEXt"==g)M=i.readASCII(t,y+1,U);else{var _=a.decode._inflate(t.slice(y+2,y+2+U));M=i.readUTF8(_,0,_.length)}l.tabs[g][A]=M}else if("iTXt"==g){null==l.tabs[g]&&(l.tabs[g]={});y=0;var H=n;y=i.nextZero(t,H);A=i.readASCII(t,H,y-H);var I=t[H=y+1];t[H+1];H+=2,y=i.nextZero(t,H);i.readASCII(t,H,y-H);H=y+1,y=i.nextZero(t,H);var M;i.readUTF8(t,H,y-H),U=v-((H=y+1)-n);if(0==I)M=i.readUTF8(t,H,U);else{_=a.decode._inflate(t.slice(H,H+U));M=i.readUTF8(_,0,_.length)}l.tabs[g][A]=M}else if("PLTE"==g)l.tabs[g]=i.readBytes(t,n,v);else if("hIST"==g){var q=l.tabs.PLTE.length/3;l.tabs[g]=[];for(h=0;h<q;h++)l.tabs[g].push(f(t,n+2*h))}else if("tRNS"==g)3==l.ctype?l.tabs[g]=i.readBytes(t,n,v):0==l.ctype?l.tabs[g]=f(t,n):2==l.ctype&&(l.tabs[g]=[f(t,n),f(t,n+2),f(t,n+4)]);else if("gAMA"==g)l.tabs[g]=i.readUint(t,n)/1e5;else if("sRGB"==g)l.tabs[g]=t[n];else if("bKGD"==g)0==l.ctype||4==l.ctype?l.tabs[g]=[f(t,n)]:2==l.ctype||6==l.ctype?l.tabs[g]=[f(t,n),f(t,n+2),f(t,n+4)]:3==l.ctype&&(l.tabs[g]=t[n]);else if("IEND"==g)break;n+=v;i.readUint(t,n);n+=4}0!=u&&((p=l.frames[l.frames.length-1]).data=a.decode._decompress(l,r.slice(0,u),p.rect.width,p.rect.height));return l.data=a.decode._decompress(l,s,l.width,l.height),delete l.compress,delete l.interlace,delete l.filter,l},a.decode._decompress=function(e,r,t,n){Date.now();var i=a.decode._getBPP(e),f=Math.ceil(t*i/8),o=new Uint8Array((f+1+e.interlace)*n);r=e.tabs.CgBI?a.inflateRaw(r,o):a.decode._inflate(r,o);Date.now();return 0==e.interlace?r=a.decode._filterZero(r,e,0,t,n):1==e.interlace&&(r=a.decode._readInterlace(r,e)),r},a.decode._inflate=function(e,r){return a.inflateRaw(new Uint8Array(e.buffer,2,e.length-6),r)},a.inflateRaw=((n={}).H={},n.H.N=function(e,r){var t,a,i=Uint8Array,f=0,o=0,l=0,s=0,c=0,u=0,d=0,h=0,v=0;if(3==e[0]&&0==e[1])return r||new i(0);var g=n.H,p=g.b,b=g.e,w=g.R,m=g.n,y=g.A,A=g.Z,U=g.m,_=null==r;for(_&&(r=new i(e.length>>>2<<5));0==f;)if(f=p(e,v,1),o=p(e,v+1,2),v+=3,0!=o){if(_&&(r=n.H.W(r,h+(1<<17))),1==o&&(t=U.J,a=U.h,u=511,d=31),2==o){l=b(e,v,5)+257,s=b(e,v+5,5)+1,c=b(e,v+10,4)+4,v+=14;for(var H=1,I=0;I<38;I+=2)U.Q[I]=0,U.Q[I+1]=0;for(I=0;I<c;I++){var M=b(e,v+3*I,3);U.Q[1+(U.X[I]<<1)]=M,M>H&&(H=M)}v+=3*c,m(U.Q,H),y(U.Q,H,U.u),t=U.w,a=U.d,v=w(U.u,(1<<H)-1,l+s,e,v,U.v);var q=g.V(U.v,0,l,U.C);u=(1<<q)-1;var R=g.V(U.v,l,s,U.D);d=(1<<R)-1,m(U.C,q),y(U.C,q,t),m(U.D,R),y(U.D,R,a)}for(;;){var T=t[A(e,v)&u];v+=15&T;var x=T>>>4;if(x>>>8==0)r[h++]=x;else{if(256==x)break;var z=h+x-254;if(x>264){var D=U.q[x-257];z=h+(D>>>3)+b(e,v,7&D),v+=7&D}var N=a[A(e,v)&d];v+=15&N;var P=N>>>4,B=U.c[P],C=(B>>>4)+p(e,v,15&B);for(v+=15&B;h<z;)r[h]=r[h++-C],r[h]=r[h++-C],r[h]=r[h++-C],r[h]=r[h++-C];h=z}}}else{0!=(7&v)&&(v+=8-(7&v));var S=4+(v>>>3),L=e[S-4]|e[S-3]<<8;_&&(r=n.H.W(r,h+L)),r.set(new i(e.buffer,e.byteOffset+S,L),h),v=S+L<<3,h+=L}return r.length==h?r:r.slice(0,h)},n.H.W=function(e,r){var t=e.length;if(r<=t)return e;var n=new Uint8Array(t<<1);return n.set(e,0),n},n.H.R=function(e,r,t,a,i,f){for(var o=n.H.e,l=n.H.Z,s=0;s<t;){var c=e[l(a,i)&r];i+=15&c;var u=c>>>4;if(u<=15)f[s]=u,s++;else{var d=0,h=0;16==u?(h=3+o(a,i,2),i+=2,d=f[s-1]):17==u?(h=3+o(a,i,3),i+=3):18==u&&(h=11+o(a,i,7),i+=7);for(var v=s+h;s<v;)f[s]=d,s++}}return i},n.H.V=function(e,r,t,n){for(var a=0,i=0,f=n.length>>>1;i<t;){var o=e[i+r];n[i<<1]=0,n[1+(i<<1)]=o,o>a&&(a=o),i++}for(;i<f;)n[i<<1]=0,n[1+(i<<1)]=0,i++;return a},n.H.n=function(e,r){for(var t,a,i,f,o=n.H.m,l=e.length,s=o.j,c=0;c<=r;c++)s[c]=0;for(c=1;c<l;c+=2)s[e[c]]++;var u=o.K;for(t=0,s[0]=0,a=1;a<=r;a++)t=t+s[a-1]<<1,u[a]=t;for(i=0;i<l;i+=2)0!=(f=e[i+1])&&(e[i]=u[f],u[f]++)},n.H.A=function(e,r,t){for(var a=e.length,i=n.H.m.r,f=0;f<a;f+=2)if(0!=e[f+1])for(var o=f>>1,l=e[f+1],s=o<<4|l,c=r-l,u=e[f]<<c,d=u+(1<<c);u!=d;)t[i[u]>>>15-r]=s,u++},n.H.l=function(e,r){for(var t=n.H.m.r,a=15-r,i=0;i<e.length;i+=2){var f=e[i]<<r-e[i+1];e[i]=t[f]>>>a}},n.H.M=function(e,r,t){t<<=7&r;var n=r>>>3;e[n]|=t,e[n+1]|=t>>>8},n.H.I=function(e,r,t){t<<=7&r;var n=r>>>3;e[n]|=t,e[n+1]|=t>>>8,e[n+2]|=t>>>16},n.H.e=function(e,r,t){return(e[r>>>3]|e[1+(r>>>3)]<<8)>>>(7&r)&(1<<t)-1},n.H.b=function(e,r,t){return(e[r>>>3]|e[1+(r>>>3)]<<8|e[2+(r>>>3)]<<16)>>>(7&r)&(1<<t)-1},n.H.Z=function(e,r){return(e[r>>>3]|e[1+(r>>>3)]<<8|e[2+(r>>>3)]<<16)>>>(7&r)},n.H.i=function(e,r){return(e[r>>>3]|e[1+(r>>>3)]<<8|e[2+(r>>>3)]<<16|e[3+(r>>>3)]<<24)>>>(7&r)},n.H.m=(r=Uint16Array,t=Uint32Array,{K:new r(16),j:new r(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new r(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new t(32),J:new r(512),_:[],h:new r(32),$:[],w:new r(32768),C:[],v:[],d:new r(32768),D:[],u:new r(512),Q:[],r:new r(32768),s:new t(286),Y:new t(30),a:new t(19),t:new t(15e3),k:new r(65536),g:new r(32768)}),function(){for(var e=n.H.m,r=0;r<32768;r++){var t=r;t=(4278255360&(t=(4042322160&(t=(3435973836&(t=(2863311530&t)>>>1|(1431655765&t)<<1))>>>2|(858993459&t)<<2))>>>4|(252645135&t)<<4))>>>8|(16711935&t)<<8,e.r[r]=(t>>>16|t<<16)>>>17}function a(e,r,t){for(;0!=r--;)e.push(0,t)}for(r=0;r<32;r++)e.q[r]=e.S[r]<<3|e.T[r],e.c[r]=e.p[r]<<4|e.z[r];a(e._,144,8),a(e._,112,9),a(e._,24,7),a(e._,8,8),n.H.n(e._,9),n.H.A(e._,9,e.J),n.H.l(e._,9),a(e.$,32,5),n.H.n(e.$,5),n.H.A(e.$,5,e.h),n.H.l(e.$,5),a(e.Q,19,0),a(e.C,286,0),a(e.D,30,0),a(e.v,320,0)}(),n.H.N),a.decode._readInterlace=function(e,r){for(var t=r.width,n=r.height,i=a.decode._getBPP(r),f=i>>3,o=Math.ceil(t*i/8),l=new Uint8Array(n*o),s=0,c=[0,0,4,0,2,0,1],u=[0,4,0,2,0,1,0],d=[8,8,8,4,4,2,2],h=[8,8,4,4,2,2,1],v=0;v<7;){for(var g=d[v],p=h[v],b=0,w=0,m=c[v];m<n;)m+=g,w++;for(var y=u[v];y<t;)y+=p,b++;var A=Math.ceil(b*i/8);a.decode._filterZero(e,r,s,b,w);for(var U=0,_=c[v];_<n;){for(var H=u[v],I=s+U*A<<3;H<t;){var M;if(1==i)M=(M=e[I>>3])>>7-(7&I)&1,l[_*o+(H>>3)]|=M<<7-((7&H)<<0);if(2==i)M=(M=e[I>>3])>>6-(7&I)&3,l[_*o+(H>>2)]|=M<<6-((3&H)<<1);if(4==i)M=(M=e[I>>3])>>4-(7&I)&15,l[_*o+(H>>1)]|=M<<4-((1&H)<<2);if(i>=8)for(var q=_*o+H*f,R=0;R<f;R++)l[q+R]=e[(I>>3)+R];I+=i,H+=p}U++,_+=g}b*w!=0&&(s+=w*(1+A)),v+=1}return l},a.decode._getBPP=function(e){return[1,null,3,1,2,null,4][e.ctype]*e.depth},a.decode._filterZero=function(e,r,t,n,i){var f=a.decode._getBPP(r),o=Math.ceil(n*f/8),l=a.decode._paeth;f=Math.ceil(f/8);var s,c,u=e[t],d=0;if(u>1&&(e[t]=[0,0,1][u-2]),3==u)for(d=f;d<o;d++)e[d+1]=e[d+1]+(e[d+1-f]>>>1)&255;for(var h=0;h<i;h++)if(d=0,0==(u=e[(c=(s=t+h*o)+h+1)-1]))for(;d<o;d++)e[s+d]=e[c+d];else if(1==u){for(;d<f;d++)e[s+d]=e[c+d];for(;d<o;d++)e[s+d]=e[c+d]+e[s+d-f]}else if(2==u)for(;d<o;d++)e[s+d]=e[c+d]+e[s+d-o];else if(3==u){for(;d<f;d++)e[s+d]=e[c+d]+(e[s+d-o]>>>1);for(;d<o;d++)e[s+d]=e[c+d]+(e[s+d-o]+e[s+d-f]>>>1)}else{for(;d<f;d++)e[s+d]=e[c+d]+l(0,e[s+d-o],0);for(;d<o;d++)e[s+d]=e[c+d]+l(e[s+d-f],e[s+d-o],e[s+d-f-o])}return e},a.decode._paeth=function(e,r,t){var n=e+r-t,a=n-e,i=n-r,f=n-t;return a*a<=i*i&&a*a<=f*f?e:i*i<=f*f?r:t},a.decode._IHDR=function(e,r,t){var n=a._bin;t.width=n.readUint(e,r),r+=4,t.height=n.readUint(e,r),r+=4,t.depth=e[r],r++,t.ctype=e[r],r++,t.compress=e[r],r++,t.filter=e[r],r++,t.interlace=e[r],r++},a._bin={nextZero:function(e,r){for(;0!=e[r];)r++;return r},readUshort:function(e,r){return e[r]<<8|e[r+1]},writeUshort:function(e,r,t){e[r]=t>>8&255,e[r+1]=255&t},readUint:function(e,r){return 16777216*e[r]+(e[r+1]<<16|e[r+2]<<8|e[r+3])},writeUint:function(e,r,t){e[r]=t>>24&255,e[r+1]=t>>16&255,e[r+2]=t>>8&255,e[r+3]=255&t},readASCII:function(e,r,t){for(var n="",a=0;a<t;a++)n+=String.fromCharCode(e[r+a]);return n},writeASCII:function(e,r,t){for(var n=0;n<t.length;n++)e[r+n]=t.charCodeAt(n)},readBytes:function(e,r,t){for(var n=[],a=0;a<t;a++)n.push(e[r+a]);return n},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,r,t){for(var n,i="",f=0;f<t;f++)i+="%"+a._bin.pad(e[r+f].toString(16));try{n=decodeURIComponent(i)}catch(n){return a._bin.readASCII(e,r,t)}return n}},a._copyTile=function(e,r,t,n,a,i,f,o,l){for(var s=Math.min(r,a),c=Math.min(t,i),u=0,d=0,h=0;h<c;h++)for(var v=0;v<s;v++)if(f>=0&&o>=0?(u=h*r+v<<2,d=(o+h)*a+f+v<<2):(u=(-o+h)*r-f+v<<2,d=h*a+v<<2),0==l)n[d]=e[u],n[d+1]=e[u+1],n[d+2]=e[u+2],n[d+3]=e[u+3];else if(1==l){var g=e[u+3]*(1/255),p=e[u]*g,b=e[u+1]*g,w=e[u+2]*g,m=n[d+3]*(1/255),y=n[d]*m,A=n[d+1]*m,U=n[d+2]*m,_=1-g,H=g+m*_,I=0==H?0:1/H;n[d+3]=255*H,n[d+0]=(p+y*_)*I,n[d+1]=(b+A*_)*I,n[d+2]=(w+U*_)*I}else if(2==l){g=e[u+3],p=e[u],b=e[u+1],w=e[u+2],m=n[d+3],y=n[d],A=n[d+1],U=n[d+2];g==m&&p==y&&b==A&&w==U?(n[d]=0,n[d+1]=0,n[d+2]=0,n[d+3]=0):(n[d]=p,n[d+1]=b,n[d+2]=w,n[d+3]=g)}else if(3==l){g=e[u+3],p=e[u],b=e[u+1],w=e[u+2],m=n[d+3],y=n[d],A=n[d+1],U=n[d+2];if(g==m&&p==y&&b==A&&w==U)continue;if(g<220&&m>20)return!1}return!0},a.encode=function(e,r,t,n,i,f,o){null==n&&(n=0),null==o&&(o=!1);var l=a.encode.compress(e,r,t,n,[!1,!1,!1,0,o,!1]);return a.encode.compressPNG(l,-1),a.encode._main(l,r,t,i,f)},a.encodeLL=function(e,r,t,n,i,f,o,l){for(var s={ctype:0+(1==n?0:2)+(0==i?0:4),depth:f,frames:[]},c=(Date.now(),(n+i)*f),u=c*r,d=0;d<e.length;d++)s.frames.push({rect:{x:0,y:0,width:r,height:t},img:new Uint8Array(e[d]),blend:0,dispose:1,bpp:Math.ceil(c/8),bpl:Math.ceil(u/8)});return a.encode.compressPNG(s,0,!0),a.encode._main(s,r,t,o,l)},a.encode._main=function(e,r,t,n,i){null==i&&(i={});var f=a.crc.crc,o=a._bin.writeUint,l=a._bin.writeUshort,s=a._bin.writeASCII,c=8,u=e.frames.length>1,d=!1,h=33+(u?20:0);if(null!=i.sRGB&&(h+=13),null!=i.pHYs&&(h+=21),3==e.ctype){for(var v=e.plte.length,g=0;g<v;g++)e.plte[g]>>>24!=255&&(d=!0);h+=8+3*v+4+(d?8+1*v+4:0)}for(var p=0;p<e.frames.length;p++){u&&(h+=38),h+=(I=e.frames[p]).cimg.length+12,0!=p&&(h+=4)}h+=12;var b=new Uint8Array(h),w=[137,80,78,71,13,10,26,10];for(g=0;g<8;g++)b[g]=w[g];if(o(b,c,13),s(b,c+=4,"IHDR"),o(b,c+=4,r),o(b,c+=4,t),b[c+=4]=e.depth,b[++c]=e.ctype,b[++c]=0,b[++c]=0,b[++c]=0,o(b,++c,f(b,c-17,17)),c+=4,null!=i.sRGB&&(o(b,c,1),s(b,c+=4,"sRGB"),b[c+=4]=i.sRGB,o(b,++c,f(b,c-5,5)),c+=4),null!=i.pHYs&&(o(b,c,9),s(b,c+=4,"pHYs"),o(b,c+=4,i.pHYs[0]),o(b,c+=4,i.pHYs[1]),b[c+=4]=i.pHYs[2],o(b,++c,f(b,c-13,13)),c+=4),u&&(o(b,c,8),s(b,c+=4,"acTL"),o(b,c+=4,e.frames.length),o(b,c+=4,null!=i.loop?i.loop:0),o(b,c+=4,f(b,c-12,12)),c+=4),3==e.ctype){o(b,c,3*(v=e.plte.length)),s(b,c+=4,"PLTE"),c+=4;for(g=0;g<v;g++){var m=3*g,y=e.plte[g],A=255&y,U=y>>>8&255,_=y>>>16&255;b[c+m+0]=A,b[c+m+1]=U,b[c+m+2]=_}if(o(b,c+=3*v,f(b,c-3*v-4,3*v+4)),c+=4,d){o(b,c,v),s(b,c+=4,"tRNS"),c+=4;for(g=0;g<v;g++)b[c+g]=e.plte[g]>>>24&255;o(b,c+=v,f(b,c-v-4,v+4)),c+=4}}var H=0;for(p=0;p<e.frames.length;p++){var I=e.frames[p];u&&(o(b,c,26),s(b,c+=4,"fcTL"),o(b,c+=4,H++),o(b,c+=4,I.rect.width),o(b,c+=4,I.rect.height),o(b,c+=4,I.rect.x),o(b,c+=4,I.rect.y),l(b,c+=4,n[p]),l(b,c+=2,1e3),b[c+=2]=I.dispose,b[++c]=I.blend,o(b,++c,f(b,c-30,30)),c+=4);var M=I.cimg;o(b,c,(v=M.length)+(0==p?0:4));var q=c+=4;s(b,c,0==p?"IDAT":"fdAT"),c+=4,0!=p&&(o(b,c,H++),c+=4),b.set(M,c),o(b,c+=v,f(b,q,c-q)),c+=4}return o(b,c,0),s(b,c+=4,"IEND"),o(b,c+=4,f(b,c-4,4)),c+=4,b.buffer},a.encode.compressPNG=function(e,r,t){for(var n=0;n<e.frames.length;n++){var i=e.frames[n],f=(i.rect.width,i.rect.height),o=new Uint8Array(f*i.bpl+f);i.cimg=a.encode._filterZero(i.img,f,i.bpp,i.bpl,o,r,t)}},a.encode.compress=function(e,r,t,n,i){for(var f=i[0],o=i[1],l=i[2],s=i[3],c=i[4],u=i[5],d=6,h=8,v=255,g=0;g<e.length;g++)for(var p=new Uint8Array(e[g]),b=p.length,w=0;w<b;w+=4)v&=p[w+3];var m=255!=v,y=a.encode.framize(e,r,t,f,o,l),A={},U=[],_=[];if(0!=n){var H=[];for(w=0;w<y.length;w++)H.push(y[w].img.buffer);var I=a.encode.concatRGBA(H),M=a.quantize(I,n);for(w=0;w<M.plte.length;w++)U.push(M.plte[w].est.rgba);var q=0;for(w=0;w<y.length;w++){var R=(z=y[w]).img.length,T=new Uint8Array(M.inds.buffer,q>>2,R>>2);_.push(T);var x=new Uint8Array(M.abuf,q,R);u&&a.encode.dither(z.img,z.rect.width,z.rect.height,U,x,T),z.img.set(x),q+=R}}else for(g=0;g<y.length;g++){var z=y[g],D=new Uint32Array(z.img.buffer),N=z.rect.width;b=D.length,T=new Uint8Array(b);_.push(T);for(w=0;w<b;w++){var P=D[w];if(0!=w&&P==D[w-1])T[w]=T[w-1];else if(w>N&&P==D[w-N])T[w]=T[w-N];else{var B=A[P];if(null==B&&(A[P]=B=U.length,U.push(P),U.length>=300))break;T[w]=B}}}var C=U.length;C<=256&&0==c&&(h=C<=2?1:C<=4?2:C<=16?4:8,h=Math.max(h,s));for(g=0;g<y.length;g++){(z=y[g]).rect.x,z.rect.y,N=z.rect.width;var S=z.rect.height,L=z.img,G=(new Uint32Array(L.buffer),4*N),Z=4;if(C<=256&&0==c){G=Math.ceil(h*N/8);for(var k=new Uint8Array(G*S),E=_[g],F=0;F<S;F++){w=F*G;var Y=F*N;if(8==h)for(var Q=0;Q<N;Q++)k[w+Q]=E[Y+Q];else if(4==h)for(Q=0;Q<N;Q++)k[w+(Q>>1)]|=E[Y+Q]<<4-4*(1&Q);else if(2==h)for(Q=0;Q<N;Q++)k[w+(Q>>2)]|=E[Y+Q]<<6-2*(3&Q);else if(1==h)for(Q=0;Q<N;Q++)k[w+(Q>>3)]|=E[Y+Q]<<7-1*(7&Q)}L=k,d=3,Z=1}else if(0==m&&1==y.length){k=new Uint8Array(N*S*3);var X=N*S;for(w=0;w<X;w++){var K=3*w,V=4*w;k[K]=L[V],k[K+1]=L[V+1],k[K+2]=L[V+2]}L=k,d=2,Z=3,G=3*N}z.img=L,z.bpl=G,z.bpp=Z}return{ctype:d,depth:h,plte:U,frames:y}},a.encode.framize=function(e,r,t,n,i,f){for(var o=[],l=0;l<e.length;l++){var s,c=new Uint8Array(e[l]),u=new Uint32Array(c.buffer),d=0,h=0,v=r,g=t,p=n?1:0;if(0!=l){for(var b=f||n||1==l||0!=o[l-2].dispose?1:2,w=0,m=1e9,y=0;y<b;y++){for(var A=new Uint8Array(e[l-1-y]),U=new Uint32Array(e[l-1-y]),_=r,H=t,I=-1,M=-1,q=0;q<t;q++)for(var R=0;R<r;R++){u[B=q*r+R]!=U[B]&&(R<_&&(_=R),R>I&&(I=R),q<H&&(H=q),q>M&&(M=q))}-1==I&&(_=H=I=M=0),i&&(1==(1&_)&&_--,1==(1&H)&&H--);var T=(I-_+1)*(M-H+1);T<m&&(m=T,w=y,d=_,h=H,v=I-_+1,g=M-H+1)}A=new Uint8Array(e[l-1-w]);1==w&&(o[l-1].dispose=2),s=new Uint8Array(v*g*4),a._copyTile(A,r,t,s,v,g,-d,-h,0),1==(p=a._copyTile(c,r,t,s,v,g,-d,-h,3)?1:0)?a.encode._prepareDiff(c,r,t,s,{x:d,y:h,width:v,height:g}):a._copyTile(c,r,t,s,v,g,-d,-h,0)}else s=c.slice(0);o.push({rect:{x:d,y:h,width:v,height:g},img:s,blend:p,dispose:0})}if(n)for(l=0;l<o.length;l++){if(1!=(C=o[l]).blend){var x=C.rect,z=o[l-1].rect,D=Math.min(x.x,z.x),N=Math.min(x.y,z.y),P={x:D,y:N,width:Math.max(x.x+x.width,z.x+z.width)-D,height:Math.max(x.y+x.height,z.y+z.height)-N};o[l-1].dispose=1,l-1!=0&&a.encode._updateFrame(e,r,t,o,l-1,P,i),a.encode._updateFrame(e,r,t,o,l,P,i)}}if(1!=e.length)for(var B=0;B<o.length;B++){var C;(C=o[B]).rect.width*C.rect.height}return o},a.encode._updateFrame=function(e,r,t,n,i,f,o){for(var l=Uint8Array,s=Uint32Array,c=new l(e[i-1]),u=new s(e[i-1]),d=i+1<e.length?new l(e[i+1]):null,h=new l(e[i]),v=new s(h.buffer),g=r,p=t,b=-1,w=-1,m=0;m<f.height;m++)for(var y=0;y<f.width;y++){var A=f.x+y,U=f.y+m,_=U*r+A,H=v[_];0==H||0==n[i-1].dispose&&u[_]==H&&(null==d||0!=d[4*_+3])||(A<g&&(g=A),A>b&&(b=A),U<p&&(p=U),U>w&&(w=U))}-1==b&&(g=p=b=w=0),o&&(1==(1&g)&&g--,1==(1&p)&&p--),f={x:g,y:p,width:b-g+1,height:w-p+1};var I=n[i];I.rect=f,I.blend=1,I.img=new Uint8Array(f.width*f.height*4),0==n[i-1].dispose?(a._copyTile(c,r,t,I.img,f.width,f.height,-f.x,-f.y,0),a.encode._prepareDiff(h,r,t,I.img,f)):a._copyTile(h,r,t,I.img,f.width,f.height,-f.x,-f.y,0)},a.encode._prepareDiff=function(e,r,t,n,i){a._copyTile(e,r,t,n,i.width,i.height,-i.x,-i.y,2)},a.encode._filterZero=function(r,t,n,i,f,o,l){var s,c=[],u=[0,1,2,3,4];-1!=o?u=[o]:(t*i>5e5||1==n)&&(u=[0]),l&&(s={level:0});for(var d=f.length>1e7&&null!=UZIP?UZIP:e,h=(Date.now(),0);h<u.length;h++){for(var v=0;v<t;v++)a.encode._filterLine(f,r,v,i,n,u[h]);c.push(d.deflate(f,s))}var g,p=1e9;for(h=0;h<c.length;h++)c[h].length<p&&(g=h,p=c[h].length);return c[g]},a.encode._filterLine=function(e,r,t,n,i,f){var o=t*n,l=o+t,s=a.decode._paeth;if(e[l]=f,l++,0==f)if(n<500)for(var c=0;c<n;c++)e[l+c]=r[o+c];else e.set(new Uint8Array(r.buffer,o,n),l);else if(1==f){for(c=0;c<i;c++)e[l+c]=r[o+c];for(c=i;c<n;c++)e[l+c]=r[o+c]-r[o+c-i]+256&255}else if(0==t){for(c=0;c<i;c++)e[l+c]=r[o+c];if(2==f)for(c=i;c<n;c++)e[l+c]=r[o+c];if(3==f)for(c=i;c<n;c++)e[l+c]=r[o+c]-(r[o+c-i]>>1)+256&255;if(4==f)for(c=i;c<n;c++)e[l+c]=r[o+c]-s(r[o+c-i],0,0)+256&255}else{if(2==f)for(c=0;c<n;c++)e[l+c]=r[o+c]+256-r[o+c-n]&255;if(3==f){for(c=0;c<i;c++)e[l+c]=r[o+c]+256-(r[o+c-n]>>1)&255;for(c=i;c<n;c++)e[l+c]=r[o+c]+256-(r[o+c-n]+r[o+c-i]>>1)&255}if(4==f){for(c=0;c<i;c++)e[l+c]=r[o+c]+256-s(0,r[o+c-n],0)&255;for(c=i;c<n;c++)e[l+c]=r[o+c]+256-s(r[o+c-i],r[o+c-n],r[o+c-i-n])&255}}},a.crc={table:function(){for(var e=new Uint32Array(256),r=0;r<256;r++){for(var t=r,n=0;n<8;n++)1&t?t=3988292384^t>>>1:t>>>=1;e[r]=t}return e}(),update:function(e,r,t,n){for(var i=0;i<n;i++)e=a.crc.table[255&(e^r[t+i])]^e>>>8;return e},crc:function(e,r,t){return 4294967295^a.crc.update(4294967295,e,r,t)}},a.quantize=function(e,r){var t,n=new Uint8Array(e),i=n.slice(0),f=new Uint32Array(i.buffer),o=a.quantize.getKDtree(i,r),l=o[0],s=o[1],c=a.quantize.planeDst,u=n.length,d=new Uint8Array(u>>2);if(n.length<2e7)for(var h=0;h<u;h+=4){var v=n[h]*(1/255),g=n[h+1]*(1/255),p=n[h+2]*(1/255),b=n[h+3]*(1/255);t=a.quantize.getNearest(l,v,g,p,b),d[h>>2]=t.ind,f[h>>2]=t.est.rgba}else for(h=0;h<u;h+=4){v=n[h]*(1/255),g=n[h+1]*(1/255),p=n[h+2]*(1/255),b=n[h+3]*(1/255);for(t=l;t.left;)t=c(t.est,v,g,p,b)<=0?t.left:t.right;d[h>>2]=t.ind,f[h>>2]=t.est.rgba}return{abuf:i.buffer,inds:d,plte:s}},a.quantize.getKDtree=function(e,r,t){null==t&&(t=1e-4);var n=new Uint32Array(e.buffer),i={i0:0,i1:e.length,bst:null,est:null,tdst:0,left:null,right:null};i.bst=a.quantize.stats(e,i.i0,i.i1),i.est=a.quantize.estats(i.bst);for(var f=[i];f.length<r;){for(var o=0,l=0,s=0;s<f.length;s++)f[s].est.L>o&&(o=f[s].est.L,l=s);if(o<t)break;var c=f[l],u=a.quantize.splitPixels(e,n,c.i0,c.i1,c.est.e,c.est.eMq255);if(c.i0>=u||c.i1<=u)c.est.L=0;else{var d={i0:c.i0,i1:u,bst:null,est:null,tdst:0,left:null,right:null};d.bst=a.quantize.stats(e,d.i0,d.i1),d.est=a.quantize.estats(d.bst);var h={i0:u,i1:c.i1,bst:null,est:null,tdst:0,left:null,right:null};h.bst={R:[],m:[],N:c.bst.N-d.bst.N};for(s=0;s<16;s++)h.bst.R[s]=c.bst.R[s]-d.bst.R[s];for(s=0;s<4;s++)h.bst.m[s]=c.bst.m[s]-d.bst.m[s];h.est=a.quantize.estats(h.bst),c.left=d,c.right=h,f[l]=d,f.push(h)}}f.sort((function(e,r){return r.bst.N-e.bst.N}));for(s=0;s<f.length;s++)f[s].ind=s;return[i,f]},a.quantize.getNearest=function(e,r,t,n,i){if(null==e.left)return e.tdst=a.quantize.dist(e.est.q,r,t,n,i),e;var f=a.quantize.planeDst(e.est,r,t,n,i),o=e.left,l=e.right;f>0&&(o=e.right,l=e.left);var s=a.quantize.getNearest(o,r,t,n,i);if(s.tdst<=f*f)return s;var c=a.quantize.getNearest(l,r,t,n,i);return c.tdst<s.tdst?c:s},a.quantize.planeDst=function(e,r,t,n,a){var i=e.e;return i[0]*r+i[1]*t+i[2]*n+i[3]*a-e.eMq},a.quantize.dist=function(e,r,t,n,a){var i=r-e[0],f=t-e[1],o=n-e[2],l=a-e[3];return i*i+f*f+o*o+l*l},a.quantize.splitPixels=function(e,r,t,n,i,f){var o=a.quantize.vecDot;n-=4;for(;t<n;){for(;o(e,t,i)<=f;)t+=4;for(;o(e,n,i)>f;)n-=4;if(t>=n)break;var l=r[t>>2];r[t>>2]=r[n>>2],r[n>>2]=l,t+=4,n-=4}for(;o(e,t,i)>f;)t-=4;return t+4},a.quantize.vecDot=function(e,r,t){return e[r]*t[0]+e[r+1]*t[1]+e[r+2]*t[2]+e[r+3]*t[3]},a.quantize.stats=function(e,r,t){for(var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],a=[0,0,0,0],i=t-r>>2,f=r;f<t;f+=4){var o=e[f]*(1/255),l=e[f+1]*(1/255),s=e[f+2]*(1/255),c=e[f+3]*(1/255);a[0]+=o,a[1]+=l,a[2]+=s,a[3]+=c,n[0]+=o*o,n[1]+=o*l,n[2]+=o*s,n[3]+=o*c,n[5]+=l*l,n[6]+=l*s,n[7]+=l*c,n[10]+=s*s,n[11]+=s*c,n[15]+=c*c}return n[4]=n[1],n[8]=n[2],n[9]=n[6],n[12]=n[3],n[13]=n[7],n[14]=n[11],{R:n,m:a,N:i}},a.quantize.estats=function(e){var r=e.R,t=e.m,n=e.N,i=t[0],f=t[1],o=t[2],l=t[3],s=0==n?0:1/n,c=[r[0]-i*i*s,r[1]-i*f*s,r[2]-i*o*s,r[3]-i*l*s,r[4]-f*i*s,r[5]-f*f*s,r[6]-f*o*s,r[7]-f*l*s,r[8]-o*i*s,r[9]-o*f*s,r[10]-o*o*s,r[11]-o*l*s,r[12]-l*i*s,r[13]-l*f*s,r[14]-l*o*s,r[15]-l*l*s],u=c,d=a.M4,h=[Math.random(),Math.random(),Math.random(),Math.random()],v=0,g=0;if(0!=n)for(var p=0;p<16&&(h=d.multVec(u,h),g=Math.sqrt(d.dot(h,h)),h=d.sml(1/g,h),!(0!=p&&Math.abs(g-v)<1e-9));p++)v=g;var b=[i*s,f*s,o*s,l*s];return{Cov:c,q:b,e:h,L:v,eMq255:d.dot(d.sml(255,b),h),eMq:d.dot(h,b),rgba:(Math.round(255*b[3])<<24|Math.round(255*b[2])<<16|Math.round(255*b[1])<<8|Math.round(255*b[0])<<0)>>>0}},a.M4={multVec:function(e,r){return[e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3],e[4]*r[0]+e[5]*r[1]+e[6]*r[2]+e[7]*r[3],e[8]*r[0]+e[9]*r[1]+e[10]*r[2]+e[11]*r[3],e[12]*r[0]+e[13]*r[1]+e[14]*r[2]+e[15]*r[3]]},dot:function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]},sml:function(e,r){return[e*r[0],e*r[1],e*r[2],e*r[3]]}},a.encode.concatRGBA=function(e){for(var r=0,t=0;t<e.length;t++)r+=e[t].byteLength;var n=new Uint8Array(r),a=0;for(t=0;t<e.length;t++){for(var i=new Uint8Array(e[t]),f=i.length,o=0;o<f;o+=4){var l=i[o],s=i[o+1],c=i[o+2],u=i[o+3];0==u&&(l=s=c=0),n[a+o]=l,n[a+o+1]=s,n[a+o+2]=c,n[a+o+3]=u}a+=f}return n.buffer},a.encode.dither=function(e,r,t,n,a,i){function f(e,r,t,n){r[t]+=e[0]*n>>4,r[t+1]+=e[1]*n>>4,r[t+2]+=e[2]*n>>4,r[t+3]+=e[3]*n>>4}function o(e){return Math.max(0,Math.min(255,e))}function l(e,r){var t=e[0]-r[0],n=e[1]-r[1],a=e[2]-r[2],i=e[3]-r[3];return t*t+n*n+a*a+i*i}for(var s=n.length,c=[],u=[],d=0;d<s;d++){var h=n[d];c.push([h>>>0&255,h>>>8&255,h>>>16&255,h>>>24&255])}for(d=0;d<s;d++){for(var v=4294967295,g=0,p=0;p<s;p++){var b=l(c[d],c[p]);p!=d&&b<v&&(v=b,g=p)}var w=Math.sqrt(v)/2;u[d]=~~(w*w)}for(var m=new Uint32Array(a.buffer),y=new Int16Array(r*t*4),A=0;A<t;A++)for(var U=0;U<r;U++){var _=[o(e[d=4*(A*r+U)]+y[d]),o(e[d+1]+y[d+1]),o(e[d+2]+y[d+2]),o(e[d+3]+y[d+3])],H=(g=0,16777215);for(p=0;p<s;p++){var I=l(_,c[p]);I<H&&(H=I,g=p)}var M=c[g],q=[_[0]-M[0],_[1]-M[1],_[2]-M[2],_[3]-M[3]];U!=r-1&&f(q,y,d+4,7),A!=t-1&&(0!=U&&f(q,y,d+4*r-4,3),f(q,y,d+4*r,5),U!=r-1&&f(q,y,d+4*r+4,1)),i[d>>2]=g,m[d>>2]=n[g]}};export default a;