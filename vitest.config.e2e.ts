import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	test: {
		include: ['**/*.e2e-spec.ts'],
		globals: true,
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
		root: './',
	},
	plugins: [swc.vite()],
});
