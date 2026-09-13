(function () {
  const translations = {
    id: {
      // Navbar & Common
      brand_title: "Star Rail Hub",
      nav_main: "Main Portal",
      nav_back_main: "← Main Page",
      nav_feixiao: "Feixiao",
      nav_sparxie: "Sparxie",
      nav_castorice: "Castorice",
      nav_trace: "Trace",
      nav_light_cone: "Light Cone",
      nav_relics: "Relics",
      nav_main_stats: "Main Stats",
      nav_sub_stats: "Sub Stats",
      nav_eidolon: "Eidolon",
      nav_team: "Team",

      // Modal
      lang_modal_title: "Pilih Bahasa",
      search_btn_text: "Cari...",

      // Section Titles
      section_trace: "Trace Priority",
      section_light_cone: "Light Cone Recommendations",
      section_relics: "Relics & Planar Sets",
      section_main_stats: "Main Stats",
      section_sub_stats: "Sub Stats Priority",
      section_eidolon: "Eidolon Priority",
      section_team: "Team Recommendations",
      table_relic_part: "Bagian Relic",
      table_main_stat: "Main Stats",

      // Main Page
      main_badge: "Version 4.5 Strategy Guide",
      main_hero_title: "Honkai: Star Rail <span>Character Guides</span>",
      main_hero_desc: "Rekomendasi build terbaik, Relics, Light Cones, Main Stats, dan Team Comps untuk karakter banner Version 4.5.",
      
      feixiao_card_desc: "Main DPS FUA yang damage utamanya berfokus di Ultimate dengan mekanik hit count stack unik tanpa energy biasa.",
      feixiao_btn: "Buka Guide Feixiao",

      sparxie_card_desc: "Karakter serbaguna yang bisa dimainkan sebagai Main DPS maupun Sub DPS di tim SW level 999 sebagai Punchline Generator.",
      sparxie_btn: "Buka Guide Sparxie",

      castorice_card_desc: "Main DPS berfokus di mekanik \"Newbud\", berbasis pengurasan HP diri sendiri dan tim untuk menghasilkan burst besar.",
      castorice_btn: "Buka Guide Castorice",

      main_footer: "Created by FausT1nus • Version 4.5 Honkai: Star Rail Guide Collection",

      // Feixiao Page
      feixiao_title: "Guide Feixiao",
      feixiao_intro: "Feixiao adalah main DPS FUA, yang DMG utamanya berfokus di Ultimate, dan memiliki mekanik pengisian yang unik (bukan menggunakan energy biasa tetapi menggunakan <strong>hit count</strong>).",
      feixiao_relic_4set: "<strong>4 Set:</strong> Eagle of Twilight Line (Eagle Set)",
      feixiao_relic_2set: "<strong>2 Set Planar:</strong> Duran, Dynasty of Running Wolves",
      feixiao_substat_note: "<strong>Note:</strong> SPD tidak terlalu penting kecuali pada case spesifik tertentu.",
      feixiao_eidolon_note: "E2 nya game changer parah! LC nya bagus, cuma kalau bisa langsung E2, disarankan langsung E2 aja karena peningkatan damage-nya jauh lebih gede.",
      feixiao_team_note: "<strong>Note:</strong> Team Feixiao disarankan memakai karakter yang juga punya hit count banyak agar stack ultimate Feixiao cepat terisi.",
      feixiao_footer: "Created by FausT1nus • Feixiao Guide Version 4.4",

      // Sparxie Page
      sparxie_title: "Guide Sparxie",
      sparxie_intro: "Sparxie adalah unit fleksibel yang bisa bermain 2 role (Main DPS & Sub DPS) di tim Silver Wolf Level 999 sebagai generator Punchline.",
      sparxie_relic_4set: "<strong>4 Set:</strong> Magical Girl",
      sparxie_relic_2set: "<strong>2 Set Planar:</strong> Tengoku, Livestream, Cosmic City",
      sparxie_eidolon_note: "E2 nya Base kit YGY, apalagi buat tim SW999. Minimal E0S1, dibawah itu kurang &amp; malah bagusan EMC kadang.",
      sparxie_team_note: "<strong>Note:</strong> Disarankan pakai tim yang Elation-centric!",
      sparxie_footer: "Created by FausT1nus • Sparxie Guide Version 4.4",

      // Castorice Page
      castorice_title: "Guide Castorice",
      castorice_intro: "Castorice adalah Main DPS yang berfokus di mekanik bernama <strong>\"Newbud\"</strong>, berpusat pada mekanisme pengurangan HP diri sendiri dan juga tim.",
      castorice_lc4: "Off-Path LC dengan <strong>Base HP Tinggi</strong>",
      castorice_relic_4set: "<strong>4 Set:</strong> Poet, Deliverer",
      castorice_relic_2set: "<strong>2 Set Planar:</strong> Bone Recollection",
      castorice_eidolon_note: "E2 nya sangat OP! Tetapi sangat disarankan setelah E2, ambil juga LC nya karena penambahan damage-nya sangat drastis.",
      castorice_team_note: "<strong>Special Note:</strong> Hyacine adalah support paling ideal untuk Castorice karena memberikan healing &amp; buff berkesinambungan.",
      castorice_footer: "Created by FausT1nus • Castorice Guide Version 4.4"
    },
    en: {
      // Navbar & Common
      brand_title: "Star Rail Hub",
      nav_main: "Main Portal",
      nav_back_main: "← Main Page",
      nav_feixiao: "Feixiao",
      nav_sparxie: "Sparxie",
      nav_castorice: "Castorice",
      nav_trace: "Traces",
      nav_light_cone: "Light Cones",
      nav_relics: "Relics",
      nav_main_stats: "Main Stats",
      nav_sub_stats: "Sub Stats",
      nav_eidolon: "Eidolons",
      nav_team: "Team",

      // Modal
      lang_modal_title: "Select Language",
      search_btn_text: "Search...",

      // Section Titles
      section_trace: "Trace Priority",
      section_light_cone: "Light Cone Recommendations",
      section_relics: "Relics & Planar Sets",
      section_main_stats: "Main Stats",
      section_sub_stats: "Sub Stats Priority",
      section_eidolon: "Eidolon Priority",
      section_team: "Team Recommendations",
      table_relic_part: "Relic Piece",
      table_main_stat: "Main Stats",

      // Main Page
      main_badge: "Version 4.5 Strategy Guide",
      main_hero_title: "Honkai: Star Rail <span>Character Guides</span>",
      main_hero_desc: "Best build recommendations, Relics, Light Cones, Main Stats, and Team Comps for Version 4.5 banner characters.",
      
      feixiao_card_desc: "Main FUA DPS whose primary damage centers on Ultimate with a unique hit-count stack mechanic instead of standard energy.",
      feixiao_btn: "Open Feixiao Guide",

      sparxie_card_desc: "Versatile character playable as Main DPS or Sub DPS in SW Lv999 teams as a Punchline Generator.",
      sparxie_btn: "Open Sparxie Guide",

      castorice_card_desc: "Main DPS focusing on the \"Newbud\" mechanic, using self and team HP drain to deal massive burst damage.",
      castorice_btn: "Open Castorice Guide",

      main_footer: "Created by FausT1nus • Version 4.5 Honkai: Star Rail Guide Collection",

      // Feixiao Page
      feixiao_title: "Feixiao Guide",
      feixiao_intro: "Feixiao is a Follow-Up Attack (FUA) Main DPS whose primary DMG focuses on Ultimate, utilizing a unique stack mechanic (using <strong>hit counts</strong> instead of standard energy).",
      feixiao_relic_4set: "<strong>4-Set:</strong> Eagle of Twilight Line (Eagle Set)",
      feixiao_relic_2set: "<strong>2-Set Planar:</strong> Duran, Dynasty of Running Wolves",
      feixiao_substat_note: "<strong>Note:</strong> SPD is not critical unless in specific niche scenarios.",
      feixiao_eidolon_note: "Her E2 is a massive game changer! Her LC is great, but if you can aim straight for E2, it's strongly recommended as the damage boost is significantly higher.",
      feixiao_team_note: "<strong>Note:</strong> Feixiao teams are recommended to use characters with high hit counts to quickly charge Feixiao's ultimate stacks.",
      feixiao_footer: "Created by FausT1nus • Feixiao Guide Version 4.4",

      // Sparxie Page
      sparxie_title: "Sparxie Guide",
      sparxie_intro: "Sparxie is a flexible unit capable of playing 2 roles (Main DPS & Sub DPS) in Silver Wolf Level 999 teams as a Punchline generator.",
      sparxie_relic_4set: "<strong>4-Set:</strong> Magical Girl",
      sparxie_relic_2set: "<strong>2-Set Planar:</strong> Tengoku, Livestream, Cosmic City",
      sparxie_eidolon_note: "Her E2 is practically base kit, especially for SW999 teams. Minimum recommendation is E0S1; below that feels lacking and EMC might even be better sometimes.",
      sparxie_team_note: "<strong>Note:</strong> Recommended to use an Elation-centric team!",
      sparxie_footer: "Created by FausT1nus • Sparxie Guide Version 4.4",

      // Castorice Page
      castorice_title: "Castorice Guide",
      castorice_intro: "Castorice is a Main DPS centered around the <strong>\"Newbud\"</strong> mechanic, relying on self and team HP drain mechanisms.",
      castorice_lc4: "Off-Path LC with <strong>High Base HP</strong>",
      castorice_relic_4set: "<strong>4-Set:</strong> Poet, Deliverer",
      castorice_relic_2set: "<strong>2-Set Planar:</strong> Bone Recollection",
      castorice_eidolon_note: "Her E2 is extremely OP! However, after E2, getting her LC is strongly recommended as the damage increase is dramatic.",
      castorice_team_note: "<strong>Special Note:</strong> Hyacine is the most ideal support for Castorice due to continuous healing &amp; buffs.",
      castorice_footer: "Created by FausT1nus • Castorice Guide Version 4.4"
    }
  };

  function getSavedLanguage() {
    return localStorage.getItem('hsr_guide_lang') || 'id';
  }

  function setSavedLanguage(lang) {
    localStorage.setItem('hsr_guide_lang', lang);
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    const langData = translations[lang] || translations.id;

    // Elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (langData[key] !== undefined) {
        const span = el.querySelector('.btn-text');
        if (span) {
          span.textContent = langData[key];
        } else {
          const svg = el.querySelector('svg');
          if (svg) {
            const childNodes = Array.from(el.childNodes);
            const textNode = childNodes.find(n => n.nodeType === Node.TEXT_NODE);
            if (textNode) {
              textNode.nodeValue = langData[key];
            } else {
              el.insertBefore(document.createTextNode(langData[key]), svg);
            }
          } else {
            el.textContent = langData[key];
          }
        }
      }
    });

    // Elements with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (langData[key] !== undefined) {
        el.innerHTML = langData[key];
      }
    });

    // Update Pop-out trigger button label
    const triggerLabel = document.getElementById('langTriggerLabel');
    if (triggerLabel) {
      triggerLabel.innerHTML = lang === 'id' ? '🇮🇩 ID' : '🇺🇸 EN';
    }

    // Update checkmark state in Pop-out modal
    document.querySelectorAll('.lang-select-option').forEach((opt) => {
      const optLang = opt.getAttribute('data-lang');
      if (optLang === lang) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });
  }

  function createLanguagePopoutModal() {
    if (document.getElementById('langModalBackdrop')) return;

    const backdrop = document.createElement('div');
    backdrop.id = 'langModalBackdrop';
    backdrop.className = 'lang-modal-backdrop hidden';

    backdrop.innerHTML = `
      <div class="lang-modal-card">
        <div class="lang-modal-header">
          <div class="lang-modal-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span data-i18n="lang_modal_title">Pilih Bahasa</span>
          </div>
          <button id="langModalClose" class="lang-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="lang-modal-body">
          <button class="lang-select-option" data-lang="id">
            <span class="lang-flag">🇮🇩</span>
            <div class="lang-text-group">
              <span class="lang-primary-name">Bahasa Indonesia</span>
              <span class="lang-sub-name">Indonesian</span>
            </div>
            <span class="lang-check-icon">✓</span>
          </button>
          <button class="lang-select-option" data-lang="en">
            <span class="lang-flag">🇺🇸</span>
            <div class="lang-text-group">
              <span class="lang-primary-name">English</span>
              <span class="lang-sub-name">English</span>
            </div>
            <span class="lang-check-icon">✓</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    // Event handlers for closing modal
    const closeModal = () => {
      backdrop.classList.add('hidden');
    };

    document.getElementById('langModalClose').addEventListener('click', closeModal);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !backdrop.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Option selection handler
    backdrop.querySelectorAll('.lang-select-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setSavedLanguage(lang);
        applyTranslations(lang);
        closeModal();
      });
    });
  }

  function injectLanguageTrigger() {
    const navBar = document.querySelector('.nav-bar');
    if (!navBar || document.getElementById('langPopoutTrigger')) return;

    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'lang-switcher';

    const currentLang = getSavedLanguage();

    switcherContainer.innerHTML = `
      <button id="langPopoutTrigger" class="lang-popout-btn" aria-label="Select Language">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span id="langTriggerLabel">${currentLang === 'id' ? '🇮🇩 ID' : '🇺🇸 EN'}</span>
        <span class="lang-caret">▾</span>
      </button>
    `;

    navBar.appendChild(switcherContainer);

    const triggerBtn = document.getElementById('langPopoutTrigger');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        const backdrop = document.getElementById('langModalBackdrop');
        if (backdrop) {
          backdrop.classList.remove('hidden');
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    createLanguagePopoutModal();
    injectLanguageTrigger();
    applyTranslations(getSavedLanguage());
  });
})();
