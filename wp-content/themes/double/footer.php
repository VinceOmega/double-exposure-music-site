		
			<footer class="footer" role="contentinfo">
			
				<div class="footer__music">
					<div class="footer__music__record">
						<img id="record-icon" src="<?php echo get_template_directory_uri(); ?>/img/vinyl-record.svg" class="footer__music__vinyl rotate">
					</div>
					<div class="footer__music__info">
	           			<h5 class="footer__music__header">MUSIC : <a href="#" id="music-player-controller" class="footer__music__header__indicator on">ON</a></h5>
						<p id="music-player-controller-title" class="footer__music__name-display">Loading...</p>
					</div>

				</div> 

				<div class="footer__tri-shape">

				</div>
				
			</footer> 
		
		</div> 
		
		<!-- all js scripts are loaded in library/bones.php -->
		<?php //wp_footer(); ?>
		<?php require_once "includes/modal-splash.php"; ?>

	</body>

</html> 
