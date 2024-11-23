import type {IGrid} from "@/utils/IGrid";
import {mobileAboutLayout, mobileAllLayout, mobileexperienceLayout} from "@/utils/mobile-layouts";
import {mdAboutLayout, mdAllLayout, mdexperienceLayout} from "@/utils/md-layouts";
import {useNavbarStateStore} from "@/store/navbar";
import {mainAboutLayout, mainAllLayout, mainexperienceLayout} from "@/utils/main-layouts";
import type {Ref} from "vue";

export function changeLayout(oldLayout: IGrid[], newLayout: IGrid[]): void {
	let index: number = 0
	for (const item of oldLayout) {
		item.x = newLayout[index].x
		item.y = newLayout[index].y
		item.w = newLayout[index].w
		item.h = newLayout[index].h
		index++
	}
}

export function screenLayout(layout: IGrid[], allLayout: IGrid[], aboutLayout: IGrid[], experienceLayout: IGrid[], rowHeight: Ref<number>, isDraggable: Ref<boolean>): void {
	const navState: string = useNavbarStateStore().$state.tab

	if (screen.width < 800) {

		if (navState === 'all') {
			changeLayout(layout, mobileAllLayout)
		} else if (navState === 'about') {
			changeLayout(layout, mobileAboutLayout)
		} else if (navState === 'experiences') {
			changeLayout(layout, mobileexperienceLayout)
		}

		rowHeight.value = 30
		isDraggable.value = false

		changeLayout(allLayout, mobileAllLayout)
		changeLayout(aboutLayout, mobileAboutLayout)
		changeLayout(experienceLayout, mobileexperienceLayout)

	} else if (screen.width < 1200) {

		if (navState === 'all') {
			changeLayout(layout, mdAllLayout)
		} else if (navState === 'about') {
			changeLayout(layout, mdAboutLayout)
		} else if (navState === 'experience') {
			changeLayout(layout, mdexperienceLayout)
		}

		rowHeight.value = 11
		isDraggable.value = true

		changeLayout(allLayout, mdAllLayout)
		changeLayout(aboutLayout, mdAboutLayout)
		changeLayout(experienceLayout, mdexperienceLayout)
	} else if (screen.width > 1200) {

		if (navState === 'all') {
			changeLayout(layout, mainAllLayout)
		} else if (navState === 'about') {
			changeLayout(layout, mainAboutLayout)
		} else if (navState === 'experience') {
			changeLayout(layout, mainexperienceLayout)
		}

		rowHeight.value = 27
		isDraggable.value = true

		changeLayout(allLayout, mainAllLayout)
		changeLayout(aboutLayout, mainAboutLayout)
		changeLayout(experienceLayout, mainexperienceLayout)
	}
}

export function tabLayout(layout: IGrid[], allLayout: IGrid[], aboutLayout: IGrid[], experienceLayout: IGrid[]): void {
	const navState: string = useNavbarStateStore().$state.tab
	if (navState === 'all') {
		changeLayout(layout, allLayout)
	} else if (navState === 'about') {
		changeLayout(layout, aboutLayout)
	} else if (navState === 'experience') {
		changeLayout(layout, experienceLayout)
	}
}