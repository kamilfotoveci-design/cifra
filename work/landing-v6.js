(() => {
  const root = document.querySelector('.landing-v6');
  if (!root) return;

  const copy = {
    SK: {
      login: 'Prihlásiť sa', contact: 'Kontakt',
      navFeatures: 'Produkt', navFaq: 'Časté otázky',
      heroEyebrow: 'Fakturácia pre Česko a Slovensko',
      heroTitle: 'Od práce k platbe. Načas.',
      heroCopy: 'Vystav profesionálny doklad, pridaj QR platbu a sleduj úhradu. V slovenčine aj češtine, na počítači aj v mobile.',
      heroCta: 'Vystaviť faktúru zdarma', tourLink: 'Pozrieť ukážku',
      reassureOne: 'Bez platobnej karty', reassureTwo: 'Prvá faktúra za pár minút', reassureThree: 'Pre Česko aj Slovensko',
      demoTitle: 'Skutočný produkt, nie ukážka',
      demoNoteOverview: 'Vidíš, čo je uhradené a čo ešte čaká na peniaze.',
      demoNoteInvoice: 'Čistý PDF s logom a pečiatkou, pripravený na odoslanie.',
      demoNotePayment: 'Klient naskenuje a zaplatí presnú sumu, bez prepisovania.',
      customer: 'Odberateľ', total: 'Celkom',
      cloud: 'Cloudové dáta', statement: 'Doklad odošleš dnes. O platbe budeš vedieť zajtra.',
      overview: 'Prehľad', workspace: 'Tvoj pracovný priestor',
      newInvoice: 'Nová faktúra', income: 'Príjmy', waiting: 'Čaká na úhradu', paid: 'Uhradené', sent: 'Odoslané', overdue: 'Po splatnosti',
      invoice: 'Faktúra', supplier: 'Dodávateľ', consultation: 'Konzultácia značky', showPayment: 'Zobraziť QR platbu',
      payment: 'QR platba', paymentReady: 'Údaje sú pripravené.', paymentCopy: 'Banková aplikácia načíta účet, sumu aj variabilný symbol.',
      amount: 'Suma', variable: 'Variabilný symbol',
      featuresTitle: 'Funkcie',
      featOneTitle: 'Faktúra, ktorá vyzerá profesionálne.',
      featOneCopy: 'Klient, položky, DPH, splatnosť a účet. Uložené údaje nabudúce len vyberieš. Hotový PDF s logom a pečiatkou je pripravený na odoslanie.',
      featTwoTitle: 'QR platba, ktorú netreba prepisovať.',
      featTwoCopy: 'Česká QR Platba aj slovenské PAY by square, s presnou sumou a variabilným symbolom. Klient naskenuje v bankovej aplikácii a je hotovo.',
      featThreeTitle: 'Vždy vieš, čo je uhradené.',
      featThreeCopy: 'Stavy Uhradené, Čaká na úhradu a Po splatnosti na jednom mieste, s vyhľadávaním a filtrom podľa stavu.',
      featFourTitle: 'Faktúry dostupné, nech si kdekoľvek.',
      featFourCopy: 'Cloudový účet funguje na počítači aj v mobile. Export do CSV alebo Excelu kedykoľvek, keď potrebuješ dáta inde.',
      pricingCopy: 'Najprv si prejdi celý postup. Platobnú kartu pri registrácii nepotrebuješ.',
      securityTitle: 'Dáta, ktorým môžeš dôverovať.',
      securityCopy: 'Toto sú konkrétne veci, ktoré Načas robí s tvojimi dátami, nič viac a nič menej.',
      secOneTitle: 'Dáta v cloude, viazané na tvoj účet',
      secOneCopy: 'Faktúry, klienti aj firemné údaje sú uložené v tvojom účte a nedostupné iným používateľom.',
      secTwoTitle: 'Prihlásenie e-mailom alebo cez Google',
      secTwoCopy: 'Bez ďalších hesiel na zapamätanie, ak si zvolíš prihlásenie cez Google.',
      secThreeTitle: 'Export dat kedykoľvek',
      secThreeCopy: 'Faktúry si vieš stiahnuť do CSV alebo Excelu, keď ich potrebuješ inde.',
      secFourTitle: 'Žiadne sledovanie',
      secFourCopy: 'Používame iba nevyhnutné úložisko pre prihlásenie a jazyk, žiadnu analytiku.',
      supportTitle: 'Podpora priamo od tvorcu.',
      founderCopy: 'Napíš mi priamo, keď niečo nefunguje alebo niečo chýba. Odpovedám sám.',
      founderCta: 'Napísať e-mail',
      faqTitle: 'Najčastejšie otázky.', faqOne: 'Funguje Načas v Česku aj na Slovensku?',
      faqOneCopy: 'Áno. Rozhranie prepneš medzi slovenčinou a češtinou a platobný QR kód sa vytvorí podľa krajiny a účtu.',
      faqTwo: 'Môžem zadať číslo účtu namiesto IBAN?', faqTwoCopy: 'Pri českom účte môžeš zadať predčíslie, číslo účtu a kód banky. Načas z nich pripraví údaje pre českú QR platbu.',
      faqThree: 'Dostanem faktúru ako PDF?', faqThreeCopy: 'Áno. Pred odoslaním vidíš náhľad a môžeš stiahnuť reprezentatívne PDF s logom, položkami a platobnými údajmi.',
      faqFour: 'Sú údaje dostupné aj na inom zariadení?', faqFourCopy: 'Áno. Po prihlásení sa faktúry a firemné údaje ukladajú do tvojho účtu v cloude.',
      faqFive: 'Môžem exportovať svoje dáta?', faqFiveCopy: 'Áno. Faktúry si kedykoľvek stiahneš do CSV alebo Excelu.',
      finalTitle: 'Prvá faktúra môže byť hotová ešte dnes.', finalCopy: 'Vytvor účet, doplň firemné údaje a Načas ťa prevedie zvyškom.',
      legalTitle: 'Ochrana údajov',
      legalOne: 'Faktúry, klienti a firemné údaje sú uložené v cloude (Supabase) a viazané výhradne na tvoj účet. Iný používateľ sa k nim nedostane.',
      legalTwo: 'V prehliadači si lokálne ukladáme iba jazykové nastavenie a potvrdenie tejto správy o úložisku. Žiadnu analytiku ani sledovacie skripty nepoužívame.',
      legalThree: 'Otázky k svojim údajom môžeš kedykoľvek poslať na kamil.hortik@gmail.com.',
      startAccount: 'Vytvoriť účet', footer: 'Od práce k platbe. Načas.',
      menuOpen: 'Otvoriť menu', menuClose: 'Zavrieť menu',
      navLinksLabel: 'Sekcie stránky', mobileNavLabel: 'Mobilná navigácia'
    },
    CZ: {
      login: 'Přihlásit se', contact: 'Kontakt',
      navFeatures: 'Produkt', navFaq: 'Časté dotazy',
      heroEyebrow: 'Fakturace pro Česko a Slovensko',
      heroTitle: 'Od práce k platbě. Načas.',
      heroCopy: 'Vystav profesionální doklad, přidej QR platbu a sleduj úhradu. V češtině i slovenštině, na počítači i v mobilu.',
      heroCta: 'Vystavit fakturu zdarma', tourLink: 'Prohlédnout ukázku',
      reassureOne: 'Bez platební karty', reassureTwo: 'První faktura za pár minut', reassureThree: 'Pro Česko i Slovensko',
      demoTitle: 'Skutečný produkt, ne ukázka',
      demoNoteOverview: 'Vidíš, co je uhrazeno a co ještě čeká na peníze.',
      demoNoteInvoice: 'Čisté PDF s logem a razítkem, připravené k odeslání.',
      demoNotePayment: 'Klient naskenuje a zaplatí přesnou částku, bez přepisování.',
      customer: 'Odběratel', total: 'Celkem',
      cloud: 'Cloudová data', statement: 'Doklad odešleš dnes. O platbě budeš vědět zítra.',
      overview: 'Přehled', workspace: 'Tvůj pracovní prostor',
      newInvoice: 'Nová faktura', income: 'Příjmy', waiting: 'Čeká na úhradu', paid: 'Uhrazeno', sent: 'Odesláno', overdue: 'Po splatnosti',
      invoice: 'Faktura', supplier: 'Dodavatel', consultation: 'Konzultace značky', showPayment: 'Zobrazit QR platbu',
      payment: 'QR platba', paymentReady: 'Údaje jsou připravené.', paymentCopy: 'Bankovní aplikace načte účet, částku i variabilní symbol.',
      amount: 'Částka', variable: 'Variabilní symbol',
      featuresTitle: 'Funkce',
      featOneTitle: 'Faktura, která vypadá profesionálně.',
      featOneCopy: 'Klient, položky, DPH, splatnost a účet. Uložené údaje příště jen vybereš. Hotové PDF s logem a razítkem je připravené k odeslání.',
      featTwoTitle: 'QR platba, kterou nemusíš přepisovat.',
      featTwoCopy: 'České QR Platba i slovenské PAY by square, s přesnou částkou a variabilním symbolem. Klient naskenuje v bankovní aplikaci a je hotovo.',
      featThreeTitle: 'Vždy víš, co je uhrazeno.',
      featThreeCopy: 'Stavy Uhrazeno, Čeká na úhradu a Po splatnosti na jednom místě, s vyhledáváním a filtrem podle stavu.',
      featFourTitle: 'Faktury dostupné, ať jsi kdekoli.',
      featFourCopy: 'Cloudový účet funguje na počítači i v mobilu. Export do CSV nebo Excelu kdykoli, když potřebuješ data jinde.',
      pricingCopy: 'Nejprve si projdi celý postup. Platební kartu při registraci nepotřebuješ.',
      securityTitle: 'Data, kterým můžeš věřit.',
      securityCopy: 'Toto jsou konkrétní věci, které Načas dělá s tvými daty, nic víc a nic míň.',
      secOneTitle: 'Data v cloudu, vázaná na tvůj účet',
      secOneCopy: 'Faktury, klienti i firemní údaje jsou uložené v tvém účtu a nedostupné jiným uživatelům.',
      secTwoTitle: 'Přihlášení e-mailem nebo přes Google',
      secTwoCopy: 'Bez dalších hesel k zapamatování, pokud zvolíš přihlášení přes Google.',
      secThreeTitle: 'Export dat kdykoli',
      secThreeCopy: 'Faktury si můžeš stáhnout do CSV nebo Excelu, když je potřebuješ jinde.',
      secFourTitle: 'Žádné sledování',
      secFourCopy: 'Používáme jen nezbytné úložiště pro přihlášení a jazyk, žádnou analytiku.',
      supportTitle: 'Podpora přímo od tvůrce.',
      founderCopy: 'Napiš mi přímo, když něco nefunguje nebo něco chybí. Odpovídám sám.',
      founderCta: 'Napsat e-mail',
      faqTitle: 'Nejčastější otázky.', faqOne: 'Funguje Načas v Česku i na Slovensku?',
      faqOneCopy: 'Ano. Rozhraní přepneš mezi češtinou a slovenštinou a platební QR kód se vytvoří podle země a účtu.',
      faqTwo: 'Mohu zadat číslo účtu místo IBAN?', faqTwoCopy: 'U českého účtu můžeš zadat předčíslí, číslo účtu a kód banky. Načas z nich připraví údaje pro českou QR platbu.',
      faqThree: 'Dostanu fakturu jako PDF?', faqThreeCopy: 'Ano. Před odesláním vidíš náhled a můžeš stáhnout reprezentativní PDF s logem, položkami a platebními údaji.',
      faqFour: 'Jsou údaje dostupné i na jiném zařízení?', faqFourCopy: 'Ano. Po přihlášení se faktury a firemní údaje ukládají do tvého účtu v cloudu.',
      faqFive: 'Mohu exportovat svá data?', faqFiveCopy: 'Ano. Faktury si kdykoli stáhneš do CSV nebo Excelu.',
      finalTitle: 'První faktura může být hotová ještě dnes.', finalCopy: 'Vytvoř účet, doplň firemní údaje a Načas tě provede zbytkem.',
      legalTitle: 'Ochrana údajů',
      legalOne: 'Faktury, klienti a firemní údaje jsou uložené v cloudu (Supabase) a vázané výhradně na tvůj účet. Jiný uživatel se k nim nedostane.',
      legalTwo: 'V prohlížeči si lokálně ukládáme jen jazykové nastavení a potvrzení této zprávy o úložišti. Žádnou analytiku ani sledovací skripty nepoužíváme.',
      legalThree: 'Otázky ke svým údajům můžeš kdykoli poslat na kamil.hortik@gmail.com.',
      startAccount: 'Vytvořit účet', footer: 'Od práce k platbě. Načas.',
      menuOpen: 'Otevřít menu', menuClose: 'Zavřít menu',
      navLinksLabel: 'Sekce stránky', mobileNavLabel: 'Mobilní navigace'
    }
  };

  let locale = localStorage.getItem('cifra-locale') === 'CZ' ? 'CZ' : 'SK';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('v6-motion');

  const hasGsap = !!(window.gsap && window.ScrollTrigger && window.CustomEase);
  if (hasGsap) {
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create('v6Signature', 'M0,0,C0.23,1,0.32,1,1,1'); // == cubic-bezier(0.23,1,0.32,1), a stronger ease-out with real weight behind it
  }
  const canAnimate = hasGsap && !reduceMotion;

  const navLinks = root.querySelector('.v6-nav-links');
  const mobileNav = root.querySelector('#mobileNav');
  const menuToggle = root.querySelector('.v6-menu-toggle');

  function updateMenuToggleLabel() {
    if (!menuToggle) return;
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', copy[locale][open ? 'menuClose' : 'menuOpen']);
  }

  function prepareWordMotion() {
    const headings = root.querySelectorAll('.v6-hero h1, .v6-section-head h2, .v6-showcase-copy h2, .v6-security h2, .v6-support h2, .v6-faq > h2, .v6-final h2, .v6-legal h2');
    headings.forEach(heading => {
      const text = heading.textContent.trim();
      if (!text || heading.querySelector('.v6-word')) return;
      heading.setAttribute('aria-label', text);
      const fragment = document.createDocumentFragment();
      text.split(/(\s+)/).forEach((part, index) => {
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }
        const word = document.createElement('span');
        word.className = 'v6-word';
        word.style.setProperty('--v6-word-index', String(Math.floor(index / 2)));
        word.textContent = part;
        word.setAttribute('aria-hidden', 'true');
        fragment.appendChild(word);
      });
      heading.replaceChildren(fragment);
    });
  }

  function applyV6Locale() {
    locale = localStorage.getItem('cifra-locale') === 'CZ' ? 'CZ' : 'SK';
    document.documentElement.lang = locale === 'CZ' ? 'cs' : 'sk';
    root.querySelectorAll('[data-v6-copy]').forEach(node => {
      const value = copy[locale][node.dataset.v6Copy];
      if (value) node.textContent = value;
    });
    prepareWordMotion();
    navLinks?.setAttribute('aria-label', copy[locale].navLinksLabel);
    mobileNav?.setAttribute('aria-label', copy[locale].mobileNavLabel);
    updateMenuToggleLabel();
  }

  applyV6Locale();

  // --- GSAP-driven entrance and scroll-reveal motion ---
  // NOTE: prepareWordMotion() re-wraps heading text into fresh .v6-word spans every
  // time applyV6Locale() runs (i.e. on every language toggle). The timelines below are
  // built once, right after the very first applyV6Locale() call, and reference the
  // .v6-word spans that exist at that moment. If a later language toggle regenerates
  // words inside a section that has not been revealed yet, those brand-new span
  // elements are outside any timeline and simply render at their default (fully
  // visible) styling — they will not replay or newly trigger a reveal animation, but
  // they can also never end up stuck invisible. This is an intentional trade-off to
  // guarantee the "never leave content invisible" safety requirement.
  if (canAnimate) {
    // a) Hero entrance: hero-copy / hero-visual fade+rise, h1 clip-path reveal, h1 word stagger.
    const heroTl = gsap.timeline();
    const heroEnterEls = [...root.querySelectorAll('.v6-enter')];
    if (heroEnterEls.length) {
      heroTl.fromTo(heroEnterEls, { opacity: 0, y: '0.75rem' }, {
        opacity: 1, y: 0, duration: 0.42, ease: 'v6Signature', stagger: 0.07
      }, 0);
    }
    const heroHeading = root.querySelector('.v6-hero-copy h1');
    if (heroHeading) {
      heroTl.fromTo(heroHeading, {
        clipPath: 'inset(0% 0% 100% 0%)', scale: 0.96, y: '1.5rem'
      }, {
        clipPath: 'inset(0% 0% 0% 0%)', scale: 1, y: 0, duration: 0.82, ease: 'v6Signature'
      }, 0.14);
      const heroWords = heroHeading.querySelectorAll('.v6-word');
      if (heroWords.length) {
        heroTl.fromTo(heroWords, {
          opacity: 0, y: '0.5em'
        }, {
          opacity: 1, y: 0, duration: 0.5, ease: 'v6Signature', stagger: 0.045
        }, 0.22);
      }
    }
  }

  const statement = root.querySelector('.v6-statement');
  if (statement && canAnimate) {
    const statementP = statement.querySelector('p');
    if (statementP) {
      gsap.timeline({ scrollTrigger: { trigger: statement, start: 'top 70%', once: true } })
        .fromTo(statementP, { opacity: 0, y: '0.75rem' }, { opacity: 1, y: 0, duration: 0.42, ease: 'v6Signature' });
    }
  }

  const scrollRevealTargets = [...root.querySelectorAll('.v6-showcase, .v6-cloud, .v6-security, .v6-support, .v6-faq, .v6-final, .v6-legal, .v6-footer')];
  if (!reduceMotion && scrollRevealTargets.length) {
    // Ambient decorative loops (signal sweep, product breathe, orbit pulse, line scan,
    // node pulse) are pure CSS and keyed off this class; keep adding it independently
    // of whether the GSAP CDN loaded, so those effects keep working offline/CDN-blocked.
    root.classList.add('v6-motion-ready');
  }

  function buildSectionReveal(section) {
    const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 88%', once: true } });

    tl.fromTo(section, {
      opacity: 0,
      y: '1.75rem'
    }, {
      opacity: 1, y: 0,
      duration: 0.6, ease: 'v6Signature'
    }, 0);

    const headings = section.querySelectorAll('h2, h3');
    if (headings.length) {
      tl.fromTo(headings, { clipPath: 'inset(0% 0% 100% 0%)', y: '1rem' }, {
        clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 0.56, ease: 'v6Signature'
      }, 0.06);
      tl.fromTo(headings, { opacity: 0.2 }, { opacity: 1, duration: 0.38, ease: 'v6Signature' }, 0.06);
    }

    const words = section.querySelectorAll('h2 .v6-word, h3 .v6-word');
    if (words.length) {
      tl.fromTo(words, { y: '0.5em' }, {
        y: 0, duration: 0.46, ease: 'v6Signature', stagger: 0.035
      }, 0.06);
      tl.fromTo(words, { opacity: 0 }, { opacity: 1, duration: 0.38, ease: 'v6Signature', stagger: 0.035 }, 0.06);
    }

    const showcaseVisual = section.querySelector('.v6-showcase-visual');
    if (showcaseVisual) {
      tl.fromTo(showcaseVisual, { opacity: 0, y: '2.5rem', scale: 0.96 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'v6Signature'
      }, 0.04);
    }

    const staggerItems = section.querySelectorAll('.v6-steps li, .v6-ledger > div, .v6-faq article');
    if (staggerItems.length) {
      tl.fromTo(staggerItems, { x: '-1rem' }, { x: 0, duration: 0.56, ease: 'v6Signature', stagger: 0.06 }, 0);
      tl.fromTo(staggerItems, { opacity: 0.45 }, { opacity: 1, duration: 0.46, ease: 'v6Signature', stagger: 0.06 }, 0);
    }
  }

  if (canAnimate && scrollRevealTargets.length) {
    scrollRevealTargets.forEach(buildSectionReveal);
  }

  // Subtle scroll-linked drift on each product visual — a quiet sense of depth as
  // the section moves through the viewport, on top of the one-time reveal above.
  // Targets the inner product element (not .v6-showcase-visual itself) so this
  // continuous scrub never fights the one-time entrance tween over the same
  // transform — they animate two different nodes.
  if (canAnimate && matchMedia('(pointer: fine)').matches) {
    root.querySelectorAll('.v6-showcase-visual > *').forEach(inner => {
      gsap.fromTo(inner, { y: '-1rem' }, {
        y: '1rem', ease: 'none',
        scrollTrigger: { trigger: inner, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
      });
    });
  }

  const faqTimers = new WeakMap();
  root.querySelectorAll('.v6-faq h3 button').forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.closest('article').querySelector(':scope > div');
      const open = button.getAttribute('aria-expanded') === 'true';
      const pending = faqTimers.get(panel);
      if (pending) clearTimeout(pending);
      button.setAttribute('aria-expanded', String(!open));
      if (reduceMotion) {
        panel.hidden = open;
        return;
      }
      panel.classList.remove('is-opening', 'is-closing');
      if (open) {
        panel.classList.add('is-closing');
        faqTimers.set(panel, setTimeout(() => {
          panel.hidden = true;
          panel.classList.remove('is-closing');
          faqTimers.delete(panel);
        }, 140));
        return;
      }
      panel.hidden = false;
      panel.classList.add('is-opening');
      requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.remove('is-opening')));
    });
  });

  root.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => window.setTimeout(applyV6Locale, 0));
  });

  if (menuToggle && mobileNav) {
    function closeMenu({ focusToggle = false } = {}) {
      if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      updateMenuToggleLabel();
      window.setTimeout(() => { mobileNav.hidden = true; }, reduceMotion ? 0 : 220);
      if (focusToggle) menuToggle.focus();
    }
    function openMenu() {
      mobileNav.hidden = false;
      mobileNav.classList.add('is-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      updateMenuToggleLabel();
    }
    menuToggle.addEventListener('click', () => {
      if (menuToggle.getAttribute('aria-expanded') === 'true') closeMenu();
      else openMenu();
    });
    mobileNav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu({ focusToggle: true });
    });
    document.addEventListener('click', event => {
      if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
      if (mobileNav.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMenu();
    });
  }

  const nav = root.querySelector('.v6-nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const heroDemo = root.querySelector('.v6-hero-demo');
  const heroHeader = root.querySelector('.v6-hero');
  if (heroDemo && heroHeader && matchMedia('(pointer: fine)').matches && canAnimate) {
    const parallax = { p: 0 };
    gsap.timeline({ scrollTrigger: { trigger: heroHeader, start: 'top top', end: 'bottom top', scrub: true } })
      .to(parallax, {
        p: 1,
        ease: 'none',
        onUpdate: () => {
          heroDemo.style.setProperty('--v6-parallax', `${(parallax.p * 10).toFixed(2)}px`);
          heroDemo.style.setProperty('--v6-tilt', `${(parallax.p * -0.8).toFixed(2)}deg`);
        }
      });
  }
})();
