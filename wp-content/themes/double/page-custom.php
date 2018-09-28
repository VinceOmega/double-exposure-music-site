<?php
/*
Template Name: Custom Page Example
*/
?>

<?php get_header(); ?>
			
			<div id="page-container" class="container">

				<h1 class="container__main-header">THIS IS DOUBLE EXPOSURE</h1>
			
				<div class="container__media">
					<div class="container__media__video">
						<video loop muted autoplay poster="<?php echo get_template_directory_uri(); ?>/img/Double_Exposure_Center_Stage.jpg" class="container__media__video__item">
							<source src="<?php echo get_template_directory_uri(); ?>/media/video/sample.mp4" type="video/mp4">
						</video>
					</div>
				</div>
			
			</div> <!-- end #content -->

<?php get_footer(); ?>
