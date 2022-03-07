const { faker } = require('@faker-js/faker');

const randomNumber = num => Math.floor(Math.random() * Math.floor(num) + 1)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let fill;

const seedComments = num => {
    let i = 0;

    while (i < num) {
        const comments = {
            userId: getRandomInt(3),
            imageId: getRandomInt(9),
            comment: faker.lorem.sentence(),
            createdAt: fill,
            updatedAt: fill
        }

        console.log(comments, ',')
        i++;
    }
}

seedComments(100)
