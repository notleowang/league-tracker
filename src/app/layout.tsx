import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "League Tracker",
	description: "Stats tracker for League of Legends",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={``}
			>
				{children}
			</body>
		</html>
	);
}
