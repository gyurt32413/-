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
import NewestComments from "../components/NewestComments.vue";
import { Toast } from "../utils/helpers";
import restaurantsAPI from "../apis/restaurants";

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
    async fetchFeeds() {
      try {
        const { data } = await restaurantsAPI.getFeeds();

        this.restaurants = data.restaurants;
        this.comments = data.comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得最新回應，請稍後再試",
        });
        console.log("error", error);
      }
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>