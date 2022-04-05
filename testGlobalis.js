
const array1 = [[0, 3], [6, 10]];
  const array2 = [[0, 5], [3, 10]];
  const array3 = [[0, 5], [2, 4]];
  const array4 = [[7, 8], [3, 6], [2, 4]];
  const array5 = [[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]];

  const foo = (array) => {

    const sorted = array.sort(
      (a, b) =>
        a[0] - b[0]
    );
    
    let i ;
    for ( i = 0; i <= sorted.length-2 ;) {

      
      
      if  (sorted[i][1] >= sorted[i+1][0] ) {
        const newItem = sorted[i][1] >= sorted[i+1][1] ? [ sorted[i][0], sorted[i][1]] : [ sorted[i][0], sorted[i+1][1]] ;

        sorted.splice(i, 2, newItem);
      } else {
        i++
        
      }
    }

    return sorted ;

  };
  console.log('test1', foo(array1));
  console.log('test2', foo(array2));
  console.log('test3', foo(array3));
  console.log('test4', foo(array4));
  console.log('test5', foo(array5));
