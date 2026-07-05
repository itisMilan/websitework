/* ===================================================================
   SFI PU — PG Admission Helpdesk 2025–26
   Directory data + search/filter, checklist persistence, map lightbox,
   mobile nav.
=================================================================== */

const SCHOOLS = [
  {
    key: "ma",
    label: "MA",
    title: "MA Programmes",
    depts: [
      { name: "South Asian Studies", contacts: [["Sona", "7558925124"]] },
      { name: "Anthropology", contacts: [["Ajitha", "6301436933"]] },
      { name: "Sociology", contacts: [["Anna", "9745218139"], ["Harinandana", "9037292331"]] },
      { name: "History", contacts: [["Achuthan", "9994119900"], ["Jyoti", "9590860030"]] },
      { name: "Political Science & IR", contacts: [["Akash", "8943676288"], ["Anaswara", "7736701825"]] },
      { name: "Women's Studies", contacts: [["Anjika", "8921397658"]] },
      { name: "Human Rights & Inclusive Policy", contacts: [["Gokul", "8129047697"]] },
      { name: "Mass Communication", contacts: [["Keerthana", "9330294473"], ["Akshaya", "9567110704"]] },
      { name: "English", contacts: [["Gopika", "7356639742"], ["Aivin", "8078965231"]] },
      { name: "French", contacts: [["Inayat", "7905854948"], ["Aman", "9306986598"]] },
      { name: "Hindi", contacts: [["Adithya", "9778247132"]] },
      { name: "Sanskrit", contacts: [["Inayat", "7905854948"]] },
      { name: "Philosophy", contacts: [["Kwatal", "6909092067"]] },
      { name: "Tamil", contacts: [["Suganathan", "8825414075"]] },
      { name: "Economics", contacts: [["Dronacharya", "8697506359"], ["Bharath", "7594003233"]] }
    ]
  },
  {
    key: "msc",
    label: "M.Sc.",
    title: "M.Sc. Programmes",
    depts: [
      { name: "Electronic Media", contacts: [["Jeevan", "8590467381"]] },
      { name: "Physics", contacts: [["Haizam", "9778210231"], ["Devika", "7994718876"]] },
      { name: "Chemistry", contacts: [["Aravind", "7305341863"], ["Sriya", "8547099309"]] },
      { name: "Applied Geology", contacts: [["Karthi", "9894098436"], ["Lakshya", "7012779088"]] },
      { name: "Geophysics", contacts: [["Sukhadev", "9498847152"]] },
      { name: "Applied Psychology", contacts: [["Sooryasree", "9846182369"]] },
      { name: "Statistics", contacts: [["Ajmal", "9961865213"]] },
      { name: "Mathematics", contacts: [["Swetha", "7907607426"]] },
      { name: "Computer Science (Data Analytics)", contacts: [["Gokul", "9074668124"]] },
      { name: "Ecology & Environmental Science", contacts: [["Jisna", "9961865213"], ["Sandhesh", "7736920090"]] },
      { name: "Bioinformatics", contacts: [["Aju Roop", "7356028193"]] },
      { name: "Microbiology", contacts: [["Alshin", "9745910485"]] },
      { name: "Biotechnology", contacts: [["Swetha", "7907607426"]] },
      { name: "Food Science & Technology", contacts: [["Sarath", "8590947261"]] },
      { name: "Biochemistry", contacts: [["Parvathi", "7306898585"]] },
      { name: "Quantitative Finance", contacts: [["Nikhitha", "9605812608"]] }
    ]
  },
  {
    key: "mba",
    label: "MBA",
    title: "MBA Programmes",
    depts: [
      { name: "Business Administration", contacts: [["Dalex", "8301040178"], ["Haseena", "8075194695"]] },
      { name: "Data Analytics", contacts: [["Aftab", "8156957496"], ["Resmi", "7736528166"]] },
      { name: "Tourism & Travel Management", contacts: [["Devika", "8089667297"]] },
      { name: "Banking Technology", contacts: [["Anshiya", "9946061973"], ["Gayathri", "9496023523"]] },
      { name: "Financial Technology", contacts: [["Hari Krishnan", "9526344760"]] },
      { name: "International Business", contacts: [["Abhijith", "8921578907"]] },
      { name: "Logistics & Supply Chain", contacts: [["Rakesh", "8977590789"]] }
    ]
  },
  {
    key: "mcom",
    label: "M.Com.",
    title: "M.Com. Programmes",
    depts: [
      { name: "Business Finance", contacts: [["Ameen", "7356945775"], ["Archana", "6282639679"]] },
      { name: "Accounting and Taxation", contacts: [["Aswin", "8589841680"], ["Devapriya", "6238016511"]] }
    ]
  },
  {
    key: "other",
    label: "Other",
    title: "Other Programmes",
    depts: [
      { name: "M.S.W. (Social Work)", contacts: [["Anusha", "6282208505"], ["Keerthana", "8590763145"]] },
      { name: "MCA", contacts: [["Sriprayathi", "8921012397"], ["Sivangi", "6282888528"]] },
      { name: "M.Tech. Programmes", contacts: [["Sudharshan", "9150028500"], ["Harshath", "7358380026"]] },
      { name: "MPEd", contacts: [["Gopika", "7356639742"]] },
      { name: "M.Lib.I.Sc", contacts: [["Deeptha", "977824659"]] },
      { name: "M.P.A. Drama & Theatre", contacts: [["Rameez", "9061711797"]] },
      { name: "PG Diploma Programmes", contacts: [["Vishnu", "9746452991"]] },
      { name: "MEd", contacts: [["Arun", "9360324748"]] },
      { name: "LLM", contacts: [["Arya", "7034980380"], ["Calvin", "9994505701"]] },
      { name: "MVA Painting", contacts: [["Stalin", "8184820292"]] }
    ]
  }
];

