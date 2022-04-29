function oneThroughTwenty(){
    let array = []
   for(let i = 1; i <= 20; i++){
    array.push(i)
   }
   console.log(array)
    return array
}

oneThroughTwenty()

function evensToTwenty() {
    
  let array = []
  for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
      array.push(i)
    }
  }
  
  console.log(array)
    return array
}

evensToTwenty()

function oddsToTwenty() {
    
  let array = []
  for(let i = 1; i <= 20; i++){
    if(i % 2 == 1){
      array.push(i)
    }
  }
  
  console.log(array)
    return array
   
}

oddsToTwenty()

function multiplesOfFive() {
    
  let array = []
  for(let i = 1; i <= 100; i++){
    if(i % 5 == 0){
      array.push(i)
    }
  }
  
  console.log(array)
  
  return array

}

multiplesOfFive()

function squareNumbers() {
    
  let array = []
  
  for(let i = 1; i <= 100; i++){
    for(let o = 1; o < 100; o++){
      
      if(o * o == i){
        array.push(o * o)
        break
      }
    }
  }
  
  console.log(array)
  
  return array
}

squareNumbers()

function countingBackwards() {
    
  let array = []
  for(let i = 20; i >= 1; i--){
   array.push(i)
  }
  console.log(array)
   return array
}

countingBackwards()

function evenNumbersBackwards() {
  let array = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 == 0){
      array.push(i)
    }
  }
  
  console.log(array)
    return array
}

evenNumbersBackwards()

function oddNumbersBackwards() {
  let array = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 == 1){
      array.push(i)
    }
  }
  
  console.log(array)
    return array
}

oddNumbersBackwards()

function multiplesOfFiveBackwards() {
 
  let array = []
  for(let i = 100; i >= 1; i--){
    if(i % 5 == 0){
      array.push(i)
    }
  }
  
  console.log(array)
  
  return array
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
    
  let array = []
  
  for(let i = 100; i >= 1; i--){
    for(let o = 100; o > 0; o--){
      
      if(o * o == i){
        array.push(o * o)
        break
      }
    }
  }
  
  console.log(array)
  
  return array
}

squareNumbersBackwards()
