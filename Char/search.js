(function () {
  // Character search database
  const characterDb = [
    {
      id: "feixiao",
      name: "Feixiao",
      element: "Wind",
      path: "The Hunt",
      role: "FUA DPS",
      tags: ["Wind", "The Hunt", "FUA DPS", "Ultimate", "Hit Count"],
      desc_id: "Main DPS FUA yang damage utamanya berfokus di Ultimate dengan mekanik hit count stack unik tanpa energy biasa.",
      desc_en: "Main FUA DPS whose primary damage centers on Ultimate with a unique hit-count stack mechanic instead of standard energy.",
      url_from_root: "Char/Feixiao.html",
      url_from_char: "Feixiao.html",
      image_from_root: "Gambar/Template Guide.png",
      image_from_char: "../Gambar/Template Guide.png",
      light_cones: ["I Venture Forth to Hunt", "Baptism of Pure Thought", "Swordplay"],
      relics: ["Eagle of Twilight Line", "Duran, Dynasty of Running Wolves"],
      team: ["Robin", "Aventurine", "Moze", "March 7th (Hunt)", "Topaz", "Ashveil"]
    },
    {
      id: "sparxie",
      name: "Sparxie",
      element: "Elation",
      path: "Elation",
      role: "Dual Role / Main Sub DPS",
      tags: ["Elation", "Dual Role", "SW Lv999", "Main DPS", "Sub DPS", "Punchline"],
      desc_id: "Karakter serbaguna yang bisa dimainkan sebagai Main DPS maupun Sub DPS di tim SW level 999 sebagai Punchline Generator.",
      desc_en: "Versatile character playable as Main DPS or Sub DPS in SW Lv999 teams as a Punchline Generator.",
      url_from_root: "Char/Sparxie.html",
      url_from_char: "Sparxie.html",
      image_from_root: "Gambar/a.Template Guide Cover.png",
      image_from_char: "../Gambar/a.Template Guide Cover.png",
      light_cones: ["Dazzled by a Flowery World", "Today's Good Luck", "Mushy Shroomy's Adventures"],
      relics: ["Magical Girl", "Tengoku", "Livestream", "Cosmic City"],
      team: ["Sparkle", "Yao Guang", "Silver Wolf L 999", "EMC", "Huo Huo"]
    },
    {
      id: "castorice",
      name: "Castorice",
      element: "Quantum",
      path: "Newbud",
      role: "HP Drain DPS",
      tags: ["Quantum", "Newbud", "HP Drain", "Memosprite", "Burst"],
      desc_id: "Main DPS berfokus di mekanik \"Newbud\", berbasis pengurasan HP diri sendiri dan tim untuk menghasilkan burst besar.",
      desc_en: "Main DPS focusing on the \"Newbud\" mechanic, using self and team HP drain to deal massive burst damage.",
      url_from_root: "Char/Castorice.html",
      url_from_char: "Castorice.html",
      image_from_root: "Gambar/cas.png",
      image_from_char: "../Gambar/cas.png",
      light_cones: ["Make Farewells More Beautiful", "The Flower Remembers", "Sweat Now, Cry Less"],
      relics: ["Poet, Deliverer", "Bone Recollection"],
      team: ["Hyacine", "Evernight", "Cyrene", "Robin Sumerto", "RMC", "Tribbie", "Mortenax Blade"]
    }
  ];

  function isRootPage() {
    return !window.location.pathname.includes('/Char/');
  }

  function getCurrentLang() {
    return localStorage.getItem('hsr_guide_lang') || 'id';
  }

  // Create Global Search Modal
  function createSearchModal() {
    if (document.getElementById('searchModalBackdrop')) return;

    const backdrop = document.createElement('div');
    backdrop.id = 'searchModalBackdrop';
    backdrop.className = 'search-modal-backdrop hidden';

    const lang = getCurrentLang();
    const placeholderText = lang === 'id' ? 'Cari karakter, build, relic, team...' : 'Search character, build, relic, team...';
    const emptyText = lang === 'id' ? 'Karakter tidak ditemukan' : 'No characters found';

    backdrop.innerHTML = `
      <div class="search-modal-card">
        <div class="search-input-header">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="globalSearchInput" placeholder="${placeholderText}" autocomplete="off" />
          <button id="searchModalCloseBtn" class="search-close-btn">&times;</button>
        </div>
        <div class="search-tags-row">
          <button class="search-tag-chip active" data-filter="all">All</button>
          <button class="search-tag-chip" data-filter="wind">Wind</button>
          <button class="search-tag-chip" data-filter="quantum">Quantum</button>
          <button class="search-tag-chip" data-filter="elation">Elation</button>
        </div>
        <div id="searchResultsList" class="search-results-list">
          <!-- Dynamic Results -->
        </div>
        <div class="search-modal-footer">
          <span><kbd>ESC</kbd> Close</span>
          <span><kbd>↵</kbd> Select</span>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const searchInput = document.getElementById('globalSearchInput');
    const resultsList = document.getElementById('searchResultsList');
    let activeFilter = 'all';

    function renderSearchResults(query = '') {
      const isRoot = isRootPage();
      const currentLang = getCurrentLang();
      const cleanQuery = query.trim().toLowerCase();

      const filtered = characterDb.filter((char) => {
        // Tag chip filter check
        if (activeFilter !== 'all' && char.element.toLowerCase() !== activeFilter) {
          return false;
        }

        if (!cleanQuery) return true;

        const matchName = char.name.toLowerCase().includes(cleanQuery);
        const matchElement = char.element.toLowerCase().includes(cleanQuery);
        const matchPath = char.path.toLowerCase().includes(cleanQuery);
        const matchRole = char.role.toLowerCase().includes(cleanQuery);
        const matchTags = char.tags.some(t => t.toLowerCase().includes(cleanQuery));
        const matchDesc = (currentLang === 'id' ? char.desc_id : char.desc_en).toLowerCase().includes(cleanQuery);
        const matchLc = char.light_cones.some(lc => lc.toLowerCase().includes(cleanQuery));
        const matchTeam = char.team.some(tm => tm.toLowerCase().includes(cleanQuery));

        return matchName || matchElement || matchPath || matchRole || matchTags || matchDesc || matchLc || matchTeam;
      });

      if (filtered.length === 0) {
        resultsList.innerHTML = `
          <div class="search-empty-state">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <p>${currentLang === 'id' ? 'Karakter tidak ditemukan' : 'No characters found'}</p>
          </div>
        `;
        return;
      }

      resultsList.innerHTML = filtered
        .map((char) => {
          const url = isRoot ? char.url_from_root : char.url_from_char;
          const img = isRoot ? char.image_from_root : char.image_from_char;
          const desc = currentLang === 'id' ? char.desc_id : char.desc_en;

          return `
            <a href="${url}" class="search-result-item">
              <div class="search-item-img-wrap">
                <img src="${img}" alt="${char.name}">
              </div>
              <div class="search-item-info">
                <div class="search-item-header">
                  <h4 class="search-item-title">${char.name}</h4>
                  <div class="search-item-tags">
                    <span class="tag ${char.element.toLowerCase()}">${char.element}</span>
                    <span class="tag">${char.path}</span>
                  </div>
                </div>
                <p class="search-item-desc">${desc}</p>
              </div>
              <div class="search-item-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          `;
        })
        .join('');
    }

    // Modal open/close handlers
    function openModal() {
      backdrop.classList.remove('hidden');
      const lang = getCurrentLang();
      searchInput.placeholder = lang === 'id' ? 'Cari karakter, build, relic, team...' : 'Search character, build, relic, team...';
      searchInput.value = '';
      renderSearchResults('');
      setTimeout(() => searchInput.focus(), 50);
    }

    function closeModal() {
      backdrop.classList.add('hidden');
    }

    document.getElementById('searchModalCloseBtn').addEventListener('click', closeModal);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (backdrop.classList.contains('hidden')) {
          openModal();
        } else {
          closeModal();
        }
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openModal();
      } else if (e.key === 'Escape' && !backdrop.classList.contains('hidden')) {
        closeModal();
      }
    });

    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });

    // Tag chips filtering inside search modal
    backdrop.querySelectorAll('.search-tag-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        backdrop.querySelectorAll('.search-tag-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.getAttribute('data-filter');
        renderSearchResults(searchInput.value);
      });
    });

    // Expose open function globally
    window.openSearchModal = openModal;
  }

  // Inject search button in top navbar
  function injectNavbarSearchButton() {
    const navBar = document.querySelector('.nav-bar');
    if (!navBar || document.getElementById('navSearchBtn')) return;

    const btn = document.createElement('button');
    btn.id = 'navSearchBtn';
    btn.className = 'nav-search-btn';
    btn.setAttribute('aria-label', 'Search');

    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <span class="nav-search-placeholder" data-i18n="search_btn_text">Cari...</span>
      <kbd class="nav-search-kbd">Ctrl K</kbd>
    `;

    // Insert right before language switcher or at the end
    const langSwitcher = navBar.querySelector('.lang-switcher');
    if (langSwitcher) {
      navBar.insertBefore(btn, langSwitcher);
    } else {
      navBar.appendChild(btn);
    }

    btn.addEventListener('click', () => {
      if (window.openSearchModal) {
        window.openSearchModal();
      }
    });
  }

  // Live filter feature for Main Showcase Grid (index.html & MainPage.html)
  function setupMainGridFilter() {
    const cardGrid = document.querySelector('.card-grid');
    if (!cardGrid) return; // Only run on main grid page

    // Create live search input bar above card grid if hero banner exists
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner && !document.getElementById('gridSearchContainer')) {
      const searchContainer = document.createElement('div');
      searchContainer.id = 'gridSearchContainer';
      searchContainer.className = 'grid-search-container';

      const lang = getCurrentLang();

      searchContainer.innerHTML = `
        <div class="grid-search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="gridSearchInput" placeholder="${lang === 'id' ? 'Cari nama karakter, elemen, atau role...' : 'Filter by character name, element, or role...'}" autocomplete="off" />
          <button id="gridSearchClear" class="grid-search-clear hidden">&times;</button>
        </div>
        <div class="grid-filter-chips">
          <button class="filter-chip active" data-filter="all">All</button>
          <button class="filter-chip" data-filter="wind">Wind</button>
          <button class="filter-chip" data-filter="elation">Elation</button>
          <button class="filter-chip" data-filter="quantum">Quantum</button>
        </div>
      `;

      heroBanner.after(searchContainer);

      const input = document.getElementById('gridSearchInput');
      const clearBtn = document.getElementById('gridSearchClear');
      const chips = searchContainer.querySelectorAll('.filter-chip');
      let currentFilter = 'all';

      function filterCards() {
        const query = input.value.trim().toLowerCase();
        const cards = cardGrid.querySelectorAll('.char-card');
        let visibleCount = 0;

        cards.forEach((card) => {
          const cardText = card.textContent.toLowerCase();
          const tagElements = card.querySelectorAll('.tag');
          let cardElement = 'all';
          tagElements.forEach(t => {
            if (t.classList.contains('wind')) cardElement = 'wind';
            if (t.classList.contains('elation')) cardElement = 'elation';
            if (t.classList.contains('quantum')) cardElement = 'quantum';
          });

          const matchesQuery = !query || cardText.includes(query);
          const matchesChip = currentFilter === 'all' || cardElement === currentFilter;

          if (matchesQuery && matchesChip) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Toggle clear button
        if (query) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
        }

        // Handle empty result message
        let noResultBox = document.getElementById('gridNoResults');
        if (visibleCount === 0) {
          if (!noResultBox) {
            noResultBox = document.createElement('div');
            noResultBox.id = 'gridNoResults';
            noResultBox.className = 'grid-no-results';
            cardGrid.after(noResultBox);
          }
          const curLang = getCurrentLang();
          noResultBox.innerHTML = `
            <div class="search-empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <h3>${curLang === 'id' ? 'Karakter tidak ditemukan' : 'No character found'}</h3>
              <p>${curLang === 'id' ? 'Coba gunakan kata kunci pencarian atau filter yang lain.' : 'Try using a different search keyword or filter.'}</p>
            </div>
          `;
          noResultBox.style.display = 'block';
        } else if (noResultBox) {
          noResultBox.style.display = 'none';
        }
      }

      input.addEventListener('input', filterCards);

      clearBtn.addEventListener('click', () => {
        input.value = '';
        filterCards();
        input.focus();
      });

      chips.forEach((chip) => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          currentFilter = chip.getAttribute('data-filter');
          filterCards();
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    createSearchModal();
    injectNavbarSearchButton();
    setupMainGridFilter();
  });
})();
