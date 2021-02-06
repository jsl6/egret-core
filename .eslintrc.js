module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        }
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        /**
         * 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
         */
        'for-direction': 'error',
        /**
         * getter 必须有返回值，并且禁止返回空，比如 return;
         */
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        /**
         * 禁止使用 console
         */
        'no-console': 'off',
        /**
         * 禁止对使用 const 定义的常量重新赋值
         */
        'no-const-assign': 'error',
        /**
         * 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
         */
        'no-implied-eval': 'error',
        /**
         * 禁止使用保留字作为变量名
         */
        'no-shadow-restricted-names': 'error',
        /**
         * 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
         */
        'no-unsafe-negation': 'error',
        /**
         * 禁止使用 debugger
         */
        'no-debugger': 'error',
        /**
         * 禁止重复 import 模块
         */
        'no-duplicate-imports': 'error',
        /**
         * 禁止在对象字面量中出现重复名称的键名
         */
        'no-dupe-keys': 'error',
        /**
         * 禁止在函数参数中出现重复名称的参数
         */
        'no-dupe-args': 'error',
        /**
         * 禁止在 switch 语句中出现重复测试表达式的 case
         */
        'no-duplicate-case': 'error',
        /**
         * 禁止将 catch 的第一个参数 error 重新赋值
         */
        'no-ex-assign': 'error',
        /**
         * 禁止不必要的布尔类型转换，比如 !! 或 Boolean
         */
        'no-extra-boolean-cast': 'error',
        /**
         * 禁止函数表达式中出现多余的括号
         */
        'no-extra-parens': ['error', 'functions'],
        /**
         * 禁止将一个函数声明重新赋值，如：
         */
        'no-func-assign': 'error',
        /**
         * 禁止在 RegExp 构造函数中出现非法的正则表达式
         */
        'no-invalid-regexp': 'error',
        /**
         * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
         * @category Possible Errors
         */
        'no-obj-calls': 'error',
        /**
         * 禁止在数组中出现连续的逗号，如 let foo = [,,]
         */
        'no-sparse-arrays': 'error',
        /**
         * 禁止出现难以理解的多行表达式
         */
        'no-unexpected-multiline': 'error',
        /**
         * 必须使用 isNaN(foo) 而不是 foo === NaN
         */
        'use-isnan': 'error',
        /**
         * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
         */
        'valid-typeof': 'error',
        /**
         * 数组的方法除了 forEach 之外，回调函数必须有返回值
         */
        'array-callback-return': 'off',
        /**
         * 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
         */
        'dot-location': ['error', 'property'],
        /**
         * 禁止使用 \ 来换行字符串，应使用\n
         */
        'no-multi-str': 'error',
        /**
         * 禁止直接 new 一个类而不赋值
         */
        'no-new': 'error',
        /**
         * 禁止使用 new 来生成 String, Number 或 Boolean
         */
        'no-new-wrappers': 'error',
        /**
         * 禁止将自己赋值给自己
         */
        'no-self-assign': 'error',
        /**
         * 循环内必须对循环条件的变量有修改
         */
        'no-unmodified-loop-condition': 'error',
        /**
         * 禁止将 undefined 赋值给变量
         */
        'no-undef-init': 'error',
    }
}
