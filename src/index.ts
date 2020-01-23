import { Workspace } from "@rbxts/services";

export function createBaseplate(settings?: Partial<Part>) {
	const baseplate = new Instance("Part");
	baseplate.Anchored = true;
	baseplate.Position = new Vector3(0, 0, 0);
	baseplate.Size = new Vector3(500, 1, 500);
	baseplate.BackSurface = Enum.SurfaceType.Universal;
	baseplate.BottomSurface = Enum.SurfaceType.Universal;
	baseplate.FrontSurface = Enum.SurfaceType.Universal;
	baseplate.LeftSurface = Enum.SurfaceType.Universal;
	baseplate.RightSurface = Enum.SurfaceType.Universal;
	baseplate.TopSurface = Enum.SurfaceType.Universal;
	Object.assign(baseplate, settings);
	return baseplate;
}
