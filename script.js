document.querySelectorAll(".card").forEach(card => {
  const voteBtn = card.querySelector(".vote-btn");
  const voteAgainBtn = card.querySelector(".vote-again-btn");
  const voteMsg = card.querySelector(".vote-message");
  const candidate = card.dataset.id;

  voteBtn.addEventListener("click", () => {
    voteBtn.disabled = true;
    voteBtn.textContent = "Voted ✔️";
    voteMsg.textContent = `✅ You have voted for ${candidate}`;
    setTimeout(() => {
      voteAgainBtn.style.display = "inline-block";
    }, 2000);
  });

  voteAgainBtn.addEventListener("click", () => {
    voteBtn.disabled = false;
    voteBtn.textContent = "Vote";
    voteMsg.textContent = "Ready to vote!";
    voteAgainBtn.style.display = "none";
  });
});