const HOSTEL_INCHARGES = [
  ["Rameez", "9061711797"], ["Arundhathi", "9778191197"],
  ["Haizam", "9778210231"], ["Anshiya", "9946061973"],
  ["Achuthan", "9994119900"], ["Gopika", "7356639742"],
  ["Stalin", "8184820292"], ["Parvanendu", "8078758314"]
];

const DAY_SCHOLAR = [
  ["Achuthan", "9994119900"], ["Anbuvanan", "6383067975"]
];

const DOCUMENTS = [
  "X Std. or equivalent certificate/mark statement along with age proof",
  "H.Sc. or its equivalent certificate/mark statement",
  "Degree/Provisional certificate of the qualifying degree along with mark statements",
  "OBC with Non-Creamy Layer certificate / EWS certificate (issued after 1 Apr 2023), for OBC/EWS candidates",
  "Recently issued SC/ST/PH/Pondicherry Residence/Karaikal Residence certificate, as applicable",
  "Migration/Transfer certificate and Conduct certificate from the institution last studied",
  "2 recent stamp-size colour photos (Group Medical Insurance) + 4 passport-size photos",
  "CUET PG 2026 Scorecard",
  "University PG admission application form copy",
  "Proof of online admission fee payment",
  "Disability Certificate from a Govt. Hospital Medical Board (if applicable)",
  "Wards/Dependents of Defence Personnel Certificate (if applicable)"
];

function telHref(num){ return `tel:${num.replace(/\s+/g, "")}`; }

const CALL_SVG = `<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.02z"/></svg>`;
const PIN_SVG = `<svg viewBox="0 0 24 24"><path fill="#EA4335" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#fff"/></svg>`;

function callBtn(name, num){
  return `<a class="call-btn" href="${telHref(num)}" title="Call ${name} — ${num}" aria-label="Call ${name}">${CALL_SVG}</a>`;
}

/* Verified Google Maps building pins (from SFI PU helpdesk).
   Departments share buildings, so several map to one block link. */
