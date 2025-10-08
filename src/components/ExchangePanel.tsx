import { Maximize2 } from 'lucide-react';

export default function ExchangePanel() {
  const total = 3450;
  const segments = [
    { value: 950, color: 'rgb(239, 68, 68)', label: 'Segment 1' },
    { value: 1200, color: 'rgb(132, 204, 22)', label: 'Segment 2' },
    { value: 400, color: 'rgb(168, 85, 247)', label: 'Segment 3' },
    { value: 500, color: 'rgb(229, 231, 235)', label: 'Segment 4' },
    { value: 400, color: 'rgb(23, 23, 23)', label: 'Segment 5' },
  ];

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Exchange</h3>
        <button className="p-2 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors">
          <Maximize2 className="w-4 h-4 text-neutral-400" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 200 200" className="transform -rotate-90">
            {segments.reduce((acc, segment, index) => {
              const previousTotal = segments.slice(0, index).reduce((sum, s) => sum + s.value, 0);
              const startAngle = (previousTotal / total) * 360;
              const endAngle = ((previousTotal + segment.value) / total) * 360;

              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;

              const innerRadius = 50;
              const outerRadius = 90;

              const x1 = 100 + innerRadius * Math.cos(startRad);
              const y1 = 100 + innerRadius * Math.sin(startRad);
              const x2 = 100 + outerRadius * Math.cos(startRad);
              const y2 = 100 + outerRadius * Math.sin(startRad);
              const x3 = 100 + outerRadius * Math.cos(endRad);
              const y3 = 100 + outerRadius * Math.sin(endRad);
              const x4 = 100 + innerRadius * Math.cos(endRad);
              const y4 = 100 + innerRadius * Math.sin(endRad);

              const largeArc = endAngle - startAngle > 180 ? 1 : 0;

              const path = `
                M ${x1} ${y1}
                L ${x2} ${y2}
                A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}
                L ${x4} ${y4}
                A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}
              `;

              acc.push(
                <path
                  key={index}
                  d={path}
                  fill={segment.color}
                  stroke="#171717"
                  strokeWidth="2"
                />
              );

              return acc;
            }, [] as JSX.Element[])}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">{total.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-4">
        <div className="text-xs text-neutral-500 text-center">
          This design was created for Cryptic
        </div>
      </div>
    </div>
  );
}
