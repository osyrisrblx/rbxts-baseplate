const DEFAULT_PROPERTIES: Partial<BasePart> = {
	Anchored: true,
	Position: new Vector3(0, -0.5, 0),
	Size: new Vector3(512, 1, 512),
	BackSurface: Enum.SurfaceType.Universal,
	BottomSurface: Enum.SurfaceType.Universal,
	FrontSurface: Enum.SurfaceType.Universal,
	LeftSurface: Enum.SurfaceType.Universal,
	RightSurface: Enum.SurfaceType.Universal,
	TopSurface: Enum.SurfaceType.Universal,
	Parent: game.GetService("Workspace"),
};

function apply<T>(object: T, props: Partial<T>) {
	for (const [key, value] of pairs(props)) {
		object[key as never] = value as never;
	}
}

export function createBaseplate(settings?: Partial<Part>) {
	const part = new Instance("Part");
	apply(part, DEFAULT_PROPERTIES);
	if (settings) {
		apply(part, settings);
	}
	return part;
}
