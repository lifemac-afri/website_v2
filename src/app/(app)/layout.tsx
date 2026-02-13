import '@/styles/globals.css';




import type { Metadata } from "next";
import ComponentRouter from './page-router';

export const metadata: Metadata = {
	title: "LIFE-MAC Africa | Empowering Communities",
	description:
		"LIFE-MAC Africa is a social enterprise dedicated to empowering individuals and communities with a special focus on women and girls, youth and people with disabilities and underserved populations.",

	icons: [{ rel: "icon", url: "/images/lfa-logo.png" }],
	openGraph: {
		images: [
			{
				url: '/images/og.png',
				width: 1200,
				height: 630,
				alt: 'LIFE-MAC Africa',
			},
		],
	},
};





export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="font-sans min-h-dvh w-full mx-auto overflow-x-hidden">

			<body className="overflow-x-hidden" suppressHydrationWarning>
				<ComponentRouter>
					{children}
				</ComponentRouter>
			</body>
		</html>
	);
}
