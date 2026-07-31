(() => {
  const root = document.querySelector('.landing-v6');
  if (!root) return;

  const copy = {
    SK: {
      login: 'Prihlásiť sa', start: 'Začať', heroTitle: 'Faktúry vždy poruke.',
      heroCopy: 'Vystav doklad, pridaj QR platbu a sleduj úhradu. V češtine aj slovenčine, na počítači aj v mobile.',
      heroCta: 'Vystaviť prvú faktúru', howLink: 'Ako to funguje', heroNote: 'Bez karty. Účet vytvoríš za chvíľu.',
      demoTitle: 'Interaktívny náhľad', pocketLabel: 'Nová faktúra', customer: 'Odberateľ', item: 'Položka', total: 'Celkom', draft: 'Koncept',
      stepCustomer: 'Klient', stepItem: 'Položka', stepTotal: 'Suma', stepSend: 'Odoslať', stepPaid: 'Úhrada',
      cloud: 'Cloudové dáta', statement: 'Doklad odošleš dnes. O platbe budeš vedieť zajtra.',
      workflowTitle: 'Od údajov k úhrade.', workflowCopy: 'Jeden súvislý postup. Bez prepisovania údajov medzi tabuľkou, PDF a bankou.',
      workflowOne: 'Vyplň, čo treba', workflowOneCopy: 'Odberateľ, položky, DPH, splatnosť a účet. Uložené údaje nabudúce len vyberieš.',
      workflowTwo: 'Skontroluj doklad', workflowTwoCopy: 'Pred odoslaním vidíš čistý náhľad PDF aj správne údaje pre QR platbu.',
      workflowThree: 'Pošli a sleduj', workflowThreeCopy: 'Faktúru odošleš klientovi a stav úhrady ostane na jednom mieste.',
      showcaseTitle: 'Pozri si doklad pred odoslaním.', showcaseCopy: 'Prepni medzi prehľadom, faktúrou a QR platbou. Toto nie je obrázok — je to ovládateľná ukážka produktu.',
      tabOverview: 'Prehľad', tabInvoice: 'Faktúra', tabPayment: 'QR platba', overview: 'Prehľad', workspace: 'Tvoj pracovný priestor',
      newInvoice: 'Nová faktúra', income: 'Príjmy', waiting: 'Čaká na úhradu', paid: 'Uhradené', sent: 'Odoslané',
      invoice: 'Faktúra', supplier: 'Dodávateľ', consultation: 'Konzultácia značky', showPayment: 'Zobraziť QR platbu',
      payment: 'QR platba', paymentReady: 'Údaje sú pripravené.', paymentCopy: 'Banková aplikácia načíta účet, sumu aj variabilný symbol.',
      amount: 'Suma', variable: 'Variabilný symbol', capabilitiesTitle: 'Všetko, čo patrí k faktúre.',
      capabilitiesCopy: 'Funkcie sú zoradené podľa práce, nie podľa technických názvov.',
      capOne: 'Správne údaje', capOneCopy: 'Klienti, položky, DPH, variabilný symbol, IBAN aj lokálne číslo účtu.',
      capTwo: 'Reprezentatívny výstup', capTwoCopy: 'PDF s firemným logom, pečiatkou a jemným brandingom VYSTAV.',
      capThree: 'Rýchla platba', capThreeCopy: 'QR Platba pre Česko a PAY by square pre Slovensko.',
      capFour: 'Prehľad po odoslaní', capFourCopy: 'Stavy, vyhľadávanie, štatistiky a export do CSV alebo Excelu.',
      scenarioTitle: 'Ráno vystavíš. Klient zaplatí z mobilu.',
      scenarioCopy: 'VYSTAV uloží klienta, pripraví PDF a vloží platobný QR kód. Keď sa k práci vrátiš, doklad aj jeho stav nájdeš v prehľade.',
      scenarioOne: 'Faktúra uložená', scenarioTwo: 'PDF odoslané klientovi', scenarioThree: 'Platba označená ako uhradená',
      pricingTitle: 'Začni bez záväzku.', pricingCopy: 'Najprv si prejdi celý postup. Platobnú kartu pri registrácii nepotrebuješ.',
      faqTitle: 'Najčastejšie otázky.', faqOne: 'Funguje VYSTAV v Česku aj na Slovensku?',
      faqOneCopy: 'Áno. Rozhranie prepneš medzi slovenčinou a češtinou a platobný QR kód sa vytvorí podľa krajiny a účtu.',
      faqTwo: 'Môžem zadať číslo účtu namiesto IBAN?', faqTwoCopy: 'Pri českom účte môžeš zadať predčíslie, číslo účtu a kód banky. VYSTAV z nich pripraví údaje pre českú QR platbu.',
      faqThree: 'Dostanem faktúru ako PDF?', faqThreeCopy: 'Áno. Pred odoslaním vidíš náhľad a môžeš stiahnuť reprezentatívne PDF s logom, položkami a platobnými údajmi.',
      faqFour: 'Sú údaje dostupné aj na inom zariadení?', faqFourCopy: 'Áno. Po prihlásení sa faktúry a firemné údaje ukladajú do tvojho účtu v cloude.',
      finalTitle: 'Prvá faktúra môže odísť dnes.', finalCopy: 'Vytvor účet, doplň firemné údaje a VYSTAV ťa prevedie zvyškom.',
      startAccount: 'Vytvoriť účet', footer: 'Faktúry, ktoré máš poruke.', contact: 'Kontakt'
    },
    CZ: {
      login: 'Přihlásit se', start: 'Začít', heroTitle: 'Faktury vždy po ruce.',
      heroCopy: 'Vystav doklad, přidej QR platbu a sleduj úhradu. V češtině i slovenštině, na počítači i v mobilu.',
      heroCta: 'Vystavit první fakturu', howLink: 'Jak to funguje', heroNote: 'Bez karty. Účet vytvoříš za chvíli.',
      demoTitle: 'Interaktivní náhled', pocketLabel: 'Nová faktura', customer: 'Odběratel', item: 'Položka', total: 'Celkem', draft: 'Koncept',
      stepCustomer: 'Klient', stepItem: 'Položka', stepTotal: 'Částka', stepSend: 'Odeslat', stepPaid: 'Úhrada',
      cloud: 'Cloudová data', statement: 'Doklad odešleš dnes. O platbě budeš vědět zítra.',
      workflowTitle: 'Od údajů k úhradě.', workflowCopy: 'Jeden souvislý postup. Bez přepisování údajů mezi tabulkou, PDF a bankou.',
      workflowOne: 'Vyplň, co je potřeba', workflowOneCopy: 'Odběratel, položky, DPH, splatnost a účet. Uložené údaje příště jen vybereš.',
      workflowTwo: 'Zkontroluj doklad', workflowTwoCopy: 'Před odesláním vidíš čistý náhled PDF i správné údaje pro QR platbu.',
      workflowThree: 'Pošli a sleduj', workflowThreeCopy: 'Fakturu odešleš klientovi a stav úhrady zůstane na jednom místě.',
      showcaseTitle: 'Prohlédni si doklad před odesláním.', showcaseCopy: 'Přepni mezi přehledem, fakturou a QR platbou. Není to obrázek — je to ovladatelná ukázka produktu.',
      tabOverview: 'Přehled', tabInvoice: 'Faktura', tabPayment: 'QR platba', overview: 'Přehled', workspace: 'Tvůj pracovní prostor',
      newInvoice: 'Nová faktura', income: 'Příjmy', waiting: 'Čeká na úhradu', paid: 'Uhrazeno', sent: 'Odesláno',
      invoice: 'Faktura', supplier: 'Dodavatel', consultation: 'Konzultace značky', showPayment: 'Zobrazit QR platbu',
      payment: 'QR platba', paymentReady: 'Údaje jsou připravené.', paymentCopy: 'Bankovní aplikace načte účet, částku i variabilní symbol.',
      amount: 'Částka', variable: 'Variabilní symbol', capabilitiesTitle: 'Všechno, co patří k faktuře.',
      capabilitiesCopy: 'Funkce jsou seřazené podle práce, ne podle technických názvů.',
      capOne: 'Správné údaje', capOneCopy: 'Klienti, položky, DPH, variabilní symbol, IBAN i místní číslo účtu.',
      capTwo: 'Reprezentativní výstup', capTwoCopy: 'PDF s firemním logem, razítkem a jemným brandingem VYSTAV.',
      capThree: 'Rychlá platba', capThreeCopy: 'QR Platba pro Česko a PAY by square pro Slovensko.',
      capFour: 'Přehled po odeslání', capFourCopy: 'Stavy, vyhledávání, statistiky a export do CSV nebo Excelu.',
      scenarioTitle: 'Ráno vystavíš. Klient zaplatí z mobilu.',
      scenarioCopy: 'VYSTAV uloží klienta, připraví PDF a vloží platební QR kód. Až se k práci vrátíš, doklad i jeho stav najdeš v přehledu.',
      scenarioOne: 'Faktura uložena', scenarioTwo: 'PDF odesláno klientovi', scenarioThree: 'Platba označena jako uhrazená',
      pricingTitle: 'Začni bez závazku.', pricingCopy: 'Nejprve si projdi celý postup. Platební kartu při registraci nepotřebuješ.',
      faqTitle: 'Nejčastější otázky.', faqOne: 'Funguje VYSTAV v Česku i na Slovensku?',
      faqOneCopy: 'Ano. Rozhraní přepneš mezi češtinou a slovenštinou a platební QR kód se vytvoří podle země a účtu.',
      faqTwo: 'Mohu zadat číslo účtu místo IBAN?', faqTwoCopy: 'U českého účtu můžeš zadat předčíslí, číslo účtu a kód banky. VYSTAV z nich připraví údaje pro českou QR platbu.',
      faqThree: 'Dostanu fakturu jako PDF?', faqThreeCopy: 'Ano. Před odesláním vidíš náhled a můžeš stáhnout reprezentativní PDF s logem, položkami a platebními údaji.',
      faqFour: 'Jsou údaje dostupné i na jiném zařízení?', faqFourCopy: 'Ano. Po přihlášení se faktury a firemní údaje ukládají do tvého účtu v cloudu.',
      finalTitle: 'První faktura může odejít dnes.', finalCopy: 'Vytvoř účet, doplň firemní údaje a VYSTAV tě provede zbytkem.',
      startAccount: 'Vytvořit účet', footer: 'Faktury, které máš po ruce.', contact: 'Kontakt'
    }
  };

  let locale = localStorage.getItem('cifra-locale') === 'CZ' ? 'CZ' : 'SK';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('v6-motion');

  function applyV6Locale() {
    locale = localStorage.getItem('cifra-locale') === 'CZ' ? 'CZ' : 'SK';
    document.documentElement.lang = locale === 'CZ' ? 'cs' : 'sk';
    root.querySelectorAll('[data-v6-copy]').forEach(node => {
      const value = copy[locale][node.dataset.v6Copy];
      if (value) node.textContent = value;
    });
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

  applyV6Locale();
})();
