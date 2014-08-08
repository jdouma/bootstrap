	(function () {
		"use strict";

		// turn on tooltips and popovers
		$(function () { $("[data-toggle='tooltip']").tooltip(); });
		$(function () { $("[data-toggle='popover']").popover(); });


		
		var $pickButton = $('#pickButton');
		var $activityTableBody = $('tbody');

		$("#reasonDropdown li a").on("click", function() {
			var reason = $(this).text();
			$pickButton.text(reason);
		});

		var $sentDialog = $('#sentDialog');

		$('#contactForm').on('submit', function() {
			$sentDialog.modal('show');
			return false;
		});

		var $sentAlert = $('#sentAlert');

		$sentDialog.on('hidden.bs.modal', function() {
			$sentAlert.show();
		});

		$sentAlert.on('close.bs.alert', function() {
			$sentAlert.hide();
			return false;
		});

		$('#theCarousel').carousel();

		$(document).ready(function() {
			$('#headerContainer').load('html/header.html');
			$('#footerContainer').load('html/footer.html');
			$('#thingsDropdown li').on('click', function() {
				if (! ( $(this).hasClass('disabled') || 
					$(this).hasClass('divider'))) {
					updateThings($(this).text());
			}
		});


//
$('.popover-markup > .trigger').popover({
	html : true,
	title: function() {
		return $(this).parent().find('.head').html();
	},
	content: function() {
				//return $(this).parent().find('.head').html();
				return $(this).parent().find('#popoverContent').html();
			},
			container: 'body',
			placement: 'right'
		});


});

		// var myJson = {};
		// $.getJSON('http://localhost:8080/webapi/activities/1235', function(json) {
		// 	alert("Test: " + json.duration);
		// });	

	var callback = new Function();
	var url = "http://localhost:8080/webapi/activities/1235";
	$.ajax( 'http://localhost:8080/webapi/activities/1235',
	{ 	
		 dataType:'jsonp json',
		 jsonpCallback: 'callback',
		//complete: function(data) { alert(JSON.stringify(data)); },
		error: function(xhr, item2, err) {
			alert("Error: " + JSON.stringify(xhr));
		},
		success: function(data) {
			alert(data.duration);
		}
	});

	createActivityRow("justin", "Fishing", 21);

	function callback(object) {
		alert(object);
	}

	function createActivityRow(user, activity, minutes) {
		$activityTableBody.append('<tr class="danger"><td>' + user +  '</td><td>' + activity + 
			'</td><td>' + minutes + '</td></tr>');
	}	

	function updateThings(label) {
		$('#thingsButton').text(label);
	}

})();