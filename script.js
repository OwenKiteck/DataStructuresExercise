
// 1 (a-f)
const jedi = [];
console.log(jedi);

jedi[0] = `Luke`;
console.log(jedi);

jedi.push(`Obi-Wan Kenobi`);
console.log(jedi);

jedi.unshift(`Yoda`);
console.log(jedi);

console.log(jedi[1])

jedi.pop();
console.log(jedi);

jedi.shift();
console.log(jedi);


// 2 (a-d)
const sithLords = [
    `Darth Vader`, 
    `Darth Sidious`, 
    `Darth Maul`
];
const imperialOfficers = [
    `Grand Moff Tarkin`,
    `Orson Krennic`
];

const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains);

console.log(starWarsVillains.slice(0, 2));


// 3 (a-d)
const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO",  
    assassin: "IG-88"
};

console.log(droids[`astromech`]);
console.log(droids.protocol);

droids[`assassin`] = `IG-11`;

console.log(droids);