import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/providers";

import { Rubik } from "next/font/google";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "League Tracker",
	description: "Stats tracker for League of Legends",
};

const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={rubik.className}>
			<body>
				<Suspense>
					<Providers>{children}</Providers>
				</Suspense>
			</body>
		</html>
	);
}
