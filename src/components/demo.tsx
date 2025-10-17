"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { YouTubeEmbed } from '@next/third-parties/google'

interface DemoProps {
	videoSrc: string;
	thumbnailSrc?: string;
	className?: string;
	captionsSrc?: string;
}

export default function Demo({
	videoSrc,
	thumbnailSrc,
	className = "",
}: DemoProps) {

	return (
		<div className="py-14 sm:px-0 px-4">
			<div className="bg-muted/40 rounded-lg p-2 max-w-3xl mx-auto">
				<div className="flex flex-row justify-start items-center gap-2 p-2">
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
				</div>
				<div
					className={`relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden ${className}`}
				>
					{/* Glitch effect container */}
					<div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
						<YouTubeEmbed videoid="Djh-9sSi68c" params="controls=1,autoplay=1" />
					</div>
				</div>

			</div>
		</div>
	);
}
