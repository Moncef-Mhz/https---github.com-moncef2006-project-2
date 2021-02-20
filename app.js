const logo = document.querySelector('.logo');
const links = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const content = document.querySelector('.content');
const lang = document.querySelector('.lang');
const social = document.querySelector('.social');


const tl = new TimelineMax();


tl.fromTo(logo, 2, { opacity:"0", x:"-100%" } ,{opacity:"1", x:"0%" , ease: Power2.easeInOut})
.fromTo(links, 2,{ opacity:"0", y:"-100%" } ,{opacity:"1",y:"0%" , ease: Power2.easeInOut},'-=2')
.fromTo(burger, 2,{ opacity:"0", x:"100%" } ,{opacity:"1",x:"0%" , ease: Power2.easeInOut},'-=2')
.fromTo(content, 2,{ opacity:"0", x:"-50%" } ,{opacity:"1",x:"0%" , ease: Power2.easeInOut},'-=2')
.fromTo(lang, 2,{ opacity:"0", x:"-100%",y:"100%" } ,{opacity:"1",x:"0%",y:"0%" , ease: Power2.easeInOut},'-=2')
.fromTo(social, 2,{ opacity:"0", x:"35%",y:"50%" } ,{opacity:"1",x:"0%",y:"0%" , ease: Power2.easeInOut},'-=2')



