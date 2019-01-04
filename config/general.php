<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */
$secure = isset($_SERVER['HTTPS']) && (strcasecmp($_SERVER['HTTPS'],'on')===0 || $_SERVER['HTTPS']==1)
			|| isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && strcasecmp($_SERVER['HTTP_X_FORWARDED_PROTO'],'https')===0;
$protocol = $secure ? 'https://' : 'http://';
$host = $_SERVER['HTTP_HOST'];
$root = $protocol . $host . '/';
$uploadsBasePath = '../html/uploads/';
return array(

	// Base site URL
	'siteUrl' => $root,

	// Default Week Start Day (0 = Sunday, 1 = Monday...)
	'defaultWeekStartDay' => 0,

	// Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
	'enableCsrfProtection' => true,


	'addTrailingSlashesToUrls' => true,
	'allowAutoUpdates' => false,
	'backupDbOnUpdate' => false,
	'cdnBaseUrl' => $root,
	'cpTrigger' => 'opry',
	'defaultImageQuality' => 85,
	'defaultSearchTermOptions' => [
		'subLeft' => true,
		'subRight' => true,
	],
	// 'env' => CRAFT_ENVIRONMENT, 
	'environmentVariables' => [
		'basePath' => $uploadsBasePath,
		'baseUrl' => $root . '/uploads/',
	],
	'generateTransformsBeforePageLoad' => true,
	'inlinPublicRoot' => $uploadsBasePath,
	'omitScriptNameInUrls' => true,
	'overridePhpSessionLocation' => true,
	'pageTrigger' => 'page/',
	'rememberedUserSessionDuration' => 'P100Y',
	'sendPoweredByHeader' => false,
	'useCompressedJs' => true,
	'usePathInfo' => false,

	// Cache busting
	'cssVersion' => 72,
	'jsVersion' => 13,

	// Default entry values
	'entryDefaults' => [
		'title' => '',
		'section' => ['handle' => null],
		'seoTitle' => '',
		'seoDescription' => '',
		'seoNoIndex' => false
	],

	// Dev Mode (see https://craftcms.com/support/dev-mode)
	'devMode' => true,

);
