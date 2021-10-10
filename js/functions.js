window.onload = function(){
	
	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.648598,-48.577423),
			scrollWheel:false,
			zoom:12,
			mapTypeId:'satellite'
		}
		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		})


		google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		});
		

	}

	initialize();	

	var conteudo = '<p style="color:black;font-size:13px;padding: 3px 0px;">Meu Endereço</p>';
	addMarker(-27.616637,-48.5923228,'',conteudo,true);

}