const chapters = [
  {
    id: "intro",
    index: "引",
    title: "固体物理学发展概况",
    page: "1",
    summary:
      "从晶体学、X 射线衍射、量子力学到现代材料与器件，建立固体物理的学习地图：先看结构，再看结合与激发，最后通向电、磁、热、介电和超导性质。",
    sections: ["固体物理研究对象", "晶体结构与微观排列", "电子论和量子力学的作用", "现代固体物理的应用线索"],
    concepts: [
      ["结构决定性质", "固体物理把原子排列、相互作用和宏观性质联系起来，是后续所有章节的主线。"],
      ["周期性", "晶体中大量重复的空间结构使波、能带和衍射成为有效语言。"],
      ["多尺度", "从原子尺度的键合和缺陷，到宏观尺度的输运、磁性和热学响应。"],
    ],
    formulas: [
      ["课程主线", "\\text{结构} \\to \\text{结合} \\to \\text{缺陷/振动} \\to \\text{电子态} \\to \\text{宏观响应}", "先建立几何和相互作用，再讨论由集体运动产生的性质。"],
    ],
    visuals: [
      ["知识地图", "把结构、结合、振动、能带、输运和响应性质连成可点击图谱。", "planned"],
      ["历史时间轴", "展示晶体学、X 射线衍射、量子力学和半导体物理的关键节点。", "planned"],
    ],
  },
  {
    id: "ch1",
    index: "1",
    title: "晶体的几何",
    page: "2",
    summary:
      "建立晶格、基元、晶胞、晶向、晶面、对称和衍射的基础语言，是后续讨论晶体结合、声子、能带和输运的坐标系。",
    sections: ["晶格及其周期性", "晶向、晶面和它们的标志", "晶体的宏观对称和点群", "晶格的对称性", "X 射线衍射方法", "中子衍射和电子衍射"],
    concepts: [
      [
        "晶格与原胞",
        "概念：晶格是把晶体中周期性重复的等价位置抽象成的空间点阵。特点：晶格点表示重复规律，不直接等同于真实原子；把一组基矢 \\(\\mathbf{a}_1\\)、\\(\\mathbf{a}_2\\)、\\(\\mathbf{a}_3\\) 作整数平移，就能生成所有等价格点。简单立方、体心立方和面心立方的差别，体现在额外格点是否出现在体心或面心位置。一个晶格的最小周期单元称为晶格的原胞。",
        "在“晶格与晶胞实验室”中切换晶胞类型，观察角点、体心、面心格点如何改变配位数和有效原子数。",
      ],
      [
        "布拉维格子",
        "概念：布拉维格子是所有格点完全等价的无限周期点阵。特点：点阵经过任意晶格矢量 \\(\\mathbf{R}=l_1\\mathbf{a}_1+l_2\\mathbf{a}_2+l_3\\mathbf{a}_3\\)（\\(l_1,l_2,l_3\\) 为整数）平移后与自身完全重合，且每个格点周围环境相同；它描述的是晶体最基本的平移对称性。",
        "先用简单立方、体心立方和面心立方观察不同布拉维格子的平移等价性，再对比金刚石结构或六角密排堆积，理解 \\(\\text{布拉维格子}+\\text{基元}\\) 才给出实际晶体结构。",
      ],
      [
        "基元",
        "概念：基元是附着在每个晶格点上的原子、离子或原子团。特点：晶格给出重复位置，基元给出每个重复位置上的实际物质内容；金刚石结构可以看成面心立方格点再叠加四面体基元，因此配位数变成 \\(4\\)。",
        "在“晶格与晶胞实验室”中选择金刚石结构，对比面心点和四面体位置，理解 \\(\\text{晶格}+\\text{基元}=\\text{晶体结构}\\)。",
      ],
      [
        "晶胞",
        "概念：晶胞是晶体结构中可通过平移重复来铺满整个空间的基本结构单元。特点：常规晶胞不一定是最小体积，但通常能清楚展示晶体对称性；调节重复晶胞数时，边界会连续拼接，说明晶体结构由同一个单元反复平移生成。",
        "在“晶格与晶胞实验室”中调整重复晶胞数和原子半径，观察同一晶胞如何在三维空间连续铺展。",
      ],
      [
        "Miller 指数",
        "概念：Miller 指数 \\((hkl)\\) 是用来标记晶面族取向的一组三个整数。特点：它由晶面在三条晶轴上截距的倒数化为最小整数比得到，而不是直接描述某一片有限平面；指数越大，通常表示对应方向截距越短、同族晶面间距越小。\\((100)\\)、\\((110)\\)、\\((111)\\) 因此代表不同取向和不同面间距。",
        "在“Miller 指数切片”中改变 \\(h\\)、\\(k\\)、\\(l\\) 和层序 \\(n\\)，观察截距、法向 \\([hkl]\\)、平行晶面族和 \\(d=a/\\sqrt{h^2+k^2+l^2}\\) 的关系。",
      ],
      [
        "晶体对称性",
        "概念：晶体对称性是指晶体经过某些空间操作后保持结构不变的性质。特点：常见对称操作包括平移、旋转、反演和镜面反射；同一种晶格在允许的对称操作后保持等价，不同晶格类型的体心、面心位置会改变可允许的对称操作和局部近邻环境。",
        "先用“晶格与晶胞实验室”观察 SC、BCC、FCC 的几何差别，再用“Miller 指数切片”比较不同晶面取向下的对称性。",
      ],
      [
        "倒易格子",
        "概念：倒易格子是由实空间晶格定义出的波矢空间点阵，用来描述晶面族、波的周期性和衍射条件。特点：每个 \\((hkl)\\) 对应一个倒易矢量 \\(\\mathbf{G}\\)；衍射峰不是任意出现的，它既要满足结构因子选择定则，也要落在由波长决定的 Bragg 可达范围内。",
        "在“倒易格子与衍射点”中切换 SC、BCC、FCC、金刚石结构和波长，观察哪些 \\((hkl)\\) 点被选择定则消光，哪些点能进入 Bragg 可达圆。",
      ],
    ],
    formulas: [
      ["晶格平移", "\\mathbf{R}=n_1\\mathbf{a}_1+n_2\\mathbf{a}_2+n_3\\mathbf{a}_3", "n1、n2、n3 为整数；a1、a2、a3 是晶格基矢。"],
      ["倒格矢", "\\mathbf{b}_1=2\\pi\\frac{\\mathbf{a}_2\\times\\mathbf{a}_3}{\\mathbf{a}_1\\cdot(\\mathbf{a}_2\\times\\mathbf{a}_3)}", "循环置换可得 b2、b3，并满足 ai · bj = 2π δij。"],
      ["Bragg 条件", "2d\\sin\\theta=n\\lambda", "用晶面间距 d、入射角 θ 和波长 λ 判断衍射峰位置。"],
    ],
    visuals: [
      ["晶格与晶胞实验室", "已实现：切换简单立方、体心立方、面心立方、六角密排堆积和金刚石结构，并调节晶格常数与原子半径。", "ready"],
      ["Miller 指数切片", "已实现：输入 (hkl) 与层序 n，在晶胞中显示对应晶面族、截距和法向。", "ready"],
      ["倒易格子与衍射点", "已实现：把实空间晶胞转换为倒易点阵，并标出满足选择定则与 Bragg 条件的反射点。", "ready"],
    ],
  },
  {
    id: "ch2",
    index: "2",
    title: "晶体的结合",
    page: "28",
    summary:
      "讨论离子键、共价键、金属键、范德瓦耳斯结合等基本形式，并用结合能和平衡间距解释晶体稳定性。",
    sections: ["晶体的基本结合形式", "原子的负电性", "元素和化合物晶体结合的规律性", "结合能"],
    concepts: [
      ["结合能", "把分散原子结合成晶体所释放或需要克服的能量，反映晶体稳定程度。"],
      ["平衡间距", "吸引作用和排斥作用达到平衡时的原子间距。"],
      ["电负性", "描述原子吸引电子的倾向，帮助判断化合物中键的离子性或共价性。"],
    ],
    formulas: [
      ["势能近似", "U(r)=-\\frac{A}{r^m}+\\frac{B}{r^n}", "吸引项和排斥项共同决定平衡位置。"],
      ["平衡条件", "\\frac{dU}{dr}=0", "势能极小点对应稳定晶体的平衡间距。"],
    ],
    visuals: [
      ["势能曲线调参", "已实现：改变吸引项、排斥项的指数和强度，观察平衡间距与结合能变化。", "ready"],
      ["键型对比板", "已实现：用电子转移、共享、离域和弱相互作用示意离子键、共价键、金属键和分子晶体。", "ready"],
    ],
  },
  {
    id: "ch3",
    index: "3",
    title: "相图",
    page: "42",
    summary:
      "用热力学语言描述固体相、两相和三相平衡、共晶与包晶转变，以及固溶体自由能与相稳定性。",
    sections: ["固体相", "两相平衡并存的准静态相变", "三相平衡并存与共晶和包晶转变", "相转变过程的实例", "固溶体的混合熵和自由能", "有限和连续固溶体", "高温熔化和共晶相图"],
    concepts: [
      ["相", "在成分、结构和性质上均匀的物质状态。"],
      ["相平衡", "不同相在给定温度、压强和成分下共存且宏观不再变化。"],
      ["自由能曲线", "通过自由能最低原则判断相稳定性与相分离趋势。"],
    ],
    formulas: [
      ["Gibbs 自由能", "G=H-TS", "温度升高时熵项对相稳定性的影响增强。"],
      ["混合熵", "\\Delta S_{\\mathrm{mix}}=-k_B\\left[x\\ln x+(1-x)\\ln(1-x)\\right]", "理想二元固溶体的混合熵表达。"],
    ],
    visuals: [
      ["二元相图阅读器", "拖动温度和成分，标出单相区、两相区和杠杆定则结果。", "planned"],
      ["自由能公切线", "用两条自由能曲线展示两相平衡条件。", "planned"],
    ],
  },
  {
    id: "ch4",
    index: "4",
    title: "晶体中的缺陷和扩散",
    page: "60",
    summary:
      "把真实晶体从理想周期结构中拉出来，讨论晶界、位错、点缺陷、扩散和离子导电。",
    sections: ["多晶体和晶粒间界", "位错", "空位、间隙原子的运动和统计平衡", "扩散和原子布朗运动", "离子晶体中的点缺陷和离子性导电"],
    concepts: [
      ["点缺陷", "空位、间隙原子和替位原子会影响扩散、电导和材料强度。"],
      ["位错", "线缺陷改变晶体塑性变形方式，是理解材料力学性质的关键。"],
      ["扩散", "原子在热激发下的随机迁移，宏观上表现为浓度梯度驱动的物质输运。"],
    ],
    formulas: [
      ["Fick 第一定律", "\\mathbf{J}=-D\\nabla c", "粒子流密度沿浓度降低方向。"],
      ["Arrhenius 形式", "D=D_0\\exp\\left(-\\frac{Q}{k_BT}\\right)", "扩散系数随温度升高快速增大。"],
    ],
    visuals: [
      ["缺陷编辑器", "在晶格中添加空位、间隙原子和替位原子，观察局部结构畸变。", "planned"],
      ["随机游走扩散", "用粒子随机游走展示扩散系数和温度的关系。", "planned"],
    ],
  },
  {
    id: "ch5",
    index: "5",
    title: "晶格振动和晶体热学性质",
    page: "81",
    summary:
      "把原子集体振动量子化为声子，并用爱因斯坦、德拜模型解释热容量、热膨胀和热传导。",
    sections: ["简正振动和量子热容量理论", "爱因斯坦和德拜理论", "双原子链的振动", "三维晶格的振动", "晶格的状态方程和热膨胀", "晶格的热传导"],
    concepts: [
      ["简正模", "耦合振子的集体振动可以分解为彼此独立的模式。"],
      ["声子", "晶格振动能量量子，是热容量和热传导的基本准粒子。"],
      ["声学支与光学支", "双原子链中会出现低频同相振动和高频反相振动。"],
    ],
    formulas: [
      ["谐振子能级", "E_n=\\left(n+\\frac{1}{2}\\right)\\hbar\\omega", "量子化振动能级是热容量理论的基础。"],
      ["低温 Debye 定律", "C_V\\propto T^3", "三维晶体低温热容量的典型行为。"],
    ],
    visuals: [
      ["一维链振动动画", "调节质量、弹簧常数和波矢，显示声学支与光学支。", "planned"],
      ["热容量曲线对比", "对比经典、Einstein 和 Debye 模型随温度变化的差异。", "planned"],
    ],
  },
  {
    id: "ch6",
    index: "6",
    title: "能带论",
    page: "110",
    summary:
      "在周期势场中讨论电子运动，从 Bloch 波、简约波矢到能态密度，解释导体、绝缘体和半导体差别。",
    sections: ["一维周期场中电子运动的近似分析", "三维周期场中的电子运动", "布洛赫函数和简约波矢", "能态密度和 X 射线谱", "原子能级和能带间的联系-紧束缚近似", "准经典运动", "导体、绝缘体和半导体的能带论"],
    concepts: [
      ["Bloch 定理", "周期势场中的电子波函数可写成平面波与同周期函数的乘积。"],
      ["禁带", "周期势使某些能量范围没有允许电子态。"],
      ["有效质量", "能带曲率决定电子在外场下的加速度响应。"],
    ],
    formulas: [
      ["Bloch 波", "\\psi_{\\mathbf{k}}(\\mathbf{r})=u_{\\mathbf{k}}(\\mathbf{r})e^{i\\mathbf{k}\\cdot\\mathbf{r}}", "u_k(r) 具有晶格周期性。"],
      ["有效质量", "\\frac{1}{m^*}=\\frac{1}{\\hbar^2}\\frac{d^2E}{dk^2}", "一维近似下能带曲率越大，有效质量越小。"],
    ],
    visuals: [
      ["一维周期势能带", "调节势垒高度和周期，观察能隙打开。", "planned"],
      ["第一 Brillouin 区", "显示简约波矢折回和能带重复区图像。", "planned"],
    ],
  },
  {
    id: "ch7",
    index: "7",
    title: "金属电子论",
    page: "149",
    summary:
      "用费米统计和输运理论描述金属电子热容量、功函数、Boltzmann 方程、电导和热电性质。",
    sections: ["费米统计和电子热容量", "功函数和接触电势", "分布函数和玻尔兹曼方程", "弛豫时间近似和电导率的公式", "各向同性弹性散射和弛豫时间", "晶格散射和电导", "金属的输运性质"],
    concepts: [
      ["费米面", "低温金属中只有费米面附近的电子显著参与输运和热激发。"],
      ["弛豫时间", "描述电子在散射后恢复平衡分布的平均时间尺度。"],
      ["功函数", "电子从金属内部移到真空所需的最小能量。"],
    ],
    formulas: [
      ["Drude 电导率", "\\sigma=\\frac{ne^2\\tau}{m}", "载流子密度、散射时间和质量共同决定电导率。"],
      ["Fermi-Dirac 分布", "f(E)=\\frac{1}{\\exp\\left(\\frac{E-E_F}{k_BT}\\right)+1}", "描述电子态占据概率。"],
    ],
    visuals: [
      ["费米分布滑块", "拖动温度显示费米面附近占据概率如何变宽。", "planned"],
      ["散射与电导模拟", "调节弛豫时间观察电流响应变化。", "planned"],
    ],
  },
  {
    id: "ch8",
    index: "8",
    title: "半导体电子论",
    page: "184",
    summary:
      "解释半导体能谱、载流子统计、电导、Hall 效应、p-n 结和典型器件应用。",
    sections: ["概述", "半导体能谱和载流子", "半导体电子的费米统计分布", "电导和霍尔效应", "p-n 结", "半导体的应用"],
    concepts: [
      ["载流子", "导带电子和价带空穴共同承担半导体中的电荷输运。"],
      ["掺杂", "施主和受主杂质能显著改变载流子浓度和费米能级位置。"],
      ["p-n 结", "p 区与 n 区接触后形成内建电场和耗尽层。"],
    ],
    formulas: [
      ["本征载流子", "n_i^2=np", "热平衡下电子和空穴浓度满足质量作用定律。"],
      ["电导率", "\\sigma=e\\left(n\\mu_n+p\\mu_p\\right)", "电子和空穴迁移率共同决定半导体电导。"],
    ],
    visuals: [
      ["能带弯曲演示", "调节掺杂浓度，显示 p-n 结耗尽层和内建电势。", "planned"],
      ["Hall 效应实验台", "改变磁场和载流子类型，观察 Hall 电压符号。", "planned"],
    ],
  },
  {
    id: "ch9",
    index: "9",
    title: "固体的磁性",
    page: "209",
    summary:
      "从原子磁矩出发，讨论顺磁、抗磁、铁磁、反铁磁和亚铁磁，并连接统计理论与磁性材料行为。",
    sections: ["原子磁性", "一般固体磁性概述", "顺磁性的统计理论和顺磁性盐", "铁磁性", "反铁磁性和亚铁磁性"],
    concepts: [
      ["磁矩", "电子轨道运动和自旋共同产生原子磁矩。"],
      ["交换作用", "量子力学交换能决定磁矩趋向同向或反向排列。"],
      ["磁畴", "铁磁体中自发磁化方向相同的小区域。"],
    ],
    formulas: [
      ["Curie 定律", "\\chi=\\frac{C}{T}", "理想顺磁体磁化率随温度升高而降低。"],
      ["Curie-Weiss 形式", "\\chi=\\frac{C}{T-\\theta}", "用 θ 表征相互作用对顺磁响应的修正。"],
    ],
    visuals: [
      ["自旋阵列", "切换顺磁、铁磁、反铁磁排列并观察净磁化。", "planned"],
      ["磁滞回线", "拖动外磁场，展示磁畴翻转和剩磁。", "planned"],
    ],
  },
  {
    id: "ch10",
    index: "10",
    title: "固体的介电性",
    page: "241",
    summary:
      "通过电子极化、离子极化和介电弛豫解释固体对外电场的响应，以及频率相关的介电性质。",
    sections: ["弹性偶极子的强迫振动", "电子极化", "离子极化", "介电弛豫"],
    concepts: [
      ["极化", "外电场使正负电荷中心发生相对位移，形成宏观电偶极矩密度。"],
      ["介电常数", "表征材料削弱或增强电场响应的能力。"],
      ["弛豫", "极化跟随外场变化需要时间，因此介电响应依赖频率。"],
    ],
    formulas: [
      ["极化强度", "\\mathbf{P}=\\chi_e\\varepsilon_0\\mathbf{E}", "线性介质中极化强度与电场成正比。"],
      ["Debye 弛豫", "\\varepsilon(\\omega)=\\varepsilon_\\infty+\\frac{\\varepsilon_s-\\varepsilon_\\infty}{1+i\\omega\\tau}", "描述单一弛豫时间下的频率响应。"],
    ],
    visuals: [
      ["偶极子响应动画", "改变外场频率，观察偶极子相位滞后。", "planned"],
      ["介电谱曲线", "绘制 ε' 与 ε'' 随频率变化的曲线。", "planned"],
    ],
  },
  {
    id: "ch11",
    index: "11",
    title: "超导电的基本现象和基本规律",
    page: "254",
    summary:
      "聚焦零电阻、Meissner 效应、London 方程和超导转变热力学，为进一步学习 BCS 理论和现代超导材料打基础。",
    sections: ["超导体的基本电磁学性质", "伦敦的电磁学方程", "超导转变和热力学"],
    concepts: [
      ["零电阻", "超导态直流电阻降为零，电流可无耗散持续流动。"],
      ["Meissner 效应", "超导体进入超导态后排斥内部磁场，是区别于理想导体的核心现象。"],
      ["穿透深度", "外磁场只能在超导体表面一定深度内存在。"],
    ],
    formulas: [
      ["London 方程", "\\nabla^2\\mathbf{B}=\\frac{\\mathbf{B}}{\\lambda_L^2}", "磁场在超导体内部指数衰减。"],
      ["临界场近似", "H_c(T)=H_c(0)\\left[1-\\left(\\frac{T}{T_c}\\right)^2\\right]", "常用来描述热力学临界场随温度变化。"],
    ],
    visuals: [
      ["Meissner 效应场线", "改变温度和外磁场，显示磁场被排斥或穿透。", "planned"],
      ["临界场相图", "展示 T-H 平面中的正常态和超导态边界。", "planned"],
    ],
  },
];

