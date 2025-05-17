import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";

export default function Hero() {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<div className="flex flex-col items-center justify-center gap-3 mb-6">
				<Logo />
				<div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
					<span className="animate-ping h-2 w-2 rounded-full bg-yellow-400" />
					<p className="uppercase text-sm font-medium">
						available in early 2025
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
				<h2 className="text-4xl font-bold text-foreground">Get early Access</h2>
				<p className="text-base text-muted-foreground text-center max-w-md">
					Be among the first to experience the future of AI-powered
					productivity. Join the waitlist to get notified when we launch.
				</p>
			</div>
			<div className="flex items-center justify-center gap-2">
				<People />
			</div>
			<Countdown period={new Date("2025-06-01")} />
		</div>
	);
}
