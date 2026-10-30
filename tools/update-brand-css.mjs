import fs from 'fs';

let css = fs.readFileSync('style.css', 'utf-8');

const target1 = `.nav-brand-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
}

.nav-brand-tag {
  font-family: var(--font-ui);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--primary);
  text-transform: uppercase;
  margin-top: 2px;
}`;

const repl1 = `.nav-brand-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--text);
  line-height: 1;
}

.nav-brand-tag {
  font-family: 'Lato', sans-serif;
  font-size: 0.62rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  color: #64748B;
  text-transform: uppercase;
  margin-top: 3px;
  padding-left: 0.22em;
}

[data-theme="dark"] .nav-brand-tag {
  color: #94A3B8;
}`;

const target2 = `.brand-name-purple {
  color: #7C3AED;
}`;

const repl2 = `.brand-name-purple {
  font-family: 'Cormorant Garamond', Georgia, serif;
  color: #5B21B6;
  font-weight: 600;
  letter-spacing: -0.015em;
  margin-left: -1px;
}`;

let changed = 0;
if (css.includes(target1)) {
  css = css.replace(target1, repl1);
  changed++;
} else {
  // Try CRLF normalized
  const t1Crlf = target1.replace(/\n/g, '\r\n');
  if (css.includes(t1Crlf)) {
    css = css.replace(t1Crlf, repl1.replace(/\n/g, '\r\n'));
    changed++;
  }
}

if (css.includes(target2)) {
  css = css.replace(target2, repl2);
  changed++;
} else {
  const t2Crlf = target2.replace(/\n/g, '\r\n');
  if (css.includes(t2Crlf)) {
    css = css.replace(t2Crlf, repl2.replace(/\n/g, '\r\n'));
    changed++;
  }
}

fs.writeFileSync('style.css', css, 'utf-8');
console.log('Updated style.css, replacements made:', changed);
