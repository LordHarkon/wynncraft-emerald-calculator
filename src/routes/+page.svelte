<script lang="ts">
	const values = {
		emerald: 1,
		emerald_block: 64,
		liquid_emerald: 4096,
		stx: 262144
	};

	let emerald = 0;
	let emerald_block = 0;
	let liquid_emerald = 0;
	let stx = 0;

	const changeValueOthers = (value: number, key: string) => {
		switch (key) {
			case 'emerald':
				emerald_block = value / values.emerald_block;
				liquid_emerald = value / values.liquid_emerald;
				stx = value / values.stx;
				break;
			case 'emerald_block':
				emerald = value * values.emerald_block;
				liquid_emerald = emerald / values.liquid_emerald;
				stx = emerald / values.stx;
				break;
			case 'liquid_emerald':
				emerald = value * values.liquid_emerald;
				emerald_block = emerald / values.emerald_block;
				stx = emerald / values.stx;
				break;
			case 'stx':
				emerald = value * values.stx;
				emerald_block = emerald / values.emerald_block;
				liquid_emerald = emerald / values.liquid_emerald;
				break;
			default:
				break;
		}
	};
</script>

<div class="flex min-h-screen w-full items-center justify-center">
	<div class="flex h-[724px] w-96 flex-col items-center rounded-md border-2 border-white/20 py-2">
		<span class="text-center text-4xl font-bold">Wynncraft Emerald Calculator</span>
		<div class="flex w-full flex-col items-center space-y-2 p-4">
			<img src="/emerald.webp" alt="Emerald" class="max-h-20" />
			<input
				type="number"
				name="emerald"
				class="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
				min={0}
				bind:value={emerald}
				on:input={() => changeValueOthers(emerald, 'emerald')}
			/>
		</div>
		<div class="flex w-full flex-col items-center space-y-2 p-4">
			<img src="/emerald_block.webp" alt="Emerald" class="max-h-20" />
			<input
				type="number"
				name="emerald_block"
				class="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
				min={0}
				bind:value={emerald_block}
				on:input={() => changeValueOthers(emerald_block, 'emerald_block')}
			/>
		</div>
		<div class="flex w-full flex-col items-center space-y-2 p-4">
			<img src="/liquid_emerald.webp" alt="Emerald" class="max-h-20" />
			<input
				type="number"
				name="liquid_emerald"
				class="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
				min={0}
				bind:value={liquid_emerald}
				on:input={() => changeValueOthers(liquid_emerald, 'liquid_emerald')}
			/>
		</div>
		<div class="flex w-full flex-col items-center space-y-6 p-4">
			<div class="relative h-20 w-20">
				<img src="/liquid_emerald.webp" alt="Emerald" class="absolute -left-3 -top-3 max-h-20" />
				<img src="/liquid_emerald.webp" alt="Emerald" class="absolute left-0 top-0 max-h-20" />
				<img src="/liquid_emerald.webp" alt="Emerald" class="absolute left-3 top-3 max-h-20" />
			</div>
			<input
				type="number"
				name="stx"
				class="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
				min={0}
				bind:value={stx}
				on:input={() => changeValueOthers(stx, 'stx')}
			/>
		</div>
	</div>
</div>
