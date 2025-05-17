import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "~/components/header";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const interTight = Inter_Tight({
	variable: "--font-inter-tight",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Idee8 — Next.js + Notion Waitlist Template",
	description:
		"A simple Next.js waitlist template with Notion as CMS and Resend to send emails created with React Email and Upstash Redis for rate limiting. Deployed on Vercel.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body
				className={`${interTight.variable} ${geistMono.variable} antialiased flex flex-col h-full`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
