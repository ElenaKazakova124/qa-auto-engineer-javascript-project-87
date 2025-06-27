lint:
	npx eslint .  

test:
	npm test

coverage:
	npm test -- --coverage

gendiff_json:
	node /Users/Elena/Documents/QA/qa-auto-engineer-javascript-project-87/bin/gendiff.js --format json  __fixtures__/file1.json __fixtures__/file2.json

gendiff_stylish:
	node /Users/Elena/Documents/QA/qa-auto-engineer-javascript-project-87/bin/gendiff.js --format stylish  __fixtures__/file1.json __fixtures__/file2.json

gendiff_yaml:
	node /Users/Elena/Documents/QA/qa-auto-engineer-javascript-project-87/bin/gendiff.js __fixtures__/file1.yaml __fixtures__/file2.yaml

gendiff_plain:
	node /Users/Elena/Documents/QA/qa-auto-engineer-javascript-project-87/bin/gendiff.js --format plain __fixtures__/file1.yaml __fixtures__/file2.yaml	