const latticeDefs = {
  sc: {
    name: "简单立方",
    atoms: "1",
    coordination: "6",
    packing: "π / 6 ≈ 0.524",
    nearest: "最近邻距离 a",
    color: "#2f7d62",
  },
  bcc: {
    name: "体心立方",
    atoms: "2",
    coordination: "8",
    packing: "√3π / 8 ≈ 0.680",
    nearest: "最近邻距离 √3a / 2",
    color: "#b87022",
  },
  fcc: {
    name: "面心立方",
    atoms: "4",
    coordination: "12",
    packing: "π / (3√2) ≈ 0.740",
    nearest: "最近邻距离 a / √2",
    color: "#376d9f",
  },
  hcp: {
    name: "六角密排堆积",
    atoms: "6",
    coordination: "12",
    packing: "π / (3√2) ≈ 0.740",
    nearest: "最近邻距离 a；理想 c/a = √(8/3)",
    color: "#6f7f35",
  },
  diamond: {
    name: "金刚石结构",
    atoms: "8",
    coordination: "4",
    packing: "√3π / 16 ≈ 0.340",
    nearest: "最近邻距离 √3a / 4",
    color: "#b94e48",
  },
};

const dom = {
  workspace: document.querySelector(".workspace"),
  nav: document.querySelector("#chapterNav"),
  search: document.querySelector("#chapterSearch"),
  eyebrow: document.querySelector("#chapterEyebrow"),
  title: document.querySelector("#chapterTitle"),
  summary: document.querySelector("#chapterSummary"),
  count: document.querySelector("#chapterCount"),
  progress: document.querySelector("#progressBar"),
  sections: document.querySelector("#sectionList"),
  concepts: document.querySelector("#conceptList"),
  formulas: document.querySelector("#formulaList"),
  latticeLab: document.querySelector("#latticeLab"),
  millerLab: document.querySelector("#millerLab"),
  reciprocalLab: document.querySelector("#reciprocalLab"),
  potentialLab: document.querySelector("#potentialLab"),
  bondLab: document.querySelector("#bondLab"),
  visualPlan: document.querySelector("#visualPlan"),
};

