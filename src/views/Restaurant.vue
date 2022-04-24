<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initialRestaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurantComments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";

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
    updatedAt: "2022-04-23T09:38:08.027Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },

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
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },

  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },

  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      console.log("commentID", commentId);
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>