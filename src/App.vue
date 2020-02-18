<template>
    <div id="app" :class="$route.name.toLowerCase()">
      <router-view :key="$route.fullPath"/>
    </div>
</template>

<script>

</script>