let activeChapterId = "ch1";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function typesetMath(root = document.body) {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([root]).catch((error) => {
      console.error("MathJax typeset failed", error);
    });
  }
}

function renderNav(filter = "") {
  const keyword = filter.trim().toLowerCase();
  const visible = chapters.filter((chapter) => {
    const haystack = [chapter.index, chapter.title, chapter.summary, ...chapter.sections]
      .join(" ")
      .toLowerCase();
    return haystack.includes(keyword);
  });

  dom.nav.innerHTML = visible
    .map(
      (chapter) => `
        <button class="chapter-button ${chapter.id === activeChapterId ? "is-active" : ""}" type="button" data-id="${chapter.id}">
          <span class="chapter-index">${escapeHtml(chapter.index)}</span>
          <span>
            <span class="chapter-name">${escapeHtml(chapter.title)}</span>
            <span class="chapter-meta">第 ${escapeHtml(chapter.page)} 页起 · ${chapter.sections.length} 个小节</span>
          </span>
        </button>
      `,
    )
    .join("");

  if (!visible.length) {
    dom.nav.innerHTML = `<p class="empty-state">没有匹配的章节。</p>`;
  }
}

function renderChapter(chapterId) {
  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[1];
  activeChapterId = chapter.id;
  const chapterPosition = chapters.findIndex((item) => item.id === chapter.id) + 1;

  dom.eyebrow.textContent = chapter.id === "intro" ? "课程入口" : `第 ${chapter.index} 章`;
  dom.title.textContent = chapter.title;
  dom.summary.textContent = chapter.summary;
  dom.count.textContent = `${chapterPosition} / ${chapters.length}`;
  dom.progress.style.width = `${(chapterPosition / chapters.length) * 100}%`;

  dom.sections.innerHTML = chapter.sections.map((section) => `<li>${escapeHtml(section)}</li>`).join("");
  dom.concepts.innerHTML = chapter.concepts
    .map(
      ([term, text]) => `
        <div class="concept-item">
          <strong>${escapeHtml(term)}</strong>
          <p>${escapeHtml(text)}</p>
        </div>
      `,
    )
    .join("");
  dom.formulas.innerHTML = chapter.formulas
    .map(
      ([name, expression, note]) => `
        <div class="formula-item">
          <strong>${escapeHtml(name)}</strong>
          <div class="formula-expression">\\[${escapeHtml(expression)}\\]</div>
          <p>${escapeHtml(note)}</p>
        </div>
      `,
    )
    .join("");

  const isChapterOne = chapter.id === "ch1";
  const isChapterTwo = chapter.id === "ch2";
  dom.latticeLab.hidden = !isChapterOne;
  dom.millerLab.hidden = !isChapterOne;
  dom.reciprocalLab.hidden = !isChapterOne;
  dom.potentialLab.hidden = !isChapterTwo;
  dom.bondLab.hidden = !isChapterTwo;
  renderVisualPlan(chapter);
  typesetMath(dom.workspace);
  renderNav(dom.search.value);
  if (isChapterOne) {
    updateLattice();
    updateMiller();
    updateReciprocal();
  }
  if (isChapterTwo) {
    updatePotential();
    updateBond();
  }
}

