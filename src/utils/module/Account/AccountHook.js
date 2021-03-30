import { useContext } from "react";
import { AccountContext } from "./AccountContext";
import { AccountService } from "./AccountService";

const useAppAccount = () => {
  const { account } = useContext(AccountContext);

  const setAccount = ({ newAccount }) => {
    AccountService.set(newAccount);
  };

  return { account, setAccount };
};

export { useAppAccount };
