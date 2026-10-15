export interface LocalizedText {
  zh: string;
  en: string;
}

export interface Paper {
  number: string;
  title: string;
  authors: string;
  venue: string;
  tags: string[];
  summary: LocalizedText;
  result: LocalizedText;
  arxiv?: string;
  status: 'accepted' | 'review' | 'preparation' | 'preprint';
  contribution?: LocalizedText;
}

export const education = [
  {
    period: '2025.08 - Present',
    title: { zh: '微分智飞（杭州）有限公司', en: 'Differential Robotics (Hangzhou) Co., Ltd.' },
    meta: { zh: '大模型算法实习生 · 无人机智能导航方向', en: 'Large-Model Algorithm Intern · Intelligent UAV Navigation' },
  },
  {
    period: '2024.09 - Present',
    title: { zh: '北京航空航天大学', en: 'Beihang University' },
    meta: { zh: '硕士研究生 · 飞行器设计 · 智能无人机方向 · 导师：蒙志君教授', en: 'M.Eng. in Aircraft Design · Intelligent UAVs · Advisor: Prof. Zhijun Meng' },
  },
  {
    period: '2024.06 - 2024.09',
    title: { zh: '浙江大学湖州研究院 FAST-LAB', en: 'Zhejiang University Huzhou Institute · FAST-LAB' },
    meta: { zh: '科研助理 · 无人机自主探索 · 导师：高飞教授', en: 'Research Assistant · Autonomous UAV Exploration · Advisor: Prof. Fei Gao' },
  },
  {
    period: '2020.09 - 2024.06',
    title: { zh: '北京航空航天大学', en: 'Beihang University' },
    meta: { zh: '本科 · 飞行器环境控制与生命保障', en: 'B.Eng. in Aircraft Environment Control and Life Support' },
  },
];

