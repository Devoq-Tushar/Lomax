document.addEventListener("click", function (e) {

    // When clicking "+ ADD NEW TEAM MEMBER"
    if (e.target.classList.contains("btn-secondary")) {

        let row = e.target.closest("tr");

        // Get input values
        let firstName = row.querySelector('td.first-name input').value.trim();
        let lastName = row.querySelector('td.last-name input').value.trim();
        let role = row.querySelector('td.invite-role select').value;
        let email = row.querySelector('td.email input').value.trim();
        let date = row.querySelector('td.invite-date-of-join input').value;

        // Validation: all fields required
        if (!firstName || !lastName || !role || !email || !date) {
            alert("Please fill all fields before adding a new member!");
            return; // stop execution
        }

        // Format date DD/MM/YY
        let formattedDate = "";
        if (date) {
            let d = new Date(date);
            formattedDate = d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
        }

        // Determine badge text
        let badgeText = role.toUpperCase() === "ADMIN" ? "ADMIN" : "";

        // Convert form row → display row with badge
        row.innerHTML = `
            <td class="first-name">
                <div class="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
                    <span class="fw-medium fs-16">${firstName} ${lastName}</span>
                    ${badgeText ? `<span class="badge bg-orange text-white fw-medium fs-8 pt-1">${badgeText}</span>` : ""}
                </div>
            </td>
            <td class="fw-medium fs-16 last-name">${lastName}</td>
            <td class="fw-medium fs-16 invite-role">${role}</td>
            <td class="fw-medium fs-16 email">${email}</td>
            <td class="fw-medium fs-16 invite-date-of-join">${formattedDate}</td>
            <td colspan="2" class="text-end invite-table-form-button">
                <button class="btn-primary w-100 fs-12">START YOUR TRAINING</button>
            </td>
        `;

        // Add a new empty form row at the bottom
        let tbody = document.getElementById("team-body");

        let newRow = document.createElement("tr");
        newRow.classList.add("form-row");
        newRow.innerHTML = `
            <td class="fw-medium fs-16 first-name">
                <input type="text" placeholder="First Name" class="w-100 border-0" required>
            </td>
            <td class="fw-medium fs-16 last-name">
                <input type="text" placeholder="Last Name" class="w-100 border-0" required>
            </td>
            <td class="fw-medium fs-16 invite-role">
                <select class="form-select fs-16 fw-medium text-gray-desc w-100 border-0" required>
                    <option value="" disabled selected>Role</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="trainee">Trainee</option>
                </select>
            </td>
            <td class="fw-medium fs-16 email">
                <input type="email" placeholder="Email" class="w-100 border-0" required>
            </td>
            <td class="fw-medium fs-16 invite-date-of-join">
                <input type="date" class="w-100 border-0" required>
            </td>
            <td colspan="2" class="text-end invite-table-form-button">
                <button class="btn-secondary fs-12 w-100">+ ADD NEW TEAM MEMBER</button>
            </td>
        `;
        tbody.appendChild(newRow);
    }
});




document.addEventListener("click", function (e) {

    // Only target the second table add button
    if (e.target.classList.contains("add-member-btn")) {

        let row = e.target.closest("tr");
        let tbody = document.getElementById("team2-body");

        // Select all fields and set required
        let fields = row.querySelectorAll('input, select');
        fields.forEach(f => f.required = true);

        // Validate all fields
        for (let field of fields) {
            if (!field.value.trim()) {
                alert("Please fill all fields before adding a new member!");
                field.focus();
                return; // stop execution
            }
        }

        // Get values
        let name = row.querySelector('td.name input').value.trim();
        let role = row.querySelector('td.role select').value;
        let email = row.querySelector('td.email input').value.trim();
        let date = row.querySelector('td.date-of-join input').value;

        // Format date
        let formattedDate = "";
        if (date) {
            let d = new Date(date);
            formattedDate = d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
        }

        // Badge for ADMIN role
        let badgeText = role.toUpperCase() === "ADMIN" ? "ADMIN" : "";

        // Convert form row to display row (NO START YOUR TRAINING button)
        row.innerHTML = `
            <td class="name">
                <div class="d-flex flex-row align-items-center justify-content-between gap-2">
                    <span class="fw-medium fs-16">${name}</span>
                    ${badgeText ? `<span class="badge bg-orange text-white fw-medium fs-8 pt-1">${badgeText}</span>` : ""}
                </div>
            </td>
            <td class="fw-medium fs-16 role">${role}</td>
            <td class="fw-medium fs-16 email">${email}</td>
            <td class="fw-medium fs-16 date-of-join">${formattedDate}</td>
            <td class="fw-medium fs-16"></td>
            <td colspan="2" class="text-end table-form-button"></td>
        `;

        // Add a new empty form row at the bottom
        let newRow = document.createElement("tr");
        newRow.classList.add("form-row");
        newRow.innerHTML = `
            <td class="fw-medium fs-16 name">
                <input type="text" placeholder="Name" class="w-100 border-0">
            </td>
            <td class="fw-medium fs-16 role">
                <select class="form-select fs-16 fw-medium text-gray-desc w-100 border-0">
                    <option value="" disabled selected>Role</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="trainee">Trainee</option>
                </select>
            </td>
            <td class="fw-medium fs-16 email">
                <input type="email" placeholder="Email" class="w-100 border-0">
            </td>
            <td class="fw-medium fs-16 date-of-join">
                <input type="date" class="w-100 border-0">
            </td>
            <td class="fw-medium fs-16"></td>
            <td colspan="2" class="text-end add-table-form-button">
                <button class="btn-secondary fs-12 w-100 add-member-btn">+ ADD NEW TEAM MEMBER</button>
            </td>
        `;
        tbody.appendChild(newRow);
    }
});
