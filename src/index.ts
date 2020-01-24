import { Workspace } from "@rbxts/services";

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
	Parent: Workspace,
};

export function createBaseplate(settings?: Partial<Part>) {
	return Object.assign(new Instance("Part"), DEFAULT_PROPERTIES, settings);
}
