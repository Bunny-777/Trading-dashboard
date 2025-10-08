import IndexHeader from '../components/IndexHeader';
import StatsPanel from '../components/StatsPanel';
import ChartPanel from '../components/ChartPanel';
import ConstituentsTable from '../components/ConstituentsTable';
import ExchangePanel from '../components/ExchangePanel';

export default function Market() {
  return (
    <div className="p-6">
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
