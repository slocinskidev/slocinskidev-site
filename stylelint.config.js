module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    indentation: 2,
  },
};
