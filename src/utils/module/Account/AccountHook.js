import { AccountService } from "./AccountService";

const useAppAccount = () => {
  const account = AccountService.get();

  const setAccount = (newAccount) => {
    AccountService.set(newAccount);
  };

  return { account, setAccount };
};

export { useAppAccount };
