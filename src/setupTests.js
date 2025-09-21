import '@testing-library/jest-dom';

// Mock ResizeObserver for recharts components
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(target) {
    // Do nothing or simulate a resize if needed for specific tests
  }
  unobserve(target) {
    // Do nothing
  }
  disconnect() {
    // Do nothing
  }
};
