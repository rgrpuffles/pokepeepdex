export const cardSections = [
    { key: 'standard', label: 'Standard', subtitle: 'Core pulls and everyday favorites.' },
    { key: 'fullArt', label: 'Full Art', subtitle: 'Big, bold illustration cards.' },
    { key: 'moment', label: 'Moment', subtitle: 'Scene cards with a little story sparkle.' },
    { key: 'aceTrainer', label: 'Ace Trainer', subtitle: 'Trainer spotlights and duo cards.' }
];
export const defaultSetId = 'set-1';
export const emptyGallerySet = {
    id: defaultSetId,
    title: 'Loading set...',
    slug: defaultSetId,
    accent: '#ffb347',
    accentSoft: 'rgba(255, 179, 71, 0.14)',
    glow: 'rgba(255, 179, 71, 0.42)',
    cards: {
        standard: [],
        fullArt: [],
        moment: [],
        aceTrainer: []
    }
};
