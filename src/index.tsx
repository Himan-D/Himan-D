import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { Layout } from './Layout.js'

const app = new Hono()

// Serve static files from the 'public' directory
app.use('/*', serveStatic({ root: './public' }))

// Home / Overview
app.get('/', (c) => {
  return c.html(
    <Layout title="Himanshu Dixit | AI Systems Researcher">
      <section>
        <h2>About</h2>
        <p>
          I am an AI systems researcher and software engineer focusing on autonomous agent architectures,
          high-throughput model inference engines, continuous sequence modeling (state-space models),
          and applied mathematical systems.
        </p>
        <p>
          My work emphasizes building minimal, verified, and high-performance engineering artifacts—from
          persistent memory hierarchies and dependency de-looping engines in Rust, to continuous batching
          and low-latency algorithmic trading pipelines.
        </p>
      </section>

      <section>
        <h2>Research Focus</h2>
        <ul>
          <li><strong>Autonomous Agent Systems:</strong> Long-horizon execution, state persistence, and hierarchical memory retrieval.</li>
          <li><strong>High-Throughput Inference:</strong> PagedAttention, KV-cache optimization, and continuous batching systems.</li>
          <li><strong>Continuous Sequence Models:</strong> Structured state-space models (SSMs) and continuous-time dynamical representations.</li>
          <li><strong>Applied Informatics:</strong> Graph neural networks for materials informatics and high-frequency financial pipelines.</li>
        </ul>
      </section>

      <section>
        <h2>Featured Software</h2>
        <div class="item-block">
          <div class="item-title"><a href="https://github.com/Himan-D/agent-memory">agent-memory</a></div>
          <div class="item-desc">Persistent state and hierarchical memory retrieval runtime for autonomous agents.</div>
          <div class="item-links"><a href="https://github.com/Himan-D/agent-memory">[Code]</a></div>
        </div>
        <div class="item-block">
          <div class="item-title"><a href="https://github.com/Himan-D/deslop">deslop</a></div>
          <div class="item-desc">High-performance Rust engine for AST-level codebase inversion, Tarjan SCC cycle detection, and dependency de-looping.</div>
          <div class="item-links"><a href="https://github.com/Himan-D/deslop">[Code]</a></div>
        </div>
        <div class="item-block">
          <div class="item-title"><a href="https://github.com/Himan-D/vllm">vllm</a> (Fork)</div>
          <div class="item-desc">High-throughput and memory-efficient LLM serving engine with PagedAttention and continuous batching.</div>
          <div class="item-links"><a href="https://github.com/Himan-D/vllm">[Code]</a></div>
        </div>
      </section>

      <section>
        <h2>Selected Writings &amp; Reports</h2>
        <div class="item-block">
          <div class="item-title">Hierarchical Memory Persistence and Context Retrieval in Multi-Turn Autonomous Agents</div>
          <div class="item-meta">Himanshu Dixit · Technical Report, 2026</div>
          <div class="item-links"><a href="https://github.com/Himan-D/agent-memory">[Code &amp; Spec]</a></div>
        </div>
        <div class="item-block">
          <div class="item-title">Algorithmic De-looping and Inversion of Cyclic Software Dependency Graphs</div>
          <div class="item-meta">Himanshu Dixit · Technical Report, 2026</div>
          <div class="item-links"><a href="https://github.com/Himan-D/deslop">[Code &amp; Spec]</a></div>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:himan@trinetralabs.ai">himan@trinetralabs.ai</a><br />
          GitHub: <a href="https://github.com/Himan-D">github.com/Himan-D</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/him-d/">linkedin.com/in/him-d</a>
        </p>
      </section>
    </Layout>
  )
})

// Research Page
app.get('/research', (c) => {
  return c.html(
    <Layout title="Research | Himanshu Dixit">
      <h2>Research Vectors</h2>
      
      <div class="item-block">
        <h3>Autonomous Agent Systems &amp; Memory Hierarchies</h3>
        <p class="item-desc">
          Standard stateless prompt-response architectures break down during complex, long-horizon tasks.
          I research and design deterministic execution runtimes, hierarchical memory structures, and
          context retrieval mechanisms that allow autonomous agents to maintain coherent state across millions
          of tokens without context rot.
        </p>
      </div>

      <div class="item-block">
        <h3>Inference Systems &amp; Sub-Quadratic Modeling</h3>
        <p class="item-desc">
          Transformer self-attention imposes quadratic compute and memory costs with respect to sequence length.
          My systems work investigates continuous state-space models (SSMs), linear-time sequence operators,
          and kernel-level inference serving optimizations including continuous batching and efficient KV cache paging.
        </p>
      </div>

      <div class="item-block">
        <h3>Structural Graph Learning &amp; Materials Informatics</h3>
        <p class="item-desc">
          Applying geometric deep learning and graph neural networks to physical systems, crystalline structures,
          and materials property estimation where symmetries and non-Euclidean topologies dictate underlying behavior.
        </p>
      </div>

      <div class="item-block">
        <h3>Codebase Inversion &amp; Architectural Synthesis</h3>
        <p class="item-desc">
          Automated methods for extracting Directed Acyclic Graph (DAG) layerings from tangled, circularly-dependent
          software systems. Using Feedback Arc Set (FAS) analysis, interface inversion, and AST transformations
          to formalize software architectures into verified specifications.
        </p>
      </div>
    </Layout>
  )
})

