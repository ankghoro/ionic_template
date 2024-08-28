<template>
	<div id="container">
		<div class="account-area">
			<div class="account-head-area">MEME</div>
			<div class="account-body-area">
				<div class="account-card-icon-top">
					<ion-card>
						<ion-card-content class="padding-7-10">
							<ion-grid class="padding-0">
								<ion-row>
									<ion-col class="icon-top">
										<div>
											<ion-icon :icon="bag"></ion-icon>
										</div>
										<div>
											<ion-label>My Order</ion-label>
										</div>
									</ion-col>
									<ion-col class="icon-top">
										<div>
											<ion-badge class="badges-custom" color="danger" slot="end">5</ion-badge>
											<ion-icon :icon="heartOutline"></ion-icon>
										</div>
										<div>
											<ion-label>Whishlist</ion-label>
										</div>
									</ion-col>
									<ion-col class="icon-top">
										<div>
											<ion-icon :icon="notificationsOutline"></ion-icon>
											<ion-badge class="badges-custom" color="danger">10</ion-badge>
										</div>
										<div>
											<ion-label>Notification</ion-label>
										</div>
									</ion-col>
								</ion-row>
							</ion-grid>
						</ion-card-content>
					</ion-card>
				</div>
				<div class="account-card-list">
					<ion-list>
						<ion-item class="margin-5-0">
							<ion-icon class="default-list-font margin-right-10" :icon="person"></ion-icon>
							<ion-label class="default-list-font">My Profile</ion-label>
						</ion-item>
						<ion-item class="margin-5-0">
							<ion-icon class="default-list-font margin-right-10" :icon="cog"></ion-icon>
							<ion-label class="default-list-font">Settings</ion-label>
						</ion-item>
					</ion-list>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCol, IonRow, IonGrid, IonList, IonItem, IonCardContent, IonCard, IonIcon, IonLabel, IonBadge } from '@ionic/vue';
import { bag, heartOutline, notificationsOutline, person, cog } from 'ionicons/icons';

export default defineComponent({
	name: "ListContainer",
	components: {
		IonCol, IonRow, IonGrid, IonList, IonItem, IonCardContent, IonCard, IonIcon, IonLabel, IonBadge
	},
	setup() {
		return { bag, heartOutline, notificationsOutline, person, cog }
	}
});
</script>