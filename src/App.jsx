import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import WorkInProgress from './pages/WorkInProgress';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/dashboards/default" replace />} />
            <Route path="dashboards/default" element={<Dashboard />} />
            <Route path="ecommerce/orders" element={<OrderList />} />
            <Route path="projects" element={<WorkInProgress />} />
            <Route path="dashboards/projects" element={<WorkInProgress />} />
            <Route path="dashboards/courses" element={<WorkInProgress />} />
            <Route path="pages/profile" element={<WorkInProgress />} />
            <Route path="pages/overview" element={<WorkInProgress />} />
            <Route path="pages/projects" element={<WorkInProgress />} />
            <Route path="pages/campaigns" element={<WorkInProgress />} />
            <Route path="pages/documents" element={<WorkInProgress />} />
            <Route path="pages/followers" element={<WorkInProgress />} />
            <Route path="pages/account" element={<WorkInProgress />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;