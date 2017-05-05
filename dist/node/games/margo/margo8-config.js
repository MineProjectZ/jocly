exports.config = {"status":true,"model":{"title-en":"Margo 8","summary":"Margo game","js":["spbase-model.js","margo-model.js"],"levels":[{"label":"Fast (1sec)","maxDuration":1,"isDefault":true,"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.16486250067757,"ignoreLeaf":false,"uncertaintyFactor":0},{"label":"Beginner","maxDuration":1,"maxNodes":250,"maxLoops":50,"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.16486250067757,"ignoreLeaf":false,"uncertaintyFactor":0},{"label":"Easy","maxDuration":2,"maxNodes":500,"maxLoops":100,"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.16486250067757,"ignoreLeaf":false,"uncertaintyFactor":0},{"label":"Medium","maxDuration":4,"maxNodes":2500,"maxLoops":200,"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.16486250067757,"ignoreLeaf":false,"uncertaintyFactor":0},{"label":"Confirmed","maxDuration":8,"maxNodes":5000,"maxLoops":500,"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.16486250067757,"ignoreLeaf":false,"uncertaintyFactor":0},{"label":"Slow (10sec)","maxDuration":10,"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.16486250067757,"ignoreLeaf":false,"uncertaintyFactor":0}],"thumbnail":"tn-margo8.png","strings":[],"module":"margo","description":{"en":"description.html","fr":"description-fr.html"},"credits":{"en":"credits.html","fr":"credits-fr.html"},"demoRandom":true,"gameOptions":{"preventRepeat":true,"uctTransposition":"states","uctIgnoreLoop":true,"size":8,"levelOptions":{"evalSafety3fMore":46.937096046536,"evalSafety":20,"evalSafetyXEyesBonus":1.7649150399344,"evalSafety1f":10,"evalSafety3f":31.878459454792,"evalSafety2eyes":20.316545249669,"evalSafety3fMoreBonus":1.1493006038375,"evalSafety1eyeBonus":6.0032010946565,"evalSafetyPinnedBonus":0,"evalHeightRatio":1.146771970669,"evalCenterRatio":0.07973781159539}},"plazza":"true","rules":{"en":"rules.html","fr":"rules-fr.html"}},"view":{"title-en":"Margo View","visuals":{"600x600":["res/visuals/margo8-600x600-3d.jpg","res/visuals/margo8-600x600-2d.jpg"]},"js":["spbase-xd-view.js"],"xdView":true,"css":["spbase.css"],"module":"margo","useNotation":true,"defaultOptions":{"sounds":true,"moves":true,"notation":false},"skins":[{"name":"classic3d","title":"3D Classic","3d":true,"camera":{"radius":20,"elevationAngle":45,"limitCamMoves":true,"distMax":40,"distMin":10,"elevationMin":-45,"elevationMax":89.9,"enableDrag":false},"world":{"lightIntensity":0,"color":0,"fog":false,"skyLightIntensity":0.7,"skyLightPosition":{"x":0,"y":10,"z":0},"ambientLightColor":8947848},"preload":["image|/res/xd-view/meshes/grey.png","image|/res/xd-view/meshes/black.png","image|/res/xd-view/meshes/white.png","image|/res/xd-view/meshes/green.png","image|/res/xd-view/meshes/skybox/nx.jpg","image|/res/xd-view/meshes/skybox/ny.jpg","image|/res/xd-view/meshes/skybox/nz.jpg","image|/res/xd-view/meshes/skybox/px.jpg","image|/res/xd-view/meshes/skybox/py.jpg","image|/res/xd-view/meshes/skybox/pz.jpg"]},{"name":"wood","title":"Wood","preload":["image|/res/images/ball_black.png","image|/res/images/ball_white.png","image|/res/images/ball_green.png","image|/res/images/plot.png","image|/res/images/wood.png"]},{"name":"classical","title":"Classic","preload":["image|/res/images/ball_black.png","image|/res/images/ball_white.png","image|/res/images/ball_green.png","image|/res/images/plot.png"]}],"animateSelfMoves":false,"preferredRatio":1}}