export const papers: Paper[] = [
  {
    number: '01',
    status: 'review',
    contribution: { zh: '第一作者', en: 'First author' },
    arxiv: 'https://arxiv.org/abs/2602.00708',
    title: 'OSET: Fully Onboard Semantic Exploration for UAVs with Traversability-Aware Scene Graph',
    authors: 'Gai, W., Gao, Y., Zhou, Y., Wu, Y., Zhou, X., Zhao, G., Wang, J., Gao, F. & Meng, Z.',
    venue: 'Chinese Journal of Aeronautics · 2026 · Under Review',
    tags: ['CJA'],
    summary: {
      zh: '构建融合可通行空间拓扑、区域关系与开放词汇目标的轻量场景图，由机载大语言模型完成高价值区域决策，实现感知、推理与规划的全机载闭环。',
      en: 'A lightweight scene graph unifies traversable topology, regional relations, and open-vocabulary targets, enabling onboard language-model reasoning and a fully onboard perception-to-planning loop.',
    },
    result: { zh: 'Unity 长程任务成功率与 SPL 较基线相对提升约 54% 与 65%。', en: 'Relative gains of about 54% in success rate and 65% in SPL on long-horizon Unity tasks.' },
  },
  {
    number: '02',
    status: 'accepted',
    contribution: { zh: '共同第一作者（第二顺位）', en: 'Co-first author (listed second)' },
    arxiv: 'https://arxiv.org/abs/2602.09765',
    title: 'NavDreamer: Video Models as Zero-Shot 3D Navigators',
    authors: 'Huang, X.†, Gai, W.†, Wu, T., Wang, C., Zheng, Q., et al.',
    venue: 'IEEE Robotics and Automation Letters · 2026 · Accepted',
    tags: ['RA-L'],
    summary: {
      zh: '以生成式视频模型预测多条未来导航视频，由 VLM 按安全性、场景一致性和任务完成度选优，再恢复可执行三维航点。',
      en: 'A generative video model proposes navigation futures, a VLM ranks them for safety and task consistency, and metric depth recovers executable 3D waypoints.',
    },
    result: { zh: '室内外 20 类真实任务整体成功率约 85%，室外相对尺度误差由 54% 降至 6%。', en: 'About 85% overall success across 20 real-world tasks; outdoor relative-scale error drops from 54% to 6%.' },
  },
  {
    number: '03',
    status: 'review',
    title: 'Grounding Human Interventions via Anchored Corrective-Measure Estimation',
    authors: 'Cui, X., Zhu, M., Gai, W., Wu, Y., Zhou, X., Gao, F., Wang, B., Zhou, W. & Li, H.',
    venue: 'AAAI · 2027 · Under Review',
    tags: ['AAAI'],
    summary: {
      zh: '从人类接管中的专家动作与原策略动作配对学习纠正权重，并在相似状态间复用可靠监督，使机器人以更少人工干预提升避障能力。',
      en: 'Paired expert and policy actions ground corrective weights from human interventions, reusing reliable supervision across similar states to improve safe autonomy.',
    },
    result: { zh: '相较 PPL 平均成功率提升 34.3 个百分点，专家监督减少 25.3%。', en: 'Average success improves by 34.3 percentage points over PPL while expert supervision drops by 25.3%.' },
  },
  {
    number: '04',
    status: 'preprint',
    arxiv: 'https://arxiv.org/abs/2609.39670',
    title: 'From Local Whole-Body VLA Behaviors to Scene-Scale Aerial Manipulation',
    authors: 'Guo, W., Jin, R., Jin, H., Xu, X., Liu, R., Zhao, H., Wang, Y., Gai, W., Cao, K. & Xie, L.',
    venue: 'arXiv · 2026',
    tags: ['VLA', 'Aerial Manipulation'],
    summary: {
      zh: '结合合成全身示教、基于实测执行进度的动作对齐与关系场景图，将局部 VLA 技能组合为跨作业点的空中操作任务。',
      en: 'Synthetic whole-body demonstrations, measured-progress action alignment, and a relational scene graph compose local VLA skills into multi-site aerial manipulation.',
    },
    result: {
      zh: '在提供正确目标及可行交接条件的仿真中，局部技能成功率为 65%；完整系统完成 21/50 次多作业点任务，并在真实空中操作平台上验证。',
      en: 'Local skills achieve 65% simulated success with oracle targets and feasible handoffs; the full system completes 21/50 simulated multi-site missions, with additional physical-platform validation.',
    },
  },
  {
    number: '05',
    status: 'preprint',
    arxiv: 'https://arxiv.org/abs/2605.19600',
    title: 'FlyMirage: A Fully Automated Generation Pipeline for Diverse and Scalable UAV Flight Data via Generative World Model',
    authors: 'Li, J., Huang, X., Gai, W., Wang, Z., He, Q., Wang, Y., Zhu, M., Liu, Z., Gao, F., Zhou, X., Wu, Y. & Ding, Z.',
    venue: 'arXiv · 2026',
    tags: ['World Models', 'Aerial VLN'],
    summary: {
      zh: '由 LLM 设计多样环境，生成式世界模型构建逼真的 3DGS 场景，并自动完成探索、语义采集与满足动力学约束的无人机轨迹生成。',
      en: 'LLM-designed environments and a generative world model produce realistic 3DGS scenes, with automated exploration, semantic collection, and dynamically feasible UAV trajectories.',
    },
    result: {
      zh: '构建可扩展的空中视觉语言导航数据集；使用该数据微调 π₀，在仿真与真实未见环境中验证导航能力提升。',
      en: 'A scalable aerial VLN dataset improves π₀ navigation after fine-tuning, evaluated in unseen simulated and real-world environments.',
    },
  },
  {
    number: '06',
    status: 'preprint',
    arxiv: 'https://arxiv.org/abs/2605.07496',
    title: 'PathPainter: Transferring the Generalization Ability of Image Generation Models to Embodied Navigation',
    authors: 'Wang, Y., Tian, Y., Huang, X., Gai, W., Zhu, M., Zhou, X., Wu, Y. & Gao, F.',
    venue: 'arXiv · 2026',
    tags: ['Image Generation', 'Navigation'],
    summary: {
      zh: '利用图像生成模型从自然语言和鸟瞰图中解析目标、生成可通行区域，并通过跨视角定位将里程计与鸟瞰地图对齐，缓解累积漂移。',
      en: 'An image generation model grounds language goals and predicts traversability from bird’s-eye views; cross-view localization aligns odometry with the map to mitigate drift.',
    },
    result: {
      zh: '在真实无人机上结合常规局部运动规划器，完成 160 米室外长距离导航。',
      en: 'Validated on a real UAV completing a 160-meter outdoor navigation task with a conventional local motion planner.',
    },
  },
  {
    number: '07',
    status: 'preparation',
    title: 'SwiftGuide: Observation-Preserving Hierarchical Multimodal Semantic Mapping for User-Aligned Embodied Navigation Agents',
    authors: 'Huang, Z., Gai, W., Zhou, X., Wu, Y., Gao, F. & Lyu, X.',
    venue: 'Manuscript · 2026 · In Preparation',
    tags: ['Multimodal', 'Navigation'],
    summary: {
      zh: '以带位姿的原始 RGB 观测构建三层智能体分层记忆，结合 VLM 完成多模态检索与用户偏好记忆，并规划安全返回路径。',
      en: 'A three-level agent memory preserves posed RGB observations for multimodal retrieval, user preference memory, and safe return navigation.',
    },
    result: { zh: '描述查询 Hit@5 达 60.8%，267 个可达目标的导航成功率达 84.6%。', en: '60.8% Hit@5 for descriptive queries and 84.6% navigation success over 267 reachable targets.' },
  },
  {
    number: '08',
    status: 'accepted',
    title: 'Efficient Autonomous UAV Exploration Framework With Limited FOV Sensors for IoT Applications',
    authors: 'Wang, Z., Meng, Z., Tian, T., Gai, W., Zhao, G., et al.',
    venue: 'IEEE Internet of Things Journal · 2025 · Accepted',
    tags: ['IoT-J'],
    summary: {
      zh: '通过随机种子边界生成、各向异性高斯视点采样和主动感知轨迹优化，让有限视场无人机在未知三维环境中高效建图。',
      en: 'Random-seed frontier generation, anisotropic Gaussian viewpoint sampling, and active-perception trajectory optimization enable efficient mapping with limited-FOV UAVs.',
    },
    result: { zh: '探索时间降低 17%-27%，飞行路径缩短 10%-17%。', en: 'Exploration time drops by 17%-27%, with flight paths shortened by 10%-17%.' },
  },
];

