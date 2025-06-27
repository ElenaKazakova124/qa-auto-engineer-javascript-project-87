### Hexlet tests and linter status:
[![Actions Status](https://github.com/ElenaKazakova124/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ElenaKazakova124/qa-auto-engineer-javascript-project-87/actions)

gendiff file1.json file2.json
Example output:
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}

## Supported Formats

### Stylish (default)
```bash
gendiff file1.json file2.json
# или
gendiff file1.yaml file2.yaml --format stylish
### Plain
gendiff file1.json file2.json --format plain
### JSON
gendiff file1.json file2.json --format json



## Examples
```bash
# Compare JSON files
gendiff file1.json file2.json

# Compare YAML files
gendiff file1.yaml file2.yaml

# Mixed comparison
gendiff file1.json file2.yaml


## Usage

```javascript
import genDiff from '@hexlet/code';

// Default stylish format
const diff1 = genDiff('file1.json', 'file2.json');
console.log(diff1);

// Plain format
const diff2 = genDiff('file1.yaml', 'file2.yaml', 'plain');
console.log(diff2);

// Video
Asciinema - https://asciinema.org/a/p19crvzUkUxYVx9cfoWWmBnhL