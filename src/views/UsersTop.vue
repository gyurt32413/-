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
          <button v-if="user.isFollowed" type="button" class="btn btn-danger">
            取消追蹤
          </button>
          <button v-else type="button" class="btn btn-primary">追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$7xSADMhfq3VP/RgKXShwkeM5zaef76EinnRFo.lZoWQ8lUnHTMYeK",
      isAdmin: true,
      image:
        "https://scontent.ftpe13-1.fna.fbcdn.net/v/t39.30808-6/277766493_403806918413313_9182118157752127809_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iAcVoACwaDQAX-jKeKo&_nc_ht=scontent.ftpe13-1.fna&oh=00_AT9176vpgv04gHoaooi8b2fbdNtjb9RhA58EREyaawDB5Q&oe=626810D6",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$7GQSR7U1uPaRBctJauU.9uP62rIu.EHxi03fOanGQblX9ZRqsNUdq",
      isAdmin: false,
      image:
        "https://scontent.ftpe13-2.fna.fbcdn.net/v/t1.6435-9/119645208_105590441299306_1793478788227380139_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rjZpOFwpRJQAX9kCRgP&_nc_ht=scontent.ftpe13-2.fna&oh=00_AT_Miq1NidpWGIAGbdcUPWk80Zy8Fe1VsyybzKExITM7Bw&oe=628A3847",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$zOaf3qinIJftV7OTGmhQrOzGNIsDnnUpNruyRoMmms9raxUKCrJS6",
      isAdmin: false,
      image: "https://images.plurk.com/Pi8n022UO4CCIiR2THHI4.png",
      createdAt: "2022-04-20T15:00:31.000Z",
      updatedAt: "2022-04-20T15:00:31.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  data() {
    return {
      users: []
    };
  },
  components: {
    NavTabs,
  },
  created() {
    this.fetchUserTop()
  },
  methods: {
    fetchUserTop() {
      this.users = dummyData.users
    }
  }
};
</script>