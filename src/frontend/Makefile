.PHONY: clean system npm install all

clean:

system:
	@echo 'Installing system packages...'

npm:
	@echo 'Installing npm packages...'
	npm install

install: system npm

build:
	@echo 'Transpiling js files...'
	npm build

all: clean install build

run:
	@echo 'Running webpack development server...'
	npm start

dev: clean install run

prod: clean install build
