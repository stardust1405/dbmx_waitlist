import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center gap-4 pb-4">
			<div className="flex flex-row justify-between">
				<ul className="flex flex-row gap-4">
					<li>Built using Next.js 15</li>
					<li>
						<Link href="https://github.com/idee8/nextjs-notion-waitlist">
							Get this template
						</Link>
					</li>
					<li>
						<Link href="https://kofi.com/idee8">Become a Sponsor</Link>
					</li>
				</ul>
			</div>
			<div>
				<p>
					&copy; {new Date().getFullYear()} Crafted by{" "}
					<Link href="https://idee8.agency">Idee8</Link>
				</p>
			</div>
		</footer>
	);
}
