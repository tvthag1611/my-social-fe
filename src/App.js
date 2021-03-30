import { AccountContainer } from "utils/module/Account";
import AppContent from "./AppContent";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <AccountContainer>
      <div className="App">
        <AppContent />
      </div>
    </AccountContainer>
  );
}

export default App;
