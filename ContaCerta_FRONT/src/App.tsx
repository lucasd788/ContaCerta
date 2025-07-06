import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import { useAuth } from "./auth/AuthContext";

// Componente para decidir se o Header deve ser mostrado
const AppContent = () => {
  const { token } = useAuth();
  return (
    <>
      {token && <Header />}
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
