export const SITE = {
  email: 'hello@thegorillapress.com',
  region: 'Oregon',
  responsePromise: '',
  phone: '',
  address: '',
  visits: 'By appointment',
};

export const NAV = [
  ['/labels', 'Labels'],
  ['/cannabis', 'Cannabis'],
  ['/materials', 'Materials'],
  ['/file-prep', 'File Prep'],
  ['/about', 'About'],
];

export const PROCESS = [
  ['01', 'Intake', 'We collect size, quantity, versions, material, deadline, and application details.'],
  ['02', 'Preflight', 'We check bleed, resolution, color mode, fonts, cut paths, and specialty layers.'],
  ['03', 'Estimate', 'You receive a written quote with the assumptions that affect price and timing.'],
  ['04', 'Proof', 'You approve artwork and production details in writing before printing begins.'],
  ['05', 'Test', 'New materials, surfaces, or effects receive a small production test first.'],
  ['06', 'Produce', 'We print, cut, finish, sort, count, and pack by version.'],
  ['07', 'QC + deliver', 'Finished work is checked against the approved proof and prepared for pickup or shipping.'],
];

export const MATERIALS = [
  {
    name: 'White film',
    look: 'Opaque, clean, versatile',
    best: 'General product labels, stickers, and decals',
    avoid: 'When a transparent no-label look is the goal',
    moisture: 'Good when the selected stock is rated for the application',
    effects: 'Gloss and contour cutting',
  },
  {
    name: 'Clear film',
    look: 'Transparent, premium, minimal',
    best: 'Glass and clear packaging',
    avoid: 'Surfaces where bubbles, dust, or alignment will be highly visible',
    moisture: 'Depends on the specific tested stock and adhesive',
    effects: 'White underbase, spot white, gloss, contour cutting',
  },
  {
    name: 'Matte white film',
    look: 'Low glare, soft, understated',
    best: 'Photography-heavy artwork and premium matte finishes',
    avoid: 'Applications where maximum gloss and reflectivity are required',
    moisture: 'Depends on the specific tested stock and adhesive',
    effects: 'High-contrast selective gloss and contour cutting',
  },
];

export const JOBS = [
  ['250', 'Concentrate jar labels', '4 strain versions', 'Clear film + white underbase'],
  ['1,000', 'Pre-roll tube labels', '10 SKUs', 'Tight-radius application'],
  ['500', 'Product stickers', '1 design', 'Custom contour cut'],
  ['50', 'Retail launch kits', 'Packed by location', 'Labels + shelf materials'],
];