const BLOCK = {
  humanities:     "https://maps.app.goo.gl/NRxASpsSgrPqQGoY9",
  media:          "https://maps.app.goo.gl/DzLh8LQRfJ78RLQLA",
  physics:        "https://maps.app.goo.gl/QMCCmH7pgvHwFutJ8",
  chemistry:      "https://maps.app.goo.gl/GnwngGvKfZDNdxxr8",
  geology:        "https://maps.app.goo.gl/i4SeigkTvF35NTLX7",
  performingArts: "https://maps.app.goo.gl/h8vnyDkGRqs6shpP6",
  management:     "https://maps.app.goo.gl/EF8hmX3GABKi7ueC6",
  foodScience:    "https://maps.app.goo.gl/T5qTWPxyN1CMuF5L8",
  biochem:        "https://maps.app.goo.gl/B6VEzvutH4HydfaP8",
  bioinformatics: "https://maps.app.goo.gl/J8HGQ8fg42Gv8zQB8",
  biotech:        "https://maps.app.goo.gl/8agAZQTMcRw4GTMt5",
  microbiology:   "https://maps.app.goo.gl/GYbDhT1oa3vtHiTd9"
};
const DEPT_MAP = {
  "South Asian Studies": BLOCK.humanities,
  "Anthropology": BLOCK.humanities,
  "Sociology": BLOCK.humanities,
  "History": BLOCK.humanities,
  "Political Science & IR": BLOCK.humanities,
  "Women's Studies": BLOCK.humanities,
  "Human Rights & Inclusive Policy": BLOCK.humanities,
  "English": BLOCK.humanities,
  "French": BLOCK.humanities,
  "Hindi": BLOCK.humanities,
  "Sanskrit": BLOCK.humanities,
  "Philosophy": BLOCK.humanities,
  "M.S.W. (Social Work)": BLOCK.humanities,
  "MPEd": BLOCK.humanities,
  "Mass Communication": BLOCK.media,
  "Electronic Media": BLOCK.media,
  "MVA Painting": BLOCK.media,
  "M.P.A. Drama & Theatre": BLOCK.performingArts,
  "Physics": BLOCK.physics,
  "Chemistry": BLOCK.chemistry,
  "Applied Geology": BLOCK.geology,
  "Geophysics": BLOCK.geology,
  "Bioinformatics": BLOCK.bioinformatics,
  "Microbiology": BLOCK.microbiology,
  "Biotechnology": BLOCK.biotech,
  "Food Science & Technology": BLOCK.foodScience,
  "Biochemistry": BLOCK.biochem,
  "Economics": BLOCK.management,
  "Business Administration": BLOCK.management,
  "Data Analytics": BLOCK.management,
  "Tourism & Travel Management": BLOCK.management,
  "Banking Technology": BLOCK.management,
  "Financial Technology": BLOCK.management,
  "International Business": BLOCK.management,
  "Logistics & Supply Chain": BLOCK.management,
  "Business Finance": BLOCK.management,
  "Accounting and Taxation": BLOCK.management
};

function searchUrl(deptName){
  const q = encodeURIComponent(`${deptName}, Pondicherry University`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
function mapBtn(deptName){
  const pin = DEPT_MAP[deptName];
  const href = pin || searchUrl(deptName);
  const approx = pin ? "" : " map-btn--approx";
  const title = pin
    ? `Locate ${deptName} on Google Maps`
    : `Approximate — search ${deptName} on Google Maps`;
  return `<a class="map-btn${approx}" href="${href}" target="_blank" rel="noopener"
     title="${title}" aria-label="${title}">${PIN_SVG}</a>`;
}

/* ---------- copy-to-clipboard (shared by core cards, chips, dept lines) ---------- */
function fallbackCopy(text){
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch {}
  document.body.removeChild(ta);
}
function copyNumber(e){
  const btn = e.currentTarget;
  e.preventDefault();
  e.stopPropagation();
  const num = btn.dataset.copy;
  const flash = () => {
    btn.classList.add("copied");
    btn.textContent = "✓";
    setTimeout(() => { btn.classList.remove("copied"); btn.textContent = "⧉"; }, 1200);
  };
  if (navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(num).then(flash).catch(() => { fallbackCopy(num); flash(); });
  } else {
    fallbackCopy(num);
    flash();
  }
}
function wireCopyButtons(root){
  root.querySelectorAll(".copy-btn").forEach(btn => btn.addEventListener("click", copyNumber));
}
wireCopyButtons(document);

/* ---------- render: hostel + day scholar chips ---------- */
function renderChipGroup(containerId, list){
  const el = document.getElementById(containerId);
  el.innerHTML = list.map(([name, num]) => `
    <span class="chip">
      <span class="chip-name">${name}</span>
      <span class="sr-only">${num}</span>
      ${callBtn(name, num)}
      <button class="copy-btn copy-btn--chip" type="button" data-copy="${num}" aria-label="Copy number">⧉</button>
    </span>
  `).join("");
  wireCopyButtons(el);
}

/* ---------- render: directory ---------- */
const resultsEl = document.getElementById("directoryResults");
const noResultsEl = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const filterChipsEl = document.getElementById("filterChips");

let activeSchool = "all";

function buildFilterChips(){
  const all = [{key:"all", label:"All Schools"}, ...SCHOOLS.map(s => ({key:s.key, label:s.label}))];
  filterChipsEl.innerHTML = all.map(s => `
    <button class="filter-chip${s.key === "all" ? " active" : ""}" data-key="${s.key}">${s.label}</button>
  `).join("");
  filterChipsEl.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeSchool = btn.dataset.key;
      filterChipsEl.querySelectorAll(".filter-chip").forEach(b => b.classList.toggle("active", b === btn));
      renderDirectory();
    });
  });
}

