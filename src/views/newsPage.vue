<template>
    <div>
        <ul>
            <li v-for="i in newlist" :key="i.id">
                <!-- <router-link :to="`/news/newsDetail?id=${i.id}&title=${i.title}`">{{ i.title }}</router-link> -->
                <router-link :to="{
                    path: '/news/newsDetail',
                    query: {
                        id: i.id,
                        title: i.title
                    }
                }">{{ i.title }}</router-link>|
                  <!-- <router-link :to="`/news/newsDetail/${i.id}/${i.title}`">{{ i.title }}</router-link> -->
                  <router-link :to="{
                    name: 'newsDetail',
                    params: {
                        id: i.id,
                        title: i.title
                    }
                  }">{{ i.title }}</router-link>
            </li>
        </ul>
        <div class="show">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const newlist = reactive([
    { id: 1, title: '新闻1' },
    { id: 2, title: '新闻2' },
    { id: 3, title: '新闻3' },
    { id: 4, title: '新闻4' },
]);
</script>

<style scoped></style>