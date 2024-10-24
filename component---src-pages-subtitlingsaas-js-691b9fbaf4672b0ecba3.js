"use strict";(self.webpackChunkuxpages=self.webpackChunkuxpages||[]).push([[624,559],{739:function(e,t,a){a.r(t);var n=a(6540);t.default=e=>{var t,a,o,r,s;let{videoSrc:i,popups:l,videoId:m}=e;const{0:c,1:d}=(0,n.useState)(0),{0:u,1:p}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=document.getElementById(m),t=()=>{c<l.length&&e.currentTime>=l[c].time&&(p(!0),e.pause(),setTimeout((()=>{p(!1),e.play(),d((e=>e+1))}),5500))},a=()=>{d(0),p(!1)};return e.addEventListener("timeupdate",t),e.addEventListener("ended",a),()=>{e.removeEventListener("timeupdate",t),e.removeEventListener("ended",a)}}),[c,l,m]),n.createElement("div",{className:"video-container"},n.createElement("video",{id:m,width:"800",controls:!0,loop:!0},n.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),u&&n.createElement("div",{className:"popup "+(u?"show":""),style:{top:(null===(t=l[c])||void 0===t?void 0:t.top)||"auto",bottom:(null===(a=l[c])||void 0===a?void 0:a.bottom)||"auto",left:(null===(o=l[c])||void 0===o?void 0:o.left)||"50%",right:(null===(r=l[c])||void 0===r?void 0:r.right)||"auto",transform:(null===(s=l[c])||void 0===s?void 0:s.transform)||"translateX(-50%)"}},c<l.length&&n.createElement(n.Fragment,null,l[c].emoji?n.createElement("div",{className:"emoji",role:"img","aria-label":"emoji"},l[c].emoji):n.createElement("img",{src:l[c].imgSrc,alt:"Popup",id:"popupImage"}),n.createElement("div",{id:"popupTitle"},l[c].title),n.createElement("div",{id:"popupText"},l[c].message))))}},6732:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(6540),o=a(739),r=(a(8154),a(7092),a(7002)),s=(a(633),a(8168),a(1319),a(7771),a(5251),a(3726),a.p+"static/ASRPurchaseJourney-4b2054892ecbc867e31e20c52d4aa5e5.mp4"),i=a.p+"static/Searchbarautocomplete-79c7134b600aefb0c9ee59e7e66d5198.mp4",l=a.p+"static/AMARA_HOMEPAGE-66f1e2ed666458655f5b9369f738824b.mp4",m=a.p+"static/EditorWalkthrough-1ef15986e5ea1a096adb8acf9072010b.mp4",c=a.p+"static/AssignmentEditorStep3_generateCaptions-364307b782a907526e5e9655917fe1d3.mp4",d=a.p+"static/AssignmentEditorStep3_generateSubs-4ed1ddc9c05a512f16fa6bb2cb406f91.mp4",u=a(1883);var p=()=>{r.A;return n.createElement("div",null,n.createElement("div",{className:"row align-middle hero_block"},n.createElement("div",{className:"small-12 columns"},n.createElement("h1",{className:"hidden-h1"},"uxpages ux pages"),n.createElement("h2",{className:"hero_line amara align-center"},"Subtitling SaaS"),n.createElement("h3",{className:"text-center"},"Enterprise platform product updates"),n.createElement("img",{src:u.A,alt:"Project Thumbnail",className:"thumbnailsubspage"}))),n.createElement("div",{id:"recent_work",className:"row align-center margin10_bottom margin10_top"},n.createElement("div",{className:"small-11 columns index-prjct "},n.createElement("div",{className:"row"},n.createElement("div",{className:"small-12 columns dtls-text"},n.createElement("h2",null,"Search suggestion"),n.createElement("p",null,"📊 ",n.createElement("strong",null,"Identified issue from research"),": one user testing insight was that some users needed quicker access to video, members or support content."),n.createElement("p",null,"💡 ",n.createElement("strong",null,"Solution"),": useful search suggestions lead to relevant results and are visually distinct from the query text. We decided to display the results within categories for better scanning."),n.createElement("p",null,"🎯 ",n.createElement("strong",null,"Impacted KPI"),": time-on-task, retention, satisfaction score."),n.createElement("div",{className:"skills_underline_orange"}),n.createElement("div",{className:"margin5_top"},n.createElement(o.default,{videoSrc:i,popups:[{time:4,title:"Decreased interaction cost",message:"User can type less",emoji:"⏰",top:"30%",left:"30%",transform:"none"}],videoId:"video2"})))))),n.createElement("div",{id:"recent_work",className:"row align-center margin10_bottom margin10_top"},n.createElement("div",{className:"small-11 columns index-prjct "},n.createElement("div",{className:"row"},n.createElement("div",{className:"small-12 columns dtls-text"},n.createElement("h2",null,"Feature discovery"),n.createElement("p",null,"📊 ",n.createElement("strong",null,"Identified issue from research"),':Undiscovered features ("How I did not know we could do that!")'),n.createElement("p",null,"❗ ",n.createElement("strong",null,"Business Problem"),": how can we increase the percentage of new users of a feature?"),n.createElement("p",null,"💡 ",n.createElement("strong",null,"Solution"),": we prompted users to display features they are not using that might be useful for them to save time in the captioning process."),n.createElement("p",null,"🎯 ",n.createElement("strong",null,"Impacted KPI"),": adoption rate & satisfaction score."),n.createElement("div",{className:"skills_underline_orange"}),n.createElement("div",{className:"margin5_top"},n.createElement(o.default,{videoSrc:m,popups:[{time:4,title:"Video editor",message:"Feature discovery.",emoji:"✅",top:"30%",left:"30%",transform:"none"}],videoId:"video5"})))))),n.createElement("div",{id:"recent_work",className:"row align-center margin10_bottom margin10_top"},n.createElement("div",{className:"small-11 columns index-prjct "},n.createElement("div",{className:"row"},n.createElement("div",{className:"small-12 columns dtls-text"},n.createElement("h2",null,"Gen AI Integration"),n.createElement("p",null,"📊 ",n.createElement("strong",null,"Identified issue from research"),':Caption transcription is a major pain point. ("If I had a magic wand I would just get all this text out of the video")'),n.createElement("p",null,"❗ ",n.createElement("strong",null,"Problem"),":this is a key feature that would impact many KPIs. But how do we get our user to actually buy and use caption generation?"),n.createElement("p",null,"💡 ",n.createElement("strong",null,"Solution"),":by integrating the feature directly in context, alongside with SEO-oriented landing pages. Our goal was to improve the overall experience of generative AI by quickly providing a first draft of their captions and allowing users to use or dicard each generated caption."),n.createElement("p",null,"🎯 ",n.createElement("strong",null,"Impacted KPI"),":revenue, upgrade rate, retention rate, time-on-task, time to 1st action (sign-up), adoption rate, satisfaction score."),n.createElement("div",{className:"skills_underline_orange"}),n.createElement("div",{className:"margin5_top"},n.createElement(o.default,{videoSrc:c,popups:[{time:4,title:"Video editor",message:"AI captions Generation.",emoji:"✅",top:"30%",left:"30%",transform:"none"}],videoId:"video6"})),n.createElement("p",{className:"margin5_top"},"As a second step we offered our users the ability to translate the first speech-to-text output:"),n.createElement("div",{className:"margin5_top"},n.createElement(o.default,{videoSrc:d,popups:[{time:4,title:"Video editor",message:"AI captions translation.",emoji:"✅",top:"30%",left:"30%",transform:"none"}],videoId:"video7"})))))),n.createElement("div",{id:"recent_work",className:"row align-center"},n.createElement("div",{className:"small-11 columns index-prjct "},n.createElement("div",{className:"row"},n.createElement("div",{className:"small-12 columns dtls-text"},n.createElement("h2",null,"Gen-AI Self-service ordering journey"),n.createElement("p",null,"📊 ",n.createElement("strong",null,"Identified issue from research"),': "What If I just want to extract text without using your editor?"'),n.createElement("p",null,"❗ ",n.createElement("strong",null,"Problem"),': how do we handle the purchase journey for a service that needs time to be available for users? We needed to give our AI time to "cook" the captions order.'),n.createElement("p",null,"💡 ",n.createElement("strong",null,"Solution"),": by being transparent about the process (operational transparency). People will value your product more if they can see “behind the curtain”. The rest of the process includes all the standard checkout elements."),n.createElement("p",null,"🎯 ",n.createElement("strong",null,"Impacted KPI"),": activation, revenue, task success rate, abandonment rate and satisfaction score. We also took the opportunity to get more information prompting our users to fill a form while waiting."),n.createElement("div",{className:"skills_underline_orange margin5_bottom"}),n.createElement("div",{className:"margin5_top"},n.createElement(o.default,{videoSrc:s,popups:[{time:2,title:"Lower-effort principle",message:"Reduced friction by offering only two options and using BIG clickable areas.",emoji:"🖱️",top:"10%",left:"10%",transform:"none"},{time:3,title:"Lower-effort principle",message:"Reduced friction by offering only two options and using BIG clickable areas.",emoji:"🖱️",top:"10%",left:"10%",transform:"none"},{time:5,title:"Social Proof",message:"Organizations endorsing a product improve conversion.",emoji:"📈",top:"20%",left:"30%",transform:"none"},{time:6,title:"Social Proof",message:"Organizations endorsing a product improve conversion.",emoji:"📈",top:"20%",left:"30%",transform:"none"},{time:10,title:"Cognitive load",message:"✂ Split steps:It’s easier to do three small steps than a big one",emoji:"🧠",top:"45%",left:"10%",transform:"none"},{time:10,title:"Cognitive load",message:"✂ Split steps:It’s easier to do three small steps than a big one",emoji:"🧠",top:"45%",left:"10%",transform:"none"},{time:12,title:"Security icons",message:"Help user to perceive the page being secure to share financial details.",emoji:"🔒",bottom:"-5%",left:"10%",transform:"none"},{time:13,title:"Security icons",message:"Help user to perceive the page being secure to share financial details.",emoji:"🔒",bottom:"-5%",left:"10%",transform:"none"},{time:23,title:"Value",message:"Create value based on customers' pains to capture people's attention. This feature saves a lot of time.",emoji:"⏳ ",top:"40%",left:"40%",transform:"none"},{time:23,title:"Value",message:"Create value based on customers' pains to capture people's attention. This feature saves a lot of time.",emoji:"⏳ ",top:"40%",left:"40%",transform:"none"},{time:38,title:"Order Review",message:"Reassurance/ remove hesitations.",emoji:"✅ ",bottom:"25%",left:"30%",transform:"none"},{time:39,title:"Order Review",message:"Reassurance/ remove hesitations.",emoji:"✅",bottom:"25%",left:"30%",transform:"none"},{time:40,title:"Be clear.",message:"Descriptive call to action button.",emoji:"👉",bottom:"10%",left:"35%",transform:"none"},{time:41,title:"Be clear.",message:"Descriptive call to action button.",emoji:"👉",bottom:"10%",left:"35%",transform:"none"},{time:48,title:"Delightful payment success screen",message:"Make it visually clear that payment has successfully been done",emoji:"🎉",top:"40%",left:"25%",transform:"none"},{time:49,title:"Delightful payment success screen",message:"Make it visually clear that payment has successfully been done",emoji:"🎉",top:"40%",left:"25%",transform:"none"},{time:56,title:"Designing for Long Waits",message:"if the order preparation is less than 7mn...",emoji:"⏰",top:"10%",left:"30%",transform:"none"},{time:57,title:"Designing for Long Waits",message:"if the order preparation is less than 7mn...",emoji:"⏰",top:"10%",left:"30%",transform:"none"},{time:60,title:"Designing for Long Waits",message:"...then show the on-going operations. People will value your product more if they can see 'behind the curtain' (Operational transparency)",emoji:"⏰",top:"10%",left:"10%",transform:"none"},{time:61,title:"Designing for Long Waits",message:"...then show the on-going operations. People will value your product more if they can see 'behind the curtain' (Operational transparency)",emoji:"⏰",top:"10%",left:"10%",transform:"none"},{time:77,title:"Designing for Long Waits",message:"Turn waiting periods into value opportunities by getting the user to fill a form.",emoji:"⏰",top:"10%",left:"10%",transform:"none"},{time:77,title:"Designing for Long Waits",message:"Turn waiting periods into value opportunities by getting the user to fill a form.",emoji:"⏰",top:"10%",left:"10%",transform:"none"}],videoId:"video1"})))))),n.createElement("div",{id:"recent_work",className:"row align-center margin10_bottom margin10_top"},n.createElement("div",{className:"small-11 columns index-prjct "},n.createElement("div",{className:"row"},n.createElement("div",{className:"small-12 columns dtls-text"},n.createElement("h2",null,"Homepage"),n.createElement("p",null,"We already had multiple services SEO-oriented pages so we wanted the homepage to reflect what the organization is and all the services we offer. This page had to be a powerful communication tool for potential partners or funding partners. It also offers call to actions to our most profitable services and prompted users to create an account if they wanted to generate captions or use our video editor."),n.createElement("div",{className:"skills_underline_orange"}),n.createElement("div",{className:"margin5_top"},n.createElement(o.default,{videoSrc:l,popups:[{time:4,title:"Homepage",message:"Hero section was designed to attract 2 different audiences.",emoji:"✅",top:"30%",left:"30%",transform:"none"}],videoId:"video3"})))))),n.createElement("div",{id:"recent_work",className:"row align-center margin10_bottom margin10_top"},n.createElement("div",{className:"small-11 columns index-prjct "},n.createElement("div",{className:"row"},n.createElement("div",{className:"small-12 columns dtls-text"},n.createElement("h2",null,"Display onboarding steps left as empty state with progress bar right"),n.createElement("p",null,n.createElement("strong",null,"Problem"),": this is a key feature that would impact many KPIs. But how do we get our user to actually buy and use caption generation?"))))))}},1883:function(e,t,a){t.A=a.p+"static/LatestWork_amara2-d34d4a94b3f09a728acb9df62aaf229b.png"},8168:function(e,t,a){t.A=a.p+"static/Product_pub_book-11a9ea08bbfdab8c4168cd7b41e9e6a9.png"},5251:function(e,t,a){t.A=a.p+"static/case_sharemos_2-a85e78edf8a718864faa387cd144a700.png"},7771:function(e,t,a){t.A=a.p+"static/experience_pub_music-53b9585a5c426df01aea042df19160c7.jpg"},1319:function(e,t,a){t.A=a.p+"static/linkedin-header-b22fd1b4cc7e3b07fc95663d3b51c2af.jpg"},3726:function(e,t,a){t.A=a.p+"static/sharemos_app_sample_floid-ec1d7ba0e8d2ebe38ba7eb83bf4abaf8.gif"}}]);
//# sourceMappingURL=component---src-pages-subtitlingsaas-js-691b9fbaf4672b0ecba3.js.map