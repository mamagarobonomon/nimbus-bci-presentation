# Nimbus BCI Inc. — Merged Deck Plan (Nimbus × AICumene)

Target: a16z SPEEDRUN SR008 (deadline Nov 1). One company from slide one: **Nimbus BCI Inc. (Delaware)**.
Spine: *"The interface layer between human cognition and AI agents: agent-native BCI."*

Device images (downloaded from aicumene.com to `assets/images/aicumene/`):
`hermeias.jpg` (1280×720) · `nero.jpg` (1280×720) · `hypercortex.png` (1200×619).

---

## 1. Slide Outline (12 slides)

### Slide 1 — Title
- **Nimbus BCI Inc.** — The interface layer between human cognition and AI agents
- Agent-native BCI: adaptive decoding engine + first-party hardware + agent tools, one company
- a16z SPEEDRUN SR008
- Founders: Sergey Musienko · Dr. Alexandra Bernadotte · Ivan Menshikov
- *Visual:* full-bleed dark photo of Hermeias headset (`hermeias.jpg`), white wordmark, one-liner

### Slide 2 — Problem: Human input is the bottleneck
- Software is going agentic: agents execute in milliseconds; humans type ~100 wpm
- The brain is the highest-bandwidth human output channel
- BCI is the stalled fix: decoders are static, opaque, and break per-user
- Evidence it stalled: 100–300 ms thought→action · $10–50K per clinical retrain · black-box models block approval and trust
- *Visual:* bandwidth ladder (typing → voice → brain) over the 3 stat cards from the current Nimbus deck

### Slide 3 — Why now
- MCP and coding agents are mainstream — agent-operated tooling is a standard, not a bet
- EEG foundation encoders matured (EEGNet / REVE / LaBraM class)
- Consumer EEG got cheap: dry electrodes, sub-$1K devices, 7+ headset families supported
- FDA guidance now accommodates Bayesian/adaptive methods
- *Visual:* four-quadrant convergence diagram converging on "agent-native BCI"

### Slide 4 — Solution: one company owns the full loop
- Engine: adaptive probabilistic decoding (SDK + Studio + Personalizer), sub-20 ms on-device
- Hardware: Hermeias (17-ch) and Nero (9-ch) first-party headsets
- Agent layer: nimbus-mcp (63 tools) + BrainState — AI agents operate BCI pipelines end-to-end
- Every session personalizes the decoder: closed loop no static-decoder competitor has
- *Visual:* loop diagram — brain → headset → engine → agent/action → feedback arrow back into decoder

### Slide 5 — The engine (wedge): SDK + Studio + Personalizer
- Python/Julia SDKs (LDA/QDA/Softmax/Probit/STS), shipped on PyPI
- Nimbus Studio: 50+ researchers, 200+ pipelines, 15+ papers supported
- Personalizer: frozen encoder + Bayesian head — ~23× cheaper than fine-tuning, sub-20 ms
- Benchmark: same accuracy as a full refit (−0.1 pp vs sklearn LDA), ~10× cheaper updates — BNCI 2014-004, nimbusbench S3
- *Visual:* existing benchmark chart pair + Studio screenshot strip

### Slide 6 — First-party hardware: the ceiling showcase
- Hermeias: 17-channel EEG, gold-plated dry electrodes, personal molded fit, magnetic quick-swap battery, up to 30 mental patterns
- Nero: 9-channel everyday companion, 8 mental states, built-in AI assistant
- HyperCortex (cognitive-training web app) + CortexGame
- Same engine runs on 7+ headset families — hardware-agnostic by design
- *Visual:* `hermeias.jpg` + `nero.jpg` side by side, spec strip beneath

### Slide 7 — Agent-native BCI
- nimbus-mcp: open-source MCP server, 63 tools (Claude Code, Cursor, Claude Desktop)
- Agents run benchmarks on 90+ datasets, sweeps, confirm-gated live hardware
- BrainState: live mental state exposed as an agent-readable resource
- First BCI stack an AI agent can operate end-to-end
- *Visual:* agent ↔ MCP ↔ pipeline schematic + terminal session screenshot

### Slide 8 — Science & validation
- Multichannel SSA signal-processing stack: oscillator decomposition feeding compact models
- BOID consciousness marker: AUC 0.81 on 575 post-anoxic coma patients (fused model, leakage-free)
- 2 preprints: universal BCI personalization (arXiv:2607.22397) · Studio matches reference pipelines (arXiv:2610.13894)
- RxInfer / Lazy Dynamics partnership: reactive message passing on factor graphs
- *Visual:* BOID result card + preprint cards + factor-graph motif

