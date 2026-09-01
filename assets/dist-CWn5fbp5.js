import{n as e}from"./index-B07HlGhm.js";import{$a as t,$o as n,$s as r,Ac as i,Ao as a,B as o,Ba as s,Bc as c,Bl as l,Bo as u,Bs as d,C as f,Cc as p,Co as m,Cs as h,Dc as g,Do as _,Ds as v,Ec as y,El as b,Eo as x,Es as S,F as C,Fa as w,Fc as ee,Fl as te,Fo as ne,G as re,Gc as T,Go as ie,Gs as ae,H as oe,Ha as se,Hc as ce,Ho as le,Hs as ue,I as de,Ic as fe,Il as pe,Is as me,J as he,Ja as ge,Jc as _e,Js as ve,K as ye,Ka as be,Kc as xe,Ko as Se,L as Ce,Lc as we,Ll as E,Lo as Te,Ls as Ee,M as De,Ma as Oe,Mc as ke,Mo as Ae,Ms as je,Nc as Me,Nl as Ne,No as Pe,Ns as Fe,Oc as Ie,Ol as Le,Oo as Re,Os as ze,P as Be,Pa as Ve,Pc as He,Pl as D,Po as Ue,Ps as We,Pt as Ge,Qs as Ke,R as qe,Rc as Je,Rl as Ye,Ro as Xe,Rs as Ze,S as Qe,Sc as $e,Sl as et,So as tt,Ss as nt,T as rt,Tc as it,Tl as at,To as ot,Ts as st,U as ct,Ua as lt,Uc as ut,Ul as dt,Uo as ft,Ut as pt,V as mt,Va as ht,Vc as gt,Vo as _t,Vs as vt,W as yt,Wc as bt,Wl as xt,Wo as St,Ws as Ct,Xa as wt,Xc as Tt,Xr as Et,Xs as Dt,Ya as Ot,Yc as kt,Zc as At,Zo as jt,Zs as Mt,_c as Nt,_o as Pt,_s as Ft,a as It,aa as Lt,ac as Rt,ai as zt,al as Bt,ao as Vt,at as Ht,b as Ut,bc as Wt,bl as Gt,bo as Kt,bs as qt,bt as Jt,ca as Yt,cc as Xt,cl as Zt,co as Qt,cs as $t,ct as en,dc as tn,dl as nn,do as rn,ds as an,ec as on,ei as O,eo as sn,es as cn,et as ln,fc as un,fl as k,fo as dn,fs as fn,gc as pn,gi as mn,gl as hn,go as gn,gs as _n,hc as vn,hi as A,hl as yn,ho as bn,hs as xn,i as Sn,ia as Cn,ii as j,il as wn,is as Tn,it as En,jo as Dn,js as On,ka as kn,kc as An,ko as jn,ks as Mn,lc as Nn,ll as Pn,lo as Fn,ls as In,lt as Ln,mc as Rn,ml as M,mo as zn,ms as Bn,n as Vn,na as N,nc as Hn,ni as Un,nl as Wn,no as Gn,nt as Kn,o as qn,oa as Jn,oc as Yn,ol as Xn,os as Zn,ot as Qn,pc as $n,pl as P,po as er,ps as tr,q as nr,qa as rr,qc as ir,qo as ar,qs as or,ra as sr,rc as cr,ri as F,rl as lr,ro as ur,rs as dr,rt as fr,s as pr,sa as mr,sc as hr,sl as gr,sr as _r,ss as vr,st as yr,tc as br,ti as xr,tl as Sr,tt as Cr,uc as wr,ul as Tr,uo as Er,us as Dr,vc as Or,vl as kr,vo as Ar,vs as jr,w as Mr,wc as Nr,wl as Pr,wo as Fr,x as Ir,xc as Lr,xl as Rr,xo as zr,xs as Br,xt as Vr,yc as Hr,yo as Ur,ys as Wr,yt as Gr,z as Kr,zc as qr,zl as Jr,zo as Yr,zs as Xr}from"./dist-BLqHrDBe.js";import{t as Zr}from"./shared-B-h7Ra-0.js";var Qr={},$r={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function ei(e,t){Qr[e]=t}function I(e,t){if(!(e in Qr)||t!=null){let n=ni(e,t);if(n!==null)Qr[e]=n;else return console.log(`Could not get context for WebGL version`,e),null}let n=Qr[e];return n==null||n.isContextLost()?(delete Qr[e],I(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Qr[e])}function ti(e){if(!k().getBool(`IS_SAFARI`)&&typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}function ni(e,t){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);let n=t??ti(e);return n.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),delete Qr[e]},!1),k().getBool(`SOFTWARE_WEBGL_ENABLED`)&&($r.failIfMajorPerformanceCaveat=!1),e===1?n.getContext(`webgl`,$r)||n.getContext(`experimental-webgl`,$r):n.getContext(`webgl2`,$r)}var ri;(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(ri||={});var L;(function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`})(L||={});var R;(function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`})(R||={});function ii(e,t){return[t,e]}function ai(e,t){return e*t}function oi(e){let t=E(e),n=Math.ceil(t/4);return Ye(n)}function si(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function ci(e,t){let[n,r]=si(e,t);return n*r*4}function li(e,t){let n=e,r,i,a,o,s,c,l,u,d,f;return k().getNumber(`WEBGL_VERSION`)===2?(r=n.R32F,i=n.R16F,a=n.RGBA16F,o=n.RGBA32F,s=n.RED,l=4,u=1,d=n.HALF_FLOAT,f=n.FLOAT,c=n.RGBA8):(r=e.RGBA,i=e.RGBA,a=e.RGBA,o=n.RGBA,s=e.RGBA,l=4,u=4,d=t==null?null:t.HALF_FLOAT_OES,f=e.FLOAT,c=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:s,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:f}}var ui=e({assertNotComplex:()=>sa,bindCanvasToFramebuffer:()=>Ii,bindColorTextureToFramebuffer:()=>Li,bindTextureToProgramUniformSampler:()=>Fi,bindTextureUnit:()=>ji,bindVertexBufferToProgramAttribute:()=>Ai,callAndCheck:()=>z,canBeRepresented:()=>mi,createFragmentShader:()=>vi,createFramebuffer:()=>ki,createProgram:()=>xi,createStaticIndexBuffer:()=>Ti,createStaticVertexBuffer:()=>wi,createTexture:()=>Di,createVertexShader:()=>_i,getBatchDim:()=>Hi,getExtensionOrThrow:()=>gi,getFramebufferErrorMessage:()=>Bi,getMaxTexturesInShader:()=>$i,getNumChannels:()=>Ei,getProgramUniformLocation:()=>Pi,getProgramUniformLocationOrThrow:()=>Ni,getRowsCols:()=>Ui,getShapeAs3D:()=>Wi,getTextureShapeFromLogicalShape:()=>Gi,getWebGLDisjointQueryTimerVersion:()=>ea,getWebGLErrorMessage:()=>hi,getWebGLMaxTextureSize:()=>Xi,hasExtension:()=>V,isCapableOfRenderingToFloatTexture:()=>na,isDownloadFloatTextureEnabled:()=>ra,isReshapeFree:()=>qi,isWebGLFenceEnabled:()=>oa,isWebGLVersionEnabled:()=>ta,linkProgram:()=>Si,logShaderSourceAndInfoLog:()=>bi,resetMaxTextureSize:()=>Zi,resetMaxTexturesInShader:()=>Qi,unbindColorTextureFromFramebuffer:()=>Ri,unbindTextureUnit:()=>Mi,validateFramebuffer:()=>zi,validateProgram:()=>Ci,validateTextureSize:()=>Oi});function z(e,t){let n=t();return k().getBool(`DEBUG`)&&di(e),n}function di(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+hi(e,t))}var fi=5.96e-8,pi=65504;function mi(e){return!!(k().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||fi<Math.abs(e)&&Math.abs(e)<pi)}function hi(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code ${t}`}}function gi(e,t){return B(e,()=>e.getExtension(t),`Extension "`+t+`" not supported on this browser.`)}function _i(e,t){let n=B(e,()=>e.createShader(e.VERTEX_SHADER),`Unable to create vertex WebGLShader.`);if(z(e,()=>e.shaderSource(n,t)),z(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),Error(`Failed to compile vertex shader.`);return n}function vi(e,t){let n=B(e,()=>e.createShader(e.FRAGMENT_SHADER),`Unable to create fragment WebGLShader.`);if(z(e,()=>e.shaderSource(n,t)),z(e,()=>e.compileShader(n)),k().get(`ENGINE_COMPILE_ONLY`))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw bi(t,e.getShaderInfoLog(n)),Error(`Failed to compile fragment shader.`);return n}var yi=/ERROR: [0-9]+:([0-9]+):/g;function bi(e,t){let n=yi.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((e,t)=>pe((t+1).toString(),a)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let c=o.slice(0,r-1),l=o.slice(r-1,r),u=o.slice(r);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${pe(l[0],s)}`,`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(u.join(`
`))}function xi(e){return B(e,()=>e.createProgram(),`Unable to create WebGLProgram.`)}function Si(e,t){if(z(e,()=>e.linkProgram(t)),!k().get(`ENGINE_COMPILE_ONLY`)&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Failed to link vertex and fragment shaders.`)}function Ci(e,t){if(z(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Shader program validation failed.`)}function wi(e,t){let n=B(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),z(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function Ti(e,t){let n=B(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),z(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function Ei(){return k().getNumber(`WEBGL_VERSION`)===2?1:4}function Di(e){return B(e,()=>e.createTexture(),`Unable to create WebGLTexture.`)}function Oi(e,t){let n=k().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){let n=`[${e}x${t}]`;throw Error(`Requested texture size `+n+` is invalid.`)}if(e>n||t>n){let r=`[${e}x${t}]`,i=`[${n}x${n}]`;throw Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+i+`.`)}}function ki(e){return B(e,()=>e.createFramebuffer(),`Unable to create WebGLFramebuffer.`)}function Ai(e,t,n,r,i,a,o){let s=e.getAttribLocation(t,n);return s!==-1&&(z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),z(e,()=>e.vertexAttribPointer(s,i,e.FLOAT,!1,a,o)),z(e,()=>e.enableVertexAttribArray(s)),!0)}function ji(e,t,n){Vi(e,n),z(e,()=>e.activeTexture(e.TEXTURE0+n)),z(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function Mi(e,t){Vi(e,t),z(e,()=>e.activeTexture(e.TEXTURE0+t)),z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function Ni(e,t,n){return B(e,()=>e.getUniformLocation(t,n),`uniform "`+n+`" not present in program.`)}function Pi(e,t,n){return e.getUniformLocation(t,n)}function Fi(e,t,n,r){z(e,()=>ji(e,t,r)),z(e,()=>e.uniform1i(n,r))}function Ii(e){z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),z(e,()=>e.viewport(0,0,e.canvas.width,e.canvas.height)),z(e,()=>e.scissor(0,0,e.canvas.width,e.canvas.height))}function Li(e,t,n){z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function Ri(e,t){z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function zi(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+Bi(e,t))}function Bi(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error ${t}`}}function B(e,t,n){let r=z(e,()=>t());if(r==null)throw Error(n);return r}function Vi(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function Hi(e,t=2){return E(e.slice(0,e.length-t))}function Ui(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Wi(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[Hi(e),...Ui(e)]),t}function Gi(e,t=!1){let n=k().getNumber(`WEBGL_MAX_TEXTURE_SIZE`),r=k().getNumber(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`);r===1/0&&k().getBool(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`)&&(r=n/2),t&&(n*=2,r*=2,e=e.map((t,n)=>n>=e.length-2?Ne(e[n]):e[n]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=Jr(e).newShape);let i=E(e),a=null;e.length<=1&&i<=n?a=[1,i]:e.length===2&&e[0]<=n&&e[1]<=n?a=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?a=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?a=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?a=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(a=[e[0],e[1]*e[2]*e[3]]);let o=a!=null&&Math.max(...a)>r&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(a==null||o){if(t){let t=Hi(e),n=2,r=2;e.length&&([n,r]=Ui(e)),i=n/2*t*(r/2),a=Ye(i).map(e=>e*2)}else a=Ye(i)}return a}function Ki(e){return e%2==0}function qi(e,t){if(e=e.slice(-2),t=t.slice(-2),P(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let n=e[e.length-1],r=t[t.length-1];if(n===r||Ki(n)&&Ki(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&Ki(e[0])&&Ki(t[0])}var Ji,Yi;function Xi(e){if(Ji==null){let t=I(e);Ji=t.getParameter(t.MAX_TEXTURE_SIZE)}return Ji}function Zi(){Ji=null}function Qi(){Yi=null}function $i(e){if(Yi==null){let t=I(e);Yi=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Yi)}function ea(e){if(e===0)return 0;let t,n=I(e);return t=V(n,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!V(n,`EXT_disjoint_timer_query`),t}function V(e,t){return e.getExtension(t)!=null}function ta(e){try{if(I(e)!=null)return!0}catch(e){return console.log(`Error when getting WebGL context: `,e),!1}return!1}function na(e){if(e===0)return!1;let t=I(e);if(e===1){if(!V(t,`OES_texture_float`))return!1}else if(!V(t,`EXT_color_buffer_float`))return!1;return ia(t)}function ra(e){if(e===0)return!1;let t=I(e);if(e===1){if(!V(t,`OES_texture_float`)||!V(t,`WEBGL_color_buffer_float`))return!1}else{if(V(t,`EXT_color_buffer_float`))return ia(t);let e=`EXT_color_buffer_half_float`;return V(t,e)?aa(t,t.getExtension(e)):!1}return ia(t)}function ia(e){let t=li(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function aa(e,t){let n=li(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function oa(e){return e===2&&I(e).fenceSync!=null}function sa(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&M(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var H=k();H.registerFlag(`HAS_WEBGL`,()=>H.getNumber(`WEBGL_VERSION`)>0),H.registerFlag(`WEBGL_VERSION`,()=>ta(2)?2:+!!ta(1)),H.registerFlag(`WEBGL_CHECK_NUMERICAL_PROBLEMS`,()=>!1),H.registerFlag(`WEBGL_BUFFER_SUPPORTED`,()=>H.get(`WEBGL_VERSION`)===2),H.registerFlag(`WEBGL_CPU_FORWARD`,()=>!0),H.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,()=>!1),H.registerFlag(`WEBGL_PACK`,()=>H.getBool(`HAS_WEBGL`)),H.registerFlag(`WEBGL_PACK_NORMALIZATION`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_CLIP`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_REDUCE`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_LAZILY_UNPACK`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_CONV_IM2COL`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_PACK_CONV2DTRANSPOSE`,()=>H.getBool(`WEBGL_PACK`)),H.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,()=>Xi(H.getNumber(`WEBGL_VERSION`))),H.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,()=>$i(H.getNumber(`WEBGL_VERSION`))),H.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,()=>{let e=H.getNumber(`WEBGL_VERSION`);return e===0?0:ea(e)}),H.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,()=>H.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&!ht()),H.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,()=>na(H.getNumber(`WEBGL_VERSION`))),H.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,()=>!H.getBool(`WEBGL_FORCE_F16_TEXTURES`)&&H.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)),H.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,()=>ra(H.getNumber(`WEBGL_VERSION`))),H.registerFlag(`WEBGL_FENCE_API_ENABLED`,()=>oa(H.getNumber(`WEBGL_VERSION`))),H.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,()=>H.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0),H.registerFlag(`WEBGL_DELETE_TEXTURE_THRESHOLD`,()=>-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),H.registerFlag(`WEBGL_FLUSH_THRESHOLD`,()=>ht()?1:-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),H.registerFlag(`CPU_HANDOFF_SIZE_THRESHOLD`,()=>128),H.registerFlag(`WEBGL_USE_SHAPES_UNIFORMS`,()=>!1),H.registerFlag(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`,()=>1e5),H.registerFlag(`TOPK_K_CPU_HANDOFF_THRESHOLD`,()=>128),H.registerFlag(`WEBGL_EXP_CONV`,()=>!1),H.registerFlag(`SOFTWARE_WEBGL_ENABLED`,()=>H.getBool(`IS_TEST`)),H.registerFlag(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`,()=>1/0),H.registerFlag(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`,()=>!1),H.registerFlag(`WEBGL2_ISNAN_CUSTOM`,()=>!1),H.registerFlag(`ENGINE_COMPILE_ONLY`,()=>!1);function U(){let e,t,n,r,i,a,o,s,c,l;return k().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=k().getBool(`WEBGL2_ISNAN_CUSTOM`)?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:``,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function ca(e,t,n=`index`){let r=kr(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${t}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`};`).join(``)}function la(e,t,n=`index`){let r=kr(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / outShapeStrides[${i}]`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`};`).join(``)}function ua(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),i=Array(n-1);i[n-2]=r[n-1];for(let e=n-3;e>=0;--e)i[e]=`(${i[e+1]} * ${r[e+1]})`;return i}function da(e,t,n=`index`){let r=ua(e.map((e,t)=>t),t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${r[i]}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${r[i]}`:`index -= ${e[i]} * ${r[i]}`};`).join(``)}function fa(e){let t=kr(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function pa(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var ma=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`,{getBroadcastDims:ha}=Vn;function ga(e,t,n){let r=[];if(e.forEach(e=>{let t=E(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:``};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){let{uniformShape:t}=ro(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`)}r.push(`uniform ivec2 ${e.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push(`uniform int outShape;`);break;case 2:r.push(`uniform ivec2 outShape;`),r.push(`uniform int outShapeStrides;`);break;case 3:r.push(`uniform ivec3 outShape;`),r.push(`uniform ivec2 outShapeStrides;`);break;case 4:r.push(`uniform ivec4 outShape;`),r.push(`uniform ivec3 outShapeStrides;`)}r.push(`uniform ivec2 outTexShape;`)}n.customUniforms&&n.customUniforms.forEach(e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:``};`)});let i=r.join(`
`),a=e.map(e=>ya(e,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),o=t.texShape,s=U(),c=Sa(s),l,u,d=Ta(s);return t.isPacked?(l=ba(t.logicalShape,o,n.enableShapeUniforms),u=wa(s)):(l=xa(t.logicalShape,o,n.enableShapeUniforms),u=Ca(s)),n.packedInputs&&(d+=ka),[d,c,u,i,l,a,n.userCode].join(`
`)}function _a(e,t=!1){let n=e.shapeInfo.logicalShape;switch(n.length){case 0:return Ua(e,t);case 1:return Ga(e,t);case 2:return qa(e,t);case 3:return Ya(e,t);case 4:return Za(e,t);case 5:return Qa(e);case 6:return $a(e);default:throw Error(`${n.length}-D input sampling is not yet supported`)}}function va(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return Ha(e);case 1:return Wa(e,t);case 2:return Ka(e,t);case 3:return Ja(e,t);default:return Xa(e,t)}}function ya(e,t,n=!1,r){let i=``;i+=n?va(e,r):_a(e,r);let a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(i+=n?to(e,t):no(e,t)),i}function ba(e,t,n){switch(e.length){case 0:return Aa();case 1:return ja(e,t,n);case 2:return za(e,t,n);case 3:return Na(e,t,n);default:return Fa(e,t,n)}}function xa(e,t,n){switch(e.length){case 0:return Aa();case 1:return Ma(e,t,n);case 2:return Ba(e,t,n);case 3:return Pa(e,t,n);case 4:return Ia(e,t,n);case 5:return La(e,t);case 6:return Ra(e,t);default:throw Error(`${e.length}-D output sampling is not yet supported`)}}function Sa(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function Ca(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function wa(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function Ta(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${Ea}
    ${Da}
    ${Oa}
  `}var Ea=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Da=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Oa=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ka=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Aa(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function ja(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function Ma(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function Na(e,t,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[2]/2),a=i*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec3(b, r, c);
    }
  `}function Pa(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${la([`r`,`c`,`d`],e)}
    return ivec3(r, c, d);
  }
`;let r=ca([`r`,`c`,`d`],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function Fa(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[e.length-1]/2),a=i*Math.ceil(e[e.length-2]/2),o=a,s=``,c=`b, r, c`;for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,c=`b${t}, `+c;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${s}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec${e.length}(${c});
    }
  `}function Ia(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${la([`r`,`c`,`d`,`d2`],e)}
      return ivec4(r, c, d, d2);
    }
  `;let r=ca([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function La(e,t){let n=ca([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function Ra(e,t){let n=ca([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function za(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(P(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;let i=Math.ceil(e[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec2(r, c);
    }
  `}function Ba(e,t,n){return P(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function Va(e){return`offset${e}`}function Ha(e){let t=e.name;return`
    vec4 ${`get`+t.charAt(0).toUpperCase()+t.slice(1)}() {
      return ${U().texture2D}(${t}, halfCR);
    }
  `}function Ua(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;let[i,a]=e.shapeInfo.texShape;if(i===1&&a===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;let o=Va(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});
      return sampleTexture(${n}, uv);
    }
  `;let[s,c]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${s}, ${c}, ${o});
      return sampleTexture(${n}, uv);
    }
  `}function Wa(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=U();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${n}, uv);
    }
  `;let o=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${n}, uv);
    }
  `}function Ga(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${eo(e)}
      }
    `;let i=e.shapeInfo.texShape,a=i[0],o=i[1];if(o===1&&a===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;let s=Va(n);return o===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${a}.0);
        return sampleTexture(${n}, uv);
      }
    `:a===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${s});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${a}, ${o}, index + ${s});
      return sampleTexture(${n}, uv);
    }
  `}function Ka(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=a[0],s=a[1],c=U();if(a!=null&&P(n,a))return t?`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${c.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${c.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${i}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `;let l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${i}(int row, int col) {
      vec2 uv = packedUVfrom2D(${Math.ceil(n[1]/2)}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `}function qa(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape;if(a!=null&&P(n,a)){if(t)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;let e=a[0];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);
      return sampleTexture(${r}, uv);
    }
  `}let{newShape:o,keptDims:s}=Jr(n),c=o;if(c.length<n.length)return`
      ${_a(io(e,c),t)}
      float ${i}(int row, int col) {
        return ${i}(${ao([`row`,`col`],s)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${eo(e)}
      }
    `;let l=a[0],u=a[1],d=Va(r);return u===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${r}, uv);
  }
`}function Ja(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        ${va(io(e,n.slice(1)),t)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${ao([`b`,`row`,`col`],[1,2])});
        }
      `;let s=U();if(t)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `;let c=o[0],l=o[1],u=Math.ceil(n[2]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u*Math.ceil(n[1]/2)}, ${u}, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `}function Ya(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],{newShape:s,keptDims:c}=Jr(n),l=s;if(l.length<n.length)return`
        ${_a(io(e,l),t)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${ao([`row`,`col`,`depth`],c)});
        }
      `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${o}, 1)));
        ${eo(e)}
      }
    `;let u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===a&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===o&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;let m=Va(r);return t?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function Xa(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=U();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${i.texture2D}(${n}, uv);
    }
  `;let a=e.shapeInfo.logicalShape,o=a.length,s=e.shapeInfo.texShape,c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=c[0],u=c[1],d=Math.ceil(a[o-1]/2),f=d*Math.ceil(a[o-2]/2),p=`int b, int row, int col`,m=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)p=`int b${e}, `+p,f*=a[o-e-1],m=`b${e} * ${f} + `+m;return`
    vec4 ${r}(${p}) {
      int index = ${m};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${i.texture2D}(${n}, uv);
    }
  `}function Za(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,{newShape:c,keptDims:l}=Jr(n);if(c.length<n.length)return`
      ${_a(io(e,c),t)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${ao([`row`,`col`,`depth`,`depth2`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${s}, ${o}, ${a}, 1)));
        ${eo(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1],m=`int stride2 = ${r}Shape[3];`,h=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(p===s&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${h}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(p===a&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let _=Va(r);return t?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${h}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${_});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${f}, ${p}, index + ${_});
      return sampleTexture(${r}, uv);
    }
  `}function Qa(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,{newShape:c,keptDims:l}=Jr(t);if(c.length<t.length)return`
      ${_a(io(e,c))}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${ao([`row`,`col`,`depth`,`depth2`,`depth3`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${s}, ${o}, ${a}, ${i})) +
          depth3;
        ${eo(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];return p===s&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${a}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:p===i&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} + depth * ${a} +
          depth2 * ${i} + depth3 + ${Va(n)};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function $a(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),{newShape:i,keptDims:a}=Jr(t);if(i.length<t.length)return`
      ${_a(io(e,i))}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${ao([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],a)});
      }
    `;let o=t[5],s=t[4]*o,c=t[3]*s,l=t[2]*c,u=t[1]*l;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${s})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${eo(e)}
      }
    `;let d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];return m===u&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${s}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:m===o&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${s} + depth3 * ${o} + depth4 + ${Va(n)};
      vec2 uv = uvFromFlat(${p}, ${m}, index);
      return sampleTexture(${n}, uv);
    }
  `}function eo(e){let t=e.name,n=E(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function to(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=ha(e.shapeInfo.logicalShape,t.logicalShape),c=W(o),l=o-a,u,d=[`x`,`y`,`z`,`w`,`u`,`v`];u=a===0?``:o<2&&s.length>=1?`coords = 0;`:s.map(e=>`coords.${d[e+l]} = 0;`).join(`
`);let f=``;f=o<2&&a>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+l]}`).join(`, `);let p=`return outputValue;`,m=E(e.shapeInfo.logicalShape)===1,h=E(t.logicalShape)===1;if(a===1&&!m&&!h)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!h)p=o===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=a-2,t=a-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p=`return vec4(outputValue.x);`:s.indexOf(e)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:s.indexOf(t)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}return`
    vec4 ${i}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${r}(${f});
      ${p}
    }
  `}function no(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&P(o,a))return`
      float ${i}() {
        return sampleTexture(${n}, resultUV);
      }
    `;let l=W(c),u=ha(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f,p=[`x`,`y`,`z`,`w`,`u`,`v`];f=s===0?``:c<2&&u.length>=1?`coords = 0;`:u.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+d]}`).join(`, `),`
    float ${i}() {
      ${l} coords = getOutputCoords();
      ${f}
      return get${r}(${m});
    }
  `}function W(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function ro(e,t,n){let{newShape:r,keptDims:i}=Jr(t),a=t.length,o=e&&a===3&&t[0]===1,s=o?t.slice(1):r,c=!e&&a>1&&!P(t,n)&&r.length<a||o;return{useSqueezeShape:c,uniformShape:c?s:t,keptDims:i}}function io(e,t){let n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function ao(e,t){return t.map(t=>e[t]).join(`, `)}function oo(e,t,n,r){let i=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),a=i.map(e=>e.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=ga(i,o,t),c=vi(e.gl,s),l=e.createProgram(c);return k().get(`ENGINE_COMPILE_ONLY`)?{program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(l),Object.assign({program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o},so(e,t,l)))}function so(e,t,n){let r=[],i=[],a,o,s,c=null,l=null;l=e.getUniformLocation(n,`NAN`,!1),k().getNumber(`WEBGL_VERSION`)===1&&(c=e.getUniformLocation(n,`INFINITY`,!1));for(let i of t.variableNames){let a={name:i,uniform:e.getUniformLocation(n,i,!1),offset:e.getUniformLocation(n,`offset${i}`,!1)};t.enableShapeUniforms&&(a.shape=e.getUniformLocation(n,`${i}Shape`,!1),a.texShape=e.getUniformLocation(n,`${i}TexShape`,!1)),r.push(a)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(n,`outShape`,!1),s=e.getUniformLocation(n,`outShapeStrides`,!1),o=e.getUniformLocation(n,`outTexShape`,!1)),t.customUniforms)for(let r of t.customUniforms)i.push(e.getUniformLocation(n,r.name,!1));return{variablesLocations:r,customUniformLocations:i,infLoc:c,nanLoc:l,outShapeLocation:a,outShapeStridesLocation:s,outTexShapeLocation:o}}function co(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,i=t[n],a=i.shape;if(!P(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${a} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!P(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function lo(e,t,n,r,i){t.program.enableShapeUniforms||(co(t.inShapeInfos,n),co([t.outShapeInfo],[r]));let a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),k().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let r=0;r<n.length;++r){let i=n[r],{uniform:a,offset:o,shape:s,texShape:c}=t.variablesLocations[r];if(s){let{uniformShape:n}=ro(t.program.packedInputs,i.shape,i.texData.texShape);switch(n.length){case 1:e.gl.uniform1iv(s,new Int32Array(n));break;case 2:e.gl.uniform2iv(s,new Int32Array(n));break;case 3:e.gl.uniform3iv(s,new Int32Array(n));break;case 4:e.gl.uniform4iv(s,new Int32Array(n))}}if(c&&e.gl.uniform2i(c,i.texData.texShape[0],i.texData.texShape[1]),a!=null){if(i.isUniform){if(E(i.shape)<2)e.gl.uniform1f(a,i.uniformValues[0]);else{let t=i.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}continue}i.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,i.texData.slice.flatOffset),e.setInputMatrixTexture(i.texData.texture.texture,a,r)}}let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape))}if(t.outShapeStridesLocation){let n=kr(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n))}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&i)for(let n=0;n<t.program.customUniforms.length;++n){let r=t.program.customUniforms[n],a=t.customUniformLocations[n],o=i[n];if(r.type===`float`)e.gl.uniform1fv(a,o);else if(r.type===`vec2`)e.gl.uniform2fv(a,o);else if(r.type===`vec3`)e.gl.uniform3fv(a,o);else if(r.type===`vec4`)e.gl.uniform4fv(a,o);else if(r.type===`int`)e.gl.uniform1iv(a,o);else if(r.type===`ivec2`)e.gl.uniform2iv(a,o);else if(r.type===`ivec3`)e.gl.uniform3iv(a,o);else if(r.type===`ivec4`)e.gl.uniform4iv(a,o);else throw Error(`uniform type ${r.type} is not supported yet.`)}e.executeProgram()}function uo(e,t,n){let r=``;t.concat(n).forEach(t=>{let i=t.texData!=null&&t.texData.slice!=null&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:o,uniformShape:s,keptDims:c}=ro(e.packedInputs,t.shape,a),l=``,u=``,d=``;if(s.length===1&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(s.length===2&&!e.packedInputs)u=`${s[0]>1}_${s[1]>1}`;else if(s.length>2&&!e.packedInputs){let e=kr(s);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}let f=t.shape.length,p=s.length===2&&P(t.shape,a),m=E(t.shape)===1,h=mn(t.shape,n.shape),g=!e.packedInputs&&f===n.shape.length&&P(a,n.texData.texShape),_=e.packedInputs||s.length>2?``:`${a[0]>1}_${a[1]>1}`;r+=`${f}_${g}_${o?c:``}_${s.length}_${m}_${h}_${p}_${l}_${u}_${d}_${_}_${i}`}else{let e=t.isUniform?`uniform`:t.texData.texShape;r+=`${t.shape}_${e}_${i}`}});let i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i+`${k().getNumber(`WEBGL_VERSION`)}`,a}function G(e){return k().getBool(`WEBGL_USE_SHAPES_UNIFORMS`)&&e<=4}var fo=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=ri.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=U();this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?la([`r`,`c`,`d`],e):ca([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}},po=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=ri.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=U();this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?la([`r`,`c`,`d`],e):ca([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}},mo=class{constructor(e){this.variableNames=[`A`],this.outTexUsage=L.DOWNLOAD;let t=U();this.outputShape=e,this.userCode=`
      ${ma}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}},ho=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=L.DOWNLOAD;let t=U();this.outputShape=e,this.userCode=`
      ${ma}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}},go={R:0,G:1,B:2,A:3},_o=class{constructor(e,t=!1,n=`RGBA`){this.variableNames=[`A`],this.customUniforms=[{name:`texShape`,type:`ivec2`}];let r=U();this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length);let i=`result`;t&&(i=`floor(result * 255. + 0.5)`);let a=``;for(let e=0;e<n.length;e++){let t=n[e];a+=`
          if(offset == ${e}) {
            result = values[${go[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?pa():fa(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${a}
        }
        ${r.output} = vec4(${i}, 0., 0., 0.);
      }
    `}},vo=class{constructor(e,t=!1){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=U();this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length);let r=``,i=`result`;t&&(i=`floor(result * 255. + 0.5)`);for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let a=t*2+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?`outShape[2]`:`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?`outShape[1]`:`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?pa():fa(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${i};
        }
    `}},yo=e({bindVertexProgramAttributeStreams:()=>Po,createBufferFromOutputTexture:()=>Lo,createFloat16MatrixTexture:()=>Do,createFloat16PackedMatrixTexture:()=>No,createFloat32MatrixTexture:()=>To,createIndexBuffer:()=>So,createPackedMatrixTexture:()=>jo,createUnsignedBytesMatrixTexture:()=>ko,createVertexBuffer:()=>xo,createVertexShader:()=>bo,downloadByteEncodedFloatMatrixFromOutputTexture:()=>zo,downloadFloat32MatrixFromBuffer:()=>Ro,downloadMatrixFromPackedOutputTexture:()=>Vo,downloadPackedMatrixFromBuffer:()=>Bo,getInternalFormatForFloat16MatrixTexture:()=>Eo,getInternalFormatForFloat16PackedMatrixTexture:()=>Mo,getInternalFormatForFloat32MatrixTexture:()=>wo,getInternalFormatForPackedMatrixTexture:()=>Ao,getInternalFormatForUnsignedBytesMatrixTexture:()=>Oo,uploadDenseMatrixToTexture:()=>Fo,uploadPixelDataToTexture:()=>Io});function bo(e){let t=U();return _i(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function xo(e){return wi(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function So(e){return Ti(e,new Uint16Array([0,1,2,2,1,3]))}function Co(e,t,n,r,i,a){Oi(t,n);let o=Di(e),s=e.TEXTURE_2D;return z(e,()=>e.bindTexture(s,o)),z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),z(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),z(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),k().getNumber(`WEBGL_VERSION`)===1?z(e,()=>e.texImage2D(s,0,r,t,n,0,i,a,null)):z(e,()=>e.texStorage2D(s,1,r,t,n)),z(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[n,t]}}function wo(e){return e.internalFormatFloat}function To(e,t,n,r){let[i,a]=ii(t,n);return Co(e,i,a,wo(r),r.textureFormatFloat,e.FLOAT)}function Eo(e){return e.internalFormatHalfFloat}function Do(e,t,n,r){let[i,a]=ii(t,n);return Co(e,i,a,Eo(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function Oo(e){return e.downloadTextureFormat}function ko(e,t,n,r){let[i,a]=ii(t,n);return Co(e,i,a,Oo(r),e.RGBA,e.UNSIGNED_BYTE)}function Ao(e){return e.internalFormatPackedFloat}function jo(e,t,n,r){let[i,a]=si(t,n);return Co(e,i,a,Ao(r),e.RGBA,e.FLOAT)}function Mo(e){return e.internalFormatPackedHalfFloat}function No(e,t,n,r){let[i,a]=si(t,n);return Co(e,i,a,Mo(r),e.RGBA,r.textureTypeHalfFloat)}function Po(e,t,n){return z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Ai(e,t,`clipSpacePos`,n,3,20,0)&&Ai(e,t,`uv`,n,2,20,12)}function Fo(e,t,n,r,i,a){z(e,()=>e.bindTexture(e.TEXTURE_2D,t));let o,s,c;i instanceof Uint8Array?(o=new Uint8Array(n*r*4),s=e.UNSIGNED_BYTE,c=e.RGBA):(o=new Float32Array(n*r*4),s=e.FLOAT,c=a.internalFormatPackedFloat),o.set(i),k().getNumber(`WEBGL_VERSION`)===2?z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,s,o)):z(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,r,0,e.RGBA,s,o)),z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function Io(e,t,n){z(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?k().getNumber(`WEBGL_VERSION`)===2?z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):k().getNumber(`WEBGL_VERSION`)===2?z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function Lo(e,t,n,r){let i=e.createBuffer();z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,i));let a=16*t*n;return z(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),i}function Ro(e,t,n){let r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function zo(e,t,n,r){let[i,a]=ii(t,n),o=new Uint8Array(ai(t*n,4));return z(e,()=>e.readPixels(0,0,i,a,r.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function Bo(e,t,n,r,i,a,o,s){let c=e,l=new Float32Array(ci(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function Vo(e,t,n){let r=new Float32Array(t*n*4);return z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}var Ho=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=k().getNumber(`WEBGL_VERSION`);if(e==null?this.gl=I(t):(this.gl=e,ei(t,e)),e=this.gl,k().getNumber(`WEBGL_VERSION`)===2){let t=e;this.createVertexArray=()=>z(t,()=>t.createVertexArray()),this.bindVertexArray=e=>z(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>z(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>z(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(e!=null){let t=e.getExtension(`OES_vertex_array_object`);if(t==null)throw Error(`All WebGL1 implementations are expected to offer OES_vertex_array_object.`);this.createVertexArray=()=>z(e,()=>t.createVertexArrayOES()),this.bindVertexArray=n=>z(e,()=>t.bindVertexArrayOES(n)),this.deleteVertexArray=n=>z(e,()=>t.deleteVertexArrayOES(n)),this.getVertexArray=()=>z(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let n=`WEBGL_color_buffer_float`,r=`EXT_color_buffer_half_float`;if(this.parallelCompilationExtension=this.gl.getExtension(`KHR_parallel_shader_compile`),k().getNumber(`WEBGL_VERSION`)===1){let e=`OES_texture_half_float`;if(this.textureFloatExtension=gi(this.gl,`OES_texture_float`),V(this.gl,e))this.textureHalfFloatExtension=gi(this.gl,e);else if(k().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),V(this.gl,r))this.colorBufferHalfFloatExtension=gi(this.gl,r);else if(k().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,V(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(V(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw Error(`GL context does not support color renderable floats`);this.vertexBuffer=xo(this.gl),this.indexBuffer=So(this.gl),this.framebuffer=ki(this.gl),this.textureConfig=li(this.gl,this.textureHalfFloatExtension)}get debug(){return k().getBool(`DEBUG`)}dispose(){if(this.disposed)return;this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);let e=this.gl;z(e,()=>e.finish()),z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),z(e,()=>e.deleteFramebuffer(this.framebuffer)),z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),z(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),To(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),Do(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),ko(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),Io(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),Fo(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),No(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),jo(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Ri(this.gl,this.framebuffer),this.outputTexture=null),z(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>zo(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,i,a){return Bo(this.gl,e,t,n,r,i,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return Ro(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=Lo(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(k().getBool(`WEBGL_FENCE_API_ENABLED`)){let r=e,i=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let e=r.clientWaitSync(i,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=i}else k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>Vo(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader??=bo(t);let n=xi(t);z(t,()=>t.attachShader(n,this.vertexShader)),z(t,()=>t.attachShader(n,e)),Si(t,n);let r=Object.assign(n,{vao:this.createVertexArray()});return this.debug&&Ci(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;z(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),Po(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(z(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Ci(this.gl,this.program),z(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?Ni(this.gl,e,t):Pi(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),z(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),Fi(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,i]=si(t,n);this.setOutputMatrixTextureDriver(e,r,i)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)}debugValidate(){this.program!=null&&Ci(this.gl,this.program),zi(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,`VAO changed between setProgram and executeProgram!`),this.debugValidate()}z(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),z(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension??=gi(this.gl,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await te(()=>this.disposed||this.isQueryAvailable(e,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))),this.getQueryTime(e,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}getQueryTime(e,t){if(t===0)return null;if(t===2){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(n.GPU_DISJOINT_EXT),r&&!this.disjoint}{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint??=this.gl.getParameter(t.GPU_DISJOINT_EXT),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=Uo(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;`setTimeoutCustom`in k().platform&&(n=k().platform.setTimeoutCustom.bind(k().platform)),te(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Li(this.gl,e,this.framebuffer),this.debug&&zi(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture==null?Ri(this.gl,this.framebuffer):(Li(this.gl,this.outputTexture,this.framebuffer),this.debug&&zi(this.gl))}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;Li(r,e,this.framebuffer),this.debug&&zi(r),this.outputTexture=e,z(r,()=>r.viewport(0,0,t,n)),z(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),z(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)}throwIfNoProgram(){if(this.program==null)throw Error(`No GPU program is currently set.`)}};function Uo(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var{addImpl:Wo,bincountImpl:Go,bincountReduceImpl:Ko,bitwiseAndImpl:qo,castImpl:Jo,ceilImpl:Yo,concatImpl:Xo,equalImpl:Zo,expImpl:Qo,expm1Impl:$o,floorImpl:es,gatherNdImpl:ts,gatherV2Impl:ns,greaterImpl:rs,greaterEqualImpl:is,lessImpl:as,lessEqualImpl:os,linSpaceImpl:ss,logImpl:cs,maxImpl:ls,maximumImpl:us,minimumImpl:ds,multiplyImpl:fs,negImpl:ps,notEqualImpl:ms,prodImpl:hs,raggedGatherImpl:gs,raggedRangeImpl:_s,raggedTensorToTensorImpl:vs,rangeImpl:ys,rsqrtImpl:bs,scatterImpl:xs,sigmoidImpl:Ss,simpleAbsImpl:Cs,sliceImpl:ws,sparseFillEmptyRowsImpl:Ts,sparseReshapeImpl:Es,sparseSegmentReductionImpl:Ds,sqrtImpl:Os,staticRegexReplaceImpl:ks,stridedSliceImpl:As,stringNGramsImpl:js,stringSplitImpl:Ms,stringToHashBucketFastImpl:Ns,subImpl:Ps,tileImpl:Fs,topKImpl:Is,transposeImpl:Ls,uniqueImpl:Rs}=Zr;function zs(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(t=>`${e}.${t}`)}function K(e,t){return t===1?[e]:zs(e,t)}function Bs(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var Vs=class{constructor(e){if(this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=G(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=K(`rc`,this.rank),t=W(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let i=`${n===0?`r`:`rp1`}, ${r===0?`c`:`cp1`}`;for(let t=2;t<this.rank;t++)i=`${e[e.length-1-t]},`+i;t.push(i)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?`outShape`:this.outputShape[0]}`;let t=``;for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+=`||`);return t}getSetup(e){if(this.rank===1)return``;let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?`outShape`:this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}},Hs=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec3`}],this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length);let n=``;for(let e=0;e<4;e++){let t=`thisRC = rc;`;e%2==1&&(t+=`thisRC.z += 1;`),e>1&&(t+=`thisRC.y += 1;`),n+=`
        ${t}
        ${e>0?`if(thisRC.y < rows && thisRC.z < cols){`:``}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?`}`:``}
      `}this.userCode=`
      ${Us(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?pa():fa(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?`outShape[1]`:e[1]};
        int cols = ${this.enableShapeUniforms?`outShape[2]`:e[2]};

        ${n}

        setOutput(result);
      }
    `}};function Us(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?da([`r`,`c`,`d`],`inputShape`):ca([`r`,`c`,`d`],e)}
      return ivec3(r, c, d);
    }
  `}var Ws=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,n){let r=Ys(t,n),i=Xs(e,r,n);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let a=Ks(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let e=this.freeTextures[i].pop();return this.usedTextures[i].push(e),e}let o;return r===R.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===R.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===R.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===R.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===R.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,n,r){if(this.freeTextures==null)return;let i=Ys(n,r),a=Xs(t,i,r);a in this.freeTextures||(this.freeTextures[a]=[]);let o=Ks(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=k().getNumber(`WEBGL_DELETE_TEXTURE_THRESHOLD`);s!==-1&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let c=this.usedTextures[a],l=c&&c.indexOf(e);if(l==null||l<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);c[l]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function Gs(e,t){let n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F||t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}function Ks(e,t,n,r,i){let a=qs(t,r),o;if(i){let[t,n]=si(e[0],e[1]);o=t*n}else{let[t,n]=ii(e[0],e[1]);o=t*n}let s=Gs(n,a);return o*s}function qs(e,t){switch(e){case R.PACKED_2X2_FLOAT32:return Ao(t);case R.PACKED_2X2_FLOAT16:return Mo(t);case R.UNPACKED_FLOAT32:return wo(t);case R.UNPACKED_FLOAT16:return Eo(t);case R.PACKED_4X1_UNSIGNED_BYTE:return Oo(t);default:throw Error(`Unknown physical texture type ${e}`)}}function Js(e){return k().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?R.PACKED_2X2_FLOAT32:R.UNPACKED_FLOAT32:e?R.PACKED_2X2_FLOAT16:R.UNPACKED_FLOAT16}function Ys(e,t){if(e===L.UPLOAD)return R.PACKED_2X2_FLOAT32;if(e===L.RENDER||e==null)return Js(t);if(e===L.DOWNLOAD||e===L.PIXELS)return R.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function Xs(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}var q=class{constructor(e,t){this.variableNames=[`A`],this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},J=`if (isnan(x)) return x;`,Zs=`return x;`,Qs=`return abs(x);`,$s=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,ec=J+`
  return (x < 0.0) ? 0.0 : x;
`,tc=J+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,nc=`return x;`,rc=`return 1.0 / (1.0 + exp(-1.0 * x));`,ic=`return x;`,ac=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,oc=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,sc=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cc=`return 1.0 / (1.0 + exp(-1.0 * x));`,lc=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}},uc=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length);let t=e.length,n=K(`rc`,t),r=W(t),i=Bs(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(${a.join(`,`)})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${i});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}},dc=Ge,fc=1e-7,pc=1e-4,mc={};function hc(e){return e in mc||(mc[e]={}),mc[e]}var gc=k().getNumber(`CPU_HANDOFF_SIZE_THRESHOLD`),_c=600;function vc(){return k().global.screen==null?1024:k().global.screen.height*k().global.screen.width*window.devicePixelRatio*_c/1024/1024}var yc=class e extends xt{nextDataId(){return e.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!k().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);let t;e==null?(t=new Ho(I(k().getNumber(`WEBGL_VERSION`))),this.binaryCache=hc(k().getNumber(`WEBGL_VERSION`)),this.gpgpuCreatedLocally=!0):(t=e instanceof Ho?e:new Ho(I(k().getNumber(`WEBGL_VERSION`),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Ws(this.gpgpu),this.numMBBeforeWarning=vc(),this.texData=new dt(this,Oe())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,n,r,i,a){let o=this.makeTensorInfo(t,n),s=this.texData.get(o.dataId);s.isPacked=!1,s.texture={texture:e,texShape:[r,i]},s.texShape=[r,i];let c=new _o(Wi(t),!1,a),l=this.runWebGLProgram(c,[o],n,[[r,i]]);return l.shape=t,s.texture=null,this.disposeIntermediateTensorInfo(o),l.dataId}write(e,t,n){if((k().getBool(`WEBGL_CHECK_NUMERICAL_PROBLEMS`)||k().getBool(`DEBUG`))&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:L.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,i){if(k().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:L.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let{values:t,dtype:n,complexTensorInfos:r,slice:i,shape:a,isPacked:o}=this.texData.get(e);if(i!=null){let t;t=o?new lc(a,nc):new q(a,nc);let r=this.runWebGLProgram(t,[{dataId:e,shape:a,dtype:n}],n),i=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),i}if(t!=null)return this.convertAndCacheOnCPU(e);if(n===`string`)return t;let s=this.activeTimers!=null,c;s&&(c=wt());let l;if(n===`complex64`){let e=this.readSync(r.real.dataId),t=this.readSync(r.imag.dataId);l=De(e,t)}else l=this.getValuesFromTexture(e);return s&&(this.downloadWaitMs+=wt()-c),this.convertAndCacheOnCPU(e,l)}async read(e){if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:t,shape:n,slice:r,dtype:i,complexTensorInfos:a,isPacked:o}=this.texData.get(e);if(r!=null){let t;t=o?new lc(n,nc):new q(n,nc);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:i}],i),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(t!=null)return this.convertAndCacheOnCPU(e);if(k().getBool(`DEBUG`)&&!k().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&k().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);let s=null,c;if(i!==`complex64`&&k().get(`WEBGL_BUFFER_SUPPORTED`)){c=this.decode(e);let t=this.texData.get(c.dataId);s=this.gpgpu.createBufferFromTexture(t.texture.texture,...oi(n))}this.pendingRead.set(e,[]),i!==`complex64`&&await this.gpgpu.createAndWaitForFence();let l;if(i===`complex64`){let e=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),t=e[0],n=e[1];l=De(t,n)}else if(s==null)l=this.getValuesFromTexture(e);else{let e=E(n);l=this.gpgpu.downloadFloat32MatrixFromBuffer(s,e)}if(c!=null&&this.disposeIntermediateTensorInfo(c),s!=null){let e=this.gpgpu.gl;z(e,()=>e.deleteBuffer(s))}let u=this.convertAndCacheOnCPU(e,l),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(e=>e(u)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&Oe().removeDataId(e,this),this.pendingDeletes--),u}readToGPU(e,t={}){let{values:n,shape:r,slice:i,dtype:a,isPacked:o,texture:s}=this.texData.get(e);if(a===`complex64`)throw Error(`Does not support reading texture for complex64 dtype.`);if(i!=null){let n;n=o?new lc(r,nc):new q(r,nc);let i=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:a}],a),s=this.readToGPU(i,t);return this.disposeIntermediateTensorInfo(i),s}if(s==null)throw Error(n==null?`There is no data on GPU or CPU.`:`Data is not on GPU but on CPU.`);let c=this.decode(e,t.customTexShape),l=Oe().makeTensorFromTensorInfo(c),u=this.texData.get(c.dataId);return Object.assign({tensorRef:l},u.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>rr(e));return kn(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return kn(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!mi(n))throw k().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),i=E(t);if(k().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){let n=this.decode(e),r=this.texData.get(n.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...oi(t)).subarray(0,i);return this.disposeIntermediateTensorInfo(n),a}let a=k().getBool(`WEBGL_PACK`)&&r===!0,o=a?Wi(t):t,s=a?new ho(o):new mo(o),c=this.runWebGLProgram(s,[{shape:o,dtype:n,dataId:e}],`float32`),l=this.texData.get(c.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),u}timerAvailable(){return k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0}time(e){let t=this.activeTimers,n=[],r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let i=Ot(this.activeTimers.map(e=>e.query)).filter(e=>e!=null),a=Ot(this.activeTimers.map(e=>e.name)).filter(e=>e!=null);this.activeTimers=t,r&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0){let e=await Promise.all(i);o.kernelMs=l(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:a[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(`, `)}else o.kernelMs={error:`WebGL query timers are not supported in this environment.`};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:wt(),endMs:null}}endTimer(e){return k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=wt(),e)}async getQueryTime(e){if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:i,isPacked:a,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,i,a)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=gc){return k().getBool(`WEBGL_CPU_FORWARD`)&&e.every(e=>this.texData.get(e.dataId).texture==null&&E(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){sn(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);let t=e.dataSync();return dc(e.shape,t)}packedUnaryOp(e,t,n){let r=new lc(e.shape,t),i=this.compileAndRun(r,[e],n);return Oe().makeTensorFromTensorInfo(i)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!==`complex64`){let t=Cs(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Qs,e.dtype);let t=new q(e.shape,Qs),n=this.compileAndRun(t,[e]);return Oe().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&Le(n[0])){let i=n.map(e=>ge(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return Oe().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new uc(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new Vs(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[Hi(e.shape),...Ui(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new Hs([Hi(t),...Ui(t)],n),a=[n],o=this.runWebGLProgram(i,[r],e.dtype,a,!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}decode(e,t){let{isPacked:n,shape:r,dtype:i}=this.texData.get(e);if(t!=null){let e=E(r),n=t[0]*t[1]*4;M(e<=n,()=>`customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.`)}let a=Wi(r),o;o=n?new po(a):new fo(a);let s=[t??oi(a)];return{dtype:i,shape:r,dataId:this.runWebGLProgram(o,[{shape:a,dtype:i,dataId:e}],i,s,!0,t).dataId}}runWebGLProgram(e,t,n,r,i=!1,a){let o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===ri.DENSE&&(s.texShape=(a??oi(e.outputShape)).map(e=>e*2)),e.outTexUsage!=null&&(s.usage=e.outTexUsage),E(o.shape)===0)return s.values=Rr(o.dtype,0),o;let c=[],l=t.map(t=>{if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);let n=this.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&E(t.shape)<=k().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!qi(n.shape,t.shape)){let e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),c.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);let u={shape:o.shape,texData:s,isUniform:!1},d=uo(e,l,u),f=this.getAndSaveBinary(d,()=>oo(this.gpgpu,e,l,u)),p=this.activeTimers!=null,m;p&&(m=this.startTimer()),k().get(`ENGINE_COMPILE_ONLY`)||lo(this.gpgpu,f,l,u,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));let h=k().getNumber(`WEBGL_FLUSH_THRESHOLD`);if(h>0){let e=wt();e-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!k().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&i===!1){let e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,i=!1){return n||=t[0].dtype,this.runWebGLProgram(e,t,n,r,i)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||=(k().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)}floatPrecision(){return this.floatPrecisionValue??=w(()=>{if(!k().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){let e=k().getBool(`DEBUG`);k().set(`DEBUG`,!1);let t=this.abs(Et(1e-8)).dataSync()[0];if(k().set(`DEBUG`,e),t>0)return 32}return 16}),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?fc:pc}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:r,values:i,texture:a,usage:o,isPacked:s}=t;if(a!=null)return;let c=this.activeTimers!=null,l;c&&(l=wt());let u=t.texShape;if(u??(u=Gi(n,s),t.texShape=u),i!=null){let e=Wi(n),a,o=u[1],d=u[0],f=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(s||!f)&&([o,d]=si(u[0],u[1])),a=s?new vo(e,f):new _o(e,f);let p=f?[d,o]:u,m=this.makeTensorInfo(p,r),h=this.texData.get(m.dataId);h.usage=f?L.PIXELS:L.UPLOAD,h.texShape=p,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),o,d,i);let g=[[d,o]],_=this.runWebGLProgram(a,[m],r,g,!0),v=this.texData.get(_.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,k().get(`ENGINE_COMPILE_ONLY`)?this.disposeData(_.dataId):(t.texture=v.texture,t.values=null,this.texData.delete(_.dataId)),this.disposeIntermediateTensorInfo(m),c&&(this.uploadWaitMs+=wt()-l)}else t.texture=this.acquireTexture(u,o,r,s)}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return t!=null&&(n.values=bc(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*hn(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(n)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Kn(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(bi(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error(`Failed to compile fragment shader.`)):Error(`Failed to link vertex and fragment shaders.`);return!0}getUniformLocations(){for(let e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);let{variablesLocations:t,customUniformLocations:n,infLoc:r,nanLoc:i,outShapeLocation:a,outShapeStridesLocation:o,outTexShapeLocation:s}=so(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=i,e.outShapeLocation=a,e.outShapeStridesLocation=o,e.outTexShapeLocation=s}}createTensorFromGPUData(e,t,n){e.channels=e.channels||`RGBA`;let{texture:r,height:i,width:a,channels:o}=e,s=Oe().backend;if(!s.gpgpu.gl.isTexture(r))throw Error(`The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.`);let c=s.writeTexture(r,t,n,i,a,o);return Oe().makeTensorFromDataId(c,t,n,s)}};yc.nextDataId=0;function bc(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){let n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}throw Error(`Unknown dtype ${t}`)}var xc=`4.22.0`;function Sc(){k().set(`WEBGL_FORCE_F16_TEXTURES`,!0)}s()&&Ve(`webgl`,()=>new yc,2);var Cc={forceHalfFloat:Sc},wc=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,Tc=class{constructor(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=A(t,n),this.enableShapeUniforms=G(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}},Ec=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,Dc=class{constructor(e,t,n,r=!1){this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=A(t,n);let i=this.outputShape.length;this.enableShapeUniforms=G(i);let a=``;if(r){if(i===0||E(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${W(i)} coords = getOutputCoords();
        `,i===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=K(`coords`,i);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= outShape[${i} - 2];
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= outShape[${i} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= ${this.outputShape[i-2]};
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= ${this.outputShape[i-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}};function Y(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var Oc={kernelName:Wr,backendName:`webgl`,kernelFunc:Y};function kc(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.makeTensorInfo(r.shape,`complex64`),o=n.texData.get(a.dataId);return o.complexTensorInfos={real:Y({inputs:{x:r},backend:n}),imag:Y({inputs:{x:i},backend:n})},a}var Ac={kernelName:_,backendName:`webgl`,kernelFunc:kc},jc=`return (a < 0.) ? b * a : a;`,Mc=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Nc(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r,o=n.makeTensorInfo([],`float32`,be(a,`float32`)),s=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Dc(Mc,i.shape,o.shape):new Tc(jc,i.shape,o.shape),c=n.runWebGLProgram(s,[i,o],`float32`);return n.disposeIntermediateTensorInfo(o),c}var Pc={kernelName:S,backendName:`webgl`,kernelFunc:Nc},Fc=`return (a < 0.) ? b * a : a;`,Ic=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Lc(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t,a=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Dc(Ic,r.shape,i.shape):new Tc(Fc,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],`float32`)}var Rc={kernelName:Rt,backendName:`webgl`,kernelFunc:Lc},zc=`if (isnan(x)) return x;`;function X({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:i,backend:a})=>{let{x:o}=i,s=a,c=r||o.dtype;if(s.shouldExecuteOnCPU([o])&&n!=null){let e=n(s.texData.get(o.dataId).values,c);return s.makeTensorInfo(o.shape,c,e)}let l=k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)&&t!=null,u;return u=l?new lc(o.shape,t):new q(o.shape,e),s.runWebGLProgram(u,[o],c)}}function Z({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:i,dtype:a}){return({inputs:o,backend:s})=>{let{a:c,b:l}=o,u=s;if(r&&c.dtype===`complex64`){let t=u.texData.get(c.dataId),n=u.texData.get(l.dataId),[r,i]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,i={dataId:n.dataId,dtype:n.dtype,shape:c.shape},a={dataId:r.dataId,dtype:r.dtype,shape:l.shape},o=new Tc(e,c.shape,l.shape);return u.runWebGLProgram(o,[i,a],lt(n.dtype,r.dtype))}),a=kc({inputs:{real:r,imag:i},backend:u});return u.disposeIntermediateTensorInfo(r),u.disposeIntermediateTensorInfo(i),a}let d=a||lt(c.dtype,l.dtype);if((c.dtype===`string`||l.dtype===`string`||u.shouldExecuteOnCPU([c,l]))&&i!=null){let e=u.texData.get(c.dataId).values,t=u.texData.get(l.dataId).values,n=c.dtype===`string`?Sn(e):e,r=c.dtype===`string`?Sn(t):t,[a,o]=i(c.shape,l.shape,n,r,d),s=u.makeTensorInfo(o,d),f=u.texData.get(s.dataId);return f.values=a,s}let f=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)&&t!=null,p;return p=f?new Dc(t,c.shape,l.shape,n):new Tc(e,c.shape,l.shape),u.runWebGLProgram(p,[c,l],d)}}function Bc(e,t=!1){if(e===`linear`)return t?ic:Zs;if(e===`relu`)return t?oc:ec;if(e===`elu`)return t?ac:$s;if(e===`relu6`)return t?sc:tc;if(e===`prelu`)return t?Ic:Fc;if(e===`leakyrelu`)return t?Mc:jc;if(e===`sigmoid`)return t?cc:rc;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var Vc=class{constructor(e,t,n,r=!1,i=!1,a=!1,o=null,s=!1,c=!1){this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=G(this.outputShape.length);let l=r?e[1]:e[2],u=Math.ceil(l/2),d=r?`i * 2, rc.y`:`rc.y, i * 2`,f=i?`rc.z, i * 2`:`i * 2, rc.z`,p=r?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],m=i?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],h=``,g=``;o&&(h=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:c?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,g=`result = activation(result);`);let _=a?`result += getBiasAtOutCoords();`:``;a&&this.variableNames.push(`bias`),s&&this.variableNames.push(`preluActivationWeights`),c&&this.variableNames.push(`leakyreluAlpha`);let v=`rc.x`,y=`rc.x`;e[0]<t[0]?v=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(y=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${v};
        int batchB = ${y};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${_}

        ${g}

        setOutput(result);
      }
    `}},Hc={REAL:`return areal * breal - aimag * bimag;`,IMAG:`return areal * bimag + aimag * breal;`},Uc=class{constructor(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=A(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}},Wc=`return a * b;`;function Gc(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=lt(r.dtype,i.dtype);if(r.dtype===`complex64`){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),a=new Uc(Hc.REAL,r.shape,i.shape),o=new Uc(Hc.IMAG,r.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],c=n.runWebGLProgram(a,s,`float32`),l=n.runWebGLProgram(o,s,`float32`),u=kc({inputs:{real:c,imag:l},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),u}if(n.shouldExecuteOnCPU([r,i])){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),[o,s]=fs(r.shape,i.shape,e.values,t.values,a),c=n.makeTensorInfo(s,a),l=n.texData.get(c.dataId);return l.values=o,c}let o;return o=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Dc(Wc,r.shape,i.shape):new Tc(Wc,r.shape,i.shape),n.runWebGLProgram(o,[r,i],a)}var Kc={kernelName:ve,backendName:`webgl`,kernelFunc:Gc};function qc(e,t,n){let r=[Hi(e.shape),...Ui(e.shape)],i={dtype:e.dtype,shape:r,dataId:e.dataId},a=new Hs([Hi(t),...Ui(t)],r),o=[r],s=n.runWebGLProgram(a,[i],e.dtype,o,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}function Q(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=n,s=E(i.shape),c=at(a,s),l=E(c);M(s===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=o.texData.get(i.dataId);return u.isPacked&&!qi(i.shape,c)&&!(u.texture!==null&&qi(u.shape,c))?qc(i,c,o):(o.incRef(i.dataId),{dataId:i.dataId,shape:c,dtype:i.dtype})}var Jc={kernelName:pn,backendName:`webgl`,kernelFunc:Q},Yc=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=Math.floor(n/4)*4,s=n%4,c=`sumValue += dot(values, ones);`;if(t!=null){let e=1/t;c=`sumValue += dot(values * ${b(e)?e.toPrecision(2):e}, ones);`}let l=``;i%n>0&&(l=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${o};
        if (${s===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${s===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${s===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}},Xc=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);let l=Math.floor(n/4)*4,u=n%4,d=`
      if (${t===`sum`}) {
        sumValue += dot(values, ones);
      } else if (${t===`prod`}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${t===`min`} || ${t===`max`}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);let p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${l};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}};function Zc(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let n=t.length?t[t.length-1].outSize:e[1],r=he(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function Qc(e,t,n,r){let i=Zc(e.shape),a=e;for(let o=0;o<i.length;o++){let{inSize:s,windowSize:c,outSize:l}=i[o],u,d;u=n===`mean`?o===0?new Yc({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},s):new Yc({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l}):new Xc({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},n),d=a,a=r.runWebGLProgram(u,[a],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return a}var $c=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=W(this.rank),i=el(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${i}));
    }
    `}};function el(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}var tl=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=W(this.rank),i=zs(`rc`,this.rank),a=Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=i[e];let o=`vec2(${a.slice(-2).join()})`,s=`++${i[this.rank-1]} < ${n[this.rank-1]}`,c=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${s}) {
        result[1] = ${c};
      }
      --${i[this.rank-1]};
      if(++${i[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${c};
        if(${s}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};function nl(e,t,n){let r=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new tl(e.shape,t):new $c(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}function rl(e,t,n,r){let i=t,a=e.shape.length,o=D(i,e.shape),s=o,c=F(s,a),l=c!=null,u=e;l&&(u=nl(e,c,r),s=j(s.length,a)),O(`sum`,s,a);let[d,f]=xr(u.shape,s),p=d;n&&(p=Un(d,o));let m=E(f),h=E(e.shape)/m,g=Q({inputs:{x:u},attrs:{shape:[h,m]},backend:r}),_=Qc(g,se(e.dtype),`sum`,r),v=Q({inputs:{x:_},attrs:{shape:p},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(_),l&&r.disposeIntermediateTensorInfo(u),v}function il(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;return rl(i,a,o,n)}var al={kernelName:`Sum`,backendName:`webgl`,kernelFunc:il};function $(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{perm:a}=r,o=n,s=i.shape.length,c=Array(s);for(let e=0;e<c.length;e++)c[e]=i.shape[a[e]];let l;if(o.shouldExecuteOnCPU([i])){let e=o.texData.get(i.dataId).values,t=Ls(e,i.shape,i.dtype,a,c);l=o.makeTensorInfo(c,i.dtype);let n=o.texData.get(l.dataId);n.values=t}else l=nl(i,a,o);return l}var ol={kernelName:Xn,backendName:`webgl`,kernelFunc:$};function sl({a:e,b:t,transposeA:n,transposeB:r,backend:i,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:c=null}){let l=e.shape.length,u=t.shape.length,d=n?e.shape[l-2]:e.shape[l-1],f=r?t.shape[u-1]:t.shape[u-2],p=n?e.shape[l-1]:e.shape[l-2],m=r?t.shape[u-2]:t.shape[u-1],h=e.shape.slice(0,-2),g=t.shape.slice(0,-2),_=E(h),v=E(g),y=A(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,m]);M(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let b=n?[_,d,p]:[_,p,d],x=r?[v,m,f]:[v,f,m],S=Q({inputs:{x:e},backend:i,attrs:{shape:b}}),C=Q({inputs:{x:t},backend:i,attrs:{shape:x}}),w=[S,C],ee=Math.max(_,v),te=n?S.shape[1]:S.shape[2],ne=a!=null,re=o!=null,T=c===`leakyrelu`,ie=c==null?null:Bc(c,!0),ae=ne||re||T||ie!=null,oe;if((p===1||m===1)&&te>1e3&&ae===!1){let e=S,t=C;n&&(e=$({inputs:{x:S},backend:i,attrs:{perm:[0,2,1]}}),w.push(e)),r&&(t=$({inputs:{x:C},backend:i,attrs:{perm:[0,2,1]}}),w.push(t));let a=m!==1,o=m===1,s=e;a&&(s=Q({inputs:{x:e},backend:i,attrs:{shape:[ee,te,1]}}),w.push(s));let c=m===1?2:1,l=t;o&&(l=Q({inputs:{x:t},backend:i,attrs:{shape:[ee,1,te]}}),w.push(l));let u=Gc({inputs:{a:s,b:l},backend:i});oe=il({inputs:{x:u},backend:i,attrs:{axis:c,keepDims:!0}}),w.push(u)}else{let c=lt(e.dtype,t.dtype),l=new Vc(b,x,[ee,p,m],n,r,ne,ie,re,T),u=[S,C];if(a!=null&&u.push(a),re&&u.push(o),T){let e=i.makeTensorInfo([],`float32`,be(s,`float32`));u.push(e),w.push(e)}oe=i.runWebGLProgram(l,u,c)}let se=Q({inputs:{x:oe},backend:i,attrs:{shape:y}});w.push(oe);for(let e of w)i.disposeIntermediateTensorInfo(e);return se}function cl(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r;return sl({a:i,b:a,transposeA:c,transposeB:l,backend:n,bias:o,preluActivationWeights:s,leakyreluAlpha:d,activation:u})}var ll={kernelName:nn,backendName:`webgl`,kernelFunc:cl},ul=`return abs(x);`;function dl(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!==`complex64`){let e=Cs(n.texData.get(r.dataId).values);return n.makeTensorInfo(r.shape,r.dtype,e)}let i;return i=k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new lc(r.shape,ul):new q(r.shape,ul),n.runWebGLProgram(i,[r],r.dtype)}var fl={kernelName:`Abs`,backendName:`webgl`,kernelFunc:dl},pl=X({opSnippet:J+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`}),ml={kernelName:Gn,backendName:`webgl`,kernelFunc:pl},hl=X({opSnippet:J+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`}),gl={kernelName:ur,backendName:`webgl`,kernelFunc:hl},_l=`return a + b;`,vl={kernelName:`Add`,backendName:`webgl`,kernelFunc:Z({opSnippet:_l,packedOpSnippet:_l,supportsComplex:!0,cpuKernelImpl:Wo})},yl=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}},bl=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}};function xl(e){let{inputs:t,backend:n}=e,r=t;if(r.length===1)return Y({inputs:{x:r[0]},backend:n});if(r.length>k().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`)){let e=Math.floor(r.length/2);return xl({inputs:[xl({inputs:r.slice(0,e),backend:n}),xl({inputs:r.slice(e),backend:n})],backend:n})}let i=r.map(e=>e.dtype).reduce((e,t)=>lt(e,t)),a=r.map(e=>e.shape),o=k().getBool(`WEBGL_PACK`)?new bl(r[0].shape,a):new yl(r[0].shape,a);return n.runWebGLProgram(o,r,i)}var Sl={kernelName:Vt,backendName:`webgl`,kernelFunc:xl};function Cl(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=D(a,i.shape),l=c,u=F(l,s),d=i;u!=null&&(d=$({inputs:{x:i},backend:n,attrs:{perm:u}}),l=j(l.length,s)),O(`all`,l,s);let[f,p]=xr(d.shape,l),m=E(p),h=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=Qc(h,h.dtype,`all`,n),_;if(o){let e=Un(f,c);_=Q({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=Q({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var wl={kernelName:`All`,backendName:`webgl`,kernelFunc:Cl};function Tl(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=D(a,i.shape),l=c,u=F(l,s),d=i;u!=null&&(d=$({inputs:{x:i},backend:n,attrs:{perm:u}}),l=j(l.length,s)),O(`any`,l,s);let[f,p]=xr(d.shape,l),m=E(p),h=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=Qc(h,h.dtype,`any`,n),_;if(o){let e=Un(f,c);_=Q({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=Q({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var El={kernelName:`Any`,backendName:`webgl`,kernelFunc:Tl},Dl=class{constructor(e,t,n){this.variableNames=[`A`];let{windowSize:r,batchSize:i,outSize:a}=e;n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,a];let o=t===`max`?`>`:`<`,s=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${s};
          float candidate = getA(batch, inIdx);
          if (candidate ${o} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}},Ol=class{constructor(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,M(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);let o=this.outputShape,s=o.length,c=W(s),l=K(`coords`,s),u,d;if(a===1){d=s+1;let e=W(d);u=`
        ${e} sourceLocR = ${e}(${l.join()}, 0);
        ++${l[s-1]};
        ${e} sourceLocG = ${e}(${l.join()}, 0);
        ++${l[s-2]};
        ${e} sourceLocA = ${e}(${l.join()}, 0);
        --${l[s-1]};
        ${e} sourceLocB = ${e}(${l.join()}, 0);
        --${l[s-2]};`}else d=s,u=`
        ${c} sourceLocR = coords;
        ++${l[s-1]};
        ${c} sourceLocG = coords;
        ++${l[s-2]};
        ${c} sourceLocA = coords;
        --${l[s-1]};
        ${c} sourceLocB = coords;
        --${l[s-2]};`;let f=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,d),p=`.`+f[d-1],m=f.map(e=>`int `+e),h=K(`sourceLocR`,d-1).concat(`inIdx.r`),g=K(`sourceLocG`,d-1).concat(`inIdx.g`),_=K(`sourceLocB`,d-1).concat(`inIdx.b`),v=K(`sourceLocA`,d-1).concat(`inIdx.a`),y=n===`max`?`greaterThan`:`lessThan`,b=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${_.join()}),
                             getBestIndicesAChannel(${v.join()})));`,x=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${_.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,S=r?``:`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${S}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[s-1]} < ${o[s-1]-1};
        bool hasNextRow = ${l[s-2]} < ${o[s-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${x};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${b}
          vec4 candidate = ${x};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function kl(e,t,n,r=null){let i=t.shape[0],a=t.shape[1];r!=null&&(i=r.shape[0],a=r.shape[1]);let o=he(a),s=new Dl({windowSize:o,inSize:a,batchSize:i,outSize:Math.ceil(a/o)},n,r==null),c=[t];r!=null&&c.push(r);let l=e.runWebGLProgram(s,c,`int32`);if(l.shape[1]===1)return l;let u=kl(e,t,n,l);return e.disposeIntermediateTensorInfo(l),u}function Al(e,t,n,r=null){let i=r==null?t.shape:r.shape,a=i[i.length-1],o=new Ol(i,he(a),n,r==null),s=r==null?[t]:[t,r],c=e.runWebGLProgram(o,s,`int32`);if(c.shape.length===t.shape.length){let r=Al(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function jl(e,t,n,r){let i=[n];if(O(`arg`+r.charAt(0).toUpperCase()+r.slice(1),i,t.shape.length),!k().getBool(`WEBGL_PACK_REDUCE`)||t.shape.length<=2){let n=[],a=e.texData.get(t.dataId),o=a!==null&&a.isPacked,s=t;o&&(s=e.unpackTensor(t),n.push(s));let[c,l]=xr(s.shape,i),u=E(l),d=Q({inputs:{x:s},backend:e,attrs:{shape:[-1,u]}});n.push(d);let f=kl(e,d,r);n.push(f);let p=Q({inputs:{x:f},backend:e,attrs:{shape:c}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return Al(e,t,r)}function Ml(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=D(a,i.shape),s=F(o,i.shape.length),c=i,l=[];s!=null&&(c=$({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=j(o.length,c.shape.length)),O(`argMax`,[o[0]],c.shape.length);let u=jl(n,c,o[0],`max`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var Nl={kernelName:Qt,backendName:`webgl`,kernelFunc:Ml};function Pl(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=D(a,i.shape),s=F(o,i.shape.length),c=i,l=[];s!=null&&(c=$({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=j(o.length,c.shape.length)),O(`argMin`,[o[0]],c.shape.length);let u=jl(n,c,o[0],`min`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var Fl={kernelName:Fn,backendName:`webgl`,kernelFunc:Pl},Il=X({opSnippet:J+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`}),Ll={kernelName:Er,backendName:`webgl`,kernelFunc:Il},Rl=X({opSnippet:J+`return log(x + sqrt(x * x + 1.0));`}),zl={kernelName:rn,backendName:`webgl`,kernelFunc:Rl},Bl=X({opSnippet:J+`
  return atan(x);
`}),Vl={kernelName:dn,backendName:`webgl`,kernelFunc:Bl},Hl=Z({opSnippet:wc+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Ec+`
  return result;
`}),Ul={kernelName:er,backendName:`webgl`,kernelFunc:Hl},Wl=X({opSnippet:J+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`}),Gl={kernelName:zn,backendName:`webgl`,kernelFunc:Wl},Kl=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let m=t===`avg`,h=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,_=`0.0`;if(m||(_=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${u};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?i?h:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / max(count, 1.0)`);let y=Math.floor(a/4)*4,b=a%4,x=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${_};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${x}
          }

          int xC = xCCorner + ${y};
          if (${b===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${x}
          }
        }
        setOutput(${v});
      }
    `}},ql=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideDepth,s=e.strideHeight,c=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,h=e.padInfo.front,g=e.padInfo.top,_=e.padInfo.left;this.outputShape=e.outShape;let v=t===`avg`,y=`0.0`;if(v||(y=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${c});
        const ivec3 pads = ivec3(${h}, ${g}, ${_});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?i?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(b=`avgValue / max(count, 1.0)`);let x=Math.floor(a/4)*4,S=a%4,C=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${c});
      const ivec3 pads = ivec3(${h}, ${g}, ${_});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${x};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${C}
            }
          }
        }
        setOutput(${b});
      }
    `}};function Jl(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;sa(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;M(Yt(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Lt(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&P(l.inShape,l.outShape))return Y({inputs:{x:i},backend:n});let u=new Kl(l,`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var Yl={kernelName:bn,backendName:`webgl`,kernelFunc:Jl};function Xl(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r,u=new ql(Jn(i.shape,a,o,[1,1,1],s,c,l),`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var Zl={kernelName:gn,backendName:`webgl`,kernelFunc:Xl},Ql=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${u});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},$l=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${h});
      const float avgMultiplier = float(${g});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${i}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function eu(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=new $l(Jn(o.shape,s,c,[1,1,1],l,u));return n.runWebGLProgram(d,[i],o.dtype)}var tu={kernelName:Pt,backendName:`webgl`,kernelFunc:eu};function nu(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;sa([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=new Ql(Lt(o.shape,s,c,1,l));return n.runWebGLProgram(u,[i],o.dtype)}var ru={kernelName:Ar,backendName:`webgl`,kernelFunc:nu};function iu(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;return sl({a:i,b:a,transposeA:o,transposeB:s,backend:n})}var au={kernelName:Ur,backendName:`webgl`,kernelFunc:iu},ou=class{constructor(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],A(e,t),A(e,n);let o=`0.0`;r!=null&&(A(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`1.0`;i!=null&&(A(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}},su=class{constructor(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],A(e,t),A(e,n);let o=`vec4(0.0)`;r!=null&&(A(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`vec4(1.0)`;i!=null&&(A(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}},cu={kernelName:an,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:i,variance:a,offset:o,scale:s}=e;M(i.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),M(o==null||i.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),M(s==null||i.shape.length===s.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let{varianceEpsilon:c}=n;c??=.001;let l=[r,i,a],u=null;o!=null&&(u=o.shape,l.push(o));let d=null;s!=null&&(d=s.shape,l.push(s));let f=k().getBool(`WEBGL_PACK_NORMALIZATION`)?new su(r.shape,i.shape,a.shape,u,d,c):new ou(r.shape,i.shape,a.shape,u,d,c);return t.runWebGLProgram(f,l,l[0].dtype)}},lu=class{constructor(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;let t=W(this.rank);this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let n=du(this.rank),r;r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${e.map((e,t)=>`sourceLoc.${uu[t]} = start[${t}] + coords.${uu[t]};`).join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${n}));
      }
    `}},uu=[`x`,`y`,`z`,`w`,`u`,`v`];function du(e){if(e===1)return`sourceLoc`;if(e<=6)return uu.slice(0,e).map(e=>`sourceLoc.`+e).join(`,`);throw Error(`Slicing for rank ${e} is not yet supported`)}var fu=class{constructor(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let t=W(this.rank),n=K(`coords`,this.rank),r=K(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(${r.slice(-2).join()})`,a=`getChannel(getSource(${r.join()}), ${i})`,o=`
      result.x = ${a};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${a};
        --${r[this.rank-1]};
      }
    `,s=this.rank===1?``:`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${a};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${a};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}};function pu(e,t,n,r){let i=r.texData.get(e.dataId),a=r.makeTensorInfo(n,e.dtype),o=r.texData.get(a.dataId);Object.assign(o,i),o.refCount=1,o.shape=n,o.dtype=e.dtype;let s=En(t,kr(e.shape));i.slice&&(s+=i.slice.flatOffset),o.slice={flatOffset:s,origDataId:i.slice&&i.slice.origDataId||e.dataId};let c=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,c+1),a}function mu(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r,[s,c]=yr(i,a,o);if(fr(i,s,c),E(c)===0)return n.makeTensorInfo(c,i.dtype,[]);if(n.shouldExecuteOnCPU([i])||i.dtype===`string`){let e=ws(n.texData.get(i.dataId).values,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,e)}let{isPacked:l}=n.texData.get(i.dataId),u=Qn(i.shape,s,c);if(l||!u){let e=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new fu(c):new lu(c),t=[s];return n.runWebGLProgram(e,[i],i.dtype,t)}return n.uploadToGPU(i.dataId),pu(i,s,c,n)}var hu={kernelName:Me,backendName:`webgl`,kernelFunc:mu},gu={kernelName:Kt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;M(i.shape.length<=4,()=>`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=ct(i.shape,a,s),l=oe(c.length,a.length),u=yt(i.shape,a,s),d=re(o,a.length),f=ye(u,o,a.length),p=[],m=Q({inputs:{x:i},backend:n,attrs:{shape:c}}),h=$({inputs:{x:m},backend:n,attrs:{perm:l}}),g=Q({inputs:{x:h},backend:n,attrs:{shape:u}}),_=mu({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(h),p.push(g),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}};function _u(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=Go(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,s)}var vu={kernelName:zr,backendName:`webgl`,kernelFunc:_u},yu=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,bu=`
  return float(int(a.r) & int(b.r));
`;function xu(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`),o=k().getNumber(`WEBGL_VERSION`);if(n.shouldExecuteOnCPU([r,i])||o===1){let e=n.texData.get(r.dataId).values,t=n.texData.get(i.dataId).values,[a,o]=qo(r.shape,i.shape,e,t,r.dtype),s=n.makeTensorInfo(o,r.dtype),c=n.texData.get(s.dataId);return c.values=a,s}let s;return s=a?new Dc(yu,r.shape,i.shape,!1):new Tc(bu,r.shape,i.shape),n.runWebGLProgram(s,[r,i],r.dtype)}var Su={kernelName:tt,backendName:`webgl`,kernelFunc:xu};function Cu(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.readSync(r.dataId),o=n.readSync(i.dataId),s=A(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var wu={kernelName:m,backendName:`webgl`,kernelFunc:Cu},Tu=Z({opSnippet:`return float(a != b);`,cpuKernelImpl:ms,dtype:`bool`}),Eu={kernelName:r,backendName:`webgl`,kernelFunc:Tu};function Du(e){let{inputs:t,backend:n}=e,{input:r}=t;return Y({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}var Ou={kernelName:tn,backendName:`webgl`,kernelFunc:Du},ku=`return float(int(x));`;function Au(e,t){let n=new q(e.shape,ku),r=t.runWebGLProgram(n,[e],`int32`);return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}function ju(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return Y({inputs:{x:i},backend:n});let e=_r(i.shape),t=ju({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=kc({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=Du({inputs:{input:i},backend:n}),t=ju({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!et(i.dtype,a)){let e=Y({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(n.shouldExecuteOnCPU([i])){let e=n.texData.get(i.dataId).values,[t,r,o]=Jo(e,i.shape,i.dtype,a);return n.makeTensorInfo(t,r,o)}if(a===`int32`)return Au(i,n);if(a===`bool`){let e=n.makeTensorInfo([],`bool`,Rr(`bool`,1)),t=Tu({inputs:{a:i,b:e},backend:n});return n.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${a}`)}var Mu={kernelName:Fr,backendName:`webgl`,kernelFunc:ju},Nu=`return ceil(x);`,Pu=X({opSnippet:Nu,packedOpSnippet:Nu,cpuKernelImpl:Yo}),Fu={kernelName:ot,backendName:`webgl`,kernelFunc:Pu},Iu=class{constructor(e){this.variableNames=[`A`],this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}},Lu=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function Ru(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{clipValueMin:a,clipValueMax:o}=r,s;s=k().getBool(`WEBGL_PACK_CLIP`)?new Lu(i.shape):new Iu(i.shape);let c=[[a],[o]];return n.runWebGLProgram(s,[i],i.dtype,c)}var zu={kernelName:x,backendName:`webgl`,kernelFunc:Ru},Bu=class{constructor(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function Vu(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function Hu(e){let{inputs:t,backend:n}=e,{x:r}=t,i=n.texData.get(r.dataId),a=new Bu(r.shape),o=[Vu(r,i.complexTensorInfos.real),Vu(r,i.complexTensorInfos.imag)];return n.runWebGLProgram(a,o,o[0].dtype)}var Uu={kernelName:Re,backendName:`webgl`,kernelFunc:Hu},Wu=class{constructor(e){this.outputShape=[],this.outputShape=Cr(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,i=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${i}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}},Gu=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Cr(e,t);let n=this.outputShape,r=n.length,i=W(r),a=K(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let n=1;n<s.length;n++)s[n]=s[n-1]+e[n][t];let c=o[t],l=o.slice(-2),u=o.join(),d=`if (${c} < ${s[0]}) {
        return getChannel(
            getT0(${u}), vec2(${l.join()}));
        }`;for(let e=1;e<s.length;e++){let t=s[e-1];d+=`
        if (${c} < ${s[e]}  && ${c} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${Ku(o,c,t)}),
            vec2(${Ku(l,c,t)}));
        }`}let f=s.length,p=s[s.length-1];d+=`
        return getChannel(
          getT${f}(${Ku(o,c,p)}),
          vec2(${Ku(l,c,p)}));`,this.userCode=`
      float getValue(${o.map(e=>`int `+e)}) {
        ${d}
      }

      void main() {
        ${i} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[r-1]} = ${a[r-1]} + 1;
        if (${a[r-1]} < ${n[r-1]}) {
          result.g = getValue(${a});
        }

        ${a[r-2]} = ${a[r-2]} + 1;
        if (${a[r-2]} < ${n[r-2]}) {
          result.a = getValue(${a});
        }

        ${a[r-1]} = ${a[r-1]} - 1;
        if (${a[r-2]} < ${n[r-2]} &&
            ${a[r-1]} < ${n[r-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}};function Ku(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}function qu(e){let{inputs:t,backend:n}=e,{input:r}=t;return Y({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}var Ju={kernelName:qt,backendName:`webgl`,kernelFunc:qu};function Yu(e,t,n){let r=e[0].dtype;if(r===`complex64`){let r=e.map(e=>Du({inputs:{input:e},backend:n})),i=e.map(e=>qu({inputs:{input:e},backend:n})),a=Yu(r,t,n),o=Yu(i,t,n),s=kc({inputs:{real:a,imag:o},backend:n});return r.forEach(e=>n.disposeIntermediateTensorInfo(e)),i.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),s}let i=n.shouldExecuteOnCPU(e);if(r===`string`&&(i=!0),i){let i=e.map(e=>{let r=[-1,E(e.shape.slice(t))];return Q({inputs:{x:e},backend:n,attrs:{shape:r}})}),a=Xo(i.map(e=>({vals:n.readSync(e.dataId),shape:e.shape})),Cr(i.map(e=>e.shape),1),r,i[0].shape[0]===1),o=Cr(e.map(e=>e.shape),t),s=n.makeTensorInfo(o,r,a);return i.forEach(e=>n.disposeIntermediateTensorInfo(e)),s}let a=e.filter(e=>E(e.shape)>0),o=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&a[0].shape.length>1;if(a.length===1){let t=o?new q(e[0].shape,nc):new lc(e[0].shape,nc);return n.runWebGLProgram(t,e,r)}let s=k().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`);if(a.length>s){let e=[];for(let r=0;r<a.length;r+=s){let i=a.slice(r,r+s);e.push(Yu(i,t,n))}let r=Yu(e,t,n);for(let t of e)n.disposeIntermediateTensorInfo(t);return r}if(o){let e=new Gu(a.map(e=>e.shape),t);return n.runWebGLProgram(e,a,r)}let{tensors2D:c,outShape:l}=Xu(a,t,n),u=new Wu(c.map(e=>e.shape)),d=n.runWebGLProgram(u,c,r);c.forEach(e=>n.disposeIntermediateTensorInfo(e));let f=Q({inputs:{x:d},attrs:{shape:l},backend:n});return n.disposeIntermediateTensorInfo(d),f}function Xu(e,t,n){let r=Cr(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>Q({inputs:{x:e},attrs:{shape:[-1,E(e.shape.slice(t))]},backend:n})),outShape:r}}function Zu(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=D(i,t[0].shape)[0],o=t.map(e=>e.shape);ln(o,a);let s=Cr(t.map(e=>e.shape),a);if(E(s)===0)return n.makeTensorInfo(s,t[0].dtype,[]);let c=t.filter(e=>E(e.shape)>0);return c.length===1?Y({inputs:{x:c[0]},backend:n}):Yu(c,a,n)}var Qu={kernelName:jn,backendName:`webgl`,kernelFunc:Zu},$u=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let a=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,h=e.dataFormat===`channelsLast`,g=h?1:2,_=h?2:3,v=h?3:1,y=``,b=``;n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,b=`result = activation(result);`);let x=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${s}, ${c});
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${_}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${x}
        ${b}
        setOutput(result);
      }
    `}},ed=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${i}, ${a}, ${o});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},td=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=G(this.outputShape.length);let a=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,c=e.filterHeight,l=e.filterWidth,u=l,d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<l;e++)d+=`
           vec4 xTexelC${e*2};
           int xTexelC${e*2}Ready;
           vec4 xTexelC${e*2+1};
           int xTexelC${e*2+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<l;e++)d+=`
           xTexelC${e*2} = vec4(0.0);
           xTexelC${e*2}Ready = 0;
           xTexelC${e*2+1} = vec4(0.0);
           xTexelC${e*2+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=t*2;if(d+=`
           xC = xCCorner + ${n*s};
           `,o===1){if(n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,d+=s===1&&n>0?`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<l)){let e=a%2==0?Ne(s):s;s%2==0&&a%2==1||s%2!=0&&a%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,d+=s>1?`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):d+=e===1?`
                     xC${n+1} = xTexelC${n};
                     `:`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<l&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<l&&(d+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<l&&(d+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<l&&(d+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f=``,p=``;n&&(f=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:i?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,p=`result = activation(result);`);let m=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${p}
         setOutput(result);
       }
     `}},nd=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec4`},{name:`pad`,type:`ivec2`},{name:`stride`,type:`ivec2`},{name:`dilation`,type:`ivec2`},{name:`inChannels`,type:`int`},{name:`itemsPerBlockRow`,type:`int`},{name:`outWidth`,type:`int`}],this.outputShape=e,this.enableShapeUniforms=G(this.outputShape.length);let{dataFormat:n}=t,r=U(),i=n===`channelsLast`,a=i?1:2,o=i?2:3,s=this.enableShapeUniforms?`if(blockIndex < outShape[2] && pos < outShape[1]) {`:`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,c=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)c+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${i}) {
                  innerDims = vec2(d1, ch);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}};function rd(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function id({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let c=e.shape,l=r.texData.get(e.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],f=n.outChannels,p=n.dataFormat===`channelsLast`,m,h=[];if(a!=null){let e=rd(a.shape,p);e!=null&&(a=Q({inputs:{x:a},backend:r,attrs:{shape:e}}),h.push(a))}if(i!=null){let e=rd(i.shape,p);e!=null&&(i=Q({inputs:{x:i},backend:r,attrs:{shape:e}}),h.push(i))}if(!((d===1||f===1)&&u>1e3)&&l.isPacked&&p&&l.texture!=null&&c[2]%2!=0&&P(l.shape.slice(-3),c.slice(-3))){let u=c[0]*c[1]*(c[2]+1),d={dataId:e.dataId,shape:[1,u,n.inChannels],dtype:e.dtype},f=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,M(qi(l.shape,d.shape),()=>`packed reshape ${l.shape} to ${d.shape} isn't free`);let p=Q({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});h.push(p);let g=sl({a:d,b:p,backend:r,transposeA:!1,transposeB:!1,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o}),_=r.texData.get(g.dataId);M(_.isPacked,()=>`batchMatMul result is expected to be packed`),l.shape=f,_.shape=n.outShape,m=Y({inputs:{x:g},backend:r}),m.shape=n.outShape,h.push(g)}else{let c=n.outHeight*n.outWidth,l=Q({inputs:{x:e},backend:r,attrs:{shape:p?[n.batchSize,c,n.inChannels]:[n.batchSize,n.inChannels,c]}}),u=Q({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=sl({a:p?l:u,b:p?u:l,transposeA:!p,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o});m=Q({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),h.push(l),h.push(u),h.push(d)}for(let e of h)r.disposeIntermediateTensorInfo(e);return m}function ad({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:f,dataFormat:p}=n,m=p===`channelsLast`,h=c*l*u,g=f*d,_=[n.batchSize,h,g],v=[];if(a!=null){let e=rd(a.shape,m);e!=null&&(a=Q({inputs:{x:a},backend:r,attrs:{shape:e}}),v.push(a))}if(i!=null){let e=rd(i.shape,m);e!=null&&(i=Q({inputs:{x:i},backend:r,attrs:{shape:e}}),v.push(i))}let y=Q({inputs:{x:t},backend:r,attrs:{shape:[1,h,E(t.shape)/h]}});v.push(y);let b=new nd(_,n),x=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(b,[e],`float32`,x),C=Q({inputs:{x:S},backend:r,attrs:{shape:_}});v.push(S),v.push(C);let w=i!=null,ee=a!=null,te=s===`leakyrelu`,ne=s?Bc(s,!0):null,re=new Vc(m?C.shape:y.shape,m?y.shape:C.shape,m?[n.batchSize,g,n.outChannels]:[n.batchSize,n.outChannels,g],!0,!1,w,ne,ee,te),T=m?[C,y]:[y,C];if(i&&T.push(i),ee&&T.push(a),te){let e=r.makeTensorInfo([],`float32`,be(o,`float32`));T.push(e),v.push(e)}let ie=r.runWebGLProgram(re,T,`float32`),ae=Q({inputs:{x:ie},backend:r,attrs:{shape:n.outShape}});v.push(ie);for(let e of v)r.disposeIntermediateTensorInfo(e);return ae}function od(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r,d=mr(c),f=N(i.shape,a.shape,o,l,s,u,!1,d),p;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type===`SAME`||f.padInfo.type===`VALID`))p=id({x:i,filter:a,convInfo:f,backend:n});else if(f.strideWidth<=2&&d===`channelsLast`&&k().getBool(`WEBGL_EXP_CONV`)){let e=new td(f),t=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];p=n.runWebGLProgram(e,[i,a],`float32`,t)}else if(k().getBool(`WEBGL_CONV_IM2COL`))p=ad({x:i,filter:a,convInfo:f,backend:n});else{let e=new $u(f);p=n.runWebGLProgram(e,[i,a],`float32`)}let m=Q({inputs:{x:p},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(p),m}var sd={kernelName:a,backendName:`webgl`,kernelFunc:od},cd=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${a?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},ld=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},ud=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${i};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},dd=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${c}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${i}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function fd(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r,d=mr(c),f=new cd(N(i.shape,u,o,1,s,l,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var pd={kernelName:Dn,backendName:`webgl`,kernelFunc:fd},md=class{constructor(e){this.variableNames=[`dy`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`strides`,type:`vec2`}],this.outputShape=e.inShape,this.enableShapeUniforms=G(this.outputShape.length);let t=e.filterHeight,n=e.filterWidth,r=t-1-e.padInfo.top,i=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            int wCPerm = ${n} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function hd(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r,d=mr(l),f=N(o,a.shape,s,1,c,u,!1,d);if(k().getBool(`WEBGL_PACK_CONV2DTRANSPOSE`)&&d===`channelsLast`){let e=[[f.strideHeight,f.strideWidth]],t=new md(f);return n.runWebGLProgram(t,[i,a],`float32`,e)}{let e=new ld(f);return n.runWebGLProgram(e,[i,a],`float32`)}}var gd={kernelName:Ae,backendName:`webgl`,kernelFunc:hd};function _d(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=new ed(sr(i.shape,a.shape,o,c,s));return n.runWebGLProgram(l,[i,a],`float32`)}var vd={kernelName:Pe,backendName:`webgl`,kernelFunc:_d};function yd(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r,l=new ud(sr(i.shape,c,o,1,s));return n.runWebGLProgram(l,[i,a],`float32`)}var bd={kernelName:Ue,backendName:`webgl`,kernelFunc:yd};function xd(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r,l=new dd(sr(c,a.shape,s,1,o));return n.runWebGLProgram(l,[i,a],`float32`)}var Sd={kernelName:ne,backendName:`webgl`,kernelFunc:xd},Cd={kernelName:`Cos`,backendName:`webgl`,kernelFunc:X({opSnippet:zc+`
  return cos(x);
`,packedOpSnippet:`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Ec}
  return result;
`})},wd=X({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),Td={kernelName:Te,backendName:`webgl`,kernelFunc:wd},Ed=class{constructor(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];let[a,o,s,c]=e,[l]=t,[u,d]=n;this.outputShape=[l,u,d,c];let f=+(r===`bilinear`),[p,m]=[`${o-1}.0`,`${s-1}.0`],[h,g,_]=u>1?[`${(o-1)/(u-1)}`,`(y2-y1) * height_ratio`,`y1*${p} + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * ${p}`],[v,y,b]=d>1?[`${(s-1)/(d-1)}`,`(x2-x1) * width_ratio`,`x1*${m} + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${v});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${y};

        float in_y = ${_};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${i}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${i}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}},Dd={kernelName:Xe,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,u=new Ed(i.shape,a.shape,s,c,l);return n.runWebGLProgram(u,[i,a,o],`float32`)}},Od;(function(e){e.Prod=`*`,e.Sum=`+`})(Od||={});var kd=class{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=[`x`],this.customUniforms=[{name:`index`,type:`float`}];let i=this.outputShape.length,a=this.op===Od.Prod?`1.0`:`0.0`,o=n?a:`getX(${Ad(i,`coords`,this.op)})`,s=this.outputShape[this.outputShape.length-1],c=``,l=``;n?(c=r?`end != ${s-1}`:`end != 0`,l=r?`end + 1`:`end - 1`):(c=r?`end + pow2 < ${s}`:`end >= pow2`,l=r?`end + pow2`:`end - pow2`),this.userCode=`
      void main() {
        ${W(i)} coords = getOutputCoords();
        int end = ${jd(i,`coords`,this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${jd(i,`coords`,this.op)} = idx;
          val ${this.op}= getX(${Ad(i,`coords`,this.op)});
        }
        setOutput(val);
      }
    `}};function Ad(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function jd(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function Md(e,t,n,r,i,a){let o=t.shape.length,s=F([r],o),c=t;s!=null&&(c=$({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=j(1,o)[0];if(l!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let u=c.shape[l],d=Y({inputs:{x:c},backend:n});for(let t=0;t<=Math.ceil(Math.log2(u))-1;t++){let r=new kd(e,c.shape,!1,a),i=[[t]],o=d;d=n.runWebGLProgram(r,[d],d.dtype,i),n.disposeIntermediateTensorInfo(o)}if(i){let t=new kd(e,c.shape,i,a),r=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(r)}if(s!=null){let e=zt(s),t=$({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),t}return d}function Nd(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return Md(Od.Prod,i,n,a,o,s)}var Pd={kernelName:Yr,backendName:`webgl`,kernelFunc:Nd};function Fd(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return Md(Od.Sum,i,n,a,o,s)}var Id={kernelName:u,backendName:`webgl`,kernelFunc:Fd};function Ld(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=Go(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,e)}if(i.shape.length===2){let e=Ko(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var Rd={kernelName:_t,backendName:`webgl`,kernelFunc:Ld},zd=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`}getWidthCoordString(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`}getDepthCoordString(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`}getOutputDepthSize(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`}};function Bd(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r,s=i.shape[0],c=o===`NHWC`?i.shape[1]:i.shape[2],l=o===`NHWC`?i.shape[2]:i.shape[3],u=o===`NHWC`?i.shape[3]:i.shape[1],d=c*a,f=l*a,p=u/(a*a),m=new zd(o===`NHWC`?[s,d,f,p]:[s,p,d,f],a,o);return n.runWebGLProgram(m,[i],i.dtype)}var Vd={kernelName:le,backendName:`webgl`,kernelFunc:Bd},Hd=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=G(this.outputShape.length);let a=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels,c=``,l=``;n&&(c=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l=`result = activation(result);`);let u=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${u}
        ${l}
        setOutput(result);
      }
    `}},Ud=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=G(this.outputShape.length);let a=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)f+=`
          vec4 xTexelC${e*2};
          int xTexelC${e*2}Ready;
          vec4 xTexelC${e*2+1};
          int xTexelC${e*2+1}Ready;
          vec4 xC${e};`;f+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let e=0;e<u;e++)f+=`
          xTexelC${e*2} = vec4(0.0);
          xTexelC${e*2}Ready = 0;
          xTexelC${e*2+1} = vec4(0.0);
          xTexelC${e*2+1}Ready = 0;
          xC${e} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){let t=e*2;if(f+=`
          xC = xCCorner + ${t*c};
          `,s===1){if(t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,f+=c===1&&t>0?`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<u)){let e=o%2==0?Ne(c):c;c%2==0&&o%2==1||c%2!=0&&o%2!=1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,f+=c>1?`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):f+=e===1?`
                    xC${t+1} = xTexelC${t};
                    `:`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<u&&(f+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<u&&(f+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<u&&(f+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p=``,m=``;n&&(p=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,m=`result = activation(result);`);let h=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${h}
        ${m}
        setOutput(result);
      }
    `}};function Wd(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r,u=c;u??=[1,1],M(Yt(o,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let d=N(i.shape,a.shape,o,u,s,l,!0),f;f=k().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new Ud(d):new Hd(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[i,a],`float32`,p)}var Gd={kernelName:ft,backendName:`webgl`,kernelFunc:Wd},Kd=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},qd=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function Jd(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r,d=new Kd(N(i.shape,u,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var Yd={kernelName:St,backendName:`webgl`,kernelFunc:Jd};function Xd(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r,d=new qd(N(u,a.shape,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var Zd={kernelName:ie,backendName:`webgl`,kernelFunc:Xd},Qd=class{constructor(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function $d(e){let{inputs:t,backend:n}=e,{x:r}=t,i=[...r.shape,...r.shape],a=E(r.shape),o=Q({inputs:{x:r},backend:n,attrs:{shape:[a]}}),s=new Qd(a),c=n.runWebGLProgram(s,[o],o.dtype),l=Q({inputs:{x:c},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),l}var ef={kernelName:Se,backendName:`webgl`,kernelFunc:$d},tf=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:i,strideWidth:a,filterHeight:o,filterWidth:s,dilationHeight:c,dilationWidth:l}=e,{top:u,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${a});
      const ivec2 pads = ivec2(${u}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function nf(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=Cn(i.shape,a.shape,o,s,`NHWC`,c),u,d=new tf(l);u=n.runWebGLProgram(d,[i,a],`float32`);let f=Q({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),f}var rf={kernelName:ar,backendName:`webgl`,kernelFunc:nf};function af(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Qe(i,a.length);Ir(o.length,c,a);let{path:l,steps:u}=f(s,c),d=u.length,p=null,m=o.length,h=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Mr(m,c[t]),i;rt(e)?i=a[t]:(i=$({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),h.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);P(i.shape,o)||(i=Q({inputs:{x:i},backend:n,attrs:{shape:o}}),h.push(i)),p===null?p=i:(p=Gc({inputs:{a:i,b:p},backend:n}),h.push(p))}e<d-1&&(l[e]>=0&&(p=il({inputs:{x:p},backend:n,attrs:{axis:l[e]-(o.length-m),keepDims:!1}}),h.push(p)),m--)}for(let e of h)e!==p&&n.disposeIntermediateTensorInfo(e);return p}var of={kernelName:jt,backendName:`webgl`,kernelFunc:af},sf={kernelName:`Elu`,backendName:`webgl`,kernelFunc:X({opSnippet:`return (x >= 0.0) ? x : (exp(x) - 1.0);`,packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`})},cf=`return (b >= 0.0) ? a : a * (b + 1.0);`,lf=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,uf={kernelName:n,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n}=e,{dy:r,y:i}=t,a=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Dc(lf,r.shape,i.shape):new Tc(cf,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],r.dtype)}},df=Z({opSnippet:`return float(a == b);`,packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:`bool`,cpuKernelImpl:Zo}),ff={kernelName:cn,backendName:`webgl`,kernelFunc:df},pf={kernelName:`Erf`,backendName:`webgl`,kernelFunc:X({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Kr};
  float a1 = ${Be};
  float a2 = ${C};
  float a3 = ${de};
  float a4 = ${Ce};
  float a5 = ${qe};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`})},mf=X({opSnippet:zc+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:Qo,dtype:`float32`}),hf={kernelName:`Exp`,backendName:`webgl`,kernelFunc:mf};function gf(e){let{inputs:t,attrs:n,backend:r}=e,{dim:i}=n,{input:a}=t,o=a.shape.length,s=a.shape.slice(),c=i;return i<0&&(M(-(o+1)<=i,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+i+1),s.splice(c,0,1),Q({inputs:{x:a},backend:r,attrs:{shape:s}})}var _f={kernelName:dr,backendName:`webgl`,kernelFunc:gf},vf=`return exp(x) - 1.0;`,yf=X({opSnippet:vf,packedOpSnippet:vf,cpuKernelImpl:$o}),bf={kernelName:Tn,backendName:`webgl`,kernelFunc:yf},xf=class{constructor(e,t,n){this.variableNames=[`real`,`imag`];let r=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=n?`${r}.0`:`1.0`,o;if(e===`real`)o=`return real * expR - imag * expI;`;else if(e===`imag`)o=`return real * expI + imag * expR;`;else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${o}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function Sf(e,t,n){let r=n.texData.get(e.dataId),i=E(e.shape),a=e.shape[e.shape.length-1],o=i/a,s=Q({inputs:{x:e},backend:n,attrs:{shape:[o,a]}}),c=s.shape,l=new xf(`real`,c,t),u=new xf(`imag`,c,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:c},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:c}],f=n.runWebGLProgram(l,d,`float32`),p=n.runWebGLProgram(u,d,`float32`),m=kc({inputs:{real:f,imag:p},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p);let h=Q({inputs:{x:m},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(m),h}function Cf(e){let{inputs:t,backend:n}=e,{input:r}=t;return Sf(r,!1,n)}var wf={kernelName:`FFT`,backendName:`webgl`,kernelFunc:Cf},Tf=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:`value`,type:`float`}],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function Ef(e){let{backend:t,attrs:n}=e,{shape:r,value:i}=n,{dtype:a}=n;if(a||=Pr(i),a===`string`){let e=Gt(a,E(r));return e.fill(i),t.makeTensorInfo(r,a,e)}{let e=new Tf(r,i),n=[[i]];return t.runWebGLProgram(e,[],a,n)}}var Df={kernelName:Zn,backendName:`webgl`,kernelFunc:Ef},Of=class{constructor(e){this.variableNames=[`Image`],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}},kf={kernelName:vr,backendName:`webgl`,kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=t,i=new Of(n.shape);return r.runWebGLProgram(i,[n],n.dtype)}},Af=`return floor(x);`,jf=X({opSnippet:Af,packedOpSnippet:Af,cpuKernelImpl:es}),Mf={kernelName:$t,backendName:`webgl`,kernelFunc:jf},Nf=Z({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:`int32`}),Pf={kernelName:In,backendName:`webgl`,kernelFunc:Nf},Ff=class{constructor(e){this.variableNames=[`A`];let t=U(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}},If=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;let t=U(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}},Lf={kernelName:Dr,backendName:`webgl`,kernelFunc:Bf},Rf,zf=k().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);function Bf(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:i}=t,{numChannels:a}=r,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,[c,l]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],u=[l,c],d=[l,c,a];if(s||o){let e=k().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);(Rf==null||e!==zf)&&(zf=e,Rf=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:zf})),Rf.canvas.width=c,Rf.canvas.height=l,Rf.drawImage(i,0,0,c,l),i=Rf.canvas}let f=n.makeTensorInfo(u,`int32`);n.texData.get(f.dataId).usage=L.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),i);let p=k().getBool(`WEBGL_PACK`)?new If(d):new Ff(d),m=n.runWebGLProgram(p,[f],`int32`);return n.disposeData(f.dataId),m}function Vf(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=mr(u),g=N(i.shape,a.shape,c,d,l,f,!1,h),_,v=[],y=o!=null,b=s!=null,x=p===`leakyrelu`,S=()=>{let e=[i,a],t=(e,t)=>{if(t===`NCHW`&&e.shape.length===1&&e.shape[0]!==1){let t=Q({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(y&&e.push(t(o,u)),b&&e.push(t(s,u)),x){let t=n.makeTensorInfo([],`float32`,be(m,`float32`));e.push(t),v.push(t)}return e};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type===`SAME`||g.padInfo.type===`VALID`))_=id({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else if(g.strideWidth<=2&&h===`channelsLast`&&k().getBool(`WEBGL_EXP_CONV`)){let e=new td(g,y,p?Bc(p,!0):null,b,x),t=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=S();_=n.runWebGLProgram(e,r,`float32`,t)}else if(k().getBool(`WEBGL_CONV_IM2COL`))_=ad({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else{let e=new $u(g,y,p?Bc(p,!1):null,b,x),t=S();_=n.runWebGLProgram(e,t,`float32`)}let C=Q({inputs:{x:_},backend:n,attrs:{shape:g.outShape}});return v.push(_),v.forEach(e=>n.disposeIntermediateTensorInfo(e)),C}var Hf={kernelName:fn,backendName:`webgl`,kernelFunc:Vf};function Uf(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r,m=[],h=u;h??=[1,1],M(Yt(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);let g=N(i.shape,a.shape,c,h,l,d,!0),_=k().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,v=f?Bc(f,_):null,y=[i,a],b=o!=null,x=s!=null,S=f===`leakyrelu`;if(b&&y.push(o),x&&y.push(s),S){let e=n.makeTensorInfo([],`float32`,be(p,`float32`));y.push(e),m.push(e)}let C;C=_?new Ud(g,b,v,x,S):new Hd(g,b,v,x,S);let w=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],ee=n.runWebGLProgram(C,y,`float32`,w);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),ee}var Wf={kernelName:tr,backendName:`webgl`,kernelFunc:Uf},Gf=class{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=[`x`,`indices`],this.outputShape=n;let i=W(n.length),a=`
    int index;`;for(let e=0;e<this.sliceDim;e++)a+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function Kf(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=i.shape,o=a[a.length-1],s=E(r.shape),[c,l,u,d]=Ln(r,i),f=Q({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),p=Q({inputs:{x:r},backend:n,attrs:{shape:[E(r.shape)/u,u]}});if(n.shouldExecuteOnCPU([r,i])||r.dtype===`string`){let e=ts(n.readSync(i.dataId),n.bufferSync(r),r.dtype,l,o,u,d,r.shape,s);return n.makeTensorInfo(c,r.dtype,e.values)}let m=new Gf(o,d,[l,u],r.shape),h=n.runWebGLProgram(m,[p,f],p.dtype),g=Q({inputs:{x:h},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),g}var qf={kernelName:Bn,backendName:`webgl`,kernelFunc:Kf},Jf=class{constructor(e,t){this.variableNames=[`A`,`indices`],this.outputShape=t,this.rank=t.length;let n=W(this.rank),r=Yf(e,2);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}};function Yf(e,t){let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],r=[];for(let t=0;t<e.length;t++)t===2?r.push(`index`):r.push(`${n[t]}`);return r.join()}function Xf(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r,c=D(o,i.shape)[0];if(k().get(`DEBUG`)){let e=n.readSync(a.dataId),t=i.shape[c];for(let n=0;n<e.length;++n){let r=e[n];M(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let l=It(i,a,c,s),u=E(a.shape),d=[],f=Q({inputs:{x:i},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),p=Q({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(f),d.push(p);let m=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([i,a])||i.dtype===`string`){let e=n.bufferSync(p),t=ns(n.bufferSync(f),e,m);return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(l.outputShape,t.dtype,t.values)}let h=new Jf(f.shape,m),g=n.runWebGLProgram(h,[f,p],f.dtype);d.push(g);let _=Q({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}var Zf={kernelName:xn,backendName:`webgl`,kernelFunc:Xf},Qf=Z({opSnippet:`return float(a > b);`,packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:rs,dtype:`bool`}),$f={kernelName:_n,backendName:`webgl`,kernelFunc:Qf},ep=Z({opSnippet:`return float(a >= b);`,packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:`bool`,cpuKernelImpl:is}),tp={kernelName:Ft,backendName:`webgl`,kernelFunc:ep};function np(e){let{inputs:t,backend:n}=e,{input:r}=t;return Sf(r,!0,n)}var rp={kernelName:jr,backendName:`webgl`,kernelFunc:np},ip=X({opSnippet:`return float(!isnan(x) && !isinf(x));`,dtype:`bool`}),ap={kernelName:Br,backendName:`webgl`,kernelFunc:ip},op=X({opSnippet:`return float(isinf(x));`,dtype:`bool`}),sp={kernelName:nt,backendName:`webgl`,kernelFunc:op},cp=X({opSnippet:`return float(isnan(x));`,dtype:`bool`}),lp={kernelName:h,backendName:`webgl`,kernelFunc:cp},up=Z({opSnippet:`return float(a < b);`,packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:as,dtype:`bool`}),dp={kernelName:v,backendName:`webgl`,kernelFunc:up},fp=Z({opSnippet:`return float(a <= b);`,packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:os,dtype:`bool`}),pp={kernelName:ze,backendName:`webgl`,kernelFunc:fp};function mp(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=ss(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var hp={kernelName:Mn,backendName:`webgl`,kernelFunc:mp},gp={kernelName:`Log`,backendName:`webgl`,kernelFunc:X({opSnippet:zc+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:cs})},_p=X({opSnippet:zc+`
  return log(1.0 + x);
`}),vp={kernelName:On,backendName:`webgl`,kernelFunc:_p},yp=Z({opSnippet:`return float(a >= 1.0 && b >= 1.0);`,packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:`bool`}),bp={kernelName:je,backendName:`webgl`,kernelFunc:yp},xp=X({opSnippet:`return float(!(x >= 1.0));`}),Sp={kernelName:Fe,backendName:`webgl`,kernelFunc:xp},Cp=Z({opSnippet:`return float(a >= 1.0 || b >= 1.0);`,packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:`bool`}),wp={kernelName:We,backendName:`webgl`,kernelFunc:Cp},Tp=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}},Ep=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}},Dp={kernelName:`LRN`,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r,l=k().getBool(`WEBGL_PACK_NORMALIZATION`)?new Ep(i.shape,a,o,s,c):new Tp(i.shape,a,o,s,c);return n.runWebGLProgram(l,[i],i.dtype)}},Op=class{constructor(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${i})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${i});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}},kp={kernelName:st,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r,d=new Op(i.shape,s,c,l,u);return n.runWebGLProgram(d,[i,a,o],i.dtype)}};function Ap(e,t,n,r){let i=E(t),a=E(e.shape)/i,o=Q({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=Qc(o,e.dtype,`max`,r),c=Q({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}function jp(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=i.shape.length,c=D(a,i.shape),l=c,u=F(l,s),d=u!=null,f=n.shouldExecuteOnCPU([i]),p=i;if(d){if(f){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=i.shape[u[e]];let r=Ls(e,i.shape,i.dtype,u,t);p=n.makeTensorInfo(t,i.dtype);let a=n.texData.get(p.dataId);a.values=r}else p=nl(i,u,n);l=j(l.length,s)}O(`max`,l,s);let[m,h]=xr(p.shape,l),g=m;o&&(g=Un(m,c));let _;if(f){let e=n.texData.get(p.dataId).values,t=ls(e,E(h),g,i.dtype);_=n.makeTensorInfo(g,i.dtype);let r=n.texData.get(_.dataId);r.values=t}else _=Ap(p,h,g,n);return d&&n.disposeIntermediateTensorInfo(p),_}var Mp={kernelName:`Max`,backendName:`webgl`,kernelFunc:jp},Np=Z({opSnippet:wc+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Ec+`
  return result;
`,cpuKernelImpl:us}),Pp={kernelName:vt,backendName:`webgl`,kernelFunc:Np};function Fp(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;sa(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;M(Yt(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Lt(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&P(l.inShape,l.outShape))return Y({inputs:{x:i},backend:n});let u=new Kl(l,`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var Ip={kernelName:me,backendName:`webgl`,kernelFunc:Fp};function Lp(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dataFormat:c,dimRoundingMode:l}=r,u=new ql(Jn(i.shape,a,o,[1,1,1],s,l,c),`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var Rp={kernelName:Ee,backendName:`webgl`,kernelFunc:Lp},zp=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},Bp=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function Vp(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=Jn(o.shape,s,c,[1,1,1],l,u),f=new ql(d,`max`,!0),p=n.runWebGLProgram(f,[o],o.dtype),m=new Bp(d),h=n.runWebGLProgram(m,[i,p],o.dtype);return n.disposeIntermediateTensorInfo(p),h}var Hp={kernelName:Ze,backendName:`webgl`,kernelFunc:Vp};function Up(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;sa([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Lt(s.shape,c,l,1,u,d),p=new Kl(f,`max`,!0),m=n.runWebGLProgram(p,[s],s.dtype),h=new zp(f),g=n.runWebGLProgram(h,[i,m],s.dtype);return n.disposeIntermediateTensorInfo(m),g}var Wp={kernelName:Xr,backendName:`webgl`,kernelFunc:Up};function Gp(e,t,n,r){let i=new Kl(n,`max`,!1),a=r.runWebGLProgram(i,[e],`float32`);return i=new Kl(n,`max`,!0,!0,t),[a,r.runWebGLProgram(i,[e],`float32`)]}var Kp={kernelName:d,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;M(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];M(Yt(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let[u,d]=Gp(r,s,Lt(r.shape,i,a,l,o),c);return[u,d]}};function qp(e,t,n,r){let i=E(t),a=E(e.shape)/i,o=Q({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=Qc(o,`float32`,`mean`,r),c=Q({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}var Jp={kernelName:ue,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:i,axis:a}=t,o=n,s=r.shape.length,c=D(a,r.shape),l=c,u=F(l,s),d=u!=null,f=o.shouldExecuteOnCPU([r]),p=[],m=r;if(d){if(f){let e=o.texData.get(m.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let n=Ls(e,r.shape,r.dtype,u,t);m=o.makeTensorInfo(t,r.dtype);let i=o.texData.get(m.dataId);i.values=n}else m=nl(r,u,o);p.push(m),l=j(l.length,s)}O(`sum`,l,s);let[h,g]=xr(m.shape,l),_=h;i&&(_=Un(h,c));let v=qp(m,g,_,o);for(let e of p)o.disposeIntermediateTensorInfo(e);return v}};function Yp(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=D(a,i.shape),l=c,u=F(l,s),d=i;u!=null&&(d=$({inputs:{x:i},backend:n,attrs:{perm:u}}),l=j(l.length,i.shape.length)),O(`min`,l,s);let[f,p]=xr(d.shape,l),m=E(p),h=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=Qc(h,h.dtype,`min`,n),_;if(o){let e=Un(f,c);_=Q({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=Q({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var Xp={kernelName:`Min`,backendName:`webgl`,kernelFunc:Yp},Zp=Z({opSnippet:wc+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Ec+`
  return result;
`,cpuKernelImpl:ds}),Qp={kernelName:Ct,backendName:`webgl`,kernelFunc:Zp},$p=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=W(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r),c=n===`reflect`?0:1;if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${i} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}},em=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=W(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=K(`rc`,r),c=K(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=n===`reflect`?0:1,f=``;if(r===1){let e=`
        ${i} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
      `}else{let e=`
        ${i} source = rc;
        ${i} lt = ${i}(lessThan(source, start));
        ${i} gte = ${i}(greaterThanEqual(source, end));
        ${i} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${c.join()}), ${u});
          ${s[r-1]} += 1;
          if(${l}) {
            ${e}
            result[3] = getChannel(getX(${c.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}},tm={kernelName:ae,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:i,mode:a}=n,o=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new em(r.shape,i,a):new $p(r.shape,i,a);return t.runWebGLProgram(o,[r],r.dtype)}},nm={kernelName:`Mod`,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Ec+`
  return result;
`})},rm=class{constructor(e,t,n){this.variableNames=[`probs`],this.customUniforms=[{name:`seed`,type:`float`}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}},im=Z({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),am={kernelName:un,backendName:`webgl`,kernelFunc:im},om=`return a - b;`,sm=Z({opSnippet:om,packedOpSnippet:om,supportsComplex:!0,cpuKernelImpl:Ps}),cm={kernelName:`Sub`,backendName:`webgl`,kernelFunc:sm};function lm(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=D([a],i.shape),s=jp({inputs:{x:i},backend:n,attrs:{reductionIndices:o,keepDims:!1}}),c=Un(s.shape,o),l=Q({inputs:{x:s},backend:n,attrs:{shape:c}}),u=sm({inputs:{a:i,b:l},backend:n}),d=mf({inputs:{x:u},backend:n}),f=il({inputs:{x:d},backend:n,attrs:{axis:o,keepDims:!1}}),p=Q({inputs:{x:f},backend:n,attrs:{shape:c}}),m=im({inputs:{a:d,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),m}var um={kernelName:He,backendName:`webgl`,kernelFunc:lm};function dm(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r,c=s?i:lm({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new rm(l,u,a),f=[[o]],p=n.runWebGLProgram(d,[c],`int32`,f);return s||n.disposeIntermediateTensorInfo(c),p}var fm={kernelName:or,backendName:`webgl`,kernelFunc:dm},pm=J+`
  return -x;
`,mm=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function hm(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){let[e,t]=ps(n.texData.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(t,r.dtype,e)}let i;return i=k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new lc(r.shape,mm):new q(r.shape,pm),n.runWebGLProgram(i,[r],r.dtype)}var gm={kernelName:`Neg`,backendName:`webgl`,kernelFunc:hm},_m=Gr;function vm(e){sn(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r,{selectedIndices:l}=_m(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c);return n.makeTensorInfo([l.length],`int32`,new Int32Array(l))}var ym={kernelName:Dt,backendName:`webgl`,kernelFunc:vm},bm=Jt;function xm(e){sn(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r,{selectedIndices:u,validOutputs:d}=bm(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([],`int32`,new Int32Array([d]))]}var Sm={kernelName:Mt,backendName:`webgl`,kernelFunc:xm},Cm=Vr;function wm(e){sn(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r,{selectedIndices:u,selectedScores:d}=Cm(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([d.length],`float32`,new Float32Array(d))]}var Tm={kernelName:Ke,backendName:`webgl`,kernelFunc:wm},Em=class{constructor(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}},Dm={kernelName:on,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r,l=E(i.shape),u=new Em(l,o,s,c),d=Q({inputs:{x:i},backend:n,attrs:{shape:[l]}}),f=n.runWebGLProgram(u,[d],a);n.disposeIntermediateTensorInfo(d);let p=[...i.shape,o],m=Q({inputs:{x:f},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(f),m}};function Om(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`complex64`){let e=Du({inputs:{input:r},backend:n}),t=Om({inputs:{x:e},backend:n}),i=qu({inputs:{input:r},backend:n}),a=Om({inputs:{x:i},backend:n}),o=kc({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return Ef({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype===`string`?``:0},backend:n})}var km={kernelName:Tr,backendName:`webgl`,kernelFunc:Om};function Am(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);if(r.dtype===`complex64`){let e=Du({inputs:{input:r},backend:n}),t=Am({inputs:{x:e},backend:n}),i=qu({inputs:{input:r},backend:n}),a=Om({inputs:{x:i},backend:n}),o=kc({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return Ef({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}var jm={kernelName:br,backendName:`webgl`,kernelFunc:Am};function Mm(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return gf({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{yn(a,e.shape,`All tensors passed to stack must have matching shapes`),M(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=Zu({inputs:t.map(e=>{let t=gf({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var Nm={kernelName:Hn,backendName:`webgl`,kernelFunc:Mm},Pm=class{constructor(e,t,n){this.variableNames=[`x`],this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=W(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${i} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}},Fm=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=W(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=K(`rc`,r),c=K(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=[`${i} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,r===1?``:`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,r===1?``:`  ${s[r-1]} += 1;
         if(${l}) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``;for(let e=0,t=r===1?2:4;e<t;e++)p+=`
        ${d[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${i} source = rc - start;
          result[${e}] = getChannel(getX(${c.join()}), ${u});
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}},Im=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;if(E(i.shape)===0)return Ef({backend:n,attrs:{shape:a.map((e,t)=>e[0]+i.shape[t]+e[1]),value:o,dtype:i.dtype}});let s=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new Fm(i.shape,a,o):new Pm(i.shape,a,o),c=[[o]];return n.runWebGLProgram(s,[i],i.dtype,c)},Lm={kernelName:cr,backendName:`webgl`,kernelFunc:Im},Rm={kernelName:`Pow`,backendName:`webgl`,kernelFunc:Z({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Ec+`
  return result;
`})};function zm(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=[],l=D(a,i.shape),u=l,d=F(u,s),f=i;d!=null&&(f=$({inputs:{x:i},backend:n,attrs:{perm:d}}),u=j(u.length,s),c.push(f)),O(`prod`,u,s);let p;if(n.shouldExecuteOnCPU([f])){let e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:i}=hs(f.shape,f.dtype,e,u);p=n.makeTensorInfo(r,i,t)}else{let[e,t]=xr(f.shape,u),r=E(t),a=Q({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),o=Qc(a,se(i.dtype),`prod`,n);p=Q({inputs:{x:o},backend:n,attrs:{shape:e}}),c.push(a),c.push(o)}if(o){c.push(p);let e=Un(p.shape,l);p=Q({inputs:{x:p},backend:n,attrs:{shape:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var Bm={kernelName:Yn,backendName:`webgl`,kernelFunc:zm};function Vm(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.readSync(e.dataId)),l=i.map(e=>e.shape),u=n.readSync(a.dataId),d=n.readSync(o.dataId),[f,p,m]=gs(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var Hm={kernelName:hr,backendName:`webgl`,kernelFunc:Vm};function Um(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=_s(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var Wm={kernelName:Xt,backendName:`webgl`,kernelFunc:Um};function Gm(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),d=n.readSync(o.dataId),f=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[m,h]=vs(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var Km={kernelName:Nn,backendName:`webgl`,kernelFunc:Gm},qm=e=>{let{backend:t,attrs:n}=e,{start:r,stop:i,step:a,dtype:o}=n,s=ys(r,i,a,o);return t.makeTensorInfo([s.length],o,s)},Jm={kernelName:wr,backendName:`webgl`,kernelFunc:qm},Ym=X({opSnippet:`return 1.0 / x;`}),Xm={kernelName:$n,backendName:`webgl`,kernelFunc:Ym},Zm=X({opSnippet:J+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),Qm={kernelName:Rn,backendName:`webgl`,kernelFunc:Zm},$m=X({opSnippet:J+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),eh={kernelName:vn,backendName:`webgl`,kernelFunc:$m},th=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}},nh=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function rh(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=k().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new nh(i.shape,c,l,a,o):new th(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],`float32`)}var ih={kernelName:Nt,backendName:`webgl`,kernelFunc:rh},ah=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${i-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function oh(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new ah(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var sh={kernelName:Or,backendName:`webgl`,kernelFunc:oh},ch=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}},lh=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function uh(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=k().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new lh(i.shape,c,l,a,o):new ch(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],i.dtype)}var dh={kernelName:Hr,backendName:`webgl`,kernelFunc:uh},fh=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${i}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function ph(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new fh(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var mh={kernelName:Wt,backendName:`webgl`,kernelFunc:ph},hh=class{constructor(e,t){this.variableNames=[`x`];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,i=e.map((e,t)=>r(t)).join(`,`),a=W(n);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}},gh=class{constructor(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let r=K(`rc`,n),i=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,a=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=W(n);this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${i}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${s(r.slice())};
          if(${i}){
            result.g = ${c(r.slice())};
          }
          if(${a}) {
            result.b = ${l(r.slice())};
            if(${i}) {
              result.a = ${u(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function s(e){return d(e)}function c(e){return e[n-1]=`(`+e[n-1]+` + 1)`,d(e)}function l(e){return e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function u(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function d(t){let n=e.map((e,n)=>f(n,t));return`getChannel(getX(${n.join(`,`)}), vec2(${n.slice(-2).join(`,`)}))`}function f(n,r){return t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}}};function _h(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r,o=i.shape.length,s=D(a,i.shape);if(o===0)return Y({inputs:{x:i},backend:n});let c=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new gh(i.shape,s):new hh(i.shape,s);return n.runWebGLProgram(c,[i],i.dtype)}var vh={kernelName:Lr,backendName:`webgl`,kernelFunc:_h},yh=class{constructor(e,t){this.variableNames=[`Image`],this.outputShape=[],this.customUniforms=[{name:`params`,type:`vec4`}];let n=e[1],r=e[2];this.outputShape=e;let i=``;i=typeof t==`number`?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(`,`)});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${i}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}},bh={kernelName:$e,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=new yh(r.shape,a),[l,u]=nr(o,r.shape[1],r.shape[2]),d=[[l,u,Math.sin(i),Math.cos(i)]];return s.runWebGLProgram(c,[r],r.dtype,d)}},xh=X({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),Sh={kernelName:p,backendName:`webgl`,kernelFunc:xh},Ch=X({opSnippet:`return inversesqrt(x);`,cpuKernelImpl:bs}),wh={kernelName:Nr,backendName:`webgl`,kernelFunc:Ch},Th=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;let c=W(i.length),l=W(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${g};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${h}, sum, float(found)));
        }
      `}},Eh=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a;let c=W(i.length),l=W(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`,_=t>1?`strides[j + 1]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${g};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${_};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${h}, sum, found));
        }
      `}};function Dh(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=pt(a,i,o),f=[d/l,l];if(d===0)return n.makeTensorInfo(o,i.dtype);let p=Q({inputs:{x:i},backend:n,attrs:{shape:[c,s]}}),m=Q({inputs:{x:a},backend:n,attrs:{shape:[c,l]}}),h=n.makeTensorInfo([],`float32`,new Float32Array([0])),g;g=k().getBool(`WEBGL_PACK`)?new Eh(c,s,p.shape.length,m.shape.length,u,f):new Th(c,s,p.shape.length,m.shape.length,u,f);let _=n.runWebGLProgram(g,[m,p,h],m.dtype),v=Q({inputs:{x:_},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(h),v}var Oh={kernelName:it,backendName:`webgl`,kernelFunc:Dh},kh=class{constructor(e,t,n,r){this.variableNames=[`sortedSequence`,`values`],this.customUniforms=[{name:`numInputs`,type:`int`}],this.outputShape=[e,n];let i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=k().getNumber(`WEBGL_VERSION`)===2?`while (left < right) {`:i,o=r===`left`?`<`:`<=`;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${o} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function Ah(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=new kh(i.shape[0],i.shape[1],a.shape[1],o),c=[[i.shape[1]]];return n.runWebGLProgram(s,[i,a],`int32`,c)}var jh={kernelName:y,backendName:`webgl`,kernelFunc:Ah},Mh=class{constructor(e,t,n){this.variableNames=[`c`,`a`,`b`],this.outputShape=t;let r,i;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],a=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&a.push(`${n[r]}`);r=a.join(),i=o.join()}let a=W(n);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${i}));
        } else {
          setOutput(getB(${i}));
        }
      }
    `}};function Nh(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t,o=new Mh(r.shape.length,i.shape,i.shape.length);return n.runWebGLProgram(o,[r,i,a],lt(i.dtype,a.dtype))}var Ph={kernelName:g,backendName:`webgl`,kernelFunc:Nh},Fh=X({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${mt};
  float scale = ${o};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`}),Ih={kernelName:Ie,backendName:`webgl`,kernelFunc:Fh},Lh=X({opSnippet:zc+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:Ss}),Rh={kernelName:An,backendName:`webgl`,kernelFunc:Lh},zh=X({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),Bh={kernelName:i,backendName:`webgl`,kernelFunc:zh},Vh={kernelName:`Sin`,backendName:`webgl`,kernelFunc:X({opSnippet:zc+`
  return sin(x);
`,packedOpSnippet:`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Ec}
  return result;
`})},Hh=X({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),Uh={kernelName:ke,backendName:`webgl`,kernelFunc:Hh},Wh=X({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),Gh={kernelName:ee,backendName:`webgl`,kernelFunc:Wh},Kh={kernelName:fe,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;M(i.shape.length<=4,()=>`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=[],u=Im({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),d=ct(u.shape,a,s,!1),f=oe(d.length,a.length,!1),p=yt(u.shape,a,s,!1),m=Q({inputs:{x:u},backend:n,attrs:{shape:d}}),h=$({inputs:{x:m},backend:n,attrs:{perm:f}}),g=Q({inputs:{x:h},backend:n,attrs:{shape:p}});return l.push(u),l.push(m),l.push(h),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),g}};function qh(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
         ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.readSync(r.dataId),c=n.readSync(i.dataId),l=n.readSync(a.dataId),u=n.readSync(o.dataId)[0],[d,f,p,m,h]=Ts(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var Jh={kernelName:we,backendName:`webgl`,kernelFunc:qh};function Yh(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.readSync(i.dataId)),s=n.readSync(r.dataId),c=Array.from(n.readSync(a.dataId)),[l,u,d]=Es(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var Xh={kernelName:Je,backendName:`webgl`,kernelFunc:Yh};function Zh(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
              ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
              ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=Ds(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var Qh={kernelName:qr,backendName:`webgl`,kernelFunc:Zh};function $h(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
             ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
             ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=Ds(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var eg={kernelName:c,backendName:`webgl`,kernelFunc:$h};function tg(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=pt(a,i,s);if(a.dtype===`string`){let e=xs(n.bufferSync(i),n.bufferSync(a),s,f,u,l,c,d,rr(n.readSync(o.dataId)[0]),!1);return n.makeTensorInfo(s,e.dtype,e.values)}let p=new Th(l,c,i.shape.length,a.shape.length,d,[f,1],!1),m=n.runWebGLProgram(p,[a,i,o],a.dtype),h=Q({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(m),h}var ng={kernelName:gt,backendName:`webgl`,kernelFunc:tg};function rg(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=D(o,i.shape)[0],c=Ut(i,a,s),l=i.shape.length,u=Array(l).fill(0),d=i.shape.slice();return c.map(e=>{let t=[...d];t[s]=e;let r=mu({inputs:{x:i},backend:n,attrs:{begin:u,size:t}});return u[s]+=e,r})}var ig={kernelName:ce,backendName:`webgl`,kernelFunc:rg},ag=`return sqrt(x);`,og=X({opSnippet:ag,packedOpSnippet:ag,cpuKernelImpl:Os}),sg={kernelName:ut,backendName:`webgl`,kernelFunc:og},cg=X({opSnippet:`return x * x;`}),lg={kernelName:bt,backendName:`webgl`,kernelFunc:cg},ug=`return (a - b) * (a - b);`,dg=Z({opSnippet:ug,packedOpSnippet:ug}),fg={kernelName:T,backendName:`webgl`,kernelFunc:dg};function pg(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;if(i.dtype!==`string`)throw Error(`Input must be of datatype string`);let a=n.readSync(i.dataId),o=ks(Sn(a),`string`,r);return n.makeTensorInfo(i.shape,`string`,o)}var mg={kernelName:xe,backendName:`webgl`,kernelFunc:pg};function hg({inputs:e,attrs:t,backend:n}){let{x:r}=e,i=J+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,a=new q(r.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}var gg={kernelName:ir,backendName:`webgl`,kernelFunc:hg},_g=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=n;let r=n.length,i=W(n.length),a=W(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{let e=0;o=n.map((t,r)=>(e++,n.length===1?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(`,`)}this.userCode=`
      ${i} begin = ${i}(${e});
      ${i} strides = ${i}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}};function vg(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=en(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=Q({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){M(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=Ht(v,y,b),t=mu({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=Q({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else if(n.shouldExecuteOnCPU([i])){let e=n.readSync(i.dataId),t=As(p,kn(i.shape,i.dtype,e),b,v);x=n.makeTensorInfo(m,i.dtype,t.values)}else{let e=new _g(v,b,p);x=n.runWebGLProgram(e,[i],i.dtype)}let S=Q({inputs:{x},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(x),S}var yg={kernelName:_e,backendName:`webgl`,kernelFunc:vg};function bg(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,[f,p]=js(n.readSync(u.dataId),n.readSync(d.dataId),i,a,o,s,c,l);return[n.makeTensorInfo([f.length],`string`,f),n.makeTensorInfo(d.shape,`int32`,p)]}var xg={kernelName:kt,backendName:`webgl`,kernelFunc:bg};function Sg(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.readSync(a.dataId),c=n.readSync(o.dataId)[0],[l,u,d]=Ms(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var Cg={kernelName:Tt,backendName:`webgl`,kernelFunc:Sg};function wg(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=Ns(n.readSync(a.dataId),i);return n.makeTensorInfo(a.shape,`int32`,o)}var Tg={kernelName:At,backendName:`webgl`,kernelFunc:wg},Eg={kernelName:`Tan`,backendName:`webgl`,kernelFunc:X({opSnippet:`return tan(x);`})},Dg=X({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),Og={kernelName:Sr,backendName:`webgl`,kernelFunc:Dg};function kg(e){let{inputs:t,backend:n,attrs:r}=e,{tensor:i,indices:a,updates:o}=t,{}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=pt(o,a,i.shape),f=[d/l,l];if(d===0)return n.makeTensorInfo(i.shape,a.dtype);let p=Q({inputs:{x:a},backend:n,attrs:{shape:[c,s]}}),m=Q({inputs:{x:o},backend:n,attrs:{shape:[c,l]}}),h=Q({inputs:{x:i},backend:n,attrs:{shape:f}}),g=new Th(c,s,p.shape.length,m.shape.length,u,f,!1,!0),_=n.runWebGLProgram(g,[m,p,h],h.dtype),v=Q({inputs:{x:_},backend:n,attrs:{shape:i.shape}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(_),v}var Ag={kernelName:Wn,backendName:`webgl`,kernelFunc:kg},jg=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=W(this.rank),i=Mg(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${i}));
      }
    `}};function Mg(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}function Ng(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;if(i.dtype===`string`||i.shape.length>5){let e=n.readSync(i.dataId),t=i.dtype===`string`?e.map(e=>rr(e)):e,r=Fs(kn(i.shape,i.dtype,t),a);return n.makeTensorInfo(r.shape,r.dtype,r.values)}let o=new jg(i.shape,a);return n.runWebGLProgram(o,[i],i.dtype)}var Pg={kernelName:lr,backendName:`webgl`,kernelFunc:Ng},Fg=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`negativeInf`,type:`float`},{name:`dir`,type:`int`},{name:`inc`,type:`int`}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},Ig=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`k`,type:`int`}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function Lg(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function Rg(e){let t=1;for(;t<e;)t*=2;return t}function zg(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r,s=k().getNumber(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`),c=k().getNumber(`TOPK_K_CPU_HANDOFF_THRESHOLD`),l=i.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([i])||u<s||a>c){let[e,t]=Is(n.readSync(i.dataId),l,i.dtype,a,o);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(t.shape,t.dtype,t.values)]}if(a===0)return l[l.length-1]=0,[n.makeTensorInfo(l,i.dtype,[]),n.makeTensorInfo(l,`int32`,[])];if(u===1)return[i,Ef({attrs:{shape:l,dtype:`int32`,value:0},backend:n})];let d=n.texData.get(i.dataId),f=d!==null&&d.isPacked,p=f?n.unpackTensor(i):i,m=E(l)/u,h=Q({inputs:{x:p},attrs:{shape:[m,u]},backend:n});f&&Lg(n,p);let g=Rg(a),_=Rg(u),v=null,y=()=>v===null?[h,h]:[h,v],b=(e,t,r)=>{let i=y(),a=new Fg(r),o=[[u],[+(v===null)],[-1/0],[e],[t]],s=v;v=n.runWebGLProgram(a,i,`int32`,o),Lg(n,s)};for(let e=1;e<g;e*=2){let t=e*2;for(let n=e;n>=1;n/=2)b(t,n,[m,_])}for(let e=_;e>g;e/=2){let t=y(),r=new Ig([m,e/2]),i=[[u],[+(v===null)],[g]],a=v;v=n.runWebGLProgram(r,t,`int32`,i),Lg(n,a);let o=g/2,s=o*2;for(let e=o;e>=1;e/=2)b(s,e,v.shape)}let x=v;v=mu({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,a]}}),Lg(n,x);let S=Xf({inputs:{x:h,indices:v},backend:n,attrs:{axis:1,batchDims:1}});Lg(n,h);let C=l.slice(0,-1);C.push(a),x=v,v=Q({inputs:{x:v},attrs:{shape:C},backend:n}),Lg(n,x);let w=S;return S=Q({inputs:{x:S},attrs:{shape:C},backend:n}),Lg(n,w),[S,v]}var Bg={kernelName:wn,backendName:`webgl`,kernelFunc:zg},Vg=class{constructor(e,t,n,r,i,a){this.variableNames=[`Image`,`Transforms`],this.outputShape=a;let o=n===`nearest`?1:2,s;switch(r){case`constant`:s=1;break;case`reflect`:s=2;break;case`wrap`:s=3;break;case`nearest`:s=4;break;default:s=1}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${i});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${i});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${o} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function Hg(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=r,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=new Vg(d,f,o,s,c,[u,m,h,p]);return n.runWebGLProgram(g,[i,a],`float32`)}var Ug={kernelName:Bt,backendName:`webgl`,kernelFunc:Hg};function Wg(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;sa(a,`unique`),console.warn(`WARNING: `,`UI might be locked temporarily as data is being downloaded`);let{outputValues:o,outputShape:s,indices:c}=Rs(r.readSync(a.dataId),i,a.shape,a.dtype);return[r.makeTensorInfo(s,a.dtype,o),r.makeTensorInfo([c.length],`int32`,c)]}var Gg={kernelName:gr,backendName:`webgl`,kernelFunc:Wg};function Kg(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i,s=o.shape.length,c=i.shape[a],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==a&&(l[u++]=o.shape[e]);let d=[],f=Array(s).fill(0),p=o.shape.slice();p[a]=1;let m=Array(c);for(let e=0;e<m.length;e++){f[a]=e;let t=mu({inputs:{x:o},backend:n,attrs:{begin:f,size:p}}),r=Q({inputs:{x:t},backend:n,attrs:{shape:l}});m[e]=r,d.push(t)}return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var qg={kernelName:Zt,backendName:`webgl`,kernelFunc:Kg},Jg=class{constructor(e,t){this.variableNames=[`x`,`segmentIds`];let n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];let s=Math.floor(n/4)*4,c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `);let d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${c===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}};function Yg(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r,s=i.shape.length,c=[],l=0,u=F([l],s),d=i;u!=null&&(d=$({inputs:{x:i},backend:n,attrs:{perm:u}}),c.push(d),l=j(1,s)[0]);let f=qn(d.shape,l,o),p=E([d.shape[l]]),m=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});c.push(m);let h=se(i.dtype),g=(e,t,r,i,a)=>{let o=e.shape[0],s=e.shape[1],l=pr(s,a),u=new Jg({windowSize:l,inSize:s,batchSize:o,numSegments:a},t),d=n.compileAndRun(u,[e,r],i);if(c.push(d),d.shape[1]===a)return d;let f=qm({backend:n,attrs:{start:0,stop:a,step:1,dtype:`float32`}}),p=Ng({inputs:{x:f},backend:n,attrs:{reps:[s/l]}});return c.push(f),c.push(p),g(d,t,p,i,a)},_=Q({inputs:{x:g(m,`unsortedSegmentSum`,a,h,o)},backend:n,attrs:{shape:f}}),v=_;if(u!=null){c.push(_);let e=zt(u);v=$({inputs:{x:v},backend:n,attrs:{perm:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}var Xg=[ll,fl,ml,gl,vl,Sl,wl,El,Nl,Fl,Ll,zl,Vl,Ul,Gl,Yl,Zl,tu,ru,au,cu,gu,vu,Su,wu,Mu,Fu,zu,Ac,Uu,Qu,sd,pd,gd,vd,bd,Sd,Cd,Td,Dd,Pd,Id,Rd,Vd,Gd,Yd,Zd,ef,rf,of,sf,uf,ff,pf,hf,_f,bf,wf,Df,kf,Mf,Pf,Lf,Hf,Wf,qf,Zf,$f,tp,Oc,rp,Ju,ap,sp,lp,Pc,dp,pp,hp,gp,vp,bp,Sp,wp,Dp,kp,Mp,Pp,Ip,Rp,Hp,Wp,Kp,Jp,Xp,Qp,tm,nm,fm,Kc,gm,ym,Sm,Tm,Eu,Dm,jm,Nm,Lm,Rm,Rc,Bm,Hm,Wm,Km,Jm,Ou,am,Xm,Qm,eh,Jc,ih,sh,dh,mh,vh,bh,Sh,wh,Oh,jh,Ph,Ih,Rh,Bh,Vh,Uh,hu,um,Gh,Kh,Jh,Xh,Qh,eg,ng,ig,sg,lg,fg,mg,gg,yg,xg,Cg,Tg,cm,al,Eg,Og,Ag,Pg,Bg,Ug,ol,Gg,qg,{kernelName:Pn,backendName:`webgl`,kernelFunc:Yg},km];for(let e of Xg)t(e);export{Ho as GPGPUContext,yc as MathBackendWebGL,Sc as forceHalfFloat,yo as gpgpu_util,ei as setWebGLContext,xc as version_webgl,Cc as webgl,ui as webgl_util};