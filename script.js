console.log('hey there!')


function showPopup(argument) {
	var popup = document.getElementById ('popup');
	popup.classList.add('show')
}

function hidePopup(argument) {
	var popup = document.getElementById ('popup');
	popup.classList.remove('show')
}