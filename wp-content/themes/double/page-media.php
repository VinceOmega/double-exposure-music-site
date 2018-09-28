<?php
/*
Template Name: Media Page
*/
?>

<?php get_header(); ?>
			
    <div id="page-container" class="container">

        <div class="container__media-page">

            <div class="container__media-page__video">
                <div class="container__media-page__video__image">
                    <a href="<?php echo get_template_directory_uri(); ?>/media/video/Sample.mp4" class="" media="" media-src="" rel="lightbox[Example Video 50% 70%]" title="Example Video"><img src="https://placeimg.com/320/150/any"></a>
                    <div class="container__media-page__video__play">
                        <span><i class="fas fa-play-circle"></i>Play Video</span>
                    </div>
                </div>
                <div class="container__media-page__video__description">
                    Incididunt adipisicing ad sint sit fugiat aute cupidatat sit minim sint.
                </div>
            </div>

            <div class="container__media-page__audio">
                <div class="container__media-page__audio__image">
                    <a href="<?php echo get_template_directory_uri(); ?>/media/audio/Sample.mp3" class="" media="" media-src="" rel="lightbox[Example Audio 50% 70%]" title="Example Video"><img src="https://placeimg.com/320/150/any"></a>
                    <div class="container__media-page__audio__play">
                        <span><i class="fas fa-play-circle"></i>Play Audio</span>
                    </div>
                </div>
                <div class="container__media-page__audio__description">
                    Incididunt adipisicing ad sint sit fugiat aute cupidatat sit minim sint.
                </div>
            </div>

        </div>
    
    </div> <!-- end #content -->

<?php get_footer(); ?>
