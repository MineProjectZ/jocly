exports.config = {"status":true,"model":{"js":["reversi-model.js"],"plazza":"true","released":1409239768,"title-en":"Annexation Cross","module":"reversi","summary":"Reversi/Othello rules on a cross-shaped board","thumbnail":"thumb-cross.png","rules":{"en":"rules-cross.html"},"credits":{"en":"credits.html"},"description":{"en":"description.html"},"gameOptions":{"preventRepeat":true,"uctTransposition":"state","levelOptions":{"stableFactor":20,"aboutStableFactor":-20,"aboutStableBorderFactor":-15,"borderFactor":5,"aboutBorderFactor":-4,"countFactor":1,"mobilityFactor":5},"width":8,"height":8,"deadCells":{"0:0":"#","0:1":"#","1:0":"#","1:1":"#","0:7":"#","0:6":"#","1:7":"#","1:6":"#","7:0":"#","7:1":"#","6:0":"#","6:1":"#","7:7":"#","7:6":"#","6:7":"#","6:6":"#"},"initial":{"1":["3:4","4:3"],"-1":["3:3","4:4"]}},"debugEval":true,"levels":[{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.65,"ignoreLeaf":false,"log":true,"uncertaintyFactor":3,"name":"easy","label":"Easy","maxNodes":1000},{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.65,"ignoreLeaf":false,"log":true,"uncertaintyFactor":3,"name":"fast","label":"Fast [1sec]","maxDuration":1,"isDefault":true},{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.65,"ignoreLeaf":false,"log":true,"uncertaintyFactor":3,"name":"medium","label":"Medium","maxNodes":10000,"maxDuration":10},{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.65,"ignoreLeaf":false,"log":true,"uncertaintyFactor":3,"name":"strong","label":"Strong","maxNodes":20000,"maxDuration":15}]},"view":{"title-en":"Annex View","js":["reversi-xd-view.js"],"xdView":true,"useNotation":true,"useShowMoves":true,"module":"reversi","skins":[{"name":"classic3d","title":"3D Classic","3d":true,"camera":{"radius":14,"elevationAngle":45,"distMax":39.5,"distMin":10.1,"elevationMin":-89.9,"elevationMax":89.9,"limitCamMoves":true,"fov":45},"world":{"lightIntensity":0.7,"skyLightIntensity":0.3,"lightPosition":{"x":10,"y":18,"z":0},"lightShadowDarkness":0.35,"color":4686804,"ambientLightColor":5592405,"fog":false},"preload":["image|/res/xd-view/pass-dark.png","image|/res/xd-view/pass-light.png","image|/res/images/wood-chipboard-5.jpg","image|/res/xd-view/reversi-pieces-2-textures.png","image|/res/xd-view/reversi-pieces-2-textures-bump.png","smoothedfilegeo|0|/res/xd-view/ring-target.js","smoothedfilegeo|0|/res/xd-view/reversi-pieces-6.js"]},{"name":"classic2d","title":"2D Classic","preload":["image|/res/xd-view/pass-dark.png","image|/res/xd-view/pass-light.png","image|/res/xd-view/boardtexture.jpg","image|/res/xd-view/cellshadows.png","image|/res/xd-view/sprites.png","image|/res/xd-view/select-target-2d.png"]}],"visuals":{"600x600":["res/visuals/cross-600x600-3d.jpg","res/visuals/cross-600x600-2d.jpg"]}}}