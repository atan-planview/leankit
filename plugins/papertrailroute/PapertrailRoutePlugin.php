<?php
/**
 * Papertrail Route plugin for Craft CMS
 *
 * Provides a Craft log route to send logs to Papertrail (papertrailapp.com)
 *
 * @author    Kind
 * @copyright Copyright (c) 2016 Kind
 * @link      http://madebykind.com
 * @package   craft.plugins.papertrailroute
 * @since     0.1.0
 */

namespace Craft;

class PapertrailRoutePlugin extends BasePlugin
{
	/**
	 * @return mixed
	 */
	public function init()
	{
		if (!craft()->plugins->getPlugin('papertrail')) {
			return PapertrailRoutePlugin::Log('PapertrailRoute requires the Papertrail plugin to be installed & enabled', LogLevel::Error);
		}

		// Help the Yii autoloader to find the file
		\Yii::$classMap['Craft\PapertrailRoute'] = realpath(__DIR__) . '/logroutes/PapertrailRoute.php';

		// Add StdErrRoute logger class
		craft()->log->addRoute('Craft\PapertrailRoute');
	}

	/**
	 * @return mixed
	 */
	public function getName()
	{
		 return Craft::t('Papertrail Route');
	}

	/**
	 * @return mixed
	 */
	public function getDescription()
	{
		return Craft::t("Provides a Craft log route to send logs to Papertrail (papertrailapp.com) via Top Shelf Craft's Papertrail plugin");
	}

	/**
	 * @return string
	 */
	public function getDocumentationUrl()
	{
		return 'https://github.com/madebykind/craft.PapertrailRoute/blob/master/README.md';
	}

	/**
	 * @return string
	 */
	public function getReleaseFeedUrl()
	{
		return 'https://raw.githubusercontent.com/madebykind/craft.PapertrailRoute/master/releases.json';
	}

	/**
	 * @return string
	 */
	public function getVersion()
	{
		return '0.1.0';
	}

	/**
	 * @return string
	 */
	public function getSchemaVersion()
	{
		return '0.1.0';
	}

	/**
	 * @return string
	 */
	public function getDeveloper()
	{
		return 'Kind';
	}

	/**
	 * @return string
	 */
	public function getDeveloperUrl()
	{
		return 'http://madebykind.com';
	}

	/**
	 * @return bool
	 */
	public function hasCpSection()
	{
		return false;
	}
}
