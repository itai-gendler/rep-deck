export const AVATAR_PALETTES = {
	mocha: { backgroundColor: "313244", shapeColor: "cba6f7" },
	rosepine: { backgroundColor: "403d52", shapeColor: "e0def4" },
	catppuccin: { backgroundColor: "585b70", shapeColor: "cba6f7" },
	orchid: { backgroundColor: "35334d", shapeColor: "b2a5e9" },
	frost: { backgroundColor: "1b273a", shapeColor: "fafafa" },
	lime: { backgroundColor: "303030", shapeColor: "d9e96e" },
	green: { backgroundColor: "1e293b", shapeColor: "aff33e" },
	wheat: { backgroundColor: "2a3646", shapeColor: "c4a164" },
} as const;

export type ThemeSlug = keyof typeof AVATAR_PALETTES;

export const DEFAULT_THEME: ThemeSlug = "mocha";

export function getDiceBearAvatarUrl(
	seed: string,
	theme: ThemeSlug = DEFAULT_THEME,
): string {
	const { backgroundColor, shapeColor } =
		AVATAR_PALETTES[theme] ?? AVATAR_PALETTES[DEFAULT_THEME];

	const params = new URLSearchParams({
		seed,
		backgroundColor,
		shapeColor,
		borderRadius: "0",
		animationVariant: "fastest",
	});

	return `https://api.dicebear.com/10.x/thumbs/svg?${params}&flip=none,horizontal`;
}
