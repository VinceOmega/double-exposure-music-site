<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
error_reporting(0);
?>

<?php if( isset( $_GET[ 'includes' ] ) && $_GET[ 'includes' ] ){  
   set_include_path( rtrim($_SERVER['DOCUMENT_ROOT'], '/') );
   //include 'wp-includes/shortcodes.php';
   include require_once( '/wp-load.php'  ); 
} ?>

<div class="container__contact-us">

<p>Non in duis cupidatat eiusmod et nisi in. Est tempor anim sunt ipsum aliqua in eu non aliqua culpa. Enim dolore aliqua Lorem enim officia deserunt est in officia. Aliqua sunt ad mollit eiusmod anim Lorem nisi quis non occaecat sint.</p>
<?php if( $_SERVER[ 'SERVER_ADDR' ] === '127.0.0.1' ){ 
     echo do_shortcode( '[calendar id="18"]' );
} else{
    echo do_shortcode( '[calendar id="15"]' );
} ?>

</div>