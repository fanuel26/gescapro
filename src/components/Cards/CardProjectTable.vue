<template>
				
	<!-- Projects Table Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h6>Classement des meilleurs collecteurs</h6>			
					<p>par jour</p>	
				</a-col>
				<!-- <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<a-radio-group v-model="projectHeaderBtns" size="small">
						<a-radio-button value="all">Jour</a-radio-button>
						<a-radio-button value="online">Mois</a-radio-button>
						<a-radio-button value="stores">Année</a-radio-button>
					</a-radio-group>
				</a-col> -->
			</a-row>
		</template>
		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template slot="completion" slot-scope="completion">
				<span class="font-bold text-muted text-sm">{{ completion.label ? completion.label : completion }}</span>
				<!--<a-progress :percent="completion.value ? completion.value : completion" :show-info="false" size="small" :status="completion.status ? completion.status : 'normal'" />-->
			</template>
		</a-table>
	</a-card>
	<!-- / Projects Table Card -->

</template>

<script>

	export default ({
		props: {
			data: {
				type: Array,
				default: () => [],
			},
			columns: {
				type: Array,
				default: () => [],
			},
		},
		data() {
			return {

				// Active button for the "Projects" table's card header radio button group.
				projectHeaderBtns: 'all',
			}
		},
	})

</script>