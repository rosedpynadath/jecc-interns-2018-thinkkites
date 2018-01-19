.PHONY: clean system pip log db install test all run

clean:
	@echo 'Removing byte files...'
	find . -type f -name '*.pyc' -delete

system:
	@echo 'Installing required system packages...'

pip:
	@echo 'Installing required python packages...'
	pip install -r requirements.txt

logs:
	@echo 'Setting up log files...'
	mkdir logs

db:
	@echo 'Setting up the database...'
	./manage.py migrate

install: system pip logs db

test:
	@echo 'Running tests...'
	coverage run --source='.' manage.py test && coverage report

all: clean install test

run:
	@echo 'Running DJANGO development server...'
	./manage.py runserver 0.0.0.0:8000

dev: clean install run

gunicorn:
	@echo 'Running gunicorn server...'
	gunicorn backend.wsgi -c gunicorn.config -e DJANGO_SETTINGS_MODULE=backend.settings.prod

prod: clean install gunicorn
