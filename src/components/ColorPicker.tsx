import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Copy, Check } from "lucide-react"; // Import icons

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState({ r: 120, g: 71, b: 149 });
  const [hex, setHex] = useState("#784795");
  const [copied, setCopied] = useState<{ type: string | null }>({ type: null });

  // Convert RGB to Hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  };

  // Convert HSL to RGB (ensuring smooth gradients)
  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else if (h < 360) { r = x; b = c; }

    else { r = c; g = x; }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    };
  };

  // Generate Color Chart
  const colors = Array.from({ length: 90 }, (_, i) => {
    const column = i % 10; // Different hues per column
    const row = Math.floor(i / 10); // Lightness adjustment per row
    const hue = column === 9 ? 330 : column * 36;
    const saturation = 90;
    const lightness = 20 + row * 8;

    const { r, g, b } = hslToRgb(hue, saturation, lightness);
    return { r, g, b, hex: rgbToHex(r, g, b) };
  });

  // Copy to clipboard
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ type });

    // Reset icon after 1 second
    setTimeout(() => {
      setCopied({ type: null });
    }, 1000);
  };

  return (
    <div className="flex gap-20 p-12">
      {/* RGB Color Picker */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">RGB Color Picker</h2>
        <div className="border-none">
          <SketchPicker
            color={hex}
            onChange={(updatedColor) => {
              setColor(updatedColor.rgb);
              setHex(updatedColor.hex);
            }}
            disableAlpha
          />
        </div>

        {/* HEX Color Display */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-lg font-bold">Hex:</span>
          <input
            type="text"
            value={hex}
            readOnly
            className="w-32 p-2 border bg-white text-center text-lg"
          />
          <button
            onClick={() => copyToClipboard(hex, "hex")}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            {copied.type === "hex" ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* RGB Color Display */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-lg font-bold">RGB:</span>
          <input
            type="text"
            value={`rgb(${color.r}, ${color.g}, ${color.b})`}
            readOnly
            className="w-48 p-2 border bg-white text-center text-lg"
          />
          <button
            onClick={() =>
              copyToClipboard(`rgb(${color.r}, ${color.g}, ${color.b})`, "rgb")
            }
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            {copied.type === "rgb" ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* RGB Color Codes Chart */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">RGB Color Codes Chart</h2>
        <div className="grid grid-cols-10 gap-2">
          {colors.map((c, index) => (
            <div
              key={index}
              className="w-8 h-8 border cursor-pointer"
              style={{ backgroundColor: c.hex }}
              onClick={() => {
                setColor({ r: c.r, g: c.g, b: c.b });
                setHex(c.hex);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
