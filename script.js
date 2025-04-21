document.querySelectorAll(".vote-btn").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const voteCount = card.querySelector(".vote-count");
      const currentVotes = parseInt(voteCount.textContent);
      voteCount.textContent = currentVotes + 1;
  
      button.disabled = true;
      button.textContent = "Voted";
      button.style.backgroundColor = "#28a745";
    });
  });
  