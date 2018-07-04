// == Pre Loaders =========================

function initPreloaders() {

	// Hide global pre-loader spinner
	jQuery( '.container-main' ).imagesLoaded( { background: true }, function() {

		jQuery( '#pre-loader-main .wrap-spinner' ).addClass( 'animate animate-zoom-out' );
		jQuery( '#pre-loader-main' ).fadeOut( 'slow' );
	});
}

// == CMT JS ==============================

function initBlocks() {

	// Blocks
	jQuery( '.block, .page' ).cmtBlock({
		// Generic
		halfHeight: true,
		heightAuto: true,
		// Block Specific - Ignores generic
		blocks: {
			'block-half': { halfHeight: true },
			'block-qtf': { qtfHeight: true },
			'block-full': { fullHeight: true },
			'block-half-auto': { halfHeight: true, heightAuto: true },
			'block-qtf-auto': { qtfHeight: true, heightAuto: true },
			'block-full-auto': { fullHeight: true, heightAuto: true },
			'block-half-mauto': { halfHeight: true, heightAutoMobile: true, heightAutoMobileWidth: 1024 },
			'block-qtf-mauto': { qtfHeight: true, heightAutoMobile: true, heightAutoMobileWidth: 1024 },
			'block-full-mauto': { fullHeight: true, heightAutoMobile: true, heightAutoMobileWidth: 1024 }
		}
	});
}

function initHeaders() {

	// Perspective Header
	jQuery( '#header-main' ).cmtHeader( { scrollDistance: 280 } );
}

function initScroll() {

	// Smooth Scroll
	jQuery( '.smooth-scroll' ).cmtSmoothScroll();
}

function initBoxes() {

	// Box Forms
	jQuery( '.box-form' ).cmtFormInfo();
}

function initRatings() {

	// Rating
	jQuery( '.rating-star' ).cmtRate({
		same: [ 'fas fa-2x fa-leaf' ],
		emptyColor: '#7F7F7F',
		filledColor: '#7CAA2D',
		hoverColor: '#7CAA2D'
	});

	jQuery( '.rating-emoticons' ).cmtRate({
		same: [ 'cmti cmti-2x cmti-emoticons-sad', 'cmti cmti-2x cmti-emoticons-sulk', 'cmti cmti-2x cmti-emoticons-intense', 'cmti cmti-2x cmti-emoticons-hopeful', 'cmti cmti-2x cmti-emoticons-happy' ],
		emptyColor: '#7F7F7F'
	});
}

function initSelect() {

	// Select
	jQuery( '.cmt-select' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>' } );
	jQuery( '.cmt-select-c' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>', copyOptionClass: true } );
	jQuery( '.cmt-select-s' ).cmtSelect( { iconHtml: '<span class="cmti cmti-chevron-down"></span>', wrapperClass: 'element-small' } );
}

function initChoices() {

	// Checkboxes
	jQuery( '.cmt-checkbox' ).cmtCheckbox();
}

function initFieldGroups() {

	// Field Groups
	jQuery( '.cmt-field-group' ).cmtFieldGroup();
}

function initFileUploaders() {

	// File Uploader
	jQuery( '.file-uploader' ).cmtFileUploader();
}

function initPopups() {

	// Popups
	jQuery( '.popup' ).cmtPopup();

	// Popouts
	jQuery( '.popout-group' ).cmtPopoutGroup();
}

function initAutoSuggests() {

	// Auto Fillers
	jQuery( '.auto-fill' ).cmtAutoFill();
}

function initTabs() {

	// Tabs
	jQuery( '.tabs' ).cmtTabs();
}
	
function initAccordians() {

	// Accordians
	jQuery( '.accordian' ).cmtAccordian();
}

function initGrids() {

	// Grid
	jQuery( '.grid-data' ).cmtGrid();
}

function initIconPickers() {

	// Icon Picker
	jQuery( '.icon-picker' ).cmtIconPicker();
}

function initSliders() {

    // Sliders
    jQuery( '.cmt-slider' ).cmtSlider( {
        "lControlContent" : "<i class=\"cmti cmti-chevron-left icon\"></i>",
        "rControlContent" : "<i class=\"cmti cmti-chevron-right icon\"></i>",
        "circular" : false
    });
}

function initSlidingMenus() {

	// Sliding Menu
	if( jQuery().cmtSlidingMenu ) {

		jQuery( '#popup-menu-main' ).cmtSlidingMenu( { showTrigger: '#btn-mobile-menu', hideTrigger: '#btn-feedback', mainMenu: true, position: 'left' } );
	}
}

function initMaps() {

	// Google Map
	if( jQuery().latLongPicker ) {

		jQuery( '.lat-long-picker' ).latLongPicker();
	}
}

function initHeaderMenus() {

	// Mobile Menu
	jQuery( '#btn-menu-mobile' ).click( function() {

		jQuery( '#menu-main-mobile' ).slideToggle();
	});
}

function initDatePickers() {

	// Datepicker
	var datepickers = jQuery( '.datepicker' );
	
	datepickers.each( function() {

		var datepicker = jQuery( this );

		var start = datepicker.attr( 'start' );

		if( null != start ) {

			datepicker.datepicker({
				dateFormat: 'yy-mm-dd',
				minDate: start
			});
		}
		else {

			datepicker.datepicker({
				dateFormat: 'yy-mm-dd'
			});
		}
	});
}

function initFxSliders() {

	jQuery( '.testimonial-slider, .page-slider' ).foxslider({
		'controls': true,
		'autoScroll': false,
		'duration': 1000,
		'lControlContent': "<span class=\"icon cmti cmti-chevron-left cmti-2x bold\"></span>",
		'rControlContent': "<span class=\"icon cmti cmti-chevron-right cmti-2x bold\"></span>"
	});

	jQuery( '.post-slider' ).foxslider({
		'controls': true,
		'bullets': true,
		'autoScroll': false,
		'duration': 1000,
		'lControlContent': "<span class=\"icon cmti cmti-chevron-left cmti-2x bold\"></span>",
		'rControlContent': "<span class=\"icon cmti cmti-chevron-right cmti-2x bold\"></span>"
	});

	jQuery( '.customer-slider' ).foxslider({
		'controls': true,
		'autoScroll': false,
		'duration': 1000,
		'sliderHeight': 250,
		'slideDimMax': false,
		'lControlContent': "<span class=\"icon cmti cmti-chevron-left cmti-2x bold\"></span>",
		'rControlContent': "<span class=\"icon cmti cmti-chevron-right cmti-2x bold\"></span>"
	});
}

function initFacebookSdk() {

	jQuery( '.share-facebook' ).click( function( event ) {

		event.preventDefault();
		
		var link = jQuery( this ).attr( 'href' );

		FB.ui(
			{
				method: 'share_open_graph',
				action_type: 'og.likes',
				action_properties: JSON.stringify({
				  object:link,
				})
			}, 
			function( response ){ } 
		);
	});
}
