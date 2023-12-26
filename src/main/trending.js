function minifyNum(num){
	let formatter = Intl.NumberFormat('en',{notation: 'compact'});	
	return formatter.format(num);
}

function loadTrends(){
	let trends = [
		{
			name: 'ASD',
			amount: minifyNum(1232),
		},
		{
			name: 'ASD',
			amount: minifyNum(12323421232342),
		},
		{
			name: 'ASD',
			amount: minifyNum(123234234),
		},
		{
			name: 'ASD',
			amount: minifyNum(123234234234),
		},
		{
			name: 'ASD',
			amount: minifyNum(1232342342345),
		},
	];

	trends = trends.slice(0,5);

	console.log(trends.length);

	trends.forEach((t, index) => {
		let trend = document.getElementById('trendsCont').children[index];
		trend.children[0].innerText = '#' + t.name;
		trend.children[1].innerText = t.amount;
		trend.href = '/search/#' + t.name;
	});
}

function loadPeople(){

	let trends = [
		{
			name: 'ASD',
			amount: minifyNum(123),
		},
		{
			name: 'ASD',
			amount: minifyNum(123),
		},
		{
			name: 'ASD',
			amount: minifyNum(123),
		},
		{
			name: 'ASD',
			amount: minifyNum(123),
		},
		{
			name: 'ASD',
			amount: minifyNum(123),
		},
	];

	trends = trends.slice(0,5);

	console.log(trends.length);

	trends.forEach((t, index) => {
		let trend = document.getElementById('ppCont').children[index];
		trend.children[0].innerText = '' + t.name;
		trend.children[1].innerText = t.amount;
		trend.href = '/users/@' + t.name;
	});
}

export {loadPeople, loadTrends};