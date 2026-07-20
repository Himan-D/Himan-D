# Himan-D
### Artificial Intelligence Researcher | Applied Topology & Autonomous Systems

> *"Intelligence is the optimal balance between memorizing the past and compressing the future."*

---
> **Status:** Currently scaling a sub-quadratic continuous state-space model across an arbitrary number of interconnected GPUs. Expect severe delays in correspondence due to global gradient synchronization.
---

## Abstract

The current discourse in Artificial Intelligence is highly fractured: autoregressive models scale memorization, while pure reinforcement learning struggles with sample efficiency. My research bridges these domains by framing intelligence through the lens of **Active Inference**, **Geometric Deep Learning**, and **Continuous State-Space Models (SSMs)**.

Let $\mathcal{H}$ be the entropy of the environment and $\mathcal{I}(X; Y)$ be the mutual information between an agent's internal state $X$ and the world state $Y$. I propose that true autonomy emerges when an agent actively minimizes its variational free energy, strictly bounded by the geometry of its environment. 

## Core Research Vectors

- **Geometric Deep Learning:** Exploiting symmetry and invariance (group theory) in neural architectures to learn efficiently from non-Euclidean manifolds. 
- **Continuous State-Space Models:** Pushing beyond standard attention mechanisms using structured sequence models (e.g., Mamba, S4) for unbounded context horizons.
- **Active Inference:** Designing agents that don't just passively predict the world, but take actions to minimize the divergence between their predictions and sensory reality.
- **Applied Coffee Optimization:** Theorem 1 states there exists an optimal learning rate $\eta \in (0, 1]$ such that a model converges precisely when my coffee mug empties. The proof is trivial and left as an exercise to the GPU cluster.

## Methodological Framework: Active Information Foraging

Intelligence fundamentally requires measuring the compatibility between an observation $o_t$ and an internal generative model $P(o, s)$. To minimize surprise, an autonomous agent must optimize its variational free energy $\mathcal{F}$.

Let $Q(s)$ be the approximate posterior of the hidden states. The free energy is bounded by the Kullback-Leibler divergence and the expected log-likelihood:

$$
\mathcal{F} \triangleq D_{KL}[Q(s) \| P(s)] - \mathbb{E}_{Q} [\ln P(o|s)]
$$

By treating an action $a$ as an active variable in the generative model, we force the agent to act such that it samples observations confirming its own internal predictions (self-evidencing):

$$
a^* = \arg\min_a \mathbb{E}_{Q(o|a)} [\mathcal{F}(o, a)]
$$

*Note: If $\mathcal{F}$ diverges to infinity, it is scientifically customary to blame the batch size.*

<details>
<summary><b>[Expand] Proof of Asymptotic Global Convergence for Active Inference Policies</b></summary>
<br>

**Theorem:** Let an autonomous agent be governed by a continuous-time stochastic differential equation (SDE) over a smooth Riemannian manifold $\mathcal{M}$. The policy $\pi^*$ that continuously minimizes the variational free energy $\mathcal{F}$ converges almost surely (a.s.) to the invariant measure of the target generative process, thereby avoiding absorbing bounds (e.g., thermodynamic death).

**Proof:**

Let the internal state dynamics be described by the Itô SDE:

$$
ds_t = f(s_t, a_t) dt + \Sigma(s_t) dW_t
$$

where $W_t$ is a standard Wiener process and $\Sigma(s_t)$ is the diffusion tensor. The time evolution of the probability density $p(s,t)$ is governed by the Fokker-Planck equation:

$$
\frac{\partial p}{\partial t} = -\nabla \cdot (f(s,a)p) + \frac{1}{2} \sum_{i,j} \frac{\partial^2}{\partial s_i \partial s_j} (\Sigma \Sigma^T)_{ij} p
$$

The agent's objective is to minimize the expected free energy path integral over an infinite horizon $T \to \infty$. We define the functional $\mathcal{F}$ using the Kullback-Leibler divergence between the variational posterior $Q(s)$ and the true generative model $P(o, s)$:

$$
\mathcal{F}(\pi) = \mathbb{E}_{Q(o, s | \pi)} \left[ \int_0^\infty e^{-\gamma t} \left( \ln Q(s_t) - \ln P(o_t, s_t) \right) dt \right]
$$

