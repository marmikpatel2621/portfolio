export type Experience = {
  title: string
  scope: string
  timeframe: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Senior Solutions Architect – Squadron Data Inc.',
    scope: 'Snowflake & AI-driven data platform architecture (customer-facing)',
    timeframe: 'Jan 2023 – Present',
    bullets: [
      'Led customer discovery workshops to assess legacy Hive/Spark ecosystems and define cloud modernization strategies across 700+ databases and 4,500+ tables.',
      'Translated business and analytics requirements into Snowflake-native reference architectures covering ingestion, transformation, AI inference, governance, and cost management.',
      'Designed cloud-native ingestion frameworks using Snowpipe, Streams, Tasks, and Airflow for real-time and batch workloads across 40+ business units.',
      'Delivered an AI-powered ad-creative analytics PoC using Snowflake Cortex, extracting text, objects, and branding features from 10K+ creatives/day and validating scalability and cost model.',
      'Advised on warehouse scaling, workload isolation, and cost governance, reducing compute spend 20% while improving reliability to 99.8%.',
      'Produced architecture documentation and modernization playbooks to accelerate adoption and long-term platform sustainability.',
    ],
  },
  {
    title: 'Big Data Engineer – Squadron Data Inc.',
    scope: 'Enterprise Hadoop & distributed systems modernization',
    timeframe: 'Jan 2018 – Jan 2023',
    bullets: [
      'Led architecture assessment of 2,000+ node Hadoop clusters and profiled 150K+ Hive tables to define an HDP → CDP migration blueprint.',
      'Designed an automated compatibility and code validation framework across Spark, Hive, Sqoop, and Oozie, reducing migration defects 40%.',
      'Engineered high-throughput ingestion pipelines processing 1.2B rows/hour (10× improvement), reducing end-to-end query latency from 6 minutes to under 1 minute.',
      'Defined distributed table layout, partitioning, and storage optimization standards improving query performance 60%.',
      'Implemented secure multi-tenant architecture leveraging Kerberos, Ranger, Knox, and encryption controls.',
    ],
  },
]
