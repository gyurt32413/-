<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" :disabled="isProcessing" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  data() {
    return {
      user: {
        name: "",
        image: "",
        id: -1,
      },
      isProcessing: false,
    };
  },
  created() {
    this.setUser();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    setUser() {
      this.user = this.currentUser;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      // STEP 5: 避免漏填
      if (!this.user.name) {
        Toast.fire({
          type: "warning",
          title: "您尚未填寫姓名",
        });
        return;
      }
      const form = e.target;
      const formData = new FormData(form);
      // TODO: 將資料透過 API 傳送到後端伺服器...
      try {
        this.isProcessing = true;
        // STEP 3: 呼叫 API 更新使用者資料
        const { data, statusText } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        // STEP 4: 更新完成後轉址到使用者詳細頁
        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>