// Object destructuring

const person = {
    name: 'Guido',
    age: 23,
    location: {
        city: 'Ermelo',
        temperature: 32.0
    }
};

const {name = 'Anoniem', age} = person;
const {city: dorp} = person.location;

console.log(`${name} is ${age} jaar oud en woont in ${dorp}.`);



const { naam } = {
    naam: "Guido"
};
console.log(naam);

// Array destructuring

const address = ['sophialaan', '9', 'ermelo'];
const [street, number, city] = address;
const [, tweede, derde = 'default'] = address;
console.log(`Je woont aan de ${street} op nummer ${number} in ${derde}`);