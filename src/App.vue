<script setup lang="ts"></script>

<template>
  <v-app>
    <v-main>
      <v-app-bar title="weather">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
