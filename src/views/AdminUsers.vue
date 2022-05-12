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
              @click="handleToggleRole(user.id)"
              v-if="user.isAdmin"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              @click="handleToggleRole(user.id)"
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

const dummyUser = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
      isAdmin: true,
      image: null,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$7GQSR7U1uPaRBctJauU.9uP62rIu.EHxi03fOanGQblX9ZRqsNUdq",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$zOaf3qinIJftV7OTGmhQrOzGNIsDnnUpNruyRoMmms9raxUKCrJS6",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
    },
  ],
};

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
    fetchUsers() {
      const { users } = dummyUser;
      this.users = users;
    },
    handleToggleRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>