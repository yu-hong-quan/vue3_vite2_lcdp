/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:14:59
 */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    'plugin:prettier/recommended'
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "prettier/prettier":"off",
    "indent": [
      "error",
      "tab"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "globals": {
    "defineProps": 'readonly',
    "defineEmits": 'readonly',
    "defineExpose": 'readonly',
    "withDefaults": 'readonly'
  },
  "parser": 'vue-eslint-parser'
};
