(() => {
  "use strict";
  const status = document.querySelector("#shareStatus");
  const musicButton = document.querySelector("#musicButton");
  const musicStatus = document.querySelector("#musicStatus");
  const tourButton = document.querySelector("#tourButton");
  const tourLabel = tourButton?.querySelector(".tour-label");
  const tourIcon = tourButton?.querySelector(".tour-icon");
  const petalLayer = document.querySelector("#petalLayer");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  if ("IntersectionObserver" in window && !reducedMotion) {
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

  // Original rose, jasmine, and champagne petal treatment.
  function launchPetals() {
    if (!petalLayer || reducedMotion || document.hidden) return;
    petalLayer.replaceChildren();
    petalLayer.classList.add("active");
    const count = window.innerWidth < 640 ? 12 : 20;
    const types = ["rose", "jasmine", "champagne"];

    for (let index = 0; index < count; index += 1) {
      const petal = document.createElement("span");
      petal.className = `flower-petal ${types[index % types.length]}`;
      petal.style.setProperty("--left", `${Math.random() * 100}%`);
      petal.style.setProperty("--delay", `${(Math.random() * 1.1).toFixed(2)}s`);
      petal.style.setProperty("--duration", `${(3 + Math.random() * 1.5).toFixed(2)}s`);
      petal.style.setProperty("--drift", `${(-65 + Math.random() * 130).toFixed(0)}px`);
      petal.style.setProperty("--spin", `${(180 + Math.random() * 460).toFixed(0)}deg`);
      petal.style.setProperty("--scale", `${(0.7 + Math.random() * 0.5).toFixed(2)}`);
      petalLayer.appendChild(petal);
    }

    window.setTimeout(() => {
      petalLayer.classList.remove("active");
      petalLayer.replaceChildren();
    }, 5000);
  }

  if (!reducedMotion) {
    launchPetals();
    window.setInterval(launchPetals, 6500);
  }

  // A section-by-section tour: wait 15 seconds, then move quickly to the next page.
  const tourPages = [...document.querySelectorAll(".hero, .intro, .celebrate, .moments, .closing")];
  let autoScrollEnabled = !reducedMotion;
  let advanceTimer = 0;
  let interactionTimer = 0;
  let temporarilyPaused = false;

  function isAtLastPage() {
    const lastPage = tourPages.at(-1);
    return lastPage && window.scrollY >= lastPage.offsetTop - 100;
  }

  function updateTourButton() {
    if (!tourButton) return;
    const atLastPage = isAtLastPage();
    const label = atLastPage && !autoScrollEnabled ? "Replay tour" : autoScrollEnabled && !temporarilyPaused ? "Pause tour" : autoScrollEnabled ? "Tour paused" : "Start tour";
    tourLabel.textContent = label;
    tourIcon.textContent = atLastPage || !autoScrollEnabled ? "▶" : temporarilyPaused ? "…" : "Ⅱ";
    tourButton.setAttribute("aria-pressed", String(autoScrollEnabled));
    tourButton.setAttribute("aria-label", label);
  }

  function scheduleNextPage() {
    window.clearTimeout(advanceTimer);
    if (!autoScrollEnabled || temporarilyPaused || document.hidden) return;
    advanceTimer = window.setTimeout(advancePage, 15000);
  }

  function advancePage() {
    const nextPage = tourPages.find((page) => page.offsetTop > window.scrollY + 100);
    if (!nextPage) {
      autoScrollEnabled = false;
      updateTourButton();
      return;
    }
    nextPage.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    scheduleNextPage();
  }

  function pauseForInteraction(event) {
    if (!autoScrollEnabled || event?.target?.closest?.("#tourButton")) return;
    temporarilyPaused = true;
    window.clearTimeout(advanceTimer);
    window.clearTimeout(interactionTimer);
    updateTourButton();
    interactionTimer = window.setTimeout(() => {
      temporarilyPaused = false;
      updateTourButton();
      scheduleNextPage();
    }, 12000);
  }

  tourButton?.addEventListener("click", () => {
    const replaying = isAtLastPage() && !autoScrollEnabled;
    if (replaying) tourPages[0]?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    autoScrollEnabled = replaying || !autoScrollEnabled;
    temporarilyPaused = false;
    window.clearTimeout(interactionTimer);
    if (autoScrollEnabled) scheduleNextPage();
    else window.clearTimeout(advanceTimer);
    updateTourButton();
  });

  ["wheel", "touchstart", "pointerdown", "keydown"].forEach((eventName) => {
    window.addEventListener(eventName, pauseForInteraction, { passive: true });
  });

  if (reducedMotion) autoScrollEnabled = false;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearTimeout(advanceTimer);
    else scheduleNextPage();
  });
  updateTourButton();
  scheduleNextPage();
})();
