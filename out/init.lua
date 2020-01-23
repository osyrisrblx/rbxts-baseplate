-- Compiled with https://roblox-ts.github.io v0.3.0
-- January 23, 2020, 12:42 AM Pacific Standard Time

local TS = _G[script];
local exports = {};
local function createBaseplate(settings)
	local baseplate = Instance.new("Part");
	baseplate.Anchored = true;
	baseplate.Position = Vector3.new(0, 0, 0);
	baseplate.Size = Vector3.new(500, 1, 500);
	baseplate.BackSurface = Enum.SurfaceType.Universal;
	baseplate.BottomSurface = Enum.SurfaceType.Universal;
	baseplate.FrontSurface = Enum.SurfaceType.Universal;
	baseplate.LeftSurface = Enum.SurfaceType.Universal;
	baseplate.RightSurface = Enum.SurfaceType.Universal;
	baseplate.TopSurface = Enum.SurfaceType.Universal;
	TS.Object_assign(baseplate, settings);
	return baseplate;
end;
exports.createBaseplate = createBaseplate;
return exports;
