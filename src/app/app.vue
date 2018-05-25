<template>
  <div id="app" class="container">
    <input type="text" class="input" placeholder="Enter your email!" v-model="userEmail" @keydown.13="submitToCheck()" />
    <div class="info">
      {{JSON.stringify(result)}}
    </div>
    <div class="info">
      目前報名人數：{{totalDisplay}}
    </div>
  </div>
</template>

<script src="./app.js">
</script>