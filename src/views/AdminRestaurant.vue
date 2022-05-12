<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>
<script>
import { emptyImageFilter } from "./../utils/mixins";
import { Toast } from "../utils/helpers";
import adminAPI from "../apis/admin";

export default {
  name: "AdminRestaurant",
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
    };
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    //路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchRestaurant(id);

    console.log(to, from);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });
        const {
          id,
          name,
          Category,
          image,
          openingHours: opening_hours,
          tel,
          address,
          description,
        } = data.restaurant;
        this.restaurant.id = id;
        this.restaurant.name = name;
        this.restaurant.categoryName = Category.name;
        this.restaurant.image = image;
        this.restaurant.openingHours = opening_hours;
        this.restaurant.tel = tel;
        this.restaurant.address = address;
        this.restaurant.description = description;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得後台餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>