<template>
  <div>
    <h1>TODO LIST</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">All</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">Active</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">Clear</a>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style>
</style>