function renderVisualPlan(chapter) {
  const hasReadyVisuals = chapter.visuals.some(([, , status]) => status === "ready");
  const title = hasReadyVisuals ? "本章可视化模块" : "本章后续交互模块";
  dom.visualPlan.innerHTML = `
    <h3>${title}</h3>
    <div class="visual-card-list">
      ${chapter.visuals
        .map(
          ([name, description, status]) => `
            <div class="visual-card" data-status="${escapeHtml(status)}">
              <strong>${escapeHtml(name)}</strong>
              <p>${escapeHtml(description)}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

dom.nav.addEventListener("click", (event) => {
  const button = event.target.closest(".chapter-button");
  if (!button) return;
  renderChapter(button.dataset.id);
});

dom.search.addEventListener("input", (event) => {
  renderNav(event.target.value);
});

const canvas = document.querySelector("#latticeCanvas");
const ctx = canvas.getContext("2d");
const controls = {
  type: document.querySelector("#latticeType"),
  a: document.querySelector("#latticeA"),
  cells: document.querySelector("#cellCount"),
  radius: document.querySelector("#atomRadius"),
  speed: document.querySelector("#rotationSpeed"),
  showEdges: document.querySelector("#showEdges"),
  showLabels: document.querySelector("#showLabels"),
  reset: document.querySelector("#resetView"),
  metrics: document.querySelector("#latticeMetrics"),
  aValue: document.querySelector("#latticeAValue"),
  cellsValue: document.querySelector("#cellCountValue"),
  radiusValue: document.querySelector("#atomRadiusValue"),
  speedValue: document.querySelector("#rotationSpeedValue"),
};

const millerCanvas = document.querySelector("#millerCanvas");
const millerCtx = millerCanvas.getContext("2d");
const millerControls = {
  h: document.querySelector("#millerH"),
  k: document.querySelector("#millerK"),
  l: document.querySelector("#millerL"),
  order: document.querySelector("#millerOrder"),
  showFamily: document.querySelector("#showMillerFamily"),
  metrics: document.querySelector("#millerMetrics"),
  orderValue: document.querySelector("#millerOrderValue"),
};

const reciprocalCanvas = document.querySelector("#reciprocalCanvas");
const reciprocalCtx = reciprocalCanvas.getContext("2d");
const reciprocalControls = {
  type: document.querySelector("#reciprocalType"),
  lambda: document.querySelector("#reciprocalLambda"),
  layer: document.querySelector("#reciprocalLayer"),
  range: document.querySelector("#reciprocalRange"),
  metrics: document.querySelector("#reciprocalMetrics"),
  lambdaValue: document.querySelector("#reciprocalLambdaValue"),
  layerValue: document.querySelector("#reciprocalLayerValue"),
  rangeValue: document.querySelector("#reciprocalRangeValue"),
};

const potentialCanvas = document.querySelector("#potentialCanvas");
const potentialCtx = potentialCanvas.getContext("2d");
const potentialControls = {
  m: document.querySelector("#attractionExponent"),
  n: document.querySelector("#repulsionExponent"),
  attraction: document.querySelector("#attractionStrength"),
  repulsion: document.querySelector("#repulsionStrength"),
  metrics: document.querySelector("#potentialMetrics"),
  mValue: document.querySelector("#attractionExponentValue"),
  nValue: document.querySelector("#repulsionExponentValue"),
  attractionValue: document.querySelector("#attractionStrengthValue"),
  repulsionValue: document.querySelector("#repulsionStrengthValue"),
};

const bondCanvas = document.querySelector("#bondCanvas");
const bondCtx = bondCanvas.getContext("2d");
const bondControls = {
  focus: document.querySelector("#bondFocus"),
  delta: document.querySelector("#electronegativityDelta"),
  delocalization: document.querySelector("#electronDelocalization"),
  metrics: document.querySelector("#bondMetrics"),
  deltaValue: document.querySelector("#electronegativityDeltaValue"),
  delocalizationValue: document.querySelector("#electronDelocalizationValue"),
};

const latticeState = {
  rotX: -0.62,
  rotY: 0.72,
  dragging: false,
  lastX: 0,
  lastY: 0,
};

const HCP_LAYER_GAP = Math.sqrt(2 / 3);
const HCP_ROW_HEIGHT = Math.sqrt(3) / 2;

function keyOf(x, y, z) {
  return `${x.toFixed(3)}|${y.toFixed(3)}|${z.toFixed(3)}`;
}

function addAtom(map, x, y, z, kind, label) {
  const key = keyOf(x, y, z);
  if (!map.has(key)) {
    map.set(key, { x, y, z, kind, label });
  }
}

function latticeBounds(type, cells) {
  if (type === "hcp") {
    return {
      center: {
        x: cells * 0.75,
        y: cells * HCP_ROW_HEIGHT * 0.5,
        z: cells * HCP_LAYER_GAP,
      },
      extent: Math.max(cells * 1.5, cells * HCP_ROW_HEIGHT, cells * HCP_LAYER_GAP * 2),
    };
  }

  return {
    center: {
      x: cells / 2,
      y: cells / 2,
      z: cells / 2,
    },
    extent: cells,
  };
}

function generateHcpAtoms(cells) {
  const atoms = new Map();

  for (let layer = 0; layer <= cells * 2; layer += 1) {
    const isBLayer = layer % 2 === 1;
    const limit = isBLayer ? cells - 1 : cells;
    const shift = isBLayer ? 1 / 3 : 0;

    for (let i = 0; i <= limit; i += 1) {
      for (let j = 0; j <= limit; j += 1) {
        const u = i + shift;
        const v = j + shift;
        addAtom(
          atoms,
          u + v * 0.5,
          v * HCP_ROW_HEIGHT,
          layer * HCP_LAYER_GAP,
          isBLayer ? "hcpB" : "hcpA",
          isBLayer ? "B层" : "A层",
        );
      }
    }
  }

  return Array.from(atoms.values());
}

function generateAtoms(type, cells) {
  if (type === "hcp") return generateHcpAtoms(cells);

  const atoms = new Map();

  for (let i = 0; i <= cells; i += 1) {
    for (let j = 0; j <= cells; j += 1) {
      for (let k = 0; k <= cells; k += 1) {
        addAtom(atoms, i, j, k, "corner", "格点");
      }
    }
  }

  if (type === "fcc" || type === "diamond") {
    for (let i = 0; i < cells; i += 1) {
      for (let j = 0; j < cells; j += 1) {
        for (let k = 0; k <= cells; k += 1) {
          addAtom(atoms, i + 0.5, j + 0.5, k, "face", "面心");
        }
      }
    }

    for (let i = 0; i < cells; i += 1) {
      for (let j = 0; j <= cells; j += 1) {
        for (let k = 0; k < cells; k += 1) {
          addAtom(atoms, i + 0.5, j, k + 0.5, "face", "面心");
        }
      }
    }

    for (let i = 0; i <= cells; i += 1) {
      for (let j = 0; j < cells; j += 1) {
        for (let k = 0; k < cells; k += 1) {
          addAtom(atoms, i, j + 0.5, k + 0.5, "face", "面心");
        }
      }
    }
  }

  for (let i = 0; i < cells; i += 1) {
    for (let j = 0; j < cells; j += 1) {
      for (let k = 0; k < cells; k += 1) {
        if (type === "bcc") {
          addAtom(atoms, i + 0.5, j + 0.5, k + 0.5, "body", "体心");
        }

        if (type === "diamond") {
          addAtom(atoms, i + 0.25, j + 0.25, k + 0.25, "tetra", "四面体");
          addAtom(atoms, i + 0.25, j + 0.75, k + 0.75, "tetra", "四面体");
          addAtom(atoms, i + 0.75, j + 0.25, k + 0.75, "tetra", "四面体");
          addAtom(atoms, i + 0.75, j + 0.75, k + 0.25, "tetra", "四面体");
        }
      }
    }
  }

  return Array.from(atoms.values());
}

function generateHcpEdges(cells) {
  const atoms = generateHcpAtoms(cells);
  const edges = new Map();

  function addEdge(from, to) {
    const first = keyOf(from.x, from.y, from.z);
    const second = keyOf(to.x, to.y, to.z);
    const key = [first, second].sort().join("->");
    if (!edges.has(key)) edges.set(key, [[from.x, from.y, from.z], [to.x, to.y, to.z]]);
  }

  for (let i = 0; i < atoms.length; i += 1) {
    for (let j = i + 1; j < atoms.length; j += 1) {
      const dx = atoms[i].x - atoms[j].x;
      const dy = atoms[i].y - atoms[j].y;
      const dz = atoms[i].z - atoms[j].z;
      const distance = Math.hypot(dx, dy, dz);
      if (distance > 0.96 && distance < 1.04) addEdge(atoms[i], atoms[j]);
    }
  }

  return Array.from(edges.values());
}

function generateEdges(type, cells) {
  if (type === "hcp") return generateHcpEdges(cells);

  const edges = new Map();

  function addEdge(a, b) {
    const first = keyOf(...a);
    const second = keyOf(...b);
    const key = [first, second].sort().join("->");
    if (!edges.has(key)) edges.set(key, [a, b]);
  }

  for (let i = 0; i < cells; i += 1) {
    for (let j = 0; j < cells; j += 1) {
      for (let k = 0; k < cells; k += 1) {
        const vertices = [
          [i, j, k],
          [i + 1, j, k],
          [i + 1, j + 1, k],
          [i, j + 1, k],
          [i, j, k + 1],
          [i + 1, j, k + 1],
          [i + 1, j + 1, k + 1],
          [i, j + 1, k + 1],
        ];
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 4],
          [0, 4],
          [1, 5],
          [2, 6],
          [3, 7],
        ].forEach(([from, to]) => addEdge(vertices[from], vertices[to]));
      }
    }
  }

  return Array.from(edges.values());
}

function atomColor(kind, type) {
  if (kind === "corner") return "#2f7d62";
  if (kind === "body") return "#b87022";
  if (kind === "face") return "#376d9f";
  if (kind === "tetra") return "#b94e48";
  if (kind === "hcpA") return "#2f7d62";
  if (kind === "hcpB") return "#c59a31";
  return latticeDefs[type].color;
}

function currentLatticeValues() {
  return {
    type: controls.type.value,
    a: Number(controls.a.value),
    cells: Number(controls.cells.value),
    radius: Number(controls.radius.value),
    speed: Number(controls.speed.value),
    showEdges: controls.showEdges.checked,
    showLabels: controls.showLabels.checked,
  };
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.floor(rect.width * dpr));
  const height = Math.max(360, Math.floor(rect.height * dpr));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  return { width: width / dpr, height: height / dpr };
}

function resizeAuxCanvas(targetCanvas, targetCtx, minHeight = 360) {
  const rect = targetCanvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.floor(rect.width * dpr));
  const height = Math.max(minHeight, Math.floor(rect.height * dpr));

  if (targetCanvas.width !== width || targetCanvas.height !== height) {
    targetCanvas.width = width;
    targetCanvas.height = height;
    targetCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  return { width: width / dpr, height: height / dpr };
}

function rotatePoint(point, values) {
  const bounds = latticeBounds(values.type, values.cells);
  const x = (point.x - bounds.center.x) * values.a;
  const y = (point.y - bounds.center.y) * values.a;
  const z = (point.z - bounds.center.z) * values.a;
  const cy = Math.cos(latticeState.rotY);
  const sy = Math.sin(latticeState.rotY);
  const cx = Math.cos(latticeState.rotX);
  const sx = Math.sin(latticeState.rotX);
  const x1 = cy * x + sy * z;
  const z1 = -sy * x + cy * z;
  const y1 = cx * y - sx * z1;
  const z2 = sx * y + cx * z1;
  return { x: x1, y: y1, z: z2 };
}

function project(rotated, values, size) {
  const extent = values.a * Math.max(latticeBounds(values.type, values.cells).extent, 1);
  const scale = Math.min(size.width, size.height) * 0.48 / Math.max(extent, 1);
  const camera = extent * 4.2;
  const depth = camera / (camera + rotated.z);
  return {
    x: size.width / 2 + rotated.x * scale * depth,
    y: size.height / 2 + rotated.y * scale * depth,
    z: rotated.z,
    radius: values.radius * values.a * scale * depth,
    depth,
  };
}

function drawEdge(edge, values, size) {
  const [from, to] = edge.map(([x, y, z]) => {
    const rotated = rotatePoint({ x, y, z }, values);
    return project(rotated, values, size);
  });
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.strokeStyle = "rgba(70, 82, 74, 0.34)";
  ctx.lineWidth = 1.4;
  ctx.stroke();
}

