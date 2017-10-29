var x_power;
var y_power;

function value(row, index) {
	if (index < 0 || index > row) {
		return 0;
	}
	if (index === 1 || index === row) {
		return 1;
	}
	var result = value(row - 1, index - 1) + value(row - 1, index);
	return result;
}


function pasc(n) {
	var r = [];
	for (var i = 1; i <= n; i++) {
		x_power = n - i;
		y_power = i - 1;
		r.push(value(n, i) + "x^" + x_power + "*y^" + y_power);
	}
	return r;
}


function dissplay(n) {
	document.write(pasc(n));
	console.log(pasc(n));
}

function solve(s) {
	dissplay(s + 1)
}
