<template lang="pug">
ion-page
	ion-content
		ion-button(@click="play") play
		ion-button(@click="stop") stop
		.square
</template>

<script>
import {IonPage, IonContent, IonButton} from '@ionic/vue'
import useAnimation from '@/animations/move'
import { ref, onMounted } from 'vue'

export default {
	components: {IonPage, IonContent, IonButton},
	setup () {
		const animation = ref({})
		onMounted(() => animation.value = useAnimation());
		const play = () => animation.value.play()
		const stop = () => animation.value.pause()
		return { play, stop }
	}
}
</script>

<style scoped lang="scss">

.square {
	width: 100px;
	height: 100px;
	background: red;
	margin: 1rem;
}
</style>
