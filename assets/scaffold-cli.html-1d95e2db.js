const e=JSON.parse(`{"key":"v-4d8de94a","path":"/engineering/scaffold-cli.html","title":"前端脚手架 CLI 方案探索","lang":"zh-CN","frontmatter":{"title":"前端脚手架 CLI 方案探索","date":"2023-02-01T00:00:00.000Z","category":["工程化"],"tag":["cli","脚手架"],"description":"介绍 脚手架是工程化中的重要环节，用于新项目的启动和搭建，能帮助开发者提升效率和开发体验。 使用场景 脚手架自动生成项目的使用场景非常广泛，特别是在需要频繁创建新项目的情况下。以下是一些常见的使用场景： 新项目启动：当需要启动一个新项目时，可以使用脚手架自动生成项目的基础结构，包括目录结构、配置文件、依赖项等，从而加快项目启动的速度。 快速原型开发：快速创建一个原型，从而节省时间和精力。 统一项目结构：统一多个项目的结构和规范时，从而确保项目结构和规范的一致性。 项目模板定制：为不同的项目创建不同的模板，并根据不同的需求进行定制化，从而提高项目的可维护性和可扩展性。","head":[["meta",{"property":"og:url","content":"https://huguangju.cn/engineering/scaffold-cli.html"}],["meta",{"property":"og:site_name","content":"Carson's blog"}],["meta",{"property":"og:title","content":"前端脚手架 CLI 方案探索"}],["meta",{"property":"og:description","content":"介绍 脚手架是工程化中的重要环节，用于新项目的启动和搭建，能帮助开发者提升效率和开发体验。 使用场景 脚手架自动生成项目的使用场景非常广泛，特别是在需要频繁创建新项目的情况下。以下是一些常见的使用场景： 新项目启动：当需要启动一个新项目时，可以使用脚手架自动生成项目的基础结构，包括目录结构、配置文件、依赖项等，从而加快项目启动的速度。 快速原型开发：快速创建一个原型，从而节省时间和精力。 统一项目结构：统一多个项目的结构和规范时，从而确保项目结构和规范的一致性。 项目模板定制：为不同的项目创建不同的模板，并根据不同的需求进行定制化，从而提高项目的可维护性和可扩展性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-24T08:11:38.000Z"}],["meta",{"property":"article:tag","content":"cli"}],["meta",{"property":"article:tag","content":"脚手架"}],["meta",{"property":"article:published_time","content":"2023-02-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-24T08:11:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端脚手架 CLI 方案探索\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-24T08:11:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}]},{"level":2,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[{"level":3,"title":"npm create  命令","slug":"npm-create-命令","link":"#npm-create-命令","children":[]},{"level":3,"title":"启动命令行项目","slug":"启动命令行项目","link":"#启动命令行项目","children":[]},{"level":3,"title":"解析处理命令行输入","slug":"解析处理命令行输入","link":"#解析处理命令行输入","children":[]},{"level":3,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]}]},{"level":2,"title":"对比分析","slug":"对比分析","link":"#对比分析","children":[{"level":3,"title":"集成式：create-vite","slug":"集成式-create-vite","link":"#集成式-create-vite","children":[]},{"level":3,"title":"选项式：create-vue","slug":"选项式-create-vue","link":"#选项式-create-vue","children":[]},{"level":3,"title":"独立仓库：vitesse","slug":"独立仓库-vitesse","link":"#独立仓库-vitesse","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"创建项目模板","slug":"创建项目模板","link":"#创建项目模板","children":[]},{"level":2,"title":"发布到 npm","slug":"发布到-npm","link":"#发布到-npm","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1679645498000,"updatedTime":1679645498000,"contributors":[{"name":"huguangju","email":"huguangju@weli.cn","commits":1}]},"readingTime":{"minutes":15.67,"words":4700},"filePathRelative":"engineering/scaffold-cli.md","localizedDate":"2023年2月1日","excerpt":"<h2> 介绍</h2>\\n<p>脚手架是工程化中的重要环节，用于新项目的启动和搭建，能帮助开发者提升效率和开发体验。</p>\\n<h3> 使用场景</h3>\\n<p>脚手架自动生成项目的使用场景非常广泛，特别是在需要频繁创建新项目的情况下。以下是一些常见的使用场景：</p>\\n<ol>\\n<li>\\n<p>新项目启动：当需要启动一个新项目时，可以使用脚手架自动生成项目的基础结构，包括目录结构、配置文件、依赖项等，从而加快项目启动的速度。</p>\\n</li>\\n<li>\\n<p>快速原型开发：快速创建一个原型，从而节省时间和精力。</p>\\n</li>\\n<li>\\n<p>统一项目结构：统一多个项目的结构和规范时，从而确保项目结构和规范的一致性。</p>\\n</li>\\n<li>\\n<p>项目模板定制：为不同的项目创建不同的模板，并根据不同的需求进行定制化，从而提高项目的可维护性和可扩展性。</p>\\n</li>\\n</ol>\\n","autoDesc":true}`);export{e as data};