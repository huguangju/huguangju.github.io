const e=JSON.parse(`{"key":"v-03d54d58","path":"/code/basic/fed-cache-and-tec-solutions1.html","title":"前端缓存与技术方案（上）","lang":"zh-CN","frontmatter":{"title":"前端缓存与技术方案（上）","date":"2023-02-17T00:00:00.000Z","category":["基础"],"tag":["缓存"],"description":"前言 缓存的合理使用可提升网页性能。 什么是缓存（cache）？ 缓存是计算机系统中的一种技术，用于临时存储经常访问的数据，以加快数据访问速度。缓存通常位于数据访问路径的中间，可以在数据访问时快速提供数据，而无需每次都从原始数据源获取数据。缓存可以是硬件或软件实现的，可以在多个层次上实现，例如浏览器缓存、操作系统缓存、CPU 缓存等。缓存的使用可以显著提高系统性能，减少对原始数据源的访问次数，从而减少系统资源的占用和延迟。 可以看出，缓存的重点在于访问速度快、性能高。","head":[["meta",{"property":"og:url","content":"https://huguangju.cn/code/basic/fed-cache-and-tec-solutions1.html"}],["meta",{"property":"og:site_name","content":"Carson's blog"}],["meta",{"property":"og:title","content":"前端缓存与技术方案（上）"}],["meta",{"property":"og:description","content":"前言 缓存的合理使用可提升网页性能。 什么是缓存（cache）？ 缓存是计算机系统中的一种技术，用于临时存储经常访问的数据，以加快数据访问速度。缓存通常位于数据访问路径的中间，可以在数据访问时快速提供数据，而无需每次都从原始数据源获取数据。缓存可以是硬件或软件实现的，可以在多个层次上实现，例如浏览器缓存、操作系统缓存、CPU 缓存等。缓存的使用可以显著提高系统性能，减少对原始数据源的访问次数，从而减少系统资源的占用和延迟。 可以看出，缓存的重点在于访问速度快、性能高。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-05T14:01:34.000Z"}],["meta",{"property":"article:tag","content":"缓存"}],["meta",{"property":"article:published_time","content":"2023-02-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-05T14:01:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端缓存与技术方案（上）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-05T14:01:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"什么是缓存（cache）？","slug":"什么是缓存-cache","link":"#什么是缓存-cache","children":[]},{"level":3,"title":"什么是前端缓存？","slug":"什么是前端缓存","link":"#什么是前端缓存","children":[]},{"level":3,"title":"前端有哪此缓存？","slug":"前端有哪此缓存","link":"#前端有哪此缓存","children":[]}]},{"level":2,"title":"HTTP 缓存","slug":"http-缓存","link":"#http-缓存","children":[{"level":3,"title":"与缓存有关的首部字段名","slug":"与缓存有关的首部字段名","link":"#与缓存有关的首部字段名","children":[]},{"level":3,"title":"强缓存","slug":"强缓存","link":"#强缓存","children":[]},{"level":3,"title":"缓存新鲜度与使用期算法","slug":"缓存新鲜度与使用期算法","link":"#缓存新鲜度与使用期算法","children":[]},{"level":3,"title":"从协商缓存到启发式缓存","slug":"从协商缓存到启发式缓存","link":"#从协商缓存到启发式缓存","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1680696631000,"updatedTime":1680703294000,"contributors":[{"name":"huguangju","email":"huguangju@weli.cn","commits":2}]},"readingTime":{"minutes":17.15,"words":5144},"filePathRelative":"code/basic/fed-cache-and-tec-solutions1.md","localizedDate":"2023年2月17日","excerpt":"<h2> 前言</h2>\\n<p>缓存的合理使用可<strong>提升网页性能</strong>。</p>\\n<h3> 什么是缓存（cache）？</h3>\\n<p>缓存是计算机系统中的一种技术，用于临时存储经常访问的数据，以加快数据访问速度。缓存通常位于数据访问路径的中间，可以在数据访问时快速提供数据，而无需每次都从原始数据源获取数据。缓存可以是硬件或软件实现的，可以在多个层次上实现，例如浏览器缓存、操作系统缓存、CPU 缓存等。缓存的使用可以显著提高系统性能，减少对原始数据源的访问次数，从而减少系统资源的占用和延迟。</p>\\n<p>可以看出，缓存的重点在于<strong>访问速度快、性能高</strong>。</p>\\n","autoDesc":true}`);export{e as data};