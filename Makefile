
serve:
	cd ./swapi/ && ng serve swapi

build:
	cd ./swapi/ && ng build swapi

topages:
	echo "commented out for now (See Makefile)."
	@#cd ./swapi/ && ng build --output-path docs
	@#cd ./swapi/ && ng deploy --base-href=https://kraasch.github.io/demo_swapi

