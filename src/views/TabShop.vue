<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Shop</ion-title>
				<ion-buttons slot="end">
					<ion-button>
						<ion-icon :icon="cart"></ion-icon>
					</ion-button>
					<ion-badge class="badges-custom-button" color="danger">5</ion-badge>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Shop</ion-title>
				</ion-toolbar>
			</ion-header>

			<ExploreContainer name="Tab 1 page" />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonBadge  } from '@ionic/vue';
import { cart } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
	name: "TabShop",
	components: {
		IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonBadge, ExploreContainer
	},
	setup() {
		return { cart }
	}
});
</script>
