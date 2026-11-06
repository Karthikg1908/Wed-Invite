(() => {
  "use strict";
  const status = document.querySelector("#shareStatus");
  const musicButton = document.querySelector("#musicButton");
  const musicStatus = document.querySelector("#musicStatus");
  let music = null;

  async function shareInvitation() {
    const data = {
      title: "Praveen & Kavya — Wedding Invitation",
      text: "Join us for Praveen and Kavya's wedding celebration on 1–2 December 2026.",
      url: window.location.href
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(window.location.href);
        if (status) status.textContent = "Invitation link copied.";
      }
    } catch (error) {
      if (error.name !== "AbortError" && status) status.textContent = "Copy the page address to share this invitation.";
    }
  }

  document.querySelectorAll("#shareButton, #shareButtonClosing").forEach((button) => {
    button.addEventListener("click", shareInvitation);
  });

  const revealTargets = document.querySelectorAll(
    ".intro > *, .section-heading, .event, .venue-card, .photo-grid figure, .closing > *"
  );

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((item) => item.classList.add("reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealTargets.forEach((item) => observer.observe(item));
  }

  async function toggleMusic() {
    if (!music) {
      music = new Audio("background-music.mp3");
      music.loop = true;
      music.preload = "none";
      music.volume = 0.35;
    }

    if (music.paused) {
      try {
        await music.play();
        musicButton.classList.add("is-playing");
        musicButton.setAttribute("aria-pressed", "true");
        musicButton.setAttribute("aria-label", "Pause background music");
        musicStatus.textContent = "Background music playing.";
      } catch {
        musicStatus.textContent = "Music could not be played on this device.";
      }
    } else {
      music.pause();
      musicButton.classList.remove("is-playing");
      musicButton.setAttribute("aria-pressed", "false");
      musicButton.setAttribute("aria-label", "Play background music");
      musicStatus.textContent = "Background music paused.";
    }
  }

  musicButton?.addEventListener("click", toggleMusic);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && music && !music.paused) {
      music.pause();
      musicButton.classList.remove("is-playing");
      musicButton.setAttribute("aria-pressed", "false");
      musicButton.setAttribute("aria-label", "Play background music");
    }
  });
})();
