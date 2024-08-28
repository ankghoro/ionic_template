<template>
	<ion-page>
		<ion-tabs @ionTabsDidChange="setCurrentTab($event)">
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="shop" href="/tabs/shop" mode="ios">
					<ion-icon :icon="bag" v-if="current_tab == 'shop'"></ion-icon>
					<ion-icon :icon="bagOutline" v-else></ion-icon>
					<ion-label>Shop</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="blog" href="/tabs/blog" mode="ios">
					<ion-icon :icon="people" v-if="current_tab == 'blog'"></ion-icon>
					<ion-icon :icon="peopleOutline" v-else></ion-icon>
					<ion-label>Blog</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="account" href="/tabs/account" mode="ios">
					<ion-icon :icon="personCircle" v-if="current_tab == 'account'"></ion-icon>
					<ion-icon :icon="personCircleOutline" v-else></ion-icon>
					<ion-label>Account</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { bag, bagOutline, people, peopleOutline, personCircle, personCircleOutline } from 'ionicons/icons';

export default defineComponent({
	name: "Tabs",
	components: {
		IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet
	},
	methods: {
		setCurrentTab(ev) {
			this.current_tab = ev.tab;
		}
	},
	data: () => ({
		current_tab: ''
	}),
	setup() {
		return { bag, bagOutline, people, peopleOutline, personCircle, personCircleOutline }
	}
});
</script>
