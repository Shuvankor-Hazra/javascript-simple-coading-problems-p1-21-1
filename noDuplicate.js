/**
 * Array has some duplicate elements
 * []
 */

const biriyaniKhor = ["abul","babul","cabul","abul","babul","dabul","kabul","cabul"]
const numbers = [3,5,3,87,9,6,5,65,87,99];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
