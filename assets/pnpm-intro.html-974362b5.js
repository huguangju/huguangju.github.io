const e=JSON.parse(`{"key":"v-4dac6e2c","path":"/engineering/pnpm-intro.html","title":"pnpm 特性及基本使用","lang":"zh-CN","frontmatter":{"title":"pnpm 特性及基本使用","date":"2023-02-20T00:00:00.000Z","category":["工程化"],"tag":["pnpm"],"description":"什么是 pnpm? performant npm ，意味“高性能的 npm”。 快速的，节省磁盘空间的包管理工具。 特性概览 速度快 非扁平的包结构，没有 npm3+/yarn 复杂的扁平算法，且只更新变化的文件 高效利用磁盘空间 pnpm 内部使用基于内容寻址的文件系统来存储磁盘上所有的文件：","head":[["meta",{"property":"og:url","content":"https://huguangju.cn/engineering/pnpm-intro.html"}],["meta",{"property":"og:site_name","content":"Carson's blog"}],["meta",{"property":"og:title","content":"pnpm 特性及基本使用"}],["meta",{"property":"og:description","content":"什么是 pnpm? performant npm ，意味“高性能的 npm”。 快速的，节省磁盘空间的包管理工具。 特性概览 速度快 非扁平的包结构，没有 npm3+/yarn 复杂的扁平算法，且只更新变化的文件 高效利用磁盘空间 pnpm 内部使用基于内容寻址的文件系统来存储磁盘上所有的文件："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-24T08:11:38.000Z"}],["meta",{"property":"article:tag","content":"pnpm"}],["meta",{"property":"article:published_time","content":"2023-02-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-24T08:11:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pnpm 特性及基本使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-24T08:11:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是 pnpm?","slug":"什么是-pnpm","link":"#什么是-pnpm","children":[]},{"level":2,"title":"特性概览","slug":"特性概览","link":"#特性概览","children":[{"level":3,"title":"与 npm 的区别","slug":"与-npm-的区别","link":"#与-npm-的区别","children":[]}]},{"level":2,"title":"依赖管理","slug":"依赖管理","link":"#依赖管理","children":[{"level":3,"title":"npm/yarn install 原理","slug":"npm-yarn-install-原理","link":"#npm-yarn-install-原理","children":[]},{"level":3,"title":"pnpm 依赖管理","slug":"pnpm-依赖管理","link":"#pnpm-依赖管理","children":[]},{"level":3,"title":"node_modules 结构","slug":"node-modules-结构","link":"#node-modules-结构","children":[]},{"level":3,"title":"处理 peers","slug":"处理-peers","link":"#处理-peers","children":[]}]},{"level":2,"title":"使用 pnpm","slug":"使用-pnpm","link":"#使用-pnpm","children":[{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"管理 monorepo 项目","slug":"管理-monorepo-项目","link":"#管理-monorepo-项目","children":[]}]},{"level":2,"title":"Release工作流","slug":"release工作流","link":"#release工作流","children":[{"level":3,"title":"配置 changesets","slug":"配置-changesets","link":"#配置-changesets","children":[]},{"level":3,"title":"使用changesets","slug":"使用changesets","link":"#使用changesets","children":[]},{"level":3,"title":"使用Prerelease模式","slug":"使用prerelease模式","link":"#使用prerelease模式","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1679645498000,"updatedTime":1679645498000,"contributors":[{"name":"huguangju","email":"huguangju@weli.cn","commits":1}]},"readingTime":{"minutes":10.56,"words":3169},"filePathRelative":"engineering/pnpm-intro.md","localizedDate":"2023年2月20日","excerpt":"<h2> 什么是 pnpm?</h2>\\n<p>performant npm ，意味“高性能的 npm”。\\n<strong>快速</strong>的，<strong>节省磁盘空间</strong>的包管理工具。</p>\\n<h2> 特性概览</h2>\\n<ol>\\n<li><strong>速度快</strong></li>\\n</ol>\\n<p>非扁平的包结构，没有 npm3+/yarn 复杂的扁平算法，且只更新变化的文件</p>\\n<ol>\\n<li><strong>高效利用磁盘空间</strong></li>\\n</ol>\\n<p>pnpm 内部使用<strong>基于内容寻址</strong>的文件系统来存储磁盘上所有的文件：</p>","autoDesc":true}`);export{e as data};
