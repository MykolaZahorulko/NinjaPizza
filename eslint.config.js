import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'

export default [
	{
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		plugins: {
			'@typescript-eslint': typescriptPlugin,
			import: importPlugin,
		},
		ignores: ['*.js', '*.jsx'],
		rules: {
			'import/order': 'error',
			'import/no-mutable-exports': 'error',
			'import/no-cycle': 'error',
			'import/no-default-export': 'error',
			'@typescript-eslint/ban-types': [
				'off',
				{
					types: { '{}': false },
				},
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'inline-type-imports',
					disallowTypeAnnotations: false,
				},
			],
			'import/no-duplicates': ['error', { 'prefer-inline': true }],
			'import/namespace': ['off'],
			'no-empty-pattern': 'off',
			'@typescript-eslint/no-empty-interface': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{ allowNumber: true, allowBoolean: true },
			],
			'@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
			'no-restricted-imports': [
				'error',
				{
					name: 'next/router',
					message: 'Please use next/navigation instead.',
				},
			],
		},
	},
	{
		files: ['src/app/**/*.ts?(x)', 'middleware.ts'],
		rules: {
			'import/no-default-export': 'off',
		},
	},
]
