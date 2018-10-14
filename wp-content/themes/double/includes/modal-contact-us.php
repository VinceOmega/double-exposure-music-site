<?php header( 'Content-type: text/html; charset=utf-8' );?>

<div class="container__contact-us">

<p>Non in duis cupidatat eiusmod et nisi in. Est tempor anim sunt ipsum aliqua in eu non aliqua culpa. Enim dolore aliqua Lorem enim officia deserunt est in officia. Aliqua sunt ad mollit eiusmod anim Lorem nisi quis non occaecat sint.</p>
<?php if( $_SERVER[ 'SERVER_ADDR' ] === '127.0.0.1' ){ 
     echo do_shortcode( '[calendar id="18"]' );
} else{
    echo do_shortcode( '[calendar id="15"]' );
} ?>

</div>