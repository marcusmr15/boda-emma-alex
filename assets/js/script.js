window.addEventListener("DOMContentLoaded", () => {
  // Autoplay audio once the DOM is ready
  const audio = document.getElementById("bgAudio");
  audio.volume = 0.7;

  // Track starts on mute, but gets unmuted upon a click-tap
  const unmuteOnInteraction = () => {
    if (audio.muted) {
      audio.muted = false;
      audio.play();
      console.log("🎶 Audio unmuted!");
      document.removeEventListener("click", unmuteOnInteraction);
    }
  };

  document.addEventListener("click", unmuteOnInteraction);


  // Countdown
  dayjs.extend(dayjs_plugin_duration);

  const targetDate = dayjs('2025-06-07T13:00:00');

  function updateCountdown() {
    const now = dayjs();
    const diff = targetDate.diff(now);

    if (diff <= 0) {
      document.getElementById('countdownTimer').innerText = "YA EMPEZAMOS!";
      clearInterval(interval);
      return;
    }

    const duration = dayjs.duration(diff);

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    document.getElementById('days').innerText = `${days}`;
    document.getElementById('hours').innerText = `${hours}`;
    document.getElementById('minutes').innerText = `${minutes}`;
    document.getElementById('seconds').innerText = `${seconds}`;
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
});
