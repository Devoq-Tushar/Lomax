const quizData = [
    {
        id: "1",
        image: "../assets/images/quize/trainig-img-1.png",
        title: "1. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What possible environmental factors must you consider when deploying an indoor hoarding that has been designed specifically for indoor use only",
        options: [
            { text: "Nothing", isCorrect: false },
            { text: "Whether there is any possibility of any wind impacting the hoarding during the term of installation", isCorrect: true },
            { text: "What colour panels to use", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "2",
        image: "../assets/images/quize/trainig-img-2.png",
        title: "2. Information about the image:",
        desc: "Proper installation begins with aligning the track system. Use the provided alignment template to ensure a level and secure fit. Always double-check mounting points before final installation.",
        question: "What is the maximum spacing interval allowed between each ‘stack of counterweights’ on any hoarding configuration",
        options: [
            { text: "1.5m", isCorrect: true },
            { text: "1.2m", isCorrect: false },
            { text: "1m", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "3",
        image: "../assets/images/quize/trainig-img-3.png",
        title: "3. Information about the image:",
        desc: "After hardware installation, the system requires calibration. The Lomax Calibration Tool helps synchronize the display panels and set operational boundaries. This step ensures smooth functionality.",
        question: "What is the correct spacing between each screw that is required to attach your hoarding panels correctly",
        options: [
            { text: "Approximately every 400mm", isCorrect: true },
            { text: "Exactly every 500mm", isCorrect: false },
            { text: "Max of 100mm from both the top and bottom of the panel and then every 400mm-500mm in between", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "4",
        image: "../assets/images/quize/trainig-img-4.png",
        title: "4. Information about the image:",
        desc: "If an issue occurs, check the LED status on the control unit. Common errors include signal interference, power supply issues, or panel misalignment. Refer to the Troubleshooting Guide for detailed steps.",
        question: "What is the function of the timber cross brace studs on the rear of the hoarding",
        options: [
            { text: "They are a critical requirement that prevent snaking and sideways panel movement post installation", isCorrect: true },
            { text: "Makes the hoarding look better", isCorrect: false },
            { text: "The more timber used the better", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "5",
        image: "../assets/images/quize/trainig-img-5.png",
        title: "5. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the minimum screw size required to correctly attach hoarding panels on a standard indoor hoarding",
        options: [
            { text: "25mm x 6g", isCorrect: false },
            { text: "40mm x 8g", isCorrect: true },
            { text: "75mm x 14g", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "6",
        image: "../assets/images/quize/trainig-img-6.png",
        title: "6. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the correct frequency of spacing that you must attach / screw the timber cross brace stud to the upright vertical timbers",
        options: [
            { text: "Every opportunity that they collide", isCorrect: true },
            { text: "Never", isCorrect: false },
            { text: "IncorWhenever you wantrect", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "7",
        image: "../assets/images/quize/trainig-img-7.png",
        title: "7. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "When, and how many ‘threaded safety rods’ should be used on the rear stack of counterweights when deploying a ‘double stack solution’",
        options: [
            { text: "2 x safety rods needed on every stack", isCorrect: true },
            { text: "1 x safety rod needed on every alternate stack", isCorrect: false },
            { text: "1 x safety rod needed on each rear stack of weights on every double stack being deployed", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "8",
        image: "../assets/images/quize/trainig-img-8.png",
        title: "8. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What size of vertical timber stud has the counterweight been specifically designed to receive",
        options: [
            { text: "70mm x 35mm", isCorrect: true },
            { text: "90mm x 45mm", isCorrect: false },
            { text: "100mm x 50mm", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "9",
        image: "../assets/images/quize/trainig-img-9.png",
        title: "9. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "If you need to extend a vertical timber with an overlapping joining stud, how much must that joining stud overlap the main timbers above and below the actual join",
        options: [
            { text: "1m", isCorrect: true },
            { text: "1.2m", isCorrect: false },
            { text: "0.5m", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "10",
        image: "../assets/images/quize/trainig-img-10.png",
        title: "10. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the minimum screw size and gauge required when applying a joining stud to vertical timbers",
        options: [
            { text: "25mm x 6g bugle", isCorrect: true },
            { text: "40mm x 8g bugle", isCorrect: false },
            { text: "75mm x 14g bugle", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "11",
        image: "../assets/images/quize/trainig-img-11.png",
        title: "11. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "At the point the metal Support Posts meet the vertical timber stud there are multiple screw holes available for attachment – How many must be utilised on each post",
        options: [
            { text: "2", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "12",
        image: "../assets/images/quize/trainig-img-12.png",
        title: "12. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the minimum panel thickness allowed on any hoarding",
        options: [
            { text: "9mm", isCorrect: true },
            { text: "12mm", isCorrect: false },
            { text: "15mm", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "13",
        image: "../assets/images/quize/trainig-img-13.png",
        title: "13. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is maximum panel height allowed for a free-standing outdoor hoarding configuration",
        options: [
            { text: "3.6m", isCorrect: true },
            { text: "4m", isCorrect: false },
            { text: "5m", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "14",
        image: "../assets/images/quize/trainig-img-14.png",
        title: "14. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is maximum panel height allowed for a free-standing indoor hoarding configuration",
        options: [
            { text: "4m", isCorrect: true },
            { text: "8m", isCorrect: false },
            { text: "6m", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "15",
        image: "../assets/images/quize/trainig-img-15.png",
        title: "15. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the footprint depth of a single stack of counterweights",
        options: [
            { text: "32cm", isCorrect: true },
            { text: "46cm", isCorrect: false },
            { text: "92cm", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "16",
        image: "../assets/images/quize/trainig-img-16.png",
        title: "16. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "Which statement is true regarding the addition of shade cloth to outdoor hoardings",
        options: [
            { text: "Overall, it strengthens the hoarding system", isCorrect: true },
            { text: "It can act as a sail and therefore needs to be considered for wind loading calculations", isCorrect: false },
            { text: "It reduces the overall volume of supporting counterweight needed for stability", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "17",
        image: "../assets/images/quize/trainig-img-17.png",
        title: "17. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the minimum quantity of weights are required on a 2.4mH outdoor hoarding to achieve 23m/s wind (83Kph)",
        options: [
            { text: "8+8 x counterweights in a double stack every 1.2mW spacing", isCorrect: true },
            { text: "10+10 x counterweights in a double stack every 1.2mW spacing", isCorrect: false },
            { text: "12+12 x counterweights in a double stack every 1.2mW spacing", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "18",
        image: "../assets/images/quize/trainig-img-18.png",
        title: "18. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the minimum quantity of weights are required on a 3.6mH indoor hoarding",
        options: [
            { text: "4 x counterweights in a single stack every 1.2mW spacing", isCorrect: true },
            { text: "6 x counterweights in a single stack every 1.2mW spacing", isCorrect: false },
            { text: "3 x counterweights in a single stack every 1.2mW spacing", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "19",
        image: "../assets/images/quize/trainig-img-19.png",
        title: "19. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "What is the total weight of one Standard Lomax counterweight?",
        options: [
            { text: "14kg", isCorrect: true },
            { text: "18kg", isCorrect: false },
            { text: "25kg", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "20",
        image: "../assets/images/quize/trainig-img-20.png",
        title: "20. Information about the image:",
        desc: "The Lomax Track System is mounted on ceilings and securely holds the display panels. It ensures smooth operation and proper alignment for the visual display components across various locations.",
        question: "Why is the Lomax System Temporary Fencing solution considered to be a ‘Safe Pedestrian Zone’ design?",
        options: [
            { text: "When deployed, the counterweights protrude by only 3cm into the ‘Pedestrian Zone’", isCorrect: true },
            { text: "It uses heavier panels", isCorrect: false },
            { text: "It is always double stacked", isCorrect: false }
        ],
        correct: 0
    },
    {
        id: "21",
        image: "../assets/images/quize/trainig-img-21.png",
        title: "21. Information about the image:",
        desc: "You must not omit or remove any Lomax System components. All parts are engineered to work together; removing any compromises safety, structural integrity, and compliance with the Technical Guide",
        question: "Is it Ok to omit or remove any ‘Lomax System’ components from the build process",
        options: [
            { text: "No – You must only use components supplied by ‘Lomax System’ and install them as specified", isCorrect: true },
            { text: "Sure, it is fine to exclude components such as the ‘Lomax System Support Post’ or anything else", isCorrect: false },
            { text: "Not sure", isCorrect: false }
        ],
        correct: 0
    }
];

const quizContainer = document.getElementById("quizContainer");

quizData.forEach(q => {
    const quizHTML = `
  <div class="w-100 d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 quiz-item" id="${q.id}">
    <div class="quize-img">
      <img src="${q.image}" alt="Quiz Image">
    </div>
    <div class="quize-main">
      <div class="quize-img-info">
        <span class="quize-img-title">${q.title}</span>
        <span class="quize-img-desc">${q.desc}</span>
      </div>
      <div class="quize-que-ans-main">
        <div class="quize-que-main">
          <span class="quize-que-title">Question:</span>
          <span class="quize-que">${q.question}</span>
        </div>
        <div class="quize-options">
         ${q.options
            .map(opt => `<button class="option-btn" data-correct="${opt.isCorrect}">${opt.text}</button>`)
            .join("")}
        </div>
        <div class="feedback"></div>
      </div>
    </div>
  </div>`;
    quizContainer.insertAdjacentHTML("beforeend", quizHTML);
});

document.querySelectorAll(".quiz-item").forEach(item => {
    const feedback = item.querySelector(".feedback");
    const buttons = item.querySelectorAll(".option-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => (b.disabled = true));
            feedback.innerHTML = "";

            const feedbackRow = document.createElement("div");
            feedbackRow.classList.add("feedback-row", "d-flex", "align-items-start");
            feedbackRow.style.gap = "7px";

            const img = document.createElement("img");
            const text = document.createElement("span");
            text.classList.add("feedback-text");

            if (btn.dataset.correct === "true") {
                btn.classList.add("correct");
                img.src = "../assets/images/quize/correct-icn.svg";
                img.alt = "Correct";
                text.innerHTML = `CORRECT <br /> Great job — you selected the right answer!`;
                feedback.classList.add("show", "success");
                feedback.classList.remove("error");
            } else {
                btn.classList.add("incorrect");
                img.src = "../assets/images/quize/wrong-icn.svg";
                img.alt = "Incorrect";
                text.innerHTML = `INCORRECT`;
                feedback.classList.add("show", "error");
                feedback.classList.remove("success");
            }

            feedbackRow.appendChild(img);
            feedbackRow.appendChild(text);
            feedback.appendChild(feedbackRow);
        });
    });
});
