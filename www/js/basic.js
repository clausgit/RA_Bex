
var $globalContentID = 0;

window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);

$(document).ready(function() {
	
	
		global_bex.load_content();// Der ganze Content wird geladen Siehe content_loader.js //
		//alert($global_content_2_1);

	    //$('a[data-theme="app-ios"]').find('.ui-icon').remove();
	    //$('a[data-theme="app-ios"]').append('<div class="ios-tip"><span>&nbsp;</span></div>');

		$('a[data-role="button"]').live("click", function(e) {
			$globalContentID = $(this).data("content_id");  				
			//alert($globalContentID);
		});
		
		/*$('a[data-theme="app-ios"]').live("click", function(e) {
			$globalContentID = $(this).data("content_id");  				
			//alert($globalContentID);
		});
		
		$('a[data-rel="back"]').live("click", function(e) {
			$globalContentID = $(this).data("content_id");  				
			//alert($globalContentID);
		});*/
		
		

		
		/*pub.goToUrl = function(sender) {
		  // get url off of data attribute from item that was clicked
		  var url = $(sender).data("url"); 

		  // install ChildBrowser
		  var cb = ChildBrowser.install();
		  // if ChildBrowser is installed, open it with target set
		  if(cb != null)
		    window.plugins.childBrowser.showWebPage(url);
		}*/
		
		$('#openpdf').live("click", function(e) {
			window.open(encodeURI('docs/Bild-29-12-2011.pdf'), '_blank', 'EnableViewPortScale=yes');
			//window.open(encodeURI('docs/Bild-29-12-2011.pdf'), '_blank', 'location=no', 'EnableViewPortScale=yes');
			//alert('Hallo');
			//window.plugins.childBrowser.showWebPage('http://www.google.com', { showLocationBar: true });
			//Cordova.exec("ChildBrowserCommand.showWebPage", "file:///www/docs/Bild-29-12-2011.pdf" );
		});
		
		/* ANFANG PRINTKRAM		
		function printMe(id){
		window.frames["printeriframe"].document.getElementById("printcontent").innerHTML = document.getElementById(id).innerHTML
		window.frames['printeriframe'].printMe()
		}
	
		$('#printButton').live("click", function(e) {
			  document.getElementById("iFramePdf").print();
			//window.print();
			//window.frames['iFramePdf'].print();
			//document.getElementById("iFramePdf").contentWindow.print();
			//window.frames["iFramePdf"].focus();
			//window.frames["iFramePdf"].print();
		});
		
		function printTrigger(elementId) {
			alert('Hallo');
			
			window.frames["iFramePdf"].focus();
			window.frames["iFramePdf"].print();
			
		    //var getMyFrame = document.getElementById(elementId);
		    //getMyFrame.focus();
		    //getMyFrame.contentWindow.print();
		}
		ENDE PRINTKRAM */
		
    var InfiniteRotator = { init: function() {
            //interval between items (in milliseconds)
            var itemInterval = 100;
            //count number of items
            var numberOfItems = 10;
            //set current item
            var currentItem = 1;
            //loop through the items
            var infiniteLoop = setInterval(function(){
                if(currentItem == numberOfItems -1){currentItem = 1;}else{currentItem++;}
				$('#fire_image').attr('src','img/IMG_0135.0000' + currentItem + '.jpg').trigger('create');
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();


 
});


$(function () {
    $('#leftNav').children('a').button();
});


$(function () {
    var element = $("#ticker");
    (function(){
        element
            .animate({ marginLeft: -455, easing: 'linear' }, 8000, 'linear')
			.animate({ marginLeft: -7, easing: 'linear' }, 1, arguments.callee)

    }());
});


$( '#page_5_2' ).live( 'pageshow',function(event, ui){

	//------- Google Maps ---------//

	// Creating a LatLng object containing the coordinate for the center of the map
	var latlng = new google.maps.LatLng(50.7686653,6.1086211);

	// Creating an object literal containing the properties we want to pass to the map  
	var options = {  
		zoom: 15, // This number can be set to define the initial zoom level of the map
		center: latlng,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
	};  
	
	// Calling the constructor, thereby initializing the map  
	var map = new google.maps.Map(document.getElementById('map_div'), options);  
		//$('#map_div').trigger('create');
		

		
	// Define Marker properties
	var image = new google.maps.MarkerImage('js/images/marker.png',
		// This marker is 129 pixels wide by 42 pixels tall.
		new google.maps.Size(129, 42),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 18,42.
		new google.maps.Point(18, 42)
	);

	// Add Marker
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(50.7686653,6.1086211), 
		map: map,		
		icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
	});	

	// Add listener for a click on the pin
	google.maps.event.addListener(marker1, 'click', function() {  
		infowindow1.open(map, marker1);  
	});

	// Add information window
	var infowindow1 = new google.maps.InfoWindow({  
		content:  createInfo('ANWALTSKANZLEI BEX', 'Rechtsanwalt Harald Bex<br>Viktoriastraße 28<br>52066 Aachen')
	}); 

	// Create information window
	function createInfo(title, content) {
		return '<div class="infowindow"><strong>'+ title +'</strong><br />'+content+'</div>';
	}
	
	//$('#map_div').trigger('create');
	//------- Google Maps ---------//
	//google.maps.event.trigger(map,'resize');
	
	//setTimeout(function(){map.invalidateSize();}, 1);
	
	

	

});

$( '#content_page_2' ).live( 'pagebeforeshow',function(event, ui){	 
	var temp_HeaderToShow = $global_content['header_' + $globalContentID];
	$("#content_page_2_header").html(temp_HeaderToShow).trigger('create');
	var temp_ContentToShow = $global_content['content_' + $globalContentID];
	$("#content_page_2_content").html(temp_ContentToShow).trigger('create');
});

$( '#content_page_2_3' ).live( 'pagebeforeshow',function(event, ui){	
	var temp_HeaderToShow = $global_content['header_' + $globalContentID];
	$("#content_page_2_3_header").html(temp_HeaderToShow).trigger('create');
	var temp_ContentToShow = $global_content['content_' + $globalContentID];
	$("#content_page_2_3_content").html(temp_ContentToShow).trigger('create');
});



$( '#content_page_2_3_12' ).live( 'pagebeforeshow',function(event, ui){	
	var temp_HeaderToShow = $global_content['header_' + $globalContentID];
	$("#content_page_2_3_12_header").html(temp_HeaderToShow).trigger('create');
	var temp_ContentToShow = $global_content['content_' + $globalContentID];
	$("#content_page_2_3_12_content").html(temp_ContentToShow).trigger('create');
});




/*$("#select_document").change(function() {
    var $temp_document_selected = $(this).val();
	//alert($temp_document_selected);
	//window.open($temp_document_selected,'_blank')
	window.location = ($temp_document_selected); 
});*/








