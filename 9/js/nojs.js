const observer=new MutationObserver((e=>{const o=document.querySelector(".main-header");e.forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0){"header"===e.addedNodes[0].nodeName.toLowerCase()&&(o.classList.remove("main-header--nojs"),observer.disconnect())}}))}));observer.observe(document.documentElement,{childList:!0,subtree:!0});