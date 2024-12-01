import React from 'react'
import '../assets/styles/main.scss'
import styles from './layout.module.scss'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	)
}
