# Papertrail Route plugin for Craft CMS

Provides a Craft log route to send logs to Papertrail (papertrailapp.com). 

**NB This plugin requires [Top Shelf Craft's Papertrail plugin](https://github.com/TopShelfCraft/Papertrail) to be installed for this plugin to work**

Nothing will break if it's not there, you'll just get a passive aggressive log message.

## What & why

This plugin extends Top Shelf Craft's excelent Papertrail plugin by registering a log route with Craft/Yii, enabling you to send _all_ log data to Papertrail without any additional configuration.

This is useful on load-balanced / PaaS setups where you need to aggregate multiple sources of log data, and don't want to have to much modify existing log calls.

**A note on log volumes:** Craft can generate some _seriously_ verbose logs, particularly in `devMode`. You'll probably wnat to make use of the multi-environment config + the [`maxSeverity`](#config) setting and/or [Papertrail's log filtering feature](http://help.papertrailapp.com/kb/how-it-works/log-filtering/) to make things more manageable.

## Requirements

* PHP 5.4+
* Craft 2.5.x
* [Papertrail plugin](https://github.com/TopShelfCraft/Papertrail)] installed
* A Free [Papertrail](https://papertrailapp.com) account

## Installation

To install Papertrail Route, follow these steps:

1. Download & unzip the file and place the `papertrailroute` directory into your `craft/plugins` directory
2.  -OR- do a `git clone https://github.com/madebykind/craft.PapertrailRoute.git` directly into your `craft/plugins` folder.  You can then update it with `git pull`
3.  -OR- install with Composer via `composer require https://github.com/madebykind/craft.PapertrailRoute`
4. Install plugin in the Craft Control Panel under Settings > Plugins
5. The plugin folder should be named `papertrailroute` for Craft to see it.  GitHub recently started appending `-master` (the branch name) to the name of the folder for zip file downloads.

## Config

You may optionally set a `maxSeverity` config key in `craft/config/papertrailroute.php` to restrict the data logged to Papertrail by severity level. Severity level can be easily mapped to Craft's `LogLevel`s - see the default config file for a map. Depending on your requirements, [Papertrail's log filtering feature](http://help.papertrailapp.com/kb/how-it-works/log-filtering/) may be a better way to control the log entries retained in Papertrail.

## Using Papertrail Route

Just install and configure TSC's Papertrail plugin, then install this plugin. Log data should start appearing in Papertrail immediately.

## Changelog

### 0.1.0 -- 2016.07.11

* Initial release

Brought to you by [Kind](http://madebykind.com)
