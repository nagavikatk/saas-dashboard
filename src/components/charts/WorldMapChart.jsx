import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const data = {
  US: 2000,
  GB: 1800,
  DE: 1600,
  FR: 1400,
  CN: 1300,
  IN: 1200,
  BR: 1000,
};

const WorldMapChart = () => {
  return (
    <div className="p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
        Revenue by Location
      </h3>
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        containerStyle={{
          width: '100%',
          height: '300px'
        }}
        series={{
          regions: [{
            values: data,
            scale: ['#EFF6FF', '#3B82F6'],
            normalizeFunction: 'polynomial'
          }]
        }}
      />
    </div>
  );
};

export default WorldMapChart;
