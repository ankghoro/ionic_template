<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ListContainer />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle  } from '@ionic/vue';
import ListContainer from '@/components/account/ListContainer.vue';

export default defineComponent({
	name: "TabAccount",
	components: {
		IonPage, IonContent, IonHeader, IonToolbar, IonTitle, ListContainer
	}
});
</script>
