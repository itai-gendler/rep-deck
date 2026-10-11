"use client";

import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useMounted } from "./use-mounted";

export const THEME_OPTIONS = [
	{ value: "mocha", label: "Mocha" },
	{ value: "rosepine", label: "Rose Pine" },
	{ value: "catppuccin", label: "Catppuccin" },
	{ value: "orchid", label: "Orchid" },
	{ value: "frost", label: "Frost" },
	{ value: "green", label: "Light Green" },
	{ value: "lime", label: "Lime" },
	{ value: "wheat", label: "Wheat" },
] as const;

export type ThemeSlug = (typeof THEME_OPTIONS)[number]["value"];

export function useThemeSelection() {
	const { theme, setTheme } = useTheme();
	const isMounted = useMounted();

	const handleThemeChange = (newTheme: string) => {
		setTheme(newTheme);
		const label =
			THEME_OPTIONS.find((t) => t.value === newTheme)?.label ?? newTheme;
		toast.success(`Theme set to ${label}`);
	};

	return { theme, isMounted, handleThemeChange };
}
