var currentAge = parseFloat(prompt('What is your current age?'));
var retireAge = parseFloat(prompt('At what age would you like to retire?'));
var yearsUntilRetire = retireAge - retireAge;
var currentYear = Date.UTC(year); 
var retireDate = currentYear + yearsUntilRetire;

document.write('What is your current age? ' + currentAge);
document.write('At what age would you like to retire? ' + retireAge);
document.write('You have '+yearsUntilRetire+ 'years left until you can retire.');
document.write('Its '+currentYear+ ' so you can retire in '+retireDate+'.');
