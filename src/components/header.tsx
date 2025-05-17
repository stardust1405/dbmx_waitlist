"use client";

import { cn } from "~/lib/utils";
import { useScroll } from "~/hooks/use-scroll";
import { GithubLogo, NotionLogo } from "./svgs";
import { Button } from "./ui/button";

export default function Header() {
	const scrolled = useScroll();

	return (
		<header
			className={cn(
				"py-4 flex flex-row gap-2 justify-between items-center md:px-10 sm:px-6 px-4 sticky top-0 z-10",
				scrolled &&
					"bg-background/50 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm",
			)}
		>
			<Button variant="secondary">
				<NotionLogo />
				Notion DB Sample
			</Button>

			<div className="flex items-center gap-2">
				<Button variant="secondary">
					<GithubLogo />
					Use this template
				</Button>
			</div>
		</header>
	);
}
