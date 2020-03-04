
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix === undefined)
		return [];

	let otv = [], flag = 0;

	matrix.forEach(t => {
		if (flag == 1){
			otv = otv.concat(t.reverse());
			flag = 0;
		} else {
			otv = otv.concat(t);
			flag = 1;
		}

	});

	return otv;
}
