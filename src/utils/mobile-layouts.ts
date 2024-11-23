import PersonalInfo from "@/components/grid-items/personal-info.vue";
import SlidingText from "@/components/grid-items/sliding-text.vue";
import Map from "@/components/grid-items/map.vue";
import Resume from "@/components/grid-items/resume.vue";
import Theme from "@/components/grid-items/theme.vue";
import Instagram from "@/components/grid-items/socials/instagram.vue";
import Github from "@/components/grid-items/socials/github.vue";
import TechStack from "@/components/grid-items/tech-stack.vue";
import Linkedin from "@/components/grid-items/socials/linkedin.vue";
import Email from "@/components/grid-items/socials/email.vue";
import Education from "@/components/grid-items/education.vue";
import type {IGrid} from "@/utils/IGrid";
import LogiMap from "@/components/grid-items/projects/logimap.vue";

export const mobileLayout: IGrid[] = [
	{
		i: 1,
		component: PersonalInfo,
		h: 8,
		w: 12,
		x: 0,
		y: 1,
	},
	{
		i: 2,
		component: SlidingText,
		h: 1,
		w: 12,
		x: 0,
		y: 0,
	},
	{
		i: 3,
		component: Map,
		h: 5,
		w: 12,
		x: 0,
		y: 15,
	},
	{
		i: 4,
		component: Resume,
		h: 3,
		w: 12,
		x: 0,
		y: 9,
	},
	{
		i: 5,
		component: Theme,
		h: 3,
		w: 12,
		x: 0,
		y: 12,
	},
	{
		i: 6,
		component: TechStack,
		h: 7,
		w: 12,
		x: 0,
		y: 28,
	},
	{
		i: 7,
		component: Instagram,
		h: 4,
		w: 6,
		x: 0,
		y: 20,
	},
	{
		i: 8,
		component: Github,
		h: 4,
		w: 6,
		x: 6,
		y: 20,
	},
	{
		i: 9,
		component: Linkedin,
		h: 4,
		w: 6,
		x: 0,
		y: 24,
	},
	{
		i: 10,
		component: Email,
		h: 4,
		w: 6,
		x: 6,
		y: 24,
	},
	{
		i: 11,
		component: Education,
		h: 17,
		w: 12,
		x: 0,
		y: 33,
	},
	{
		i: 12,
		component: LogiMap,
		h: 9,
		w: 12,
		x: 0,
		y: 50,
	},
	// {
	// 	i: 13,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 59,
	// },
	// {
	// 	i: 14,
	// 	component: project,
	// 	h: 10,
	// 	w: 12,
	// 	x: 0,
	// 	y: 68,
	// },
	// {
	// 	i: 15,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 78,
	// },
	// {
	// 	i: 16,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 87,
	// },
	// {
	// 	i: 17,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 96,
	// },
]

export const mobileAllLayout: IGrid[] = [
	{
		i: 1,
		component: PersonalInfo,
		h: 8,
		w: 12,
		x: 0,
		y: 1,
	},
	{
		i: 2,
		component: SlidingText,
		h: 1,
		w: 12,
		x: 0,
		y: 0,
	},
	{
		i: 3,
		component: Map,
		h: 5,
		w: 12,
		x: 0,
		y: 15,
	},
	{
		i: 4,
		component: Resume,
		h: 3,
		w: 12,
		x: 0,
		y: 9,
	},
	{
		i: 5,
		component: Theme,
		h: 3,
		w: 12,
		x: 0,
		y: 12,
	},
	{
		i: 6,
		component: TechStack,
		h: 7,
		w: 12,
		x: 0,
		y: 28,
	},
	{
		i: 7,
		component: Instagram,
		h: 4,
		w: 6,
		x: 0,
		y: 20,
	},
	{
		i: 8,
		component: Github,
		h: 4,
		w: 6,
		x: 6,
		y: 20,
	},
	{
		i: 9,
		component: Linkedin,
		h: 4,
		w: 6,
		x: 0,
		y: 24,
	},
	{
		i: 10,
		component: Email,
		h: 4,
		w: 6,
		x: 6,
		y: 24,
	},
	{
		i: 11,
		component: Education,
		h: 17,
		w: 12,
		x: 0,
		y: 35,
	},
	{
		i: 12,
		component: LogiMap,
		h: 9,
		w: 12,
		x: 0,
		y: 52,
	},
	// {
	// 	i: 13,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 61,
	// },
	// {
	// 	i: 14,
	// 	component: project,
	// 	h: 10,
	// 	w: 12,
	// 	x: 0,
	// 	y: 70,
	// },
	// {
	// 	i: 15,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 80,
	// },
	// {
	// 	i: 16,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 89,
	// },
	// {
	// 	i: 17,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 98,
	// },
]

