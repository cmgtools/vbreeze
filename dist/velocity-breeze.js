/**
 * Velocity Breeze - v1.0.0-alpha1 - 2020-04-10
 * Description: Velocity Breeze provides default implementation and bootstrapping of Velocity Components using Breeze.
 * License: GPL-3.0-or-later
 * Author: Bhagwat Singh Chouhan
 */

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


// == Initialize Search ===================

function initSearch() {

	// Click
	jQuery( '.btn-search' ).click( function() {

		searchBro( jQuery( this ).closest( '.search-box' ) );
	});

	// Keypress
	jQuery( '.search-terms' ).keypress( function( e ) {

		searchBro( jQuery( this ).closest( '.search-box' ) );
	});

	// Init Default Filters
	initTextFilter( '.filter-text' );
	initCheckboxFilter( '.filter-checkbox' );
	initRangeFilter( '.filter-range' );
}

function searchBro( searchBox ) {

	var pageUrl		= window.location.href;
	var keywords	= searchBox.find( '.search-terms' ).val();

	if( cmt.utils.data.hasAttribute( searchBox, 'url' ) ) {

		pageUrl = siteUrl + searchBox.attr( 'url' );
	}

	// Search Keywords
	if( null != keywords && keywords.length > 0 ) {

		pageUrl = cmt.utils.data.updateUrlParam( pageUrl, 'keywords', keywords );
	}
	else {

		pageUrl = cmt.utils.data.removeParam( pageUrl, 'keywords' );
	}

	window.location	= pageUrl;
}

// == Search Filters ======================

function initTextFilter( selector ) {

	jQuery( selector ).click( function() {

		var pageUrl	= window.location.href;
		var param	= jQuery( this ).attr( 'column' );
		var value	= jQuery( this ).attr( 'filter' );

		window.location = cmt.utils.data.updateUrlParam( pageUrl, param, value );
	});
}

function initCheckboxFilter( selector ) {

	jQuery( selector ).change( function() {

		var pageUrl	= window.location.href;
		var param	= jQuery( this ).attr( 'column' );

		var checked	= [];

		jQuery( selector ).each( function( id, cb ) {

			if( jQuery( cb ).is( ':checked' ) ) {

				checked.push( jQuery( cb ).val() );
			}
		});

		var pageUrl	= window.location.href;

		if( checked.length > 0 ) {

			checked = checked.join();

			window.location = cmt.utils.data.updateUrlParam( pageUrl, param, checked );
		}
		else {

			window.location = cmt.utils.data.removeParam( pageUrl, param );
		}
	});
}

function initRangeFilter( selector ) {

    jQuery( selector ).each( function( index ) {

		var filter	= jQuery( this );

		var pageUrl	= window.location.href;
		var param	= filter.attr( 'column' );

        var start	= parseFloat( filter.attr( 'start' ) );
        var end		= parseFloat( filter.attr( 'end' ) );
        var min		= parseFloat( filter.attr( 'min' ) );
        var max		= parseFloat( filter.attr( 'max' ) );

        noUiSlider.create( selector, {
            start: [ start, end ],
            connect: true,
            behaviour: 'tap',
            range: {
                'min': [ min ],
                'max': [ max ]
            }
        });

        selector.noUiSlider.on( 'update', function( values, handle ) {

			var value = values[ 0 ] + "," + values[ 1 ];

            window.location = cmt.utils.data.updateUrlParam( pageUrl, param, value );
        });
    });
}


// == Sidebars ============================

function initSidebar() {

	jQuery( '#btn-sidebar-main' ).click( function() {

		if( jQuery( '#sidebar-main' ).hasClass( 'sidebar-main-micro' ) ) {

			updateUserConfig( 'microSidebar', 0 );
		}
		else {

			updateUserConfig( 'microSidebar', 1 );
		}

		jQuery( '#sidebar-main' ).toggleClass( 'sidebar-main-micro' );

		initSidebarTabs();
	});
	
	jQuery( '#btn-sidebar-mobile' ).click( function() {
		
		jQuery( '#sidebar-main' ).fadeIn( 'slow' );
	});
	
	jQuery( '#btn-sidebar-close' ).click( function() {
		
		jQuery( '#sidebar-main' ).fadeOut( 'fast' );
	});
}

function initSidebarTabs() {

	if( jQuery( '#sidebar-main' ).hasClass( 'sidebar-main-micro' ) ) {

		jQuery( '.sidebar-main-filler' ).addClass( 'sidebar-filler-micro' );
		jQuery( '.container-main' ).addClass( 'container-main-micro' );
		jQuery( '.content-main-wrap' ).addClass( 'content-main-wrap-micro' );

		jQuery( '#sidebar-main .collapsible-tab .tab-header' ).addClass( 'tab-content-trigger' );
		jQuery( '#sidebar-main .tab-content' ).removeClass( 'visible' );

		jQuery( '#sidebar-main .tab-content-trigger' ).click( function() {

			var parent = jQuery( this ).closest( '.collapsible-tab' );

			if( parent.hasClass( 'has-children' ) ) {

				var tab = parent.find( '.tab-content' );

				if( tab.is( ':visible' ) ) {

					tab.hide( 'fast' );
				}
				else {

					jQuery( '#sidebar-main .tab-content' ).hide( 'fast' );

					tab.fadeIn( 'slow' );
				}
			}
		});

		jQuery( '#btn-sidebar-main .sidebar-trigger-expanded' ).hide();
		jQuery( '#btn-sidebar-main .sidebar-trigger-collapsed' ).show();
	}
	else {

		jQuery( '.sidebar-main-filler' ).removeClass( 'sidebar-filler-micro' );
		jQuery( '.container-main' ).removeClass( 'container-main-micro' );
		jQuery( '.content-main-wrap' ).removeClass( 'content-main-wrap-micro' );

		jQuery( '#sidebar-main .collapsible-tab .tab-header' ).unbind( 'click' );
		jQuery( '#sidebar-main .collapsible-tab .tab-header' ).removeClass( 'tab-content-trigger' );
		jQuery( '#sidebar-main .collapsible-tab.has-children.active .tab-content' ).addClass( 'visible' );
		
		jQuery( '#btn-sidebar-main .sidebar-trigger-expanded' ).show();
		jQuery( '#btn-sidebar-main .sidebar-trigger-collapsed' ).hide();
	}
}
