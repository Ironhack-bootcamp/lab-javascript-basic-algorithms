// Iteration 1: Names and Input
let driversName = 'Javi';
console.log(`The driver's name is ${driversName}`);
let navigatorsName = 'Chrome';
console.log(`The navigator's name is ${navigatorsName}`);

// Iteration 2: Conditionals
if (driversName.length > navigatorsName.length) {

    console.log(
    `The driver has the longest name, it has ${driversName.length} characters.`
    );

    } else if (driversName.length < navigatorsName.length) {

    console.log(
    `It seems that the navigator has the longest name, it has ${navigatorsName.length} characters.`
    );

    } else {
        
    console.log(
    `Wow, you both have equally long names, ${navigatorsName.length} characters.`
    );

}

// Iteration 3: Loops
//3.1
let newName = '';
for (let i = 0; i < driversName.length; i++) {
    newName = newName + driversName[i] + ' ';
}
console.log(newName.toUpperCase());

//3.2
let reverseName = '';
for (let i = driversName.length - 1; i >= 0; i--) {
    reverseName = reverseName + driversName[i];
}
console.log(reverseName);

//3.3
/*
let firstLetterDriver = driversName.charAt(0);
let firstLetterNavigator = navigatorsName.charAt(0);
if (firstLetterNavigator < firstLetterDriver) {
    console.log("The driver's name goes first.");
} else if (firstLetterNavigator > firstLetterDriver) {
    console.log("The driver's name goes first.");
} else {
    console.log('What?! You both have the same name?');
}
*/

let compare = driversName.localeCompare(navigatorsName);
if (compare === 1) {
    console.log("The driver's name goes first.");
} else if (compare === -1) {
    console.log("The driver's name goes first.");
} else {
    console.log('What?! You both have the same name?');
}


//Bonus 1
let string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue eros augue, non venenatis quam vehicula ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at velit et magna sagittis faucibus ac ac odio. Maecenas quam justo, mattis vitae eleifend vel, finibus sed ex. Maecenas condimentum nulla id dui ornare, vel pretium nisi volutpat. Integer fermentum, nulla at fermentum semper, leo metus suscipit ligula, ut bibendum lorem magna quis nulla. Sed eu tortor non nisl dictum pulvinar. Phasellus sollicitudin posuere odio eget elementum. Nullam nulla purus, cursus vel erat a, scelerisque ullamcorper lorem. Curabitur venenatis nisi vitae dui vehicula dignissim. Fusce scelerisque aliquam sem, et dictum dui lacinia at. Proin ante metus, imperdiet et ultrices a, faucibus et diam. Duis blandit commodo pellentesque. Sed consectetur lectus a ligula tincidunt gravida ut ut nisi. Morbi rhoncus a enim quis rhoncus. Vestibulum ornare, mauris ac consequat mollis, felis sem tincidunt dolor, nec sollicitudin quam turpis congue risus. Integer rutrum velit ac lorem vehicula accumsan non sit amet enim. Integer egestas turpis ut lorem facilisis, in scelerisque purus suscipit. Pellentesque mattis pulvinar lorem a ultricies. Quisque iaculis, ipsum sed molestie egestas, nisi augue vehicula ipsum, id suscipit nisi augue et ipsum. Phasellus vestibulum diam elementum iaculis interdum. Cras ultricies urna nec porttitor iaculis. Vivamus id vestibulum arcu. Vivamus bibendum elit sed sem rhoncus, ut egestas risus pretium. Suspendisse potenti. Mauris vitae eros felis. Aliquam eleifend purus vitae erat venenatis, in dictum ipsum gravida. Donec id maximus leo. Praesent luctus felis sed risus rutrum, eu fringilla orci porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu facilisis augue. Ut placerat bibendum sollicitudin.';

let counter = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
    counter++;
    }
}
console.log(counter + 1);

let counterEt = 0;
for (let i = 0; i < string.length; i++) {
    if (string.slice(i, i + 4) === ' et ') {
    counterEt++;
    }
}
console.log(counterEt);

//Bonus 2
let palindrome = 'Amor, Roma';
let comparedPalindrome = '';
let reversedPalindrome = '';
for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] !== ' ' && palindrome[i] !== ',') {
    comparedPalindrome = comparedPalindrome + palindrome[i];
    }
}
for (let i = comparedPalindrome.length - 1; i >= 0; i--) {
    reversedPalindrome = reversedPalindrome + comparedPalindrome[i];
}

if (reversedPalindrome.toUpperCase() === comparedPalindrome.toUpperCase()) {
    console.log(`${palindrome} es un PALINDROMO`);
}