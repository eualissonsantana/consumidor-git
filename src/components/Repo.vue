<template>
  <div class="container-fluid repo-list">
    <hr />
    <div>
      <h4>
        <a @click="$emit('toggle', rep.owner.login, rep.name)" href="#">{{ rep.name }}</a>
      </h4>
      <h5>{{ rep.description }}</h5>
      <div class="container row infos">
        <span class="material-icons">grade</span>
        <h6 id="stars">{{ rep.stargazers_count }}</h6>
        <span class="material-icons" id="circle">fiber_manual_record</span>
        <h6>{{ rep.language }}</h6>
      </div>
    </div>
  </div>
</template>
<style>
.repo-list {
  margin-bottom: 10px;
}

h4 {
  font-size: 24px;
  color: #0366d6;
}

h5 {
  font-size: 18px;
  color: #555656;
}

.infos h6 {
  margin: 4px 0 0 5px;
  color: #28a745;
}

#circle {
  margin: 2px 0 0 5px;
}
</style>

<script>
export default {
  props: ["rep"]
};
</script>
