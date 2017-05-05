exports.view=View={Game:{},Board:{},Move:{}},function(){function e(e,t,i,a,s,r,o,n,l){var c=document.createElement("canvas");c.width=c.height=512,ctxTmp=c.getContext("2d"),ctxTmp.fillStyle=o,ctxTmp.fillRect(0,0,512,512),ctxTmp.translate(256,256),l&&ctxTmp.rotate(l/180*Math.PI),ctxTmp.globalCompositeOperation=n,ctxTmp.drawImage(t,0,0,t.width,t.height,-256,-256,512,512),e.drawImage(c,0,0,512,512,i-s/2,a-r/2,s,r)}function t(t,i,a,s,r,o,n,l){e(t,i,a,s,r,o,n,"destination-in",l)}var i,a,s,r,o,n,l,c,d,h=1,u=12298905,p=2236962;View.Game.xdInitExtra=function(e){},View.Game.xdPreInit=function(e){},View.Game.chMakeDummyMesh=function(e){return"undefined"!=typeof THREE?new THREE.Mesh(new THREE.CubeGeometry(.001,.001,.001),new THREE.MeshLambertMaterial):null};var m={};View.Game.chMakeTokenPiece=function(e,i,a,s){var r=this.mViewOptions.fullPath,o="_"+i+"_"+a+"_",n=m[o];Array.isArray(n)?n.push(s):n?s(new THREE.Mesh(n.geometry,n.material)):(m[o]=[s],function(i,a,s){function o(){function e(e){a<0&&(e.fillStyle="rgba(0,0,0,0.9)",e.fillRect(0,0,u,u))}if(0==--h){var r=document.createElement("canvas");r.width=r.height=u;var o=new THREE.Texture(r),p=document.createElement("canvas");p.width=p.height=u;var m=new THREE.Texture(p),g=r.getContext("2d");g.drawImage(l,0,0,u,u),e(g),1==i&&t(g,d,u/2,u/2,u,u,a>0?"rgba(0,0,0,0.9)":"rgba(221, 193, 148, 1)",0),p.getContext("2d").drawImage(n,0,0,u,u),o.needsUpdate=!0,m.needsUpdate=!0;var f=document.createElement("canvas");f.width=f.height=u;var v=new THREE.Texture(f),w=f.getContext("2d");w.drawImage(l,0,0,u,u),e(w),v.needsUpdate=!0;var E="#050505",b=50;a<0&&(E="#111111",b=10);var y=new THREE.MeshPhongMaterial({name:"piecetop",color:14540253,specular:E,shininess:b,map:o,bumpMap:m,bumpScale:.06}),T=new THREE.MeshPhongMaterial({name:"pieceborders",color:14540253,specular:E,shininess:b,map:v}),M=new THREE.MultiMaterial([T,y]);s({geometry:c,material:M})}}var n,l,c,d,h=4,u=256;e.getResource("smoothedfilegeo|0|"+r+"/res/xd-view/meshes/piece-v2.js",function(e,t){c=e,o()}),e.getResource("image|"+r+"/res/xd-view/meshes/piecetop-bump.jpg",function(e){n=e,o()}),e.getResource("image|"+r+"/res/xd-view/meshes/piecediff.jpg",function(e){l=e,o()}),e.getResource("image|"+r+"/res/xd-view/meshes/piecetop-queen-mask.png",function(e){d=e,o()})}(i,a,function(e){var t=m[o];m[o]={geometry:e.geometry,material:e.material},t.forEach(function(t){t(new THREE.Mesh(e.geometry,e.material))})}))},View.Game.xdInit=function(e){function t(e,t,i,a){function s(){if(0==--n){for(var e=0;e<l.length;e++)r.add(l[e]);t(r)}}for(var r,o=["turtle-legs-smoothed","turtle-head-smoothed","turtle-tail-smoothed","turtle-hotel","turtle-house"],n=o.length,l=[],c=0;c<o.length;c++){var d=0,h=!1,u=!0;"turtle-hotel"!==o[c]&&"turtle-house"!==o[c]||(d=0),"turtle-hotel"===o[c]&&(u=!1);var p="smoothedfilegeo|"+d+"|"+b+"/res/xd-view/meshes/"+o[c]+".js";!function(t){e.getResource(p,function(i,n){function c(){if(0==--p){if(0==t)r=new THREE.Mesh(i,new THREE.MultiMaterial(d)),r.castShadow=!0,r.receiveShadow=h;else{var e=new THREE.Mesh(i,new THREE.MultiMaterial(d));e.castShadow=!0,e.receiveShadow=h,e.visible=u,e.title=o[t],l.push(e)}s()}}for(var d=[],p=1,m=0;m<n.length;m++)!function(t){p++;var i=n[t].clone();if("mat.turtle"===i.name&&(i.emissive={r:0,g:0,b:0}),"mat.turtle"===i.name||"mat.buildings"===i.name){i.shininess=10,i.specular={r:0,g:0,b:0};var s;s=a==-1?b+"/res/xd-view/meshes/turtle-black.png":b+"/res/xd-view/meshes/turtle.png",e.getMaterialMap(s,function(e){i.map=e,"mat.buildings"===i.name&&(i.shading=THREE.FlatShading),d[t]=i,c()})}else"mat.buildings"===i.name&&(i.shading=THREE.FlatShading),d[t]=i,c()}(m);c()})}(c)}}function m(a,s){e.createGadget("piece#"+s,{"2d":{type:"sprite",z:4,file:b+"/res/images/basic-pieces-v2x200.png",clipx:0,clipy:1==a?0:100,clipwidth:100,clipheight:100,width:r,height:r,opacity:1},green:{file:b+"/res/images/basic2.png"},"2d-wood-alquerque":{type:"sprite",z:4,file:b+"/res/images/basic-alquerque2.png",clipx:0,clipy:1==a?0:150,clipwidth:150,clipheight:150,width:.9*r,height:.9*r,opacity:1},kids:{type:"sprite",z:4,file:b+"/res/images/pieces-kids200x200.png",clipx:0,clipy:1==a?0:100,clipwidth:100,clipheight:100,width:.9*r,height:.9*r,opacity:1},classic3d:{type:"custommesh3d",create:function(t){return this._pKey="dummy",E.chMakeDummyMesh(e)},display:function(e,t,a){var s="_"+t.checkersType+"_"+t.checkersSide+"_";if(s!=this._pKey){this._pKey=s;var r=this;i.chMakeTokenPiece(r,t.checkersType,t.checkersSide,function(e){r.replaceMesh(e,t,a)})}},scale:[5/n,5/n,5/n],z:h},turkish3d:{type:"meshfile",scale:[1,1,1],smooth:0,z:h,materials:{base:{color:1==a?u:p,shininess:1==a?10:20,specular:1==a?{r:.5,g:.5,b:.5}:{r:.6,g:.3,b:0},reflectivity:.5,transparent:!0,opacity:1}}},alquerque3d:{type:"custommesh3d",scale:[1,1,1],create:function(){for(var e=THREE.SmoothShading,t=new THREE.MeshPhongMaterial({name:"ball",specular:328965,shininess:500,shading:e,opacity:1,transparent:!1,envMap:d,reflectivity:.2,combine:THREE.MixOperation}),i=l.clone(),a=0;a<i.faces.length;a++)i.faces[a].materialIndex=0;return new THREE.Mesh(i,new THREE.MultiMaterial([t]))}},turtles3d:{type:"custommesh3d",create:function(e){t(this,e,"pawn",a)},rotate:1==a?180:0,scale:[.5,.5,.5],checkersType:0,z:h,display:function(e,t){if(this.object3d.children)for(var i=0;i<this.object3d.children.length;i++){var a=this.object3d.children[i];switch(a.title){default:break;case"turtle-hotel":a.joclyVisible=1==t.checkersType||1==this.options.checkersType&&0!==t.checkersType;break;case"turtle-house":a.joclyVisible=0==t.checkersType||0==this.options.checkersType&&1!==t.checkersType}}}}})}function g(e,t,i){function a(e,t){var i=new THREE.Shape;return i.moveTo(-e/2,-t/2),i.lineTo(e/2,-t/2),i.lineTo(e/2,t/2),i.lineTo(-e/2,t/2),i}var s=a(t+.5+.1,i+.5+.1),r=a(t+.1,i+.1);s.holes.push(r);var o={amount:.4,steps:1,bevelSize:.1,bevelThickness:.04,bevelSegments:1},n=new THREE.ExtrudeGeometry(s,o),l=new THREE.Matrix4;l.makeRotationX(-Math.PI/2),n.applyMatrix(l);var c="#000000";e.options.frameColorFill&&(c=e.options.frameColorFill),frameMat=new THREE.MeshPhongMaterial({color:c,shininess:500,specular:"#444444"});var d=new THREE.Mesh(n,frameMat);return d.position.y=-o.amount-.01,d}function f(e,t,i,a){function o(e,t,i,a){e.textAlign="center",e.textBaseline="middle",e.fillStyle=a,e.font=Math.ceil(t/5)+"px Monospace";for(var r=0;r<E.g.Coord.length;r++){var o=E.g.Coord[r],l=o[0],c=E.g.getColumn(o[1],l);E.mViewAs>0&&(l=s-1-l),E.mViewAs<0&&(c=n-1-c);var d=E.checkersPosToString(r),h=(c+(1-n)/2)*t-t/3,u=(l+(1-s)/2)*i-i/3;e.fillText(d,h,u)}}var l=new THREE.Object3D,c=document.createElement("canvas");c.width=c.height=1024;var d=new THREE.Texture(c),h=document.createElement("canvas");h.width=h.height=1024;var u=new THREE.Texture(h),p=5;void 0!==e.options.margin&&(p=e.options.margin),e.getResource("image|"+b+"/res/images/wood-chipboard-5.jpg",function(a){function m(e,t,i,a,s,r){e.fillStyle=t,e.fillRect(i-s/2,a-r/2,s,r)}function f(e){e.strokeStyle="#000000",e.lineWidth="2";for(var t=0;t<s;t++)e.beginPath(),e.moveTo(-n/2*b,(-s/2+t)*y),e.lineTo(n/2*b,(-s/2+t)*y),e.stroke();for(var i=0;i<n;i++)e.beginPath(),e.moveTo((-n/2+i)*b,-s/2*y),e.lineTo((-n/2+i)*b,s/2*y),e.stroke();e.lineWidth="4",e.beginPath(),e.moveTo(-n/2*b,-s/2*y),e.lineTo(n/2*b,-s/2*y),e.lineTo(n/2*b,s/2*y),e.lineTo(-n/2*b,s/2*y),e.lineTo(-n/2*b,-s/2*y),e.stroke()}var v="rgba(159, 76, 12,0.2)",w="rgba(246, 222, 174,0.5)";void 0!==e.options.blackCellFill&&(v=e.options.blackCellFill),void 0!==e.options.whiteCellFill&&(w=e.options.whiteCellFill);var E=c.getContext("2d");E.translate(512,512),E.drawImage(a,-512,-512,1024,1024),E.fillStyle=v,E.fillRect(-512,-512,1024,1024);for(var b=1024/(n*(1+2*p/100)),y=1024/(s*(1+2*p/100)),T=0;T<s;T++)for(var M=0;M<n;M++)!function(e,t){m(E,(e+t)%2?v:w,(t+(1-n)/2)*b,(e+(1-s)/2)*y,b,y)}(T,M);f(E);var R=w;void 0!==e.options.notationColor&&(R=e.options.notationColor),i&&o(E,b,y,R);var x=h.getContext("2d");x.translate(512,512),x.fillStyle="#ffffff",x.fillRect(-512,-512,1024,1024),f(x),i&&o(x,b,y,"#000000"),d.needsUpdate=!0,u.needsUpdate=!0;var k="#010101";void 0!==e.options.boardSpecular&&(k=e.options.boardSpecular);var H=new THREE.PlaneGeometry((1+2*p/100)*n*r/1e3,(1+2*p/100)*s*r/1e3),G=new THREE.Mesh(H,new THREE.MeshPhongMaterial({map:d,bumpMap:u,bumpScale:.005,specular:k,shininess:400}));G.rotation.x=-Math.PI/2,G.receiveShadow=!0,l.add(G);var S=(1+2*p/100)*n*r/1e3,C=(1+2*p/100)*s*r/1e3,P=g(e,S,C);l.add(P),t(l)})}function v(e,t){function i(){if(0==--c){for(var e=0;e<d.length;e++)a.add(d[e]);t(a)}}for(var a,o=["board-alquerque-external-frame","board-checkers-triangle","board-checkers-slot"],l=new THREE.MeshPhongMaterial({color:2236962,shininess:10,specular:4473924}),c=o.length,d=[],h=0;h<o.length;h++){var u=0;"board-checkers-slot"==o[h]&&(u=0);var p="smoothedfilegeo|"+u+"|"+b+"/res/xd-view/meshes/"+o[h]+".js";!function(t){e.getResource(p,function(c,h){for(var u=[],p=0;p<h.length;p++){var m=h[p].clone();"mat.slot"!=m.name&&(m.shading=THREE.FlatShading),u.push(m)}if(0==t){u[0].specular={r:0,g:0,b:0},a=new THREE.Mesh(c,new THREE.MultiMaterial(u)),margin=-4;var f=(1+2*margin/100)*n*r/1e3,v=(1+2*margin/100)*s*r/1e3,w=g(e,f,v);w.position.y+=.2,w.scale.y*=1.2,a.add(w),a.receiveShadow=!0}else{switch(u[0].shininess=500,u[0].specular.setHex(131586),o[t]){case"board-checkers-triangle":for(var E=[{x:1,y:1},{x:1,y:-1},{x:-1,y:-1},{x:-1,y:1}],b=0;b<4;b++)for(var y=0;y<4;y++)for(var T=0;T<2;T++){var M;M=0==T?new THREE.Mesh(c,new THREE.MultiMaterial(u)):new THREE.Mesh(c,l),M.receiveShadow=!0,M.position.x=2*E[b].x,M.position.z=2*E[b].y,M.rotation.y=Math.PI/2*y,T>0&&(M.rotation.x=Math.PI,M.position.y=.28),d.push(M)}break;case"board-checkers-slot":for(var R=0;R<5;R++)for(var x=0;x<5;x++){var M=new THREE.Mesh(c,l);M.receiveShadow=!0,M.position.x=2*(x-2),M.position.z=2*(R-2),d.push(M)}break;default:var M=new THREE.Mesh(c,new THREE.MultiMaterial(u));M.receiveShadow=!0,M.title=o[t],d.push(M)}}i()})}(h)}}function w(e){var t=this;return this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/flatscreen.js",function(i,a){for(var s=[],r=0;r<a.length;r++)if("screen"==a[r].name){var o=a[r].clone();o.map=e,o.emissive={r:1,g:1,b:1},o.overdraw=!0,s.push(o)}else if("boomer"==a[r].name){var o=a[r].clone();o.shading=THREE.FlatShading,s.push(o)}else if("tv"==a[r].name){var o=a[r].clone();o.shading=THREE.FlatShading,s.push(o)}else s.push(a[r]);var n=new THREE.Mesh(i,new THREE.MultiMaterial(s));n.visible=!1,t.objectReady(n)}),null}var E=this;this.g.getColumn=function(e,t){return 2*e+t%2},this.g.dimensions={width:this.mOptions.width,squareWidth:2*this.mOptions.width,height:this.mOptions.height},this.xdPreInit();var b=this.mViewOptions.fullPath,y=(this.g.lightcellDistance,this.mOptions.initial);if(a=this.g.dimensions.width,n=this.g.dimensions.squareWidth,s=this.g.dimensions.height,r=Math.floor(12e3/n,12e3/s),"undefined"!=typeof THREE){l=new THREE.SphereGeometry(1,32,16),c=["black.png","white.png","red.png"];var T=b+"/res/xd-view/meshes/skybox/",M=[T+"px.jpg",T+"nx.jpg",T+"py.jpg",T+"ny.jpg",T+"pz.jpg",T+"nz.jpg"];d=(new THREE.CubeTextureLoader).load(M)}e.createGadget("board",{"2d":{type:"image"}}),e.createGadget("lightside",{"3d":{type:"custom3d",create:function(){return new THREE.PointLight(11184895,1,30)},z:1e4,x:1e4,castShadow:!1},turtles3d:{create:function(){return new THREE.PointLight(11184895,3,30,2)}}}),e.createGadget("lightback",{"3d":{type:"custom3d",create:function(){return new THREE.PointLight(11193599,.7,30)},z:1e4,y:-1e4,castShadow:!1},turtles3d:{create:function(){return new THREE.PointLight(11193599,3,30,2)}}});for(var R=0;R<this.g.Coord.length;R++)!function(t){e.createGadget("text#"+t,{"2d":{type:"element",width:.2*r,height:.2*r,initialClasses:"notation",css:{"text-align":"center"},z:4,display:function(e,i,a){e.css({"font-size":.6*a+"pt","line-height":1*a+"px"}).text(E.checkersPosToString(t))}},alquerque3d:{type:"custommesh3d",z:.05*-r,rotateX:-90,create:function(){var e=this;return this.getResource("font|"+b+"/res/xd-view/fonts/helvetiker_regular.typeface.json",function(i){var a=new THREE.TextGeometry(""+E.checkersPosToString(t),{size:.2,height:.05,curveSegments:6,font:i}),s=new THREE.MeshBasicMaterial,r=new THREE.Mesh(a,s);e.objectReady(r)}),null}}}),e.createGadget("cell#"+t,{"2d":{type:"element",initialClasses:"xd-choice",width:r,height:r,z:1},"3d":{type:"meshfile",file:b+"/res/xd-view/meshes/ring-target.js",flatShading:!0,smooth:0,z:0,scale:[8/n,8/n,8/n],materials:{square:{transparent:!0,opacity:0},ring:{color:16777215,opacity:1}}}})}(R);if(this.mInitial){for(var x=0;x<this.mInitial.pieces.length;x++){m(this.mInitial.pieces[x].s,x)}o=0;for(var x in y.a)y.a.hasOwnProperty(x)&&o++;for(var x in y.b)y.b.hasOwnProperty(x)&&o++}else{var k=0;for(var x in y.a)y.a.hasOwnProperty(x)&&m(JocGame.PLAYER_A,k++);for(var x in y.b)y.b.hasOwnProperty(x)&&m(JocGame.PLAYER_B,k++);o=y.a.length+y.b.length}var H={blackCellFill:"rgba(140, 41, 41,0.4)",whiteCellFill:"rgba(140, 41, 41,0.4)",notationColor:"#000000"},G={blackCellFill:"rgba(0,100,0,0.5)",whiteCellFill:"rgba(255,255,255,1)",frameColorFill:"#ffffff",boardSpecular:"#000000",margin:10};e.createGadget("boardframeNotations",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!0,1)}},turkish3d:H,turtles3d:G}),e.createGadget("boardframeNotationsB",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!0,-1)}},turkish3d:H,turtles3d:G}),e.createGadget("boardframeB",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!1,-1)}},turkish3d:H,turtles3d:G}),e.createGadget("boardframe",{"3d":{type:"custommesh3d",create:function(e){f(this,e,!1,1)}},turkish3d:H,turtles3d:G,alquerque3d:{type:"custommesh3d",create:function(e){v(this,e)},scale:[1.2,1.2,1.2],checkersType:0,z:-320}}),e.createGadget("turtlesworld",{turtles3d:{harbor:!1,type:"custommesh3d",color:6719488,z:-850,create:function(){var e=this,t=new THREE.CylinderGeometry(150,150,1,64,1,!1),i=new THREE.MeshPhongMaterial({color:16711680}),a=new THREE.Mesh(t,i);return a.receiveShadow=!0,this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/rainbowflat.js",function(t,i){i[0].transparent=!0,i[0].opacity=.8,i[0].side=THREE.DoubleSide,i[0].shininess=10,i[0].specular.setHex(2236962);var s=new THREE.Mesh(t,new THREE.MultiMaterial(i));s.scale.set(7,7,7),s.position.set(7,0,-7),s.rotation.y=-45,a.add(s),e.objectReady(a)}),null}}}),e.createGadget("flowers",{turtles3d:{harbor:!1,type:"custommesh3d",create:function(){var e=this,t=new THREE.Object3D,i=b+"/res/xd-view/meshes/star.png",a=new THREE.TextureLoader;return a.setCrossOrigin("anonymous"),a.load(i,function(i){for(var a=i,s=0;s<1;s++){for(var r=new THREE.PointsMaterial({size:.5,map:a,blending:THREE.NormalBlending,depthTest:!0,transparent:!0}),o=new THREE.Geometry,s=0;s<1e3;s++){var n=new THREE.Vector3,l=12+40*Math.random(),c=2*Math.random()*Math.PI;n.x=l*Math.cos(c),n.z=l*Math.sin(c),n.y=.2,o.vertices.push(n)}r.color.setHex(16777215);var d=new THREE.Points(o,r);t.add(d)}e.objectReady(t)},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")}),null}}}),e.createGadget("rocks",{turtles3d:{harbor:!1,type:"custommesh3d",z:-200,scale:[1,1,1],flatShading:!0,create:function(){var e=this;return this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/rocksmoothed.js",function(t,i){for(var a=new THREE.Object3D,s=0;s<100;s++){var r=new THREE.Mesh(t,new THREE.MultiMaterial(i)),o=20+40*Math.random(),n=2*Math.random()*Math.PI,l=.3+2*Math.random();r.scale.set(l,l,l),r.position.x=o*Math.cos(n),r.position.z=o*Math.sin(n),r.rotation.y=2*Math.random()*Math.PI,r.castShadow=!0,a.add(r)}e.objectReady(a)}),null}}}),e.createGadget("fences",{turtles3d:{harbor:!1,type:"custommesh3d",z:-200,scale:[2,2,2],flatShading:!0,create:function(){var e=this;return this.getResource("smoothedfilegeo|0|"+b+"/res/xd-view/meshes/turtle-fences.js",function(t,i){for(var a=new THREE.MeshPhongMaterial({color:16777215,specular:2236962,shininess:100,shading:THREE.FlatShading}),s=new THREE.Mesh(t,a),r=0;r<3;r++){var o=new THREE.Mesh(t,a);o.rotation.y=(r+1)*(Math.PI/2),o.castShadow=!0,s.add(o)}e.objectReady(s)}),null}}});for(var S=0;S<s;S++)for(var C=0;C<n;C++){var x=S*n+C;e.createGadget("square#"+x,{"2d":{type:"element",z:2,classes:""},"3d":{receiveShadow:!0}}),e.saveGadgetProps("square#"+x,["color"],"initial")}e.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){w.call(this,e)}}}),e.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){w.call(this,e)}}}),this.xdInitExtra(e)},View.Game.xdBuildScene=function(e){i=this;e.updateGadget("fences",{turtles3d:{visible:!0}}),e.updateGadget("rocks",{turtles3d:{visible:!0}}),e.updateGadget("flowers",{turtles3d:{visible:!0}}),e.updateGadget("turtlesworld",{turtles3d:{visible:!0}});e.updateGadget("videoa",{"3d":{visible:!0,scale:[2,2,2],rotate:1==this.mViewAs?180:0,rotateX:1==this.mViewAs?30:-30,z:3e3,y:1==this.mViewAs?12e3:-12e3,playerSide:1}}),e.updateGadget("videob",{"3d":{visible:!0,scale:[2,2,2],rotate:1==this.mViewAs?0:180,rotateX:1==this.mViewAs?-30:30,z:3e3,y:1==this.mViewAs?-12e3:12e3,playerSide:-1}}),e.updateGadget("board",{"2d":{visible:!0,rotate:this.mViewAs==JocGame.PLAYER_A?0:180,x:0,y:0,width:n*r,height:s*r}}),e.updateGadget("boardframe",{"3d":{visible:!this.mNotation&&this.mViewAs>0},alquerque3d:{visible:!0}}),e.updateGadget("boardframeNotations",{"3d":{visible:this.mNotation&&this.mViewAs>0},alquerque3d:{visible:!1}}),e.updateGadget("boardframeB",{"3d":{visible:!this.mNotation&&this.mViewAs<0},alquerque3d:{visible:!1}}),e.updateGadget("boardframeNotationsB",{"3d":{visible:this.mNotation&&this.mViewAs<0},alquerque3d:{visible:!1}}),e.updateGadget("lightside",{"3d":{visible:!0}}),e.updateGadget("lightback",{"3d":{visible:!0}});for(var t=0;t<s;t++)for(var a=0;a<n;a++){var o=t*n+a,l=(t+a)%2,c=this.getVCoord(t,a);e.updateGadget("square#"+o,{base:{x:c[0],y:c[1]},"2d":{initialClasses:l?"cell-black":"cell-white",width:r,height:r},"3d":{visible:!0,scale:[1,1,1]}})}for(var d=0;d<this.g.Coord.length;d++){var c=this.getCCoord(d);e.updateGadget("text#"+d,{base:{visible:this.mNotation},"2d":{x:c[0]-.42*r,y:c[1]-.42*r},"3d":{x:c[0]-.47*r,y:c[1]+.47*r},alquerque3d:{z:.02*r},turtles3d:{z:.02*r}}),e.updateGadget("cell#"+d,{base:{visible:!1,x:c[0],y:c[1]}})}},View.Game.getVCoord=function(){var e,t;if(1==arguments.length){var i=arguments[0],a=this.g.Coord[i];e=a[0],t=a[1]}else e=arguments[0],t=arguments[1];return e=s-1-e,this.mViewAs==JocGame.PLAYER_B&&(e=s-1-e,t=n-1-t),[(t-(n-1)/2)*r,(e-(s-1)/2)*r]},View.Game.getCCoord=function(e){var t=this.g.Coord[e],i=t[0],a=this.g.getColumn(t[1],i);return this.getVCoord(i,a)},View.Board.xdDisplay=function(e,t){for(var i=0;i<this.pieces.length;i++){var a=this.pieces[i];if(a){var s=t.getCCoord(a.p);e.updateGadget("piece#"+i,{base:{visible:!0,x:s[0],y:s[1]},"2d":{clipx:0==a.t?0:100,clipy:1==a.s?0:100,opacity:1},"2d-wood-alquerque":{clipy:1==a.s?0:150,clipx:0==a.t?0:150},kids:{clipy:1==a.s?0:100},"3d":{checkersType:a.t,checkersSide:a.s},classic3d:{z:h},alquerque3d:{z:.3*r,scale:[3e-4*r,3e-4*r,3e-4*r],materials:{ball:{map:t.mViewOptions.fullPath+"/res/xd-view/meshes/"+(a.s===JocGame.PLAYER_A?"red":"black")+(0==a.t?"":"-king")+".png",reflectivity:(a.s,JocGame.PLAYER_A,.6),opacity:1}}},turkish3d:{scale:[3e-4*r,3e-4*r,3e-4*r],file:t.mViewOptions.fullPath+"/res/xd-view/meshes/turkish"+(0==a.t?"":"-queen")+".js",z:h,materials:{base:{opacity:1}}},turtles3d:{scale:[3e-4*r,3e-4*r,3e-4*r],z:h,checkersType:a.t,rotate:this.CheckersAngle(t,a,a.plp,a.p)}})}else e.updateGadget("piece#"+i,{base:{visible:!1}})}for(var i=this.pieces.length;i<o;i++)e.updateGadget("piece#"+i,{base:{visible:!1}});e.updateGadget("boardframe",{"3d":{materials:{playera:{color:t.mViewAs==JocGame.PLAYER_A?u:p},playerb:{color:t.mViewAs==JocGame.PLAYER_B?u:p}}},turkish3d:{materials:{mainframe:{color:1118481}}},turtles3d:{materials:{mainframe:{color:5635976}}}}),e.updateGadget("videoa",{"3d":{materials:{tv:{color:u}}}}),e.updateGadget("videob",{"3d":{materials:{tv:{color:p}}}})},View.Board.xdInput=function(e,t){return{initial:{pos:[]},getActions:function(i,a){var s={},r=a.pos.length;return i.forEach(function(i){if(!(r>=i.pos.length)){var o=!0;if(a.pos.forEach(function(e,t){i.pos[t]!=e&&(o=!1)}),o){var n=i.pos[r],l=s[n];if(void 0===l){var c;c=r>0?this.board[i.pos[0]]:this.board[n]<0?null:this.board[n];var d=["cell#"+n];null!=c&&d.push("piece#"+c),l=s[n]={moves:[],view:["cell#"+n],click:d,highlight:function(i){e.updateGadget("cell#"+n,{"2d":{classes:"cancel"==i?"xd-cancel":"xd-choice-view",opacity:t.mShowMoves||"cancel"==i?.5:0},"3d":{materials:{ring:{color:"cancel"==i?16729088:16777215,opacity:t.mShowMoves||"cancel"==i?1:0,transparent:!t.mShowMoves&&"cancel"!=i}},castShadow:t.mShowMoves||"cancel"==i}})},unhighlight:function(){},validate:{pos:a.pos.concat([n])},execute:function(s){if(0==r)return void s();var o=null!=i.capt[r]?this.board[i.capt[r]]:null;this.checkersAnimateMove(e,t,this.board[a.pos[0]],i.pos[r],o,function(){s()})},unexecute:function(){var a=this.board[i.pos[0]],s=t.getCCoord(i.pos[r]);e.updateGadget("piece#"+a,{base:{x:s[0],y:s[1]}});var o=null!=i.capt[r]?this.board[i.capt[r]]:null;null!=o&&e.updateGadget("piece#"+o,{"2d":{opacity:1},"3d":{materials:{base:{opacity:1},queen:{opacity:1}}}})}}}l.moves.push(i)}}},this),s}}},View.Board.checkersAnimateMove=function(e,t,i,a,s,o){function n(){null!==s&&t.PlaySound("tac"+(1+Math.floor(3*Math.random()))),0==--l&&(e.updateGadget("piece#"+i,{"3d":{positionEasingUpdate:null}}),o())}null===s&&t.PlaySound("move"+(1+Math.floor(4*Math.random())));var l=1,c=t.getCCoord(a),d=h,u=r,p=-4*(u-0),m=null!==s?this.pieces[s].p:this.pieces[i].p;if(e.updateGadget("piece#"+i,{base:{x:c[0],y:c[1]},"3d":{positionEasingUpdate:function(e){null!==s&&(this.object3d.position.y=(p*e*e-p*e+d)*this.SCALE3D)}},alquerque3d:{positionEasingUpdate:function(e){d=.3*r,null!==s&&(this.object3d.position.y=(p*e*e-p*e+d)*this.SCALE3D)}},turtles3d:{rotate:this.CheckersAngle(t,this.pieces[i],m,a)}},400,n),null!==s){l++;t.getCCoord(this.pieces[s].p);e.updateGadget("piece#"+s,{"2d":{opacity:.3,visible:!t.g.captureInstantRemove},"3d":{visible:!t.g.captureInstantRemove,materials:{base:{opacity:.3},queen:{opacity:.3}}}},400,n)}},View.Board.checkersVanishCapts=function(e,t,i,a){function s(){0==--o&&a()}var o=0;for(var n in i)i.hasOwnProperty(n)&&(o++,e.updateGadget("piece#"+n,{"2d":{opacity:0},"3d":{z:.24*-r},turkish3d:{z:-r},kids3d:{z:.5*-r}},500,s));0==o&&a()},View.Board.xdPlayedMove=function(e,t,i){function a(){var d=null,h=i.capt[c];null!==h&&(d=o.board[h],l[d]=!0,haveCapts=!0),o.checkersAnimateMove(e,t,n,i.pos[c],d,function(){c++,c==i.pos.length?r.checkersVanishCapts(e,t,l,function(){if(0==o.pieces[o.board[i.pos[0]]].t){var e=t.g.Coord[i.pos[i.pos.length-1]][0];(1==r.mWho&&e==s-1||r.mWho==-1&&0==e)&&t.PlaySound("promo")}t.MoveShown()}):a()})}var r=this,o=t.mOldBoard,n=o.board[i.pos[0]],l={},c=1;return a(),!1},View.Board.CheckersAngle=function(e,t,i,a){if(i!=a){var s;if(e.CheckersEachDirection(i,function(i,r){for(;null!==i;){if(i==a){switch(r){case 0:s=135;break;case 2:s=45;break;case 3:s=-45;break;case 1:s=-135;break;default:s=e.mViewAs==t.s?180:0}return!1}i=e.g.Graph[i][r]}return!0}),void 0!==s)return 1==e.mViewAs?s:s+180}return e.mViewAs==t.s?180:0}}(),View.Game.xdPreInit=function(){this.g.lightcellDistance=1.7,this.g.dimensions={width:this.mOptions.width,squareWidth:this.mOptions.width,height:this.mOptions.height},this.g.getColumn=function(e,t){return e}},View.Game.xdInitExtra=function(e){e.updateGadget("board",{"2d-wood-alquerque":{file:this.mViewOptions.fullPath+"/res/images/alquarqueboard1.jpg"}})};