/* ============================================================
   deafsuslik — shared runtime
   Logo, icon set, procedural artwork engine, catalogue.
   ============================================================ */

/* ---------- Brand mark ----------
   A squircle token. Inside, an upright suslik silhouette knocked
   out in negative space; its chest carries the play triangle.
   Reads at 16px, works on blue or on graphite.                */
function dsLogoMark(size, opts) {
  opts = opts || {};
  var fill = opts.fill || 'url(#dsg)';
  var cut  = opts.cut  || '#060B18';
  var id   = 'dsg' + Math.random().toString(36).slice(2, 7);
  return '' +
  '<svg class="ds-logo__mark" width="' + size + '" height="' + size + '" viewBox="0 0 48 48" fill="none" aria-hidden="true">' +
    '<defs><linearGradient id="' + id + '" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">' +
      '<stop stop-color="#8CB9FF"/><stop offset=".55" stop-color="#5B9BFF"/><stop offset="1" stop-color="#3A78E0"/>' +
    '</linearGradient></defs>' +
    '<path d="M24 1c9.6 0 14.4 0 18 3.1C45.3 7.5 47 12.9 47 24s-1.7 16.5-5 19.9C38.4 47 33.6 47 24 47S9.6 47 6 43.9C2.7 40.5 1 35.1 1 24S2.7 7.5 6 4.1C9.6 1 14.4 1 24 1Z" fill="' + (opts.flat ? opts.flat : 'url(#' + id + ')') + '"/>' +
    /* suslik: ears */
    '<path d="M17.4 12.6a2.9 2.9 0 1 1 5.05 2.83l-.62 1.1-4.9-2.75.47-1.18Z" fill="' + cut + '"/>' +
    '<path d="M30.6 12.6a2.9 2.9 0 1 0-5.05 2.83l.62 1.1 4.9-2.75-.47-1.18Z" fill="' + cut + '"/>' +
    /* body: upright silhouette, play triangle cut from chest */
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 13.2c-5.35 0-9.35 3.9-9.35 9.35v9.9c0 5.45 4 9.35 9.35 9.35s9.35-3.9 9.35-9.35v-9.9c0-5.45-4-9.35-9.35-9.35Zm-2.6 8.55c0-.86.94-1.39 1.67-.94l7.05 4.35c.7.43.7 1.45 0 1.88l-7.05 4.35c-.73.45-1.67-.08-1.67-.94v-8.7Z" fill="' + cut + '"/>' +
  '</svg>';
}

function dsLogo(px, wordPx, opts) {
  return '<span class="ds-logo">' + dsLogoMark(px, opts) +
    '<span class="ds-logo__word" style="font-size:' + wordPx + 'px">deafsuslik</span></span>';
}

