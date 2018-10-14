<?php if( empty( $_COOKIE[ 'view-splash' ] ) ){ ?>
    <div id="splash-page" class="splash-page">
        <div class="splash-page__top-tri-shape splash-page__top-tri-shape--closed">

        </div>

        <h2 id="splash-page-header" class="splash-page__title">DOUBLE EXPOSURE IS BACK!</h2>

        <div class="splash-page__bottom-tri-shape splash-page__bottom-tri-shape--closed">

        </div>
    </div>

<?php setcookie( 'view-splash', true, time()+ ( 3600 * 24 ) ); } ?>