(this.webpackJsonp=this.webpackJsonp||[]).push([[24],{18:function(e,t,s){"use strict";s.r(t),s.d(t,"STATE_INIT",(function(){return f})),s.d(t,"AppStateManager",(function(){return v}));var a=s(34),n=s(11),i=s(65),o=s(23),r=s(20),h=s(3),c=s(10),d=s(61),l=s(0),g=s(81),u=s(57),p=function(e,t,s,a){return new(s||(s=Promise))((function(n,i){function o(e){try{h(a.next(e))}catch(e){i(e)}}function r(e){try{h(a.throw(e))}catch(e){i(e)}}function h(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,r)}h((a=a.apply(e,t||[])).next())}))};const m=h.a.version,f={allDialogsLoaded:{},pinnedOrders:{},contactsList:[],updates:{},filters:{},maxSeenMsgId:0,stateCreatedTime:Date.now(),recentEmoji:[],topPeers:[],recentSearch:[],version:m,authState:{_:l.isMobile?"authStateSignIn":"authStateSignQr"},hiddenPinnedMessages:{},settings:{messagesTextSize:16,sendShortcut:"enter",animationsEnabled:!0,autoDownload:{contacts:!0,private:!0,groups:!0,channels:!0},autoPlay:{gifs:!0,videos:!0},stickers:{suggest:!0,loop:!0},emoji:{suggest:!0,big:!0},themes:[{name:"day",background:{type:"image",blur:!1,slug:"ByxGo2lrMFAIAAAAmkJxZabh8eM",highlightningColor:"hsla(85.5319, 36.9171%, 40.402%, 0.4)"}},{name:"night",background:{type:"color",blur:!1,color:"#0f0f0f",highlightningColor:"hsla(0, 0%, 3.82353%, 0.4)"}}],theme:"system",notifications:{sound:!1}},keepSigned:!0},S=Object.keys(f),b=["contactsList","stateCreatedTime","maxSeenMsgId","filters","topPeers"];class v extends a.a{constructor(){super(),this.log=Object(o.b)("STATE"),this.neededPeers=new Map,this.singlePeerMap=new Map,this.storages={users:new d.a(g.a,"users"),chats:new d.a(g.a,"chats"),dialogs:new d.a(g.a,"dialogs")},this.storagesResults={},this.storage=i.a,this.loadSavedState()}loadSavedState(){return this.loaded||(console.time("load state"),this.loaded=new Promise(e=>{const t=Object.keys(this.storages),s=t.map(e=>this.storages[e].getAll()),a=S.map(e=>i.a.get(e)).concat(u.a.get("user_auth")).concat(i.a.get("user_auth")).concat(s);Promise.all(a).then(s=>p(this,void 0,void 0,(function*(){let a=this.state={};for(let e=0,t=S.length;e<t;++e){const t=S[e],n=s[e];void 0!==n?a[t]=n:this.pushToState(t,Object(r.a)(f[t]))}s.splice(0,S.length);let o=s.shift(),d=s.shift();if(!o&&d){o=d;const e=["dc","server_time_offset","xt_instance"];for(let t=1;t<=5;++t)e.push(`dc${t}_server_salt`),e.push(`dc${t}_auth_key`);const t=yield Promise.all(e.map(e=>i.a.get(e)));e.push("user_auth"),t.push("number"==typeof o?{dcID:t[0]||h.a.baseDcId,id:o}:o);let s={};e.forEach((e,a)=>{s[e]=t[a]}),yield u.a.set(s)}if(!o)try{const e=Object.keys(localStorage);for(let t=0;t<e.length;++t){const s=e[t];let a;try{a=localStorage.getItem(s),a=JSON.parse(a)}catch(e){}u.a.set({[s]:a})}o=u.a.getFromCache("user_auth")}catch(e){this.log.error("localStorage import error",e)}o&&(a.authState={_:"authStateSignedIn"},n.default.dispatchEvent("user_auth","number"==typeof o?{dcID:0,id:o}:o));for(let e=0,a=t.length;e<a;++e)this.storagesResults[t[e]]=s[e];s.splice(0,t.length);const l=Date.now();if(a.stateCreatedTime+864e5<l){c.b&&this.log("will refresh state",a.stateCreatedTime,l);(e=>{e.forEach(e=>{this.pushToState(e,Object(r.a)(f[e]));const t=this.storagesResults[e];t&&t.length&&(t.length=0)})})(b)}if(!a.settings.hasOwnProperty("theme")&&a.settings.hasOwnProperty("nightTheme")&&(a.settings.theme=a.settings.nightTheme?"night":"day",this.pushToState("settings",a.settings)),!a.settings.hasOwnProperty("themes")&&a.settings.background){a.settings.themes=Object(r.a)(f.settings.themes);const e=a.settings.themes.find(e=>e.name===a.settings.theme);e&&(e.background=a.settings.background,this.pushToState("settings",a.settings))}Object(r.k)(f,a,e=>{this.pushToState(e,a[e])}),a.version!==m&&this.pushToState("version",m),n.default.settings=a.settings,c.b&&this.log("state res",a,Object(r.a)(a)),console.timeEnd("load state"),e(a)}))).catch(e)})),this.loaded}getState(){return void 0===this.state?this.loadSavedState():Promise.resolve(this.state)}setByKey(e,t){Object(r.j)(this.state,e,t),n.default.dispatchEvent("settings_updated",{key:e,value:t});const s=e.split(".")[0];this.pushToState(s,this.state[s])}pushToState(e,t,s=!0){s&&(this.state[e]=t),this.storage.set({[e]:t})}requestPeer(e,t,s){let a=this.neededPeers.get(e);a&&a.has(t)||(a||(a=new Set,this.neededPeers.set(e,a)),a.add(t),this.dispatchEvent("peerNeeded",e),void 0!==s&&this.keepPeerSingle(e,t))}isPeerNeeded(e){return this.neededPeers.has(e)}keepPeerSingle(e,t){const s=this.singlePeerMap.get(t);if(s&&s!==e&&this.neededPeers.has(s)){const e=this.neededPeers.get(s);e.delete(t),e.size||(this.neededPeers.delete(s),this.dispatchEvent("peerUnneeded",s))}e&&this.singlePeerMap.set(t,e)}}v.STATE_INIT=f;const y=new v;c.a.appStateManager=y,t.default=y}}]);
//# sourceMappingURL=24.eb5598daa8a66bc40f29.chunk.js.map