(self.webpackChunkterserah_app=self.webpackChunkterserah_app||[]).push([[659],{552:(t,e,i)=>{var a,r,n;!function(s,c){if(s){c=c.bind(null,s,s.document),t.exports?c(i(879)):(r=[i(879)],void 0===(n="function"==typeof(a=c)?a.apply(e,r):a)||(t.exports=n))}}("undefined"!=typeof window?window:0,(function(t,e,i){"use strict";if(t.addEventListener){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,n=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,s=/^picture$/i,c=i.cfg,o={getParent:function(e,i){var a=e,r=e.parentNode;return i&&"prev"!=i||!r||!s.test(r.nodeName||"")||(r=r.parentNode),"self"!=i&&(a="prev"==i?e.previousElementSibling:i&&(r.closest||t.jQuery)&&(r.closest?r.closest(i):jQuery(r).closest(i)[0])||r),a},getFit:function(t){var e,i,a=getComputedStyle(t,null)||{},s=a.content||a.fontFamily,c={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!c.fit&&s&&(e=s.match(r))&&(c.fit=e[1]),c.fit?(!(i=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&s&&(e=s.match(n))&&(i=e[1]),c.parent=o.getParent(t,i)):c.fit=a.objectFit,c},getImageRatio:function(e){var i,r,n,o,d,u,l,f=e.parentNode,p=f&&s.test(f.nodeName||"")?f.querySelectorAll("source, img"):[e];for(i=0;i<p.length;i++)if(r=(e=p[i]).getAttribute(c.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",n=e._lsMedia||e.getAttribute("media"),n=c.customMedia[e.getAttribute("data-media")||n]||n,r&&(!n||(t.matchMedia&&matchMedia(n)||{}).matches)){(o=parseFloat(e.getAttribute("data-aspectratio")))||((d=r.match(a))?"w"==d[2]?(u=d[1],l=d[3]):(u=d[3],l=d[1]):(u=e.getAttribute("width"),l=e.getAttribute("height")),o=u/l);break}return o},calculateSize:function(t,e){var i,a,r,n=this.getFit(t),s=n.fit,c=n.parent;return"width"==s||("contain"==s||"cover"==s)&&(a=this.getImageRatio(t))?(c?e=c.clientWidth:c=t,r=e,"width"==s?r=e:(i=e/c.clientHeight)&&("cover"==s&&i<a||"contain"==s&&i>a)&&(r=e*(a/i)),r):e}};i.parentFit=o,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==i){var e=t.target;t.detail.width=o.calculateSize(e,t.detail.width)}}))}}))}}]);
//# sourceMappingURL=common_app_fe029125.bundle.js.map