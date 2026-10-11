"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
	{ value: 100, suffix: "%", label: "Data Ownership" },
	{ value: 7, suffix: "", label: "Measurement Points" },
	{ value: 4, suffix: "", label: "Big Lifts Tracked" },
	{ value: 8, suffix: " Themes", label: "Pick Your Look" },
];

function useCountUp(target: number, duration = 1800, delay = 0) {
	const [value, setValue] = useState(0);
	const [started, setStarted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStarted(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!started) return;

		let frame: number;
		let startTime: number | null = null;

		const tick = (now: number) => {
			if (startTime === null) startTime = now;
			const elapsed = now - startTime - delay;

			if (elapsed < 0) {
				frame = requestAnimationFrame(tick);
				return;
			}

			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - (1 - progress) ** 3;

			if (progress >= 1) {
				setValue(target);
				return;
			}

			setValue(Math.floor(eased * target));
			frame = requestAnimationFrame(tick);
		};

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [started, target, duration, delay]);

	return { value, ref };
}

function StatItem({
	value,
	suffix,
	label,
	index,
}: {
	value: number;
	suffix: string;
	label: string;
	index: number;
}) {
	const { value: animated, ref } = useCountUp(value, 1800, index * 120);

	return (
		<div ref={ref} className="relative text-center group">
			<p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-foreground tabular-nums">
				{animated.toLocaleString()}
				<span className="text-primary">{suffix}</span>
			</p>
			<p className="ftext-xs2 uppercase tracking-widest text-muted-foreground mt-2 font-medium">
				{label}
			</p>
		</div>
	);
}

export const StatsBar = () => {
	return (
		<section className="w-full py-20 bg-background border-y border-border/40">
			<div className="container max-w-5xl mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
					{STATS.map((stat, i) => (
						<StatItem key={stat.label} index={i} {...stat} />
					))}
				</div>
			</div>
		</section>
	);
};
