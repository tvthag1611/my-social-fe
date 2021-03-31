import { AccountContainer } from "utils/module/Account";
import AppContent from "./AppContent";
import { QueryClient, QueryClientProvider } from "react-query";
import "antd/dist/antd.css";
import "./App.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <AccountContainer>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <AppContent />
        </div>
      </QueryClientProvider>
    </AccountContainer>
  );
}

export default App;
