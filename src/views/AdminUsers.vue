<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              @click="
                handleToggleRole({ userId: user.id, isAdmin: user.isAdmin })
              "
              v-if="user.isAdmin"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              @click="
                handleToggleRole({ userId: user.id, isAdmin: user.isAdmin })
              "
              v-else
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data, statusText } = await adminAPI.users.get();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.users = data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async handleToggleRole({ userId, isAdmin }) {
      try {
        const willBeAdmin = !isAdmin;
        const { data, statusText } = await adminAPI.users.update({
          userId,
          isAdmin: willBeAdmin.toString(),
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          }
          return {
            ...user,
            isAdmin: willBeAdmin,
          };
        });
        console.log(data);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },

    // handleToggleRole(userId) {
    //   this.users = this.users.map((user) => {
    //     if (user.id === userId) {
    //       return {
    //         ...user,
    //         isAdmin: !user.isAdmin,
    //       };
    //     }
    //     return user;
    //   });
    // },
  },
};
</script>