### Slide 9 — Long-term vision (labeled: exploratory, non-medical)
- Research direction: Directed Neuroplasticity (Bernadotte) + cognitive training (HyperCortex)
- Basis: exploratory studies, n=12
- Explicitly **not** current product claims; no medical aims in this round
- Why it matters: a proprietary training methodology could make the hardware sticky for decades
- *Visual:* single restrained diagram, visible "Research direction — exploratory, n=12, non-medical" label

### Slide 10 — Business model & moat
- Wedge: developer engine — Studio SaaS (Pro $29/mo, 80+ waitlist, zero paid marketing) + SDK co-dev ($20–150K + royalties; 1 contract signed: BrainBit & PiEEG)
- Expansion: OEM engine licensing ("Intel Inside" for BCI) + first-party devices showcasing the ceiling
- Moat: closed-loop data flywheel — every session personalizes the decoder; static decoders can't follow
- Market: $50–100M SAM (2026) against a ~$400B US implant TAM backdrop (Morgan Stanley BCI Primer 2024)
- *Visual:* flywheel circle + SAM/TAM bar; "Intel Inside" as caption metaphor only

### Slide 11 — Team & merger structure
- Sergey Musienko, CEO — commercial strategy, GTM; 15 years scaling deep-tech ventures
- Dr. Alexandra Bernadotte, Chief Scientist — MD/PhD mathematician, AICumene founder, 40+ papers, 7+ patents; inventor of Directed Neuroplasticity and the Hermeias headset
- Ivan Menshikov, Chief Research Officer — co-author of the core SSA stack; BOID AUC 0.81 / 575 patients
- Plus: Podusenko (CTO), Parinov (CBDO), Şenöz, van Erp; advisors Beck (Duke), de Vries (TU/e, RxInfer), Kuck (Medtronic)
- Merger: Nimbus software engine + AICumene hardware & training software = one full-stack Delaware company
- *Visual:* founder trio cards with photos + combined org/advisor strip; small "1 + 1 = full stack" graphic

### Slide 12 — The ask
- a16z SPEEDRUN SR008 — filed; deadline Nov 1
- Raising $500K pre-seed
- Use of funds: OEM integration & reliability · BrainBit & PiEEG milestones · waitlist → Studio revenue · first-party device integration · inference + partner-facing hires
- 18-month target: engine revenue compounding while Hermeias/Nero showcase the ceiling
- *Visual:* one big "$500K" + milestone timeline; SPEEDRUN mark

---

## 2. Merged Story Script (one paragraph per slide)

**1 — Title.** Nimbus BCI Inc. is the interface layer between human cognition and AI agents — agent-native BCI. We are three founders combining a shipped probabilistic decoding engine with first-party EEG hardware, so that for the first time one company owns the entire loop from brain signal to agent action. We are filed for a16z SPEEDRUN SR008.

**2 — Problem.** Software is going agentic: agents plan and execute in milliseconds, while their operators still type at roughly 100 words per minute — the human is now the slowest component in the loop. The highest-bandwidth output channel humans have is the brain, and BCI was supposed to be the fix — but it stalled, because decoders are static, opaque, and break for every new user. The industry's own numbers show the stall: 100–300 ms from thought to action, $10–50K to retrain a single clinical session, and black-box models regulators and users cannot trust.

**3 — Why now.** Four things converged. MCP made agents first-class software citizens, so agent-facing interfaces are now a standard, not a bet. EEG foundation encoders matured — the EEGNet/REVE/LaBraM class — giving everyone strong frozen representations. Consumer EEG hardware got cheap, with dry electrodes and sub-$1K devices across 7+ headset families. And FDA guidance now accommodates Bayesian and adaptive methods, which is exactly what our engine is built on.

**4 — Solution.** The combined company owns the full loop. Our engine adapts probabilistically on-device in under 20 ms; our first-party headsets (Hermeias, Nero) prove the hardware ceiling; and our agent layer — the open-source nimbus-mcp server and BrainState — lets AI agents operate BCI pipelines end-to-end. Because every session feeds back into the decoder, the system personalizes continuously — a closed loop no static-decoder competitor has.

**5 — Engine.** The wedge is the developer engine. Our Python and Julia SDKs are public on PyPI; Nimbus Studio, the visual pipeline builder, already serves 50+ researchers who have built 200+ pipelines and supported 15+ papers. The Personalizer freezes any encoder and adapts a cheap Bayesian head — about 23× cheaper than fine-tuning — and on the public BNCI 2014-004 benchmark it matches a full refit within −0.1 pp of sklearn LDA accuracy at roughly 10× cheaper updates, all on CPU.

**6 — Hardware.** AICumene's hardware line shows the ceiling the engine enables. Hermeias is a 17-channel EEG headset with gold-plated dry electrodes, a personal molded fit, a magnetic quick-swap battery, and up to 30 mental patterns; Nero is the 9-channel everyday companion recognizing 8 mental states with a built-in AI assistant; HyperCortex and CortexGame turn training into a product. The same engine runs across 7+ headset families — the devices are showcases, not a bet against our OEM partners.

