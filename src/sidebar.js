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
