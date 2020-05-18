function log(message) {
  document.getElementById("log").textContent += message + "\n";
}

function join(id) {
	if(event.keyCode == 13) {
		if (id.value.length == 34)
			init(id.value)
		else
			alert("Invalid Code")
	}
}

function init(id = false) {
	document.getElementById("popup").outerHTML = "";
	var b;

	if (id) {
		console.log(id)
		b = Bugout(id);
	}
	else
		b = new Bugout();

	log(b.address() + " [ me ]");

	b.on("seen", function(address) {
		log(address + " [ seen ]");
	});

	b.on("message", function(address, message) {
	  log(address + ": " + message);
	});

	document.getElementById("input").addEventListener("keydown", e => {
		if (e.keyCode == 13) {
			if (b.lastwirecount) {
				b.send(e.target.textContent);
				e.target.textContent = "";
			}
			e.preventDefault();
		}
	});

	console.log("address: " + b.address())
	console.log("seed: " + b.seed)
}



console.log("%c" + "🏴‍☠️Chum Dawg Territory🏴‍☠️", "color: red; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");