const sheds = { A: 510, B: 308, C: 486, D: 572 };

function totalProduction() {
	printProductionToConsole();

	populateUITable();
}
function totalResult() {
	let sum = 0;
	Object.keys(sheds).forEach((item) => (sum += sheds[item]));
	return sum;
}

function populateUITable() {
	const tableContainer = document.getElementById("table-container");
	const prodTotalContainer = document.getElementById("prod-total");
	let tableString = `	<table id="">
    <tr>
        <th>Shed Letter</th>

        <th>Numbers of Litres</th>

        <th>Duration</th>
    </tr>`;
	Object.keys(sheds).forEach(
		(item) =>
			(tableString += `<tr>
        <td>${item}</td>
        <td>${sheds[item]}</td>
        <td>A day</td>
    </tr>`)
	);
	tableString += "</table>";
	tableContainer.innerHTML = tableString;
	prodTotalContainer.innerText = totalResult();
}

function printProductionToConsole() {
	let prefix = "Your production in Shed ";
	let postFix = " litres per day";

	Object.keys(sheds).forEach((key) =>
		console.log(prefix + sheds[key] + postFix)
	);

	console.log("The total production is " + totalResult() + postFix);
}
// function submitInputs() {
// 	let BuyingPrice = document.getElementById("buying").value;
// 	let numberOfDays = document.getElementById("days").value;
// 	// console.log([BuyingPrice, numberOfDays]);
// 	return [BuyingPrice, numberOfDays];
// }

// let myValues = submitInputs();

// console.log(myValues);
