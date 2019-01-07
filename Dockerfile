FROM blackpepper/craftcms

RUN rm /var/www/craft/templates/*.html

ADD plugins /var/www/craft/plugins
ADD storage /var/www/craft/storage
ADD html /var/www/html
ADD config /var/www/craft/config
ADD templates /var/www/craft/templates

RUN chown -R www-data:www-data \
    /var/www/craft/storage/ \
    /var/www/craft/config \
    /var/www/html

ENV CRAFT_DATABASE_HOST=166.78.201.246 \
	CRAFT_DATABASE_PORT=3306 \
	CRAFT_DATABASE_USER=leankit_stage \
	CRAFT_DATABASE_PASSWORD=6Ezwr6!3 \
	CRAFT_DATABASE_NAME=stage_craft \
	CRAFT_ALLOW_AUTO_UPDATES=true \
	CRAFT_COOLDOWN_DURATION=PT5M \
	CRAFT_DEV_MODE=false \
	CRAFT_MAX_UPLOAD_FILE_SIZE=16777216 \
	CRAFT_OMIT_SCRIPT_NAME_IN_URLS=auto \
	CRAFT_USE_COMPRESSED_JS=true \
	CRAFT_USER_SESSION_DURATION=PT1H
EXPOSE 8080	
