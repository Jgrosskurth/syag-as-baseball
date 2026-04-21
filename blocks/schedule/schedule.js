/**
 * Schedule block - displays game schedule as a styled table.
 * Expected structure: rows with [date, opponent, location, home/away, time/result]
 * @param {Element} block The schedule block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const table = document.createElement('div');
  table.className = 'schedule-table';

  rows.forEach((row) => {
    const cols = [...row.children];
    const date = cols[0]?.textContent.trim() || '';
    const opponent = cols[1]?.textContent.trim() || '';
    const location = cols[2]?.textContent.trim() || '';
    const homeAway = cols[3]?.textContent.trim() || '';
    const timeResult = cols[4]?.textContent.trim() || '';

    const gameRow = document.createElement('div');
    gameRow.className = 'schedule-game';

    // Determine if this is a completed game (has W/L/T result)
    const isWin = timeResult.startsWith('W');
    const isLoss = timeResult.startsWith('L');
    const isPractice = opponent.toLowerCase().includes('practice') || opponent.toLowerCase().includes('bye');

    if (isWin) gameRow.classList.add('win');
    if (isLoss) gameRow.classList.add('loss');
    if (isPractice) gameRow.classList.add('practice');

    gameRow.innerHTML = `
      <div class="schedule-game-date">${date}</div>
      <div class="schedule-game-details">
        <div class="schedule-game-opponent">${opponent}</div>
        <div class="schedule-game-meta">
          <span class="schedule-game-location">${location}</span>
          <span class="schedule-game-home-away">${homeAway}</span>
        </div>
      </div>
      <div class="schedule-game-result">${timeResult}</div>
    `;

    table.append(gameRow);
  });

  block.append(table);
}
