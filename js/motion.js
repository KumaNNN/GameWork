window.$&&window.$.Velocity&&(window.Velocity=window.$.Velocity),NexT.motion={},NexT.motion.integrator={queue:[],cursor:-1,init:function(){return this.queue=[],this.cursor=-1,this},add:function(fn){return this.queue.push(fn),this},next:function(){this.cursor++;var fn=this.queue[this.cursor];"function"==typeof fn&&fn(NexT.motion.integrator)},bootstrap:function(){this.next()}},NexT.motion.middleWares={logo:function(integrator){var sequence=[],brand=document.querySelector(".brand"),image=document.querySelector(".custom-logo-image"),title=document.querySelector(".site-title"),subtitle=document.querySelector(".site-subtitle"),logoLineTop=document.querySelector(".logo-line-before i"),logoLineBottom=document.querySelector(".logo-line-after i");function getMistLineSettings(element,translateX){return{e:element,p:{translateX:translateX},o:{duration:500,sequenceQueue:!1}}}function pushImageToSequence(){sequence.push({e:image,p:{opacity:1,top:0},o:{duration:200}})}brand&&sequence.push({e:brand,p:{opacity:1},o:{duration:200}}),"Mist"===CONFIG.scheme&&logoLineTop&&logoLineBottom&&sequence.push(getMistLineSettings(logoLineTop,"100%"),getMistLineSettings(logoLineBottom,"-100%")),"Muse"===CONFIG.scheme&&image&&pushImageToSequence(),title&&sequence.push({e:title,p:{opacity:1,top:0},o:{duration:200}}),subtitle&&sequence.push({e:subtitle,p:{opacity:1,top:0},o:{duration:200}}),"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||!image||pushImageToSequence(),0<sequence.length?(sequence[sequence.length-1].o.complete=function(){integrator.next()},Velocity.RunSequence(sequence)):integrator.next(),CONFIG.motion.async&&integrator.next()},menu:function(integrator){Velocity(document.querySelectorAll(".menu-item"),"transition.slideDownIn",{display:null,duration:200,complete:function(){integrator.next()}}),CONFIG.motion.async&&integrator.next()},subMenu:function(integrator){var subMenuItem=document.querySelectorAll(".sub-menu .menu-item");0<subMenuItem.length&&subMenuItem.forEach(element=>{element.style.opacity=1}),integrator.next()},postList:function(integrator){var postMotionOptions,postBlock=document.querySelectorAll(".post-block, .pagination, .comments"),postBlockTransition=CONFIG.motion.transition.post_block,postHeader=document.querySelectorAll(".post-header"),postHeaderTransition=CONFIG.motion.transition.post_header,postBody=document.querySelectorAll(".post-body"),postBodyTransition=CONFIG.motion.transition.post_body,collHeader=document.querySelectorAll(".collection-header"),collHeaderTransition=CONFIG.motion.transition.coll_header;0<postBlock.length&&(postMotionOptions=window.postMotionOptions||{stagger:100,drag:!0,complete:function(){integrator.next()}},CONFIG.motion.transition.post_block&&Velocity(postBlock,"transition."+postBlockTransition,postMotionOptions),CONFIG.motion.transition.post_header&&Velocity(postHeader,"transition."+postHeaderTransition,postMotionOptions),CONFIG.motion.transition.post_body&&Velocity(postBody,"transition."+postBodyTransition,postMotionOptions),CONFIG.motion.transition.coll_header)&&Velocity(collHeader,"transition."+collHeaderTransition,postMotionOptions),"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||integrator.next()},sidebar:function(integrator){var sidebarAffix=document.querySelector(".sidebar-inner"),sidebarAffixTransition=CONFIG.motion.transition.sidebar;!sidebarAffixTransition||"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||Velocity(sidebarAffix,"transition."+sidebarAffixTransition,{display:null,duration:200,complete:function(){sidebarAffix.style.transform="initial"}}),integrator.next()}};