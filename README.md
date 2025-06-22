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
- JSON (`.json`)
- YAML (`.yaml`, `.yml`)

## Examples
```bash
# Compare JSON files
gendiff file1.json file2.json

# Compare YAML files
gendiff file1.yaml file2.yaml

# Mixed comparison
gendiff file1.json file2.yaml