function drawAtom(atom, projected, values) {
  const color = atomColor(atom.kind, values.type);
  const radius = Math.max(6, projected.radius);
  const highlight = ctx.createRadialGradient(
    projected.x - radius * 0.35,
    projected.y - radius * 0.35,
    radius * 0.15,
    projected.x,
    projected.y,
    radius,
  );
  highlight.addColorStop(0, "rgba(255, 255, 255, 0.95)");
  highlight.addColorStop(0.2, color);
  highlight.addColorStop(1, "rgba(31, 37, 33, 0.88)");

  ctx.beginPath();
  ctx.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = highlight;
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.72)";
  ctx.lineWidth = 1;
  ctx.stroke();

  if (values.showLabels && projected.depth > 0.9 && radius > 9) {
    ctx.fillStyle = "rgba(31, 37, 33, 0.82)";
    ctx.font = "12px Microsoft YaHei, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(atom.label, projected.x, projected.y - radius - 5);
  }
}

function drawLattice() {
  const values = currentLatticeValues();
  const size = resizeCanvas();
  ctx.clearRect(0, 0, size.width, size.height);

  if (values.showEdges) {
    generateEdges(values.type, values.cells).forEach((edge) => drawEdge(edge, values, size));
  }

  const atoms = generateAtoms(values.type, values.cells)
    .map((atom) => {
      const rotated = rotatePoint(atom, values);
      return { atom, projected: project(rotated, values, size), z: rotated.z };
    })
    .sort((a, b) => a.z - b.z);

  atoms.forEach(({ atom, projected }) => drawAtom(atom, projected, values));

  ctx.fillStyle = "rgba(31, 37, 33, 0.72)";
  ctx.font = "13px Microsoft YaHei, sans-serif";
  ctx.textAlign = "left";
  const repeatLabel =
    values.type === "hcp"
      ? `${values.cells}×${values.cells} · ABAB 层序`
      : `${values.cells}×${values.cells}×${values.cells}`;
  ctx.fillText(`${latticeDefs[values.type].name} · ${repeatLabel}`, 16, 24);
}

function renderLatticeControls() {
  const values = currentLatticeValues();
  const def = latticeDefs[values.type];
  controls.aValue.textContent = `${values.a.toFixed(1)} Å`;
  controls.cellsValue.textContent = `${values.cells}`;
  controls.radiusValue.textContent = `${values.radius.toFixed(2)} a`;
  controls.speedValue.textContent = values.speed === 0 ? "关闭" : values.speed.toFixed(2);
  controls.metrics.innerHTML = `
    <div class="metric"><span>常规晶胞有效原子数</span><strong>${escapeHtml(def.atoms)}</strong></div>
    <div class="metric"><span>配位数</span><strong>${escapeHtml(def.coordination)}</strong></div>
    <div class="metric"><span>堆积因子</span><strong>${escapeHtml(def.packing)}</strong></div>
    <div class="metric"><span>最近邻关系</span><strong>${escapeHtml(def.nearest)}</strong></div>
  `;
}

function updateLattice() {
  renderLatticeControls();
  drawLattice();
}

const cubeVertices = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 1, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 1, y: 1, z: 1 },
  { x: 0, y: 1, z: 1 },
];

const cubeEdgeIndexes = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

function clampIntegerInput(input, min, max, fallback) {
  const next = Math.round(Number(input.value));
  const value = Number.isFinite(next) ? Math.min(max, Math.max(min, next)) : fallback;
  input.value = String(value);
  return value;
}

function currentMillerValues() {
  const h = clampIntegerInput(millerControls.h, 0, 4, 1);
  const k = clampIntegerInput(millerControls.k, 0, 4, 1);
  const l = clampIntegerInput(millerControls.l, 0, 4, 1);
  const maxOrder = Math.max(1, h + k + l);
  let order = Number(millerControls.order.value);

  millerControls.order.max = String(maxOrder);
  if (!Number.isFinite(order)) order = 1;
  if (order > maxOrder) order = maxOrder;
  if (order < 0.25) order = 0.25;
  millerControls.order.value = String(order);

  return {
    h,
    k,
    l,
    order,
    maxOrder,
    showFamily: millerControls.showFamily.checked,
  };
}

function dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function cross(a, b) {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

function normalize(vector) {
  const length = Math.hypot(vector.x, vector.y, vector.z) || 1;
  return {
    x: vector.x / length,
    y: vector.y / length,
    z: vector.z / length,
  };
}

function planeValue(point, values) {
  return values.h * point.x + values.k * point.y + values.l * point.z;
}

function addUniquePoint(points, point) {
  const exists = points.some(
    (item) =>
      Math.abs(item.x - point.x) < 0.001 &&
      Math.abs(item.y - point.y) < 0.001 &&
      Math.abs(item.z - point.z) < 0.001,
  );
  if (!exists) points.push(point);
}

function sortPlanePolygon(points, values) {
  if (points.length < 3) return points;

  const center = points.reduce(
    (sum, point) => ({
      x: sum.x + point.x / points.length,
      y: sum.y + point.y / points.length,
      z: sum.z + point.z / points.length,
    }),
    { x: 0, y: 0, z: 0 },
  );
  const normal = normalize({ x: values.h, y: values.k, z: values.l });
  const reference = Math.abs(normal.x) < 0.85 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 1, z: 0 };
  const axisU = normalize(cross(normal, reference));
  const axisV = cross(normal, axisU);

  return [...points].sort((a, b) => {
    const da = { x: a.x - center.x, y: a.y - center.y, z: a.z - center.z };
    const db = { x: b.x - center.x, y: b.y - center.y, z: b.z - center.z };
    const angleA = Math.atan2(dot(da, axisV), dot(da, axisU));
    const angleB = Math.atan2(dot(db, axisV), dot(db, axisU));
    return angleA - angleB;
  });
}

function planeIntersection(values, order) {
  const points = [];

  cubeEdgeIndexes.forEach(([fromIndex, toIndex]) => {
    const from = cubeVertices[fromIndex];
    const to = cubeVertices[toIndex];
    const fromValue = planeValue(from, values) - order;
    const toValue = planeValue(to, values) - order;

    if (Math.abs(fromValue) < 0.001) addUniquePoint(points, from);
    if (Math.abs(toValue) < 0.001) addUniquePoint(points, to);
    if (fromValue * toValue < 0) {
      const t = Math.abs(fromValue) / (Math.abs(fromValue) + Math.abs(toValue));
      addUniquePoint(points, {
        x: from.x + (to.x - from.x) * t,
        y: from.y + (to.y - from.y) * t,
        z: from.z + (to.z - from.z) * t,
      });
    }
  });

  return sortPlanePolygon(points, values);
}

function projectUnitPoint(point, size) {
  const x = point.x - 0.5;
  const y = point.y - 0.5;
  const z = point.z - 0.5;
  const rotY = 0.74;
  const rotX = -0.58;
  const cy = Math.cos(rotY);
  const sy = Math.sin(rotY);
  const cx = Math.cos(rotX);
  const sx = Math.sin(rotX);
  const x1 = cy * x + sy * z;
  const z1 = -sy * x + cy * z;
  const y1 = cx * y - sx * z1;
  const z2 = sx * y + cx * z1;
  const scale = Math.min(size.width, size.height) * 0.58;

  return {
    x: size.width / 2 + x1 * scale,
    y: size.height * 0.55 + y1 * scale,
    z: z2,
  };
}

function drawMillerCube(size) {
  const projected = cubeVertices.map((point) => projectUnitPoint(point, size));

  millerCtx.strokeStyle = "rgba(70, 82, 74, 0.48)";
  millerCtx.lineWidth = 1.5;
  cubeEdgeIndexes.forEach(([from, to]) => {
    millerCtx.beginPath();
    millerCtx.moveTo(projected[from].x, projected[from].y);
    millerCtx.lineTo(projected[to].x, projected[to].y);
    millerCtx.stroke();
  });

  [
    [{ x: 0, y: 0, z: 0 }, { x: 1.18, y: 0, z: 0 }, "a1"],
    [{ x: 0, y: 0, z: 0 }, { x: 0, y: 1.18, z: 0 }, "a2"],
    [{ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 1.18 }, "a3"],
  ].forEach(([from, to, label]) => {
    const start = projectUnitPoint(from, size);
    const end = projectUnitPoint(to, size);
    millerCtx.beginPath();
    millerCtx.moveTo(start.x, start.y);
    millerCtx.lineTo(end.x, end.y);
    millerCtx.strokeStyle = "rgba(47, 125, 98, 0.72)";
    millerCtx.lineWidth = 2;
    millerCtx.stroke();
    millerCtx.fillStyle = "#2f7d62";
    millerCtx.font = "13px Microsoft YaHei, sans-serif";
    millerCtx.fillText(label, end.x + 5, end.y + 5);
  });
}

function drawPlane(points, fillStyle, strokeStyle) {
  if (points.length === 0) return;
  const projected = points.map((point) => projectUnitPoint(point, resizeAuxCanvas(millerCanvas, millerCtx)));

  millerCtx.beginPath();
  projected.forEach((point, index) => {
    if (index === 0) {
      millerCtx.moveTo(point.x, point.y);
    } else {
      millerCtx.lineTo(point.x, point.y);
    }
  });

  if (points.length >= 3) {
    millerCtx.closePath();
    millerCtx.fillStyle = fillStyle;
    millerCtx.fill();
  }

  millerCtx.strokeStyle = strokeStyle;
  millerCtx.lineWidth = points.length >= 3 ? 2.2 : 3;
  millerCtx.stroke();
}

function formatIntercept(index, order) {
  if (index === 0) return "∞";
  const value = order / index;
  return value === 1 ? "a" : `${value.toFixed(2)}a`;
}

