function scuberGreetingForFeet(someValue){
  // Write your code here!
  let feet = someValue;
  if(feet <= 400){
    return "This one is on me!";
  }
  else if(feet < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else
    return 'No can do.';
}
scuberGreetingForFeet(100);


function ternaryCheckCity(capCity){
  return capCity === 'NYC'? "Ok, sounds good." : "No go."
  // Write your code here
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');


function switchOnCharmFromTip(appValue){
  // Write your code here!
  switch (appValue) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
      break;
  }
}
switchOnCharmFromTip('generous');
//switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');