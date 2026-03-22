
serve:
	cd ./swapi/ && ng serve swapi

build:
	cd ./swapi/ && ng build swapi

topages:
	@#cd ./swapi/ && ng build --output-path docs
	cd ./swapi/ && ng deploy

