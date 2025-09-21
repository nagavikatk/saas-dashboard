import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const markers = [
  { latLng: [40.71, -74.00], name: 'New York', revenue: '72K' },
  { latLng: [37.77, -122.41], name: 'San Francisco', revenue: '39k' },
  { latLng: [-33.86, 151.20], name: 'Sydney', revenue: '25K' },
  { latLng: [1.35, 103.81], name: 'Singapore', revenue: '61K' }
];

const WorldMapChart = () => {
  return (
    <div className="h-[300px] flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
        Revenue by Location
      </h3>
      <div className="flex-grow">
        <VectorMap
          map={worldMill}
          backgroundColor="primary-light"
          regionStyle={{
            initial: {
              fill: '#A8C5DA',
            }
          }}
          containerStyle={{
            width: '100%',
            height: '100%'
          }}
          series={{
            regions: [{
              attribute: 'fill',
              scale: {
                default: '#A8C5DA'
              },
              values: {
                // Dummy values to apply default fill to all regions
              }
            }]
          }}
          markers={markers}
          markerStyle={{
            initial: {
              fill: 'primary-dark',
              r: 5
            }
          }}
        />
      </div>
      {/* City List */}
      <div className="mt-4 space-y-4">
        {markers.map((city, index) => {
          const revenueValue = parseInt(city.revenue.replace(/[Kk]/, '')) * 1000;
          const targetRevenue = 100000;
          const progressPercentage = (revenueValue / targetRevenue) * 100;

          return (
            <div key={index} className="text-sm">
              <div className="flex justify-between w-full mb-1 text-light-text-primary dark:text-dark-text-primary">
                <span>{city.name}</span>
                <span>{city.revenue}</span>
              </div>
              <div className="w-full bg-secondary-cyan-light rounded-full h-1">
                <div
                  className="bg-secondary-cyan h-1 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorldMapChart;
