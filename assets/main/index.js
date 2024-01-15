System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,o,i,a,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,c=e.Node,u=e.Component}],execute:function(){var p,s,l,d,g;i._RF.push({},"1bca9ToGIhIQpp4o0ghE78F","Background",void 0);var h=a.ccclass,f=a.property;e("Background",(p=h("Background"),s=f({type:c}),p((g=t((d=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,n(t,"parentBackground",g,o(t)),t}return r(t,e),t.prototype.update=function(e){var t=this.node.getPosition();t.x-=57.6*e,t.x<=-288&&(t.x=0),this.node.setPosition(t)},t}(u)).prototype,"parentBackground",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=d))||l));i._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,e,n,o,r,s,a,u,h,d,l,p;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){r=i.cclegacy,s=i._decorator,a=i.CCFloat,u=i.Node,h=i.Animation,d=i.Vec3,l=i.tween,p=i.Component}],execute:function(){var c,f,y,m,b,g,v,S,w,B,P;r._RF.push({},"17f98C9qolKUbr1+cKBWlnt","Bird",void 0);var j=s.ccclass,A=s.property;i("Bird",(c=j("Bird"),f=A({type:a,tooltip:"how height can it fly"}),y=A({type:a,tooltip:"how long can it fly"}),m=A({type:u}),b=A({type:u}),c((S=t((v=function(i){function t(){for(var t,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return t=i.call.apply(i,[this].concat(r))||this,n(t,"jumpHeight",S,o(t)),n(t,"jumpDuration",w,o(t)),n(t,"outerShield",B,o(t)),n(t,"innerShield",P,o(t)),t.birdAnimation=void 0,t.birdLocation=void 0,t.hitSomething=void 0,t.speedTurun=100,t}e(t,i);var r=t.prototype;return r.onLoad=function(){this.node.active=!0,this.resetBird(),this.birdAnimation=this.getComponent(h)},r.resetBird=function(){this.birdLocation=new d(0,0,0),this.node.setPosition(this.birdLocation),this.hitSomething=!1},r.fly=function(){var i=this;this.birdAnimation.stop(),l(this.node.position).to(this.jumpDuration,new d(this.node.position.x,this.node.position.y+this.jumpHeight,0),{easing:"smooth",onUpdate:function(t,e){i.node.position=t}}).start(),this.birdAnimation.play()},r.onClickAddSpeed=function(i){this.speedTurun=i},r.update=function(i){var t=this.node.getPosition();this.speedTurun-=90*i,t.y+=this.speedTurun*(2*i),this.node.setPosition(t),this.speedTurun-=.1;var e=this.speedTurun/5*3+this.node.getPosition().y/2.5;e>=45?e=45:e<=-60&&(e=-60),this.node.setRotationFromEuler(0,0,e)},r.fixingBirdPosition=function(){var i=this.node.getPosition();i.x=0,this.node.setPosition(i)},r.activateShieldUI=function(){this.innerShield.active=!0,this.outerShield.active=!0},r.resetShield=function(){this.innerShield.active=!1,this.outerShield.active=!1},t}(p)).prototype,"jumpHeight",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3.5}}),w=t(v.prototype,"jumpDuration",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3.5}}),B=t(v.prototype,"outerShield",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=t(v.prototype,"innerShield",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=v))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/BirdAudio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,u,n,o,r,a,c,l,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,u=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,a=t.AudioClip,c=t.AudioSource,l=t.Button,s=t.Component}],execute:function(){var p,d,m,h,f,y,B,v,b,S,g;o._RF.push({},"80415hfxRNMEYGcxa+hxNIs","BirdAudio",void 0);var A=r.ccclass,z=r.property;t("BirdAudio",(p=A("BirdAudio"),d=z({type:[a]}),m=z({type:c}),h=z({type:l}),f=z({type:l}),p((v=e((B=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,u(e,"clips",v,n(e)),u(e,"audioSource",b,n(e)),u(e,"muteButton",S,n(e)),u(e,"unmuteButton",g,n(e)),e.muteSound=!1,e}i(e,t);var o=e.prototype;return o.onAudioQueue=function(t){if(!this.muteSound){var e=this.clips[t];this.audioSource.playOneShot(e)}},o.setButton=function(){this.muteButton.node.active=!0,this.unmuteButton.node.active=!1},o.mute=function(){this.muteSound=!0,this.muteButton.node.active=!1,this.unmuteButton.node.active=!0},o.unmute=function(){this.muteSound=!1,this.muteButton.node.active=!0,this.unmuteButton.node.active=!1},e}(s)).prototype,"clips",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=e(B.prototype,"audioSource",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(B.prototype,"muteButton",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=e(B.prototype,"unmuteButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=B))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Ground.ts","./Results.ts","./Bird.ts","./PipePool.ts","./BirdAudio.ts","./Lives.ts","./StartScreen.ts","./Pause.ts","./Shield.ts"],(function(e){var i,t,s,n,r,o,u,l,a,h,p,c,d,f,b,S,m,y,g,v,C,P,w,k;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,s=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,o=e._decorator,u=e.CCInteger,l=e.director,a=e.Node,h=e.input,p=e.Input,c=e.KeyCode,d=e.Collider2D,f=e.Contact2DType,b=e.Component},function(e){S=e.Ground},function(e){m=e.Results},function(e){y=e.Bird},function(e){g=e.PipePool},function(e){v=e.BirdAudio},function(e){C=e.Lives},function(e){P=e.StartScreen},function(e){w=e.Pause},function(e){k=e.Shield}],execute:function(){var G,z,B,A,O,L,E,N,T,D,I,Q,R,_,K,F,H,U,x,W,Y,j,M,Z,q;r._RF.push({},"f16bdPQdvZDIbiWNC1NnUzn","GameControl",void 0);var J=o.ccclass,V=o.property;e("GameControl",(G=J("GameControl"),z=V({type:S,tooltip:"this is ground"}),B=V({type:u}),A=V({type:u}),O=V({type:m,tooltip:"results go here"}),L=V({type:y}),E=V({type:g}),N=V({type:v}),T=V({type:C}),D=V({type:k}),I=V({type:w}),Q=V({type:P}),G((K=i((_=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return i=e.call.apply(e,[this].concat(r))||this,s(i,"ground",K,n(i)),s(i,"speed",F,n(i)),s(i,"pipeSpeed",H,n(i)),s(i,"result",U,n(i)),s(i,"bird",x,n(i)),s(i,"pipeQueue",W,n(i)),s(i,"clip",Y,n(i)),s(i,"lifes",j,n(i)),s(i,"shield",M,n(i)),i.usingShield=!1,i.isOver=void 0,s(i,"pauseSystem",Z,n(i)),i.pause=!1,s(i,"startScreen",q,n(i)),i.inputChecker=!1,i.pipeNum=0,i.lifeCounter=void 0,i}t(i,e);var r=i.prototype;return r.onPause=function(){this.pause?(this.pause=!1,this.pauseSystem.resumeGame(),l.resume()):(this.pause=!0,this.pauseSystem.pauseGame(),l.pause())},r.onLoad=function(){this.startScreen.showStartScreen(),this.clip.setButton()},r.gameStart=function(){this.startScreen.hideStartScreen(),this.initListener(),this.resetGame()},r.initListener=function(){var e=this;this.node.on(a.EventType.TOUCH_START,(function(){e.inputChecker=!0,e.handleInput()})),h.on(p.EventType.KEY_DOWN,this.onKeyDown,this)},r.handleInput=function(){this.bird.onClickAddSpeed(18),1==this.isOver&&(this.resetGame(),this.bird.resetBird(),this.startGame()),0==this.isOver&&(this.bird.fly(),this.clip.onAudioQueue(0)),this.update(),this.bird.fly()},r.onKeyDown=function(e){switch(e.keyCode){case c.ESCAPE:this.onPause();break;case c.SPACE:this.handleInput();break;case c.KEY_S:this.checkShield()}},r.pauseButtonOnClick=function(){this.onPause()},r.startGame=function(){this.result.hideResults(),this.bird.node.setRotationFromEuler(0,0,0),this.lifes.resetLifes(),this.deactivateShield(),l.resume()},r.gameOver=function(){this.result.showResults(),this.isOver=!0,this.clip.onAudioQueue(3),l.pause()},r.resetGame=function(){this.pipeSpeed=200,this.result.resetScore(),this.pipeQueue.reset(),this.isOver=!1,this.startGame()},r.passPipe=function(){this.result.addScore(),this.clip.onAudioQueue(1),this.pipeSpeed+=5,this.shield.shieldTimer(),this.lifes.countStreakPipe()},r.contactPipe=function(){var e=this.bird.getComponent(d);e&&e.on(f.BEGIN_CONTACT,this.onBeginContact,this)},r.onBeginContact=function(e,i,t){1===i.tag?(this.bird.hitSomething=!0,this.lifes.getBirdLifes()>1&&this.clip.onAudioQueue(2)):0===i.tag&&this.bird.node.setRotationFromEuler(0,0,0)},r.birdStruck=function(){this.contactPipe(),1==this.bird.hitSomething&&(this.usingShield?this.deactivateShield():1===this.lifes.getBirdLifes()?(this.lifes.birdHit(),this.gameOver()):this.lifes.birdHit(),this.shield.resetStreak(),this.lifes.resetStreakPipe()),this.bird.hitSomething=!1},r.checkShield=function(){this.shield.activeShield()&&(this.shield.useShield(),this.usingShield=!0,this.bird.activateShieldUI())},r.deactivateShield=function(){this.shield.resetShield(),this.usingShield=!1,this.bird.resetShield()},r.update=function(){0==this.isOver&&this.birdStruck(),this.pipeNum+=1,this.pipeNum>=45&&(this.pipeQueue.generatePipe(),this.pipeNum=0),this.lifes.addLifePoint()&&this.lifes.recovery(),this.bird.fixingBirdPosition(),this.usingShield?this.shield.limitShield()||this.deactivateShield():this.shield.activeShield()},i}(b)).prototype,"ground",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(_.prototype,"speed",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),H=i(_.prototype,"pipeSpeed",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),U=i(_.prototype,"result",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=i(_.prototype,"bird",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=i(_.prototype,"pipeQueue",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=i(_.prototype,"clip",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=i(_.prototype,"lifes",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=i(_.prototype,"shield",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=i(_.prototype,"pauseSystem",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=i(_.prototype,"startScreen",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=_))||R));r._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,o,n,i,u,a,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,u=e._decorator,a=e.Node,l=e.Component}],execute:function(){var s,c,p,d,y,f,g;i._RF.push({},"a74b8sLL2VI05//bkZeBcR8","Ground",void 0);var h=u.ccclass,b=u.property;e("Ground",(s=h("Ground"),c=b({type:a,tooltip:"Ground 1 is here"}),p=b({type:a,tooltip:"Ground 2 is here"}),s((f=r((y=function(e){function r(){for(var r,t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];return r=e.call.apply(e,[this].concat(i))||this,o(r,"ground1",f,n(r)),o(r,"ground2",g,n(r)),r}return t(r,e),r.prototype.update=function(e){var r=this.node.getPosition();r.x-=57.6*e,r.x<=-288&&(r.x+=288),this.node.setPosition(r)},r}(l)).prototype,"ground1",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=r(y.prototype,"ground2",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=y))||d));i._RF.pop()}}}));

System.register("chunks:///_virtual/Lives.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,r,n,s,l,c,a;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){s=e.cclegacy,l=e._decorator,c=e.Node,a=e.Component}],execute:function(){var f,o,u,h,p,v,y,d,L;s._RF.push({},"819d1MMA1JAsrBYePljHmv7","Lives",void 0);var b=l.ccclass,k=l.property;e("Lives",(f=b("Lifes"),o=k({type:c}),u=k({type:c}),h=k({type:c}),f((y=i((v=function(e){function i(){for(var i,t=arguments.length,s=new Array(t),l=0;l<t;l++)s[l]=arguments[l];return i=e.call.apply(e,[this].concat(s))||this,r(i,"life1",y,n(i)),r(i,"life2",d,n(i)),r(i,"life3",L,n(i)),i.lifes=void 0,i.currentStreak=0,i}t(i,e);var s=i.prototype;return s.resetLifes=function(){this.lifes=3,this.life1.active=!0,this.life2.active=!0,this.life3.active=!0},s.decreaseLife=function(e){3===e?this.life3.active=!1:2===e?this.life2.active=!1:1===e&&(this.life1.active=!1)},s.birdHit=function(){this.decreaseLife(this.lifes),this.lifes--},s.increaseLife=function(e){3===e?this.life3.active=!0:2===e?this.life2.active=!0:1===e&&(this.life1.active=!0)},s.recovery=function(){this.lifes++,this.lifes>3&&(this.lifes=3),this.increaseLife(this.lifes),this.resetStreakPipe()},s.getBirdLifes=function(){return this.lifes},s.addLifePoint=function(){return this.currentStreak>=10&&(this.currentStreak=0,!0)},s.countStreakPipe=function(){this.currentStreak++},s.resetStreakPipe=function(){this.currentStreak=0},i}(a)).prototype,"life1",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=i(v.prototype,"life2",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=i(v.prototype,"life3",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=v))||p));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts","./BirdAudio.ts","./GameControl.ts","./Ground.ts","./Lives.ts","./Pause.ts","./PipePool.ts","./Pipes.ts","./Results.ts","./Shield.ts","./StartScreen.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pause.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BirdAudio.ts"],(function(e){var t,i,n,u,o,a,r,s,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,u=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,r=e.Node,s=e.Button,c=e.Component},function(e){l=e.BirdAudio}],execute:function(){var p,d,h,m,v,b,f,y,B,S,g,w,z,L,P,D,_;o._RF.push({},"138368US/hIf4mxNZD0nk0K","Pause",void 0);var A=a.ccclass,k=a.property;e("Pause",(p=A("Pause"),d=k({type:r}),h=k({type:r}),m=k({type:s}),v=k({type:s}),b=k({type:s}),f=k({type:l}),y=k({type:s}),p((g=t((S=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,n(t,"pauseScreen",g,u(t)),n(t,"pausedLabel",w,u(t)),n(t,"pauseButton",z,u(t)),n(t,"mute",L,u(t)),n(t,"unmute",P,u(t)),n(t,"sound",D,u(t)),n(t,"resumeButton",_,u(t)),t}i(t,e);var o=t.prototype;return o.resetPause=function(){this.node.active=!0,this.pauseButton.node.active=!0,this.pauseScreen.active=!1,this.pausedLabel.active=!1},o.pauseGame=function(){this.node.active=!0,this.pauseScreen.active=!0,this.pausedLabel.active=!0,this.pauseButton.node.active=!1,this.resumeButton.node.active=!0,this.showSoundButton()},o.resumeGame=function(){this.pauseScreen.active=!1,this.pausedLabel.active=!1,this.pauseButton.node.active=!0,this.resumeButton.node.active=!1,this.hideButton()},o.showSoundButton=function(){this.sound.muteSound?this.mute.node.active=!0:this.unmute.node.active=!0},o.hideButton=function(){this.mute.node.active=!1,this.unmute.node.active=!1},o.muteSetting=function(){this.sound.muteSound=!0,this.mute.node.active=!0,this.unmute.node.active=!1},o.unmuteSetting=function(){this.sound.muteSound=!1,this.mute.node.active=!1,this.unmute.node.active=!0},t}(c)).prototype,"pauseScreen",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(S.prototype,"pausedLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(S.prototype,"pauseButton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(S.prototype,"mute",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=t(S.prototype,"unmute",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(S.prototype,"sound",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=t(S.prototype,"resumeButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=S))||B));o._RF.pop()}}}));

System.register("chunks:///_virtual/PipePool.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,o,r,p,a,l,n,s,c,P,h;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){p=e.cclegacy,a=e._decorator,l=e.Prefab,n=e.Node,s=e.instantiate,c=e.NodePool,P=e.Vec3,h=e.Component}],execute:function(){var u,d,f,b,y,m,v;p._RF.push({},"e00aaYN7h5JW5d8QyxT/7fr","PipePool",void 0);var g=a.ccclass,H=a.property;e("PipePool",(u=g("PipePool"),d=H({type:l}),f=H({type:n}),u((m=i((y=function(e){function i(){for(var i,t=arguments.length,p=new Array(t),a=0;a<t;a++)p[a]=arguments[a];return i=e.call.apply(e,[this].concat(p))||this,o(i,"prefabPipes",m,r(i)),o(i,"pipePoolHome",v,r(i)),i.pool=new c,i.createPipe=void 0,i.lastPipeX=void 0,i.createPipePos=new P(0,0,0),i.deltaTime=void 0,i}t(i,e);var p=i.prototype;return p.initPool=function(){for(var e=0;e<3;e++)this.createPipe=s(this.prefabPipes),0==e?this.pipePoolHome.addChild(this.createPipe):this.pool.put(this.createPipe)},p.addPool=function(){this.pool.size()>0?this.createPipe=this.pool.get():this.createPipe=s(this.prefabPipes),this.createPipe.x+=10,this.pipePoolHome.addChild(this.createPipe)},p.reset=function(){this.pipePoolHome.removeAllChildren(),this.pool.clear(),this.initPool()},p.generatePipe=function(){this.createPipe=s(this.prefabPipes),this.pipePoolHome.addChild(this.createPipe)},i}(h)).prototype,"prefabPipes",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=i(y.prototype,"pipePoolHome",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=y))||b));p._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,o,e,p,s,n,a,r,h,c,m,P,d;return{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,p=t.assertThisInitialized},function(t){s=t.cclegacy,n=t._decorator,a=t.Node,r=t.find,h=t.UITransform,c=t.randomRangeInt,m=t.Vec3,P=t.screen,d=t.Component}],execute:function(){var l,S,u,y,L,w,f;s._RF.push({},"e79dfoo8YhDKpk35D3MBUNo","Pipes",void 0);var g=n.ccclass,D=n.property;t("Pipes",(l=g("Pipes"),S=D({type:a,tooltip:"Top Pipe"}),u=D({type:a,tooltip:"Bottom Pipe"}),l((w=i((L=function(t){function i(){for(var i,o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return i=t.call.apply(t,[this].concat(s))||this,e(i,"topPipe",w,p(i)),e(i,"bottomPipe",f,p(i)),i.tempStartLocationUp=new m(0,0,0),i.tempStartLocationDown=new m(0,0,0),i.scene=P.windowSize,i.game=void 0,i.pipeSpeed=void 0,i.tempSpeed=void 0,i.isPass=!1,i}o(i,t);var s=i.prototype;return s.onLoad=function(){this.game=r("GameControl").getComponent("GameControl"),this.pipeSpeed=this.game.pipeSpeed,this.initPosition(),this.isPass},s.initPosition=function(){this.tempStartLocationUp.x=this.topPipe.getComponent(h).width+this.scene.width,this.tempStartLocationDown.x=this.topPipe.getComponent(h).width+this.scene.width;var t=c(0,300);this.tempStartLocationUp.y=t,this.tempStartLocationDown.y=t-150,this.tempStartLocationUp.y>=200?(this.tempStartLocationDown.y=c(-75,50),this.tempStartLocationUp.y=256):this.tempStartLocationDown.y<=-100&&(this.tempStartLocationUp.y=c(0,75),this.tempStartLocationDown.y=-200),this.bottomPipe.setPosition(this.tempStartLocationDown),this.topPipe.setPosition(this.tempStartLocationUp)},s.update=function(t){this.tempSpeed=this.pipeSpeed*t,this.tempStartLocationDown=this.bottomPipe.position,this.tempStartLocationUp=this.topPipe.position,this.tempStartLocationDown.x-=this.tempSpeed,this.tempStartLocationUp.x-=this.tempSpeed,this.bottomPipe.setPosition(this.tempStartLocationDown),this.topPipe.setPosition(this.tempStartLocationUp),0==this.isPass&&this.topPipe.position.x<0&&(this.isPass=!0,this.game.passPipe()),this.topPipe.position.x<0-this.scene.width&&(this.game.createPipe,this.isPass=!1,this.destroy())},s.delete=function(){this.topPipe.position.x>=0&&(this.topPipe.destroy(),this.bottomPipe.destroy())},i}(d)).prototype,"topPipe",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=i(L.prototype,"bottomPipe",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=L))||y));s._RF.pop()}}}));

System.register("chunks:///_virtual/Results.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,s,c,a,u,h,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,c=e.Label,a=e.Node,u=e.Button,h=e.game,l=e.Component}],execute:function(){var m,p,g,b,y,f,d,S,v,T,R,w,z,x,B;o._RF.push({},"604e2D7K1FPM4SR2EyZNyuc","Results",void 0);var L=s.ccclass,M=s.property;e("Results",(m=L("Results"),p=M({type:c}),g=M({type:c}),b=M({type:a,tooltip:"this is game over"}),y=M({type:c}),f=M({type:c}),d=M({type:u}),m((T=t((v=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,r(t,"scoreLabel",T,n(t)),r(t,"highScore",R,n(t)),r(t,"gameOver",w,n(t)),r(t,"timer",z,n(t)),r(t,"bestTime",x,n(t)),r(t,"retryButton",B,n(t)),t.maxScore=0,t.currentScore=void 0,t.currentTime=0,t.highTime=0,t.fps=void 0,t}i(t,e);var o=t.prototype;return o.updateScore=function(e){this.currentScore=e,this.scoreLabel.string=""+this.currentScore},o.update=function(e){this.currentTime+=1,this.fps=1/h.deltaTime,this.timer.string=""+Math.trunc(this.currentTime/this.fps)},o.resetScore=function(){this.updateScore(0),this.currentTime=0,this.hideResults()},o.addScore=function(){this.updateScore(this.currentScore+1)},o.showResults=function(){this.maxScore=Math.max(this.maxScore,this.currentScore),this.highTime=Math.max(Math.trunc(this.currentTime/(1/h.deltaTime)),this.highTime),this.bestTime.string="Best Time: "+this.highTime,this.highScore.string="High Score: "+this.maxScore,this.retryButton.node.active=!0,this.highScore.node.active=!0,this.bestTime.node.active=!0,this.gameOver.active=!0},o.hideResults=function(){this.highScore.node.active=!1,this.retryButton.node.active=!1,this.bestTime.node.active=!1,this.gameOver.active=!1},o.getScore=function(){return this.currentScore},o.getTime=function(){return this.currentTime},t}(l)).prototype,"scoreLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=t(v.prototype,"highScore",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(v.prototype,"gameOver",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(v.prototype,"timer",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(v.prototype,"bestTime",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=t(v.prototype,"retryButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=v))||S));o._RF.pop()}}}));

System.register("chunks:///_virtual/Shield.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,r,n,l,s,h,a;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){l=e.cclegacy,s=e._decorator,h=e.Node,a=e.Component}],execute:function(){var c,o,u,d,p,y,S;l._RF.push({},"81f88vF9KNEe5I2Quz9CIPT","Shield",void 0);var f=s.ccclass,m=s.property;e("Shield",(c=f("Shield"),o=m({type:h}),u=m({type:h}),c((y=i((p=function(e){function i(){for(var i,t=arguments.length,l=new Array(t),s=0;s<t;s++)l[s]=arguments[s];return i=e.call.apply(e,[this].concat(l))||this,r(i,"emptyShield",y,n(i)),r(i,"shieldReady",S,n(i)),i.currentStreak=0,i.shield=!1,i.timeLimit=0,i}t(i,e);var l=i.prototype;return l.resetShield=function(){this.shieldReady.active=!1,this.emptyShield.active=!0},l.activeShield=function(){return this.currentStreak>=10&&(this.shieldReady.active=!0,!0)},l.useShield=function(){return this.shieldReady.active=!1,this.shield=!0,this.currentStreak=0,!0},l.shieldTimer=function(){this.shield?this.timeLimit++:this.currentStreak++},l.resetStreak=function(){this.currentStreak=0,this.shield=!1},l.limitShield=function(){return!(this.timeLimit>=7)||(this.timeLimit=0,this.shield=!1,!1)},i}(a)).prototype,"emptyShield",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=i(p.prototype,"shieldReady",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=p))||d));l._RF.pop()}}}));

System.register("chunks:///_virtual/StartScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,n,a,o,c,l,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,c=t.Node,l=t.Button,u=t.Component}],execute:function(){var s,p,b,d,g,h,v,y,f,S,m,w,z;a._RF.push({},"39809C2ItlBeYdfag5q8505","StartScreen",void 0);var B=o.ccclass,k=o.property;t("StartScreen",(s=B("StartScreen"),p=k({type:c}),b=k({type:c}),d=k({type:c}),g=k({type:c}),h=k({type:l}),s((f=e((y=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,r(e,"background",f,n(e)),r(e,"bird",S,n(e)),r(e,"image",m,n(e)),r(e,"ground",w,n(e)),r(e,"startButton",z,n(e)),e.startGame=!1,e}i(e,t);var a=e.prototype;return a.showStartScreen=function(){this.node.active=!0,this.background.active=!0,this.bird.active=!0,this.image.active=!0,this.ground.active=!0,this.startButton.node.active=!0},a.hideStartScreen=function(){this.background.active=!1,this.bird.active=!1,this.image.active=!1,this.ground.active=!1,this.startButton.node.active=!1,this.node.active=!1},e}(u)).prototype,"background",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=e(y.prototype,"bird",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=e(y.prototype,"image",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=e(y.prototype,"ground",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=e(y.prototype,"startButton",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=y))||v));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});