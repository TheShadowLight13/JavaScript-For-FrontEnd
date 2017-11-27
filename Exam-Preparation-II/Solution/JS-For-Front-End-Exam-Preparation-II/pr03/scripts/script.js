function attachEvents() {
    let loadButton = $('button[type="submit"]');
    let locationInput = $('.location-input');
    let resultDiv = $('.result');

    loadButton.click(function (event) {
        event.preventDefault();
        let locationInputVal = locationInput.val();
		if (locationInputVal.trim() !== '') {
			let resultElementDiv = $('<div class="result-element">');
			resultElementDiv.appendTo(resultDiv);
			resultElementDiv.append(locationInputVal);
		}
       
        locationInput.val('');
    });
}

attachEvents();