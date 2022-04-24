// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue"

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Dr. Josue Green",
      tel: "(009) 904-9571",
      address: "129 Wintheiser Brook",
      opening_hours: "08:00",
      description:
        "Laborum corrupti fugiat possimus consectetur sint quo et maiores iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.276917600096976",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 2,
      name: "Rebecca Jacobs",
      tel: "(122) 972-4577 x654",
      address: "2539 Myra Brooks",
      opening_hours: "08:00",
      description:
        "Magni dolores numquam recusandae sunt quibusdam veniam qui et. Ipsum inventore velit nihil. Earum nihil maxime nihil aut. Mollitia maiores molestiae id soluta rem quaerat. Odio dolorem reprehenderit fuga. Aliquam qui at est temporibus.\n \rEnim deleniti in maxime iure pariatur blanditiis. Qui sit soluta rerum repudiandae ut labore et aut labore. Nisi rerum modi ea officia. Odio qui cumque dignissimos asperiores sed beatae ratione aut sint. Velit velit eligendi nam.\n \rEsse ut deleniti. Voluptate tenetur quae aliquid odit ad consectetur et ipsa minima. Eligendi molestiae quia ut quo consectetur architecto assumenda.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.25980593398012",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 3,
      name: "Dr. Lenore Corwin",
      tel: "944.484.0797 x54635",
      address: "42491 Leffler Mountain",
      opening_hours: "08:00",
      description:
        "Non quo hic dolor est perferendis maxime rerum voluptas aut. Molestiae possimus ut fuga voluptatem. Illo nam cum iure sit. Molestiae assumenda aut hic et exercitationem fuga molestias.\n \rEt voluptatem sit. Est eum voluptatum et. Non voluptas corrupti neque molestiae aliquid tempore iusto. Earum aut distinctio omnis quae placeat impedit. Fugit totam quisquam ut inventore. Impedit eius omnis voluptas aut cumque et.\n \rFuga reprehenderit iure itaque dolorum. Neque quaerat architecto. Ipsam accusamus nihil dolor architecto.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.656800678373855",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 4,
      name: "Reilly Koepp",
      tel: "740-320-0312",
      address: "2022 Schaden Station",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.53544895128974",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 5,
      name: "Eugenia Quigley",
      tel: "783-181-5252 x072",
      address: "25185 Edgar Place",
      opening_hours: "08:00",
      description: "est ipsam dignissimos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.757961040958934",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 6,
      name: "Miss Lia Brown",
      tel: "467.741.4944",
      address: "8454 Gerhold Roads",
      opening_hours: "08:00",
      description: "et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.340204341089773",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 7,
      name: "Graham Medhurst",
      tel: "616-598-4425 x7793",
      address: "243 DuBuque Manors",
      opening_hours: "08:00",
      description: "omnis voluptas enim",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.607483532968054",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 8,
      name: "Lon Douglas II",
      tel: "1-383-343-1485 x0519",
      address: "560 Schmitt Underpass",
      opening_hours: "08:00",
      description: "Molestiae iste non amet sunt dolores culpa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.421906429227718",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 9,
      name: "Laurine Mueller",
      tel: "1-592-631-7024 x338",
      address: "366 Reinhold Spring",
      opening_hours: "08:00",
      description:
        "Et itaque molestiae laborum aut sed non rerum eum voluptas. Eveniet quia incidunt asperiores est facere ut. Dicta amet mollitia recusandae qui est at. Sit magni velit asperiores quasi quis ut id sequi. Voluptatem illum quis ratione. Et consequatur voluptatem quo maxime et qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.213936588184445",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
    {
      id: 10,
      name: "Albert Mayert",
      tel: "1-606-117-4329 x38008",
      address: "100 Veum River",
      opening_hours: "08:00",
      description: "Voluptas fuga aut dolorem a.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.86531604792983",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
    },
  ],
  comments: [
    {
      id: 8,
      text: "Porro repudiandae harum magni voluptates cupiditate saepe.",
      UserId: 1,
      RestaurantId: 8,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 8,
        name: "Lon Douglas II",
        tel: "1-383-343-1485 x0519",
        address: "560 Schmitt Underpass",
        opening_hours: "08:00",
        description: "Molestiae iste non amet sunt dolores culpa.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=18.421906429227718",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 29,
      text: "Aut qui dolorem vitae.",
      UserId: 1,
      RestaurantId: 29,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 29,
        name: "Dallas Kunde",
        tel: "459-505-0203 x2512",
        address: "46297 Brenden Divide",
        opening_hours: "08:00",
        description:
          "Voluptatem aliquam consequatur culpa et.\nConsequatur officiis nemo sequi nam omnis.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=13.972712090549354",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 51,
      text: "Quo nihil vitae deserunt quae aut ut.",
      UserId: 1,
      RestaurantId: 1,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 1,
        name: "Dr. Josue Green",
        tel: "(009) 904-9571",
        address: "129 Wintheiser Brook",
        opening_hours: "08:00",
        description:
          "Laborum corrupti fugiat possimus consectetur sint quo et maiores iste.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=17.276917600096976",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 81,
      text: "Quo in itaque aut laborum dolores maiores at.",
      UserId: 1,
      RestaurantId: 31,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 31,
        name: "Wyatt Halvorson",
        tel: "390-839-4942 x11701",
        address: "2531 Block Trace",
        opening_hours: "08:00",
        description:
          "Quo delectus ipsam quibusdam numquam. Sed placeat fuga qui aperiam odit fugiat maxime id. Aspernatur quae qui voluptatem ratione eos ut. Omnis quod nesciunt in aut ea aut. Nulla dignissimos nisi porro aut ullam qui aut quas.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=18.678542195309824",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 99,
      text: "Expedita perspiciatis sed.",
      UserId: 1,
      RestaurantId: 49,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 49,
        name: "Kendra Leannon",
        tel: "(224) 521-1816",
        address: "2116 Hazle Knolls",
        opening_hours: "08:00",
        description:
          "Aliquid odit nihil repellat ipsam tempora omnis iste sit ipsa. Neque ea natus et maiores et velit possimus.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=76.80348900191049",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 135,
      text: "At reprehenderit omnis voluptas omnis modi.",
      UserId: 1,
      RestaurantId: 35,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 35,
        name: "Marc Turcotte",
        tel: "(952) 685-5585 x081",
        address: "0922 Schmeler Glens",
        opening_hours: "08:00",
        description: "amet",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=75.80898794794204",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 21,
      text: "Ut quibusdam ad reprehenderit nihil adipisci.",
      UserId: 2,
      RestaurantId: 21,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$7GQSR7U1uPaRBctJauU.9uP62rIu.EHxi03fOanGQblX9ZRqsNUdq",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 21,
        name: "Esmeralda Huels",
        tel: "1-792-556-2721 x8324",
        address: "1595 Kristina Hill",
        opening_hours: "08:00",
        description:
          "Earum veniam quia laudantium pariatur autem quia eos iste vel. Asperiores occaecati adipisci vero autem. Ipsum at neque veniam architecto et fugiat molestiae dolor.\n \rCulpa et quibusdam explicabo fugit porro rerum et facilis voluptas. Molestiae quam ut voluptatibus eum asperiores tenetur dolor. Quia animi assumenda culpa et commodi est possimus dolores autem. Praesentium consequatur ea est ipsam labore eaque aut dolores omnis. Qui velit ut laudantium eum debitis nihil distinctio.\n \rNon quidem placeat cupiditate. Minus quia qui dolorum architecto quam est alias facere. Vero natus non ullam. Alias vitae in illo. Enim optio dolor quae ratione atque voluptatem dolore ea.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=7.187672231624331",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 47,
      text: "Eum enim et.",
      UserId: 2,
      RestaurantId: 47,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$7GQSR7U1uPaRBctJauU.9uP62rIu.EHxi03fOanGQblX9ZRqsNUdq",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 47,
        name: "Miss Janice Abshire",
        tel: "1-802-461-2476",
        address: "5569 Runte Mission",
        opening_hours: "08:00",
        description:
          "Itaque eius laboriosam. Eveniet cupiditate provident explicabo porro dolor est sed ab. Id dignissimos vel aut quibusdam labore facilis aut enim et.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=6.949147971367053",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 74,
      text: "Commodi saepe maiores enim consequatur.",
      UserId: 2,
      RestaurantId: 24,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$7GQSR7U1uPaRBctJauU.9uP62rIu.EHxi03fOanGQblX9ZRqsNUdq",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 24,
        name: "Mrs. Sabrina Kozey",
        tel: "1-377-712-8913",
        address: "3303 Murphy Bridge",
        opening_hours: "08:00",
        description:
          "Dolore dolores reprehenderit esse vero eos eum doloribus distinctio.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=38.000574871598445",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 100,
      text: "At tenetur a unde quod eos consequuntur quia.",
      UserId: 2,
      RestaurantId: 50,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$7GQSR7U1uPaRBctJauU.9uP62rIu.EHxi03fOanGQblX9ZRqsNUdq",
        isAdmin: false,
        image: null,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
      },
      Restaurant: {
        id: 50,
        name: "Carolyne Haley V",
        tel: "(076) 620-5948",
        address: "2321 Daron Ports",
        opening_hours: "08:00",
        description: "consectetur aspernatur quia",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=74.92157027240935",
        viewCounts: 0,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        CategoryId: 1,
      },
    },
  ],
};

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments;
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>