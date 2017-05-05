exports.config = {"status":true,"model":{"title-en":"Turkish Draughts","summary":"A 8x8 checkers on straight lines.","rules":"rules-turkish-draughts.html","maxLevel":20,"plazza":"true","thumbnail":"turkish-thumb3d.png","module":"checkers","description":"description.html","credits":"credits-turkish-draughts.html","js":["checkersbase-model.js","turkish-model.js"],"gameOptions":{"preventRepeat":true,"width":8,"height":8,"initial":{"a":[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7]],"b":[[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7]]},"variant":{"lastRowCrown":true,"mustMoveForward":true,"kingCaptureShort":false,"captureInstantRemove":true,"captureLongestLine":true,"canCaptureBackward":false},"uctTransposition":"state"},"levels":[{"label":"Fast","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":1,"isDefault":true},{"label":"Beginner","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":0.5,"maxNodes":100,"maxLoops":200},{"label":"Easy","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":1,"maxNodes":2500,"maxLoops":500},{"label":"Medium","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":2,"maxNodes":5500,"maxLoops":500},{"label":"Hard","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":5,"maxNodes":2000,"maxLoops":3500},{"label":"Expert","maxLoops":8000,"c":0.8,"playoutDepth":0,"minVisitsExpand":1,"ai":"uct","uncertaintyFactor":5,"propagateMultiVisits":false,"maxDuration":60,"maxNodes":15000,"ignoreLeaf":false}]},"view":{"title-en":"Turkish Draughts View","skins":[{"name":"turkish3d","title":"3D Classic","3d":true,"camera":{"radius":14,"elevationAngle":45,"limitCamMoves":true},"world":{"lightIntensity":0.8,"color":0,"fog":false,"lightPosition":{"x":-10,"y":18,"z":0},"ambientLightColor":0},"preload":["image|/res/images/wood-chipboard-5.jpg","smoothedfilegeo|0|/res/xd-view/meshes/ring-target.js","smoothedfilegeo|0|/res/xd-view/meshes/turkish.js","smoothedfilegeo|0|/res/xd-view/meshes/turkish-queen.js"]},{"name":"green","title":"Green"},{"name":"wood0","title":"Wood"},{"name":"marble0","title":"Marble"},{"name":"classical","title":"Classic"}],"xdView":true,"css":["checkersbase.css","turkish.css"],"js":["checkers-xd-view.js","turkish-xd-view.js"],"module":"checkers","preferredRatio":1,"visuals":{"600x600":["res/visuals/turkish-draughts-600x600-3d.jpg","res/visuals/turkish-draughts-600x600-2d.jpg"]},"sounds":{"move1":"move1","move2":"move2","move3":"move3","move4":"move4","tac1":"tac1","tac2":"tac1","tac3":"tac1","promo":"promo","usermove":null},"switchable":true,"animateSelfMoves":false,"useNotation":true,"useShowMoves":true,"defaultOptions":{"sounds":true,"notation":false,"moves":true}}}