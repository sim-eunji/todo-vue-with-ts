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
import { mapGetters } from "vuex";

@Component({
  components: {
    item
  },
  computed: {
    ...mapGetters(["allTodoList", "activeTodoList", "clearTodoList"])
  }
})
export default class ItemList extends Vue {
  public renderList: any[] = [];

  public created() {
    this.$store.dispatch("initData");
  }

  public initRenderList(status: "active" | "clear") {
    if (!status) {
      this.renderList = this.allTodoList;
    } else if (status === "active") {
      this.renderList = this.activeTodoList;
    } else if (status === "clear") {
      this.renderList = this.clearTodoList;
    }
  }

  @Watch("$route.params.status")
  public routeUpdate(newValue: "active" | "clear") {
    this.initRenderList(newValue);
  }

  @Watch("$store.state.todoList", { deep: true })
  public stateUpdate() {
    const status: "active" | "clear" = this.$route.params.status;
    this.initRenderList(status);
  }
}
</script>

<style>
</style>