// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Borough Furnishings - Engineering Programme',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mantrobuslawal/bfstore-programme' }],
			sidebar: [
{label: 'Overview', items: [{ autogenerate: { directory: 'overview'} }]}, 
{label: 'Profiles', items: [{ autogenerate: { directory: 'profiles' }}]},
{label: 'Projects', items: [{ autogenerate: { directory: 'projects' }}]},
{label: 'Evidence', items: [{ autogenerate: { directory: 'evidence' }}]},
{label: 'Engineering guide', items: [{ autogenerate: { directory: 'engineering-guide'} }]},
],
		}),
	],
});
