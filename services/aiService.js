export function getAIResponse(text) {
  const t = text.toLowerCase();
  let messages = [];

  if (t.includes("sad") || t.includes("down")) {
    messages = [
      "Stay strong 💙",
      "It's okay to feel sad 🌈",
      "You are not alone 💛",
      "Take a deep breath and this will pass 💜"
    ];
  } else if (t.includes("happy") || t.includes("joyful")) {
    messages = [
      "Keep smiling 😄",
      "Your positivity is contagious 🌟",
      "Awesome vibes! 😁",
      "Share your joy with someone today 🌞"
    ];
  } else if (t.includes("angry") || t.includes("frustrated")) {
    messages = [
      "Take a moment to breathe 🧘‍♂️",
      "Channel your energy into something positive 💪",
      "Step back and let your mind rest 🕊️"
    ];
  } else if (t.includes("tired") || t.includes("exhausted")) {
    messages = [
      "Rest is important 😴",
      "Hydrate and relax 💧",
      "A short walk might refresh you 🌿"
    ];
  } else {
    messages = [
      "Remember to pause and breathe 💛",
      "Keep going! 🌟",
      "You are doing great 💙"
    ];
  }

  // Return random message
  return messages[Math.floor(Math.random() * messages.length)];
}
