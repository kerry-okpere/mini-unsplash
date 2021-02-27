<template>
  <figure v-for="(photo, index) in album.results" :key="index" class="img">
		<!-- send loading prop if loading show place holder, else show products-->
    <img :src="photo.cover_photo.urls.regular" alt="" srcset="">
    <figcaption class="img_caption">
      <h1 class="img_caption-name">{{photo.user.name}}</h1>
      <p class="img_caption-location">Location</p>
    </figcaption>
	</figure> 
  <section>
    <!-- <button >click</button> -->
  </section> 
</template>
<script>
import { ref } from 'vue'
import { fetchAlbum } from '@/api/Photo'

// const toggleModal = (visible) => !visible

// const openModal = () => true

// const closeModal = () => false

export default {
  async setup(props, context){
    const album = ref(await fetchAlbum())
    let visible = ref(null)
    const toggle = (visible) => !visible

    const open = () => visible = true

    const close = () => visible = false
    console.log(album.value)
    return{
      album,
      visible,
      toggle,
      open,
      close
    }
  },
}
</script>
<style scoped>
@import '../../assets/global.css';
@import './index.css';
</style>