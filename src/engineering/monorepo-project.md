---
title: Monorepo 模式应用
article: false
---

## 开始

> 项目源码：[hugon/packages/create-app](https://github.com/huguangju/hugon/blob/main/packages/create-app)

在 packages 目录下的 `create-app` 中，可以将 create-hugon 作为一个以 `monorepo` 管理的子包来使用。这样就可以更加方便地管理多个相关的项目模板，并且可以通过统一的工具和规范来降低项目基建成本。

### 开发

```shell
pnpm install
pnpm dev

# 构建
pnpm build
# 更新版本号，更新日志，并打tag发布到npm，提交到gitlab
pnpm release

# 发布测试
pnpm release --dry
```

## 整体规划

使用 monorepo 方式管理整个前端基建工具，create-app 仅作为其中一个子功能，用于生成模板项目。

这个库中可能会有其它的工具子包，可以方便地在各个模板、工具间共享，也方便依赖管理。

### 项目架构

- pnpm monorepo（统一管理，依赖提升，代码复用）
  - 子项目作为独立包发布
  - 版本管理：changesets (管理包的version、生成changelog)
- 构建
  - 打包工具：esbuild、rollup、unbuild、tsc
  - 工具包：kolorist、minimist、prompts
- 代码规范：
  - lint: eslint、prettier
  - 编辑器配置：.editorconfig、.vscode
  - 格式校验（husky、lint-stage、simple-git-hooks）
  - 提交规范（commitzen、commitlint）
- 文档：
  - 使用指南、更新日志。方便新人快速上手，对项目架构有清晰认识
  - 组件：demo示例：预览、复制代码; API说明
  - 工具函数（utils、hooks）：函数签名、示例
  - 三方库和工具最佳实践、注意事项
- 单元测试：（对要针对工具函数、组件）
  - vitest
  - jest

### 子项目

- create-app
  - 命令行工具创建基于模板的项目（参考 vite/packages/create-app）
  - 模板选项：
    - admin/admin-ts
    - h5/h5-ts
    - website/wesite/ts
  - 模板线上预览（是否需要？）
- @hugon/cli（构建命令、打包等，参考[vant-cli](https://github.com/youzan/vant/blob/main/packages/vant-cli/README.zh-CN.md)）
- @hugon/eslint-config（项目 eslint 统一配置，参考[vant-eslint-config](https://github.com/youzan/vant/blob/main/packages/vant-eslint-config/README.md)）
- @hugon/components（通用组件封装、组件库组件定制）
- @hugon/shared（utils库）
- @hugon/use（vue3 hooks 库）
- @hugon/theme（scss/less基础工具类）

... ...

### 模板选型

#### admin 后台

- 构建：
  - [vite4](https://cn.vitejs.dev/guide/)
    - 启用[Rollup 3](https://rollupjs.org/migration/)（[changelog](https://github.com/rollup/rollup/blob/master/CHANGELOG.md)），以简化Vite内部资源处理
    - 将构建目标调整为默认 safari14（仍可使用 [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 支持更旧版本浏览器）
  - Typescript4
- 框架：vue3（vue-router4/pina）
- UI库：
  - ant-design-vue（背靠ant-design大树，共享设计体系）
  - 备选：element-plus
- 工具：
  - lodash-es（lodash的es版本，支持tree shaking，以减少构建包大小）
  - [vueuse](https://vueuse.org/guide/)
  - dayjs
- 项目规范
  - esllint（eslint-config-alloy）
  - commitlint
  - stylelint
  - prettier
  - git hook: （husky、lintstage）
- 页面布局
  - 菜单侧边栏、tabs管理，面包屑
  - 页面自适应适配
- 其它：
  - less/scss（若UI库选antd-vue，则用less以跟其保持一致）
  - [tailwindcss](https://www.tailwindcss.cn/)（原子化CSS）
    - [unocss](https://github.com/unocss/unocss)可作备选（文档有点迷）
    - [windcss](https://windicss.org/)似乎已不再维护
  - 图标方案
    - svg雪碧图
    - [iconfiy](https://iconify.design/)（统一的icon框架，可按需引入各个icon set中的图标，基于[vite-plugin-purge-icons](https://github.com/antfu/purge-icons/blob/main/packages/vite-plugin-purge-icons/README.md) vite插件使用）
- 业务相关：
  - 集成cas、eservice实现单点登录（[谷歌拓展：解决90+版本后cookie携带问题](https://github.com/chirpmonster/chrome-cookie-extence)）
  - 菜单权限
  - 上传/下载/导出