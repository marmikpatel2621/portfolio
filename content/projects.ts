export type Project = {
  slug: string
  name: string
  client: string
  year: string
  industry: string
  tech: string[]
  summary: string
  highlights: string[]
  diagram?: { src: string; alt: string }
}

export const projects: Project[] = [
  {
    slug: 'basis-creative-analytics-cortex',
    name: 'Creative Analytics Platform',
    client: 'Basis',
    year: '2025',
    industry: 'AdTech',
    tech: ['Snowflake', 'Cortex', 'Snowpark', 'Python', 'Streamlit', 'Airflow'],
    summary:
      'AI-driven creative analytics system: ingest creatives, extract metadata, generate semantic features using Snowflake Cortex, and join with campaign KPIs. Delivered end-to-end in six weeks.',
    diagram: { src: '/portfolio/diagrams/basis-creative-analytics-cortex.svg', alt: 'Architecture diagram: Airflow ingestion, Snowflake staging, Cortex feature extraction, analytics views, Streamlit app.' },
    highlights: [
      'Automated ingestion + metadata extraction for images and GIFs',
      'Parallel LLM-based feature extraction using Cortex',
      'Unified creative → features → KPI dataset',
      'Model evaluation framework using teacher-model scoring',
      'Streamlit dashboard with upload, KPI views, simulations, and NLQ',
      '10,000 creatives processed in < 30 minutes',
    ],
  },
  {
    slug: 'smg-realtime-modernization-snowflake',
    name: 'Real-Time Analytics Modernization (Migration Factory)',
    client: 'SMG',
    year: '2025',
    industry: 'CX Analytics',
    tech: ['Snowflake', 'Streams', 'Tasks', 'Snowpark', 'Kafka', 'Python'],
    summary:
      'Modernized SMG’s CX ingestion and analytics pipeline by consolidating Kafka, Spark, Windows services, REST/Mongo enrichments, and Hive models into a Snowflake + Snowpark platform.',
    diagram: { src: '/portfolio/diagrams/smg-realtime-modernization-snowflake.svg', alt: 'Architecture diagram: Kafka ingress to Snowflake landing, Streams/Tasks, Snowpark transformation, enrichment engine, modeled facts, publication, CX apps.' },
    highlights: [
      'Replaced Spark + Windows enrichment with a Snowpark Python engine',
      'Eliminated multi-hop Kafka pipelines in favor of Snowflake Streams & Tasks',
      'Implemented async REST enrichment with batching, KV caching, and parallelism',
      'Rebuilt Hive-compatible Survey/Social fact models inside Snowflake',
      'Reduced latency from 4 hours → <30 minutes',
      'Reduced infra spend from ~$1M/year → ~$600K/year',
    ],
  },
  {
    slug: 'iqvia-spark2-to-spark3-optimization',
    name: 'Spark2→Spark3 Migration & Performance Engineering',
    client: 'IQVIA',
    year: '2024–2025',
    industry: 'Life Sciences',
    tech: ['Spark', 'Hive', 'HDFS', 'CDP', 'Scala', 'Python'],
    summary:
      'Led a large-scale Spark2→Spark3 modernization across a CDP/Hive platform. Optimized dozens of pipelines for speed, stability, and resource efficiency, and supported 30+ engineering teams with guidelines and migration playbooks.',
    diagram: { src: '/portfolio/diagrams/iqvia-spark2-to-spark3-optimization.svg', alt: 'Architecture diagram: Spark2 to Spark3 migration flow with Hive3 tables and downstream reporting.' },
    highlights: [
      'Optimized 50–60 high-value Spark pipelines',
      'Delivered 3–4× speedups on average; several reached 30–50×',
      'Enabled Spark3 migration across ~60% of the codebase within four months',
      'Fixed skew, join inefficiencies, partition pruning gaps, and file-layout issues',
      'Implemented AQE, CBO, and dynamic partition management',
      'Improved reporting frequency from daily → 4×/day (hourly for some jobs)',
    ],
  },
  {
    slug: 'enterprise-hadoop-modernization-hdp-to-cdp',
    name: 'Enterprise Hadoop Modernization (HDP→CDP)',
    client: 'Multiple Enterprise Clients',
    year: '2022–2024',
    industry: 'Multi-Industry',
    tech: ['HDFS', 'Hive3', 'Spark3', 'Ranger', 'Kerberos', 'TLS', 'CDP'],
    summary:
      'Modernized HDP 2.x Hadoop clusters to CDP Private Cloud Base: remediated Hive metadata at scale, refactored Spark/Oozie workloads, removed upgrade blockers, and hardened security for stable ACID-compatible platforms.',
    diagram: { src: '/portfolio/diagrams/enterprise-hadoop-modernization-hdp-to-cdp.svg', alt: 'Architecture diagram: Legacy HDP 2.x components to target CDP architecture with security and governance.' },
    highlights: [
      'In-place upgrades across 200–2,000 node clusters',
      'Metadata remediation for 150K+ Hive tables',
      'Hive3 breaking-change refactors (syntactic + semantic)',
      'Spark migration to HWC for ACID-table interaction',
      'Automated runbooks reducing cycle time by ~25%',
      'Security hardening: TLS, AD/Kerberos integration, Ranger policies',
    ],
  },
  {
    slug: 'smg-teradata-to-hadoop',
    name: 'Teradata→Hadoop Migration',
    client: 'SMG',
    year: '2018',
    industry: 'Data Warehouse Migration',
    tech: ['Hadoop', 'Hive', 'LLAP'],
    summary:
      'Led Teradata→Hadoop migration and modeling at scale, enabling sub-second LLAP queries and accelerating migration timelines.',
    diagram: { src: '/portfolio/diagrams/smg-teradata-to-hadoop.svg', alt: 'Architecture diagram: Teradata to Hadoop migration flow using Sqoop, Hive, ORC, Spark hourly ETL, LLAP, dashboards.' },
    highlights: [
      'Modeled 600+ databases and 3,500 tables',
      'Delivered sub-second LLAP queries',
      'Cut migration timeline from months to one week',
    ],
  },
  {
    slug: 'sprint-pcmd-etl-optimization',
    name: 'PCMD ETL Performance Optimization',
    client: 'Sprint',
    year: '2019',
    industry: 'Telecom',
    tech: ['Hadoop', 'Spark', 'Hive'],
    summary:
      'Optimized ETL for high-volume PCMD data, improving throughput from 150M/hr to 2.2B/hr and reducing query latency to under 5 seconds.',
    diagram: { src: '/portfolio/diagrams/sprint-pcmd-etl-optimization.svg', alt: 'Architecture diagram: Pre-optimization vs updated Spark2 ETL architecture and file-layout controls.' },
    highlights: [
      '30B/day ingestion scale',
      'Throughput improved 150M/hr → 2.2B/hr (45×)',
      'Query latency reduced to <5 seconds (100×)',
    ],
  },
]
