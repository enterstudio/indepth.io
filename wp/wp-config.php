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
define('DB_NAME', 'geekspea_indepth');

/** MySQL database username */
define('DB_USER', 'geekspea_indepth');

/** MySQL database password */
define('DB_PASSWORD', 'Jqhrn3uKQfPUE4mz');

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
define('AUTH_KEY',         '1<s#Aa+XEpK~$!uvk*k{G<L4JHgfaKJGn|}hZ{T<ny/WZk$O<f{o7E]@e@!`[<X~');
define('SECURE_AUTH_KEY',  'MN$3hCcTn(p^{y[ XpR]w,|)vV8MT~x.x)`}~d~x*!}7Eb`~I=AkpeBr(@WIj8Y,');
define('LOGGED_IN_KEY',    '}l=28HoX]#`M<F9d~M168T9,_iKBodRnMx.Y)]y6A!JgANAOG^H(dEQI^(;_7Vke');
define('NONCE_KEY',        'R4/&;YL[(dMp3NJh0-FiJB#DWexW?!O3Q5bGx{5c%g{%t38iMRm0xuau10^~_I,^');
define('AUTH_SALT',        '}X[Ydr [I+EifARj{GPBQWhSVa<OlQTY7C1Ov#uX9,4HLk)<UXEZ*<S1j9vYepM$');
define('SECURE_AUTH_SALT', 'keW1yaOZUGLxv_Kf?O8Ys~Tv5OP|CBF.XCf[QT{,T1wm/_Lat2, Fi8q[qwMvhly');
define('LOGGED_IN_SALT',   'N2NtrZ~puP/T>tq4WOH[y8&mzHhC2DSQ?Wyl8-zj<1I9-:pz1AKuJQMj2]BFD;d_');
define('NONCE_SALT',       'j$1-Ed7MnCv!ArCV*@vJOt/tG.>)::(Z5Zx9[=Wy)yJ`>2[&M/d$3aF3_g=I=+3m');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
