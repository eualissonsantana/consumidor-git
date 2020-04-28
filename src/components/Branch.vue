<template>
  <div class="card branch-list">
    <div>
      <h6>{{ branch.name }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ["branch"]
};
</script>

<style>
.branch-list {
  padding: 5px 10px;
  margin: 5px;
  background-color: #0366d6;
  color: #fff;
}
</style>