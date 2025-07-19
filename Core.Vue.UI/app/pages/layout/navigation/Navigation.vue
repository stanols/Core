<script setup lang="ts">
	import { ref, reactive, onMounted } from 'vue';
	import { useRoute, useRouter } from 'vue-router';

	let activeId = ref(1);
	const items = ref([
		{
			id: 1,
			name: 'Adventures',
			icon: "th-list",
			route: 'adventures'
		},
		{
			id: 2,
			name: 'Experiences',
			icon: "tasks",
			route: 'experiences'
		},
		{
			id: 3,
			name: 'Group Chat',
			icon: "comment",
			route: 'chat'
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
						<router-link v-bind:to="item.route" :class="['nav-link', 'navigation-link', { active: item.id === activeId }]">
							<font-awesome-icon class="icon" v-bind:icon="item.icon" />
							{{ item.name }}
						</router-link>
					</div>
				</div>
			</div>
			<div class="col-sm-9">
				<div class="tab-content" animation="true">
					<div class="fade tab-pane active show">
						<!-- <ng-template navItem></ng-template> class="nav-link navigation-link" -->
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
