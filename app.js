// 73-SAVOL


// function hajmHesabla(qut) {
//     return qut.balandlik * qut.eni * qut.uzunlik;
// }


// let qut = {
//     balandlik: 5,
//     eni: 5,
//     uzunlik: 5,
// };

// let hajm = hajmHesabla(qut);
// console.log(hajm);



// 74 SAVOL

// function sonlar(son1, son2, arr) {
//     let natijaMassivi = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > son1 && arr[i] < son2) {
//             natijaMassivi.push(arr[i]);
//         }
//     }
//     return natijaMassivi;
// }


// let misolMassivi = [1, 5, 8, 3, 6, 10, 7];


// let natija = sonlar(3, 8, misolMassivi);
// console.log(natija);


// 83 SAVOL

// function tengmi() {

//     let soz1 = prompt("Birinchi so'zni kiriting:");
//     let soz2 = prompt("Ikkinchi so'zni kiriting:");

//     soz1 = soz1.toLowerCase();
//     soz2 = soz2.toLowerCase();

//     if (soz1 === soz2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let natija = tengmi();
// console.log(natija);


// 84 SAVOL

// function belgiSoni() {
//     let word = prompt("SOZ KIRITING");
//     let con = 0;
//     for (let i = 0; i < word.length; i++) {
//         con ++;
//     }
//     return con;
// }

// console.log(belgiSoni());


// 86 SAVOL

// function namuna() {
//     let input = prompt("SON KIRITING MASALAN 1,2,3 (VERGUL BILAN)");
//     let arr = input.split(",").map(Number);
//     let natija = [];
//     for (let i = 0; i < arr.length; i++) {
//         natija.push(arr[i] * 2);
//     }
//     return natija;
// }

// console.log(namuna());



// 87 SAVOL

// function wordLengths() {
//     let input = prompt("ILTIMOS SOZ KIRITING VERGUL BILAN");
//     let words = input.split(",");
//     let lengths = [];
//     for (let i = 0; i < words.length; i++) {
//         lengths.push(words[i].length);
//     }
//     return lengths;
// }

// console.log(wordLengths());


// 94 SAVOL


// function namuna() {
//     let input = prompt("SAONLAR KIRITING");
//     let numbers = input.split(",").map(Number);
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 5) {
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }

// console.log(namuna());




// 95 SAVOL

// function Namuna() {
//     let input = prompt("SONLAR KIRITING");
//     let arr = input.split(",").map(Number);
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(Namuna());


// 97 SAVOL

// function Namuna() {
//     let input = prompt("massivini kiritng masalan: 2,4,2,5");
//     let distances = input.split(",").map(Number);
//     let totalDistance = 0;
//     for (let i = 0; i < distances.length; i++) {
//         if (distances[i] > 0) {
//             totalDistance += distances[i];
//         }
//     }
//     return totalDistance;
// }

// console.log(Namuna());


// 99 SAVOL

// function Namuna(son1, son2) {
//     let massiv = [];
//     for (let i = son1 + 1; i < son2; i++) {
//         massiv.push(i);
//     }
//     return massiv;
// }

// let input1 = prompt("Birinchi sonni kiriting:");
// let input2 = prompt("Ikkinchi sonni kiriting:");
// let son1 = parseInt(input1);
// let son2 = parseInt(input2);
// console.log(Namuna(son1, son2));


