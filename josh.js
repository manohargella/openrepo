const STORAGE_KEY = 'link-vault-links';

const titleInput = document.getElementById('titleInput');
const linkInput = document.getElementById('linkInput');
const addBtn = document.getElementById('addBtn');
const linksContainer = document.getElementById('linksContainer');
const emptyState = document.getElementById('emptyState');
const linkCount = document.getElementById('linkCount');

// Load links from localStorage
function getLinks() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// Save links to localStorage
function saveLinks(links) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

// Extract YouTube video ID from various URL formats
function getYouTubeVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

// Get thumbnail URL (YouTube or generic favicon)
function getThumbnail(url) {
  const ytId = getYouTubeVideoId(url);
  if (ytId) {
    return `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`;
  }
  // Generic favicon for non-YouTube
  try {
    const u = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=128`;
  } catch {
    return null;
  }
}

// Create a short title from URL
function getLinkTitle(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    const path = u.pathname === '/' ? '' : u.pathname.slice(0, 40);
    return path ? `${host}${path}${path.length >= 40 ? '…' : ''}` : host;
  } catch {
    return url.slice(0, 60) + (url.length > 60 ? '…' : '');
  }
}

// Add a new link
function addLink(urlStr, customTitle) {
  const trimmed = urlStr.trim();
  if (!trimmed) return;

  let url = trimmed;
  if (!url.match(/^https?:\/\//i)) {
    url = 'https://' + url;
  }

  try {
    new URL(url);
  } catch {
    return; // Invalid URL
  }

  const links = getLinks();
  const link = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    url,
    title: (customTitle && customTitle.trim()) || getLinkTitle(url),
    addedAt: Date.now(),
  };
  links.unshift(link);
  saveLinks(links);
  renderLinks();
  linkInput.value = '';
  titleInput.value = '';
  linkInput.focus();
}

// Remove a link
function removeLink(id) {
  const links = getLinks().filter((l) => l.id !== id);
  saveLinks(links);
  renderLinks();
}

// Render all links
function renderLinks() {
  const links = getLinks();

  linkCount.textContent = `${links.length} link${links.length === 1 ? '' : 's'}`;

  if (links.length === 0) {
    emptyState.classList.remove('hidden');
    linksContainer.innerHTML = '';
    return;
  }

  emptyState.classList.add('hidden');

  linksContainer.innerHTML = links
    .map(
      (link) => {
        const thumb = getThumbnail(link.url);
        const thumbHtml = thumb
          ? `<img src="${thumb}" alt="" class="link-thumb" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">`
          : '';
        return `
      <div class="link-card" data-id="${link.id}">
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.url}">
          ${thumbHtml}
          <div class="link-thumb-placeholder" style="${thumb ? 'display:none' : ''}">🔗</div>
          <div class="link-info">
            <p class="link-title">${link.title || 'Untitled'}</p>
            <p class="link-url">${link.url}</p>
          </div>
        </a>
        <div class="link-actions">
          <button class="btn-open" aria-label="Open" title="Open in new tab" data-url="${link.url}">↗</button>
          <button class="btn-delete" aria-label="Delete" title="Remove link" data-id="${link.id}">×</button>
        </div>
      </div>
    `;
      }
    )
    .join('');

  // Event listeners for buttons
  linksContainer.querySelectorAll('.btn-delete').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      removeLink(btn.dataset.id);
    });
  });

  linksContainer.querySelectorAll('.btn-open').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(btn.dataset.url, '_blank');
    });
  });
}

// Initial render
renderLinks();

// Add button click
addBtn.addEventListener('click', () => addLink(linkInput.value, titleInput.value));

// Paste / Enter support
linkInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    addLink(linkInput.value, titleInput.value);
  }
});
