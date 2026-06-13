import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const assetsDir = path.join(rootDir, 'src/assets/cards');
const manifestPath = path.join(rootDir, 'src/assets/data/cards-manifest.json');

const sectionKeyByName = (filename) => {
  const upper = filename.toUpperCase();
  if (upper.includes('ACE TRAINER')) return 'aceTrainer';
  if (upper.includes('MOMENT')) return 'moment';
  if (upper.includes('FULL ART')) return 'fullArt';
  return 'standard';
};

const sectionLabel = {
  standard: 'Standard',
  fullArt: 'Full Art',
  moment: 'Moment',
  aceTrainer: 'Ace Trainer'
};

const relationAliases = {
  BASE: 'base',
  BONUS: 'bonus',
  LIMITED: 'limited',
  PROMO: 'bonus'
};

const setMetadataBySet = {
  'set-1': { code: 'PPS', title: 'Pokepeeps Start!' },
  'set-2': { code: 'SBS', title: 'Serious Business' },
  'set-3': { code: 'FFA', title: 'Friends From Afar' },
  'set-3.5': { code: 'VTY', title: 'Café Verity' }
};

const themeBySet = {
  'set-1': { accent: '#3a86ff', accentSoft: 'rgba(58, 134, 255, 0.14)', glow: 'rgba(58, 134, 255, 0.42)' },
  'set-2': { accent: '#4f46e5', accentSoft: 'rgba(79, 70, 229, 0.14)', glow: 'rgba(79, 70, 229, 0.42)' },
  'set-3': { accent: '#38bdf8', accentSoft: 'rgba(56, 189, 248, 0.14)', glow: 'rgba(56, 189, 248, 0.42)' },
  'set-3.5': { accent: '#c08552', accentSoft: 'rgba(192, 133, 82, 0.14)', glow: 'rgba(192, 133, 82, 0.42)' }
};

const normalizeName = (value) =>
  value
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const normalizeCardType = (token, artLevelToken) => {
  if (token === 'ACE TRAINER') return 'ace trainer';
  if (token === 'MOMENT') return 'moment';
  return artLevelToken === 'FULL ART' ? 'full art' : 'standard';
};

const normalizeArtLevel = (token) => (token === 'FULL ART' ? 'full art' : 'standard');

const parseCardFile = (file) => {
  const stem = file.replace(/\.avif$/i, '');
  const tokens = stem.split('_');
  const setNumber = tokens[0] ?? '';
  const typeOrDexToken = tokens[1] ?? '';
  const name = normalizeName(tokens[2] ?? '');
  const artLevelToken = tokens[3] ?? '';
  const relationToken = tokens[4]?.toUpperCase() ?? 'SET';
  const artistToken = tokens[5] ?? null;
  const specialType = typeOrDexToken === 'ACE TRAINER' || typeOrDexToken === 'MOMENT';

  const cardType = normalizeCardType(typeOrDexToken, artLevelToken);
  const artLevel = normalizeArtLevel(artLevelToken);
  const pokedexNumber = specialType ? null : typeOrDexToken;
  const hasExplicitRelation = relationToken in relationAliases;
  const artist = artistToken
    ? normalizeName(artistToken.replace(/^BASE\s+/i, ''))
    : null;

  return {
    setNumber,
    cardType,
    pokedexNumber,
    artLevel,
    name,
    setRelation: hasExplicitRelation ? relationAliases[relationToken] : 'base',
    artist
  };
};

const setDirs = fs
  .readdirSync(assetsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

const manifest = {
  sets: setDirs.map((set) => {
    const files = fs
      .readdirSync(path.join(assetsDir, set))
      .filter((file) => file.endsWith('.avif'))
      .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

    const cards = {
      standard: [],
      fullArt: [],
      moment: [],
      aceTrainer: []
    };

    for (const file of files) {
      const key = sectionKeyByName(file);
      const card = parseCardFile(file);
      cards[key].push({
        ...card,
        src: `assets/cards/${set}/${file}`,
        alt: `${card.name} - ${sectionLabel[key]} card from ${set}`
      });
    }

    const theme = themeBySet[set] ?? {
      accent: '#f8ff6a',
      accentSoft: 'rgba(248,255,106,0.14)',
      glow: 'rgba(248,255,106,0.42)'
    };
    const metadata = setMetadataBySet[set] ?? {
      code: set.toUpperCase(),
      title: `Set ${set.replace('set-', '')}`
    };

    return {
      id: set,
      code: metadata.code,
      title: metadata.title,
      slug: set,
      accent: theme.accent,
      accentSoft: theme.accentSoft,
      glow: theme.glow,
      cards
    };
  })
};

fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