function renderMillerMetrics(values, valid, visiblePointCount) {
  millerControls.orderValue.textContent = `n = ${values.order.toFixed(2)}`;

  if (!valid) {
    millerControls.metrics.innerHTML = `
      <div class="metric"><span>当前晶面</span><strong>(000) 不是有效 Miller 指数</strong></div>
    `;
    return;
  }

  const normSquare = values.h ** 2 + values.k ** 2 + values.l ** 2;
  const dSpacing = normSquare === 1 ? "a" : `a / √${normSquare}`;
  millerControls.metrics.innerHTML = `
    <div class="metric"><span>当前晶面</span><strong>(${values.h}${values.k}${values.l})，层序 ${values.order.toFixed(2)}</strong></div>
    <div class="metric"><span>截距</span><strong>x: ${formatIntercept(values.h, values.order)} · y: ${formatIntercept(values.k, values.order)} · z: ${formatIntercept(values.l, values.order)}</strong></div>
    <div class="metric"><span>法向</span><strong>[${values.h}${values.k}${values.l}]</strong></div>
    <div class="metric"><span>面间距</span><strong>d = ${dSpacing}</strong></div>
    <div class="metric"><span>晶胞内交点</span><strong>${visiblePointCount} 个</strong></div>
  `;
}

function drawMiller() {
  const values = currentMillerValues();
  const size = resizeAuxCanvas(millerCanvas, millerCtx);
  const valid = values.h + values.k + values.l > 0;

  millerCtx.clearRect(0, 0, size.width, size.height);
  drawMillerCube(size);

  if (!valid) {
    millerCtx.fillStyle = "rgba(31, 37, 33, 0.72)";
    millerCtx.font = "16px Microsoft YaHei, sans-serif";
    millerCtx.fillText("(000) 不能定义晶面，请至少输入一个非零指数。", 24, 34);
    renderMillerMetrics(values, false, 0);
    return;
  }

  if (values.showFamily) {
    for (let order = 1; order <= values.maxOrder; order += 1) {
      if (Math.abs(order - values.order) < 0.01) continue;
      drawPlane(planeIntersection(values, order), "rgba(55, 109, 159, 0.08)", "rgba(55, 109, 159, 0.28)");
    }
  }

  const selectedPoints = planeIntersection(values, values.order);
  drawPlane(selectedPoints, "rgba(184, 112, 34, 0.28)", "rgba(184, 112, 34, 0.9)");
  drawMillerCube(size);

  millerCtx.fillStyle = "rgba(31, 37, 33, 0.76)";
  millerCtx.font = "14px Microsoft YaHei, sans-serif";
  millerCtx.fillText(`晶面 (${values.h}${values.k}${values.l}) · hx + ky + lz = ${values.order.toFixed(2)}`, 18, 26);
  renderMillerMetrics(values, true, selectedPoints.length);
}

function currentReciprocalValues() {
  return {
    type: reciprocalControls.type.value,
    lambda: Number(reciprocalControls.lambda.value),
    layer: Number(reciprocalControls.layer.value),
    range: Number(reciprocalControls.range.value),
  };
}

function sameParity(...values) {
  const parity = Math.abs(values[0]) % 2;
  return values.every((value) => Math.abs(value) % 2 === parity);
}

function isReflectionAllowed(type, h, k, l) {
  if (h === 0 && k === 0 && l === 0) return false;
  if (type === "sc") return true;
  if (type === "bcc") return (h + k + l) % 2 === 0;
  if (type === "fcc") return sameParity(h, k, l);
  if (type === "diamond") {
    if (!sameParity(h, k, l)) return false;
    const allOdd = [h, k, l].every((value) => Math.abs(value) % 2 === 1);
    const allEven = [h, k, l].every((value) => Math.abs(value) % 2 === 0);
    return allOdd || (allEven && (h + k + l) % 4 === 0);
  }
  return true;
}

function reciprocalRuleText(type) {
  if (type === "bcc") return "BCC：h + k + l 为偶数时有反射";
  if (type === "fcc") return "FCC：h、k、l 全奇或全偶时有反射";
  if (type === "diamond") return "金刚石：全奇，或全偶且 h + k + l = 4n";
  return "SC：所有非零倒易点均可反射";
}

function drawReciprocalPoint(point, center, scale) {
  const x = center.x + point.h * scale;
  const y = center.y - point.k * scale;
  const isActive = point.allowed && point.reachable;
  const isAllowed = point.allowed && !point.reachable;

  reciprocalCtx.beginPath();
  reciprocalCtx.arc(x, y, isActive ? 7 : isAllowed ? 5 : 3.2, 0, Math.PI * 2);
  reciprocalCtx.fillStyle = isActive ? "#b87022" : isAllowed ? "rgba(55, 109, 159, 0.6)" : "rgba(105, 115, 109, 0.2)";
  reciprocalCtx.fill();
  reciprocalCtx.strokeStyle = isActive ? "rgba(31, 37, 33, 0.55)" : "rgba(255, 255, 255, 0.7)";
  reciprocalCtx.lineWidth = 1;
  reciprocalCtx.stroke();

  if (isActive && Math.abs(point.h) <= 2 && Math.abs(point.k) <= 2 && Math.abs(point.l) <= 2) {
    reciprocalCtx.fillStyle = "rgba(31, 37, 33, 0.76)";
    reciprocalCtx.font = "11px Microsoft YaHei, sans-serif";
    reciprocalCtx.textAlign = "center";
    reciprocalCtx.fillText(`(${point.h},${point.k},${point.l})`, x, y - 11);
  }
}

function renderReciprocalMetrics(values, activeCount, allowedCount, limit) {
  reciprocalControls.lambdaValue.textContent = values.lambda.toFixed(2);
  reciprocalControls.layerValue.textContent = `l = ${values.layer}`;
  reciprocalControls.rangeValue.textContent = `±${values.range}`;
  reciprocalControls.metrics.innerHTML = `
    <div class="metric"><span>选择定则</span><strong>${reciprocalRuleText(values.type)}</strong></div>
    <div class="metric"><span>当前截面</span><strong>(h, k, ${values.layer})，指数范围 ±${values.range}</strong></div>
    <div class="metric"><span>Bragg 可达上限</span><strong>|G| ≤ ${limit.toFixed(2)} · 2π/a</strong></div>
    <div class="metric"><span>可见反射</span><strong>${activeCount} / ${allowedCount} 个允许点</strong></div>
  `;
}

function drawReciprocal() {
  const values = currentReciprocalValues();
  const size = resizeAuxCanvas(reciprocalCanvas, reciprocalCtx);
  const center = { x: size.width / 2, y: size.height / 2 };
  const scale = Math.min(size.width, size.height) * 0.42 / values.range;
  const limit = 2 / values.lambda;
  const points = [];

  reciprocalCtx.clearRect(0, 0, size.width, size.height);
  reciprocalCtx.strokeStyle = "rgba(105, 115, 109, 0.18)";
  reciprocalCtx.lineWidth = 1;

  for (let index = -values.range; index <= values.range; index += 1) {
    reciprocalCtx.beginPath();
    reciprocalCtx.moveTo(center.x + index * scale, center.y - values.range * scale);
    reciprocalCtx.lineTo(center.x + index * scale, center.y + values.range * scale);
    reciprocalCtx.stroke();

    reciprocalCtx.beginPath();
    reciprocalCtx.moveTo(center.x - values.range * scale, center.y + index * scale);
    reciprocalCtx.lineTo(center.x + values.range * scale, center.y + index * scale);
    reciprocalCtx.stroke();
  }

  reciprocalCtx.beginPath();
  reciprocalCtx.arc(center.x, center.y, limit * scale, 0, Math.PI * 2);
  reciprocalCtx.fillStyle = "rgba(47, 125, 98, 0.08)";
  reciprocalCtx.fill();
  reciprocalCtx.strokeStyle = "rgba(47, 125, 98, 0.38)";
  reciprocalCtx.lineWidth = 2;
  reciprocalCtx.stroke();

  reciprocalCtx.strokeStyle = "rgba(31, 37, 33, 0.45)";
  reciprocalCtx.lineWidth = 1.6;
  reciprocalCtx.beginPath();
  reciprocalCtx.moveTo(center.x - values.range * scale, center.y);
  reciprocalCtx.lineTo(center.x + values.range * scale, center.y);
  reciprocalCtx.moveTo(center.x, center.y - values.range * scale);
  reciprocalCtx.lineTo(center.x, center.y + values.range * scale);
  reciprocalCtx.stroke();

  for (let h = -values.range; h <= values.range; h += 1) {
    for (let k = -values.range; k <= values.range; k += 1) {
      const norm = Math.hypot(h, k, values.layer);
      const allowed = isReflectionAllowed(values.type, h, k, values.layer);
      points.push({
        h,
        k,
        l: values.layer,
        allowed,
        reachable: norm <= limit + 0.001 && norm > 0,
      });
    }
  }

  points
    .sort((a, b) => Number(a.allowed && a.reachable) - Number(b.allowed && b.reachable))
    .forEach((point) => drawReciprocalPoint(point, center, scale));

  const allowedCount = points.filter((point) => point.allowed).length;
  const activeCount = points.filter((point) => point.allowed && point.reachable).length;

  reciprocalCtx.fillStyle = "rgba(31, 37, 33, 0.76)";
  reciprocalCtx.font = "14px Microsoft YaHei, sans-serif";
  reciprocalCtx.textAlign = "left";
  reciprocalCtx.fillText(`倒易截面 l = ${values.layer} · 绿色圆内满足 |G| ≤ 4π/λ`, 18, 26);
  reciprocalCtx.fillStyle = "#1f2521";
  reciprocalCtx.fillText("h", center.x + values.range * scale + 8, center.y + 4);
  reciprocalCtx.fillText("k", center.x + 6, center.y - values.range * scale - 8);

  renderReciprocalMetrics(values, activeCount, allowedCount, limit);
}

function currentPotentialValues() {
  const m = Number(potentialControls.m.value);
  const n = Number(potentialControls.n.value);
  return {
    m,
    n,
    attraction: Number(potentialControls.attraction.value),
    repulsion: Number(potentialControls.repulsion.value),
  };
}

