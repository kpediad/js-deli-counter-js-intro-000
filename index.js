

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

function currentLine(katzDeliLine) {
  var line = ""
  if(katzDeliLine.length === 0) {
    line = "The line is currently empty."
  } else {
    for(let i = 0; i < katzDeliLine.length; i++) {
      line += i + ". " + katzDeliLine[i]
    }    
  }
  return line
}
