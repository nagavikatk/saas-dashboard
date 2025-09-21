const Notifications = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="font-medium">New message received</p>
              <p className="text-sm text-gray-500">5 minutes ago</p>
            </div>
            <div className="border-b pb-4">
              <p className="font-medium">System update completed</p>
              <p className="text-sm text-gray-500">1 hour ago</p>
            </div>
            <div className="border-b pb-4">
              <p className="font-medium">New user registration</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
