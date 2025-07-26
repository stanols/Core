<script setup lang="ts">
	import { ref, reactive, onMounted } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import Adventures from '../../adventures/Adventures.vue';
	import Experiences from '../../experiences/Experiences.vue';
	import Chat from '../../chat/Chat.vue';

	let activeId = ref(0);
	const items = ref([
		{
			id: 0,
			name: 'Adventures',
			icon: "th-list",
			route: 'adventures',
			component: Adventures
		},
		{
			id: 1,
			name: 'Experiences',
			icon: "tasks",
			route: 'experiences',
			component: Experiences
		},
		{
			id: 2,
			name: 'Group Chat',
			icon: "comment",
			route: 'chat',
			component: Chat
		}
	]);

	const onItemClick = (item: any) => {
		activeId.value = item.id;
	};
</script>

<template>
	<div class="navigation">
		<div class="clearfix row">
			<div class="col-sm-3">
				<div
					class="nav nav-pills flex-column"
					orientation="vertical"
					v-bind:activeId="activeId"
				>
					<div
						class="nav-item"
						v-for="item in items"
						:key="item.id"
						@click="onItemClick(item)"
					>
						<!-- <router-link v-bind:to="item.route" :class="['nav-link', 'navigation-link', { active: item.id === activeId }]"> -->
							<font-awesome-icon class="icon" v-bind:icon="item.icon" />
							{{ item.name }}
						<!-- </router-link> -->
					</div>
				</div>
			</div>
			<div class="col-sm-9">
				<div class="tab-content" animation="true">
					<div class="fade tab-pane active show">
						<!-- <ng-template navItem></ng-template> class="nav-link navigation-link" -->
						<component :is="items[activeId].component" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.navigation {
		.nav-pills {
			.nav-item {
				a.nav-link {
					-webkit-touch-callout: none;
					-webkit-user-select: none;
					-ms-user-select: none;
					user-select: none;
					cursor: pointer;
					outline: none;
					border-radius: 0px;
					color: #565e64;
				}
		
				a.nav-link.active {
					background-color: #565e64;
					color: #ffffff;
				}
		
				.icon {
					margin-right: 4px;
				}
			}
		}
	}
</style>
