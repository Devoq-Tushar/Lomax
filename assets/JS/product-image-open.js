const openButtons = document.querySelectorAll('.open-folder');
const mainSection = document.getElementById('mainCardSection');
const subSection = document.getElementById('subCardSection');
const backBtn = document.getElementById('backBtn');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const folderName = btn.dataset.folder;

    // Hide main section, show sub section and back button
    mainSection.classList.add('d-none');
    subSection.classList.remove('d-none');
    backBtn.classList.remove('d-none');
    backBtn.classList.add('d-flex');

    // Clear previous sub-cards
    subSection.innerHTML = '';

    // Generate 8 cards dynamically
    for (let i = 1; i <= 8; i++) {
      const cardHTML = `
          <div class="card-secondary d-flex flex-column justify-content-center align-items-center text-center border-0 cursor-pointer flex-fill gap-3">
            <div class="d-flex justify-content-center align-items-center bg-turnary w-100 card-secondary-img">
              <img src="../assets/images/image-icn.svg" alt="" class="img">
            </div>
            <h6 class="fs-20 text-dark-blue fw-bold">${folderName}${String(i).padStart(3, '0')}</h6>
            <button class="btn-primary w-100 text-uppercase">Download PDF</button>
          </div>
        `;
      subSection.insertAdjacentHTML('beforeend', cardHTML);
    }
  });
});

// Back Button functionality
backBtn.addEventListener('click', () => {
  subSection.classList.add('d-none');
  mainSection.classList.remove('d-none');
  backBtn.classList.add('d-none');
});
