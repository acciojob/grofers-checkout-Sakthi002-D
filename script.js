const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const price = document.querySeletorAll(".price");

	let total = 0;
	price,forEach((price) {
		total += parseFloat(price.tectContent);
	});

	const newCell = document.createElement("tr");
	const newRow = document.createElement("td");

	newCell.textContent = total;
	newCell.colSpan = 2;

	newRow.appendChild(newCell);
	document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

