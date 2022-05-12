// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <a href="#">
          <img
            style="object-fit: cover"
            :src="user.image"
            width="140px"
            height="140px"
          />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            @click="deleteFollowing(user.id)"
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            @click="addFollowing(user.id)"
            v-else
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

//

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    NavTabs,
  },
  created() {
    this.fetchUserTop();
  },
  methods: {
    async fetchUserTop() {
      try {
        const { data } = await usersAPI.getTopUsers();

        console.log(data);

        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          FollowerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        console.log("data", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        console.log("error", error);
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            };
          }
        });
        console.log(this.users)
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>