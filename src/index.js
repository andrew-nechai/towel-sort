function towelSort(x){
	let otv = [];
	x.forEach(t => {
		t.forEach(k => {
			otv.push(k);
		})
	});
	return otv;
}