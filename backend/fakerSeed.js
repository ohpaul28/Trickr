const { faker } = require('@faker-js/faker');

const randomNumber = num => Math.floor(Math.random() * Math.floor(num) + 1)

function getRandomInt(max) {
    let num = Math.floor(Math.random() * max)
    return num + 1;
}

let fill;

const seedComments = num => {
    let i = 0;

    while (i < num) {
        const comments = {
            userId: getRandomInt(3),
            illusionId: getRandomInt(25),
            comment: faker.lorem.sentence(),
            createdAt: fill,
            updatedAt: fill
        }

        console.log(comments, ',')
        i++;
    }
}
// console.log(getRandomInt(4))
seedComments(100)