function bindingPotential(r, values) {
  return -values.attraction / r ** values.m + values.repulsion / r ** values.n;
}

function potentialSecondDerivative(r, values) {
  return (
    (-values.attraction * values.m * (values.m + 1)) / r ** (values.m + 2) +
    (values.repulsion * values.n * (values.n + 1)) / r ** (values.n + 2)
  );
}

function potentialEquilibrium(values) {
  const r0 = ((values.repulsion * values.n) / (values.attraction * values.m)) ** (1 / (values.n - values.m));
  const u0 = bindingPotential(r0, values);
  return {
    r0,
    u0,
    bindingEnergy: Math.max(0, -u0),
    stiffness: potentialSecondDerivative(r0, values),
  };
}

function renderPotentialMetrics(values, equilibrium) {
  potentialControls.mValue.textContent = values.m.toFixed(1);
  potentialControls.nValue.textContent = values.n.toFixed(1);
  potentialControls.attractionValue.textContent = values.attraction.toFixed(2);
  potentialControls.repulsionValue.textContent = values.repulsion.toFixed(2);
  potentialControls.metrics.innerHTML = `
    <div class="metric"><span>平衡间距</span><strong>r0 = ${equilibrium.r0.toFixed(2)} a</strong></div>
    <div class="metric"><span>结合能</span><strong>${equilibrium.bindingEnergy.toFixed(3)} A/a^m</strong></div>
    <div class="metric"><span>势阱曲率</span><strong>${equilibrium.stiffness.toFixed(3)}</strong></div>
    <div class="metric"><span>物理含义</span><strong>吸引项拉低远距离势能，排斥项形成短程硬核。</strong></div>
  `;
}

function drawPotential() {
  const values = currentPotentialValues();
  const equilibrium = potentialEquilibrium(values);
  const size = resizeAuxCanvas(potentialCanvas, potentialCtx);
  const padding = { left: 58, right: 24, top: 28, bottom: 46 };
  const plot = {
    x: padding.left,
    y: padding.top,
    width: size.width - padding.left - padding.right,
    height: size.height - padding.top - padding.bottom,
  };
  const rMin = 0.55;
  const rMax = 4.4;
  const samples = Array.from({ length: 260 }, (_, index) => {
    const r = rMin + (index / 259) * (rMax - rMin);
    return { r, u: bindingPotential(r, values) };
  });
  const finite = samples.map((point) => point.u).filter(Number.isFinite);
  const dataMin = Math.min(...finite, equilibrium.u0);
  const yMin = Math.min(-0.05, dataMin * 1.25);
  const yMax = Math.max(0.35, Math.min(3.8, Math.max(...finite.filter((u) => u < 5), 0.5)));

  function xOf(r) {
    return plot.x + ((r - rMin) / (rMax - rMin)) * plot.width;
  }

  function yOf(u) {
    const clamped = Math.min(yMax, Math.max(yMin, u));
    return plot.y + ((yMax - clamped) / (yMax - yMin)) * plot.height;
  }

  potentialCtx.clearRect(0, 0, size.width, size.height);
  potentialCtx.fillStyle = "rgba(255, 255, 255, 0.72)";
  potentialCtx.fillRect(plot.x, plot.y, plot.width, plot.height);

  potentialCtx.strokeStyle = "rgba(105, 115, 109, 0.18)";
  potentialCtx.lineWidth = 1;
  for (let index = 0; index <= 4; index += 1) {
    const x = plot.x + (index / 4) * plot.width;
    potentialCtx.beginPath();
    potentialCtx.moveTo(x, plot.y);
    potentialCtx.lineTo(x, plot.y + plot.height);
    potentialCtx.stroke();
  }
  for (let index = 0; index <= 4; index += 1) {
    const y = plot.y + (index / 4) * plot.height;
    potentialCtx.beginPath();
    potentialCtx.moveTo(plot.x, y);
    potentialCtx.lineTo(plot.x + plot.width, y);
    potentialCtx.stroke();
  }

  const zeroY = yOf(0);
  potentialCtx.strokeStyle = "rgba(31, 37, 33, 0.55)";
  potentialCtx.lineWidth = 1.6;
  potentialCtx.beginPath();
  potentialCtx.moveTo(plot.x, zeroY);
  potentialCtx.lineTo(plot.x + plot.width, zeroY);
  potentialCtx.stroke();

  potentialCtx.strokeStyle = "#b87022";
  potentialCtx.lineWidth = 3;
  potentialCtx.beginPath();
  samples.forEach((point, index) => {
    const x = xOf(point.r);
    const y = yOf(point.u);
    if (index === 0) potentialCtx.moveTo(x, y);
    else potentialCtx.lineTo(x, y);
  });
  potentialCtx.stroke();

  const r0X = xOf(equilibrium.r0);
  const u0Y = yOf(equilibrium.u0);
  potentialCtx.setLineDash([6, 6]);
  potentialCtx.strokeStyle = "rgba(47, 125, 98, 0.75)";
  potentialCtx.lineWidth = 2;
  potentialCtx.beginPath();
  potentialCtx.moveTo(r0X, plot.y);
  potentialCtx.lineTo(r0X, plot.y + plot.height);
  potentialCtx.stroke();
  potentialCtx.setLineDash([]);

  potentialCtx.beginPath();
  potentialCtx.arc(r0X, u0Y, 7, 0, Math.PI * 2);
  potentialCtx.fillStyle = "#2f7d62";
  potentialCtx.fill();
  potentialCtx.strokeStyle = "#ffffff";
  potentialCtx.lineWidth = 2;
  potentialCtx.stroke();

  potentialCtx.fillStyle = "rgba(31, 37, 33, 0.78)";
  potentialCtx.font = "13px Microsoft YaHei, sans-serif";
  potentialCtx.textAlign = "left";
  potentialCtx.fillText("U(r)", 16, plot.y + 10);
  potentialCtx.fillText("r / a", plot.x + plot.width - 28, plot.y + plot.height + 30);
  potentialCtx.fillText(`r0=${equilibrium.r0.toFixed(2)}a`, r0X + 8, u0Y - 8);
  potentialCtx.fillText("排斥主导", plot.x + 8, plot.y + 22);
  potentialCtx.fillText("吸引尾部", plot.x + plot.width - 76, zeroY + 22);

  renderPotentialMetrics(values, equilibrium);
}

const bondDefs = {
  ionic: {
    name: "离子键",
    color: "#b94e48",
    summary: "电子从低电负性原子转移到高电负性原子，形成正负离子间的库仑吸引。",
    example: "NaCl、MgO",
    cue: "Δχ 较大时更接近离子键。",
  },
  covalent: {
    name: "共价键",
    color: "#2f7d62",
    summary: "相邻原子共享电子对，方向性强，常形成确定的键角和局域电子云。",
    example: "Si、C、Ge",
    cue: "Δχ 小且电子局域时更接近共价键。",
  },
  metallic: {
    name: "金属键",
    color: "#376d9f",
    summary: "价电子在许多离子实之间离域运动，提供良好的导电性和延展性。",
    example: "Cu、Al、Na",
    cue: "离域程度越高，金属性越明显。",
  },
  molecular: {
    name: "分子晶体",
    color: "#7d6aa8",
    summary: "分子内部键较强，分子之间主要靠范德瓦耳斯力或氢键等弱相互作用结合。",
    example: "Ar、I2、干冰",
    cue: "低结合能、低熔点是常见特征。",
  },
};

function currentBondValues() {
  return {
    focus: bondControls.focus.value,
    delta: Number(bondControls.delta.value),
    delocalization: Number(bondControls.delocalization.value),
  };
}

function drawRoundRect(ctxToUse, x, y, width, height, radius) {
  ctxToUse.beginPath();
  ctxToUse.moveTo(x + radius, y);
  ctxToUse.lineTo(x + width - radius, y);
  ctxToUse.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctxToUse.lineTo(x + width, y + height - radius);
  ctxToUse.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctxToUse.lineTo(x + radius, y + height);
  ctxToUse.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctxToUse.lineTo(x, y + radius);
  ctxToUse.quadraticCurveTo(x, y, x + radius, y);
  ctxToUse.closePath();
}

function drawSmallAtom(ctxToUse, x, y, radius, color, label) {
  const gradient = ctxToUse.createRadialGradient(x - radius * 0.35, y - radius * 0.35, 2, x, y, radius);
  gradient.addColorStop(0, "rgba(255,255,255,0.95)");
  gradient.addColorStop(0.3, color);
  gradient.addColorStop(1, "rgba(31,37,33,0.62)");
  ctxToUse.beginPath();
  ctxToUse.arc(x, y, radius, 0, Math.PI * 2);
  ctxToUse.fillStyle = gradient;
  ctxToUse.fill();
  ctxToUse.strokeStyle = "rgba(255,255,255,0.78)";
  ctxToUse.lineWidth = 1.5;
  ctxToUse.stroke();
  ctxToUse.fillStyle = "#1f2521";
  ctxToUse.font = `${Math.max(11, radius * 0.55)}px Microsoft YaHei, sans-serif`;
  ctxToUse.textAlign = "center";
  ctxToUse.textBaseline = "middle";
  ctxToUse.fillText(label, x, y);
}

function drawElectron(ctxToUse, x, y, alpha = 0.85) {
  ctxToUse.beginPath();
  ctxToUse.arc(x, y, 4, 0, Math.PI * 2);
  ctxToUse.fillStyle = `rgba(55, 109, 159, ${alpha})`;
  ctxToUse.fill();
}

