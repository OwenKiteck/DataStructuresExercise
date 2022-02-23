
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
// jedi.splice(2, 1);
// jedi.splice(-1, 1);
console.log(jedi);

jedi.shift();
// jedi.splice(0, 1);
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

// BONUS 

console.log(starWarsVillains[0][6]); // V

console.log(sithLords.slice(-2, -1)); // Darth Sidious

const starWarsMovies = [
    {
        episodeOne: `The Phantom Menace`,
        episodeTwo: `Attack of the Clones`,
        episodeThree: `Revenge of the Sith`
    },
    {
        episodeFour: `A New Hope`,
        episodeFive: `The Empire Strikes Back`,
        episodeSix: `Return of the Jedi`
    },
    {
        episodeSeven: `The Force Awakens`,
        episodeEight: `The Last Jed`,
        episodeNine: `The Rise of Skywalker`
    },
];

starWarsMovies.splice(1, 0, `Solo`, 'Rogue One');
console.log(starWarsMovies);