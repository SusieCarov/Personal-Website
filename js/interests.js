window.onload = function() {
    
    var intro = document.getElementById("intro-text"),
		theatre = document.getElementById("theatre-text"),
		travel = document.getElementById("travel-text"),
		disney = document.getElementById("disney-text"),
		games = document.getElementById("games-text");

    document.getElementById("theatre-button").onclick = function() {
        intro.style.display = 'none';
		theatre.style.display = 'block';
		travel.style.display = 'none';
		disney.style.display = 'none';
		games.style.display = 'none';
	};
	
	document.getElementById("travel-button").onclick = function() {
        intro.style.display = 'none';
		theatre.style.display = 'none';
		travel.style.display = 'block';
		disney.style.display = 'none';
		games.style.display = 'none';
	};
	
	document.getElementById("disney-button").onclick = function() {
        intro.style.display = 'none';
		theatre.style.display = 'none';
		travel.style.display = 'none';
		disney.style.display = 'block';
		games.style.display = 'none';
	};
	
	document.getElementById("games-button").onclick = function() {
        intro.style.display = 'none';
		theatre.style.display = 'none';
		travel.style.display = 'none';
		disney.style.display = 'none';
		games.style.display = 'block';
	};
};