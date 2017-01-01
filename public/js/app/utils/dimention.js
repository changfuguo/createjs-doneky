(function(w){


	w.dkg.Dimention = {
		
	}

	w.dkg.Random = function(min, max) {
            return Math.floor((max - min + 1) * Math.random()) + min;
	}
    w.dkg.pointtoradian = Math.PI / 180;
})(window);