/**
 * Roster block - displays player cards in a grid.
 * Expected structure: rows with [number, name, position]
 * @param {Element} block The roster block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'roster-grid';

  rows.forEach((row) => {
    const cols = [...row.children];
    const number = cols[0]?.textContent.trim() || '';
    const name = cols[1]?.textContent.trim() || '';
    const position = cols[2]?.textContent.trim() || '';

    const card = document.createElement('div');
    card.className = 'roster-card';

    card.innerHTML = `
      <div class="roster-card-number">${number}</div>
      <div class="roster-card-name">${name}</div>
      <div class="roster-card-position">${position}</div>
    `;

    grid.append(card);
  });

  block.append(grid);
}
