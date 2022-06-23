<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- 使用者資料卡片 -->
      <UserProfileCard
        :initial-profile="user"
        :initial-is-followed="isFollowed"
        :is-current-user="currentUser.id === user.id "
      />

      <div class="row">
        <div class="col-md-4">
          <!-- 追蹤者資料 -->
          <UserFollowingsCard :initial-profile="user" />
          <br />
          <!-- 追隨者資料 -->
          <UserFollowersCard :initial-profile="user" />
        </div>
        <div class="col-md-8">
          <!-- 評論餐廳資料 -->
          <UserCommentsCard
            :initial-profile="user"
            :initial-comment="comments"
          />
          <br />
          <!-- 收藏餐廳資料 -->
          <UserFavoritedRestaurantsCard :initial-profile="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "UserProfile",

  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);

    // console.log('userId', this.userID);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({
          userId,
        });
        const { profile, isFollowed } = data;
        console.log(profile, isFollowed);

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.user = {
          ...this.user,
          id: profile.id,
          image: profile.image,
          name: profile.name,
          email: profile.email,
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length,
        };
        this.isFollowed = isFollowed;
        this.followings = profile.Followings;
        this.followers = profile.Followers;
        this.favoritedRestaurants = profile.FavoritedRestaurants;
        this.comments = profile.Comments.filter(
          (comment) => comment.Restaurant
        );
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>