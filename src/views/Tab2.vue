<template lang="pug">
ion-page
	ion-header
		ion-toolbar
			ion-title Tab 1
	ion-content(:fullscreen="true")
		ion-header(collapse="condense")
			ion-toolbar
				ion-title(size="large") Tab 2
		
		ExploreContainer( name="Tab 2 page" )
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
	name: 'Tab2',
	components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
