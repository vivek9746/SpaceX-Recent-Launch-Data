(this.webpackJsonpspacexdata=this.webpackJsonpspacexdata||[]).push([[0],{110:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(15),r=t.n(o),i=(t(76),t(77),t(30)),l=t.n(i),s=t(57),d=t.n(s),u=function(){return c.a.createElement("div",{className:l.a.landing},c.a.createElement("div",{className:l.a.VideoBox},c.a.createElement("div",{className:l.a.LandingOverlay}),c.a.createElement("div",null,c.a.createElement("video",{autoPlay:"autoplay",muted:!0,loop:"loop"},c.a.createElement("source",{src:d.a,type:"video/mp4"})))))},m=t(14),p=t.n(m),v=t(24),h=t(12),_=t(7),f=t.n(_),E=t(25),b=t.n(E),w="",g="",N=null,x=function(){var e=Object(n.useState)(null),a=Object(h.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(null),i=Object(h.a)(r,2),l=i[0],s=i[1],d=Object(n.useState)(null),u=Object(h.a)(d,2),m=u[0],_=u[1],E=Object(n.useState)(null),x=Object(h.a)(E,2),k=x[0],D=x[1],y=Object(n.useState)(null),j=Object(h.a)(y,2),C=j[0],O=j[1],B=Object(n.useState)(null),L=Object(h.a)(B,2),S=L[0],A=L[1],F=Object(n.useState)(null),I=Object(h.a)(F,2),W=I[0],T=I[1],z=Object(n.useState)(null),M=Object(h.a)(z,2),V=M[0],H=M[1],J=Object(n.useState)(null),P=Object(h.a)(J,2),R=P[0],G=P[1],q=function(){var e=Object(v.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.spacexdata.com/v4/launchpads/".concat(a));case 2:t=e.sent,n=t.data.locality,t.data.latitude,t.data.longitude,G(n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),U=function(){var e=Object(v.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LANDPAD IS",a),e.next=3,b.a.get("https://api.spacexdata.com/v4/landpads/".concat(a));case 3:t=e.sent,console.log(t),n=t.data.full_name,w=t.data.wikipedia,console.log(w),H(n);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),X=function(){var e=Object(v.a)(p.a.mark((function e(a){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.spacexdata.com/v4/rockets/".concat(a));case 2:t=e.sent,console.log(t),n=t.data.name,c=t.data.flickr_images[0],console.log(c),A(n),T(c);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(v.a)(p.a.mark((function e(){var a,t,n,c,r,i,l,d,u,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.spacexdata.com/v4/launches/latest");case 2:N=e.sent,console.log(typeof N),a=N.data,t=a.name,n=a.details,c=a.date_utc,r=c.split("T")[0],i=c.split("T")[1],l=a.links.youtube_id,d=a.rocket,u=a.cores[0].landpad,m=a.launchpad,g=a.links.wikipedia,q(m),console.log("LANDPAD IS",u),null!=u&&U(u),console.log(u),X(d),console.log(l),o(t),s(n),_(r),D(i),O("https://www.youtube.com/embed/".concat(l)),N=N.data,console.log(N);case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Y()})),c.a.createElement("div",null,c.a.createElement("div",{className:f.a.dashboard,id:"dashboard"},c.a.createElement("div",{className:f.a.navButtonContainer},c.a.createElement("div",{className:f.a.mainDiv},c.a.createElement("div",{className:f.a.div1},c.a.createElement("div",{className:f.a.divMissionName},c.a.createElement("p",null,t)),c.a.createElement("div",{className:f.a.divLaunchTime},c.a.createElement("h6",null,m),c.a.createElement("h6",null,k))),c.a.createElement("div",{className:f.a.div2},l),c.a.createElement("div",{className:f.a.div3},c.a.createElement("iframe",{id:"ytplayer",type:"text/html",width:"100%",height:"100%",src:C,frameborder:"0"})),c.a.createElement("div",{className:f.a.div4},c.a.createElement("div",{className:f.a.div5},c.a.createElement("div",{className:f.a.div6},c.a.createElement("img",{className:f.a.image,src:W}),c.a.createElement("div",{className:f.a.overlay}),c.a.createElement("div",{className:f.a.rocketName},S))),c.a.createElement("div",{className:f.a.div7},c.a.createElement("div",{className:f.a.div8,onClick:function(){R&&"Cape Canaveral"==R&&window.open("https://www.google.com/maps/place/Cape+Canaveral/@28.6085484,-80.606357")}},R),c.a.createElement("div",{className:f.a.div8,onClick:function(){V&&window.open(w)}},V))),c.a.createElement("div",{className:f.a.WikiDiv,onClick:function(){window.open(g)}},"Wikipedia")))))},k=t(114),D=t(112),y=t(58),j=t.n(y),C=function(){return c.a.createElement(k.a,{bg:"transparent",variant:"dark",className:j.a.NavigationBar},c.a.createElement(k.a.Brand,{href:"#home"},"SpaceX"),c.a.createElement(D.a,{className:"mr-auto"},c.a.createElement("a",{href:"https://spacex.com/vehicles/falcon-9/",target:"_blank"},"Falcon 9"),c.a.createElement("a",{href:"https://www.spacex.com/vehicles/falcon-heavy/",target:"_blank"},"Falcon Heavy"),c.a.createElement("a",{href:"https://www.spacex.com/vehicles/dragon/",target:"_blank"},"DRAGON")))},O=t(65),B=t(37),L=t.n(B),S=t(64),A=function(){return c.a.createElement("div",{className:L.a.btnContainer},c.a.createElement(S.Link,{to:"dashboard",smooth:!0,duration:1e3},c.a.createElement(O.a,{className:L.a.LaunchesButton,variant:"outline-light"},"RECENT LAUNCH")))},F=t(67),I=t(5),W=t(113),T=t(38),z=t.n(T),M=function(){return c.a.createElement("div",null,c.a.createElement(W.a,{interval:2e3},["https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/145a4477029515.5c7bcf54cc7f2.png","https://cdn.vox-cdn.com/thumbor/1-YAlR7xGDpi7YnPLvX8lAza5HM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20033175/spacex.jpg","https://cms.qz.com/wp-content/uploads/2018/03/spacex-falcon-9-elon-musk-50-launch.jpg?quality=75&strip=all&w=1600&h=900&crop=1","https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://cdn.hipwallpaper.com/i/94/67/6pM5zl.jpg"].map((function(e){return c.a.createElement(W.a.Item,null,c.a.createElement("div",{className:z.a.InnerContainer},c.a.createElement("img",{src:e,className:z.a.InnerContainer})))}))))},V=t(39),H=t.n(V),J=function(){return c.a.createElement("div",{style:{marginBottom:"0px"}},c.a.createElement("div",{className:H.a.FooterDiv},c.a.createElement("div",{className:H.a.innerFooter},c.a.createElement("h6",{onClick:function(){window.open("https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor")}},"Twitter"),c.a.createElement("h6",{onClick:function(){window.open("https://www.instagram.com/spacex/")}},"Instagram"),c.a.createElement("h6",{onClick:function(){window.open("https://www.linkedin.com/company/spacex/")}},"Linkedin"),c.a.createElement("h6",{onClick:function(){window.open("https://www.youtube.com/user/spacexchannel")}},"Youtube"))))};var P=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(F.a,null,c.a.createElement(C,null),c.a.createElement(I.c,null,c.a.createElement(I.a,{exact:!0,path:"/spacex.com/vehicles/falcon-9/",render:function(){return window&&(window.location="https://spacex.com/vehicles/falcon-9/")}})),c.a.createElement(A,null),c.a.createElement(u,null),c.a.createElement(x,null),c.a.createElement(M,null),c.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,a,t){e.exports={landing:"Landing_landing__12hcJ",VideoBox:"Landing_VideoBox__24gCG",LandingOverlay:"Landing_LandingOverlay__2EDfi"}},37:function(e,a,t){e.exports={btnContainer:"LaunchesButton_btnContainer__1wV_l",LaunchesButton:"LaunchesButton_LaunchesButton__sBii0"}},38:function(e,a,t){e.exports={InnerContainer:"gallery_InnerContainer__23Cnj"}},39:function(e,a,t){e.exports={FooterDiv:"Footer_FooterDiv__kzvEz",innerFooter:"Footer_innerFooter__fgEzy"}},57:function(e,a,t){e.exports=t.p+"static/media/LandingVideo.70cec231.mp4"},58:function(e,a,t){e.exports={NavigationBar:"NavigationBar_NavigationBar__3IJeR"}},7:function(e,a,t){e.exports={carousel:"Dashboard_carousel__jGt0n",navButtonContainer:"Dashboard_navButtonContainer__PgXbf","carousel-indicators":"Dashboard_carousel-indicators__3-TRr",dashboard:"Dashboard_dashboard__VfGUl",div1:"Dashboard_div1__3Nf4Y",divMissionName:"Dashboard_divMissionName__2sqiP",divLaunchTime:"Dashboard_divLaunchTime__rZzTt",div2:"Dashboard_div2__KOBW9",div3:"Dashboard_div3__-kJWU",div4:"Dashboard_div4__3SZA7",div5:"Dashboard_div5__C0_3U",div6:"Dashboard_div6__14bVE",image:"Dashboard_image__3kQcI",overlay:"Dashboard_overlay__1gpyE",rocketName:"Dashboard_rocketName__29WHR",div7:"Dashboard_div7__2CzAV",div8:"Dashboard_div8__1oApH",WikiDiv:"Dashboard_WikiDiv__-4FMg",mainDiv:"Dashboard_mainDiv__3F4Zu",LaunchesButton:"Dashboard_LaunchesButton__3w5va"}},71:function(e,a,t){e.exports=t(110)},76:function(e,a,t){},77:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.6b99f871.chunk.js.map