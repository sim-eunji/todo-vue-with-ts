<template>
  <div>
    <item
      v-for="item in renderList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
    ></item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import item from "@/components/item.vue";

@Component({
  components: {
    item
  }
})
export default class ItemList extends Vue {
  data: any[] = [
    {
      id: 0,
      title: "타입스크립트 공부",
      status: "active"
    },
    {
      id: 1,
      title: "TDD 공부",
      status: "clear"
    },
    {
      id: 2,
      title: "리액트 공부",
      status: "active"
    }
  ];

  renderList: any[] = this.data;

  @Watch("$route.params.status")
  routeUpdate(newValue: string) {
    if (!newValue) this.renderList = this.data;
    else if (newValue === "active" || newValue === "clear")
      this.renderList = this.data.slice().filter((item: any) => {
        return item.status === newValue;
      });
  }
}
</script>

<style>
</style>