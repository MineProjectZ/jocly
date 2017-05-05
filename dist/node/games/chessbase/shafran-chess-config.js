exports.config = {"status":true,"model":{"title-en":"Shafran Chess","summary":"Hexagonal Chess","rules":{"en":"shafran-rules.html"},"module":"chessbase","plazza":"true","thumbnail":"shafran-thumb.png","released":1403535378,"credits":{"en":"shafran-credits.html"},"gameOptions":{"preventRepeat":true,"uctTransposition":"state","uctIgnoreLoop":false,"levelOptions":{"checkFactor":0.2,"pieceValueFactor":1,"posValueFactor":0.1,"averageDistKingFactor":-0.01,"castleFactor":0.1,"minorPiecesMovedFactor":0.1,"pieceValueRatioFactor":1,"endingKingFreedomFactor":0.01,"endingDistKingFactor":0.05,"distKingCornerFactor":0.1,"distPawnPromo1Factor":0.3,"distPawnPromo2Factor":0.1,"distPawnPromo3Factor":0.05}},"obsolete":false,"js":["base-model.js","hex-geo-model.js","shafran-model.js"],"description":{"en":"shafran-description.html"},"levels":[{"name":"easy","label":"Easy","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxNodes":6000},{"name":"fast","label":"Fast [3sec]","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxDuration":3,"isDefault":true},{"name":"medium","label":"Medium","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxNodes":30000,"maxDuration":30},{"name":"strong","label":"Strong","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxNodes":60000,"maxDuration":45}]},"view":{"title-en":"Chessbase view","visuals":{"600x600":["res/visuals/shafran-600x600-3d.jpg","res/visuals/shafran-600x600-2d.jpg"]},"xdView":true,"css":["chessbase.css","hex.css"],"preferredRatio":1,"useShowMoves":true,"useNotation":true,"module":"chessbase","defaultOptions":{"sounds":true,"moves":true,"notation":false,"autocomplete":false},"skins":[{"name":"skin3d","title":"3D Classic","3d":true,"preload":["smoothedfilegeo|0|/res/ring-target-cylinder-v3.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js","image|/res/staunton/pawn/pawn-diffusemap.jpg","image|/res/staunton/pawn/pawn-normalmap.jpg","smoothedfilegeo|0|/res/staunton/knight/knight.js","image|/res/staunton/knight/knight-diffusemap.jpg","image|/res/staunton/knight/knight-normalmap.jpg","smoothedfilegeo|0|/res/staunton/bishop/bishop.js","image|/res/staunton/bishop/bishop-diffusemap.jpg","image|/res/staunton/bishop/bishop-normalmap.jpg","smoothedfilegeo|0|/res/staunton/rook/rook.js","image|/res/staunton/rook/rook-diffusemap.jpg","image|/res/staunton/rook/rook-normalmap.jpg","smoothedfilegeo|0|/res/staunton/queen/queen.js","image|/res/staunton/queen/queen-diffusemap.jpg","image|/res/staunton/queen/queen-normalmap.jpg","smoothedfilegeo|0|/res/staunton/king/king.js","image|/res/staunton/king/king-diffusemap.jpg","image|/res/staunton/king/king-normalmap.jpg"],"world":{"lightIntensity":1.3,"skyLightIntensity":1.2,"lightCastShadow":true,"fog":false,"color":4686804,"lightPosition":{"x":-9,"y":9,"z":9},"skyLightPosition":{"x":9,"y":9,"z":9},"lightShadowDarkness":0.55,"ambientLightColor":2236962},"camera":{"fov":45,"distMax":50,"radius":13.5,"elevationAngle":45,"elevationMin":0,"distMin":0}},{"name":"skin2d","title":"2D Classic","3d":false,"preload":["image|/res/images/wikipedia.png","image|/res/images/whitebg.png","image|/res/images/cancel.png"]}],"animateSelfMoves":false,"switchable":true,"sounds":{"move1":"alq_move1","move2":"alq_move2","move3":"alq_move3","move4":"alq_move2","tac1":"alq_tac1","tac2":"alq_tac2","tac3":"alq_tac1","promo":"promo","usermove":null},"js":["base-view.js","hex-board-view.js","staunton-set-view.js","shafran-view.js"],"useAutoComplete":true}}