function scuberGreetingForFeet(Distance){
if(Distance<= 400){
  return 'This one is on me!'
}else if(Distance > 400 && Distance < 2000){
  return 'That will be twenty bucks.'
}else if(Distance >= 2000 && Distance <= 2500){
  return 'I will gladly take your thirty bucks.'
}else if(Distance > 2500){
  return 'No can do.'
}
}
Distance(2501)


function ternaryCheckCity(city){
  if(city === 'NYC'){
    return "Ok, sounds good."
  }else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  if(tip === 'generous'){
    return "Thank you so much."
  }else if(tip === 'not as generous'){
    return 'Thank you.'
  }else{
    return 'Bye.'
  }
}