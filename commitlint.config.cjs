module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 提交类型枚举，限定只能用以下类型
        'type-enum': [
            1, // 2=必须符合，1=警告，0=忽略
            'always',
            [
                'feat',     // 新功能
                'fix',      // 修复bug
                'docs',     // 仅文档修改
                'style',    // 仅格式修改（不影响代码逻辑）
                'refactor', // 重构（既不是新功能也不是修bug）
                'perf',     // 性能优化
                'test',     // 增加/修改测试用例
                'build',    // 构建相关（如依赖、打包配置）
                'ci',       // CI/CD配置修改
                'chore',    // 其他杂项（如删除日志、修改.gitignore）
                'revert',   // 回滚提交
            ]
        ],
        // 提交描述不能为空
        'subject-empty': [2, 'never'],
    }
};