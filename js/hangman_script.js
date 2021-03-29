	var animals = ['FROG', 'TOAD', 'SCORPION', 'SPIDER', 'TARANTULA', 'ALBATROSS', 'CANARY', 'DOVE', 'DUCK', 'EAGLE',
					'FALCON', 'GOOSE', 'FLAMINGO', 'PARROT', 'PEACOCK', 'PENGUIN', 'TURKEY', 'FLY', 'CHIMPANZEE', 
					'DEER', 'DOLPHIN', 'ELEPHANT', 'FOX', 'GAZELLE', 'GIRAFFE', 'GOAT', 'BEAR', 'HAMSTER', 'HORSE',
					'LION', 'LLAMA', 'PIG', 'REINDEER', 'SHEEP', 'SEAL', 'WOLF', 'ZEBRA', 'LIZARD', 'SNAKE', 'TORTOISE']
	createTable();
	newGame();
	

	function createTable() {
		var table = document.createElement("table");
		table.style.height = "500px";
		var div = document.getElementById("guessTable");

		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var header = document.createElement("h3");
		header.innerHTML = "Guess the animal!";
		header.style.textAlign = "center";
		header.className = "title";
		td.append(header);
		tr.append(td);
		table.append(tr);

		for (var i = 0; i < 26; i++) {
			var char = String.fromCharCode(65 + i);
			if (i % 9 == 0) {
				var tr = document.createElement("tr");
				var td = document.createElement("td");
				table.append(tr);
				tr.append(td);

			}
			var letter_button = document.createElement("button");
			letter_button.className = "button";
			letter_button.id= char;
			letter_button.innerHTML = char;
			letter_button.onclick = function() {disable(this)};
			td.append(letter_button);
		}
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		tr.append(td);

		var paragraph = document.createElement("p");
		paragraph.id = "guessTheWord";
		paragraph.style = "font-size: 30px";
		paragraph.style.textAlign = "center";
		paragraph.innerHTML = "_ _ _ _ _";
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.append(paragraph);
		tr.append(td);
		table.append(tr);

		var paragraph2 = document.createElement("p");
		paragraph2.style.textAlign = "center";
		paragraph2.className = "title";
		paragraph2.innerHTML = "Good luck!"
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.append(paragraph2);
		tr.append(td);
		table.append(tr);

		div.append(table);
	}

	function disable(button) {
		button.disabled = true;
		var btn = document.getElementById(button.id);
		btn.className = "button-shaded";

		if (chosen_animal.indexOf(button.id) != -1) {
			for (var i = 0; i < chosen_animal.length; i++) {
				if (chosen_animal.charAt(i).toString() == button.id) {
					guessed_word = setCharAt(guessed_word, 2 * i, chosen_animal.charAt(i));
				}
			}
			document.getElementById("guessTheWord").innerHTML = guessed_word;
		} else {
			no_lives--;
			document.getElementById("noLives").innerHTML = no_lives;
			no_image++;
			var image_name = no_image.toString().concat(".jpg");
			document.getElementById("hangmanLives").src = image_name;
			if (no_lives == 0) {
				alert("You lost! Try again!!")
				newGame();
			}
		}

		if (guessed_word.indexOf("_") == -1) {
			alert("Congratulations, you won!");
			newGame();
		}

	}

	function setCharAt(str, index, chr) {
	    if (index > str.length - 1) return str;
	    return str.substring(0, index) + chr + str.substring(index + 1);
	}


	function newGame() {
		this.no_lives = 7;
		document.getElementById("noLives").innerHTML = no_lives;
		this.no_image = 0;
		document.getElementById("hangmanLives").src = "0.jpg";
		this.chosen_animal = animals[Math.floor(Math.random() * animals.length)];
		this.guessed_word = ""; 
		var guessed_word = "";
		for(var i = 1; i <= this.chosen_animal.length; i++) {
			this.guessed_word = this.guessed_word.concat("_ ");
		}
		document.getElementById("guessTheWord").innerHTML = this.guessed_word;

		for (var char_no = 0; char_no <= 25; char_no++) {
			var btn_id = String.fromCharCode(65 + char_no);
			var button = document.getElementById(btn_id);
			if (button.className.localeCompare("button-shaded") == 0) {
				button.className ="button";
			}
			button.disabled = false;
		}
	}