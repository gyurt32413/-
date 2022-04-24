// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="card mb-3" style="max-width: 540px; margin: auto">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button type="button" class="btn btn-danger mr-2">移除最愛</button>
            <button type="button" class="btn btn-primary">加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

const dummyData = {
  restaurants: [
    {
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Kendra Leannon",
      tel: "(224) 521-1816",
      address: "2116 Hazle Knolls",
      opening_hours: "08:00",
      description: "Aliquid odit nihil repellat ipsam tempora omnis is",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.80348900191049",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Dessie Walker",
      tel: "(054) 903-8228 x833",
      address: "515 Schuyler Forest",
      opening_hours: "08:00",
      description: "Deserunt provident quo aperiam aut omnis est. Quae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.045225396591846",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Miss Janice Abshire",
      tel: "1-802-461-2476",
      address: "5569 Runte Mission",
      opening_hours: "08:00",
      description: "Itaque eius laboriosam. Eveniet cupiditate provide",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.949147971367053",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Bobbie Hegmann",
      tel: "1-218-649-0121 x44541",
      address: "7750 Gleason Harbors",
      opening_hours: "08:00",
      description: "Incidunt hic similique autem error voluptatibus. M",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.6293526831042",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Lilla Gutmann",
      tel: "335-453-5512",
      address: "5322 Hector Point",
      opening_hours: "08:00",
      description: "occaecati",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.2591799607486",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Loyal Trantow",
      tel: "(828) 666-4993 x2169",
      address: "996 Amanda Walk",
      opening_hours: "08:00",
      description: "Corrupti nesciunt eos aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.39294193356787",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Shanon Effertz",
      tel: "1-196-688-5589",
      address: "6519 Toni Rapids",
      opening_hours: "08:00",
      description: "Est numquam tenetur quidem porro iusto neque labor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.91281531660425",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Cleta Braun I",
      tel: "1-736-911-8580 x057",
      address: "104 Selena Trace",
      opening_hours: "08:00",
      description: "Aut pariatur expedita quibusdam consequatur volupt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.10096142591862",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Jayde Koch DDS",
      tel: "(723) 456-4863 x46310",
      address: "16483 Rempel Route",
      opening_hours: "08:00",
      description: "ab maxime soluta",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.748995196224804",
      viewCounts: 0,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurantsTop()
  },

  methods: {
    fetchRestaurantsTop() {
      this.restaurants = dummyData.restaurants
    }
  }
};
</script>
