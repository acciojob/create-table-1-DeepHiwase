function insert_Row() {
    //Write your code here
	  const tableContainer = document.getElementById("sampleTable");
		const rowToInsert = document.createElement("tr");
		rowToInsert.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
		tableContainer.prepend(rowToInsert);
}
