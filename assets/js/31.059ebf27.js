(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{488:function(e,t,a){"use strict";a.r(t);var r=a(34),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"spark-streaming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-streaming"}},[e._v("#")]),e._v(" Spark Streaming")]),e._v(" "),a("h2",{attrs:{id:"dstream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dstream"}},[e._v("#")]),e._v(" DStream")]),e._v(" "),a("p",[e._v("Spark Streaming 是建立在微批处理上的流计算引擎，DStream 是离散化流的基础抽象，是随时间推移而收到的数据序列，代表持续性数据流和经过各种 Spark 原语操作后的结果数据流，在内部实现上，DStream 是一系列连续的 RDD 表示，每个 RDD 含有一段时间间隔的数据")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/kr/bigdata/spark/DStream.jpg",alt:"DStream"}})]),e._v(" "),a("h2",{attrs:{id:"dstream-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dstream-操作"}},[e._v("#")]),e._v(" DStream 操作")]),e._v(" "),a("h3",{attrs:{id:"转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[e._v("#")]),e._v(" 转换")]),e._v(" "),a("p",[e._v("无状态转换操作：把简单的 RDD 转换操作应用到每个批次上，也就是转换 DStream 中的每一个 RDD")]),e._v(" "),a("ul",[a("li",[e._v("Transform：允许在 DStream 上执行任意的 RDD-to-RDD 转换函数，该函数每一批次调度一次，其实也就是对 DStream 中的 RDD 应用转换")]),e._v(" "),a("li",[e._v("Join：两个流之间的 join 需要两个流的批次大小一致，这样才能做到同时触发计算。计算过程j就是对当前批次的两个流中各自的 RDD 进行 join，与两个 RDD 的 join 效果相同")])]),e._v(" "),a("p",[e._v("有状态转换操作：")]),e._v(" "),a("ul",[a("li",[e._v("UpdateStateByKey：用于记录历史记录，通过状态变量跨批次维护状态。给定一个由(键，事件)对构成的 DStream，并传递一个指定如何根据新的事件更新每个键对应状态的函数，构建出新的 DStream，其内部 RDD 序列是由每个时间区间对应的(键，状态)对组成\n"),a("ul",[a("li",[e._v("定义状态，状态可以是一个任意的数据类型")]),e._v(" "),a("li",[e._v("定义状态更新函数，用此函数阐明如何使用之前的状态和来自输入流的新值对状态进行更新")]),e._v(" "),a("li",[e._v("使用 updateStateByKey 需要对检查点目录进行配置，会使用检查点来保存状态")])])]),e._v(" "),a("li",[e._v("WindowOperations：可以设置窗口的大小和滑动窗口的间隔来动态的获取当前 Steaming 的允许状态。所有基于窗口的操作都需要两个参数（必须为采集周期大小的整数倍）：\n"),a("ul",[a("li",[e._v("窗口时长：计算内容的时间范围")]),e._v(" "),a("li",[e._v("滑动步长：隔多久触发一次计算")])])])]),e._v(" "),a("p",[e._v("关于 Window 的操作方法：")]),e._v(" "),a("ul",[a("li",[e._v("window(windowLength, slideInterval): 基于对源 DStream 窗化的批次进行计算返回一个新的 Dstream")]),e._v(" "),a("li",[e._v("countByWindow(windowLength, slideInterval): 返回一个滑动窗口计数流中的元素个数")]),e._v(" "),a("li",[e._v("reduceByWindow(func, windowLength, slideInterval): 通过使用自定义函数整合滑动区间流元素来创建一个新的单元素流")]),e._v(" "),a("li",[e._v("reduceByKeyAndWindow(func, windowLength, slideInterval, [numTasks]): 当在一个 (K,V) 对的 DStream 上调用此函数，会返回一个新 (K,V) 对的 DStream，此处通过对滑动窗口中批次数据使用 reduce 函数来整合每个 key 的 value 值")]),e._v(" "),a("li",[e._v("reduceByKeyAndWindow(func, invFunc, windowLength, slideInterval, [numTasks]): 这个函数是上述函数的变化版本，每个窗口的 reduce 值都是通过用前一个窗的 reduce 值来递增计算。通过 reduce 进入到滑动窗口数据并”反向 reduce ”离开窗口的旧数据来实现这个操作。这个函数只适用于”可逆的 reduce 函数”，也就是这些 reduce 函数有相应的”反 reduce ”函数(以参数 invFunc 形式传入)。")])]),e._v(" "),a("h3",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[e._v("#")]),e._v(" 输出")]),e._v(" "),a("p",[e._v("输出：指定了对流数据经转换操作得到的数据所要执行的操作，与 RDD 中的惰性求值类似，若 DStream 及其派生出的 DStream 都没有被执行输出操作，那么这些 DStream 就都不会被求值。若 StreamingContext 中没有设定输出操作，整个 context 就都不会启动")]),e._v(" "),a("ul",[a("li",[e._v("print()：在运行流程序的驱动结点上打印 DStream 中每一批次数据的最开始 10 个元素")]),e._v(" "),a("li",[e._v("saveAsTextFiles(prefix, [suffix])：以 text 文件形式存储 DStream 的内容。每一批次的存储文件名基于参数中的 prefix/suffix")]),e._v(" "),a("li",[e._v("saveAsObjectFiles(prefix, [suffix])：以 Java 对象序列化方式将 DStream 中的数据保存为 SequenceFiles，每一批次的存储文件名基于参数中的 prefix/suffix")]),e._v(" "),a("li",[e._v("saveAsHadoopFiles(prefix, [suffix])：将 DStream 中的数据保存为 Hadoop files，每一批次的存储文件名基于参数中的 prefix/suffix")]),e._v(" "),a("li",[e._v("foreachRDD(func)：将函数 func 应用于 DStream 的每一个 RDD。func 应该实现将每一个 RDD 中数据推送到外部系统，如将 RDD 存入文件或者通过网络将其写入数据库")])])])}),[],!1,null,null,null);t.default=i.exports}}]);