/* ---------- Icons (24px stroke set, one consistent family) ---------- */
var DSI = {
  home:'M3 10.4 12 3l9 7.4V20a1.6 1.6 0 0 1-1.6 1.6h-4.2v-6.2H9.8v6.2H5.6A1.6 1.6 0 0 1 4 20v-9.6Z',
  search:'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35',
  library:'M4 5h4v14H4zM10.5 5h4v14h-4zM17.4 5.6l3 .8-3.4 12.8-3-.8z',
  download:'M12 3v12M7.5 11l4.5 4.5 4.5-4.5M4 20h16',
  user:'M12 12a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4ZM4.5 21c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6',
  play:'M7 4.5v15l13-7.5z',
  pause:'M8.5 4.5v15M15.5 4.5v15',
  back10:'M11 7 6 12l5 5M6 12h8.5A5.5 5.5 0 0 1 20 17.5',
  fwd10:'M13 7l5 5-5 5M18 12H9.5A5.5 5.5 0 0 0 4 17.5',
  plus:'M12 5v14M5 12h14',
  minus:'M5 12h14',
  check:'M20 6 9 17l-5-5',
  x:'M18 6 6 18M6 6l12 12',
  chevR:'m9 5 7 7-7 7',
  chevL:'m15 5-7 7 7 7',
  chevD:'m6 9 6 6 6-6',
  chevU:'m6 15 6-6 6 6',
  arrowL:'M19 12H5M11 6l-6 6 6 6',
  heart:'M12 20.5 4.3 13a4.9 4.9 0 0 1 7.7-6 4.9 4.9 0 0 1 7.7 6L12 20.5Z',
  bookmark:'M6 3.5h12v17l-6-4.2-6 4.2z',
  star:'m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
  bell:'M18 8.5a6 6 0 1 0-12 0c0 6-2.2 7.5-2.2 7.5h16.4S18 14.5 18 8.5ZM13.7 20a2 2 0 0 1-3.4 0',
  settings:'M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z|M19.3 15a1.6 1.6 0 0 0 .3 1.8l.1.1a1.9 1.9 0 1 1-2.7 2.7l-.1-.1a1.6 1.6 0 0 0-2.7 1.1v.3a1.9 1.9 0 1 1-3.8 0v-.2a1.6 1.6 0 0 0-2.8-1.1l-.1.1A1.9 1.9 0 1 1 4.8 17l.1-.1A1.6 1.6 0 0 0 3.8 14h-.3a1.9 1.9 0 1 1 0-3.8h.2a1.6 1.6 0 0 0 1.1-2.8l-.1-.1A1.9 1.9 0 1 1 7.4 4.6l.1.1a1.6 1.6 0 0 0 1.8.3H9.4a1.6 1.6 0 0 0 1-1.5v-.3a1.9 1.9 0 0 1 3.8 0v.2a1.6 1.6 0 0 0 2.7 1.1l.1-.1a1.9 1.9 0 1 1 2.7 2.7l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1h.3a1.9 1.9 0 0 1 0 3.8h-.2a1.6 1.6 0 0 0-1.5 1Z',
  filter:'M4 5h16M7 12h10M10 19h4',
  grid:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  list:'M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01',
  cc:'M4 5h16a1.6 1.6 0 0 1 1.6 1.6v10.8A1.6 1.6 0 0 1 20 19H4a1.6 1.6 0 0 1-1.6-1.6V6.6A1.6 1.6 0 0 1 4 5Z|M6.6 10.2h4.2M13.2 10.2h4.2M6.6 14h7.4',
  volume:'M11 5 6.5 8.8H3v6.4h3.5L11 19zM15.5 9.2a4 4 0 0 1 0 5.6M18.5 6.5a8 8 0 0 1 0 11',
  mute:'M11 5 6.5 8.8H3v6.4h3.5L11 19zM17 9.5l4.5 5M21.5 9.5 17 14.5',
  fullscreen:'M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3',
  exitfull:'M3 8h3a2 2 0 0 0 2-2V3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M21 16h-3a2 2 0 0 0-2 2v3',
  pip:'M21 11V6.6A1.6 1.6 0 0 0 19.4 5H4.6A1.6 1.6 0 0 0 3 6.6v10.8A1.6 1.6 0 0 0 4.6 19H10M13 13h7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z',
  lock:'M6.5 10.5V7.8a5.5 5.5 0 0 1 11 0v2.7M5.6 10.5h12.8a1.6 1.6 0 0 1 1.6 1.6v7.3a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 19.4v-7.3a1.6 1.6 0 0 1 1.6-1.6Z',
  unlock:'M6.5 10.5V7.8a5.5 5.5 0 0 1 10.6-2M5.6 10.5h12.8a1.6 1.6 0 0 1 1.6 1.6v7.3a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 19.4v-7.3a1.6 1.6 0 0 1 1.6-1.6Z',
  speed:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 12l4-4',
  quality:'M4 6h16v12H4zM8.5 10.5v3M12 10v4M15.5 10.5v3',
  next:'M5 5l9 7-9 7zM18 5v14',
  prev:'M19 5l-9 7 9 7zM6 5v14',
  alert:'M12 8.5v4.5M12 16.5h.01M10.3 3.9 2.6 17.2A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z',
  info:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16v-4.5M12 8h.01',
  checkc:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.5 12l2.5 2.5 4.5-5',
  xc:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM14.8 9.2l-5.6 5.6M9.2 9.2l5.6 5.6',
  wifi:'M2.5 9.5a15 15 0 0 1 19 0M5.5 13a10.5 10.5 0 0 1 13 0M8.5 16.5a6 6 0 0 1 7 0M12 20h.01',
  wifioff:'M2 2l20 20M8.5 16.5a6 6 0 0 1 7 0M12 20h.01M5.5 13a10.5 10.5 0 0 1 4-2.4M2.5 9.5a15 15 0 0 1 5-3.2M14 5.6a15 15 0 0 1 7.5 3.9',
  clock:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3.2 2',
  trash:'M4 7h16M9.5 7V5.2A1.2 1.2 0 0 1 10.7 4h2.6a1.2 1.2 0 0 1 1.2 1.2V7M6.5 7l.9 12.1A1.6 1.6 0 0 0 9 20.6h6a1.6 1.6 0 0 0 1.6-1.5L17.5 7',
  edit:'M4 20h4L19 9a2.4 2.4 0 0 0-3.4-3.4L4.5 16.7 4 20Z',
  share:'M4 12v7.4A1.6 1.6 0 0 0 5.6 21h12.8a1.6 1.6 0 0 0 1.6-1.6V12M12 15V3M8 7l4-4 4 4',
  card:'M3 8.5h18M4.6 5h14.8A1.6 1.6 0 0 1 21 6.6v10.8a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 17.4V6.6A1.6 1.6 0 0 1 4.6 5Z',
  shield:'M12 21s7.5-3.4 7.5-9V6L12 3 4.5 6v6c0 5.6 7.5 9 7.5 9Z',
  devices:'M3.5 5.5h11a1 1 0 0 1 1 1V9M3.5 5.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H10M17.5 9h3a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z',
  help:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9.6 9.5a2.5 2.5 0 0 1 4.85.8c0 1.7-2.45 2.5-2.45 2.5M12 17h.01',
  ticket:'M4 8.5V6.6A1.6 1.6 0 0 1 5.6 5h12.8A1.6 1.6 0 0 1 20 6.6v1.9a2.4 2.4 0 0 0 0 7v1.9a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 17.4v-1.9a2.4 2.4 0 0 0 0-7ZM11 9v6',
  logout:'M9 21H5.6A1.6 1.6 0 0 1 4 19.4V4.6A1.6 1.6 0 0 1 5.6 3H9M16 16l5-4-5-4M21 12H9',
  globe:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.2 10h17.6M3.2 14h17.6M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',
  folder:'M3 7.5A1.5 1.5 0 0 1 4.5 6h4l2 2.5h9a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5Z',
  film:'M4.6 4h14.8A1.6 1.6 0 0 1 21 5.6v12.8a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 18.4V5.6A1.6 1.6 0 0 1 4.6 4ZM7.5 4v16M16.5 4v16M3 9.5h4.5M3 14.5h4.5M16.5 9.5H21M16.5 14.5H21',
  layers:'m12 3 9 5-9 5-9-5 9-5ZM3 16l9 5 9-5M3 12l9 5 9-5',
  chart:'M4 20V10M10 20V4M16 20v-7M22 20H2',
  users:'M16 20v-1.6c0-2.2-2.4-3.4-5.5-3.4S5 16.2 5 18.4V20M10.5 12a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM19 20v-1.5c0-1.7-1.2-2.8-3-3.2M16 5a3.6 3.6 0 0 1 0 6.9',
  db:'M12 8.5c4.4 0 8-1.2 8-2.75S16.4 3 12 3 4 4.2 4 5.75 7.6 8.5 12 8.5ZM4 5.75v12.5C4 19.8 7.6 21 12 21s8-1.2 8-2.75V5.75M4 12c0 1.55 3.6 2.75 8 2.75s8-1.2 8-2.75',
  cloud:'M17.5 19a4.5 4.5 0 0 0 .5-8.97A6.5 6.5 0 0 0 5.2 11.2 3.9 3.9 0 0 0 6 19h11.5Z',
  upload:'M12 16V4M7.5 8.5 12 4l4.5 4.5M4 20h16',
  key:'M15.5 14a5.5 5.5 0 1 0-4.6-2.5L3 19.4V21h3l1.3-1.3v-2h2v-2h2l1.3-1.3a5.5 5.5 0 0 0 2.9.6ZM17 8.5h.01',
  mic:'M12 15a3.5 3.5 0 0 0 3.5-3.5v-5a3.5 3.5 0 0 0-7 0v5A3.5 3.5 0 0 0 12 15ZM5 11.5a7 7 0 0 0 14 0M12 15v6M9 21h6',
  eye:'M12 5c5.5 0 9.5 7 9.5 7s-4 7-9.5 7-9.5-7-9.5-7 4-7 9.5-7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  eyeoff:'M3 3l18 18M10.6 6.3A9.6 9.6 0 0 1 12 6c5.5 0 9.5 6 9.5 6a17 17 0 0 1-3.2 3.8M6.6 8.2A17 17 0 0 0 2.5 12s4 6 9.5 6a9 9 0 0 0 3.5-.7M9.9 9.9a3 3 0 0 0 4.2 4.2',
  refresh:'M20 11a8 8 0 0 0-13.7-5L3 9M4 13a8 8 0 0 0 13.7 5L21 15M3 5v4h4M21 19v-4h-4',
  more:'M12 6.5h.01M12 12h.01M12 17.5h.01',
  moreH:'M6.5 12h.01M12 12h.01M17.5 12h.01',
  sparkle:'M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3Z',
  waveform:'M3 12h2M7 8v8M11 5v14M15 9v6M19 11.5v1M21.5 12h.5',
  scissors:'M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8.7 9.8 20 19M20 5 8.7 14.2',
  merge:'M8 3v6.5c0 1.4 1.1 2.5 2.5 2.5h3c1.4 0 2.5 1.1 2.5 2.5V21M8 3 5 6M8 3l3 3M16 21l-3-3M16 21l3-3',
  bolt:'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
  calendar:'M4.6 5.5h14.8A1.6 1.6 0 0 1 21 7.1v12.3a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 19.4V7.1a1.6 1.6 0 0 1 1.6-1.6ZM3 10.5h18M8 3v5M16 3v5',
  paperclip:'M20 11.5 12 19.5a5 5 0 0 1-7-7l8.5-8.5a3.4 3.4 0 0 1 4.8 4.8L9.7 17.4a1.8 1.8 0 1 1-2.5-2.5l7.8-7.8',
  send:'M21 3 10.5 13.5M21 3l-6.5 18-4-8-8-4L21 3Z',
  storage:'M4.6 4h14.8A1.6 1.6 0 0 1 21 5.6v3.2a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 8.8V5.6A1.6 1.6 0 0 1 4.6 4ZM4.6 13.6h14.8a1.6 1.6 0 0 1 1.6 1.6v3.2a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 18.4v-3.2a1.6 1.6 0 0 1 1.6-1.6ZM7 7h.01M7 17h.01',
  drag:'M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01',
  apple:'M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9s-2.1-.9-3.4-.9c-1.8 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.2 2.6 1.3-.05 1.8-.83 3.4-.83s2 .83 3.4.8c1.4 0 2.3-1.3 3.2-2.6 1-1.5 1.4-2.9 1.4-3-.03 0-2.7-1-2.7-4.1ZM13.9 4.9c.7-.85 1.2-2 1-3.2-1 .04-2.3.7-3 1.5-.65.75-1.2 1.9-1.1 3.1 1.1.08 2.3-.6 3.1-1.4Z',
  google:'M21.4 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.3a4.5 4.5 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4ZM12 21.5c2.7 0 5-.9 6.6-2.4l-3.2-2.5a6 6 0 0 1-9-3.1H3v2.6A10 10 0 0 0 12 21.5ZM6.4 13.5a6 6 0 0 1 0-3.8V7.1H3a10 10 0 0 0 0 9L6.4 13.5ZM12 6.3c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3 7.1l3.4 2.6A6 6 0 0 1 12 6.3Z'
};

