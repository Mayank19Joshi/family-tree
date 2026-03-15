const familyData = {
  id: "root",
  name: "Radha Ballabh Joshi & Manuli Joshi",
  role: "Great-grandparents",
  description: "Root of the Joshi family tree, leading into the next generation through Heera Ballabh Joshi and Kalawati Joshi.",
  members: [
    {
      id: "heera-ballabh-family",
      name: "Heera Ballabh Joshi & Kalawati Joshi",
      role: "Grandparents",
      description: "Their branch includes the main Joshi family households and the generations beneath them.",
      members: [
        {
          id: "kaustubha-nand-family",
          name: "Kaustubha Nand Joshi & Hema Joshi",
          role: "Family branch 1",
          description: "Their branch includes Deepak Joshi and his family, along with Somali Joshi.",
          members: [
            {
              id: "deepak-joshi",
              name: "Deepak Joshi",
              role: "Child",
              description: "Married to Deepti Joshi and parent of Priyangi and Rushika.",
              members: [
                {
                  id: "deepti-joshi",
                  name: "Deepti Joshi",
                  role: "Spouse",
                  description: "Life partner of Deepak Joshi and parent of Priyangi and Rushika.",
                  members: [
                    { id: "priyangi-joshi", name: "Priyangi Joshi", role: "Child", description: "Child of Deepak Joshi and Deepti Joshi.", members: [] },
                    { id: "rushika-joshi", name: "Rushika Joshi", role: "Child", description: "Child of Deepak Joshi and Deepti Joshi.", members: [] }
                  ]
                }
              ]
            },
            { id: "somali-joshi", name: "Somali Joshi", role: "Child", description: "Child of Kaustubha Nand Joshi and Hema Joshi.", members: [] }
          ]
        },
        {
          id: "kewalanand-family",
          name: "Kewalanand Joshi & Kunkun Joshi",
          role: "Family branch 2",
          description: "Their branch includes Ashutosh Joshi and his family, along with Himanshu Joshi.",
          members: [
            {
              id: "ashutosh-joshi",
              name: "Ashutosh Joshi",
              role: "Child",
              description: "Married to Karuna Joshi and parent of Harshita Joshi.",
              members: [
                {
                  id: "karuna-joshi",
                  name: "Karuna Joshi",
                  role: "Spouse",
                  description: "Life partner of Ashutosh Joshi and parent of Harshita Joshi.",
                  members: [
                    { id: "harshita-joshi", name: "Harshita Joshi", role: "Child", description: "Child of Ashutosh Joshi and Karuna Joshi.", members: [] }
                  ]
                }
              ]
            },
            { id: "himanshu-joshi", name: "Himanshu Joshi", role: "Child", description: "Child of Kewalanand Joshi and Kunkun Joshi.", members: [] }
          ]
        },
        {
          id: "chidanand-family",
          name: "Chidanand Joshi & Asha Joshi",
          role: "Family branch 3",
          description: "Their branch includes two children.",
          members: [
            { id: "rahul-joshi", name: "Rahul Joshi", role: "Child", description: "Child of Chidanand Joshi and Asha Joshi.", members: [] },
            { id: "mayank-joshi", name: "Mayank Joshi", role: "Child", description: "Child of Chidanand Joshi and Asha Joshi.", members: [] }
          ]
        },
        {
          id: "dharmanand-family",
          name: "Dharmanand Joshi & Manju Joshi",
          role: "Family branch 4",
          description: "Their branch includes two children.",
          members: [
            { id: "jyoti-joshi", name: "Jyoti Joshi", role: "Child", description: "Child of Dharmanand Joshi and Manju Joshi.", members: [] },
            { id: "sourav-joshi", name: "Sourav Joshi", role: "Child", description: "Child of Dharmanand Joshi and Manju Joshi.", members: [] }
          ]
        },
        {
          id: "bhupesh-family",
          name: "Bhupesh Joshi & Bhawana Joshi",
          role: "Family branch 5",
          description: "Their branch includes two children.",
          members: [
            { id: "divyanshu-joshi", name: "Divyanshu Joshi", role: "Child", description: "Child of Bhupesh Joshi and Bhawana Joshi.", members: [] },
            { id: "piyush-joshi", name: "Piyush Joshi", role: "Child", description: "Child of Bhupesh Joshi and Bhawana Joshi.", members: [] }
          ]
        },
        {
          id: "deepa-family",
          name: "Deepa Upreti & P.C. Upreti",
          role: "Family branch 6",
          description: "Their branch includes two children.",
          members: [
            {
              id: "rashmi-upreti",
              name: "Rashmi Upreti",
              role: "Child",
              description: "Child of Deepa Upreti and P.C. Upreti, married to Nitin Pant.",
              members: [
                {
                  id: "nitin-pant",
                  name: "Nitin Pant",
                  role: "Spouse",
                  description: "Life partner of Rashmi Upreti and parent of Devansh Pant and Trisha Pant.",
                  members: [
                    { id: "devansh-pant", name: "Devansh Pant", role: "Child", description: "Child of Rashmi Upreti and Nitin Pant.", members: [] },
                    { id: "trisha-pant", name: "Trisha Pant", role: "Child", description: "Child of Rashmi Upreti and Nitin Pant.", members: [] }
                  ]
                }
              ]
            },
            {
              id: "sanjay-upreti",
              name: "Sanjay Upreti",
              role: "Child",
              description: "Child of Deepa Upreti and P.C. Upreti, married to Tanuja Upreti.",
              members: [
                {
                  id: "tanuja-upreti",
                  name: "Tanuja Upreti",
                  role: "Spouse",
                  description: "Life partner of Sanjay Upreti.",
                  members: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const treeRoot = document.getElementById("tree-root");
const spotlightName = document.getElementById("spotlight-name");
const spotlightRole = document.getElementById("spotlight-role");
const spotlightDescription = document.getElementById("spotlight-description");
const detailKicker = document.getElementById("detail-kicker");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailSummary = document.getElementById("detail-summary");
const detailList = document.getElementById("detail-list");
const heroStats = document.getElementById("hero-stats");
const resetViewButton = document.getElementById("reset-view");
const expandAllButton = document.getElementById("expand-all");
const collapseAllButton = document.getElementById("collapse-all");
const searchInput = document.getElementById("tree-search");
const searchStatus = document.getElementById("search-status");
const treeStage = document.querySelector(".tree-stage");
const treeViewport = document.getElementById("tree-viewport");
const zoomOutButton = document.getElementById("zoom-out");
const zoomInButton = document.getElementById("zoom-in");
const zoomIndicator = document.getElementById("zoom-indicator");

const nodesById = new Map();
const parentById = new Map();
const collapsedIds = new Set();
let activeId = familyData.id;
let searchTerm = "";
let visibleIds = new Set();
let matchedIds = new Set();
let zoomLevel = 0.6;

function flattenTree(node, parentId = null) {
  nodesById.set(node.id, node);
  parentById.set(node.id, parentId);
  node.members.forEach((member) => flattenTree(member, node.id));
}

function countPeople(node) {
  return 1 + node.members.reduce((sum, member) => sum + countPeople(member), 0);
}

function countDepth(node) {
  if (!node.members.length) {
    return 1;
  }

  return 1 + Math.max(...node.members.map(countDepth));
}

function countDescendants(node) {
  return node.members.reduce((sum, member) => sum + 1 + countDescendants(member), 0);
}

function appendDescendantItems(list, members, depth = 0) {
  members.forEach((member) => {
    const item = document.createElement("li");
    item.className = "member-item";
    item.style.setProperty("--depth", depth);
    item.innerHTML = `
      <strong>${member.name}</strong>
      <span class="member-role">${member.role}</span>
      <span class="member-description">${member.description}</span>
    `;
    list.appendChild(item);

    if (member.members.length) {
      appendDescendantItems(list, member.members, depth + 1);
    }
  });
}

function getAllExpandableIds(node) {
  const ids = [];
  if (node.members.length) {
    ids.push(node.id);
    node.members.forEach((member) => ids.push(...getAllExpandableIds(member)));
  }
  return ids;
}

function buildSearchState() {
  visibleIds = new Set();
  matchedIds = new Set();

  if (!searchTerm) {
    nodesById.forEach((_, id) => visibleIds.add(id));
    return;
  }

  function visit(node) {
    const haystack = `${node.name} ${node.role} ${node.description}`.toLowerCase();
    const selfMatch = haystack.includes(searchTerm);
    let descendantMatch = false;

    node.members.forEach((member) => {
      if (visit(member)) {
        descendantMatch = true;
      }
    });

    if (selfMatch) {
      matchedIds.add(node.id);
    }

    if (selfMatch || descendantMatch) {
      visibleIds.add(node.id);
      let current = node.id;
      while (parentById.get(current)) {
        current = parentById.get(current);
        visibleIds.add(current);
      }
      return true;
    }

    return false;
  }

  visit(familyData);
}

function isExpanded(node) {
  if (!node.members.length) {
    return false;
  }

  if (searchTerm && visibleIds.has(node.id)) {
    return true;
  }

  return !collapsedIds.has(node.id);
}

function createCard(node, variant = "branch") {
  const wrapper = document.createElement("article");
  wrapper.className = `card ${variant === "root" ? "root-card" : ""}`.trim();
  wrapper.dataset.id = node.id;

  const toolbar = document.createElement("div");
  toolbar.className = "card-toolbar";

  const badge = document.createElement("span");
  badge.className = "card-badge";
  badge.textContent = node.role;
  toolbar.appendChild(badge);

  if (node.members.length) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "toggle-button";
    toggle.textContent = isExpanded(node) ? "Collapse" : "Expand";
    toggle.setAttribute("aria-expanded", String(isExpanded(node)));
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleBranch(node.id);
    });
    toolbar.appendChild(toggle);
  }

  const selectButton = document.createElement("button");
  selectButton.type = "button";
  selectButton.className = "card-main";
  selectButton.innerHTML = `
    <h3 class="card-name">${node.name}</h3>
    <p class="card-meta">${node.description}</p>
  `;
  selectButton.addEventListener("click", () => setActiveNode(node.id));

  wrapper.appendChild(toolbar);
  wrapper.appendChild(selectButton);

  if (matchedIds.has(node.id)) {
    wrapper.classList.add("matched");
  }

  return wrapper;
}

function renderBranch(node) {
  if (searchTerm && !visibleIds.has(node.id)) {
    return null;
  }

  const branch = document.createElement("div");
  branch.className = "branch";
  branch.dataset.id = node.id;
  branch.appendChild(createCard(node));

  if (node.members.length && isExpanded(node)) {
    const children = document.createElement("div");
    children.className = "generation nested-generation";

    node.members.forEach((member) => {
      const childBranch = renderBranch(member);
      if (childBranch) {
        children.appendChild(childBranch);
      }
    });

    if (children.childElementCount) {
      branch.appendChild(children);
    }
  }

  return branch;
}

function renderTree() {
  buildSearchState();
  treeRoot.innerHTML = "";

  const rootBranch = renderBranch(familyData);
  if (rootBranch) {
    treeRoot.appendChild(rootBranch);
  }

  syncActiveState();
  updateSearchStatus();
  applyZoom();
}

function applyZoom() {
  zoomLevel = Math.min(1.4, Math.max(0.6, zoomLevel));
  treeViewport.style.setProperty("--tree-scale", zoomLevel.toFixed(2));
  zoomIndicator.textContent = `${Math.round(zoomLevel * 100)}%`;

  const scaledHeight = Math.ceil(treeViewport.offsetHeight * zoomLevel);
  treeStage.style.height = `${scaledHeight}px`;
}

function centerTreeView() {
  const horizontalOffset = Math.max(0, (treeViewport.offsetWidth - treeStage.clientWidth) / 2);
  treeStage.scrollLeft = horizontalOffset;
}

function renderStats() {
  const totalPeople = countPeople(familyData);
  const branchCount = familyData.members.length;
  const generationDepth = countDepth(familyData);

  heroStats.innerHTML = `
    <div class="stat-chip">${totalPeople} connected people</div>
    <div class="stat-chip">${branchCount} main family branches</div>
    <div class="stat-chip">${generationDepth} visible generations</div>
  `;
}

function updateDetails(node) {
  spotlightName.textContent = node.name;
  spotlightRole.textContent = `${node.role} | ${node.members.length ? `${node.members.length} linked ${node.members.length === 1 ? "member" : "members"}` : "Leaf node"}`;
  spotlightDescription.textContent = node.description;

  detailKicker.textContent = node.id === familyData.id ? "Root family node" : "Family node";
  detailTitle.textContent = node.name;
  detailSubtitle.textContent = node.role;
  detailSummary.textContent = `${countDescendants(node)} total descendant${countDescendants(node) === 1 ? "" : "s"} linked under this family node.`;

  if (!node.members.length) {
    detailList.innerHTML = '<li class="member-item"><strong>No further family members listed</strong>This person currently appears as an end point in the shared family hierarchy.</li>';
    return;
  }

  detailList.innerHTML = "";
  appendDescendantItems(detailList, node.members);
}

function updateSearchStatus() {
  if (!searchTerm) {
    searchStatus.textContent = "Showing the full family tree.";
    return;
  }

  if (!matchedIds.size) {
    searchStatus.textContent = `No matches found for "${searchInput.value.trim()}".`;
    return;
  }

  searchStatus.textContent = `Found ${matchedIds.size} matching ${matchedIds.size === 1 ? "member" : "members"} for "${searchInput.value.trim()}".`;
}

function syncActiveState() {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("active", card.dataset.id === activeId);
  });
}

function setActiveNode(id) {
  const node = nodesById.get(id);
  if (!node) {
    return;
  }

  activeId = id;
  let current = parentById.get(id);
  while (current) {
    collapsedIds.delete(current);
    current = parentById.get(current);
  }

  syncActiveState();
  updateDetails(node);
  renderTree();
}

function toggleBranch(id) {
  if (collapsedIds.has(id)) {
    collapsedIds.delete(id);
  } else {
    collapsedIds.add(id);
  }

  renderTree();
}

resetViewButton.addEventListener("click", () => {
  searchTerm = "";
  searchInput.value = "";
  collapsedIds.clear();
  setActiveNode(familyData.id);
});

expandAllButton.addEventListener("click", () => {
  collapsedIds.clear();
  renderTree();
});

zoomOutButton.addEventListener("click", () => {
  zoomLevel -= 0.1;
  applyZoom();
  centerTreeView();
});

zoomInButton.addEventListener("click", () => {
  zoomLevel += 0.1;
  applyZoom();
  centerTreeView();
});

collapseAllButton.addEventListener("click", () => {
  collapsedIds.clear();
  getAllExpandableIds(familyData)
    .filter((id) => id !== familyData.id)
    .forEach((id) => collapsedIds.add(id));
  renderTree();
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderTree();
});

flattenTree(familyData);
renderStats();
renderTree();
updateDetails(familyData);
centerTreeView();
