import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const markers = [
  { latLng: [40.71, -74.00], name: 'New York', revenue: '$1,200' },
  { latLng: [37.77, -122.41], name: 'San Francisco', revenue: '$950' },
  { latLng: [-33.86, 151.20], name: 'Sydney', revenue: '$800' },
  { latLng: [1.35, 103.81], name: 'Singapore', revenue: '$700' }
];

const WorldMapChart = () => {
  return (
    <div className="p-6 h-[400px] flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
        Revenue by Location
      </h3>
      <div className="flex-grow">
        <VectorMap
          map={worldMill}
                    backgroundColor="#E2E8F0"
          containerStyle={{
            width: '100%',
            height: '100%'
          }}
          series={{
            regions: [{
              attribute: 'fill',
              scale: {
                default: '#808080'
              },
              values: {
                // Dummy values to apply default fill to all regions
              }
            }]
          }}
          markers={markers}
          markerStyle={{
            initial: {
              fill: '#3B82F6',
              r: 5
            }
          }}
        />
      </div>
      {/* City List */}
      <div className="mt-4 space-y-2">
        {markers.map((city, index) => (
          <div key={index} className="flex justify-between text-sm text-light-text-primary dark:text-dark-text-primary">
            <span>{city.name}</span>
            <span>{city.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMapChart;
