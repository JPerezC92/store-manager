import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	test: {
		globals: true,
		root: './',
		alias: [
			{
				find: '@/users',
				replacement: path.resolve(__dirname, 'src/users'),
			},
			{
				find: '@/shared',
				replacement: path.resolve(__dirname, 'src/shared'),
			},
			{
				find: '@/database',
				replacement: path.resolve(__dirname, 'src/database'),
			},
		],
	},
	plugins: [
		// This is required to build the test files with SWC
		swc.vite({
			// Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
			module: { type: 'es6' },
		}),
	],
});
