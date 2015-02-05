window.onload = function() {
    
    var intro = document.getElementById("intro-text"),
		physics = document.getElementById("physics-text"),
		cs = document.getElementById("cs-text"),
		cross = document.getElementById("cross-text"),
		other = document.getElementById("other-text");

    document.getElementById("cs-button").onclick = function() {
        intro.style.display = 'none';
		physics.style.display = 'none';
		cs.style.display = 'block';
		cross.style.display = 'none';
		other.style.display = 'none';
	};
	
	document.getElementById("physics-button").onclick = function() {
        intro.style.display = 'none';
		physics.style.display = 'block';
		cs.style.display = 'none';
		cross.style.display = 'none';
		other.style.display = 'none';
	};
	
	document.getElementById("cross-button").onclick = function() {
        intro.style.display = 'none';
		physics.style.display = 'none';
		cs.style.display = 'none';
		cross.style.display = 'block';
		other.style.display = 'none';
	};
	
	document.getElementById("other-button").onclick = function() {
        intro.style.display = 'none';
		physics.style.display = 'none';
		cs.style.display = 'none';
		cross.style.display = 'none';
		other.style.display = 'block';
	};
};