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
		<div className="py-14 sm:px-0">
			<div className="bg-muted/40 rounded-xl w-full max-w-184 pb-2 mx-auto">
				<div className="flex flex-row justify-start items-center gap-2 p-2">
					<span className="relative flex h-3 w-3">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background bg-red-500" />
					</span>
					<span className="relative flex h-3 w-3">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background bg-yellow-500" />
					</span>
					<span className="relative flex h-3 w-3">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background bg-green-500" />
					</span>
				</div>
				<div
					className={`relative w-full h-full px-2 mx-auto rounded-lg overflow-hidden ${className}`}
				>
					{/* Glitch effect container */}
					<div className="aspect-video w-full h-full bg-black justify-center items-center rounded-lg overflow-hidden">
						<YouTubeEmbed height={1000} videoid="Djh-9sSi68c" params="controls=1,autoplay=1" />
					</div>
				</div>

			</div>
		</div>
	);
}
