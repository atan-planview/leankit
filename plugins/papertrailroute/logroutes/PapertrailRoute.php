<?php namespace Craft;

/**
 * Class Papertrail
 * @package Craft
 */
class PapertrailRoute extends \CLogRoute
{

	private static $_severityCodes = array(
		'emergency' => 0,
		'alert' => 1,
		'critical' => 2,
		'error' => 3, // LogLevel::Error
		'warning' => 4, // LogLevel::Warning
		'notice' => 5,
		'informational' => 6,
		'info' => 6, // LogLevel::Info
		'debug' => 7,
		'trace' => 7, // LogLevel::Trace
		'profile' => 7, // LogLevel::Profile
	);


	/**
	 * @param array $logs
	 */
	public function processLogs($logs)
	{
		$maxSeverity = craft()->config->get('maxSeverity', 'papertrailRoute');

		foreach ($logs as $log) {

			$msg 		= $log[0];
			$level   	= isset($log[1]) ? $log[1] : '';
			$component 	= isset($log[2]) ? $log[2] : '';
			$system    	= isset($log[5]) ? $log[5] : '';

			$severity = isset(self::$_severityCodes[$level]) ? self::$_severityCodes[$level] : self::$_severityCodes['informational'];

			if ($severity <= $maxSeverity) {
				PapertrailHelper::log($msg, $level, "{$system}:{$component}" , CRAFT_ENVIRONMENT);
			}
		}
	}
}
