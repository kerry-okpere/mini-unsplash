<template>
  <main class="landing">
    <header class="landing__backdrop">
    </header>
    <div class="landing__backdrop-content">
      <Search />
      <!-- <section class="landing__backdrop-content-photo"> -->
        <!-- <Placeholder v-for="i in 3" :key="i"/> -->
        <!-- <Photo /> -->
      
        <div v-if="errMsg"> {{ errMsg }} </div>
        <Suspense>
          <template #default>
            <section class="landing__backdrop-content-photo">
              <Photo />
            </section>
          </template>
          <template #fallback>
            <section class="landing__backdrop-content-photo">
              <Placeholder v-for="i in 6" :key="i"/>
            </section>
          </template>
        </Suspense>
        
      <!-- </section> -->
    </div>
  </main>
</template>

<script>
// use composition api
import Search from '@/components/Search';
import Placeholder from '@/components/Placeholder';
import Photo from '@/components/Photo';

export default {
  name: 'LandingPage',
  components: {
    Search,
    Placeholder,
    Photo
  },
};
</script>

<style scoped>
@import '../../assets/global.css';
@import './index.css';
</style>