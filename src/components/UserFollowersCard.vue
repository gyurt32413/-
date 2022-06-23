<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.followersLength }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in profile.followers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id } }"
      >
        <img
          :src="follower.image | emptyImage"
          width="60px"
          height="60px"
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