function ic(name, size, sw) {
  var d = DSI[name];
  if (!d) return '';
  size = size || 20; sw = sw || 1.7;
  var paths = d.split('|').map(function (p) { return '<path d="' + p + '"/>'; }).join('');
  var solid = (name === 'play' || name === 'next' || name === 'prev' || name === 'star' || name === 'apple' || name === 'google' || name === 'bolt');
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + (solid ? 'currentColor' : 'none') +
    '" stroke="' + (solid ? 'none' : 'currentColor') + '" stroke-width="' + sw +
    '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
}

/* ---------- Procedural artwork engine ----------
   Deterministic per-title. No third-party imagery, so the whole
   catalogue is copyright-clean and visually one family.        */
function dsHash(s) {
  var h = 2166136261;
  for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0);
}
var DS_PAL = [
  ['#1B2E5A', '#3E63A8', '#070D1E'], ['#16324F', '#2F6C96', '#060F1C'],
  ['#232A5E', '#4A54B0', '#0A0C22'], ['#12384A', '#2A7590', '#061520'],
  ['#2E2260', '#5B47B8', '#0C0A24'], ['#1A4A55', '#357F92', '#07181C'],
  ['#1E2649', '#455495', '#080C1C'], ['#0F3A44', '#25798A', '#05161A'],
  ['#3A2160', '#6E44B0', '#100A22'], ['#142744', '#33588F', '#060E1E'],
  ['#4A2440', '#96487E', '#1A0A18'], ['#4A3520', '#96693A', '#1A1006']
];
function dsArt(seed, opts) {
  opts = opts || {};
  var h = dsHash(seed);
  var p = DS_PAL[h % DS_PAL.length];
  var a = (h >> 4) % 360, x1 = 12 + ((h >> 7) % 70), y1 = 8 + ((h >> 11) % 50);
  var x2 = 25 + ((h >> 13) % 60), y2 = 45 + ((h >> 17) % 45);
  var rot = ((h >> 19) % 60) - 30;
  return '' +
    '<div class="ds-art__grad" style="background:' +
      'radial-gradient(60% 46% at ' + x1 + '% ' + y1 + '%, ' + p[1] + 'DD 0%, transparent 62%),' +
      'radial-gradient(52% 40% at ' + x2 + '% ' + y2 + '%, ' + p[0] + 'EE 0%, transparent 66%),' +
      'linear-gradient(' + a + 'deg, ' + p[2] + ' 0%, ' + p[0] + ' 55%, ' + p[2] + ' 100%)' +
    '"></div>' +
    '<div class="ds-art__grad" style="opacity:.5;background:' +
      'conic-gradient(from ' + rot + 'deg at 50% 62%, transparent 0deg, ' + p[1] + '55 40deg, transparent 90deg, transparent 250deg, ' + p[1] + '44 300deg, transparent 340deg)' +
    '"></div>';
}
/* Render a poster/backdrop tile */
function art(seed, cls, style, title, titleSize) {
  return '<div class="ds-art ' + (cls || '') + '" style="' + (style || '') + '">' +
    dsArt(seed) + '<div class="ds-art__vig"></div>' +
    (title ? '<div class="ds-art__title" style="font-size:' + (titleSize || 15) + 'px">' + title + '</div>' : '') +
    '</div>';
}

