import{_ as p,W as o,X as c,a1 as l,Y as n,Z as s,$ as t,a0 as e,C as i}from"./framework-5f3abea5.js";const u={},r=n("h2",{id:"算法简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#算法简介","aria-hidden":"true"},"#"),s(" 算法简介")],-1),k=n("p",null,"滑动窗口算法（Sliding Window Algorithm）是一种常见的算法，用于解决数组或字符串的子问题。它通过维护一个大小可变的窗口，对数据进行处理。这个窗口的左右两端方向一致的向前滑动（右端固定，左端滑动；左端固定，右端滑动）。在处理数据时，窗口会向右移动，直到处理完整个数据集。",-1),d=n("p",null,"该算法常用于求解子数组或子字符串的问题，例如最大子数组和、最小子数组和、最长连续递增子序列等等。其时间复杂度通常为O(n)，是一种高效的算法。",-1),m={id:"滑动窗口的平均值",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#滑动窗口的平均值","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.cn/problems/qIsx9U/description/",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。</p><p>实现 MovingAverage 类：</p><ul><li><code>MovingAverage(size: number)</code> 用窗口大小 <code>size</code> 初始化对象。</li><li><code>next(val: number): number</code> 成员函数 <code>next</code> 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。</li></ul><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3><ul><li>使用一个队列来存储滑动窗口中的元素，使用一个变量来记录滑动窗口中所有元素的和。</li><li>每次调用 <code>next</code> 方法时，将新的元素加入队列中，并更新滑动窗口中所有元素的和。</li><li>如果队列的长度超过了滑动窗口的大小，需要将队首元素弹出，并从滑动窗口中减去该元素的值。</li><li>最后，返回滑动窗口中所有元素的平均值。</li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MovingAverage</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化队列、队列长度和当前和</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果队列长度等于规定长度，则弹出队列头部元素，同时减去该元素的值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 将新的元素加入队列尾部，并加上该元素的值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">+=</span> val<span class="token punctuation">;</span>
    <span class="token comment">// 返回队列中所有元素的平均值</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> movingAverage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MovingAverage</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 声明了窗口的长度为 3</span>
movingAverage<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 1.0 = 1 / 1</span>
movingAverage<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 5.5 = (1 + 10) / 2</span>
movingAverage<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 4.66667 = (1 + 10 + 3) / 3</span>
movingAverage<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 6.0 = (10 + 3 + 5) / 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),g={id:"最长重复子数组",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#最长重复子数组","aria-hidden":"true"},"#",-1),w={href:"https://leetcode.cn/problems/maximum-length-of-repeated-subarray/",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>给两个整数数组 <code>nums1</code> 和 <code>nums2</code> ，返回 <code>两个数组中 **公共的** 、长度最长的子数组的长度</code>。</p><h3 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h3><ul><li>枚举 nums1 和 nums2 所有的对齐方式。</li><li>第一类为 A 不变，B 的首元素与 A 中的某个元素对齐；</li><li>第二类为 B 不变，A 的首元素与 B 中的某个元素对齐。</li><li>对于每一种对齐方式，计算它们相对位置相同的重复子数组即可。</li></ul><h3 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 查找两个数组中的最长重复子数组</span>
<span class="token keyword">function</span> <span class="token function">findLength</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len1 <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> len2 <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 遍历 nums1，计算以该位置开始的最长重复子数组的长度</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>len2<span class="token punctuation">,</span> len1 <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentLength <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMaxLength</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> currentLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 遍历 nums2，计算以该位置开始的最长重复子数组的长度</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len2<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>len1<span class="token punctuation">,</span> len2 <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentLength <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMaxLength</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> currentLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> maxLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 计算以 add1 和 add2 为起点，长度为 len 的最长重复子数组的长度</span>
<span class="token keyword">function</span> <span class="token function">getMaxLength</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> add1<span class="token punctuation">,</span> add2<span class="token punctuation">,</span> len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> currentLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 nums1 和 nums2 数组中当前位置的元素相等，则更新 currentLength 和 maxLength 的值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>add1 <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">==</span> nums2<span class="token punctuation">[</span>add2 <span class="token operator">+</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentLength<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      currentLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> currentLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> maxLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={id:"无重复字符的最长子串",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#无重复字符的最长子串","aria-hidden":"true"},"#",-1),L={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},A=e(`<p>给定一个字符串 <code>s</code> ，找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><h3 id="思路-2" tabindex="-1"><a class="header-anchor" href="#思路-2" aria-hidden="true">#</a> 思路</h3><ul><li><p>使用<strong>两个指针</strong>表示字符串中的某个子串（或窗口）的<strong>左右边界</strong>，其中左指针代表着上文中「枚举子串的起始位置」，而右指针为右边界；</p></li><li><p>在每一步的操作中，将左指针向右移动一格，表示 <strong>开始枚举下一个字符作为起始位置</strong>，然后可以不断地向右移动右指针，但需要保证这两个指针对应的子串中没有重复的字符。在移动结束后，这个子串就对应着 <strong>以左指针开始的，不包含重复字符的最长子串</strong>。记录下这个子串的长度；</p></li><li><p>枚举结束后，找到的最长的子串的长度即为答案</p></li></ul><h3 id="实现-2" tabindex="-1"><a class="header-anchor" href="#实现-2" aria-hidden="true">#</a> 实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">lengthOfLongestSubstring</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> occ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">// 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动</span>
  <span class="token keyword">let</span> rk <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 左指针向右移动一格，移除一个字符</span>
      occ<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 右指针 rk 没有到达字符串末尾并，且当前字符 s.charAt(rk + 1) 没有出现过</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rk <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>occ<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>rk <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 不断地移动右指针</span>
      occ<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>rk <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token operator">++</span>rk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 第 i 到 rk 个字符是一个极长的无重复字符子串</span>
    ans <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> rk <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">为什么用 chartAt 而不用数组下标方式获取字符呢？</p><p><code>s.charAt(i - 1)</code> 和 <code>s[i - 1]</code> 都可以用来获取字符串 <code>s</code> 中下标为 <code>i - 1</code> 的字符，它们的作用是相同的。但是，它们在实现上是有一些区别。</p><ul><li><p><code>s.charAt(i - 1)</code>：<code>charAt</code> 是字符串对象的一个方法，用来获取字符串中指定位置的字符。如果 <strong>指定位置超出了字符串的范围，返回空字符串</strong>；</p></li><li><p><code>s[i - 1]</code>：如果指定位置超出了字符串的范围，会抛出一个异常</p></li></ul><p>在这个算法中，如果确定输入的字符串是合法的，那么使用 <code>s[i - 1]</code> 也是可以的，而且可能会稍微快一些。但是，为了保证代码的健壮性，建议使用 <code>charAt</code> 方法。</p></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,7),j={href:"https://leetcode.cn/circle/article/9gcJBk/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/solutions/227999/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/?languageTags=javascript",target:"_blank",rel:"noopener noreferrer"};function z(B,q){const a=i("ExternalLinkIcon");return o(),c("div",null,[r,k,d,l(" more "),n("h2",m,[v,s(),n("a",h,[s("滑动窗口的平均值"),t(a)])]),b,n("h2",g,[f,s(),n("a",w,[s("最长重复子数组"),t(a)])]),_,n("h2",y,[x,s(),n("a",L,[s("无重复字符的最长子串"),t(a)])]),A,n("ul",null,[n("li",null,[n("a",j,[s("滑动窗口详解 - 力扣"),t(a)])]),n("li",null,[n("a",M,[s("无重复字符的最长子串 - 解题思路"),t(a)])])])])}const V=p(u,[["render",z],["__file","sliding-window.html.vue"]]);export{V as default};