<script setup lang="ts">
	import { reactive, onMounted } from 'vue';
	import { adventureService } from '../../services/adventureService.ts';
	import AdventureModel from '../../models/adventure.model.ts';

	const model = reactive({
		adventures: [] = [] as AdventureModel[]
	});

	onMounted(async () => {
		try {
			const adventures = await adventureService.getAdventuresList();
			model.adventures = adventures
		} catch (err) {
			console.error('Failed to load adventures:', err);
			model.adventures = [] as AdventureModel[];
		}
	});

	const onRemove = async (adventureId: number) => {
		await adventureService.removeAdventure(adventureId);

		model.adventures = model.adventures
			.filter(a => a.id !== adventureId);
	};

	const onEdit = (adventure: any) => {

	};
</script>

<template>
	<div class="adventures">
		<div class="adventure-title row">
			<div class="col">
				<h3>Adventures</h3>
			</div>
		</div>
		<div class="adventure bg-light row" v-for="adventure in model.adventures" :key="adventure.id">
			<div class="col">
				<div>Name: {{adventure.name}}</div>
			</div>
			<div class="col">
				<div>Description: {{adventure.description}}</div>
			</div>
			<div class="col">
			<button class="btn btn-danger btn-sm" @click="onRemove(adventure.id)">
				Remove
			</button>
			<button class="btn btn-primary btn-sm" @click="onEdit(adventure)">
				Edit
			</button>
		</div>
	</div>

	</div>
</template>

<style lang="scss" scoped>
	.adventures {
		.adventure-title {
			margin-top: 10px;

			.col {
				h3 {
					display: inline-block;
				}

				button {
					display: inline-block;
					float: right;
					margin: 5px 0 0 5px;
				}
			}
		}

		.adventure {
			padding: 10px 0 10px 0;
			margin: 5px 0 5px 0;

			.col {
				button {
					display: inline-block;
					float: right;
					margin-left: 5px;
				}
			}
		}
	}
</style>
