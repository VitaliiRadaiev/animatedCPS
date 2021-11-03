function initMap() {
	let icon = 'data:image/png;base64,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';
	
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
						url: icon,
						//scaledSize: new google.maps.Size(20, 20),
					}
				}));
			}

		}
	}


}
