/**
 * KOMAL SINGH PORTFOLIO
 * Modern Vanilla JavaScript — Noir & Crimson Ambient Canvas, Interactive 7-Layer Operations Explorer, Bento Filter & Clipboard
 */

(function () {
  'use strict';

  // ==========================================================================
  // 7-LAYER FINANCIAL & DATA FRAMEWORK DATA
  // ==========================================================================
  const LAYER_DATA = {
    1: {
      badge: 'LAYER 01 // FINANCIAL CORE',
      title: 'Accounting Fundamentals & Double-Entry Bookkeeping',
      desc: 'End-to-end commercial accounting, journal entries, balance sheet reconciliation, and general ledger integrity adhering to strict statutory standards.',
      tags: ['Double-Entry Ledger', 'B.Com Accounting']
    },
    2: {
      badge: 'LAYER 02 // TAX & COMPLIANCE',
      title: 'TallyPrime & GST Compliance Engine',
      desc: 'Comprehensive voucher generation, GST tax invoicing, input tax credit (ITC) mapping, and tax audit compliance via Tally ERP / TallyPrime.',
      tags: ['TallyPrime GST', 'Softech Certified']
    },
    3: {
      badge: 'LAYER 03 // HUMAN CAPITAL & PAYROLL',
      title: 'Enterprise Payroll & Statutory PF Pipeline',
      desc: 'End-to-end monthly salary disbursement structures, statutory Employee Provident Fund (PF) records, attendance tracking, and zero-defect payroll processing.',
      tags: ['Payroll Processing', 'PF Documentation']
    },
    4: {
      badge: 'LAYER 04 // INVENTORY & LOGISTICS',
      title: 'Automated Stock & Inventory Reconciliation',
      desc: 'Real-time tracking of high-velocity automotive and retail stock, purchase order flows, supplier payment verifications, and invoice audit trails.',
      tags: ['Stock Reconciliation', 'Goel Motors Pipeline']
    },
    5: {
      badge: 'LAYER 05 // DATA INTELLIGENCE',
      title: 'Advanced Microsoft Excel & MIS Dashboards',
      desc: 'High-dimensional data cleansing, automated lookup models, pivot table analyses, duplicate elimination, and executive periodic performance reports.',
      tags: ['Advanced Excel MIS', 'Data Scrubbing']
    },
    6: {
      badge: 'LAYER 06 // MARKET OPERATIONS',
      title: 'Territory Beat & Distribution Network',
      desc: 'Route planning, retailer network management, order dispatch synchronization, and commercial collections for SLMG Beverages (Coca-Cola).',
      tags: ['SLMG Beverages', 'Territory Operations']
    },
    7: {
      badge: 'LAYER 07 // TECHNICAL FOUNDATION',
      title: 'O Level Computational & Computer Training Foundation',
      desc: 'Accredited O Level competencies in Web Designing, Python, Java, and IoT combined with years of hands-on vocational computer instruction.',
      tags: ['O Level Certified', 'Computer Pedagogy']
    }
  };

  // ==========================================================================
  // AMBIENT NOIR & CRIMSON OP-ART CANVAS
  // ==========================================================================
  function initAuroraCanvas() {
    const canvas = document.getElementById('aurora-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let animationFrameId = null;
    let isRunning = false;
    let mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    let frame = 0;

    // Atmospheric Crimson Orbs (Red & Noir focus)
    const orbs = [
      { x: 0.35, y: 0.40, radius: 0.50, vx: 0.0003, vy: 0.0002, color: 'rgba(239, 68, 68, 0.14)' }, // Crimson Red
      { x: 0.70, y: 0.45, radius: 0.42, vx: -0.0002, vy: 0.0003, color: 'rgba(185, 28, 28, 0.10)' }, // Deep Blood Red
      { x: 0.50, y: 0.80, radius: 0.48, vx: 0.0002, vy: -0.0002, color: 'rgba(255, 255, 255, 0.03)' }  // Ghost Monochrome
    ];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX / width;
      mouse.targetY = e.clientY / height;
    }, { passive: true });

    function render() {
      if (!isRunning) return;
      frame++;

      // Ease mouse coordinates for smooth parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Render drifting chromatic orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0.1 || orb.x > 0.9) orb.vx *= -1;
        if (orb.y < 0.1 || orb.y > 0.9) orb.vy *= -1;

        const currentX = (orb.x + (mouse.x - 0.5) * 0.08) * width;
        const currentY = (orb.y + (mouse.y - 0.5) * 0.08) * height;
        const currentRadius = orb.radius * Math.min(width, height);

        const gradient = ctx.createRadialGradient(
          currentX, currentY, 0,
          currentX, currentY, currentRadius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(8, 8, 10, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    }

    function start() {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    }

    function stop() {
      isRunning = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    }

    // Performance optimization: Pause canvas rendering when off-screen
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
          } else {
            stop();
          }
        });
      },
      { threshold: 0.05 }
    );

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroObserver.observe(heroSection);
    } else {
      start();
    }
  }

  // ==========================================================================
  // INTERACTIVE 7-LAYER FRAMEWORK EXPLORER
  // ==========================================================================
  function initLayerExplorer() {
    const layerTabs = document.querySelectorAll('.layer-tab');
    const inspectBadge = document.getElementById('layer-inspect-id');
    const inspectTitle = document.getElementById('layer-inspect-title');
    const inspectDesc = document.getElementById('layer-inspect-desc');
    const inspectTags = document.getElementById('layer-inspect-tags');

    if (!layerTabs.length || !inspectTitle) return;

    layerTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const layerNum = tab.getAttribute('data-layer');
        const data = LAYER_DATA[layerNum];

        if (!data) return;

        // Update active tab states
        layerTabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Smooth transition animation
        const contentPane = document.getElementById('layer-content');
        if (contentPane) {
          contentPane.style.opacity = '0';
          contentPane.style.transform = 'translateY(6px)';

          setTimeout(() => {
            if (inspectBadge) inspectBadge.textContent = data.badge;
            inspectTitle.textContent = data.title;
            inspectDesc.textContent = data.desc;

            if (inspectTags) {
              inspectTags.innerHTML = data.tags
                .map((tag) => `<span class="tech-tag">${tag}</span>`)
                .join('');
            }

            contentPane.style.opacity = '1';
            contentPane.style.transform = 'translateY(0)';
          }, 150);
        }
      });
    });
  }

  // ==========================================================================
  // BENTO GRID CATEGORY FILTERING
  // ==========================================================================
  function initBentoFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bentoCards = document.querySelectorAll('.bento-card');

    if (!filterButtons.length || !bentoCards.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update button states
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards with smooth entrance
        bentoCards.forEach((card) => {
          const category = card.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.96)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // ==========================================================================
  // CLIPBOARD COPY WITH TOAST NOTIFICATION
  // ==========================================================================
  function initClipboardCopy() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    let toastTimeout = null;

    if (!copyButtons.length || !toast) return;

    copyButtons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const textToCopy = btn.getAttribute('data-copy') || 'skomal88168@gmail.com';

        try {
          await navigator.clipboard.writeText(textToCopy);
          showToast(`Email copied to clipboard: ${textToCopy}`);
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();

          try {
            document.execCommand('copy');
            showToast(`Email copied: ${textToCopy}`);
          } catch (fallbackErr) {
            showToast('Unable to copy. Please manually copy email.');
          }
          document.body.removeChild(textArea);
        }
      });
    });

    function showToast(msg) {
      if (toastMessage) toastMessage.textContent = msg;
      toast.classList.add('show');

      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }
  }

  // ==========================================================================
  // DOCK NAVIGATION SMOOTH SCROLL & ACTIVE STATE HIGHLIGHTING
  // ==========================================================================
  function initNavScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-links .nav-item');
    const sections = document.querySelectorAll('section[id]');

    if (!navLinks.length || !sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href').replace('#', '');
              if (href === currentId) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // ==========================================================================
  // BOOTSTRAP ALL COMPONENTS
  // ==========================================================================
  function init() {
    initAuroraCanvas();
    initLayerExplorer();
    initBentoFiltering();
    initClipboardCopy();
    initNavScrollSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();