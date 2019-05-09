var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var turtles = [ "Mr T" ]
function addElementToBeginningOfArray(myArray,name){
	var arrayNew = [...myArray, name]
	return arrayNew;
}
addElementToBeginningOfArray(turtles,"Twinkie")

var cats = [ "Holly","Kisa" ]
function destructivelyAddElementToBeginningOfArray(myArray,name){
	myArray.unshift(name);
	return myArray;
}
destructivelyAddElementToBeginningOfArray(cats,"Zoey")

var turtles = [ "Mr T" ]
function addElementToEndOfArray(name, myArray){
	var arrayNew = [name, ...myArray]
	return arrayNew;
}
addElementToEndOfArray("Twinkie",turtles)

var cats = [ "Holly","Kisa" ]
function destructivelyAddElementToEndOfArray(myArray,name){
	myArray.push(name);
	return myArray;
}
destructivelyAddElementToEndOfArray(cats,"Zoey")

var candy = ["Kit-Kat", "Reeses Cup", "M&M"]
  function accessElementInArray (arrayName, arrayIndex){
  return arrayName[arrayIndex]
  }
accessElementInArray(candy,1)

var colors = ["blue", "red", "green"]
function destructivelyRemoveElementFromBeginningOfArray (arrayLess){
  arrayLess.shift()
  return colors
}
destructivelyRemoveElementFromBeginningOfArray(colors)

var colors = ["blue", "red", "green"]
function removeElementFromBeginningOfArray (oneRemoved){
  var tempArray = colors.slice(1);
  return tempArray;
}
removeElementFromBeginningOfArray(colors)

var colors = ["blue", "red", "green"]
function destructivelyRemoveElementFromEndOfArray (oneRemovedPerma){
  colors.pop()
  return colors
}
destructivelyRemoveElementFromEndOfArray(colors)

var colors = ["blue", "red", "green"]
function removeElementFromEndOfArray(oneFromBack){
  var tempArrayFromBack = colors.slice(0, colors.length -1);
  return tempArrayFromBack;
}
removeElementFromEndOfArray(colors)
