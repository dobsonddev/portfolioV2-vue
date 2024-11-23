import PersonalInfo from "@/components/grid-items/personal-info.vue";
import SlidingText from "@/components/grid-items/sliding-text.vue";
import Map from "@/components/grid-items/map.vue";
import Resume from "@/components/grid-items/resume.vue";
import Theme from "@/components/grid-items/theme.vue";
import Instagram from "@/components/grid-items/instagram.vue";
import Github from "@/components/grid-items/github.vue";
import TechStack from "@/components/grid-items/tech-stack.vue";
import Linkedin from "@/components/grid-items/linkedin.vue";
import Email from "@/components/grid-items/email.vue";
import Education from "@/components/grid-items/education.vue";
import type {IGrid} from "@/utils/IGrid";

export const aboutGrids: IGrid[] = [
	{
		i: 1,
		component: PersonalInfo,
		h: 8,
		w: 5,
		x: 0,
		y: 0,
	},
	{
		i: 2,
		component: SlidingText,
		h: 2,
		w: 5,
		x: 7,
		y: 8,
	},
	{
		i: 3,
		component: Map,
		h: 8,
		w: 3,
		x: 9,
		y: 0,
	},
	{
		i: 4,
		component: Resume,
		h: 3,
		w: 5,
		x: 7,
		y: 10,
	},
	{
		i: 5,
		component: Theme,
		h: 3,
		w: 5,
		x: 7,
		y: 13,
	},
	{
		i: 6,
		component: TechStack,
		h: 8,
		w: 7,
		x: 0,
		y: 8,
	},
	{
		i: 7,
		component: Instagram,
		h: 4,
		w: 2,
		x: 5,
		y: 0,
	},
	{
		i: 8,
		component: Github,
		h: 4,
		w: 2,
		x: 7,
		y: 0,
	},
	{
		i: 9,
		component: Linkedin,
		h: 4,
		w: 2,
		x: 5,
		y: 4,
	},
	{
		i: 10,
		component: Email,
		h: 4,
		w: 2,
		x: 7,
		y: 4,
	},
	{
		i: 11,
		component: Education,
		h: 14,
		w: 6,
		x: 6,
		y: 16,
	},
]