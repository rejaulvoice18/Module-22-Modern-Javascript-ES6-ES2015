const ages = [24, 55, 44, 88];
const ages2 = [99, 88, 7, 99];
const ages3 = [77, 11, 22, 44];
const allAges = ages.concat(ages2).concat([6]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];

console.log(allAges);
console.log(allAges2);

const businessMen1 = 500;
const businessMen2 = 800;
const businessMen3 = 999;
const businessMan = [500, 800, 999];
const richMan = Math.max(businessMen1, businessMen2, businessMen3);
const richMan2 = Math.max(...businessMan);

console.log(richMan);
console.log(richMan2);