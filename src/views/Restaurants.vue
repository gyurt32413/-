// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Dr. Josue Green",
      tel: "(009) 904-9571",
      address: "129 Wintheiser Brook",
      opening_hours: "08:00",
      description: "Laborum corrupti fugiat possimus consectetur sint ",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Rebecca Jacobs",
      tel: "(122) 972-4577 x654",
      address: "2539 Myra Brooks",
      opening_hours: "08:00",
      description: "Magni dolores numquam recusandae sunt quibusdam ve",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Dr. Lenore Corwin",
      tel: "944.484.0797 x54635",
      address: "42491 Leffler Mountain",
      opening_hours: "08:00",
      description: "Non quo hic dolor est perferendis maxime rerum vol",
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Laurine Mueller",
      tel: "1-592-631-7024 x338",
      address: "366 Reinhold Spring",
      opening_hours: "08:00",
      description: "Et itaque molestiae laborum aut sed non rerum eum ",
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "Restaurant",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },

  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    },
  },
};
</script>