export const projects = [
  {
    period: '2025.08 - 2026.05',
    title: { zh: 'OSET 全机载无人机语义探索系统', en: 'OSET Fully Onboard Semantic UAV Exploration' },
    role: { zh: '微分智飞科技有限公司 · 项目负责人、论文第一作者', en: 'Differential Robotics · Project Lead and First Author' },
    description: {
      zh: '独立完成选题、技术路线、核心代码、软硬件集成、无人机平台调试、实验分析及论文撰写，形成从研究原型到真实飞行验证的完整闭环。',
      en: 'Owned the problem definition, technical route, core implementation, hardware-software integration, UAV platform debugging, experiments, and paper writing from research prototype to real flight validation.',
    },
  },
  {
    period: '2025.11 - Present',
    title: { zh: 'FlyAgent 通用具身飞行智能体', en: 'FlyAgent General-Purpose Embodied Flight Agent' },
    role: { zh: '微分智飞科技有限公司 · 核心开发者', en: 'Differential Robotics · Core Developer' },
    description: {
      zh: '参与研发通过 Web 对话操控无人机的通用智能体，负责核心架构、通信拓扑、无人机端基础设施及 Agent 工具调用链路。',
      en: 'Developing a web-conversational UAV agent; responsible for core architecture, communication topology, onboard infrastructure, and agent tool execution.',
    },
  },
  {
    period: '2026.07 - 2026.09',
    title: { zh: '导航 World Model 推理加速与实际部署', en: 'Navigation World-Model Acceleration and Deployment' },
    role: { zh: '微分智飞科技有限公司 · 核心开发者', en: 'Differential Robotics · Core Developer' },
    description: {
      zh: '构建 SFT → SCM/RCM Warmup → DMD 训练链路，将扩散去噪从 30 步压缩至约 4 步，整体生成耗时由 171.568 秒降至 0.702 秒。',
      en: 'Built an SFT → SCM/RCM warmup → DMD pipeline, reducing diffusion denoising from 30 steps to about 4 and generation latency from 171.568s to 0.702s.',
    },
  },
  {
    period: '2026.09',
    title: { zh: 'Qwen3.5 大模型后训练与推理评估', en: 'Qwen3.5 Post-Training and Reasoning Evaluation' },
    role: { zh: '科研学习项目', en: 'Independent Research Project' },
    description: {
      zh: '基于 Megatron Bridge 与 4 张 H20 构建多种后训练链路及 vLLM 并行评估体系，最佳模型将 CoT 准确率由 36.3% 提升至 60.0%。',
      en: 'Built multiple post-training recipes with Megatron Bridge on four H20 GPUs and a parallel vLLM evaluation stack; the best checkpoint raised CoT accuracy from 36.3% to 60.0%.',
    },
  },
  {
    period: '2026',
    title: { zh: 'LeRobot 机械臂 Manipulation 学习链路复现', en: 'LeRobot Manipulation Learning Pipeline' },
    role: { zh: '科研学习项目 · 实机复现', en: 'Independent Research · Real-Robot Reproduction' },
    description: {
      zh: '围绕 XT60 航空插头抓取构建 200 条实机示教数据，完整复现 ACT、Diffusion Policy、π₀ 与 π₀.₅ 的训练、部署与闭环测试。',
      en: 'Collected 200 real-robot demonstrations for XT60 connector grasping and reproduced ACT, Diffusion Policy, π₀, and π₀.₅ through training, deployment, and closed-loop tests.',
    },
  },
  {
    period: '2024.06 - 2024.09',
    title: { zh: '大规模异构机器人集群探索系统', en: 'Large-Scale Heterogeneous Robot-Swarm Exploration' },
    role: { zh: '浙江大学湖州研究院 FAST-LAB · 核心开发者', en: 'ZJU FAST-LAB · Core Developer' },
    description: {
      zh: '集成 15 个异构机器人，负责未知环境自主探索、跨机器人地图交换与飞行平台调试，并降低大尺度探索对全局稠密地图的依赖。',
      en: 'Integrated a 15-robot heterogeneous swarm, developing autonomous exploration, cross-robot map exchange, and a scalable mapping approach with less reliance on global dense maps.',
    },
  },
  {
    period: '2024.12 - 2025.06',
    title: { zh: '某型无人直升机大尺度自主避障', en: 'Large-Scale Autonomous Avoidance for an Unmanned Helicopter' },
    role: { zh: '航空工业 602 所 · 项目负责人', en: 'AVIC 602 Institute · Project Lead' },
    description: {
      zh: '负责算法适配、多旋翼验证机定制、避障代码部署和感知规划控制链路集成，带领团队按期完成交付。',
      en: 'Led algorithm adaptation, validation-aircraft customization, obstacle-avoidance deployment, and perception-planning-control integration through final delivery.',
    },
  },
];

