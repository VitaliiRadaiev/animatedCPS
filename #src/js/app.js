let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 1000)
				window.addEventListener('resize', setPedding);
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('forms.js');
	@@include('../common/header/header.js');
	@@include('../common/burger/burger.js');
	@@include('../common/side-panel/side-panel.js');
	@@include('../common/partners/partners.js');
	@@include('../common/services/services.js');
	@@include('../common/team/team.js');
	@@include('../common/testimonials/testimonials.js');
	@@include('../common/verify-form/verify-form.js');
	@@include('../common/cookies-message/cookies-message.js');
	@@include('../common/values/values.js');
	@@include('../common/specializations/specializations.js');
	@@include('../common/locations/locations.js');



	let quoteTextAll = document.querySelectorAll('.team-photo__quote-text');
	if (quoteTextAll) {
		quoteTextAll.forEach(quoteText => {
			trimString(quoteText, 121);
		})
	}
});

window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

	@@include('files/dynamic_adapt.js');

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	@@include('../common/_decor/_decor.js');
});


function initMap() {
	if (document.getElementById('map')) {
		let zoom = 10;

		if(document.documentElement.clientWidth < 992) {
			zoom = 9;
		}

		var markers = [];

		var map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 34.172594297983764, lng: -118.75890717238137 },
			zoom: zoom,
		});

		drop();

		function drop() {
			const createAray = () => {
				let arr = [
					{
						lat: 34.22515108219983,
						lng: -119.04675779905969,
					},
					{
						lat: 34.19437056198685,
						lng: -118.47559577520606,
					},
				];

				return arr.map(obj => {
					return new google.maps.LatLng(obj.lat, obj.lng)
				})

			}

			var markersArr = createAray();

			for (let i = 0; i < markersArr.length; i++) {
				markers.push(new google.maps.Marker({
					position: markersArr[i],
					map: map,
					icon: {
						url: '../img/icons/location-red.png',
						//scaledSize: new google.maps.Size(20, 20),
					}
				}));
			}

		}
	}


}
