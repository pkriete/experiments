module.exports = trig = {

	_plus: function(x) { return Math.exp(x) + Math.exp(-x); },
	_minus: function(x) { return Math.exp(x) - Math.exp(-x); },

	sinh: function(x) { return trig._minus(x) / 2; },
	cosh: function(x) { return trig._plus(x) / 2; },
	tanh: function(x) { return trig.sinh(x) / trig.cosh(x); },

	coth: function(x) { return trig.cosh(x) / trig.sinh(x); },
	sech: function(x) { return 2 / trig._plus(x); },
	csch: function(x) { return 2 / trig._minus(x); },

	arsinh: function(x) { return Math.log(x + Math.sqrt(x*x + 1)); },
	arcosh: function(x) { return Math.log(x + Math.sqrt(x*x - 1)); },
	artanh: function(x) { return Math.log((1 + x) / (1 - x)) / 2; },

	arcoth: function(x) { return Math.log((x + 1) / (x - 1)) / 2; },
	arsech: function(x) { return trig.arcosh(1 / x); },
	arcsch: function(x) { return Math.log(1 / x + Math.sqrt(1 + 1 / (x*x) )); }

};