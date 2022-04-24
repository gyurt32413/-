<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Dr. Josue Green",
    tel: "(009) 904-9571",
    address: "129 Wintheiser Brook",
    opening_hours: "08:00",
    description:
      "Laborum corrupti fugiat possimus consectetur sint quo et maiores iste.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=17.276917600096976",
    viewCounts: 1,
    createdAt: "2022-04-20T15:00:31.000Z",
    updatedAt: "2022-04-23T09:38:08.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Ut amet illo.",
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
      },
      {
        id: 101,
        text: "Ut magni nam voluptas qui laboriosam aspernatur asperiores cupiditate officiis.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-20T15:00:31.000Z",
        updatedAt: "2022-04-20T15:00:31.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$zOaf3qinIJftV7OTGmhQrOzGNIsDnnUpNruyRoMmms9raxUKCrJS6",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-20T15:00:31.000Z",
          updatedAt: "2022-04-20T15:00:31.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    this.fetchRestaurantDashboard();
  },

  methods: {
    fetchRestaurantDashboard() {
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant;
      this.restaurant.id = id;
      this.restaurant.name = name;
      this.restaurant.categoryName = Category.name;
      this.restaurant.commentsLength = Comments.length;
      this.restaurant.viewCounts = viewCounts;
    },
  },
};
</script>