(function() {
  const deckRoot = document.getElementById('deckRoot');
  const navRoot = document.getElementById('deckNav');
  const toolbarRoot = document.getElementById('deckToolbar');
  const params = new URLSearchParams(window.location.search);
  const editMode = params.has('edit');

  const deckState = {
    meta: {},
    slides: []
  };

  const layoutRenderers = {
    hero: renderHeroSlide,
    content: renderContentSlide,
    stats: renderStatsSlide,
    agenda: renderAgendaSlide
  };

  fetch('slides.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to load deck content.');
      }
      return response.json();
    })
    .then(data => {
      deckState.meta = data.meta || {};
      deckState.slides = Array.isArray(data.slides) ? data.slides : [];
      ensureSlideIds();
      document.body.classList.add('deck-mode');
      renderDeck();
      setupNavigation();
      if (editMode) {
        enableEditMode();
      }
    })
    .catch(error => {
      console.error(error);
      deckRoot.innerHTML = `<section class="deck-slide"><h1 class="deck-title">Deck content missing</h1><p>Please ensure <code>deck/slides.json</code> is available.</p></section>`;
    });

  function ensureSlideIds() {
    deckState.slides.forEach((slide, index) => {
      if (!slide.id) {
        slide.id = `${slide.layout || 'slide'}-${index + 1}`;
      }
    });
  }

  function renderDeck() {
    deckRoot.innerHTML = '';
    const fragment = document.createDocumentFragment();

    deckState.slides.forEach((slide, index) => {
      const renderer = layoutRenderers[slide.layout] || renderContentSlide;
      const slideEl = renderer(slide, index);
      if (slide.theme) {
        slideEl.dataset.theme = slide.theme;
      }
      slideEl.dataset.slideIndex = index;
      slideEl.dataset.slideId = slide.id;
      fragment.appendChild(slideEl);
    });

    if (!deckState.slides.length) {
      fragment.appendChild(renderPlaceholderSlide());
    }

    deckRoot.appendChild(fragment);
  }

  function renderPlaceholderSlide() {
    const section = document.createElement('section');
    section.className = 'deck-slide';
    const title = document.createElement('h1');
    title.className = 'deck-title';
    title.textContent = 'Let\'s craft your first slide';
    const subtitle = document.createElement('p');
    subtitle.className = 'deck-subtitle';
    subtitle.textContent = 'Use ?edit=1 in the URL to enter edit mode and add your story.';
    section.appendChild(title);
    section.appendChild(subtitle);
    return section;
  }

  function renderHeroSlide(slide, index) {
    const section = document.createElement('section');
    section.className = 'deck-slide deck-slide--hero';

    const heroPanel = document.createElement('div');
    heroPanel.className = 'hero-panel';

    if (slide.background) {
      if (slide.background.type === 'video') {
        const video = document.createElement('video');
        video.className = 'hero-panel__image';
        video.autoplay = true;
        video.muted = true;
        video.loop = slide.background.loop !== false;
        video.playsInline = true;
        if (slide.background.poster) {
          video.poster = slide.background.poster;
        }

        const source = document.createElement('source');
        source.src = slide.background.src;
        source.type = slide.background.mimeType || 'video/mp4';
        video.appendChild(source);

        if (slide.background.fallback) {
          const fallbackImg = document.createElement('img');
          fallbackImg.src = slide.background.fallback;
          fallbackImg.alt = slide.background.alt || '';
          video.appendChild(fallbackImg);
        }

        heroPanel.appendChild(video);
      } else if (slide.background.type === 'image') {
        const img = document.createElement('img');
        img.className = 'hero-panel__image';
        img.src = slide.background.src;
        img.alt = slide.background.alt || '';
        heroPanel.appendChild(img);
      }
    }

    const overlay = document.createElement('div');
    overlay.className = 'hero-panel__overlay';
    heroPanel.appendChild(overlay);

    const content = document.createElement('div');
    content.className = 'hero-panel__content';

    const tag = document.createElement('div');
    tag.className = 'hero-panel__tag deck-editable';
    tag.dataset.field = 'badge';
    tag.textContent = slide.badge || 'Video Experience';
    content.appendChild(tag);

    const title = document.createElement('h3');
    title.className = 'hero-panel__title deck-editable';
    title.dataset.field = 'title';
    title.textContent = slide.title || 'Immersive Video Integration';
    content.appendChild(title);

    const text = document.createElement('p');
    text.className = 'hero-panel__text deck-editable';
    text.dataset.field = 'subtitle';
    text.textContent = slide.subtitle || 'Revolutionary video experiences with glass morphism treatments that create depth and engagement.';
    content.appendChild(text);

    heroPanel.appendChild(content);
    section.appendChild(heroPanel);

    appendNotes(section, slide);
    return section;
  }

  function renderContentSlide(slide) {
    const section = document.createElement('section');
    section.className = 'deck-slide deck-slide--content';

    const canvas = document.createElement('div');
    canvas.className = 'deck-slide__canvas deck-slide__canvas--content';
    section.appendChild(canvas);

    if (slide.badge) {
      const badge = document.createElement('span');
      badge.className = 'deck-badge deck-editable';
      badge.dataset.field = 'badge';
      badge.textContent = slide.badge;
      canvas.appendChild(badge);
    }

    if (slide.title) {
      const title = document.createElement('h2');
      title.className = 'deck-title deck-editable';
      title.dataset.field = 'title';
      title.textContent = slide.title;
      canvas.appendChild(title);
    }

    if (slide.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.className = 'deck-subtitle deck-editable';
      subtitle.dataset.field = 'subtitle';
      subtitle.textContent = slide.subtitle;
      canvas.appendChild(subtitle);
    }

    if (Array.isArray(slide.points) && slide.points.length) {
      const list = document.createElement('ul');
      list.className = 'deck-list';
      slide.points.forEach((point, pointIndex) => {
        const item = document.createElement('li');
        item.className = 'deck-editable';
        item.dataset.field = `points.${pointIndex}`;
        item.textContent = point;
        list.appendChild(item);
      });
      canvas.appendChild(list);
    }

    if (slide.media && slide.media.src) {
      const media = document.createElement('div');
      media.className = 'deck-media';
      if (slide.media.type === 'video') {
        const video = document.createElement('video');
        video.src = slide.media.src;
        video.loop = true;
        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;
        media.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = slide.media.src;
        img.alt = slide.media.alt || '';
        media.appendChild(img);
      }
      canvas.appendChild(media);
    }

    appendNotes(section, slide);
    return section;
  }

  function renderStatsSlide(slide) {
    const section = document.createElement('section');
    section.className = 'deck-slide deck-slide--stats';

    const canvas = document.createElement('div');
    canvas.className = 'deck-slide__canvas deck-slide__canvas--stats';
    section.appendChild(canvas);

    if (slide.title) {
      const title = document.createElement('h2');
      title.className = 'deck-title deck-editable';
      title.dataset.field = 'title';
      title.textContent = slide.title;
      canvas.appendChild(title);
    }

    if (slide.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.className = 'deck-subtitle deck-editable';
      subtitle.dataset.field = 'subtitle';
      subtitle.textContent = slide.subtitle;
      canvas.appendChild(subtitle);
    }

    if (Array.isArray(slide.stats) && slide.stats.length) {
      const grid = document.createElement('div');
      grid.className = 'deck-grid';
      grid.dataset.columns = slide.columns || Math.min(slide.stats.length, 3);
      slide.stats.forEach((stat, statIndex) => {
        const panel = document.createElement('div');
        panel.className = 'deck-panel';
        const value = document.createElement('h3');
        value.className = 'deck-title deck-editable';
        value.dataset.field = `stats.${statIndex}.value`;
        value.style.fontSize = 'clamp(2rem, 5vw, 3.5rem)';
        value.textContent = stat.value || '0%';
        const label = document.createElement('p');
        label.className = 'deck-subtitle deck-editable';
        label.dataset.field = `stats.${statIndex}.label`;
        label.style.fontSize = '1rem';
        label.textContent = stat.label || 'Add context';
        panel.appendChild(value);
        panel.appendChild(label);
        if (stat.caption) {
          const caption = document.createElement('p');
          caption.className = 'text-body-small deck-editable';
          caption.dataset.field = `stats.${statIndex}.caption`;
          caption.textContent = stat.caption;
          panel.appendChild(caption);
        }
        grid.appendChild(panel);
      });
      canvas.appendChild(grid);
    }

    appendNotes(section, slide);
    return section;
  }

  function renderAgendaSlide(slide) {
    const section = document.createElement('section');
    section.className = 'deck-slide deck-slide--agenda';

    const canvas = document.createElement('div');
    canvas.className = 'deck-slide__canvas deck-slide__canvas--agenda';
    section.appendChild(canvas);

    if (slide.badge) {
      const badge = document.createElement('span');
      badge.className = 'deck-badge deck-editable';
      badge.dataset.field = 'badge';
      badge.textContent = slide.badge;
      canvas.appendChild(badge);
    }

    if (slide.title) {
      const title = document.createElement('h2');
      title.className = 'deck-title deck-editable';
      title.dataset.field = 'title';
      title.textContent = slide.title;
      canvas.appendChild(title);
    }

    if (slide.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.className = 'deck-subtitle deck-editable';
      subtitle.dataset.field = 'subtitle';
      subtitle.textContent = slide.subtitle;
      canvas.appendChild(subtitle);
    }

    if (Array.isArray(slide.items) && slide.items.length) {
      const list = document.createElement('div');
      list.className = 'deck-agenda-list';
      list.dataset.columns = slide.columns || (slide.items.length > 6 ? 2 : 1);
      slide.items.forEach((item, itemIndex) => {
        const agendaItem = document.createElement('div');
        agendaItem.className = 'deck-agenda-item';

        const number = document.createElement('span');
        number.className = 'deck-agenda-number';
        number.textContent = String(itemIndex + 1).padStart(2, '0');
        agendaItem.appendChild(number);

        const labelWrap = document.createElement('div');
        labelWrap.className = 'deck-agenda-label';

    const heading = document.createElement('strong');
    heading.className = 'deck-editable';
    heading.dataset.field = `items.${itemIndex}.title`;
    heading.textContent = item.title || `Slide ${itemIndex + 1}`;
    labelWrap.appendChild(heading);

    const caption = document.createElement('span');
    caption.className = 'deck-editable';
    caption.dataset.field = `items.${itemIndex}.description`;
    caption.textContent = item.description || 'Click to add details';
    labelWrap.appendChild(caption);

        agendaItem.appendChild(labelWrap);
        list.appendChild(agendaItem);
      });
      canvas.appendChild(list);
    }

    appendNotes(section, slide);
    return section;
  }

  function appendNotes(section, slide) {
    if (!slide.notes) return;
    const notes = document.createElement('div');
    notes.className = 'deck-notes deck-slide__notes deck-editable';
    notes.dataset.field = 'notes';
    notes.innerHTML = `<strong>Presenter notes</strong><br>${slide.notes}`;
    section.appendChild(notes);
  }

  function setupNavigation() {
    navRoot.innerHTML = '';
    const fragment = document.createDocumentFragment();
    deckState.slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'deck-dot';
      dot.dataset.index = index;
      dot.title = slide.title || `Slide ${index + 1}`;
      dot.addEventListener('click', () => scrollToSlide(index));
      fragment.appendChild(dot);
    });
    navRoot.appendChild(fragment);
    highlightActiveDot(0);

    document.addEventListener('keydown', handleKeyNavigation);
    deckRoot.addEventListener('scroll', throttle(handleScrollUpdate, 150));
  }

  function handleKeyNavigation(event) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'PageDown' && event.key !== 'PageUp') {
      return;
    }
    event.preventDefault();
    const current = getCurrentSlideIndex();
    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      scrollToSlide(Math.min(current + 1, deckState.slides.length - 1));
    } else {
      scrollToSlide(Math.max(current - 1, 0));
    }
  }

  function handleScrollUpdate() {
    const index = getCurrentSlideIndex();
    highlightActiveDot(index);
  }

  function scrollToSlide(index) {
    const target = deckRoot.querySelector(`.deck-slide[data-slide-index="${index}"]`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      highlightActiveDot(index);
    }
  }

  function getCurrentSlideIndex() {
    const slides = Array.from(deckRoot.querySelectorAll('.deck-slide'));
    const viewportCenter = deckRoot.scrollTop + deckRoot.clientHeight / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.top + deckRoot.scrollTop + rect.height / 2;
      const distance = Math.abs(slideCenter - viewportCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }

  function highlightActiveDot(index) {
    const dots = navRoot.querySelectorAll('.deck-dot');
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  }

  function enableEditMode() {
    document.body.classList.add('deck-editing');

    const editableNodes = deckRoot.querySelectorAll('.deck-editable');
    editableNodes.forEach(node => {
      node.setAttribute('contenteditable', 'true');
      node.addEventListener('blur', handleInlineEdit);
      node.addEventListener('input', handleInlineInput);
    });

    renderToolbar();
  }

  function handleInlineEdit(event) {
    const fieldPath = event.currentTarget.dataset.field;
    if (!fieldPath) return;
    updateSlideField(event.currentTarget.closest('.deck-slide'), fieldPath, event.currentTarget.textContent.trim());
  }

  function handleInlineInput(event) {
    if (event.currentTarget.dataset.field === 'notes') {
      const text = event.currentTarget.innerText.replace('Presenter notes', '').trim();
      updateSlideField(event.currentTarget.closest('.deck-slide'), 'notes', text);
    }
  }

  function updateSlideField(sectionEl, fieldPath, value) {
    const slideIndex = Number(sectionEl.dataset.slideIndex);
    const slide = deckState.slides[slideIndex];
    if (!slide) return;

    if (fieldPath === 'notes') {
      slide.notes = value;
      return;
    }

    const pathSegments = fieldPath.split('.');
    let target = slide;
    for (let i = 0; i < pathSegments.length - 1; i += 1) {
      const key = pathSegments[i];
      if (Array.isArray(target)) {
        const numericKey = Number(key);
        if (!Number.isNaN(numericKey)) {
          target = target[numericKey];
        }
      } else if (target[key] == null) {
        target[key] = {};
        target = target[key];
      } else {
        target = target[key];
      }
    }

    const lastKey = pathSegments[pathSegments.length - 1];
    if (Array.isArray(target)) {
      const numericKey = Number(lastKey);
      if (!Number.isNaN(numericKey)) {
        target[numericKey] = value;
      }
    } else {
      target[lastKey] = value;
    }
  }

  function renderToolbar() {
    toolbarRoot.innerHTML = '';

    const downloadButton = document.createElement('button');
    downloadButton.type = 'button';
    downloadButton.textContent = 'Download copy JSON';
    downloadButton.addEventListener('click', downloadDeckJson);

    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.textContent = 'Reset changes';
    resetButton.addEventListener('click', () => {
      window.location.reload();
    });

    toolbarRoot.appendChild(downloadButton);
    toolbarRoot.appendChild(resetButton);
  }

  function downloadDeckJson() {
    const blob = new Blob([JSON.stringify(deckState, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${deckState.meta.title ? deckState.meta.title.toLowerCase().replace(/\s+/g, '-') : 'mamori-deck'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function throttle(fn, wait) {
    let lastTime = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastTime >= wait) {
        lastTime = now;
        fn.apply(this, args);
      }
    };
  }
})();
