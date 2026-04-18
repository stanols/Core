<script setup lang="ts">
	import { reactive, onMounted } from 'vue';
	import { adventureService } from '../../services/adventureService.ts';
	import AdventureModel from '../../models/adventure.model.ts';
	import { AuthorizationHelper } from '../../helpers/authorization.helper.ts';

	const model = reactive({
		adventures: [] = [] as AdventureModel[],
		showModal: false,
		adventureModel: {
			name: '',
			description: '',
			startsOn: null,
			endsOn: null
		}
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

	const refreshAdventures = async (): Promise<void> => {
		const adventures = await adventureService.getAdventuresList();

		model.adventures = adventures;
	}

	const onShowModal = async (adventureModel: any): Promise<boolean> => {
		model.adventureModel = adventureModel;
		model.showModal = true;

		return model.showModal;
	}

	const onSaveModal = async (): Promise<void> => {
		const authorizationData = AuthorizationHelper.getAuthorizationData();
		const adventureModel = model.adventureModel;
		//TODO: startsOn, endsOn values
		const request = {
			...adventureModel,
			createdById: authorizationData.id
		};

		await adventureService.create(request);

		model.showModal = false;
	};

	const onCloseModal = (): void => {
		model.showModal = false;
	};

	const onCreate = async (): Promise<void> => {
		model.showModal = true;
		const result = await onShowModal({
			name: '',
			description: '',
			startsOn: null,
			endsOn: null
		});

		await refreshAdventures();
	};

	const onEdit = async (adventure: any): Promise<void> => {
		const adventureModel = await adventureService.get(adventure.id);

		const result = await onShowModal({
			name: adventureModel.name,
			description: adventureModel.description,
			startsOn: adventureModel.startsOn,
			endsOn: adventureModel.endsOn
		});
	};

	const onRemove = async (adventureId: number) => {
		await adventureService.removeAdventure(adventureId);

		await refreshAdventures();
	};
</script>

<template>
	<div class="adventures">
		<div class="adventure-title row">
			<div class="col">
				<h3>Adventures</h3>
				<button type="button" class="btn btn-primary btn-sm" @click="onCreate()">
					Create
				</button>
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

		<div
			class="modal fade"
			tabindex="-1"
			:class="{ show: model.showModal }"
			:style="{ display: model.showModal ? 'block' : 'none' }"
			role="dialog"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Adventure</h5>
						<button type="button" class="btn-close" @click="onCloseModal()"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label for="name" class="form-label">Name</label>
								<input id="name" name="name" class="form-control" type="text" placeholder="Name" v-model="model.adventureModel.name" />
							</div>
							<div class="form-group mt-2">
								<label for="description" class="form-label">Description</label>
								<textarea id="description" name="description" class="form-control" placeholder="Description" v-model="model.adventureModel.description"></textarea>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button class="btn btn-secondary btn-sm" @click="onCloseModal()">Cancel</button>
						<button class="btn btn-primary btn-sm" @click="onSaveModal()">Save</button>
					</div>
				</div>
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
