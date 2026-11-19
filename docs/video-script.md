# Nimbus — 3-minute video script (v2, roles synced with the deck)

Roles per the deck: **Alexandra Bernadotte — CEO · Sergey Musienko — CPO · Ivan Menshikov — CTO.**
All numbers match slide content (slide refs in brackets).

---

**[0:00–0:12] COLD OPEN — Alexandra, to camera**
*(Title card: "Nimbus — the interface layer between human cognition and AI agents")*

"Hi, I'm Dr Alexandra Bernadotte, CEO of Nimbus. We build the interface layer between human cognition and AI agents — the first agent-native brain-computer interface company. Let me show you."

---

**[0:12–0:40] THE PROBLEM — Alexandra, camera**
*(B-roll: typing, then EEG signal scrolling)*

"Software is going agentic — but human input is stuck at a hundred words a minute. The brain is our highest-bandwidth output. The problem: today's BCI decoders are static, opaque, and break for every new user — so software can't consume them. We fixed that."

---

**[0:40–0:55] STUDIO, QUICK — Sergey voiceover, screen recording**
*(Fast screencast: build → benchmark → live stream, ~15s, cut on action)*

"This is Nimbus Studio — drag a pipeline, benchmark on public data, stream it live from the headset. Same pipeline, zero rewrites. Fifty-plus researchers already build on it — and last month alone, our SDK was downloaded nine and a half thousand times." *(slides 4: 50+, 9.5K)*

---

**[0:55–1:25] DEMO: MCP — Sergey voiceover, terminal recording**
*(Screencast: Claude Code + nimbus-mcp — agent benchmarks, sweeps configs, saves artifacts)*

"And this is our MCP server — sixty-three tools, open source. I ask Claude: benchmark motor imagery on BNCI, sweep five configurations. The agent calls our tools, runs the experiments, saves the artifacts — I just watch. Nimbus is the first BCI stack an AI agent can operate end-to-end. As agents take over software, the brain becomes the last input device — and we own that layer." *(slides 4, 6, 9: 63 tools)*

---

**[1:25–1:55] HARDWARE — Alexandra, camera, holding Hermeias**
*(B-roll: Hermeias close-ups — electrodes, magnetic battery)*

"I'm a physician and a mathematician — I founded AICumene to close the loop between brain and machine. This is Hermeias, our seventeen-channel EEG headset: gold-plated dry electrodes, molded to your head, thirty mental patterns. Thirty customers already use it — and our next device, ZEUS, brings thirty-two electrodes in 2027. With our closed-loop training software it doesn't just read the brain — it adapts to it, session after session. Nimbus and AICumene are now one company that owns the whole loop: hardware, software, and agents." *(slide 5: 17-ch, 30 patterns, 30 customers, ZEUS 2027)*

---

**[1:55–2:25] THE SCIENCE — Ivan, camera**
*(On screen: patent/paper cards stacking up)*

"I'm Ivan Menshikov, CTO. Our science is directed neuroplasticity — closed-loop training that doesn't just decode the brain, it measurably changes it: in our pilot, ten participants gained ten percent in measured IQ over six months. Behind it sits a portfolio of sixty-plus papers and preprints and five granted patents — from EEG source localization to markers that predict recovery from coma, sleep depth, and anesthesia depth. We own the IP behind the training loop." *(slide 7: n=10 +10% IQ, 60+ papers, 5 patents, coma/sleep/anesthesia)*

---

**[2:25–3:00] MARKET & CLOSE — Alexandra leads, all three on camera**
*(On screen: "$400B long-term BCI market · the $8–16B input market we replace")*

**Alexandra:** "The long-term BCI market is projected at four hundred billion dollars — and today it's capped by software. That's the gap we take: our own devices proving what's possible, our engine adapting to every user, our agents distributing it."
**Sergey:** "From the lab, to the living room, to the clinic."
**Ivan:** "The more you use it, the better it adapts — and the harder it is to copy."
**Alexandra (all three):** "Nimbus — the interface layer between you and AI. We're applying to Speedrun to build this category. Let's do it together."

*(End card: nimbusbci.com · nimbus-mcp on PyPI)*

---

## What changed vs. the draft (and why)

| Draft | v2 | Reason |
|---|---|---|
| Sergey opens as CEO | **Alexandra opens as CEO** | Roles changed: Alexandra CEO, Sergey CPO, Ivan CTO (deck slide 10) |
| Sergey leads market & close | **Alexandra leads, Sergey gets the "lab→living room→clinic" line** | CEO closes the ask |
| Alexandra self-intro "Chief Scientist" | Cut; she opened already — kept "physician and mathematician, founded AICumene" inside the hardware beat | No role conflict, credentials stay |
| Ivan "Chief Research Officer" | **CTO** | Deck role |
| "all twelve participants, cortical-thickness gains" | **pilot: 10 participants, +10% IQ in 6 months** | Deck slide 7 says n=10, +10% IQ (DOI-linked); don't introduce a second, divergent claim on video |
| "forty-plus papers and seven-plus patents" | **sixty-plus papers and preprints, five granted patents** | Deck slide 7 (7 = Alexandra's inventorships, on her bio) |
| "$6.2B BCI market by 2030" | **$400B long-term TAM · $8–16B input market we replace** | Deck slide 8 numbers + sources; $6.2B appears nowhere in the deck |
| "validated on five hundred coma patients" | kept as "predict recovery from coma" (+ sleep/anesthesia depth) | Deck dropped the 575/AUC figure — video shouldn't re-add numbers the deck can't back on the same screen |
| Studio: "Fifty-plus researchers" | + **"9.5K downloads last month"** | Strongest live-adoption number, mirrors slide 4 chart |
| — | Hermeias: + **"Thirty customers already use it · ZEUS 32 electrodes in 2027"** | Sales traction + roadmap, mirrors slide 5 |
