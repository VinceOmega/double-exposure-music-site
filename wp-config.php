<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_dem');

/** MySQL database username */
define('DB_USER', 'wp_dem_user');

/** MySQL database password */
define('DB_PASSWORD', 'dJS3aQKdTB3VybrS73by3NVdECo9hWu7pbc6MBIY1FAnE2TfUMVFhZ6R');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}*Vqn8hhEACG2w<>Yf)FT@~Z#P|6.)[KJ_`KCG$vM0d^>_VASaY$b#/jtC6R)L_^');
define('SECURE_AUTH_KEY',  'sptA@ZQZH+_a++,9]etWAF:tUJ@d7bb3.YcQ+d2@?kA);cb|FP@%|37A|:bIt1wU');
define('LOGGED_IN_KEY',    'k&vb2F8{S*%m}B*<V|XG;1UL3.LYHGZJBe6a`Pu3~:oq]k{-c&i%Zl*1~irrD}-Z');
define('NONCE_KEY',        'FqY8(%=dM#kqzxtX3?9PHa~I/oK1]w``ADL{l0-1h-8z}gN%st1:|@/bAkME7K^Z');
define('AUTH_SALT',        'G 7M!hwhaBSN>)V$-7P[e9fn{^,|2e1MzE:t.}X,+;>9!50eyo(0liN>1lXK<y6-');
define('SECURE_AUTH_SALT', '=+:O,%/rG*dwa2%M**>|=+Kn4Q&HUs:*|_LNP%eqB$C7J)8Lljsd.XWNsRxU#0QJ');
define('LOGGED_IN_SALT',   'M=,  y@Ri)d>8$huk}H?ueg4?up&-U</GAh>oK~fhg.kYj~-N*X=wl-PCWp3a4h>');
define('NONCE_SALT',       'QE*.X}CV]M.i~nMW,ZsL#dDuL[!d]aF0B_?@</@zs4 gB};|@z10aGPde0eEve@1');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'dem_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