/* ---------- Catalogue ---------- */
var CAT = [
  { t:'Тихий рассвет',      o:'Quiet Dawn',        y:2025, d:'2 ч 08 мин', g:'Драма · Триллер', r:8.4, age:'16+', c:'Россия',  q:['4K'], cc:'ccplus', dl:1, plan:'vip',  ad:1 },
  { t:'Северный маршрут',   o:'Northern Route',    y:2024, d:'1 ч 54 мин', g:'Приключения',     r:7.9, age:'12+', c:'Норвегия',q:['4K'], cc:'ccplus', dl:1, plan:'vip' },
  { t:'Глубина',            o:'The Deep',          y:2023, d:'2 ч 21 мин', g:'Фантастика',      r:8.1, age:'16+', c:'США',     q:['4K'], cc:'cc',     dl:1, plan:'vip' },
  { t:'Письма из Гаваны',   o:'Letters from Havana',y:2025,d:'1 ч 47 мин', g:'Мелодрама',       r:7.6, age:'16+', c:'Куба',    q:[],     cc:'ccplus', dl:1, plan:'vip' },
  { t:'Стеклянный дом',     o:'Glass House',       y:2024, d:'1 ч 39 мин', g:'Триллер',         r:7.2, age:'18+', c:'Дания',   q:['4K'], cc:'cc',     dl:1, plan:'vip' },
  { t:'Хроника одного дня', o:'One Day Chronicle', y:2022, d:'2 ч 32 мин', g:'Документальный',  r:8.8, age:'12+', c:'Россия',  q:[],     cc:'ccplus', dl:1, plan:'vip' },
  { t:'Пепел и снег',       o:'Ash and Snow',      y:2025, d:'2 ч 04 мин', g:'Драма',           r:8.6, age:'16+', c:'Исландия',q:['4K'], cc:'ccplus', dl:1, plan:'vip',  ad:1 },
  { t:'Между нами город',   o:'A City Between Us', y:2024, d:'1 ч 58 мин', g:'Драма',    r:8.2, age:'18+', c:'Франция', q:['4K'], cc:'ccplus', dl:1, plan:'vip' },
  { t:'Полярная станция',   o:'Polar Station',     y:2023, d:'1 ч 44 мин', g:'Триллер',         r:7.4, age:'16+', c:'Канада',  q:[],     cc:'cc',     dl:0, plan:'vip' },
  { t:'Год тишины',         o:'The Silent Year',   y:2025, d:'2 ч 12 мин', g:'Драма',           r:9.0, age:'16+', c:'Россия',  q:['4K'], cc:'ccplus', dl:1, plan:'vip',  ad:1 },
  { t:'Операция «Восход»',  o:'Operation Sunrise', y:2024, d:'2 ч 26 мин', g:'История',         r:8.3, age:'16+', c:'Польша',  q:['4K'], cc:'ccplus', dl:1, plan:'vip' },
  { t:'Красная линия',      o:'The Red Line',      y:2022, d:'1 ч 51 мин', g:'Криминал',        r:7.7, age:'18+', c:'Италия',  q:[],     cc:'cc',     dl:1, plan:'vip' },
  { t:'Двое на побережье',  o:'Two on the Shore',  y:2025, d:'1 ч 36 мин', g:'Мелодрама',r:8.0, age:'16+', c:'Испания', q:['4K'], cc:'ccplus', dl:1, plan:'vip' },
  { t:'Последний рейс',     o:'The Last Flight',   y:2023, d:'2 ч 03 мин', g:'Драма',           r:7.8, age:'12+', c:'Германия',q:[],     cc:'cc',     dl:1, plan:'vip' },
  { t:'Свидетели',          o:'The Witnesses',     y:2024, d:'1 ч 49 мин', g:'Документальный',  r:8.5, age:'16+', c:'Украина', q:['4K'], cc:'ccplus', dl:1, plan:'vip' },
  { t:'Отражение',          o:'Reflection',        y:2025, d:'1 ч 42 мин', g:'Триллер',         r:7.5, age:'16+', c:'Япония',  q:['4K'], cc:'cc',     dl:1, plan:'vip' },
  { t:'Тёплый ветер',       o:'Warm Wind',         y:2023, d:'1 ч 33 мин', g:'Комедия',         r:7.1, age:'12+', c:'Грузия',  q:[],     cc:'ccplus', dl:1, plan:'vip' },
  { t:'Городские огни',     o:'City Lights',       y:2024, d:'2 ч 15 мин', g:'Драма',    r:8.4, age:'18+', c:'Бразилия',q:['4K'], cc:'ccplus', dl:1, plan:'vip' },
  { t:'Территория льда',    o:'Territory of Ice',  y:2022, d:'2 ч 41 мин', g:'Приключения',     r:8.7, age:'12+', c:'Россия',  q:['4K'], cc:'ccplus', dl:1, plan:'vip' },
  { t:'Ночная смена',       o:'Night Shift',       y:2025, d:'1 ч 28 мин', g:'Триллер',         r:7.3, age:'18+', c:'Корея',   q:[],     cc:'cc',     dl:1, plan:'vip' }
];
function M(i) { return CAT[i % CAT.length]; }