// Systems & Software Page
app.get('/systems', (c) => {
  const systems = [
    {
      name: 'agent-memory',
      url: 'https://github.com/Himan-D/agent-memory',
      desc: 'Persistent state and hierarchical memory recall system for autonomous agent workflows.',
      tags: 'TypeScript / Vector DB / System Architecture'
    },
    {
      name: 'deslop',
      url: 'https://github.com/Himan-D/deslop',
      desc: 'High-performance Rust engine for AST-level codebase inversion, Tarjan SCC cycle detection, and dependency de-looping.',
      tags: 'Rust / AST / Graph Theory'
    },
    {
      name: 'vllm',
      url: 'https://github.com/Himan-D/vllm',
      desc: 'High-throughput and memory-efficient LLM inference engine with PagedAttention.',
      tags: 'C++ / CUDA / Python'
    },
    {
      name: 'flux',
      url: 'https://github.com/Himan-D/flux',
      desc: 'Low-latency quantitative execution pipeline and institutional financial architecture.',
      tags: 'Systems / Quantitative Computing'
    },
    {
      name: 'matgraph-cli',
      url: 'https://github.com/Himan-D/matgraph-cli',
      desc: 'Graph neural network and deep learning toolkit for structure-property prediction in materials informatics.',
      tags: 'Python / PyTorch Geometric'
    },
    {
      name: 'fingraph',
      url: 'https://github.com/Himan-D/fingraph',
      desc: 'Financial graph modeling engine for multi-asset correlation structures and dependency propagation.',
      tags: 'Graph Algorithms / Data Systems'
    },
    {
      name: 'apexdrive',
      url: 'https://github.com/Himan-D/apexdrive',
      desc: 'Deterministic trajectory planner and control framework for robotics and autonomous driving.',
      tags: 'Robotics / Control Theory'
    },
    {
      name: 'hystersis / hystersis-mcp',
      url: 'https://github.com/Himan-D/hystersis',
      desc: 'Autonomous agent runtime integrated with Model Context Protocol (MCP) tooling.',
      tags: 'Agents / MCP / Protocols'
    }
  ]

  return c.html(
    <Layout title="Systems &amp; Code | Himanshu Dixit">
      <h2>Systems &amp; Open Source Software</h2>
      <p>Selected open-source engines, toolkits, and infrastructure codebases:</p>
      
      {systems.map((s) => (
        <div class="item-block">
          <div class="item-title"><a href={s.url}>{s.name}</a></div>
          <div class="item-meta">{s.tags}</div>
          <div class="item-desc">{s.desc}</div>
          <div class="item-links"><a href={s.url}>[Repository]</a></div>
        </div>
      ))}
    </Layout>
  )
})

// Publications Page
app.get('/publications', (c) => {
  const reports = [
    {
      title: 'Hierarchical Memory Persistence and Context Retrieval in Multi-Turn Autonomous Agents',
      authors: 'Himanshu Dixit',
      venue: 'Technical Report, 2026',
      links: [
        { label: 'Code', url: 'https://github.com/Himan-D/agent-memory' }
      ]
    },
    {
      title: 'Algorithmic De-looping and Inversion of Cyclic Software Dependency Graphs',
      authors: 'Himanshu Dixit',
      venue: 'Technical Report, 2026',
      links: [
        { label: 'Code', url: 'https://github.com/Himan-D/deslop' }
      ]
    },
    {
      title: 'Continuous State-Space Formulations for Sub-Quadratic Sequence Modeling',
      authors: 'Himanshu Dixit',
      venue: 'Working Paper, 2026',
      links: []
    }
  ]

  return c.html(
    <Layout title="Publications | Himanshu Dixit">
      <h2>Technical Reports &amp; Working Papers</h2>
      
      {reports.map((p) => (
        <div class="item-block">
          <div class="item-title">{p.title}</div>
          <div class="item-meta">{p.authors} · {p.venue}</div>
          {p.links.length > 0 && (
            <div class="item-links">
              {p.links.map((l) => (
                <a href={l.url}>[{l.label}]</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </Layout>
  )
})

const port = Number(process.env.PORT) || 3000

if (process.env.NODE_ENV !== 'test') {
  console.log(`Server is running on http://localhost:${port}`)
  serve({
    fetch: app.fetch,
    port
  })
}

export default app
