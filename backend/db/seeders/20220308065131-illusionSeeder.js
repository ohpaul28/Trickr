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
        illusionURL: "https://i.imgur.com/ecyLxqT.jpg",
        title: "Mr. Krabs",
        description: "Two IPA's later and this is what it looks like.",
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
        illusionURL: "https://i.imgur.com/RLWrPx7.png",
        title: "No Red",
        description: "Strawberries are actually blue, you just didn't know until now.",
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
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/IRzUJyK.jpg",
        title: "Window Sizing",
        description: "Which window do you think is bigger?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/x9LoZkO.jpg",
        title: "Circle Difference",
        description: "Once in a blue moon, they appear to be the same size.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/tdFWPFu.jpg",
        title: "Imaginary Squares",
        description: "In this image, the parallel lines cause you to see squares that aren't there.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/ZwUxSw2.jpg",
        title: "Size Me Up",
        description: "The two lines have the same length.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/kTIuOma.jpg",
        title: "Yellow Road",
        description: "Both yellow lines are actually the same length. The other lines getting smaller make the appearance of the yellow line at the top appear smaller.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/2rFxvwY.jpg",
        title: "Scream!",
        description: "Color different lines to make the image appear as a different color.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/zGR1eMH.jpg",
        title: "Connections",
        description: "Determining which lines connect will help you determine how good your spatial referencing is, hint: it's not very good..",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/J6I4pyB.jpg",
        title: "Disquartion",
        description: "The conveniently placed squares distort the image, but not actually.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/PuUAdCO.jpg",
        title: "Red Light",
        description: "The red lines are not actually tilted, they are the same in both images.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/0lyLyWJ.png",
        title: "Beach Towels",
        description: "Comparing colors side by side make them seem either brighter or duller.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/PW3Dpb2.png",
        title: "Angular",
        description: "There is not a single triangle in this image.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        illusionURL: "https://i.imgur.com/5W87CEB.png",
        title: "Orbs",
        description: "All the orbs in this image are the same color!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/3F1dZYI.png",
        title: "Stare",
        description: "What lies beyond the event horizon?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        illusionURL: "https://i.imgur.com/8N8zucr.png",
        title: "Bouncey",
        description: "Seeing is not believing. The image is 100% still.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        illusionURL: "https://i.imgur.com/hJ9MlDp.png",
        title: "Ala-kazam",
        description: "If you stare long enough, the colors will disappear. This is called sensory adaptation.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
