import './App.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import ClientRoutes from './routes/ClientRoutes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <AdminDashboard/> */}
      <Routes>
        {ClientRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.Component />
            }
          />
        )
        )}
      </Routes>
    </div>
  );
}

export default App;
