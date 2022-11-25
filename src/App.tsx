import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DeviceDetails from './pages/DeviceDetails';
import Devices from './pages/Devices';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Devices />} />

        <Route path="device">
          <Route path=":id" element={<DeviceDetails />} />
        </Route>

        {/* Catch all - can be replaced with custom 404 component */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