**7 — Agent-native.** This is the slide no other BCI company can build. nimbus-mcp is an open-source MCP server exposing 63 tools to Claude Code, Cursor, and Claude Desktop: agents run benchmarks on 90+ datasets, launch sweeps, and drive confirm-gated live hardware. BrainState exposes the user's live mental state as an agent-readable resource. An AI agent can today operate our entire BCI stack end-to-end — that is what agent-native means.

**8 — Science.** The credibility layer underneath. Our multichannel SSA stack decomposes EEG into oscillators that compact models can decode; on top of it, the BOID consciousness marker reached AUC 0.81 on 575 post-anoxic coma patients, leakage-free. Two preprints are public — universal BCI personalization (arXiv:2607.22397) and Studio's exact match to reference pipelines (arXiv:2610.13894) — and our engine is built on RxInfer through our Lazy Dynamics partnership.

**9 — Vision (exploratory, non-medical).** One clearly-labeled long-term direction, kept out of the product story: Directed Neuroplasticity — Bernadotte's method of steering decoder training to engage targeted brain areas — plus cognitive training through HyperCortex. The basis is exploratory studies with n=12; these are not medical claims and not current product claims. We show it because a proprietary training methodology, if it holds up, makes the hardware+engine loop defensible for decades.

**10 — Business model & moat.** We enter through the developer engine: Studio SaaS at $29/month with 80+ on the waiting list and zero paid marketing, and SDK co-development contracts at $20–150K plus per-unit royalties — one signed with BrainBit and PiEEG. We expand by licensing the engine to OEMs — the "Intel Inside" of BCI — while first-party devices showcase the ceiling. The moat is the flywheel: every session personalizes the decoder, so the engine gets better with use in a way static decoders structurally cannot match. The software layer alone is a $50–100M SAM in 2026, in front of a ~$400B US implant TAM (Morgan Stanley, 2024).

