import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, w as createComponent } from "./server_BK3W4eAQ.mjs";
import "./compiler_diwuff8S.mjs";
import { t as $$Layout } from "./Layout_CpGoYtDX.mjs";
//#region src/pages/weight-tracker.astro
var weight_tracker_exports = /* @__PURE__ */ __exportAll({
	default: () => $$WeightTracker,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$WeightTracker = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Weight Tracker",
		"data-astro-cid-ykxceczc": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="tracker-page" data-astro-cid-ykxceczc><div id="edit-modal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="edit-modal-title" data-astro-cid-ykxceczc><div class="modal-card" data-astro-cid-ykxceczc><h3 id="edit-modal-title" data-astro-cid-ykxceczc>Update weight</h3><p data-astro-cid-ykxceczc>Enter your new weight in kilograms.</p><form id="edit-form" class="modal-form" data-astro-cid-ykxceczc><input type="number" id="edit-weight" step="0.1" min="30" required data-astro-cid-ykxceczc><div class="modal-actions" data-astro-cid-ykxceczc><button type="button" id="cancel-edit" class="secondary-btn" data-astro-cid-ykxceczc>Cancel</button><button type="submit" data-astro-cid-ykxceczc>Save</button></div></form></div></div><div class="panel stack" data-astro-cid-ykxceczc><div class="panel-header" data-astro-cid-ykxceczc><div data-astro-cid-ykxceczc><p class="eyebrow" data-astro-cid-ykxceczc>Progress</p><h1 data-astro-cid-ykxceczc>Weight Tracker</h1><p class="subtext" data-astro-cid-ykxceczc>Track your weekly progress and review your history in a simple table.</p></div><form method="post" action="/api/weights" class="weight-form" data-astro-cid-ykxceczc><label for="weight" data-astro-cid-ykxceczc>Add today's weight</label><div class="input-row" data-astro-cid-ykxceczc><input type="number" step="0.1" min="30" name="weight" id="weight" placeholder="60" required data-astro-cid-ykxceczc><button type="submit" data-astro-cid-ykxceczc>Save</button></div></form></div><div class="table-card" data-astro-cid-ykxceczc><div class="table-header" data-astro-cid-ykxceczc><h2 data-astro-cid-ykxceczc>Weight history</h2><span id="summary" data-astro-cid-ykxceczc>Loading...</span></div><div class="table-wrap" data-astro-cid-ykxceczc><table data-astro-cid-ykxceczc><thead data-astro-cid-ykxceczc><tr data-astro-cid-ykxceczc><th data-astro-cid-ykxceczc>Date</th><th data-astro-cid-ykxceczc>Weight (kg)</th><th data-astro-cid-ykxceczc>Action</th></tr></thead><tbody id="weight-body" data-astro-cid-ykxceczc><tr data-astro-cid-ykxceczc><td colspan="2" data-astro-cid-ykxceczc>Loading your entries...</td></tr></tbody></table></div><div id="pagination" class="pagination" data-astro-cid-ykxceczc></div></div></div><div class="panel bmi-panel" data-astro-cid-ykxceczc><div class="panel-header compact" data-astro-cid-ykxceczc><div data-astro-cid-ykxceczc><p class="eyebrow" data-astro-cid-ykxceczc>Health check</p><h2 data-astro-cid-ykxceczc>BMI Calculator</h2><p class="subtext" data-astro-cid-ykxceczc>Estimate your BMI from your height and current weight.</p></div></div><div class="bmi-form" data-astro-cid-ykxceczc><label for="height" data-astro-cid-ykxceczc>Height (cm)</label><input type="number" id="height" min="100" max="250" step="1" placeholder="170" data-astro-cid-ykxceczc><label for="weight-bmi" data-astro-cid-ykxceczc>Weight (kg)</label><input type="number" id="weight-bmi" min="30" max="250" step="0.1" placeholder="65" data-astro-cid-ykxceczc><div id="bmi-result" class="bmi-result" data-astro-cid-ykxceczc>BMI will appear here.</div></div></div></section><script>
    const rowsPerPage = 5;
    let allWeights = [];
    let currentPage = 1;

    const body = document.getElementById('weight-body');
    const summary = document.getElementById('summary');
    const pagination = document.getElementById('pagination');
    const modal = document.getElementById('edit-modal');
    const editForm = document.getElementById('edit-form');
    const editInput = document.getElementById('edit-weight');
    const cancelEdit = document.getElementById('cancel-edit');
    let editingId = null;

    function formatDate(value) {
      return new Date(value).toLocaleDateString('en', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function renderTable() {
      const totalPages = Math.max(1, Math.ceil(allWeights.length / rowsPerPage));
      currentPage = Math.min(currentPage, totalPages);
      const start = (currentPage - 1) * rowsPerPage;
      const slice = allWeights.slice(start, start + rowsPerPage);

      if (!slice.length) {
        body.innerHTML = '<tr><td colspan="2">No weight entries yet.</td></tr>';
        summary.textContent = 'No entries';
        pagination.innerHTML = '';
        return;
      }

      body.innerHTML = slice.map((item) => \`
        <tr>
          <td>\${formatDate(item.date)}</td>
          <td>\${Number(item.weight).toFixed(1)} kg</td>
          <td><button type="button" class="edit-btn" data-id="\${item.id}">Edit</button></td>
        </tr>
      \`).join('');

      body.querySelectorAll('.edit-btn').forEach((button) => {
        button.addEventListener('click', () => {
          const id = button.getAttribute('data-id');
          editingId = id;
          editInput.value = '';
          modal.classList.remove('hidden');
          editInput.focus();
        });
      });

      summary.textContent = \`\${allWeights.length} entries\`;

      const pages = [];
      for (let i = 1; i <= totalPages; i += 1) {
        pages.push(\`<button type="button" class="page-btn \${i === currentPage ? 'active' : ''}" data-page="\${i}">\${i}</button>\`);
      }

      pagination.innerHTML = \`
        <button type="button" class="page-btn" data-page="\${currentPage - 1}" \${currentPage === 1 ? 'disabled' : ''}>Prev</button>
        \${pages.join('')}
        <button type="button" class="page-btn" data-page="\${currentPage + 1}" \${currentPage === totalPages ? 'disabled' : ''}>Next</button>
      \`;

      pagination.querySelectorAll('[data-page]').forEach((button) => {
        button.addEventListener('click', () => {
          const nextPage = Number(button.getAttribute('data-page'));
          if (Number.isFinite(nextPage) && nextPage >= 1 && nextPage <= totalPages) {
            currentPage = nextPage;
            renderTable();
          }
        });
      });
    }

    async function loadWeights() {
      try {
        const response = await fetch('/api/weights');
        if (!response.ok) {
          throw new Error('Unable to load weight history');
        }
        const data = await response.json();
        allWeights = Array.isArray(data) ? data : [];
        currentPage = 1;
        renderTable();
      } catch (error) {
        body.innerHTML = '<tr><td colspan="2">Unable to load entries right now.</td></tr>';
        summary.textContent = 'Error';
        pagination.innerHTML = '';
      }
    }

    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight-bmi');
    const bmiResult = document.getElementById('bmi-result');

    function updateBmi() {
      const height = Number(heightInput.value);
      const weight = Number(weightInput.value);

      if (!height || !weight) {
        bmiResult.innerHTML = 'BMI will appear here.';
        return;
      }

      const bmi = weight / ((height / 100) ** 2);
      let category = 'Normal';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';

      bmiResult.innerHTML = \`<strong>\${bmi.toFixed(1)}</strong><span>\${category}</span>\`;
    }

    [heightInput, weightInput].forEach((input) => input.addEventListener('input', updateBmi));

    function closeModal() {
      modal.classList.add('hidden');
      editingId = null;
      editInput.value = '';
    }

    editForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const value = Number(editInput.value);
      if (!editingId || !Number.isFinite(value) || value <= 0) {
        window.showToast('Please enter a valid weight', 'error');
        return;
      }

      const formData = new FormData();
      formData.append('weightId', editingId);
      formData.append('newWeight', String(value));

      try {
        const response = await fetch('/api/weights', {
          method: 'PATCH',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Unable to update weight');
        }

        closeModal();
        window.showToast('Weight updated successfully', 'success');
        await loadWeights();
      } catch (error) {
        window.showToast('Unable to update weight', 'error');
      }
    });

    cancelEdit.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });

    const params = new URLSearchParams(window.location.search);
    const toastMessage = params.get('toast');
    if (toastMessage) {
      window.showToast(decodeURIComponent(toastMessage), params.get('toastType') || 'info');
    }

    loadWeights();
  <\/script>` })}`;
}, "D:/kerjaan/sidejob/diet/src/pages/weight-tracker.astro", void 0);
var $$file = "D:/kerjaan/sidejob/diet/src/pages/weight-tracker.astro";
var $$url = "/weight-tracker";
//#endregion
//#region \0virtual:astro:page:src/pages/weight-tracker@_@astro
var page = () => weight_tracker_exports;
//#endregion
export { page };
