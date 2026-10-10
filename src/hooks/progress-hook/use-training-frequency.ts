import { useEffect, useMemo, useState } from "react";
import { getTrainingFrequency } from "@/actions/progress";
import type { WeekDay } from "@/constants";
import { TWELVE_WEEK_BENCHMARK, WEEK_DAYS } from "@/constants";
import type { TrainingFrequencyDay } from "@/types/progress";

function asWeekDay(day: string): WeekDay | null {
	return (WEEK_DAYS as readonly string[]).includes(day)
		? (day as WeekDay)
		: null;
}

export function useTrainingFrequency(
	initialData: TrainingFrequencyDay[] = [],
	propLoading: boolean = false,
) {
	const [data, setData] = useState(initialData);
	const [loading, setLoading] = useState(
		initialData.length === 0 && !propLoading,
	);

	useEffect(() => {
		if (propLoading) {
			setLoading(true);
			return;
		}

		if (initialData.length > 0) {
			setData(initialData);
			setLoading(false);
		} else {
			setLoading(true);
			getTrainingFrequency().then((res) => {
				if (res && res.length > 0) setData(res);
				setLoading(false);
			});
		}
	}, [initialData, propLoading]);

	const { combinedData, maxDomainValue, totalSessions, peakDay } =
		useMemo(() => {
			const baseData =
				data.length > 0
					? data
					: [
							{ day: "Monday", sessions: 0 },
							{ day: "Tuesday", sessions: 0 },
							{ day: "Wednesday", sessions: 0 },
							{ day: "Thursday", sessions: 0 },
							{ day: "Friday", sessions: 0 },
							{ day: "Saturday", sessions: 0 },
							{ day: "Sunday", sessions: 0 },
						];

			let maxVal = 0;
			let total = 0;

			const combined = baseData.map((item) => {
				const dayKey = asWeekDay(item.day);
				const targetVal = dayKey ? TWELVE_WEEK_BENCHMARK[dayKey] : 0;

				if (item.sessions > maxVal) maxVal = item.sessions;
				total += item.sessions;

				return {
					...item,
					target: targetVal,
				};
			});

			const maxDomain = Math.max(maxVal, 12);

			const sorted = [...baseData].sort(
				(a, b) => b.sessions - a.sessions,
			);
			const peak = sorted[0] && sorted[0].sessions > 0 ? sorted[0] : null;

			return {
				combinedData: combined,
				maxDomainValue: maxDomain,
				totalSessions: total,
				peakDay: peak,
			};
		}, [data]);

	const hasData = data.length > 0 && data.some((d) => d.sessions > 0);

	return {
		data,
		combinedData,
		maxDomainValue,
		totalSessions,
		peakDay,
		loading,
		hasData,
	};
}
