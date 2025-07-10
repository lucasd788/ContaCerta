import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import { useAuth } from "./auth/AuthContext";

// Componente para decidir se o Header deve ser mostrado
const AppContent = () => {
  useAuth();
  return (
    <>
      <AppRoutes />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
