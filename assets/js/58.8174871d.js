(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{514:function(e,s,t){"use strict";t.r(s);var a=t(34),v=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),t("blockquote",[t("p",[e._v("Redis（REmote DIctionary Server）是一个使用 ANSI C 编写的、开源的、支持网络的、基于内存的、可选持久化的键值对存储系统")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://try.redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线 Redis 环境"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"单线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单线程模型"}},[e._v("#")]),e._v(" 单线程模型")]),e._v(" "),t("p",[e._v("Redis 基于 Reactor 模式设计的事件处理模型，是单线程运行（减少多线程上下文切换，降低资源消耗）的，通过 IO 多路复用监听多个客户端连接")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/kr/redis/Redis-%E5%8D%95%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B.png",alt:"Redis-单线程模型"}}),e._v("\nhttps://www.cnblogs.com/barrywxx/p/8570821.html")]),e._v(" "),t("h2",{attrs:{id:"数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[e._v("#")]),e._v(" 数据结构")]),e._v(" "),t("ul",[t("li",[e._v("string：二进制安全，能包含任意类型的数据，使用简单动态字符串(SDS)作为表示，最多存储512M字节")]),e._v(" "),t("li",[e._v("list：基于Linked Lists实现的双向链表，有序，可重复")]),e._v(" "),t("li",[e._v("hash：字符串间的键值映射，无序的散列表；是一个 string 类型的 field 和 value 的映射表，特别适合用于存储对象")]),e._v(" "),t("li",[e._v("set：无序的字符串集合，元素不重复，集合间操作")]),e._v(" "),t("li",[e._v("zset：和 set 相比，sorted set 增加了一个权重参数 score，使得集合中的元素能够按 score 进行有序排列")])]),e._v(" "),t("h2",{attrs:{id:"持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[e._v("#")]),e._v(" 持久化")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/kr/redis/Redis-%E6%8C%81%E4%B9%85%E5%8C%96.png",alt:"Redis-持久化"}})]),e._v(" "),t("h2",{attrs:{id:"高可用-哨兵-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高可用-哨兵-集群"}},[e._v("#")]),e._v(" 高可用（哨兵/集群）")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/kr/redis/Redis-%E9%AB%98%E5%8F%AF%E7%94%A8.png",alt:"Redis-高可用"}})]),e._v(" "),t("h2",{attrs:{id:"主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[e._v("#")]),e._v(" 主从复制")]),e._v(" "),t("p",[e._v("主从(master-slave)复制：主服务器更新数据时同步数据副本到从服务器，Redis 支持"),t("code",[e._v("主从同步")]),e._v("和"),t("code",[e._v("从从同步")]),e._v("两种，目的：")]),e._v(" "),t("ul",[t("li",[e._v("数据冗余：实现数据的热备份，高可用性")]),e._v(" "),t("li",[e._v("故障恢复：服务的冗余，避免单点故障")]),e._v(" "),t("li",[e._v("负载均衡：通过主从复制，实现读写分离，提高集群的并发和吞吐量，分担服务器负载\n::: info\n高可用或高可靠性问题：从数据和服务两个角度思考，数据的持久化和副本机制，服务的单点故障和负载均衡\n:::\n配置(命令或配置文件)：")]),e._v(" "),t("li",[e._v("在从服务器中配置 slaveof masterip masterport\n"),t("ul",[t("li",[e._v("终止与原有主服务器同步，向新主服务器同步")]),e._v(" "),t("li",[e._v("取消复制(清除主从关系)：slaveof no one")])])]),e._v(" "),t("li",[e._v("启动从服务器时，指定主服务器 redis-server --slaveof masterip masterport")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/kr/redis/Redis-%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6.png",alt:"Redis-主从复制"}})]),e._v(" "),t("ul",[t("li",[e._v("全量复制：主从建立连接后，进行全量复制（快照同步），在复制期间，主库不阻塞，缓存新接收的写命令，在复制好后同步给从库")]),e._v(" "),t("li",[e._v("命令传播：主从全量复制后，主从之间维持一个长连接，用于写命令的传播")]),e._v(" "),t("li",[e._v("增量复制：当长连接断开并恢复后，需要将断开期间的写命令同步到从库（依靠维护复制偏移量）")])]),e._v(" "),t("h2",{attrs:{id:"事务-非原子性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务-非原子性"}},[e._v("#")]),e._v(" 事务（非原子性）")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/kr/redis/Redis-%E4%BA%8B%E5%8A%A1.png",alt:"Redis-事务"}})]),e._v(" "),t("blockquote",[t("p",[e._v("Redis 事务不支持回滚，因而不满足原子性和持久性；Redis 事务简单理解就是批量执行 Redis 命令")])]),e._v(" "),t("h2",{attrs:{id:"应用场景-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-缓存"}},[e._v("#")]),e._v(" 应用场景：缓存")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/kr/redis/Redis-%E7%BC%93%E5%AD%98.png",alt:"Redis-缓存"}}),e._v("\n为什么要使用缓存？从高并发和高性能两个角度思考：")]),e._v(" "),t("ul",[t("li",[e._v("高性能：使用缓存在处理大量请求时，可以降低后端服务和数据库的负载，提高响应速度")]),e._v(" "),t("li",[e._v("高并发：使用缓存可以提高系统整体的并发和吞吐量")])]),e._v(" "),t("h3",{attrs:{id:"过期键设置和清理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过期键设置和清理"}},[e._v("#")]),e._v(" 过期键设置和清理")]),e._v(" "),t("blockquote",[t("p",[e._v("setex：设置 String 类型 key 过期时间；expire：设置其他类型 key 过期时间；persist：移除 key 过期时间")])]),e._v(" "),t("p",[e._v("是否过期判断？\nRedis 通过一个过期字典（Hash）来保存 key 过期时间。过期字典的键指向 Redis key，值是一个 long 类型整数，记录键所指向的 key 过期时间（毫秒精度的 UNIX 时间戳）")]),e._v(" "),t("p",[e._v("过期键清理策略：")]),e._v(" "),t("ul",[t("li",[e._v("惰性删除：在查询 key 时进行过期检查，过期则删除，对 CPU 最友好，但可能会造成大量过期 key 没有删除")]),e._v(" "),t("li",[e._v("定期删除：定期随机抽取一批 key 执行过期删除，Redis 会通过限制删除操作执行的时长和频率来减少删除操作对 CPU 的影响")])]),e._v(" "),t("blockquote",[t("p",[e._v("定期删除对内存应用更加友好，惰性删除对 CPU 使用更加友好，但两者都有可能存在大量过期键没有被删除的情况，这种情况需要使用内存淘汰机制")])]),e._v(" "),t("h3",{attrs:{id:"内存淘汰机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰机制"}},[e._v("#")]),e._v(" 内存淘汰机制")]),e._v(" "),t("ul",[t("li",[e._v("volatile-lru：从已设置过期时间的数据集中淘汰最近最少使用的数据")]),e._v(" "),t("li",[e._v("volatile-ttl：从已设置过期时间的数据集中淘汰将要过期的数据")]),e._v(" "),t("li",[e._v("volatile-random：从已设置过期时间的数据集中任意选择数据淘汰")]),e._v(" "),t("li",[e._v("volatitle-lru：当内存不足容纳新数据时，移除最近最少使用 key")]),e._v(" "),t("li",[e._v("volatile-lfu：从已设置过期时间的数据集中淘汰最不经常使用的数据")]),e._v(" "),t("li",[e._v("allkeys-random：从数据集中任意选择数据淘汰")]),e._v(" "),t("li",[e._v("allkeys-lfu：当内存不足容纳新数据时，移除最不经常使用 key")])]),e._v(" "),t("h3",{attrs:{id:"缓存穿透-缓存雪崩-缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透-缓存雪崩-缓存击穿"}},[e._v("#")]),e._v(" 缓存穿透/缓存雪崩/缓存击穿")]),e._v(" "),t("ul",[t("li",[e._v("缓存穿透：请求大量不存在的 key，直接绕过缓存去查询数据库，解决方法：\n"),t("ul",[t("li",[e._v("缓存无效 key，并设置过期时间，不建议")]),e._v(" "),t("li",[e._v("布隆过滤器")])])]),e._v(" "),t("li",[e._v("缓存雪崩：在短时间内，由于热点缓存数据同时大面积失效，大量请求压倒数据库，解决方法：\n"),t("ul",[t("li",[e._v("限流")]),e._v(" "),t("li",[e._v("针对热点缓存数据，随机设置缓存的失效时间，避免大面积同时失效")])])]),e._v(" "),t("li",[e._v("缓存击穿：某个 key 设置了过期时间，但在正好失效时，有大量请求进来了，导致请求转到数据库，解决方法：\n"),t("ul",[t("li",[e._v("大量并发时，只让一个请求可以获取到查询数据库的锁，其他请求需要等待，查到以后释放锁，其他请求获取到锁后，先查缓存，缓存中有数据，就不用查数据库")])])])]),e._v(" "),t("blockquote",[t("p",[e._v("怎么处理缓存穿透、雪崩、击穿的问题呢？")]),e._v(" "),t("ul",[t("li",[e._v("对空结果进行缓存/或采用布隆过滤器，用来解决缓存穿透问题。")]),e._v(" "),t("li",[e._v("设置过期时间，且加上随机值进行过期偏移，用来解决缓存雪崩问题。")]),e._v(" "),t("li",[e._v("查询数据库加分布式锁，解决缓存击穿问题。另外需要注意，加锁对性能会带来影响。")])])]),e._v(" "),t("h3",{attrs:{id:"双写一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双写一致性"}},[e._v("#")]),e._v(" 双写一致性")]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIyOTYxNDI5OA==&mid=2247487312&idx=1&sn=fa19566f5729d6598155b5c676eee62d&chksm=e8beb8e5dfc931f3e35655da9da0b61c79f2843101c130cf38996446975014f958a6481aacf1&scene=178&cur_album_id=1699766580538032128#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("缓存和数据库双写一致性问题"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("当数据发生更新时，若数据库和缓存都更新，存在先后顺序问题：")]),e._v(" "),t("ul",[t("li",[e._v("先更新缓存，后更新数据库")]),e._v(" "),t("li",[e._v("先更新数据库，后更新缓存")])]),e._v(" "),t("p",[e._v("异常问题：上述两个方案，第一个操作成功，第二个操作异常，都会导致数据不一致")]),e._v(" "),t("p",[e._v("并发问题：上述两个方案，两步都执行成功，若存在并发，则也会出现数据不一致")]),e._v(" "),t("p",[e._v("缓存利用率角度看：不建议上述两种方案，每次更新数据库，都要更新缓存，造成缓存利用率低，性能浪费，而且缓存的数据可能不是数据库的直接数据，而是通过某种计算得来的")]),e._v(" "),t("p",[e._v("采用删除缓存方案：")]),e._v(" "),t("ul",[t("li",[e._v("先删除缓存，后更新数据库")]),e._v(" "),t("li",[e._v("先更新数据库，后删除缓存")])]),e._v(" "),t("p",[e._v("异常问题：上述两种方案，第一个操作成功，第二个操作异常，都会导致数据不一致")]),e._v(" "),t("p",[e._v("并发问题：上述两种方案，在读写并发时，存在数据不一致的问题，但第二种发生概率极低")]),e._v(" "),t("p",[e._v("先更新数据库 + 再删除缓存方案，如何确保两步都执行成功（原子化），两种方案：？")]),e._v(" "),t("ul",[t("li",[e._v("采用异步重试方法，当删除缓存失败后，将重试请求写道消息队列，由专门的消费者进行重试，直到成功")]),e._v(" "),t("li",[e._v("利用中间件 Canal 订阅数据库 binlog 二进制日志，再操作缓存")])]),e._v(" "),t("blockquote",[t("p",[e._v("综上，先更新数据库 + 再删除缓存的方案，是可以保证数据一致性的，并通过消息队列或 binlog 日志确保删除缓存操作成功的")])]),e._v(" "),t("p",[e._v("删除缓存方案存在的数据不一致问题：")]),e._v(" "),t("ul",[t("li",[e._v("某线程读取到数据库或缓存中的旧值，并在删除缓存后重新写入缓存，导致缓存的值没有被更新，造成数据不一致")]),e._v(" "),t("li",[e._v("在读写分离和主从库复制延迟的情况下，可能存在从从库中读取旧值并回写至缓存中，造成数据不一致")]),e._v(" "),t("li",[e._v("解决策略：缓存延迟双删策略，两次删除缓存，但存在时间间隔，可生成一条延时消息，写入消息队列，实现延迟删除缓存")])]),e._v(" "),t("h2",{attrs:{id:"应用场景-分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-分布式锁"}},[e._v("#")]),e._v(" 应用场景：分布式锁")]),e._v(" "),t("blockquote",[t("p",[e._v("分布式锁：一种分布式集群环境下的锁：查询 DB 时，只有某个服务的一个线程能访问，其他服务其他线程都需等待锁的释放后，才能继续执行")])]),e._v(" "),t("h3",{attrs:{id:"setnx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setnx"}},[e._v("#")]),e._v(" SETNX")]),e._v(" "),t("p",[t("code",[e._v("SETNX")]),e._v("："),t("code",[e._v("set If not exist")]),e._v("的简写，当 key 不存在时，设置 key 的值，存在时，不处理")]),e._v(" "),t("p",[e._v("SETNX 分布式锁：多个线程并发执行 setnx 命令，若某个线程执行成功，则表示获取到锁，其他线程执行失败等待锁的释放，该线程执行业务后释放锁")]),e._v(" "),t("ul",[t("li",[e._v("存在的死锁问题：若该线程在执行业务过程中，由于业务异常或服务器宕机，无法释放锁，造成死锁，")]),e._v(" "),t("li",[e._v("解决方法：可设置锁的自动过期时间，但是在"),t("code",[e._v("获取锁和设置锁的过期时间")]),e._v("这两步是分开执行的，两步之间若存在异常，则会造成锁设置过期时间失败")]),e._v(" "),t("li",[e._v("解决方法：将"),t("code",[e._v("获取锁和设置锁的过期时间")]),e._v("两步当作一步原子性操作执行，使其具有原子性（set 命令）")])]),e._v(" "),t("p",[e._v("给锁设置过期时间还是存在问题：当锁的过期时间小于任务的执行时间，在线程业务执行过程中，锁被自动释放了，其他线程即可获取锁并执行任务，造成冲突")]),e._v(" "),t("p",[e._v("改进：给锁加上唯一编号，标记该锁被某条线程所持有：")]),e._v(" "),t("ul",[t("li",[e._v("设置锁的过期时间时，还需要设置唯一编号")]),e._v(" "),t("li",[e._v("主动删除锁时，需判断锁的编号是否与持有的锁编号一致，若一致，则主动删除（这一步还是存在原子性问题）")])]),e._v(" "),t("h3",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" SET")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置某个 key 的值并设置多少毫秒或秒过期 - 原子性操作")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NX ：只在键不存在时，才对键进行设置操作。 SET key value NX 效果等同于 SETNX key value 。")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# XX ：只在键已经存在时，才对键进行设置操作")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" key value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("expiration EX seconds"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("PX milliseconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("NX"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("XX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[t("code",[e._v("获取锁和设置锁的过期时间")]),e._v("这两步是原子性操作，可以通过 set 命令或 lua 脚本来保证原子性")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzAwMjI0ODk0NA==&mid=2451954663&idx=1&sn=4bd071b6aaede114263f88c790b61371&chksm=8d1c2278ba6bab6eca2ef44f21b2178cc719fffe124289b68128c0dad72429fe5f286854157a&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 分布式锁的五种方案：SETNX 命令"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"redisson-方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redisson-方案"}},[e._v("#")]),e._v(" Redisson 方案")]),e._v(" "),t("p",[e._v("SETNX、SET 实现的分布式锁存在的问题：")]),e._v(" "),t("ul",[t("li",[e._v("锁的过期时间设置？多少合适？")]),e._v(" "),t("li",[e._v("Redis 服务异常时，如何保证容错？")])]),e._v(" "),t("blockquote",[t("p",[e._v("Redisson 是一个在 Redis 的基础上实现的 Java 驻内存数据网格（In-Memory Data Grid），Redisson 在获得一个锁时，只设置一个很短的超时时间，同时起一个线程在每次快要到超时时间时去刷新锁的超时时间，在释放锁的同时结束这个线程，可以很好的解决锁的过期时间设置")])]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://github.com/redisson/redisson/wiki/%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redisson WIKI"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/CbnPRfvq4m1sqo2uKI6qQw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redisson 方案"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"redlock-红锁方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redlock-红锁方案"}},[e._v("#")]),e._v(" RedLock 红锁方案")]),e._v(" "),t("p",[e._v("基于 Redis SETNX/SET 实现的分布式锁和 Redisson 分布式锁都存在一些缺陷：")]),e._v(" "),t("ul",[t("li",[e._v("客户端由于网络/GC等原因长时间阻塞导致锁过期失效而释放，其他客户端可以正常获取锁，从而多个客户端间的线程安全问题")]),e._v(" "),t("li",[e._v("Redis 服务时间漂移，发生向前跳跃，导致锁过期提前释放，多个客户端同时持有同一把锁的情况")]),e._v(" "),t("li",[e._v("Redis 单实例问题：在单机模式下，节点宕机；或在主从模式下，主节点宕机，而从节点未同步主节点的锁信息")])]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://javakeeper.starfish.ink/data-management/Redis/Reids-Lock.html#%E5%9B%9B%E3%80%81redlock",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 分布式锁"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"应用场景-消息队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-消息队列"}},[e._v("#")]),e._v(" 应用场景：消息队列")]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://javakeeper.starfish.ink/data-management/Redis/Redis-MQ.html#%E4%B8%80%E3%80%81%E5%9B%9E%E9%A1%BE%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 消息队列"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"应用场景-限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-限流"}},[e._v("#")]),e._v(" 应用场景：限流")])])}),[],!1,null,null,null);s.default=v.exports}}]);