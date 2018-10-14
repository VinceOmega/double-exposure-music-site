<!doctype html>  

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->
	
	<head>

		<meta charset="utf-8">
		<!-- Google Chrome Frame for IE -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
		<!-- mobile meta (hooray!) -->
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<title><?php wp_title(''); ?></title>

		<link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700,700i" rel="stylesheet">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/mediaboxAdv-Dark.css">

		<!-- icons & favicons (for more: http://themble.com/support/adding-icons-favicons/) -->
		<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
				
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">

		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->
			
		<!-- drop Google Analytics Here -->
		<!-- end analytics -->
		
		<!--
			<script src="https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/mootools-more/1.6.0/mootools-more-compressed.js"></script>
		-->
		<script src="<?php echo get_template_directory_uri(); ?>/library/js/howler.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/library/js/nonverblaster.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/library/js/swfobject.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/library/js/script.js"></script>
		
	</head>
	
	<body <?php body_class(); ?>>
	
		<div id="container">
			
			<header class="header" role="banner">
						
				<nav role="navigation" class="navigation">

					<ul class="navigation__pages">
						<li><a class="navigation__pages__links" href="/" 			data-title="home">Home</a></li>
						<li><a class="navigation__pages__links" href="/bio" 		data-title="bio">Bio</a></li>
						<li><a class="navigation__pages__links" href="/media" 		data-title="media">Media</a></li>
						<li><a class="navigation__pages__links" href="/contact-us" 	data-title="contact-us">Contact</a></li>
					</ul>

					<div class="navigation__tri-shape">

					</div>

				</nav>
					
			</header> <!-- end header -->
