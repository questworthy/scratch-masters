<script>
	import gender from '$lib/assets/gender.png';
	import scratch from '$lib/assets/scratch.png';
	const style =
		'rounded-2xl px-6 py-4 flex flex-col justify-start drop-shadow-lg hover:scale-110 hover:-translate-y-8 hover:z-10 transition-all duration-200 ease-in-out cursor-pointer';
</script>

<div class="mx-auto max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
	<div class="{style} bg-[#c3b2e7] text-[#52225E] hover:rotate-6">
		<img class="m-0" src={gender} alt="" />
		<p class="mb-0 text-[#52225E] font-bold text-4xl">Gender Equity</p>
		<p class="font-light text-2xl">
			Team up for fairness! Let's explore how everyone can shine bright.
		</p>
	</div>
	<div class="{style} bg-[#c9d990] text-[#1C471F] hover:rotate-3">
		<img class="m-0" src={scratch} alt="" />
		<p class="mb-0 text-[#1C471F] font-bold text-4xl">Scratch Basics</p>
		<p class="font-light text-2xl">
			Coding fun starts here! Learn the basics and become a Scratch master!
		</p>
	</div>
</div>
