import { useState } from "react";

function App() {
  const values = {
    emerald: 1,
    emerald_block: 64,
    liquid_emerald: 4096,
    stx: 262144,
  };

  const [emerald, setEmerald] = useState(0);
  const [emeraldBlock, setEmeraldBlock] = useState(0);
  const [liquidEmerald, setLiquidEmerald] = useState(0);
  const [stx, setStx] = useState(0);

  const changeValueOthers = (value: number, key: string) => {
    switch (key) {
      case "emerald":
        setEmeraldBlock(value / values.emerald_block);
        setLiquidEmerald(value / values.liquid_emerald);
        setStx(value / values.stx);
        break;
      case "emerald_block":
        const emeraldFromBlock = value * values.emerald_block;
        setEmerald(emeraldFromBlock);
        setLiquidEmerald(emeraldFromBlock / values.liquid_emerald);
        setStx(emeraldFromBlock / values.stx);
        break;
      case "liquid_emerald":
        const emeraldFromLiquid = value * values.liquid_emerald;
        setEmerald(emeraldFromLiquid);
        setEmeraldBlock(emeraldFromLiquid / values.emerald_block);
        setStx(emeraldFromLiquid / values.stx);
        break;
      case "stx":
        const emeraldFromStx = value * values.stx;
        setEmerald(emeraldFromStx);
        setEmeraldBlock(emeraldFromStx / values.emerald_block);
        setLiquidEmerald(emeraldFromStx / values.liquid_emerald);
        break;
      default:
        break;
    }
  };
  return (
    <div className="min-h-screen w-full bg-gray-950 text-gray-200">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="flex h-[724px] w-96 flex-col items-center rounded-md border-2 border-white/20 py-2">
          <span className="text-center text-4xl font-bold">Wynncraft Emerald Calculator</span>
          <div className="flex w-full flex-col items-center space-y-2 p-4">
            <img src="/emerald.webp" alt="Emerald" className="max-h-20" />
            <input
              type="number"
              name="emerald"
              className="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
              min={0}
              value={emerald}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setEmerald(value);
                changeValueOthers(value, "emerald");
              }}
            />
          </div>
          <div className="flex w-full flex-col items-center space-y-2 p-4">
            <img src="/emerald_block.webp" alt="Emerald Block" className="max-h-20" />
            <input
              type="number"
              name="emerald_block"
              className="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
              min={0}
              value={emeraldBlock}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setEmeraldBlock(value);
                changeValueOthers(value, "emerald_block");
              }}
            />
          </div>
          <div className="flex w-full flex-col items-center space-y-2 p-4">
            <img src="/liquid_emerald.webp" alt="Liquid Emerald" className="max-h-20" />
            <input
              type="number"
              name="liquid_emerald"
              className="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
              min={0}
              value={liquidEmerald}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setLiquidEmerald(value);
                changeValueOthers(value, "liquid_emerald");
              }}
            />
          </div>
          <div className="flex w-full flex-col items-center space-y-6 p-4">
            <div className="relative h-20 w-20">
              <img src="/liquid_emerald.webp" alt="Liquid Emerald" className="absolute -left-3 -top-3 max-h-20" />
              <img src="/liquid_emerald.webp" alt="Liquid Emerald" className="absolute left-0 top-0 max-h-20" />
              <img src="/liquid_emerald.webp" alt="Liquid Emerald" className="absolute left-3 top-3 max-h-20" />
            </div>
            <input
              type="number"
              name="stx"
              className="w-full rounded border border-white/5 bg-gray-900 px-2 py-1 focus:outline-none"
              min={0}
              value={stx}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setStx(value);
                changeValueOthers(value, "stx");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
