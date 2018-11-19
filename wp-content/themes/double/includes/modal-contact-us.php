<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
error_reporting(0);
?>

<?php if( isset( $_GET[ 'includes' ] ) && $_GET[ 'includes' ] ){  
   //set_include_path( '/home/redrobo2/public_html/double/' );
   //include 'wp-includes/shortcodes.php';
   include require_once(rtrim($_SERVER['DOCUMENT_ROOT'], '/') . '/wp-load.php'); 
} ?>

<div class="container__contact-us">

<p>
November 3, 2018</br>
Lehman College Concert Hall (The Legends of Disco)</br>
250 Bedford Park Boulevard West Bronx NY 10468
</p>

<p>
December 31St 2018</br>
Emerald & Aquamarine Ballroom (NEW YEARS EVE BASH)</br>
3534 Broadway at 145th Street Harlem, NY 10031
</p>

<?php if( $_SERVER[ 'SERVER_ADDR' ] === '127.0.0.1' ){ 
     echo do_shortcode( '[calendar id="18"]' );
} else{
    echo do_shortcode( '[calendar id="15"]' );
} ?>

</div>