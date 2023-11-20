let matrix = [[11,22],[33,44,55,66],[77,88,99,20,1010]]


function printMatrix(matrix){
  console.log(`Matrix`)
  for (let i = 0; i < matrix.length; i++) { 
  let s=""; 
      for (let j = 0; j < matrix[i].length; j++) { 
          s+=(matrix[i][j]+" "); 
      } 
      console.log(s); 
  } 
}
printMatrix(matrix)

function searchMatrix(matrix,x){
    for (let i = 0; i < matrix.length; i++) { 
        for (let j = 0; j < matrix[i].length; j++) { 
            if(matrix[i][j] === x){
              console.log(`${x} is present in the matrix at location ${i}*${j}.`)
              return true
            }
        } 
    }
  console.log(`${x} is not present in the matrix.`)
  return false
}
searchMatrix(matrix,101011)

function printDiagonal(matrix){
  console.log(`Diagonal`)
  for (let i = 0; i < matrix.length; i++) { 
    let s = ``
    for (let j = 0; j < matrix[i].length; j++) {
      if(i === j){
        s += matrix[i][j]
      }
      else{
        s += `  `
      }
    }
    console.log(s)
  }
}
printDiagonal(matrix)

//function sortMatrix(matrix){}

//function rotateMatrix(matrix){}

//function uniqueElements(matrix){}