function renderDirectory(){
  const q = searchInput.value.trim().toLowerCase();
  let count = 0;
  let html = "";

  SCHOOLS.forEach(school => {
    if (activeSchool !== "all" && activeSchool !== school.key) return;

    const matchedDepts = school.depts.filter(dept => {
      if (!q) return true;
      if (dept.name.toLowerCase().includes(q)) return true;
      return dept.contacts.some(([name]) => name.toLowerCase().includes(q));
    });

    matchedDepts.forEach(dept => {
      count++;
      html += `
        <article class="dept-card">
          <span class="school-label">${school.title}</span>
          <div class="dept-head">
            <h4>${dept.name}</h4>
            ${mapBtn(dept.name)}
          </div>
          ${dept.contacts.map(([name, num]) => `
            <span class="contact-line">
              <span class="contact-main">
                <span class="contact-name">${name}</span>
                <span class="sr-only">${num}</span>
              </span>
              ${callBtn(name, num)}
              <button class="copy-btn" type="button" data-copy="${num}" aria-label="Copy number">⧉</button>
            </span>
          `).join("")}
        </article>
      `;
    });
  });

  resultsEl.innerHTML = html;
  noResultsEl.hidden = count > 0;
  wireCopyButtons(resultsEl);
}

const searchClear = document.getElementById("searchClear");
searchInput.addEventListener("input", () => {
  searchClear.hidden = searchInput.value.length === 0;
  renderDirectory();
});
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchClear.hidden = true;
  searchInput.focus();
  renderDirectory();
});

/* ---------- checklist with localStorage ---------- */
const checklistEl = document.getElementById("checklist");
const CHECK_KEY = "sfipu-checklist-2025";

function loadChecked(){
  try { return JSON.parse(localStorage.getItem(CHECK_KEY)) || {}; }
  catch { return {}; }
}
function saveChecked(state){
  localStorage.setItem(CHECK_KEY, JSON.stringify(state));
}

const progressBadge = document.getElementById("progressBadge");

function updateProgressBadge(state){
  const done = DOCUMENTS.reduce((n, _, i) => n + (state[i] ? 1 : 0), 0);
  progressBadge.textContent = `${done} / ${DOCUMENTS.length} ready`;
  progressBadge.classList.toggle("progress-badge--full", done === DOCUMENTS.length);
}

function renderChecklist(){
  const state = loadChecked();
  checklistEl.innerHTML = DOCUMENTS.map((doc, i) => `
    <li data-i="${i}" class="${state[i] ? "checked" : ""}">
      <span class="check-box">✓</span>
      <span class="check-text">${doc}</span>
    </li>
  `).join("");
  updateProgressBadge(state);

  checklistEl.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const i = li.dataset.i;
      const state = loadChecked();
      state[i] = !state[i];
      saveChecked(state);
      li.classList.toggle("checked", !!state[i]);
      updateProgressBadge(state);
    });
  });
}

document.getElementById("resetChecklist").addEventListener("click", () => {
  localStorage.removeItem(CHECK_KEY);
  renderChecklist();
});

/* ---------- map lightbox ---------- */
const lightbox = document.getElementById("lightbox");
document.getElementById("mapOpenBtn").addEventListener("click", () => lightbox.classList.add("open"));
document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.remove("open"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") lightbox.classList.remove("open"); });

/* ---------- mobile nav ---------- */
const menuBtn = document.getElementById("menuBtn");
const topnav = document.getElementById("topnav");
menuBtn.addEventListener("click", () => {
  const open = topnav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
topnav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  topnav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}));

/* ---------- init ---------- */
buildFilterChips();
renderChipGroup("hostelIncharges", HOSTEL_INCHARGES);
renderChipGroup("dayScholar", DAY_SCHOLAR);
renderDirectory();
renderChecklist();
