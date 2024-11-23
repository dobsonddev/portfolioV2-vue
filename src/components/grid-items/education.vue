<script lang="ts" setup>

interface IEducation {
	type: string;
	where: string;
	date: string;
}

const educations: IEducation[] = [
  {
    type: 'B.S. in Computer Science',
    where: 'College of Charleston',
    date: 'May 2022 - May 2024'
  },
  {
    type: '14-week NodeJS WebDev Bootcamp',
    where: 'JRS Coding School',
    date: '2020 - 2021'
  },
	{
		type: 'B.S. in Accounting',
		where: 'College of Charleston',
		date: '2013 - 2017'
	}
]

</script>

<template>
	<div class="h-full w-full py-7 px-8 text-[#020202] dark:text-wh">
		<div class="uppercase mb-6">
			<p class="mb-1.5 text-[#706e8b] font-semibold text-[0.78rem] tracking-wide max-sm:text-lg max-sm:mb-2">7 years
				of</p>
			<p class="font-semibold text-xl tracking-tight">Education</p>
		</div>
		<div class="font-semibold max-sm:flex max-sm:flex-col justify-between max-sm:h-[85%]">
			<div v-for="item in educations" class="grid grid-cols-3 mb-5 max-sm:flex max-sm:flex-col">
				<div
					class="flex justify-start items-center col-span-2 font-semibold text-[1.5rem]/normal max-sm:text-xl max-sm:mb-2">
					{{ item.type }}
				</div>
				<div class="col-span-1 flex flex-col items-end justify-center max-sm:items-start">
					<p class="mb-1.5 text-right dark:text-wh/90 text-black/90 max-sm:text-lg max-sm:font-medium">{{
							item.where
						}}</p>
					<p class="text-sm dark:text-gray-300/70 font-medium text-black/60 max-sm:text-base">{{ item.date }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>