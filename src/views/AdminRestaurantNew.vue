<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
    :is-processing="isProcessing"
    @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
// STEP 1: 匯入 adminAPI 和 Toast
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        // STEP 3: 透過 restaurants.create 方法來向伺服器建立餐廳
        const { data } = await adminAPI.restaurants.create({
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // STEP 4: 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false
        // STEP 5: 錯誤處理
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
      //透過API將表單資料傳給伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>