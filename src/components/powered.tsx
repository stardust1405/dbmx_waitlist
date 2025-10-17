import { NextjsLogo, NotionLogo, ResendLogo, UpstashLogo } from "./svgs";
import { VercelLogo } from "./svgs";

export default function Powered() {
	return (
		<div className="flex flex-col items-center justify-center gap-12 py-12">
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-foreground text-2xl font-semibold">Tech Stack</h3>
				<p className="text-muted-foreground text-base text-center">
					Blazing fast Desktop App that helps you iterate faster. Built with -
				</p>
			</div>
			<div className="flex items-center justify-center flex-wrap sm:gap-12 gap-6">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"
					alt="Go Logo"
					className="w-25 h-25"
					onError={(e) => {
						// Fallback for missing images
						(e.target as HTMLImageElement).src =
							"https://via.placeholder.com/40";
					}}
				/>
				<img
					src="https://wails.io/img/wails-logo-horizontal-dark.svg"
					alt="Wails Logo"
					className="w-40 h-40"
					onError={(e) => {
						// Fallback for missing images
						(e.target as HTMLImageElement).src =
							"https://via.placeholder.com/40";
					}}
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
					alt="Svelte Logo"
					className="w-15 h-15"
					onError={(e) => {
						// Fallback for missing images
						(e.target as HTMLImageElement).src =
							"https://via.placeholder.com/40";
					}}
				/>
				<img
					src="https://logo.svgcdn.com/devicon/supabase-original.png"
					alt="Supabase Logo"
					className="w-15 h-15"
					onError={(e) => {
						// Fallback for missing images
						(e.target as HTMLImageElement).src =
							"https://via.placeholder.com/40";
					}}
				/>
				<img
					src="https://cdn.brandfetch.io/idDpCfN4VD/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1759982735448"
					alt="Vercel Logo"
					className="w-13 h-13"
					onError={(e) => {
						// Fallback for missing images
						(e.target as HTMLImageElement).src =
							"https://via.placeholder.com/40";
					}}
				/>
			</div>
		</div>
	);
}
