const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue){
  return function(value){
    return multiplyValue*value
  }
}

const fareDoubler = function(createFareMultiplier){
  return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier){
  return createFareMultiplier * 3

}

const fetchSpecifiedDrivers = function(arrayOfDrivers, driver){
  return driver(arrayOfDrivers)
}
