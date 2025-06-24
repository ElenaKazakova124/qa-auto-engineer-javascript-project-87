import yaml from 'js-yaml'

const parse = content => yaml.load(content)

export default parse
