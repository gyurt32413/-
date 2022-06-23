<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.favoritedRestaurantsLength }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.followingsLength }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <router-link :to="{ name: 'user-edit' }" v-if="isCurrentUser">
              <button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
            <template v-else>
              <button
                v-if="!isFollowed"
                @click.prevent.stop="addFollowing(profile.id)"
                type="button"
                class="btn btn-primary btn-border favorite mr-2"
              >
                追蹤
              </button>
              <button
                v-else
                @click.prevent.stop="deleteFollowing(profile.id)"
                type="button"
                class="btn btn-danger btn-border favorite mr-2"
              >
                取消追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import usersAPI from "../apis/users";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
  },
  created() {
    console.log(this.initialProfile);
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsFollowed,
    };
  },
  watch: {
    initialProfile(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
    initialIsFollowed(newValue) {
      this.isFollowed = newValue;
    },
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { statusText } = await usersAPI.addFollowing({ userId });
        if (statusText === "OK") {
          this.isFollowed = true;
        } else {
          throw new Error(statusText);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFollowing(userId) {
      try {
        const { statusText } = await usersAPI.deleteFollowing({ userId });
        if (statusText === "OK") {
          this.isFollowed = false;
        } else {
          throw new Error(statusText);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>