To find the optimal control policy $a_t^* \sim \pi^*$, we invoke the Hamilton-Jacobi-Bellman (HJB) equation. Let $V(s)$ be the optimal value function (the minimum expected free energy from state $s$):

$$
\gamma V(s) = \min_{a} \left\{ \mathcal{F}(s, a) + \nabla_s V(s)^T f(s,a) + \frac{1}{2} \text{Tr}\left( \Sigma(s)\Sigma(s)^T \nabla_{ss}^2 V(s) \right) \right\}
$$

By taking the functional derivative with respect to the action $a$ and setting it to zero, we isolate the optimal policy:

$$
\frac{\partial \mathcal{F}}{\partial a} + \left( \frac{\partial f}{\partial a} \right)^T \nabla_s V(s) = 0
$$

To prove global asymptotic stability, we propose $V(s)$ as a candidate Lyapunov function. Since the KL divergence component of $\mathcal{F}$ is strictly positive definite for $Q \neq P$, and $\mathcal{F} = 0 \iff Q = P$, we have $V(s) > 0$ for all states outside the target invariant set. 

Taking the orbital derivative along the system trajectories:

$$
\dot{V}(s_t) = \nabla_s V^T \dot{s}_t = \nabla_s V^T f(s_t, a^*_t) \leq -\mathcal{F}(s_t, a^*_t) < 0
$$

Because $\dot{V}(s) < 0$ globally, by LaSalle's Invariance Principle, the system trajectories converge almost surely to the largest invariant set where $\dot{V}(s) = 0$, which uniquely corresponds to the exact match between the variational posterior and the true generating process ($Q = P$). 

Thus, the agent perfectly predicts and dictates its environment, securing indefinite survival. $\blacksquare$

</details>

## Selected Preprints & Working Papers

- `[2608.09112]` *Bounding Variational Free Energy in Continuous State-Space Models* (Under Review)
- `[2511.03450]` *Autoregressive Collapse: Why Next-Token Prediction Cannot Yield General Intelligence*
- `[2502.11899]` *Non-Euclidean Manifold Traversals in Hierarchical JEPAs*

## Recommended Syllabus

For those seeking to escape the local minima of standard Deep Learning tutorials, I recommend the following foundational texts:

1. **Active Inference:** *The Free-Energy Principle: A Unified Brain Theory?* — Karl Friston (2010)
2. **Geometric DL:** *Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges* — Bronstein et al. (2021)
3. **State-Space Models:** *Mamba: Linear-Time Sequence Modeling with Selective State Spaces* — Gu & Dao (2023)

## Compute & Infrastructure Toolkit

Scaling these dynamic systems requires a robust engineering foundation to handle high-dimensional manifolds without bottlenecking.

![Research Stack](https://skillicons.dev/icons?i=pytorch,python,cpp,linux,bash,git,docker,aws,gcp,tensorflow,rust,julia&perline=12)

## Selected Insights

> **Lemma 1: The Attention Bottleneck** 
> Standard self-attention scales at $\mathcal{O}(N^2)$ with respect to sequence length $N$. Without sub-quadratic architectures or continuous state-spaces, attempting infinite-context reasoning is isomorphic to heating the earth.

> **On Neuro-Symbolic Integration:**
> Deep learning is unparalleled at statistical pattern matching (System 1), but struggles with rigid logical deduction (System 2). The next generation of models must embed symbolic constraints directly into the differentiable loss landscape.

## Secure Communication & Network

- **Professional Network:** [LinkedIn](https://www.linkedin.com/in/him-d/)
- **Code & Implementations:** See public repositories below.

```text
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2.0.22 (GNU/Linux)

mQENBGIzX/kBCAD... [TRUNCATED FOR SECURITY] ...z0K
=AB34
-----END PGP PUBLIC KEY BLOCK-----
Fingerprint: 4F9C 8D2A 11B3 E445 99F2  A1B2 C3D4 E5F6 77A8 99B0
```

---
<div align="center">
  <i>"I spend 90% of my time optimizing loss functions and the other 10% wondering why my gradients exploded."</i>
</div>
