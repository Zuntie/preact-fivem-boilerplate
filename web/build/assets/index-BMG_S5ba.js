(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))r(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerPolicy&&(o.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?o.credentials="include":_.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(_){if(_.ep)return;_.ep=!0;const o=n(_);fetch(_.href,o)}})();var B,f,We,H,ke,Fe,oe,Be,fe,ie,ue,je,F={},qe=[],mt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function C(e,t){for(var n in t)e[n]=t[n];return e}function pe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function x(e,t,n){var r,_,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?_=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?B.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return W(e,i,r,_,null)}function W(e,t,n,r,_){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:_??++We,__i:-1,__u:0};return _==null&&f.vnode!=null&&f.vnode(o),o}function yt(){return{current:null}}function E(e){return e.children}function w(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function ze(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ze(e)}}function le(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!K.__r++||ke!==f.debounceRendering)&&((ke=f.debounceRendering)||Fe)(K)}function K(){var e,t,n,r,_,o,i,l;for(H.sort(oe);e=H.shift();)e.__d&&(t=H.length,r=void 0,o=(_=(n=e).__v).__e,i=[],l=[],n.__P&&((r=C({},_)).__v=_.__v+1,f.vnode&&f.vnode(r),de(n.__P,r,_,n.__n,n.__P.namespaceURI,32&_.__u?[o]:null,i,o??T(_),!!(32&_.__u),l),r.__v=_.__v,r.__.__k[r.__i]=r,Ze(i,r,l),r.__e!=o&&ze(r)),H.length>t&&H.sort(oe));K.__r=0}function Ge(e,t,n,r,_,o,i,l,s,c,p){var u,d,a,g,S,b,h=r&&r.__k||qe,v=t.length;for(s=gt(n,t,h,s,v),u=0;u<v;u++)(a=n.__k[u])!=null&&(d=a.__i===-1?F:h[a.__i]||F,a.__i=u,b=de(e,a,d,_,o,i,l,s,c,p),g=a.__e,a.ref&&d.ref!=a.ref&&(d.ref&&he(d.ref,null,a),p.push(a.ref,a.__c||g,a)),S==null&&g!=null&&(S=g),4&a.__u||d.__k===a.__k?s=Je(a,s,e):typeof a.type=="function"&&b!==void 0?s=b:g&&(s=g.nextSibling),a.__u&=-7);return n.__e=S,s}function gt(e,t,n,r,_){var o,i,l,s,c,p=n.length,u=p,d=0;for(e.__k=new Array(_),o=0;o<_;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(s=o+d,(i=e.__k[o]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?W(null,i,null,null,null):Y(i)?W(E,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?W(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,l=null,(c=i.__i=bt(i,n,s,u))!==-1&&(u--,(l=n[c])&&(l.__u|=2)),l==null||l.__v===null?(c==-1&&d--,typeof i.type!="function"&&(i.__u|=4)):c!=s&&(c==s-1?d--:c==s+1?d++:(c>s?d--:d++,i.__u|=4))):e.__k[o]=null;if(u)for(o=0;o<p;o++)(l=n[o])!=null&&!(2&l.__u)&&(l.__e==r&&(r=T(l)),Ke(l,l));return r}function Je(e,t,n){var r,_;if(typeof e.type=="function"){for(r=e.__k,_=0;r&&_<r.length;_++)r[_]&&(r[_].__=e,t=Je(r[_],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=T(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function N(e,t){return t=t||[],e==null||typeof e=="boolean"||(Y(e)?e.some(function(n){N(n,t)}):t.push(e)),t}function bt(e,t,n,r){var _,o,i=e.key,l=e.type,s=t[n];if(s===null||s&&i==s.key&&l===s.type&&!(2&s.__u))return n;if(r>(s!=null&&!(2&s.__u)?1:0))for(_=n-1,o=n+1;_>=0||o<t.length;){if(_>=0){if((s=t[_])&&!(2&s.__u)&&i==s.key&&l===s.type)return _;_--}if(o<t.length){if((s=t[o])&&!(2&s.__u)&&i==s.key&&l===s.type)return o;o++}}return-1}function Se(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||mt.test(t)?n:n+"px"}function G(e,t,n,r,_){var o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Se(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Se(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Be,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=fe,e.addEventListener(t,o?ue:ie,o)):e.removeEventListener(t,o?ue:ie,o);else{if(_=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function $e(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=fe++;else if(t.t<n.u)return;return n(f.event?f.event(t):t)}}}function de(e,t,n,r,_,o,i,l,s,c){var p,u,d,a,g,S,b,h,v,I,P,q,A,be,z,te,ne,$=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[l=t.__e=n.__e]),(p=f.__b)&&p(t);e:if(typeof $=="function")try{if(h=t.props,v="prototype"in $&&$.prototype.render,I=(p=$.contextType)&&r[p.__c],P=p?I?I.props.value:p.__:r,n.__c?b=(u=t.__c=n.__c).__=u.__E:(v?t.__c=u=new $(h,P):(t.__c=u=new w(h,P),u.constructor=$,u.render=St),I&&I.sub(u),u.props=h,u.state||(u.state={}),u.context=P,u.__n=r,d=u.__d=!0,u.__h=[],u._sb=[]),v&&u.__s==null&&(u.__s=u.state),v&&$.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=C({},u.__s)),C(u.__s,$.getDerivedStateFromProps(h,u.__s))),a=u.props,g=u.state,u.__v=t,d)v&&$.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),v&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(v&&$.getDerivedStateFromProps==null&&h!==a&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(h,P),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(h,u.__s,P)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(u.props=h,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(M){M&&(M.__=t)}),q=0;q<u._sb.length;q++)u.__h.push(u._sb[q]);u._sb=[],u.__h.length&&i.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(h,u.__s,P),v&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(a,g,S)})}if(u.context=P,u.props=h,u.__P=e,u.__e=!1,A=f.__r,be=0,v){for(u.state=u.__s,u.__d=!1,A&&A(t),p=u.render(u.props,u.state,u.context),z=0;z<u._sb.length;z++)u.__h.push(u._sb[z]);u._sb=[]}else do u.__d=!1,A&&A(t),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++be<25);u.state=u.__s,u.getChildContext!=null&&(r=C(C({},r),u.getChildContext())),v&&!d&&u.getSnapshotBeforeUpdate!=null&&(S=u.getSnapshotBeforeUpdate(a,g)),l=Ge(e,Y(te=p!=null&&p.type===E&&p.key==null?p.props.children:p)?te:[te],t,n,r,_,o,i,l,s,c),u.base=t.__e,t.__u&=-161,u.__h.length&&i.push(u),b&&(u.__E=u.__=null)}catch(M){if(t.__v=null,s||o!=null)if(M.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l}else for(ne=o.length;ne--;)pe(o[ne]);else t.__e=n.__e,t.__k=n.__k;f.__e(M,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=kt(n.__e,t,n,r,_,o,i,s,c);return(p=f.diffed)&&p(t),128&t.__u?void 0:l}function Ze(e,t,n){for(var r=0;r<n.length;r++)he(n[r],n[++r],n[++r]);f.__c&&f.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){f.__e(o,_.__v)}})}function kt(e,t,n,r,_,o,i,l,s){var c,p,u,d,a,g,S,b=n.props,h=t.props,v=t.type;if(v=="svg"?_="http://www.w3.org/2000/svg":v=="math"?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((a=o[c])&&"setAttribute"in a==!!v&&(v?a.localName==v:a.nodeType==3)){e=a,o[c]=null;break}}if(e==null){if(v==null)return document.createTextNode(h);e=document.createElementNS(_,v,h.is&&h),l&&(f.__m&&f.__m(t,o),l=!1),o=null}if(v===null)b===h||l&&e.data===h||(e.data=h);else{if(o=o&&B.call(e.childNodes),b=n.props||F,!l&&o!=null)for(b={},c=0;c<e.attributes.length;c++)b[(a=e.attributes[c]).name]=a.value;for(c in b)if(a=b[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=a;else if(!(c in h)){if(c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h)continue;G(e,c,null,a,_)}}for(c in h)a=h[c],c=="children"?d=a:c=="dangerouslySetInnerHTML"?p=a:c=="value"?g=a:c=="checked"?S=a:l&&typeof a!="function"||b[c]===a||G(e,c,a,b[c],_);if(p)l||u&&(p.__html===u.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(u&&(e.innerHTML=""),Ge(e,Y(d)?d:[d],t,n,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":_,o,i,o?o[0]:n.__k&&T(n,0),l,s),o!=null)for(c=o.length;c--;)pe(o[c]);l||(c="value",v=="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[c]||v=="progress"&&!g||v=="option"&&g!==b[c])&&G(e,c,g,b[c],_),c="checked",S!==void 0&&S!==e[c]&&G(e,c,S,b[c],_))}return e}function he(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(_){f.__e(_,n)}}function Ke(e,t,n){var r,_;if(f.unmount&&f.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||he(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){f.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&Ke(r[_],t,n||typeof e.type!="function");n||pe(e.__e),e.__c=e.__=e.__e=void 0}function St(e,t,n){return this.constructor(e,n)}function R(e,t,n){var r,_,o,i;t==document&&(t=document.documentElement),f.__&&f.__(e,t),_=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],de(t,e=(!r&&n||t).__k=x(E,null,[e]),_||F,F,t.namespaceURI,!r&&n?[n]:_?null:t.firstChild?B.call(t.childNodes):null,o,!r&&n?n:_?_.__e:t.firstChild,r,i),Ze(o,e,i)}function Ye(e,t){R(e,t,Ye)}function $t(e,t,n){var r,_,o,i,l=C({},e.props);for(o in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?_=t[o]:l[o]=t[o]===void 0&&i!==void 0?i[o]:t[o];return arguments.length>2&&(l.children=arguments.length>3?B.call(arguments,2):n),W(e.type,l,r||e.key,_||e.ref,null)}function wt(e,t){var n={__c:t="__cC"+je++,__:e,Consumer:function(r,_){return r.children(_)},Provider:function(r){var _,o;return this.getChildContext||(_=new Set,(o={})[t]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){_=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&_.forEach(function(l){l.__e=!0,le(l)})},this.sub=function(i){_.add(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){_&&_.delete(i),l&&l.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}B=qe.slice,f={__e:function(e,t,n,r){for(var _,o,i;t=t.__;)if((_=t.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(e)),i=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,r||{}),i=_.__d),i)return _.__E=_}catch(l){e=l}throw e}},We=0,w.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),le(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),le(this))},w.prototype.render=E,H=[],Fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,oe=function(e,t){return e.__v.__b-t.__v.__b},K.__r=0,Be=/(PointerCapture)$|Capture$/i,fe=0,ie=$e(!1),ue=$e(!0),je=0;var Ct=0;function k(e,t,n,r,_,o){t||(t={});var i,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?i=t[l]:s[l]=t[l];var c={type:e,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ct,__i:-1,__u:0,__source:_,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(l in i)s[l]===void 0&&(s[l]=i[l]);return f.vnode&&f.vnode(c),c}var U,m,re,we,L=0,Qe=[],y=f,Ce=y.__b,Ne=y.__r,xe=y.diffed,Ee=y.__c,Pe=y.unmount,Ue=y.__;function D(e,t){y.__h&&y.__h(m,e,L||t),L=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Q(e){return L=1,ve(ot,e)}function ve(e,t,n){var r=D(U++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ot(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],c=r.t(s,l);s!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var _=function(l,s,c){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(d){return!!d.__c});if(p.every(function(d){return!d.__N}))return!o||o.call(this,l,s,c);var u=r.__c.props!==l;return p.forEach(function(d){if(d.__N){var a=d.__[0];d.__=d.__N,d.__N=void 0,a!==d.__[0]&&(u=!0)}}),o&&o.call(this,l,s,c)||u};m.u=!0;var o=m.shouldComponentUpdate,i=m.componentWillUpdate;m.componentWillUpdate=function(l,s,c){if(this.__e){var p=o;o=void 0,_(l,s,c),o=p}i&&i.call(this,l,s,c)},m.shouldComponentUpdate=_}return r.__N||r.__}function O(e,t){var n=D(U++,3);!y.__s&&me(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function j(e,t){var n=D(U++,4);!y.__s&&me(n.__H,t)&&(n.__=e,n.i=t,m.__h.push(n))}function Xe(e){return L=5,X(function(){return{current:e}},[])}function et(e,t,n){L=6,j(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function X(e,t){var n=D(U++,7);return me(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function tt(e,t){return L=8,X(function(){return e},t)}function nt(e){var t=m.context[e.__c],n=D(U++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(m)),t.props.value):e.__}function rt(e,t){y.useDebugValue&&y.useDebugValue(t?t(e):e)}function _t(){var e=D(U++,11);if(!e.__){for(var t=m.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Nt(){for(var e;e=Qe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(J),e.__H.__h.forEach(ce),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){m=null,Ce&&Ce(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ue&&Ue(e,t)},y.__r=function(e){Ne&&Ne(e),U=0;var t=(m=e.__c).__H;t&&(re===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(J),t.__h.forEach(ce),t.__h=[],U=0)),re=m},y.diffed=function(e){xe&&xe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Qe.push(t)!==1&&we===y.requestAnimationFrame||((we=y.requestAnimationFrame)||xt)(Nt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),re=m=null},y.__c=function(e,t){t.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(r){return!r.__||ce(r)})}catch(r){t.some(function(_){_.__h&&(_.__h=[])}),t=[],y.__e(r,n.__v)}}),Ee&&Ee(e,t)},y.unmount=function(e){Pe&&Pe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{J(r)}catch(_){t=_}}),n.__H=void 0,t&&y.__e(t,n.__v))};var He=typeof requestAnimationFrame=="function";function xt(e){var t,n=function(){clearTimeout(r),He&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);He&&(t=requestAnimationFrame(n))}function J(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function ce(e){var t=m;e.__c=e.__(),m=t}function me(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ot(e,t){return typeof t=="function"?t(e):t}const it=async(e,t,n)=>{try{const _=await(await fetch(`https://${GetParentResourceName()}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t||{})})).json();n(_)}catch(r){console.error("Callback Error:",r)}},Et=e=>{let t;const n=new Set,r=(c,p)=>{const u=typeof c=="function"?c(t):c;if(!Object.is(u,t)){const d=t;t=p??(typeof u!="object"||u===null)?u:Object.assign({},t,u),n.forEach(a=>a(t,d))}},_=()=>t,l={setState:r,getState:_,getInitialState:()=>s,subscribe:c=>(n.add(c),()=>n.delete(c))},s=t=e(r,_,l);return l},Pt=e=>Et(e);function ut(e,t){for(var n in t)e[n]=t[n];return e}function se(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function lt(e,t){var n=t(),r=Q({t:{__:n,u:t}}),_=r[0].t,o=r[1];return j(function(){_.__=n,_.u=t,_e(_)&&o({t:_})},[e,n,t]),O(function(){return _e(_)&&o({t:_}),e(function(){_e(_)&&o({t:_})})},[e]),n}function _e(e){var t,n,r=e.u,_=e.__;try{var o=r();return!((t=_)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function ct(e){e()}function st(e){return e}function at(){return[!1,ct]}var ft=j;function ae(e,t){this.props=e,this.context=t}function Ut(e,t){function n(_){var o=this.props.ref,i=o==_.ref;return!i&&o&&(o.call?o(null):o.current=null),t?!t(this.props,_)||!i:se(this.props,_)}function r(_){return this.shouldComponentUpdate=n,x(e,_)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ae.prototype=new w).isPureReactComponent=!0,ae.prototype.shouldComponentUpdate=function(e,t){return se(this.props,e)||se(this.state,t)};var Oe=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Oe&&Oe(e)};var Ht=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ot(e){function t(n){var r=ut({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Ht,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Te=function(e,t){return e==null?null:N(N(e).map(t))},Tt={map:Te,forEach:Te,count:function(e){return e?N(e).length:0},only:function(e){var t=N(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:N},Rt=f.__e;f.__e=function(e,t,n,r){if(e.then){for(var _,o=t;o=o.__;)if((_=o.__c)&&_.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),_.__c(e,t)}Rt(e,t,n,r)};var Re=f.unmount;function pt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=ut({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return pt(r,t,n)})),e}function dt(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return dt(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Z(){this.__u=0,this.o=null,this.__b=null}function ht(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Lt(e){var t,n,r;function _(o){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return x(n,o)}return _.displayName="Lazy",_.__f=!0,_}function V(){this.i=null,this.l=null}f.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Re&&Re(e)},(Z.prototype=new w).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var _=ht(r.__v),o=!1,i=function(){o||(o=!0,n.__R=null,_?_(l):l())};n.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var s=r.state.__a;r.__v.__k[0]=dt(s,s.__c.__P,s.__c.__O)}var c;for(r.setState({__a:r.__b=null});c=r.o.pop();)c.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},Z.prototype.componentWillUnmount=function(){this.o=[]},Z.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=pt(this.__b,n,r.__O=r.__P)}this.__b=null}var _=t.__a&&x(E,null,e.fallback);return _&&(_.__u&=-33),[x(E,null,t.__a?null:e.children),_]};var Le=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function Dt(e){return this.getChildContext=function(){return e.context},e.children}function It(e){var t=this,n=e.h;t.componentWillUnmount=function(){R(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.h.appendChild(r)},insertBefore:function(r,_){this.childNodes.push(r),t.h.insertBefore(r,_)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}),R(x(Dt,{context:t.context},e.__v),t.v)}function At(e,t){var n=x(It,{__v:e,h:t});return n.containerInfo=t,n}(V.prototype=new w).__a=function(e){var t=this,n=ht(t.__v),r=t.l.get(e);return r[0]++,function(_){var o=function(){t.props.revealOrder?(r.push(_),Le(t,e,r)):_()};n?n(o):o()}},V.prototype.render=function(e){this.i=null,this.l=new Map;var t=N(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Le(e,n,t)})};var vt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Mt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Vt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Wt=/[A-Z0-9]/g,Ft=typeof document<"u",Bt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function jt(e,t,n){return t.__k==null&&(t.textContent=""),R(e,t),typeof n=="function"&&n(),e?e.__c:null}function qt(e,t,n){return Ye(e,t),typeof n=="function"&&n(),e?e.__c:null}w.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(w.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var De=f.event;function zt(){}function Gt(){return this.cancelBubble}function Jt(){return this.defaultPrevented}f.event=function(e){return De&&(e=De(e)),e.persist=zt,e.isPropagationStopped=Gt,e.isDefaultPrevented=Jt,e.nativeEvent=e};var ye,Zt={enumerable:!1,configurable:!0,get:function(){return this.class}},Ie=f.vnode;f.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,_={},o=r.indexOf("-")===-1;for(var i in n){var l=n[i];if(!(i==="value"&&"defaultValue"in n&&l==null||Ft&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var s=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&l===!0?l="":s==="translate"&&l==="no"?l=!1:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?i="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Bt(n.type)?s==="onfocus"?i="onfocusin":s==="onblur"?i="onfocusout":Vt.test(i)&&(i=s):s=i="oninput":o&&Mt.test(i)?i=i.replace(Wt,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&_[i=s]&&(i="oninputCapture"),_[i]=l}}r=="select"&&_.multiple&&Array.isArray(_.value)&&(_.value=N(n.children).forEach(function(c){c.props.selected=_.value.indexOf(c.props.value)!=-1})),r=="select"&&_.defaultValue!=null&&(_.value=N(n.children).forEach(function(c){c.props.selected=_.multiple?_.defaultValue.indexOf(c.props.value)!=-1:_.defaultValue==c.props.value})),n.class&&!n.className?(_.class=n.class,Object.defineProperty(_,"className",Zt)):(n.className&&!n.class||n.class&&n.className)&&(_.class=_.className=n.className),t.props=_}(e),e.$$typeof=vt,Ie&&Ie(e)};var Ae=f.__r;f.__r=function(e){Ae&&Ae(e),ye=e.__c};var Me=f.diffed;f.diffed=function(e){Me&&Me(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),ye=null};var Kt={ReactCurrentDispatcher:{current:{readContext:function(e){return ye.__n[e.__c].props.value},useCallback:tt,useContext:nt,useDebugValue:rt,useDeferredValue:st,useEffect:O,useId:_t,useImperativeHandle:et,useInsertionEffect:ft,useLayoutEffect:j,useMemo:X,useReducer:ve,useRef:Xe,useState:Q,useSyncExternalStore:lt,useTransition:at}}};function Yt(e){return x.bind(null,e)}function ee(e){return!!e&&e.$$typeof===vt}function Qt(e){return ee(e)&&e.type===E}function Xt(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function en(e){return ee(e)?$t.apply(null,arguments):e}function tn(e){return!!e.__k&&(R(null,e),!0)}function nn(e){return e&&(e.base||e.nodeType===1&&e)||null}var rn=function(e,t){return e(t)},_n=function(e,t){return e(t)},on=E,un=ee,Ve={useState:Q,useId:_t,useReducer:ve,useEffect:O,useLayoutEffect:j,useInsertionEffect:ft,useTransition:at,useDeferredValue:st,useSyncExternalStore:lt,startTransition:ct,useRef:Xe,useImperativeHandle:et,useMemo:X,useCallback:tt,useContext:nt,useDebugValue:rt,version:"18.3.1",Children:Tt,render:jt,hydrate:qt,unmountComponentAtNode:tn,createPortal:At,createElement:x,createContext:wt,createFactory:Yt,cloneElement:en,createRef:yt,Fragment:E,isValidElement:ee,isElement:un,isFragment:Qt,isMemo:Xt,findDOMNode:nn,Component:w,PureComponent:ae,memo:Ut,forwardRef:Ot,flushSync:_n,unstable_batchedUpdates:rn,StrictMode:on,Suspense:Z,SuspenseList:V,lazy:Lt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Kt};const ln=e=>e;function cn(e,t=ln){const n=Ve.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return Ve.useDebugValue(n),n}const sn=e=>{const t=Pt(e),n=r=>cn(t,r);return Object.assign(n,t),n},an=e=>sn(e),ge=an(e=>({value:"",buttonValue:"",resetState:()=>e({value:"",buttonValue:!1}),setState:t=>{t.type=="showUI"&&e({visible:!0,value:t.value}),t.type=="hideUI"&&it("close",{},n=>{e({visible:!1})})},setButtonValue:t=>{e({buttonValue:t})}}));function fn(){const{value:e,buttonValue:t,setButtonValue:n,resetState:r}=ge(),[_,o]=Q("?");return O(()=>{it("whoami",{},i=>{o(i)})},[]),k("div",{className:"nui-wrapper w-screen h-screen flex justify-center items-center",children:k("div",{id:"nui-content",className:"w-1/2 h-1/2 bg-red-400",children:[k("p",{children:[k("strong",{children:"Value:"})," ",e]}),k("p",{children:[k("strong",{children:"ButtonValue:"})," ",t]}),k("p",{children:[k("strong",{children:"Who am i: "})," ",_]}),k("button",{type:"button",className:"bg-slate-500 p-2 border-2 mt-2 text-white font-semibold rounded-lg",onClick:()=>n("Button Value"),children:"Change Value"}),k("button",{type:"button",className:"bg-slate-500 p-2 border-2 ml-3 text-white font-semibold rounded-lg",onClick:()=>r(),children:"Reset"})]})})}const pn=({children:e})=>{const{setState:t}=ge();return O(()=>{document.addEventListener("keydown",n=>{n.key=="Escape"&&t({type:"hideUI"})})},[]),O(()=>{window.addEventListener("message",n=>{const{value:r}=n.data.data,_=n.data.type;t({type:_,value:r})})},[]),e};function dn(){const{visible:e}=ge();return O(()=>{e==!0?document.body.style.display="flex":document.body.style.display="none"},[e]),k(pn,{children:e==!0?k(fn,{}):void 0})}R(k(dn,{}),document.getElementById("app"));
