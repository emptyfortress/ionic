<template lang="pug">
ion-page
	ion-content
		ion-button(@click="play") test
		.square
</template>

<script>
import {IonPage, IonContent, IonButton} from '@ionic/vue'
import { createAnimation, Animation } from '@ionic/core'

export default {
	components: {IonPage, IonContent, IonButton},
	data () {
		return {
			animation: null
		}
	},
	mounted() {
		this.animation = createAnimation()
			.addElement(document.querySelector('.square'))
			.duration(1500)
			.iterations(Infinity)
			.fromTo('transform', 'translateX(0px)', 'translateX(100px)')
			.fromTo('opacity', '1', '0.2');
	},
	methods: {
		play () {
			this.animation.play()
		}
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
