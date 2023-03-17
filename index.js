function scuberGreetingForFeet(){
  // Write your code here!
  if (dist <= 400 ){
    return "This one is on me!"
  }
  else if (dist > 2000 && dist <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (dist > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(){
  // Write your code here!
  return city === 'NYC'? 'Ok, sounds good.':"No go."
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;

    case 'not as generous':
      return 'Thank you.';
      break;

    default :
      return 'Bye.'



  }
}