module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'import',
		'simple-import-sort',
		'unused-imports',
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		// imports
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/no-unresolved': [
			'off',
			{ caseSensitiveStrict: true, commonjs: true },
		],
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'prettier/prettier': [
			'error',
			{ endOfLine: 'auto' },
			{ usePrettierrc: true },
		],
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'arrow-body-style': 'error',
		'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
		'@typescript-eslint/no-confusing-void-expression': [
			'error',
			{
				ignoreArrowShorthand: true,
			},
		],
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				fixStyle: 'separate-type-imports',
				disallowTypeAnnotations: true,
			},
		],
		'@typescript-eslint/no-unsafe-argument': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},

		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
};
