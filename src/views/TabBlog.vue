<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Blog</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Blog</ion-title>
				</ion-toolbar>
			</ion-header>

			<ExploreContainer name="Tab 2 page" />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle  } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
	name: "TabShop",
	components: {
		IonPage, IonContent, IonHeader, IonToolbar, IonTitle, ExploreContainer
	}
});
</script>
