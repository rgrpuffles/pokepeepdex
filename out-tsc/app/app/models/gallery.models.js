export const cardSections = [
    { key: 'standard', label: 'Standard' },
    { key: 'fullArt', label: 'Full Art' },
    { key: 'moment', label: 'Moment' },
    { key: 'aceTrainer', label: 'Ace Trainer' }
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
