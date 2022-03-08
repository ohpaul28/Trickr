'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        illusionId: 1,
        comment: 'Est et aut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 2,
        comment: 'Enim ea quo ipsum deleniti.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 7,
        comment: 'Autem corporis consequuntur impedit veritatis sed aspernatur nulla ut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 9,
        comment: 'Maxime quia ut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 3,
        comment: 'Ducimus dolor sit natus natus est.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 8,
        comment: 'Sapiente adipisci ipsam quis eius exercitationem aliquam qui deleniti.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 3,
        comment: 'Tenetur quidem molestiae laborum et beatae at.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 9,
        comment: 'Perferendis animi aut aliquam dolores eos et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 4,
        comment: 'Quo et alias rerum reprehenderit voluptatem inventore consequuntur.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 3,
        comment: 'Ut eos pariatur.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 2,
        comment: 'Nihil aspernatur dolore voluptas debitis eum maxime officiis ut itaque.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 2,
        comment: 'Facere velit repellat.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 6,
        comment: 'Ea debitis quia.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 2,
        comment: 'Repellendus officia ducimus quasi et incidunt.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 8,
        comment: 'Enim rerum eum alias dolore fugiat.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 9,
        comment: 'Soluta velit sed vero sunt enim ut ut porro animi.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 6,
        comment: 'Ea repellat vel quas facilis maxime.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 1,
        comment: 'Necessitatibus reprehenderit aperiam cumque perspiciatis ut eligendi accusantium reiciendis fugit.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 4,
        comment: 'Dolores rerum voluptatibus repudiandae sed iure animi est.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 2,
        comment: 'Voluptatem fugit voluptatem sit quas doloribus sint velit impedit.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 9,
        comment: 'Totam rerum non atque tenetur pariatur cum qui.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 1,
        comment: 'Ut vero sed voluptates.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 4,
        comment: 'Omnis ratione dolore fugiat vitae laboriosam corporis consequatur.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 6,
        comment: 'At laboriosam et officiis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 2,
        comment: 'Mollitia omnis qui et voluptate nostrum aut sunt ad quam.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 2,
        comment: 'Sed et earum.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 6,
        comment: 'Id ut quisquam aut eveniet provident voluptatem corporis fugit.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 2,
        comment: 'Atque in earum qui autem accusantium at id tempore pariatur.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 6,
        comment: 'Minima ipsa iusto et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 8,
        comment: 'Voluptas omnis omnis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 8,
        comment: 'Praesentium nulla eligendi et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 6,
        comment: 'Magnam sed quia et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 3,
        comment: 'Ut quisquam ut veritatis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 4,
        comment: 'Facere animi tempora perspiciatis saepe.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 1,
        comment: 'Et possimus cumque odit.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 5,
        comment: 'Deleniti ea distinctio esse ut vel quae.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 9,
        comment: 'Natus culpa nulla voluptas tenetur labore nam iusto.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 6,
        comment: 'Dolor voluptatem ut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 2,
        comment: 'Ab dolores repellendus minus quam quia.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 5,
        comment: 'Quasi molestiae rerum quia.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 5,
        comment: 'Quia repellat dolorem cum ipsa sapiente et aut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 1,
        comment: 'Suscipit nobis ducimus iste repellendus temporibus odit officia ad repellendus.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 4,
        comment: 'Necessitatibus fugit cum ut placeat iste velit necessitatibus maxime.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 7,
        comment: 'Ut suscipit id.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 9,
        comment: 'Omnis sit aliquid.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 4,
        comment: 'Rerum eum temporibus explicabo sequi consectetur.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 2,
        comment: 'Nemo molestiae in aspernatur voluptas.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 9,
        comment: 'Quas distinctio hic corporis in quod.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 4,
        comment: 'Et ex unde et tempore nam illo veritatis quod.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 3,
        comment: 'Ut recusandae qui unde fugiat omnis iste consequuntur quis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 6,
        comment: 'Eveniet ullam asperiores molestias voluptas accusamus.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 3,
        comment: 'Vitae laudantium repellat dolores corrupti iusto omnis culpa doloremque ea.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 7,
        comment: 'Tenetur ut consequatur soluta aut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 8,
        comment: 'Qui aspernatur harum et et ut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 8,
        comment: 'Ea similique aspernatur hic qui unde dolor id.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 9,
        comment: 'Tempore quis qui ut ducimus voluptatem.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 5,
        comment: 'Cum quia accusantium et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 2,
        comment: 'Sint ut quod.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 4,
        comment: 'Odio consequuntur sit et error et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 4,
        comment: 'Vero ut qui sapiente vero expedita autem ipsa.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 4,
        comment: 'Nam culpa quas.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 1,
        comment: 'Minima incidunt et magni et incidunt sapiente ea molestiae neque.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 9,
        comment: 'Illum iusto nihil ea.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 3,
        comment: 'Fugiat dicta et dolor velit ut deserunt sed delectus.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 9,
        comment: 'Quod et praesentium expedita nemo pariatur sit.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 8,
        comment: 'Optio accusantium voluptatem voluptas voluptatem reiciendis magni laboriosam.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 6,
        comment: 'Culpa nemo asperiores deserunt aperiam.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 9,
        comment: 'Enim deserunt aperiam quos id dolore eius quia error quis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 3,
        comment: 'In reiciendis commodi repudiandae maiores porro labore.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 7,
        comment: 'Eaque illo officiis modi expedita exercitationem.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 5,
        comment: 'Omnis dolorem doloribus blanditiis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 8,
        comment: 'Expedita illo non atque dolorum.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 8,
        comment: 'Delectus possimus voluptatibus a consectetur itaque ex.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 7,
        comment: 'Eligendi quae quis sint est consequuntur incidunt aperiam commodi.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 2,
        comment: 'Eaque dolorem enim pariatur qui omnis esse et soluta.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 8,
        comment: 'Voluptatem sit velit enim alias eveniet.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 7,
        comment: 'In cum debitis voluptate non dolorum cupiditate maiores.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 3,
        comment: 'Minima distinctio suscipit eum.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 3,
        comment: 'Quo veritatis quis qui eum explicabo molestias ut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 1,
        comment: 'A quas tempora nihil qui explicabo quo dolor.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 4,
        comment: 'Velit totam voluptatem consequatur est asperiores cumque eligendi alias et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 9,
        comment: 'Quasi voluptatum illo voluptatem animi nam possimus.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 9,
        comment: 'Quidem doloremque velit distinctio laborum et delectus ut eligendi quia.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 1,
        comment: 'Porro autem at qui quia temporibus iure quos culpa.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 3,
        comment: 'Inventore iure est optio.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 3,
        comment: 'Inventore omnis illum delectus natus aut accusantium mollitia occaecati excepturi.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 7,
        comment: 'Est praesentium perferendis dolorem et.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 6,
        comment: 'Aut sit voluptas.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 7,
        comment: 'Totam voluptas quasi tempore dicta alias molestias blanditiis eos.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 9,
        comment: 'Fugiat eius labore tenetur in reprehenderit.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        illusionId: 9,
        comment: 'Et quas cupiditate et aut totam esse alias esse modi.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 5,
        comment: 'Voluptatem vitae fuga et vero et possimus.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 8,
        comment: 'Vitae architecto quidem dolore provident non ea rem sapiente.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 8,
        comment: 'Tenetur debitis dolorem et voluptatem eos non ex.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 8,
        comment: 'Dolorem rerum atque iste ea.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 6,
        comment: 'Omnis ratione quas omnis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 1,
        illusionId: 1,
        comment: 'Unde animi optio sunt repellat aut placeat quibusdam asperiores aut.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 3,
        comment: 'Harum facilis quam nihil numquam laudantium veritatis.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 9,
        comment: 'A aut sed.',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 3,
        illusionId: 9,
        comment: 'Voluptates nam delectus.',
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
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
