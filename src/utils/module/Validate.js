const Validate = {
  validateconfirmPassword: ({ getFieldValue }) => ({
    validator(rule, value) {
      const password = getFieldValue("password");
      if (value !== password) {
        return Promise.reject("Mật khẩu không trùng khớp");
      } else {
        return Promise.resolve();
      }
    },
  }),
};

export { Validate };
