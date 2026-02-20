export const skills = {
  categories: [
    {
      name: 'Data Engineering',
      items: [
        'Distributed ETL pipelines (Spark, Snowpark, Hive, SQL)',
        'High-throughput ingestion (1–30B records/day)',
        'Schema design (partitioning, bucketing, clustering)',
        'Metadata-driven processing frameworks',
        'Vectorization, predicate pushdown, query planning',
      ],
    },
    {
      name: 'Platform Modernization',
      items: [
        'Enterprise-scale Hadoop (HDP/CDP) to Snowflake cloud data platform migration',
        'HDP→CDP upgrades (200–2,000 nodes)',
        'Spark2→Spark3 migrations (AQE, CBO, API refactor)',
        'Teradata→Hadoop migration',
        'Legacy pipeline deconstruction & redesign'
      ],
    },
    {
  name: 'Cloud & Warehouse Engineering',
  items: [
    'Snowflake architecture & enterprise environment design',
    'Snowpark + Cortex AI pipelines (multimodal inference, embeddings)',
    'Cloud integration across AWS & Azure (IAM, ADLS/S3, PrivateLink, Networking)',
    'Secure data exchange, external stages & cross-account sharing',
    'Performance engineering, cost optimization & workload governance',
  ],
},
    {
      name: 'Optimization & Performance',
      items: [
        'File-size normalization (1–6 blocks)',
        'Shuffle minimization',
        'Skew mitigation (salting, null-key split, repartition tuning)',
        'Join optimization (broadcast/merge/hash, order-of-operations)',
        'Eliminating UDF bottlenecks',
      ],
    },
    {
      name: 'Systems & Orchestration',
      items: ['Airflow', 'Oozie', 'Livy REST', 'Kafka ingestion', 'YARN Resource Manager tuning'],
    },
    {
      name: 'Languages',
      items: ['Scala', 'Python', 'SQL/HQL', 'Bash'],
    },
    {
      name: 'Architecture & Cross-Functional',
      items: [
        'Batch + near-real-time pipelines',
        'Multimodal AI inference pipelines',
        'Metadata governance',
        'Client consulting, pre-sales & post-sales engineering',
        'Documentation, runbooks, SOP creation',
      ],
    },
  ],
}
