document.querySelectorAll(".vote-btn").forEach(button => {
    const card = button.closest(".card");
    const candidateId = card.getAttribute("data-id");
    const voteCountSpan = card.querySelector(".vote-count");
  
    // Load saved vote state
    const savedVotes = localStorage.getItem(`votes_${candidateId}`);
    const hasVoted = localStorage.getItem(`voted_${candidateId}`) === "true";
  
    voteCountSpan.textContent = savedVotes || "0";
  
    if (hasVoted) {
      button.textContent = "Voted";
      button.style.backgroundColor = "#28a745";
    }
  
    button.addEventListener("click", () => {
      let currentVotes = parseInt(voteCountSpan.textContent);
  
      if (localStorage.getItem(`voted_${candidateId}`) === "true") {
        // Unvote
        currentVotes = Math.max(0, currentVotes - 1);
        voteCountSpan.textContent = currentVotes;
        localStorage.setItem(`votes_${candidateId}`, currentVotes);
        localStorage.setItem(`voted_${candidateId}`, "false");
  
        button.textContent = "Vote";
        button.style.backgroundColor = "";
      } else {
        // Vote
        currentVotes += 1;
        voteCountSpan.textContent = currentVotes;
        localStorage.setItem(`votes_${candidateId}`, currentVotes);
        localStorage.setItem(`voted_${candidateId}`, "true");
  
        button.textContent = "Voted";
        button.style.backgroundColor = "#28a745";
      }
    });
  });
  
