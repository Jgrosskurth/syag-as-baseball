/**
 * Hero Banner block - displays team name, season info, and record.
 * @param {Element} block The hero-banner block element
 */
export default function decorate(block) {
  const rows = [...block.children];

  // Extract content from rows
  const teamName = rows[0]?.querySelector('div')?.textContent.trim() || '';
  const subtitle = rows[1]?.querySelector('div')?.textContent.trim() || '';
  const record = rows[2]?.querySelector('div')?.textContent.trim() || '';

  block.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'hero-banner-content';

  const diamond = document.createElement('div');
  diamond.className = 'hero-banner-diamond';
  diamond.innerHTML = '&#9670;';

  const h1 = document.createElement('h1');
  h1.textContent = teamName;

  const sub = document.createElement('p');
  sub.className = 'hero-banner-subtitle';
  sub.textContent = subtitle;

  const rec = document.createElement('p');
  rec.className = 'hero-banner-record';
  rec.textContent = record;

  container.append(diamond, h1, sub, rec);
  block.append(container);
}