function drawBondIcon(type, rect, values, selected) {
  const x = rect.x;
  const y = rect.y;
  const width = rect.width;
  const height = rect.height;
  const midY = y + height * 0.56;
  const leftX = x + width * 0.33;
  const rightX = x + width * 0.68;
  const radius = Math.min(width, height) * 0.11;

  bondCtx.save();
  bondCtx.globalAlpha = selected ? 1 : 0.74;

  if (type === "ionic") {
    const transfer = Math.min(1, values.delta / 2.4);
    drawSmallAtom(bondCtx, leftX, midY, radius, "#d99854", "+");
    drawSmallAtom(bondCtx, rightX, midY, radius * 1.08, "#8eb6d8", "-");
    bondCtx.strokeStyle = `rgba(185, 78, 72, ${0.35 + transfer * 0.55})`;
    bondCtx.lineWidth = 2.5;
    bondCtx.beginPath();
    bondCtx.moveTo(leftX + radius + 8, midY - 20);
    bondCtx.lineTo(rightX - radius - 8, midY - 20);
    bondCtx.stroke();
    bondCtx.beginPath();
    bondCtx.moveTo(rightX - radius - 14, midY - 26);
    bondCtx.lineTo(rightX - radius - 8, midY - 20);
    bondCtx.lineTo(rightX - radius - 14, midY - 14);
    bondCtx.stroke();
    drawElectron(bondCtx, rightX - radius * 0.2, midY - radius * 1.2, 0.95);
  }

  if (type === "covalent") {
    const polarity = Math.min(1, values.delta / 3.2);
    bondCtx.beginPath();
    bondCtx.ellipse((leftX + rightX) / 2 + polarity * radius * 0.55, midY, width * 0.2, radius * 1.06, 0, 0, Math.PI * 2);
    bondCtx.fillStyle = "rgba(47, 125, 98, 0.2)";
    bondCtx.fill();
    drawSmallAtom(bondCtx, leftX, midY, radius, "#9fcbb3", "A");
    drawSmallAtom(bondCtx, rightX, midY, radius, "#9fcbb3", "B");
    drawElectron(bondCtx, (leftX + rightX) / 2 - 6 + polarity * 10, midY - 8, 0.9);
    drawElectron(bondCtx, (leftX + rightX) / 2 + 7 + polarity * 10, midY + 8, 0.9);
  }

  if (type === "metallic") {
    const electronCount = Math.round(6 + values.delocalization * 10);
    for (let row = 0; row < 2; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        drawSmallAtom(bondCtx, x + width * (0.26 + col * 0.22), y + height * (0.44 + row * 0.24), radius * 0.72, "#9cbfe2", "+");
      }
    }
    for (let index = 0; index < electronCount; index += 1) {
      const angle = index * 2.41;
      const px = x + width * 0.5 + Math.cos(angle) * width * (0.18 + (index % 3) * 0.035);
      const py = y + height * 0.55 + Math.sin(angle) * height * (0.18 + (index % 2) * 0.04);
      drawElectron(bondCtx, px, py, 0.45 + values.delocalization * 0.45);
    }
  }

  if (type === "molecular") {
    const moleculeY = midY - 8;
    [["A", leftX - radius * 0.7, moleculeY], ["B", leftX + radius * 0.7, moleculeY], ["A", rightX - radius * 0.7, moleculeY], ["B", rightX + radius * 0.7, moleculeY]].forEach(
      ([label, px, py]) => drawSmallAtom(bondCtx, px, py, radius * 0.62, label === "A" ? "#c9b4da" : "#b7c9dd", label),
    );
    bondCtx.setLineDash([5, 5]);
    bondCtx.strokeStyle = "rgba(125, 106, 168, 0.68)";
    bondCtx.lineWidth = 2;
    bondCtx.beginPath();
    bondCtx.moveTo(leftX + radius * 1.4, moleculeY);
    bondCtx.lineTo(rightX - radius * 1.4, moleculeY);
    bondCtx.stroke();
    bondCtx.setLineDash([]);
    bondCtx.fillStyle = "rgba(125, 106, 168, 0.78)";
    bondCtx.font = "12px Microsoft YaHei, sans-serif";
    bondCtx.textAlign = "center";
    bondCtx.fillText("弱相互作用", (leftX + rightX) / 2, moleculeY + 34);
  }

  bondCtx.restore();
}

function renderBondMetrics(values) {
  const def = bondDefs[values.focus];
  const inferred =
    values.delta >= 1.7
      ? "偏离子性"
      : values.delocalization >= 0.68
        ? "偏金属性"
        : values.delta <= 0.5
          ? "偏共价性"
          : "极性共价过渡区";

  bondControls.deltaValue.textContent = values.delta.toFixed(1);
  bondControls.delocalizationValue.textContent = `${Math.round(values.delocalization * 100)}%`;
  bondControls.metrics.innerHTML = `
    <div class="metric"><span>当前聚焦</span><strong>${escapeHtml(def.name)}</strong></div>
    <div class="metric"><span>电子图像</span><strong>${escapeHtml(def.summary)}</strong></div>
    <div class="metric"><span>典型材料</span><strong>${escapeHtml(def.example)}</strong></div>
    <div class="metric"><span>参数判断</span><strong>${escapeHtml(inferred)} · ${escapeHtml(def.cue)}</strong></div>
  `;
}

function drawBond() {
  const values = currentBondValues();
  const size = resizeAuxCanvas(bondCanvas, bondCtx);
  const keys = ["ionic", "covalent", "metallic", "molecular"];
  const cols = size.width < 620 ? 2 : 4;
  const rows = Math.ceil(keys.length / cols);
  const gap = 12;
  const margin = 18;
  const cardWidth = (size.width - margin * 2 - gap * (cols - 1)) / cols;
  const cardHeight = (size.height - margin * 2 - gap * (rows - 1)) / rows;

  bondCtx.clearRect(0, 0, size.width, size.height);

  keys.forEach((key, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = margin + col * (cardWidth + gap);
    const y = margin + row * (cardHeight + gap);
    const selected = key === values.focus;
    const def = bondDefs[key];

    drawRoundRect(bondCtx, x, y, cardWidth, cardHeight, 8);
    bondCtx.fillStyle = selected ? "rgba(241, 247, 242, 0.95)" : "rgba(255, 255, 255, 0.72)";
    bondCtx.fill();
    bondCtx.strokeStyle = selected ? def.color : "rgba(105, 115, 109, 0.22)";
    bondCtx.lineWidth = selected ? 2.4 : 1.2;
    bondCtx.stroke();

    bondCtx.fillStyle = def.color;
    bondCtx.font = "700 15px Microsoft YaHei, sans-serif";
    bondCtx.textAlign = "left";
    bondCtx.textBaseline = "alphabetic";
    bondCtx.fillText(def.name, x + 14, y + 27);
    drawBondIcon(key, { x, y: y + 26, width: cardWidth, height: cardHeight - 36 }, values, selected);
  });

  renderBondMetrics(values);
}

Object.values(controls).forEach((control) => {
  if (control instanceof HTMLElement && control !== controls.metrics && control !== controls.reset) {
    control.addEventListener("input", updateLattice);
    control.addEventListener("change", updateLattice);
  }
});

[
  millerControls.h,
  millerControls.k,
  millerControls.l,
  millerControls.order,
  millerControls.showFamily,
].forEach((control) => {
  control.addEventListener("input", updateMiller);
  control.addEventListener("change", updateMiller);
});

[
  reciprocalControls.type,
  reciprocalControls.lambda,
  reciprocalControls.layer,
  reciprocalControls.range,
].forEach((control) => {
  control.addEventListener("input", updateReciprocal);
  control.addEventListener("change", updateReciprocal);
});

[
  potentialControls.m,
  potentialControls.n,
  potentialControls.attraction,
  potentialControls.repulsion,
].forEach((control) => {
  control.addEventListener("input", updatePotential);
  control.addEventListener("change", updatePotential);
});

[
  bondControls.focus,
  bondControls.delta,
  bondControls.delocalization,
].forEach((control) => {
  control.addEventListener("input", updateBond);
  control.addEventListener("change", updateBond);
});

controls.reset.addEventListener("click", () => {
  latticeState.rotX = -0.62;
  latticeState.rotY = 0.72;
  updateLattice();
});

canvas.addEventListener("pointerdown", (event) => {
  latticeState.dragging = true;
  latticeState.lastX = event.clientX;
  latticeState.lastY = event.clientY;
  canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", (event) => {
  if (!latticeState.dragging) return;
  const dx = event.clientX - latticeState.lastX;
  const dy = event.clientY - latticeState.lastY;
  latticeState.rotY += dx * 0.01;
  latticeState.rotX += dy * 0.01;
  latticeState.lastX = event.clientX;
  latticeState.lastY = event.clientY;
  drawLattice();
});

canvas.addEventListener("pointerup", (event) => {
  latticeState.dragging = false;
  canvas.releasePointerCapture(event.pointerId);
});

canvas.addEventListener("pointercancel", () => {
  latticeState.dragging = false;
});

function updateMiller() {
  drawMiller();
}

function updateReciprocal() {
  drawReciprocal();
}

function updatePotential() {
  drawPotential();
}

function updateBond() {
  drawBond();
}

window.addEventListener("resize", () => {
  drawLattice();
  drawMiller();
  drawReciprocal();
  drawPotential();
  drawBond();
});

let lastAnimatedAt = 0;

function animate(timestamp = 0) {
  const values = currentLatticeValues();
  if (!latticeState.dragging && !dom.latticeLab.hidden && values.speed > 0 && timestamp - lastAnimatedAt > 32) {
    lastAnimatedAt = timestamp;
    latticeState.rotY += values.speed * 0.006;
    drawLattice();
  }
  requestAnimationFrame(animate);
}

renderNav();
renderChapter(activeChapterId);
updateLattice();
updateMiller();
updateReciprocal();
updatePotential();
updateBond();
requestAnimationFrame(animate);
