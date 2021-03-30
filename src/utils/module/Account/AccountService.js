const accountKey = {
  account: "account",
};

const changeListeners = {};
let account = {};

const AccountService = {
  save: ({ account }) => {
    const accountJson = JSON.stringify(account);
    localStorage.setItem(accountKey.account, accountJson);
  },
  remove: () => {
    localStorage.removeItem(accountKey.account);
  },
  get: () => {
    const result = localStorage.getItem(accountKey.account);
    let accountClone = {};
    if (result) {
      accountClone = JSON.parse(result);
    }
    return accountClone;
  },
  set: async (data) => {
    account = { ...data };
    Object.keys(changeListeners).forEach((k) => changeListeners[k]());
    AccountService.save({ account });
  },
  setNoBroadCast: (data) => {
    account = { ...data };
    AccountService.save({ account });
  },
  onChange: ({ key }, cb) => {
    changeListeners[key] = () => cb(account);
  },
  removeChange: (key) => {
    if (changeListeners[key]) {
      delete changeListeners[key];
    }
  },
};

export { AccountService };