/* Badge markup for a title */
function badges(m, opts) {
  opts = opts || {};
  var out = [];
  if (m.cc === 'ccplus') out.push('<span class="ds-badge ds-badge--ccplus">CC+</span>');
  else if (m.cc === 'cc') out.push('<span class="ds-badge ds-badge--cc">CC</span>');
  if (m.q.indexOf('4K') > -1) out.push('<span class="ds-badge ds-badge--4k">4K</span>');
  else if (!opts.noHd) out.push('<span class="ds-badge ds-badge--hd">HD</span>');
  if (opts.offline && m.dl) out.push('<span class="ds-badge ds-badge--offline">' + ic('download', 9, 2.6) + ' OFFLINE</span>');
  if (opts.ad && m.ad) out.push('<span class="ds-badge ds-badge--ad">AD</span>');
  return out.join('');
}
function stars(r) {
  return '<span class="ds-row-f ds-g1" style="color:var(--ds-blue)">' + ic('star', 11) +
    '<span class="ds-num" style="color:var(--ds-ink-2);font-size:11px">' + r.toFixed(1) + '</span></span>';
}

/* ---------- Subscription plans — shared by every surface ---------- */
/* The one subscription. Recurring monthly, identical access for everyone. */
var PLANS = {
  vip: {
    id: 'vip', name: 'ВИП', price: 500, color: 'var(--ds-vip)', hex: '#FFC24B',
    tag: 'Полный доступ',
    desc: 'Одна подписка на весь deafsuslik. Никаких уровней и доплат — у всех одинаковый доступ.',
    feats: [
      'Весь каталог — 1 204 фильма',
      'Все коллекции, включая «Реальные события»',
      'Качество до 4K UHD',
      'Скачивание и просмотр офлайн',
      'CC и CC+ на всём каталоге',
      'Тифлокомментарий (AD), где доступен',
      'До 5 устройств одновременно',
      'Без рекламы'
    ]
  }
};
var VIP = PLANS.vip;