export const mobileAboutLayout: IGrid[] = [
	{
		i: 1,
		component: PersonalInfo,
		h: 8,
		w: 12,
		x: 0,
		y: 0,
	},
	{
		i: 2,
		component: SlidingText,
		h: 1,
		w: 12,
		x: 0,
		y: 29,
	},
	{
		i: 3,
		component: Map,
		h: 5,
		w: 12,
		x: 0,
		y: 8,
	},
	{
		i: 4,
		component: Resume,
		h: 3,
		w: 12,
		x: 0,
		y: 30,
	},
	{
		i: 5,
		component: Theme,
		h: 3,
		w: 12,
		x: 0,
		y: 33,
	},
	{
		i: 6,
		component: TechStack,
		h: 8,
		w: 12,
		x: 0,
		y: 21,
	},
	{
		i: 7,
		component: Instagram,
		h: 4,
		w: 6,
		x: 0,
		y: 13,
	},
	{
		i: 8,
		component: Github,
		h: 4,
		w: 6,
		x: 6,
		y: 13,
	},
	{
		i: 9,
		component: Linkedin,
		h: 4,
		w: 6,
		x: 0,
		y: 17,
	},
	{
		i: 10,
		component: Email,
		h: 4,
		w: 6,
		x: 6,
		y: 17,
	},
	{
		i: 11,
		component: Education,
		h: 17,
		w: 12,
		x: 0,
		y: 36,
	},
	{
		i: 12,
		component: LogiMap,
		h: 9,
		w: 12,
		x: 0,
		y: 53,
	},
	// {
	// 	i: 13,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 62,
	// },
	// {
	// 	i: 14,
	// 	component: project,
	// 	h: 10,
	// 	w: 12,
	// 	x: 0,
	// 	y: 71,
	// },
	// {
	// 	i: 15,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 81,
	// },
	// {
	// 	i: 16,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 90,
	// },
	// {
	// 	i: 17,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 99,
	// },
]

export const mobileexperienceLayout: IGrid[] = [
	{
		i: 1,
		component: PersonalInfo,
		h: 8,
		w: 12,
		x: 0,
		y: 79,
	},
	{
		i: 2,
		component: SlidingText,
		h: 1,
		w: 12,
		x: 0,
		y: 78,
	},
	{
		i: 3,
		component: Map,
		h: 8,
		w: 12,
		x: 0,
		y: 102,
	},
	{
		i: 4,
		component: Resume,
		h: 3,
		w: 12,
		x: 0,
		y: 0,
	},
	{
		i: 5,
		component: Theme,
		h: 3,
		w: 12,
		x: 0,
		y: 3,
	},
	{
		i: 6,
		component: TechStack,
		h: 7,
		w: 12,
		x: 0,
		y: 87,
	},
	{
		i: 7,
		component: Instagram,
		h: 4,
		w: 6,
		x: 0,
		y: 94,
	},
	{
		i: 8,
		component: Github,
		h: 4,
		w: 6,
		x: 6,
		y: 94,
	},
	{
		i: 9,
		component: Linkedin,
		h: 4,
		w: 6,
		x: 0,
		y: 98,
	},
	{
		i: 10,
		component: Email,
		h: 4,
		w: 6,
		x: 6,
		y: 98,
	},
	{
		i: 11,
		component: Education,
		h: 17,
		w: 12,
		x: 0,
		y: 61,
	},
	{
		i: 12,
		component: LogiMap,
		h: 9,
		w: 12,
		x: 0,
		y: 6,
	},
	// {
	// 	i: 13,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 15,
	// },
	// {
	// 	i: 14,
	// 	component: project,
	// 	h: 10,
	// 	w: 12,
	// 	x: 0,
	// 	y: 24,
	// },
	// {
	// 	i: 15,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 34,
	// },
	// {
	// 	i: 16,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 43,
	// },
	// {
	// 	i: 17,
	// 	component: project,
	// 	h: 9,
	// 	w: 12,
	// 	x: 0,
	// 	y: 52,
	// },
]
