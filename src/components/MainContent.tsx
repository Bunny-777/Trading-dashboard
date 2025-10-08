import IndexHeader from './IndexHeader';
import StatsPanel from './StatsPanel';
import ChartPanel from './ChartPanel';
import ConstituentsTable from './ConstituentsTable';
import ExchangePanel from './ExchangePanel';

export default function MainContent() {
  return (
    <div className="flex-1 overflow-auto bg-black p-6">
      <IndexHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatsPanel />
            <ChartPanel />
          </div>
          <ConstituentsTable />
        </div>

        <div className="lg:col-span-1">
          <ExchangePanel />
        </div>
      </div>
    </div>
  );
}
