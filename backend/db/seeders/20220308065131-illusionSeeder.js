'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Illusions', [
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/HR36SV6.gifv",
        title: "Colorshift",
        description: "The image is 100% still, the only thing that changes is the color.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/cCNfYJI.jpg",
        title: "Spinning Seeds",
        description: "This is a still image. Your mind is playing with you!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/fbMwXut.png",
        title: "Stacked Spirals",
        description: "Can you see the image moving? It's not.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/MCJdLUY.jpg",
        title: "Deep Spirals",
        description: "Stare into the depths.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/kPMvuLX.jpg",
        title: "Jagged Lines",
        description: "Parallel or not?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/07Gp8OD.gifv",
        title: "Axis Spin",
        description: "Which direction is it spinning in for you?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/0zv6ttb.jpg",
        title: "Spinning Seeds",
        description: "Don't let the seeds spin away!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/tvAAdIu.jpg",
        title: "Imaginary Dots",
        description: "Try to put your finger on the black dot.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/RxPHdBU.png",
        title: "Two Pear",
        description: "The pears are both the same color.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/lazwNux.png",
        title: "Deserves Happiness",
        description: "DISCLAIMER: This will only work on a mobile device. If you hold your device with this image in fullscreen you'll see the person I believe deserves happiness the most.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Illusions', null, {});
  }
};
