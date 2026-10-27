const languageButton = document.getElementById("langToggle");
const translatedElements = Array.from(document.querySelectorAll("[data-id][data-en]"));
const indonesianCopy = new Map(translatedElements.map((element) => [element, element.textContent.trim()]));
const currentPage = document.body.dataset.page;
let posts = [];
const pageNumbers = { home: 1, tutorial: 1, artikel: 1, tags: 1 };
let currentSearch = "";
const pageSize = 10;
const selectedTags = new Set();
let tagHashInitialized = false;

document.getElementById("year").textContent = new Date().getFullYear();

function applyLanguage(language) {
  document.documentElement.dataset.lang = language;
  document.documentElement.lang = language;
  translatedElements.forEach((element) => {
    element.textContent = language === "en" ? element.getAttribute("data-en") : indonesianCopy.get(element);
  });
  if (languageButton) {
    languageButton.textContent = language === "id" ? "EN" : "ID";
    languageButton.setAttribute("aria-label", language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia");
  }
  document.querySelectorAll("[data-placeholder-id]").forEach((input) => {
    input.placeholder = language === "en" ? input.dataset.placeholderEn : input.dataset.placeholderId;
  });
  if (currentPage === "home") {
    document.title = language === "id" ? "TukangPLC — Tutorial dan artikel otomasi" : "TukangPLC — Automation tutorials and articles";
  }
  try { localStorage.setItem("tukangplc-language", language); } catch (_) {}
  renderPage();
}

let initialLanguage = "id";
try { initialLanguage = localStorage.getItem("tukangplc-language") || "id"; } catch (_) {}
applyLanguage(initialLanguage);
languageButton?.addEventListener("click", () => applyLanguage(document.documentElement.lang === "id" ? "en" : "id"));

function slugify(value) {
  return String(value).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function postsFor(container) {
  const category = container.dataset.postList || "all";
  return posts.filter((post) => category === "all" || (Array.isArray(post.categories) && post.categories.includes(category)));
}
function createPostElement(post) {
  const article = document.createElement("article");
  article.className = "post-entry";
  const heading = document.createElement("h3");
  const title = document.createElement("a");
  title.href = post.url;
  title.textContent = post.title;
  heading.append(title);
  const metadata = document.createElement("p");
  metadata.className = "post-meta";
  const date = post.date ? new Intl.DateTimeFormat(document.documentElement.lang === "en" ? "en" : "id", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${post.date}T00:00:00`)) : "";
  const minutes = Math.max(1, Number(post.readingTime) || 1);
  const readTime = document.documentElement.lang === "en" ? `${minutes} min read` : `${minutes} menit baca`;
  const isTutorial = Array.isArray(post.categories) && post.categories.includes("tutorial");
  const kind = isTutorial ? "Tutorial" : (document.documentElement.lang === "en" ? "Article" : "Artikel");
  metadata.textContent = [kind, date, readTime].filter(Boolean).join(" · ");
  article.append(heading, metadata);
  if (post.description) {
    const description = document.createElement("p");
    description.className = "post-description";
    description.textContent = post.description;
    article.append(description);
  }
  if (Array.isArray(post.tags) && post.tags.length) {
    const taxonomy = document.createElement("div");
    taxonomy.className = "post-taxonomy";
    post.tags.forEach((tag) => {
      const link = document.createElement("a");
      link.href = `tags.html#tag-${slugify(tag)}`;
      link.textContent = tag;
      taxonomy.append(link);
    });
    article.append(taxonomy);
  }
  return article;
}
function renderPagination(nav, totalPages, pageNumber, selectPage) {
  if (!nav) return;
  nav.replaceChildren();
  if (totalPages < 2) return;
  const addButton = (label, page, current = false, disabled = false) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = disabled;
    if (current) button.setAttribute("aria-current", "page");
    button.addEventListener("click", () => selectPage(page));
    nav.append(button);
  };
  addButton(document.documentElement.lang === "en" ? "Previous" : "Sebelumnya", Math.max(1, pageNumber - 1), false, pageNumber === 1);
  for (let page = 1; page <= totalPages; page++) addButton(String(page), page, page === pageNumber);
  addButton(document.documentElement.lang === "en" ? "Next" : "Selanjutnya", Math.min(totalPages, pageNumber + 1), false, pageNumber === totalPages);
}
function renderHomeList() {
  const list = document.getElementById("postList");
  if (!list) return;
  const query = currentSearch.trim().toLocaleLowerCase();
  const filtered = posts.filter((post) => !query || [post.title, post.description, ...(post.tags || [])].join(" ").toLocaleLowerCase().includes(query));
  list.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = query
      ? (document.documentElement.lang === "en" ? "No matching posts." : "Tidak ada tulisan yang cocok.")
      : (document.documentElement.lang === "en" ? "No posts have been published yet." : "Belum ada tulisan yang dipublikasikan.");
    list.append(empty);
    renderPagination(document.getElementById("pagination"), 0, 1, () => {});
    return;
  }
  const totalPages = Math.ceil(filtered.length / pageSize);
  pageNumbers.home = Math.min(pageNumbers.home, totalPages);
  filtered.slice((pageNumbers.home - 1) * pageSize, pageNumbers.home * pageSize).forEach((post) => list.append(createPostElement(post)));
  renderPagination(document.getElementById("pagination"), totalPages, pageNumbers.home, (page) => { pageNumbers.home = page; renderPage(); });
}
function renderCategoryLists() {
  document.querySelectorAll("[data-post-list]").forEach((container) => {
    if (container.id === "postList") return;
    container.replaceChildren();
    const category = container.dataset.postList;
    const pagination = document.querySelector(`[data-pagination="${category}"]`);
    const selected = postsFor(container);
    if (!selected.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = document.documentElement.lang === "en" ? "No posts have been published yet." : "Belum ada tulisan yang dipublikasikan.";
      container.append(empty);
      renderPagination(pagination, 0, 1, () => {});
      return;
    }
    const totalPages = Math.ceil(selected.length / pageSize);
    pageNumbers[category] = Math.min(pageNumbers[category] || 1, totalPages);
    selected.slice((pageNumbers[category] - 1) * pageSize, pageNumbers[category] * pageSize).forEach((post) => container.append(createPostElement(post)));
    renderPagination(pagination, totalPages, pageNumbers[category], (page) => { pageNumbers[category] = page; renderPage(); });
  });
}
function renderTags() {
  const index = document.getElementById("tagIndex");
  const results = document.getElementById("tagResults");
  const resultCount = document.getElementById("tagResultCount");
  const clearButton = document.getElementById("clearTagFilters");
  if (!index || !results || !resultCount || !clearButton) return;
  index.replaceChildren();
  const topics = new Map();
  posts.forEach((post) => (post.tags || []).forEach((tag) => {
    if (!topics.has(tag)) topics.set(tag, []);
    topics.get(tag).push(post);
  }));
  const sortedTopics = [...topics.entries()].sort(([a], [b]) => a.localeCompare(b));
  if (!tagHashInitialized) {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash.startsWith("tag-")) {
      const initialTag = sortedTopics.find(([tag]) => slugify(tag) === hash.slice(4));
      if (initialTag) selectedTags.add(initialTag[0]);
    }
    tagHashInitialized = true;
  }
  sortedTopics.forEach(([tag, taggedPosts]) => {
    const slug = slugify(tag);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "tag-filter-chip";
    chip.setAttribute("aria-pressed", String(selectedTags.has(tag)));
    chip.append(document.createTextNode(tag));
    const count = document.createElement("span");
    count.textContent = String(taggedPosts.length);
    chip.append(count);
    chip.addEventListener("click", () => {
      selectedTags.has(tag) ? selectedTags.delete(tag) : selectedTags.add(tag);
      pageNumbers.tags = 1;
      const chosen = sortedTopics.filter(([name]) => selectedTags.has(name)).map(([name]) => `tag-${slugify(name)}`);
      history.replaceState(null, "", chosen.length ? `#${chosen[0]}` : location.pathname + location.search);
      renderTags();
    });
    index.append(chip);
  });
  const filtered = selectedTags.size ? posts.filter((post) => (post.tags || []).some((tag) => selectedTags.has(tag))) : posts;
  resultCount.textContent = document.documentElement.lang === "en" ? `${filtered.length} posts` : `${filtered.length} konten`;
  clearButton.disabled = selectedTags.size === 0;
  clearButton.textContent = document.documentElement.lang === "en" ? "Clear filters" : "Hapus filter";
  results.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = document.documentElement.lang === "en" ? "No content has these tags." : "Tidak ada konten dengan tag ini.";
    results.append(empty);
    renderPagination(document.getElementById("tagPagination"), 0, 1, () => {});
    return;
  }
  const totalPages = Math.ceil(filtered.length / pageSize);
  pageNumbers.tags = Math.min(pageNumbers.tags, totalPages);
  filtered.slice((pageNumbers.tags - 1) * pageSize, pageNumbers.tags * pageSize).forEach((post) => results.append(createPostElement(post)));
  renderPagination(document.getElementById("tagPagination"), totalPages, pageNumbers.tags, (page) => { pageNumbers.tags = page; renderPage(); });
}
document.getElementById("clearTagFilters")?.addEventListener("click", () => {
  selectedTags.clear();
  pageNumbers.tags = 1;
  history.replaceState(null, "", location.pathname + location.search);
  renderTags();
});
function renderPage() {
  renderHomeList();
  renderCategoryLists();
  renderTags();
}

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", () => { currentSearch = searchInput.value; pageNumbers.home = 1; renderHomeList(); });
  document.getElementById("searchForm").addEventListener("submit", (event) => event.preventDefault());
}
fetch("content.json")
  .then((response) => response.ok ? response.json() : [])
  .then((content) => { posts = Array.isArray(content) ? content : []; renderPage(); })
  .catch(() => {
    posts = Array.isArray(window.TUKANGPLC_LOCAL_POSTS) ? window.TUKANGPLC_LOCAL_POSTS : [];
    renderPage();
  });

