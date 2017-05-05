exports.config = {"status":true,"model":{"title-en":"7 Men´s Morris","summary":"An old board game","rules":"rules.html","maxLevel":7,"plazza":"true","thumbnail":"mensmorris7-thumb3d.png","module":"mills","description":"description.html","credits":"credits.html","js":["mills-model.js","7-men-morris-model.js"],"gameOptions":{"preventRepeat":true,"width":5,"height":5,"mencount":7,"poundInMill":false},"levels":[{"label":"Easy","maxDepth":2,"potential":100,"placingRace":1,"isDefault":true},{"label":"Medium","maxDepth":4,"potential":300,"placingRace":1},{"label":"Hard","maxDepth":8,"potential":1000,"placingRace":2}]},"view":{"title-en":"7 Men´s Morris View","switchable":true,"xdView":true,"css":["mills.css","7-men-morris.css"],"js":["mills-xd-view.js","7-men-morris-view.js"],"module":"mills","preferredRatio":1.4,"visuals":{"600x600":["res/visuals/sevenmen-600x600-3d.jpg","res/visuals/sevenmen-600x600-2d.jpg"]},"animateSelfMoves":false,"useNotation":true,"useShowMoves":true,"defaultOptions":{"sounds":true,"notation":false,"moves":true},"sounds":{"move1":"move1","move2":"move2","move3":"move3","move4":"move4","tac1":"tac1","tac2":"tac2","tac3":"tac3","capture":"promo","usermove":null},"skins":[{"name":"classic3d","title":"3D Classic","3d":true,"camera":{"radius":14,"elevationAngle":45,"distMax":39.5,"distMin":10.1,"elevationMin":-89.9,"elevationMax":89.9,"limitCamMoves":true},"world":{"lightIntensity":0.6,"skyLightIntensity":0.3,"lightPosition":{"x":0,"y":18,"z":0},"color":0,"fog":false},"preload":["image|/res/xd-view/meshes/woodcell1x512.jpg","image|/res/xd-view/meshes/piecetop-bump.jpg","image|/res/xd-view/meshes/piecediff.jpg","smoothedfilegeo|0|/res/xd-view/meshes/piece-v2.js","smoothedfilegeo|0|/res/xd-view/meshes/boardoriented.js","smoothedfilegeo|0|/res/xd-view/meshes/ring-target.js"]},{"name":"stone","title":"Stone"},{"name":"suede","title":"Suede"},{"name":"wood","title":"Wood"}]}}