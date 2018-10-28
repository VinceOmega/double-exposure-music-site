<?php

$dir                    = scandir( 'wp-content/themes/double/media/audio/' );
$albumArray             = array();
$albumArrayMirrored     = array();
$songArray              = array();
$songArrayMirrored      = array();
$temp                   = array();
$i                      = 0;
foreach( $dir as $dirkey => $dirvalue ){
    
    $temp = explode( " - ", $dirvalue );
    array_push( $albumArray, $temp[ 0 ] );
    if( isset( $temp[ 1 ] ) ){ 
        array_push( $songArray, $temp[ 1 ] ); 
    }

}
for( $i = count( $albumArray ) - 1; $i > 1; $i-- ){
   array_push( $albumArrayMirrored, $albumArray[ $i ] );
}
for( $i = count( $songArray ) - 1; $i > 1; $i-- ){
    array_push( $songArrayMirrored, $songArray[ $i ] );
 }
//var_dump( $dir );
//var_dump( $albumArray );
var_dump( $albumArrayMirrored );
var_dump( $songArrayMirrored )
?>


<div class="container__media-page">

    <!---
    <div class="container__media-page__video">
        <div class="container__media-page__video__image">
            <a href="wp-content/themes/double/media/video/sample.mp4" class="" media="" media-src="" rel="lightbox[Example Video 50% 70%]" title="Example Video"><img src="https://placeimg.com/320/150/any"></a>
            <div class="container__media-page__video__play">
                <span><i class="fas fa-play-circle"></i>Play Video</span>
            </div>
        </div>
        <div class="container__media-page__video__description">
            Incididunt adipisicing ad sint sit fugiat aute cupidatat sit minim sint.
        </div>
    </div>
    --->

    <?php for( $i = 0; $i < count( $songArrayMirrored ) -1; $i++ ){?>

        <div class="container__media-page__audio">
            <div class="container__media-page__audio__image">
                <a href="/wp-content/themes/double/media/audio/<?php echo urlencode( $songArrayMirrored[ $i ] ); ?>" class="" media="" media-src="" rel="lightbox[Example Audio 50% 70%]" title="Example Video" style="background-image: url('/wp-content/themes/double/media/album/<?php echo $albumArrayMirrored[ $i ] . '.png'; ?>');"></a>
                <div class="container__media-page__audio__play">
                    <span><i class="fas fa-play-circle"></i>Play Audio</span>
                </div>
            </div>
            <div class="container__media-page__audio__description">
                Incididunt adipisicing ad sint sit fugiat aute cupidatat sit minim sint.
            </div>
        </div>

    <?php } ?>

</div>