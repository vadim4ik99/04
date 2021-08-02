let name = ["Black Panther","Captain America","Captain Marvel","Hulk","Iron Man","Spider - man","Thanos","Thor","Yon-Rogg"];
let strenght = [66,79,97,80,88,78,99,95,73];
let age = [53,137,26,49,48,16,1000,1000,52];

function tableCreate() {
  let body = document.getElementById('notification');
  let tbl = document.createElement('table');
  tbl.setAttribute('border', '1');
  let tbdy = document.createElement('tbody');
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
		if(i == 0) {
			let th = document.createElement('th');
			tr.appendChild(th);
		} else {
        let td = document.createElement('td');
		tr.appendChild(td);
		}  
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}

function setTableHead(){
	let arr = ["Name","Strenght","Age"];
	let th = document.getElementsByTagName("th");
	for(let i=0; i < th.length; i++){
		th[i].innerHTML = `${arr[i]}`;
	}
}
function setTd(arr,index) {
	let td = document.getElementsByTagName("td");
	let j =0;
	for(let i = index; i < td.length; i = i+3){
		td[i].innerHTML = arr[j];
		j++		
	}
}
tableCreate();
setTableHead();
setTd(name,0);
setTd(strenght,1);
setTd(age,2);

const table = addEventListener('click',(e) => {
	const elem = e.target;
	if (elem.nodeName != 'TH') return;
	const index = elem.cellIndex;
	sortTable(index);
})


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.querySelector("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
		  placeHolder(n,dir);
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
		  placeHolder(n,dir);
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function placeHolder(n,order){
	const div = document.getElementById('placeholder');
	let name = '';
	switch(n){
		case 0:
		 name = "name";
		break;
		case 1:
		 name = "Strenght";
		break;
		case 2:
		 name = "Age";
		break;
	}
	
	div.innerHTML = `Sorting by ${name}, order ${order}`;
}