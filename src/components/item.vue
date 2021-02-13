<template>
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" aria-label="..." :checked="status === 'clear'" @change="changeStatus" />
    </span>
    <input type="text" class="form-control" v-model="title" aria-label="..." />
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="removeItem">X</button>
    </span>
  </div>
  <!-- /input-group -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Item extends Vue {
  @Prop() readonly id!: string;
  @Prop() readonly title!: string;
  @Prop() readonly status!: "active" | "clear";

  changeStatus() {}
  removeItem() {}
}
</script>

<style>
.input-group {
  margin-bottom: 1rem;
}
</style>