**11 — Team & merger.** Three founders cover the full stack. Sergey Musienko, CEO — 15 years scaling deep-tech ventures, owns strategy and GTM. Dr. Alexandra Bernadotte, Chief Scientist — MD/PhD mathematician, founder of AICumene, 40+ papers and 7+ patents, inventor of Directed Neuroplasticity and the Hermeias headset. Ivan Menshikov, Chief Research Officer — co-author of the core signal-processing stack behind the BOID result. Around them: the Nimbus engineering team (Podusenko, Şenöz, van Erp, Parinov) and advisors from Duke, TU/e (RxInfer's creator), and Medtronic. The merger is structural: Nimbus contributes the software engine, AICumene the hardware and training software — one Delaware company owning the whole loop from day one.

**12 — Ask.** We are filed for a16z SPEEDRUN SR008 and raising a $500K pre-seed. The money goes to OEM integration and reliability, the BrainBit and PiEEG milestones, converting the waitlist into Studio revenue, integrating the first-party devices with the engine, and two hires — inference and partner-facing. Eighteen months from now the engine is compounding inside partners' devices while Hermeias and Nero show what the ceiling looks like.

---

## 3. Cut List

### Cut from Deck A (Nimbus, this repo)
| Dropped | Why |
|---|---|
| Title "The Intel Inside for BCI" as the opener | Engine-first framing dilutes the agent-native spine; "Intel Inside" demoted to a licensing metaphor inside Slide 10 |
| 6-person team slide as-is | Merged company is founder-led (3 founders); existing team + advisors become the supporting strip on Slide 11 |
| Competition table (NeuroPype / OpenBCI / MNE / MATLAB / custom dev) | Detailed tool-by-tool table doesn't fit 12 slides; compress to "no existing tool combines IDE + agent-native MCP + Bayesian personalization + embeddable SDK" (Slide 10 moat). Full table stays in appendix |
| Market slide detail ($80.8B early / $320B intermediate / ~2.8M / ~6.8M patients) | Implant-horizon detail is backdrop, not the wedge; one line on Slide 10 suffices |
| Revenue-model slide (path to $400K+ ARR, $4.5M upside) | Too granular for a 12-slide SPEEDRUN deck; keep pricing facts on Slide 10, move the ARR table to appendix |
| Appendix slides (BCI explainer, stack, method table, SDK internals) | Keep as appendix in the built deck; excluded from the 12 |
| "58 MCP tools" | Stale — actual count is **63 tools** per PyPI (nimbus-mcp 0.14.19, uploaded 2026-10-30); fixed in index.html |

### Cut from Deck B (AICumene PDF / site)
| Dropped | Why |
|---|---|
| Russia market sizing (>20M/yr, >1M neurorehab, 300K strokes, Minzdrav, 800K RUB/10 sessions) | Wrong geography and payer model for a16z; replaced by Morgan Stanley TAM + the agent-bottleneck market frame |
| TRL 9 / MLR 8 / CLR 7 readiness labels | Russian regulatory framing; also overclaims for a research-stage device and invites diligence attack |
| Medical/rehab claims as product claims (stroke/PTSD/post-COVID rehab, "no effective solutions exist", MRI-verified efficacy, 800K-RUB reimbursement) | Not substantiated to investor grade; survives only as one labeled non-medical vision slide (Slide 9) |
| "Даём движение и делаем людей умнее" / "makes people smarter" IQ framing | Overclaim; IQ/cognitive-gain language banned outside the labeled vision slide |
| Wellness problem list (stress, sleep, burnout, concentration) | Dilutes the agent-native wedge; the consumer angle enters via Nero on Slide 6 |
| "World record 30 mental patterns" (site) | Unverifiable superlative; keep the spec "up to 30 mental patterns," drop the record claim |
| HermesPro / TurquoiseLog / CognitiveTracker / gift cards (site roadmap) | Unsubstantiated roadmap noise |
| Robot arm / car / exoskeleton / space control claims | aspirational, no evidence in either deck at investor grade; at most a half-line inside Slide 9 |
| "Safe (bouncing battery)" | engineering footnote; rephrased as "magnetic quick-swap battery" spec on Slide 6 |
| Platform screenshots (PDF pp. 12–13) | Superseded by Nimbus Studio, which is live and evidenced |
| Contact page | Replaced by merged ask slide |
| 16-electrode Hermes / 8-electrode Neuron counts (PDF) | Outnumbered by the current site + context: 17-ch Hermeias / 9-ch Nero (channel count ≠ electrode count; use current site numbers) |

### Conflicts resolved
| Conflict | Resolution |
|---|---|
| MCP tools: 39 (merger context) vs 58 (repo deck) | **Resolved: 63** — verified on PyPI, nimbus-mcp 0.14.19 (uploaded 2026-10-30), README states "Tools (63)" twice; repo deck's 58 and brief's 39 are both stale. Use 63 everywhere |
| Adaptation cost claim: "~23× cheaper" | Verified against PyPI nimbus-bci 0.8.2: "~8–10× cheaper than batch refit, ~22–131× cheaper than trunk retraining" — deck's "~23× vs trunk fine-tuning" is the conservative end of the shipped range; keep, and keep the ~10× vs sklearn LDA benchmark figure as a separate, precisely-labeled comparison |
| Hermeias channels: 16 electrodes (PDF) vs 17-channel (site) | Use 17-channel (current official site) |
| Nero: 8 electrodes/4–8 commands (PDF) vs 9-channel/8 states (site) | Use 9-channel, 8 mental states |
| Market frame: Russia rehab demand (Deck B) vs developer-tool SAM (Deck A) | Deck A wins: $50–100M SAM + $400B TAM backdrop; agent-bottleneck frame leads |
| Decoding AI: "static vs adaptive" (Deck A) vs directed neuroplasticity (Deck B) | Engine story uses Deck A's hedged, benchmarked version; neuroplasticity kept only as labeled research direction |
| "Same accuracy as refit, 10× cheaper" (Deck A) vs 23× cheaper than fine-tuning | Both kept, different comparisons: ~10× vs sklearn LDA refit (benchmark) and ~23× vs trunk fine-tuning (adaptation) — label each precisely |

### Numbers kept exactly (per brief)
50+ researchers · 200+ pipelines · 15+ papers · 63 MCP tools (nimbus-mcp 0.14.19 on PyPI, 2026-10-30) · ~23× cheaper adaptation (shipped range ~22–131× vs trunk retraining) · sub-20 ms · 17/9 channels · 30 mental patterns · 8 mental states (Nero) · AUC 0.81 / 575 patients · 7+ headset families · ~100 wpm · 80+ waitlist · 1 hardware contract (BrainBit & PiEEG) · 2 preprints · $50–100M SAM · ~$400B TAM (Morgan Stanley 2024) · $500K ask · n=12 (vision slide only)

**Verified against PyPI on 2026-10-31:** nimbus-mcp 0.14.19 (63 tools; clients Claude Code/Cursor/Claude Desktop; confirm-gated live hardware incl. BrainFlow boards and BrainBit; stdio + streamable HTTP). nimbus-bci 0.8.2 (Personalizer cost ranges above; trial outputs are `BrainState` objects with confidence/uncertainty/rejection flags — BrainState is a real SDK surface, Slide 7 is safe). "90+ datasets" was **not** visible on the PyPI page — confirm on docs.nimbusbci.com before the pitch.
