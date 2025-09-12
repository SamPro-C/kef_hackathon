'use client';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    /******************************
     * Sponsor a Dream — Prototype
     * Vanilla JS implementation
     ******************************/

    /* ---------- Config ---------- */
    const STARTING_COINS = 10;
    const STUDENT_COUNT = 6;

    // Each student needs these amounts (per student) in order to fully "succeed"
    // We will attempt to "fund" students sequentially using the buckets.
    const REQUIRED_PER_STUDENT = {
      fees: 2, // tuition/exam
      uniforms: 1, // uniform/books
      mentorship: 1, // mentorship/workshops
    };

    /* ---------- State ---------- */
    let state = {
      coinsLeft: STARTING_COINS,
      pools: { fees: 0, uniforms: 0, mentorship: 0 }, // coins allocated per category
      students: [], // will hold objects with funded info
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
    const gameSection = document.getElementById('gameSection');
    const rippleCanvas = document.getElementById('rippleCanvas');
    const careerGrid = document.getElementById('careerGrid');
    const ctaSponsor = document.getElementById('ctaSponsor');
    const ctaDonate = document.getElementById('ctaDonate');

    /* ---------- Init UI ---------- */
    function init() {
      // initial coins
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

      // Hide sections
      if(rippleSection) rippleSection.style.display = 'none';
      if(gameSection) gameSection.style.display = 'block';

      // render coins & students
      renderCoins();
      renderBuckets();
      renderStudents();
      updateBudgetUI();

      // set up events
      const startBtn = document.getElementById('startBtn');
      if (startBtn) {
        startBtn.addEventListener('click', () => {
          if (gameSection) {
            gameSection.style.display = 'block';
            gameSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      if (seeResultsBtn) seeResultsBtn.addEventListener('click', showResults);
      if (resetBtn)
        resetBtn.addEventListener('click', () => {
          init();
          if (gameSection) gameSection.scrollIntoView({ behavior: 'smooth' });
        });
      
      if(ctaSponsor) ctaSponsor.addEventListener('click', () => window.open('https://www.kenyaeducationfund.org/donate/', '_blank'));
      if(ctaDonate) ctaDonate.addEventListener('click', () => window.open('https://www.kenyaeducationfund.org/donate/', '_blank'));
    }

    /* ---------- Render coins (click-to-allocate + pointer drag) ---------- */
    function renderCoins() {
      if (!coinsPile) return;
      coinsPile.innerHTML = '';
      for (let i = 0; i < state.coinsLeft; i++) {
        const c = document.createElement('div');
        c.className = 'coin';
        c.textContent = '¢';
        c.setAttribute('role', 'button');
        c.setAttribute('tabindex', '0');

        // pointer events for drag support (simple)
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
          // check drop target:
          const elem = document.elementFromPoint(ev.clientX, ev.clientY);
          const bucket = elem && elem.closest && elem.closest('.bucket');
          if (bucket) {
            const key = bucket.getAttribute('data-bucket');
            allocateCoin(key);
          }
          renderCoins();
        });

        coinsPile.appendChild(c);
      }
      if (state.coinsLeft === 0) {
        const hint = document.createElement('div');
        hint.style.fontSize = '13px';
        hint.style.color = '#7a6457';
        hint.style.padding = '8px';
        hint.textContent =
          'No coins left — click "See Results" to view impact or Reset to try again';
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

    /* ---------- Update bucket UI ---------- */
    function renderBuckets() {
      if(countFees) countFees.textContent = state.pools.fees || 0;
      if(countUniforms) countUniforms.textContent = state.pools.uniforms || 0;
      if(countMentorship) countMentorship.textContent = state.pools.mentorship || 0;

      const totalNeededPerCat = REQUIRED_PER_STUDENT.fees * STUDENT_COUNT;
      const percentFees = Math.min(
        100,
        Math.round(((state.pools.fees / totalNeededPerCat) * 100))
      );
      if(fillFees) fillFees.style.width = percentFees + '%';

      const totalUniformsNeeded = REQUIRED_PER_STUDENT.uniforms * STUDENT_COUNT;
      const percentUniforms = Math.min(
        100,
        Math.round((state.pools.uniforms / totalUniformsNeeded) * 100)
      );
      if(fillUniforms) fillUniforms.style.width = percentUniforms + '%';

      const totalMentorshipNeeded =
        REQUIRED_PER_STUDENT.mentorship * STUDENT_COUNT;
      const percentMentorship = Math.min(
        100,
        Math.round((state.pools.mentorship / totalMentorshipNeeded) * 100)
      );
      if(fillMentorship) fillMentorship.style.width = percentMentorship + '%';
    }

    /* ---------- Render Students ---------- */
    function renderStudents() {
      if (!studentsRow) return;
      studentsRow.innerHTML = '';
      state.students.forEach((s) => {
        const el = document.createElement('div');
        el.className =
          'student' +
          (s.funded ? ' success' : '') +
          (s.progress < 1 ? ' faded' : '');

        const speech = document.createElement('div');
        speech.className = 'speech';
        speech.textContent = 'Thank you, Jacques!';
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

    /* ---------- Funding Logic (sequential funding) ---------- */
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
            Math.min(feesPool, REQUIRED_PER_STUDENT.fees) /
              REQUIRED_PER_STUDENT.fees +
            Math.min(uniformsPool, REQUIRED_PER_STUDENT.uniforms) /
              REQUIRED_PER_STUDENT.uniforms +
            Math.min(mentorshipPool, REQUIRED_PER_STUDENT.mentorship) /
              REQUIRED_PER_STUDENT.mentorship;
          s.progress = Math.min(1, provided / 3);
          if (feesPool > 0) {
            feesPool = Math.max(
              0,
              feesPool - Math.min(feesPool, REQUIRED_PER_STUDENT.fees * s.progress)
            );
          }
          if (uniformsPool > 0) {
            uniformsPool = Math.max(
              0,
              uniformsPool -
                Math.min(
                  uniformsPool,
                  REQUIRED_PER_STUDENT.uniforms * s.progress
                )
            );
          }
          if (mentorshipPool > 0) {
            mentorshipPool = Math.max(
              0,
              mentorshipPool -
                Math.min(
                  mentorshipPool,
                  REQUIRED_PER_STUDENT.mentorship * s.progress
                )
            );
          }
        }
      });
    }

    /* ---------- Show results & ripple animation ---------- */
    function showResults() {
      computeFunding();
      renderStudents();

      const successes = state.students.filter((s) => s.funded).length;

      if (rippleSection) {
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
        c.style.left = 50 - (size / 2 / rippleCanvas.clientWidth) * 100 + '%';
        c.style.top = 50 - (size / 2 / rippleCanvas.clientHeight) * 100 + '%';
        rippleCanvas.appendChild(c);
        setTimeout(() => {
          c.style.transition =
            'transform 1200ms cubic-bezier(.2,.8,.2,1), opacity 1000ms';
          c.style.transform = 'scale(3)';
          c.style.opacity = '0';
        }, 120 * i);
      }

      const careers = [
        'Doctor',
        'Teacher',
        'Engineer',
        'Entrepreneur',
        'Community Leader',
        'Mentor',
      ];
      for (let i = 0; i < successCount; i++) {
        const card = document.createElement('div');
        card.className = 'career';
        card.innerHTML = `<div style="font-weight:700">${
          careers[i % careers.length]
        }</div><div style="font-size:13px;color:#7a6457;margin-top:6px">An outcome of KEF support</div>`;
        careerGrid.appendChild(card);
      }
      if (successCount === 0) {
        const note = document.createElement('div');
        note.style.color = '#7a6457';
        note.style.marginTop = '10px';
        note.textContent =
          'No students fully funded — try another allocation to see ripple effects.';
        careerGrid.appendChild(note);
      }
    }

    /* ---------- Budget UI ---------- */
    function updateBudgetUI() {
      if (budgetDisplay) budgetDisplay.textContent = `${state.coinsLeft} Coins`;
      renderBuckets();
      renderCoins();
    }

    init();
  }, []);

  return (
    <>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Sponsor a Dream Simulator</h1>
        <p className="text-xl text-gray-600 mt-2">
          See how your choices can change a student’s future.
        </p>
        <button id="startBtn" className="btn mt-8 px-8 py-4 text-xl">
          Play Now
        </button>
      </section>
      
      {/* Game Section */}
      <section id="gameSection" style={{display: 'none'}}>
      <div className="game">
        <h3 style={{ margin: '0 0 12px' }}>Sponsor a Dream — Interactive Simulator</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ minWidth: '220px' }}>
            <div style={{ fontSize: '13px', color: '#6e5a4e', marginBottom: '6px' }}>Your Budget</div>
            <div id="budgetDisplay" style={{ fontWeight: 800, fontSize: '22px' }}>10 Coins</div>
            <div style={{ marginTop: '8px', color: '#8a6d59', fontSize: '13px' }}>Drag coins into the buckets to allocate your funds.</div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="budget-row">
              <div className="coins-pile" id="coinsPile" aria-label="coins pile">
                {/* coins created by JS */}
              </div>

              <div className="buckets" style={{ flex: 1 }}>
                <div className="bucket" data-bucket="fees" id="bucket-fees" aria-label="School fees bucket">
                  <div className="icon">🎓</div>
                  <div>School Fees</div>
                  <div className="progress-bar" aria-hidden="true"><div className="progress-fill" id="fill-fees"></div></div>
                  <div className="count" id="count-fees">0</div>
                  <div className="smallmuted">Covers tuition & exam fees</div>
                </div>

                <div className="bucket" data-bucket="uniforms" id="bucket-uniforms" aria-label="Uniforms bucket">
                  <div className="icon">👕</div>
                  <div>Uniforms & Supplies</div>
                  <div className="progress-bar"><div className="progress-fill" id="fill-uniforms"></div></div>
                  <div className="count" id="count-uniforms">0</div>
                  <div className="smallmuted">Uniforms, shoes, books</div>
                </div>

                <div className="bucket" data-bucket="mentorship" id="bucket-mentorship" aria-label="Mentorship bucket">
                  <div className="icon">🤝</div>
                  <div>Mentorship</div>
                  <div className="progress-bar"><div className="progress-fill" id="fill-mentorship"></div></div>
                  <div className="count" id="count-mentorship">0</div>
                  <div className="smallmuted">Guidance, workshops, CREW</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* students preview */}
        <div style={{ marginTop: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 700 }}>Students in focus</div>
            <div style={{ fontSize: '13px', color: '#7a6457' }}>Tap a student to send a small thanks</div>
          </div>

          <div className="students" id="studentsRow">
            {/* students rendered by JS */}
          </div>

          <div style={{ textAlign: 'center', marginTop: '14px' }}>
            <button className="btn" id="seeResultsBtn">See Results</button>
            <button className="btn secondary" id="resetBtn">Reset</button>
          </div>
        </div>
      </div>
    </section>

    {/* RIPPLE / IMPACT */}
    <section id="rippleSection" style={{ display: 'none' }}>
      <div className="ripple-wrap">
        <h3 style={{ margin: '0 0 10px' }}>The Ripple Effect — See the Transformation</h3>
        <div style={{ color: '#6b5446', marginBottom: '12px' }}>
          You sponsored {`{x}`} students who are now on track to become...
        </div>
        <div className="ripple-canvas" id="rippleCanvas">
          {/* expanding circles will be added here */}
        </div>

        <div className="career-grid" id="careerGrid" aria-hidden="true">
          {/* careers added by JS */}
        </div>

        <div style={{ marginTop: '14px' }}>
          <div style={{ fontWeight: 700 }}>Real KEF numbers</div>
          <div style={{ color: '#6b5446', marginTop: '6px' }}>
            <div>• Over <strong>4,600+</strong> students supported since KEF began</div>
            <div>• KEF holistic support: scholarships, uniforms, sanitary products, mentorship</div>
            <div>• KEF focus turns school access into lifelong impact</div>
          </div>
        </div>

        <div className="final-cta" style={{ marginTop: '22px' }}>
          <h2>Every dream begins with a choice.</h2>
          <p style={{ color: '#6b5446' }}>
            Your choice today can ripple into careers, families supported, and stronger communities.
          </p>
          <div className="cta-row">
            <button className="btn" id="ctaSponsor">Sponsor a Student</button>
            <button className="btn secondary" id="ctaDonate">Donate</button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
