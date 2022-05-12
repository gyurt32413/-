// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-show="restaurant.isFavorited"
              @click="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-show="!restaurant.isFavorited"
              @click="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { Toast } from "../utils/helpers";
import restaurantsAPI from "../apis/restaurants";
import usersAPI from "../apis/users";

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
    this.fetchRestaurantsTop();
  },

  methods: {
    async fetchRestaurantsTop() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳資料，請稍後再試",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將該餐廳加入最愛清單，請稍後再試",
        });
      }
      this.fetchRestaurantsTop()
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將該餐廳移除最愛清單，請稍後再試",
        });
      }
      this.fetchRestaurantsTop()
    },
  },
};
</script>
