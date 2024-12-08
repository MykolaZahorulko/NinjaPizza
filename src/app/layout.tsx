import React from 'react';
import '../assets/styles/main.scss';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Head from 'next/head';
import { Header } from '@/components/shared'

const nunito = Nunito({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Pizza Feast | Main',
	description: 'Pizza delivery. Just noway faster',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			</Head>
			<body className={nunito.className}>
				<div className="wrapper">
					<Header />
					<main className="main">{children}</main>
				</div>
			</body>
		</html>
	);
}
