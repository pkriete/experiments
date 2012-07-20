var trig = require('trig');

function assert(actual, expected, name)
{
	if (isNaN(actual) && expected == 'NaN')
	{
		console.log('.');
		return;
	}

	if (Math.abs(actual - expected) < 0.000001)
	{
		console.log('.');
		return;
	}

	console.log('F: '+name, actual, expected);
}


var fns = 'sinh,cosh,tanh,coth,sech,csch'.split(',');

fns.forEach(function(name) {

	var fn = trig[name],
		inv = trig['ar' + name];

	for (var i = -2; i <= 2; i++)
	{
		var result = inv(fn(i)),
			expected;

		switch (name)
		{
			case 'cosh':
			case 'sech':
				expected = Math.abs(i);
				break;
			case 'coth':
				expected = (i != 0) ? i : 'NaN';
				break;
			default:
				expected = i;
		}

		assert(result, expected, name);
	}
});