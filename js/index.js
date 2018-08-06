function settings() {
	var bgColor = "white";
	document.body.style.backgroundColor = bgColor;
	var input1 = document.getElementById("inputOne");
	var input2 = document.getElementById("inputTwo");
	var input3 = document.getElementById("inputThree");
	var input4 = document.getElementById("inputFour");
	var labels = document.getElementsByClassName("settingLabel");

	input1.addEventListener("click", function() {
		if (input1.checked) {
			document.body.style.background = "powderblue";
		} else {
			document.body.style.background = bgColor;
		}
	});

	input2.addEventListener("click", function() {
		if (input2.checked) {
			document.getElementById("settings").style.border = "none";
		} else {
			document.getElementById("settings").style.border = "2px solid black";
		}
	});

	input3.addEventListener("click", function() {

		for (var i=0; i < labels.length; i++) {
			if (input3.checked) {
				document.getElementsByClassName("settingLabel")[i].style.fontFamily = "arial, sans-serif";
				document.getElementsByClassName("settingLabel")[i].style.fontWeight = "bold";
			} else {
				document.getElementsByClassName("settingLabel")[i].style.fontFamily = "Times New Roman, serif";
				document.getElementsByClassName("settingLabel")[i].style.fontWeight =
					"normal";
			}
		}

	});

	input4.addEventListener("click", function() {
		if (input4.checked) {
			document.getElementById("header").style.fontSize = "3rem";
			document.getElementById("header").style.fontFamily = "Cookie, serif";
			document.getElementById("header").style.textTransform = "capitalize";
		} else {
			document.getElementById("header").style.fontSize = "2rem";
			document.getElementById("header").style.fontFamily = "serif";
			document.getElementById("header").style.textTransform = "uppercase";
		}
	});
}

settings();
