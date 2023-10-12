var itemData = {
    A : [80,10,5],
    B : [10,30,10],
    C : [6,30],
    D : [4,30,5],
    E : [12,15]
}; 




//Write a function to drop a item every second
function dropItem(){

    for(const data in itemData){

        
        itemData[data][0] -= 1;


        //if value == 0 then remove it from array
        if(itemData[data][0] === 0){
            itemData[data].shift();
          
        }

        var gridContainer = document.querySelector('.grid');

        gridContainer.innerHTML = "";
        showTable();

    
        // console.log(itemData[data][0]);
    }
    
}

function showTable(){
    

    var gridContainer = document.querySelector('.grid');

var gridContainer = document.querySelector('.grid');

var transposedData = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for (var key in itemData) {
        row.push(itemData[key][i] || '');
    }
    transposedData.push(row);
}

// Create header cells
for (var key in itemData) {
    var headerCell = document.createElement('div');
    headerCell.className = 'header cell';
    headerCell.textContent = key;
    gridContainer.appendChild(headerCell);
}

// Create data cells
transposedData.forEach(function (row,rowIndex) {
    row.forEach(function (value,colIndex) {
        var dataCell = document.createElement('div');
        dataCell.className = 'cell';
        dataCell.textContent = value;
        dataCell.id = colIndex + "-" + rowIndex;
        gridContainer.appendChild(dataCell);
    });
});

}


setInterval(dropItem, 1000);


//Queuebtn

document.getElementById("queueBtn").onclick = ()=>{

    const itemEntered = document.getElementById("qty").value;
    var Key = checkWhichisLowest();
   itemData[Key].push(itemEntered);

};


function checkWhichisLowest(){
    
    var sums = [];
    for(const key in itemData){

        var sum = itemData[key].reduce((acc, currentValue) => acc + currentValue, 0);;
        sums[key] = sum;
    }

    let minimumSum = Infinity; 
    let minimumKey = null;    

    for (const key in sums) {
        if (sums[key] < minimumSum) {
            minimumSum = sums[key];
            minimumKey = key;
        }
    }

    return minimumKey;
    //returns the index of the lowest 

}