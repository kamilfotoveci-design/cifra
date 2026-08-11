(() => {
  const root = document.querySelector('.landing-v6');
  if (!root) return;

  const copy = {
    SK: {
      login: 'Prihlásiť sa', contact: 'Kontakt',
      navHow: 'Ako to funguje', navFeatures: 'Funkcie', navFaq: 'Časté otázky',
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
      workflowTitle: 'Od údajov k úhrade.', workflowCopy: 'Jeden súvislý postup. Bez prepisovania údajov medzi tabuľkou, PDF a bankou.',
      workflowOne: 'Vyplň, čo treba', workflowOneCopy: 'Odberateľ, položky, DPH, splatnosť a účet. Uložené údaje nabudúce len vyberieš.',
      workflowTwo: 'Skontroluj doklad', workflowTwoCopy: 'Pred odoslaním vidíš čistý náhľad PDF aj správne údaje pre QR platbu.',
      workflowThree: 'Pošli a sleduj', workflowThreeCopy: 'Faktúru odošleš klientovi a stav úhrady ostane na jednom mieste.',
      tabOverview: 'Prehľad', tabInvoice: 'Faktúra', tabPayment: 'QR platba', overview: 'Prehľad', workspace: 'Tvoj pracovný priestor',
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
      scenarioTitle: 'Od vystavenia po úhradu bez zbytočných krokov.',
      scenarioCopy: 'Namiesto tabuľky, samostatného PDF a ručného sledovania platby je to jeden súvislý postup: od vyplnenia po označenie ako uhradené.',
      scenarioOne: 'Faktúra uložená', scenarioTwo: 'PDF odoslané klientovi', scenarioThree: 'Platba označená ako uhradená',
      pricingTitle: 'Začni bez záväzku.', pricingCopy: 'Najprv si prejdi celý postup. Platobnú kartu pri registrácii nepotrebuješ.',
      securityTitle: 'Dáta, ktorým môžeš dôverovať.',
      securityCopy: 'Toto sú konkrétne veci, ktoré Načas robí s tvojimi dátami, nič viac a nič menej.',
      secOneTitle: 'Dáta v cloude, viazané na tvoj účet',
      secOneCopy: 'Faktúry, klienti aj firemné údaje sú uložené v tvojom účte a nedostupné iným používateľom.',
      secTwoTitle: 'Prihlásenie e-mailom alebo cez Google',
      secTwoCopy: 'Bez ďalších hesiel na zapamätanie, ak si zvolíš prihlásenie cez Google.',
      secThreeTitle: 'Export dát kedykoľvek',
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
      navHow: 'Jak to funguje', navFeatures: 'Funkce', navFaq: 'Časté dotazy',
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
      workflowTitle: 'Od údajů k úhradě.', workflowCopy: 'Jeden souvislý postup. Bez přepisování údajů mezi tabulkou, PDF a bankou.',
      workflowOne: 'Vyplň, co je potřeba', workflowOneCopy: 'Odběratel, položky, DPH, splatnost a účet. Uložené údaje příště jen vybereš.',
      workflowTwo: 'Zkontroluj doklad', workflowTwoCopy: 'Před odesláním vidíš čistý náhled PDF i správné údaje pro QR platbu.',
      workflowThree: 'Pošli a sleduj', workflowThreeCopy: 'Fakturu odešleš klientovi a stav úhrady zůstane na jednom místě.',
      tabOverview: 'Přehled', tabInvoice: 'Faktura', tabPayment: 'QR platba', overview: 'Přehled', workspace: 'Tvůj pracovní prostor',
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
      scenarioTitle: 'Od vystavení po úhradu bez zbytečných kroků.',
      scenarioCopy: 'Místo tabulky, samostatného PDF a ručního sledování platby je to jeden souvislý postup: od vyplnění po označení jako uhrazeno.',
      scenarioOne: 'Faktura uložena', scenarioTwo: 'PDF odesláno klientovi', scenarioThree: 'Platba označena jako uhrazená',
      pricingTitle: 'Začni bez závazku.', pricingCopy: 'Nejprve si projdi celý postup. Platební kartu při registraci nepotřebuješ.',
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

  const navLinks = root.querySelector('.v6-nav-links');
  const mobileNav = root.querySelector('#mobileNav');
  const menuToggle = root.querySelector('.v6-menu-toggle');

  function updateMenuToggleLabel() {
    if (!menuToggle) return;
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', copy[locale][open ? 'menuClose' : 'menuOpen']);
  }

  function applyV6Locale() {
    locale = localStorage.getItem('cifra-locale') === 'CZ' ? 'CZ' : 'SK';
    document.documentElement.lang = locale === 'CZ' ? 'cs' : 'sk';
    root.querySelectorAll('[data-v6-copy]').forEach(node => {
      const value = copy[locale][node.dataset.v6Copy];
      if (value) node.textContent = value;
    });
    navLinks?.setAttribute('aria-label', copy[locale].navLinksLabel);
    mobileNav?.setAttribute('aria-label', copy[locale].mobileNavLabel);
    updateMenuToggleLabel();
  }

  const statement = root.querySelector('.v6-statement');
  if (statement && 'IntersectionObserver' in window && !reduceMotion) {
    statement.classList.add('v6-reveal');
    const statementObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        statement.classList.add('is-visible');
        statementObserver.unobserve(statement);
      });
    }, { threshold: 0.3 });
    statementObserver.observe(statement);
  }

  const flow = root.querySelector('[data-flow]');
  const flowSteps = [...root.querySelectorAll('[data-flow-step]')];

  function setFlowStep(currentIndex) {
    flow?.style.setProperty('--v6-flow-progress', String((currentIndex + 1) / Math.max(flowSteps.length, 1)));
    flowSteps.forEach((step, index) => {
      step.classList.toggle('is-current', index === currentIndex);
      step.classList.toggle('is-past', index < currentIndex);
      if (index === currentIndex) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    });
  }

  if (flowSteps.length) {
    setFlowStep(reduceMotion ? flowSteps.length - 1 : 0);
    if ('IntersectionObserver' in window && !reduceMotion) {
      const flowObserver = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setFlowStep(flowSteps.indexOf(visible.target));
      }, { threshold: [0.35, 0.6, 0.85], rootMargin: '-20% 0px -38%' });
      flowSteps.forEach(step => flowObserver.observe(step));
    }
  }
  const demoTabs = [...root.querySelectorAll('[data-demo-tab]')];
  demoTabs.forEach((button, index) => {
    button.tabIndex = button.getAttribute('aria-selected') === 'true' ? 0 : -1;
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? demoTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + demoTabs.length) % demoTabs.length;
      demoTabs[nextIndex].focus();
      demoTabs[nextIndex].click();
    });
  });
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
  if (heroDemo && matchMedia('(pointer: fine)').matches && !reduceMotion) {
    const onParallax = () => {
      const rect = heroDemo.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, 1 - rect.top / Math.max(window.innerHeight, 1)));
      heroDemo.style.setProperty('--v6-parallax', `${(progress * 3).toFixed(2)}px`);
    };
    onParallax();
    window.addEventListener('scroll', onParallax, { passive: true });
  }

  applyV6Locale();
})();
