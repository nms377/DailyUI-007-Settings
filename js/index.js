function settings() {
	var bgColor = 'white';
	document.body.style.backgroundColor = bgColor;
	var input1 = document.getElementById('inputOne');
	var input2 = document.getElementById('inputTwo');
	var input3 = document.getElementById('inputThree');
	var input4 = document.getElementById('inputFour');

	input1.addEventListener('click', function() {
		if (input1.checked) {
			document.body.style.backgroundColor ='pink';
		} else {
			document.body.style.backgroundColor = bgColor;
		}
	});

	input2.addEventListener('click', function() {
		if (input2.checked) {
			document.getElementById('settings').style.border = '2px dashed purple';
		} else {
			document.getElementById('settings').style.border = '2px solid black';
		}
	});

	input3.addEventListener('click', function() {
		if (input3.checked) {
			document.getElementsByClassName('settingLabel').style.fontWeight = 'bold';
		} else {
			document.getElementsByClassName('settingLabel').style.fontWeight = 'normal';
		}
	});

	input4.addEventListener('click', function() {
		if (input4.checked) {
			document.getElementsByTagName('H1').style.color = 'powderblue';
		} else {
			document.body.style.backgroundColor = bgColor;
		}
	});


}

settings();