export const honors: LocalizedText[] = [
  { zh: '2026 北京航空航天大学优秀研究生', en: '2026 Outstanding Graduate Student, Beihang University' },
  { zh: '2026 北京航空航天大学硕士研究生二等奖学金', en: '2026 Second-Class Graduate Scholarship, Beihang University' },
  { zh: '2025 北京航空航天大学硕士研究生一等奖学金', en: '2025 First-Class Graduate Scholarship, Beihang University' },
  { zh: '美国大学生数学建模竞赛 M 奖', en: 'MCM/ICM Meritorious Winner' },
];

export const skills = [
  { title: { zh: '机器人规划', en: 'Robot Planning' }, text: { zh: '机器人运动规划、自主探索、VLA 与 WAM 驱动的通用导航和决策', en: 'Motion planning, autonomous exploration, and VLA/WAM-driven general navigation and decision-making' } },
  { title: { zh: '具身算法', en: 'Embodied AI' }, text: { zh: 'LLM、VLM 基础原理与后训练，世界模型架构与模型蒸馏', en: 'LLM/VLM fundamentals and post-training, world-model architectures, and model distillation' } },
  { title: { zh: '工程能力', en: 'Engineering' }, text: { zh: 'C++、Python、ROS、AI Harness、SolidWorks、Altium Designer 与 MATLAB', en: 'C++, Python, ROS, AI harness workflows, SolidWorks, Altium Designer, and MATLAB' } },
  { title: { zh: '任务协作', en: 'Collaboration' }, text: { zh: '项目统筹、任务拆解、进度推进与跨团队协作', en: 'Project ownership, task decomposition, delivery management, and cross-team collaboration' } },
];
