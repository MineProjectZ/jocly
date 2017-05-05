exports.config = {"status":true,"model":{"title-en":"Four In A Row 9x6","summary":"Four In A Row on a 9x6 board","thumbnail":"fiar-thumb.png","js":["fiarbase-model.js"],"plazza":"true","module":"fourinarow","rules":{"en":"rules.html","fr":"rules-fr.html"},"description":{"en":"description.html","fr":"description-fr.html"},"credits":{"en":"credits.html","fr":"credits-fr.html"},"gameOptions":{"width":9,"height":6,"lines":4,"remove":false,"levelOptions":{"evalTuple1":1,"evalTuple2":2,"evalTuple3":4,"evalTuple4":8,"evalTuple5":16,"evalTuple6":32},"uctTransposition":"state"},"levels":[{"name":"easy","label":"Easy","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.55,"ignoreLeaf":false,"maxNodes":1000,"isDefault":true},{"name":"fast","label":"Fast [1sec]","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.55,"ignoreLeaf":false,"maxDuration":1},{"name":"strong","label":"Strong","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.55,"ignoreLeaf":false,"maxNodes":10000}]},"view":{"title-en":"Four In A Row View","visuals":{"600x600":["res/visuals/fourinarow-9x6-600x600-3d.jpg","res/visuals/fourinarow-9x6-600x600-2d.jpg"]},"js":["fiarbase-xd-view.js"],"xdView":true,"css":["fiarbase.css"],"preferredRatio":1,"module":"fourinarow","useNotation":true,"sounds":{"sound1":"sound1","sound2":"sound2"},"defaultOptions":{"sounds":true,"moves":true,"notation":false},"skins":[{"name":"fiar3d","title":"3D Classic","3d":true,"camera":{"radius":20,"limitCamMoves":true,"rotationAngle":180,"elevationAngle":0,"elevationMin":-89,"elevationMax":89,"distMax":30},"world":{"lightIntensity":0.2,"skyLightIntensity":0.2,"lightCastShadow":false,"fog":true,"color":0,"lightPosition":{"x":10,"y":5,"z":0},"lightShadowDarkness":0.55,"ambientLightColor":2236996},"preload":["map|/res/xd-view/meshes/connect4-red-star.png","map|/res/xd-view/meshes/connect4-red.png","map|/res/xd-view/meshes/connect4-yellow-star.png","map|/res/xd-view/meshes/connect4-yellow.png","smoothedfilegeo|0|/res/xd-view/meshes/connect4cell.js","smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-ring-smoothed.js","smoothedfilegeo|0|/res/xd-view/meshes/connect4-token.js","smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-foot.js"]},{"name":"fiar2d","title":"2D Classic","3d":false,"preload":["image|/res/sprites2d.png"]}],"animateSelfMoves":false,"useShowMoves":false}}