<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.followingsLength }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in profile.followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <img
          :src="following.image | emptyImage"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
  },
  watch: {
    initialProfile(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
  },
  data() {
    return {
      profile: this.initialProfile,
    };
  },
};
</script>