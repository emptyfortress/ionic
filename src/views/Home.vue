<template lang="pug">
ion-page
	ion-content
		ion-button(@click="play") test
		.square
</template>

<script>
import {IonPage, IonContent, IonButton} from '@ionic/vue'
// import useAnimation from '@/animations/move'
import { ref, onMounted } from 'vue'
import { createAnimation } from '@ionic/core'


export default {
	components: {IonPage, IonContent, IonButton},
	setup () {
		const animation = ref(null)
		onMounted(() => {
			animation.value = createAnimation()
				.addElement(document.querySelector('.square'))
				.duration(1500)
				.iterations(Infinity)
				.fromTo('transform', 'translateX(0px)', 'translateX(100px)')
				.fromTo('opacity', '1', '0.2');
		})
		const play = () => {
			animation.value.play()
		}
		return { play }
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
