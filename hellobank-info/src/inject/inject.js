chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			// ----------------------------------------------------------

			console.log('extension Hellbank info loaded');

			(function () {
				var nTimer = setInterval(function () {
					if (window.jQuery) {
						// Do something with jQuery
						if ($('.solde-compte') && $('#montant_opeav')) {
							try {
								var credit = parseFloat($('.solde-compte').html()
									.replace('&nbsp;€', '')
									.replace('.', '')
									.replace(',', '.')
								);
								var debit = parseFloat($('#montant_opeav').html()
									.replace(' €', '')
									.replace('.', '')
									.replace(',', '.')
								);

								$('.details-positif').append('<br/><span class="today-label">' + (credit + debit) + ' €</span>');
								clearInterval(nTimer);
							} catch (e) { }
						}
					}
				}, 100);
			})();
		}
	}, 10);
});