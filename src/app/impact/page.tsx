'use client';
import { useEffect } from 'react';

export default function ImpactPage() {
  useEffect(() => {
    /* ---------- Config ---------- */
    const STARTING_COINS = 10;
    const STUDENT_COUNT = 6;

    const REQUIRED_PER_STUDENT = {
      fees: 2,
      uniforms: 1,
      mentorship: 1,
    };

    /* ---------- State ---------- */
    let state = {
      coinsLeft: STARTING_COINS,
      pools: { fees: 0, uniforms: 0, mentorship: 0 },
      students: [],
    };

    /* ---------- Helpers / DOM refs ---------- */
    const coinsPile = document.getElementById('coinsPile');
    const budgetDisplay = document.getElementById('budgetDisplay');
    const fillFees = document.getElementById('fill-fees');
    const fillUniforms = document.getElementById('fill-uniforms');
    const fillMentorship = document.getElementById('fill-mentorship');
    const countFees = document.getElementById('count-fees');
    const countUniforms = document.getElementById('count-uniforms');
    const countMentorship = document.getElementById('count-mentorship');
    const studentsRow = document.getElementById('studentsRow');
    const seeResultsBtn = document.getElementById('seeResultsBtn');
    const resetBtn = document.getElementById('resetBtn');
    const rippleSection = document.getElementById('rippleSection');
    const rippleCanvas = document.getElementById('rippleCanvas');
    const careerGrid = document.getElementById('careerGrid');
    const ctaSponsor = document.getElementById('ctaSponsor');
    const ctaDonate = document.getElementById('ctaDonate');

    /* ---------- Init UI ---------- */
    function init() {
      state.coinsLeft = STARTING_COINS;
      state.pools = { fees: 0, uniforms: 0, mentorship: 0 };
      state.students = [];
      for (let i = 0; i < STUDENT_COUNT; i++) {
        state.students.push({
          id: i + 1,
          name: `Student ${i + 1}`,
          funded: false,
          progress: 0,
        });
      }

      renderCoins();
      renderBuckets();
      renderStudents();
      updateBudgetUI();

      document.getElementById('startBtn')?.addEventListener('click', () => {
        document.getElementById('gameSection')?.scrollIntoView({ behavior: 'smooth' });
      });
      document.getElementById('learnBtn')?.addEventListener('click', () => {
        alert(
          'Click or drag coins into buckets. Each coin supports fees, uniforms, or mentorship. Then click "See Results" to watch transformation.'
        );
      });
      seeResultsBtn?.addEventListener('click', showResults);
      resetBtn?.addEventListener('click', () => {
        init();
        document.getElementById('gameSection')?.scrollIntoView({ behavior: 'smooth' });
      });

      ctaSponsor?.addEventListener('click', () =>
        window.open('https://www.kenyaeducationfund.org/donate/', '_blank')
      );
      ctaDonate?.addEventListener('click', () =>
        window.open('https://www.kenyaeducationfund.org/donate/', '_blank')
      );
    }

    /* ---------- Render coins ---------- */
    function renderCoins() {
      if (!coinsPile) return;
      coinsPile.innerHTML = '';
      for (let i = 0; i < state.coinsLeft; i++) {
        const c = document.createElement('div');
        c.className = 'coin';
        c.textContent = '¢';
        c.setAttribute('role', 'button');
        c.setAttribute('tabindex', '0');

        let dragging = false;
        let offset = { x: 0, y: 0 };
        c.addEventListener('pointerdown', (ev) => {
          c.setPointerCapture(ev.pointerId);
          dragging = true;
          c.style.position = 'relative';
          c.style.zIndex = '999';
          offset.x = ev.clientX;
          offset.y = ev.clientY;
          c.style.transform = 'scale(1.05)';
        });
        c.addEventListener('pointermove', (ev) => {
          if (!dragging) return;
          const dx = ev.clientX - offset.x;
          const dy = ev.clientY - offset.y;
          c.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
        });
        c.addEventListener('pointerup', (ev) => {
          dragging = false;
          c.releasePointerCapture(ev.pointerId);
          c.style.transform = '';
          c.style.zIndex = '';
          c.style.position = '';
          const elem = document.elementFromPoint(ev.clientX, ev.clientY);
          const bucket = elem && elem.closest && elem.closest('.bucket');
          if (bucket) {
            const key = bucket.getAttribute('data-bucket');
            if (key) allocateCoin(key);
          }
          renderCoins();
        });

        c.addEventListener('click', () => {
          document.querySelectorAll('.coin').forEach((n) => n.classList.remove('selected'));
          c.classList.add('selected');
          const onBucketClick = (ev) => {
            const key = ev.currentTarget.getAttribute('data-bucket');
            if (key) allocateCoin(key);
            document.querySelectorAll('.bucket').forEach((b) => b.removeEventListener('click', onBucketClick));
            renderCoins();
          };
          document.querySelectorAll('.bucket').forEach((b) => b.addEventListener('click', onBucketClick));
        });

        coinsPile.appendChild(c);
      }
      if (state.coinsLeft === 0) {
        const hint = document.createElement('div');
        hint.style.fontSize = '13px';
        hint.style.color = '#7a6457';
        hint.style.padding = '8px';
        hint.textContent = 'No coins left — click "See Results" to view impact or Reset to try again';
        coinsPile.appendChild(hint);
      }
    }

    function allocateCoin(bucketKey) {
      if (state.coinsLeft <= 0) return;
      if (!['fees', 'uniforms', 'mentorship'].includes(bucketKey)) return;
      state.coinsLeft--;
      state.pools[bucketKey] = (state.pools[bucketKey] || 0) + 1;
      updateBudgetUI();
      renderBuckets();
    }

    function renderBuckets() {
        if (countFees) countFees.textContent = (state.pools.fees || 0).toString();
        if (countUniforms) countUniforms.textContent = (state.pools.uniforms || 0).toString();
        if (countMentorship) countMentorship.textContent = (state.pools.mentorship || 0).toString();

        const totalNeededPerCat = REQUIRED_PER_STUDENT.fees * STUDENT_COUNT;
        const percentFees = Math.min(100, Math.round(((state.pools.fees / totalNeededPerCat) * 100)));
        if (fillFees) fillFees.style.width = percentFees + '%';

        const totalUniformsNeeded = REQUIRED_PER_STUDENT.uniforms * STUDENT_COUNT;
        const percentUniforms = Math.min(100, Math.round(((state.pools.uniforms / totalUniformsNeeded) * 100)));
        if (fillUniforms) fillUniforms.style.width = percentUniforms + '%';

        const totalMentorshipNeeded = REQUIRED_PER_STUDENT.mentorship * STUDENT_COUNT;
        const percentMentorship = Math.min(100, Math.round(((state.pools.mentorship / totalMentorshipNeeded) * 100)));
        if(fillMentorship) fillMentorship.style.width = percentMentorship + '%';
    }

    function renderStudents() {
      if (!studentsRow) return;
      studentsRow.innerHTML = '';
      state.students.forEach((s) => {
        const el = document.createElement('div');
        el.className = 'student' + (s.funded ? ' success' : '') + (s.progress < 1 ? ' faded' : '');

        const speech = document.createElement('div');
        speech.className = 'speech';
        speech.textContent = 'Thank you.';
        el.appendChild(speech);

        const avatar = document.createElement('div');
        avatar.className = 'avatar';
        avatar.textContent = `S${s.id}`;
        el.appendChild(avatar);

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = s.name;
        el.appendChild(name);

        const role = document.createElement('div');
        role.className = 'role';
        role.textContent = s.funded ? 'Sponsored' : 'Needs support';
        el.appendChild(role);

        el.addEventListener('click', () => {
          speech.style.display = 'block';
          setTimeout(() => (speech.style.display = 'none'), 1800);
        });

        studentsRow.appendChild(el);
      });
    }

    function computeFunding() {
      let feesPool = state.pools.fees || 0;
      let uniformsPool = state.pools.uniforms || 0;
      let mentorshipPool = state.pools.mentorship || 0;

      state.students.forEach((s) => {
        s.funded = false;
        s.progress = 0;
        if (
          feesPool >= REQUIRED_PER_STUDENT.fees &&
          uniformsPool >= REQUIRED_PER_STUDENT.uniforms &&
          mentorshipPool >= REQUIRED_PER_STUDENT.mentorship
        ) {
          feesPool -= REQUIRED_PER_STUDENT.fees;
          uniformsPool -= REQUIRED_PER_STUDENT.uniforms;
          mentorshipPool -= REQUIRED_PER_STUDENT.mentorship;
          s.funded = true;
          s.progress = 1;
        } else {
          const provided =
            Math.min(feesPool, REQUIRED_PER_STUDENT.fees) / REQUIRED_PER_STUDENT.fees +
            Math.min(uniformsPool, REQUIRED_PER_STUDENT.uniforms) / REQUIRED_PER_STUDENT.uniforms +
            Math.min(mentorshipPool, REQUIRED_PER_STUDENT.mentorship) / REQUIRED_PER_STUDENT.mentorship;
          s.progress = Math.min(1, provided / 3);
          if (feesPool > 0) {
            feesPool = Math.max(0, feesPool - Math.min(feesPool, REQUIRED_PER_STUDENT.fees * s.progress));
          }
          if (uniformsPool > 0) {
            uniformsPool = Math.max(0, uniformsPool - Math.min(uniformsPool, REQUIRED_PER_STUDENT.uniforms * s.progress));
          }
          if (mentorshipPool > 0) {
            mentorshipPool = Math.max(0, mentorshipPool - Math.min(mentorshipPool, REQUIRED_PER_STUDENT.mentorship * s.progress));
          }
        }
      });
    }

    function showResults() {
      computeFunding();
      renderStudents();
      const successes = state.students.filter((s) => s.funded).length;
      if(rippleSection) {
        rippleSection.style.display = 'block';
        rippleSection.scrollIntoView({ behavior: 'smooth' });
      }
      playRipple(successes);
    }

    function playRipple(successCount) {
        if (!rippleCanvas || !careerGrid) return;
        rippleCanvas.innerHTML = '';
        careerGrid.innerHTML = '';
        const base = Math.max(1, successCount);
        const maxCircles = Math.min(6, base + 2);
        for (let i = 0; i < maxCircles; i++) {
            const c = document.createElement('div');
            c.className = 'ripple-circle';
            const size = 60 + i * 80;
            c.style.width = size + 'px';
            c.style.height = size + 'px';
            c.style.left = (50 - (size / 2) / rippleCanvas.clientWidth * 100) + '%';
            c.style.top = (30 - (size / 2) / rippleCanvas.clientHeight * 100) + '%';
            rippleCanvas.appendChild(c);
            setTimeout(() => {
                c.style.transition = 'transform 1200ms cubic-bezier(.2,.8,.2,1), opacity 1000ms';
                c.style.transform = 'scale(3)';
                c.style.opacity = '0';
            }, 120 * i);
        }

        const careers = ['Doctor', 'Teacher', 'Engineer', 'Entrepreneur', 'Community Leader', 'Mentor'];
        for (let i = 0; i < successCount; i++) {
            const card = document.createElement('div');
            card.className = 'career';
            card.innerHTML = `<div style="font-weight:700">${careers[i % careers.length]}</div><div style="font-size:13px;color:#7a6457;margin-top:6px">An outcome of KEF support</div>`;
            careerGrid.appendChild(card);
        }
        if (successCount === 0) {
            const note = document.createElement('div');
            note.style.color = '#7a6457';
            note.style.marginTop = '10px';
            note.textContent = 'No students fully funded — try another allocation to see ripple effects.';
            careerGrid.appendChild(note);
        } else {
            celebrate();
        }
    }

    function celebrate() {
      if (!rippleCanvas) return;
      for (let i = 0; i < 18; i++) {
        const d = document.createElement('div');
        d.style.position = 'absolute';
        d.style.width = '8px';
        d.style.height = '8px';
        d.style.background = i % 2 === 0 ? 'var(--gold)' : 'var(--orange)';
        d.style.left = 30 + Math.random() * 40 + '%';
        d.style.top = 30 + Math.random() * 20 + '%';
        d.style.borderRadius = '4px';
        d.style.opacity = '1';
        rippleCanvas.appendChild(d);
        setTimeout(() => {
          d.style.transition = 'transform 1200ms, opacity 1200ms';
          d.style.transform = `translateY(${-(50 + Math.random() * 120)}px) rotate(${Math.random() * 360}deg)`;
          d.style.opacity = '0';
        }, 200 + Math.random() * 400);
        setTimeout(() => d.remove(), 2000);
      }
    }

    function updateBudgetUI() {
      if(budgetDisplay) budgetDisplay.textContent = `${state.coinsLeft} Coins`;
      renderBuckets();
      renderCoins();
    }

    init();

    document.addEventListener('keydown', (e) => {
      if (e.key === 'r') {
        init();
      }
      if (e.key === 'Enter') {
        showResults();
      }
    });

    ctaSponsor?.addEventListener('click', () => {
        const finalSection = document.getElementById('finalSection');
        if (finalSection) {
            finalSection.style.display = 'block';
            finalSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

  }, []);

  return (
    <main id="impact-page">
      <div className="container">
        <header>
          <div className="brand">
            <div className="logo">KEF</div>
            <div>
              <div className="title">KEF — Sponsor a Dream</div>
              <div className="small">Interactive prototype for the Alumni Hack-a-thon</div>
            </div>
          </div>
          <div className="smallmuted">Playable on PC • Tablet • Phone</div>
        </header>

        <section className="hero" id="hero">
          <div className="hero-left">
            <h1>Dreams shouldn’t die at the classroom door.</h1>
            <p>
              Thousands of bright Kenyan students drop out because of fees, uniforms, or missing mentorship. Step into
              the story: play, learn how a small choice becomes a life changed, and sponsor a dream.
            </p>
            <div className="hero-cta">
              <button className="btn" id="startBtn">
                Start the Journey
              </button>
              <button className="btn secondary" id="learnBtn">
                How it works
              </button>
            </div>
            <div style={{ marginTop: '14px', color: '#8a6d59', fontSize: '14px' }}>
              Real KEF facts included: <strong>4,600+</strong> students supported &nbsp;•&nbsp; <strong>98%</strong>{' '}
              university transition (prototype content)
            </div>
          </div>

          <div>
            <div
              style={{
                padding: '12px',
                borderRadius: '12px',
                background: 'linear-gradient(180deg,#fff,#fff8f5)',
                boxShadow: 'var(--soft)',
              }}
            >
              <div style={{ fontSize: '13px', color: '#5a4638', marginBottom: '10px' }}>Try a quick preview</div>
              <div className="coins-pile" aria-hidden="true">
                <div className="coin">1</div>
                <div className="coin">2</div>
                <div className="coin">3</div>
                <div className="coin">4</div>
                <div className="coin">5</div>
              </div>
              <div style={{ marginTop: '10px', fontSize: '13px', color: '#6e5a4e' }}>
                Drag coins into buckets to fund school fees, uniforms, and mentorship. See students transform — then
                sponsor a real student.
              </div>
            </div>
          </div>
        </section>

        <section id="gameSection">
          <div className="game">
            <h3 style={{ margin: '0 0 12px' }}>Sponsor a Dream — Interactive Simulator</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ minWidth: '220px' }}>
                <div style={{ fontSize: '13px', color: '#6e5a4e', marginBottom: '6px' }}>Your Budget</div>
                <div id="budgetDisplay" style={{ fontWeight: 800, fontSize: '22px' }}>
                  10 Coins
                </div>
                <div style={{ marginTop: '8px', color: '#8a6d59', fontSize: '13px' }}>
                  Click a coin then a bucket, or drag coins (touch supported).
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <div className="budget-row">
                  <div className="coins-pile" id="coinsPile" aria-label="coins pile"></div>
                  <div className="buckets" style={{ flex: 1 }}>
                    <div className="bucket" data-bucket="fees" id="bucket-fees" aria-label="School fees bucket">
                      <div className="icon">🎓</div>
                      <div>School Fees</div>
                      <div className="progress-bar" aria-hidden="true">
                        <div className="progress-fill" id="fill-fees"></div>
                      </div>
                      <div className="count" id="count-fees">
                        0
                      </div>
                      <div className="smallmuted">Covers tuition & exam fees</div>
                    </div>
                    <div
                      className="bucket"
                      data-bucket="uniforms"
                      id="bucket-uniforms"
                      aria-label="Uniforms bucket"
                    >
                      <div className="icon">👕</div>
                      <div>Uniforms & Supplies</div>
                      <div className="progress-bar">
                        <div className="progress-fill" id="fill-uniforms"></div>
                      </div>
                      <div className="count" id="count-uniforms">
                        0
                      </div>
                      <div className="smallmuted">Uniforms, shoes, books</div>
                    </div>
                    <div
                      className="bucket"
                      data-bucket="mentorship"
                      id="bucket-mentorship"
                      aria-label="Mentorship bucket"
                    >
                      <div className="icon">🤝</div>
                      <div>Mentorship</div>
                      <div className="progress-bar">
                        <div className="progress-fill" id="fill-mentorship"></div>
                      </div>
                      <div className="count" id="count-mentorship">
                        0
                      </div>
                      <div className="smallmuted">Guidance, workshops, CREW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: 700 }}>Students in focus</div>
                <div style={{ fontSize: '13px', color: '#7a6457' }}>Tap a student to send a small thanks</div>
              </div>
              <div className="students" id="studentsRow"></div>
              <div style={{ textAlign: 'center', marginTop: '14px' }}>
                <button className="btn" id="seeResultsBtn">
                  See Results
                </button>
                <button className="btn secondary" id="resetBtn">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="rippleSection" style={{ display: 'none' }}>
          <div className="ripple-wrap">
            <h3 style={{ margin: '0 0 10px' }}>The Ripple Effect — See the Transformation</h3>
            <div style={{ color: '#6b5446', marginBottom: '12px' }}>
              Watch students grow into careers and communities transform — powered by small choices.
            </div>
            <div className="ripple-canvas" id="rippleCanvas"></div>
            <div className="career-grid" id="careerGrid" aria-hidden="true"></div>
            <div style={{ marginTop: '14px' }}>
              <div style={{ fontWeight: 700 }}>Real KEF numbers (for credibility)</div>
              <div style={{ color: '#6b5446', marginTop: '6px' }}>
                <div>• Over <strong>4,600+</strong> students supported since KEF began</div>
                <div>• KEF holistic support: scholarships, uniforms, sanitary products, mentorship</div>
                <div>• KEF focus turns school access into lifelong impact</div>
              </div>
            </div>
            <div style={{ marginTop: '14px', textAlign: 'center' }}>
              <button className="btn" id="ctaSponsor">
                Sponsor a Student
              </button>
              <button className="btn secondary" id="ctaDonate">
                Donate
              </button>
            </div>
          </div>
        </section>
        
        <section id="finalSection" style={{ display: 'none' }}>
            <div className="final">
                <h2>Every dream begins with a choice.</h2>
                <p style={{color:'#6b5446'}}>Your choice today can ripple into careers, families supported, and stronger communities. Sponsor a student, share this story, or donate — be part of KEF's mission.</p>
                <div className="cta-row">
                    <a className="btn" href="https://www.kenyaeducationfund.org/donate/" target="_blank" rel="noopener" id="sponsorLink">Sponsor Now</a>
                    <a className="btn secondary" href="https://www.kenyaeducationfund.org/donate/" target="_blank" rel="noopener" id="donateLink">Donate</a>
                </div>
            </div>
        </section>

        <footer>
          Prototype for KEF Alumni Hack-a-thon — built by Jacques • This demo uses placeholder avatars and KEF public
          stats for storytelling.
        </footer>
      </div>
    </main>
  );
}
