<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { Navigation } from './navigation.ts';

	const navigation = new Navigation();

	const items = ref(navigation.items);
	const activeId = ref(navigation.activeId);
</script>

<template>
	<div class="navigation">
		<div class="clearfix row">
			<div class="col-sm-3">
				<div
					class="nav nav-pills flex-column"
					orientation="vertical"
					v-bind:activeId="navigation.activeId"
				>
					<div
						class="nav-item"
						v-for="item in navigation.items"
						:key="item.id"
						@click="navigation.onItemClick(item)"
					>
						<router-link to="#" class="nav-link navigation-link">
							{{ item.name }}
							<!-- <fa-icon class="icon" v-bind:icon="item.icon"></fa-icon>
							 v-bind:to="item.route"
							<span>{{item.name}}</span> -->
						</router-link>
						<!-- <a
							class="nav-link navigation-link"
						>
							{{ item.name }}
						</a> -->
					</div>
				</div>
			</div>
			<div class="col-sm-9">
				<div class="tab-content" animation="true">
					<div class="fade tab-pane active show">
						<!-- <ng-template navItem></ng-template> -->
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
