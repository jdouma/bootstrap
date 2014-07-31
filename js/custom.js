	(function () {
		"use strict";

		var $pickButton = $('#pickButton');

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

		$('#contactForm input[type=submit]').tooltip();



	})();

	// window.onload = function() {
	// 		alert('Window loaded');
	// 	};

	$(document).ready(function() {
		$('#headerContainer').load('html/header.html');
		$('#footerContainer').load('html/footer.html');
		$('#thingsDropdown li').on('click', function() {
			if (! ( $(this).hasClass('disabled') || 
				$(this).hasClass('divider'))) {
				updateThings($(this).text());
		}
	})
	});

	function updateThings(label) {
		$('#thingsButton').text(label);
	}

