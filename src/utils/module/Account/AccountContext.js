import { createContext, useEffect, useState } from "react";
import { AccountService } from "./AccountService";

const AccountContext = createContext({ account: {} });

const AccountContainer = ({ children }) => {
  const [account, setAccount] = useState({});
  useEffect(() => {
    AccountService.onChange({ key: "AccountContainer" }, (newAccount) => {
      setAccount(newAccount);
    });
  }, []);

  return (
    <AccountContext.Provider value={{ account }}>
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContainer, AccountContext };
