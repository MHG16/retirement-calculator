var currentAge = parseFloat(prompt('What is your current age?'));
var retireAge = parseFloat(prompt('At what age would you like to retire?'));
var yearsUntilRetire = retireAge - currentAge; 


var currentTime = new Date();
var year = currentTime.getFullYear();


var retireDate = year + yearsUntilRetire;

document.write('What is your current age? ' + currentAge);
document.write('<br>');
document.write('At what age would you like to retire? ' + retireAge);
document.write('<br>');
document.write('You have '+yearsUntilRetire+ 'years left until you can retire.');
document.write('<br>');
document.write('Its '+year+ ' so you can retire in '+retireDate+'.');

