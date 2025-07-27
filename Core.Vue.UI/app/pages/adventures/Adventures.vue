<script setup lang="ts">
</script>

<template>
	<div class="adventures">
		<div class="adventure-title row">
			<div class="col">
				<h3>Adventures</h3>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
