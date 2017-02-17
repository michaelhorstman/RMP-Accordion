$(document).ready(function() {

	// Calls Accordion function on page load

	$(function() {
		$('.accordion').accordion();
	});



	$('.accordion').on('click', '.accordion-control', function(eve) {
		eve.preventDefault();  // Prevents buttons from loading new page
		$(this)
		.next('.accordion-panel') // Selects the next element with a class of accordion panel
		.not(':animated')
		.slideToggle();
	});


	$('.accordion').accordion( {
		collapsible: true,
		active: false,
		heightStyle: "content",
		

		beforeActivate: function(event, ui) {

			// The accordion believes a panel is being opened
			if (ui.newHeader[0]) {
				var currHeader = ui.newHeader;
				var currContnet = currHeader.next('.ui-accordion-content');
			
			// The accordion believes a panel is being closed
			} else {
				var currHeader = ui.oldHeader;
				var currContent = currHeader.next('.ui-accordion-content');
			}

			var isPanelSelected = currHeader.attr('aria-selected') == 'true';

			// Toggle Panel's header
			currHeader.toggleClass('ui-corner-all', isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top', !isPanelSelected).attr('aria-selected', ((!isPanelSelected).toString()));

			// Toggle Panel's Icon
			currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e', isPanelSelected).toggleClass('ui-icon-triangle-1-s', !isPanelSelected);


			if (isPanelSelected) {
					$('accordion-panel').removeClass('ui-accordion-content-active');
			} else {
					$('accordion-panel').addClass('ui-accordion-content-active');
			}
			return false;

		}
	}); // End of Accordion






}); // End of Document