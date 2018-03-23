

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return katzDeliLine.length
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return katzDeliLine.shift()
  }
}