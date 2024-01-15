const person = {name: 'Rejaul', job: 'Google', age: 30, address: 'Banglabazar', post: 1100-310}

const {name, age, job} = person; // Person object theke shudhu name, age, job element gula destructure kore name, age, job variable a rakha hoiche


const person2 = {name: 'Karim', job: 'google2', age: 30, address: 'Banglabazar', post: 1100-310}
//destructure

const {name2, age2, job2} = person2;

console.log(name, age, job);

// ekhon dekhbo array theke destructue kore

const friendName = ['Sumon', 'Imran', 'Asad', 'Akhyar', 'Rony', 'Rubel'];

const [firstName, ...otherF] = friendName;

const friendName2 = ['karim', 'Rahim', 'Sumon', 'khaled'];

const [firstPer, ...othersPer] = friendName2;

console.log(firstName);
console.log(otherF);