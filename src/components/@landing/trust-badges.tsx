"use client";

import {
	CalendarCheckIcon,
	ChartLineUpIcon,
	FloppyDiskIcon,
	LockKeyIcon,
} from "@phosphor-icons/react";

const BADGES = [
	{
		icon: LockKeyIcon,
		label: "Private by Default",
		description: "Your data, your control",
	},
	{
		icon: CalendarCheckIcon,
		label: "Weekday Anchoring",
		description: "Auto-selects today's plan",
	},
	{
		icon: FloppyDiskIcon,
		label: "Backdate Sessions",
		description: "Log a missed workout",
	},
	{
		icon: ChartLineUpIcon,
		label: "Big 4 Trends",
		description: "Estimated 1RM charts",
	},
];

export const TrustBadges = () => {
	return (
		<section className="w-full border-y border-border/50 bg-card/40 backdrop-blur-sm">
			<div className="container max-w-6xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-border/40 sm:divide-y-0 sm:divide-x sm:divide-border/40">
					{BADGES.map(({ icon: Icon, label, description }) => (
						<div
							key={label}
							className="fcy gap-3.5 px-4 py-5 sm:px-6 sm:py-6"
						>
							<div className="fc size-9 shrink-0 border border-primary/25 bg-primary/10">
								<Icon
									className="size-4.5 text-primary"
									weight="bold"
								/>
							</div>
							<div className="min-w-0 text-left">
								<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground">
									{label}
								</p>
								<p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
									{description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
