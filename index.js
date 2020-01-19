const getOptions = require('loader-utils').getOptions;
const validateOptions = require('schema-utils');

// 验证规则
const schema = {
	type: 'object',
	properties: {
		rate: {
			type: 'number',
		}
	}
}

const defaultOptions = {
	rate: 100,
}

module.exports = function (source) {
	const options = getOptions(this);
	if (!options.rate) options.rate = defaultOptions.rate;
	
	validateOptions(schema, options, 'Verify options')

	source = source.replace(/\d+px/gi, (p1) => {
		return `${parseInt(p1) / options.rate}rem`;
	})
	return source;
}