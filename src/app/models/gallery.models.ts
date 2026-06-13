export type CardSectionKey = 'standard' | 'fullArt' | 'moment' | 'aceTrainer';
export type CardType = 'standard' | 'full art' | 'moment' | 'ace trainer';
export type ArtLevel = 'standard' | 'full art';
export type SetRelation = 'base' | 'bonus' | 'limited';

export interface GalleryCard {
  readonly setNumber: string;
  readonly cardType: CardType;
  readonly pokedexNumber: string | null;
  readonly artLevel: ArtLevel;
  readonly name: string;
  readonly setRelation: SetRelation;
  readonly artist: string | null;
  readonly src: string;
  readonly alt: string;
}

export interface GallerySet {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly slug: string;
  readonly accent: string;
  readonly accentSoft: string;
  readonly glow: string;
  readonly packPath: string;
  readonly cards: Record<CardSectionKey, GalleryCard[]>;
}

export interface GalleryManifest {
  readonly sets: GallerySet[];
}

export const cardSections: Array<{ key: CardSectionKey; label: string }> = [
  { key: 'standard', label: 'Standard' },
  { key: 'fullArt', label: 'Full Art' },
  { key: 'moment', label: 'Moment' },
  { key: 'aceTrainer', label: 'Ace Trainer' }
];

export const defaultSetId = 'set-1';

export const emptyGallerySet: GallerySet = {
  id: defaultSetId,
  code: 'PPS',
  title: 'Loading set...',
  slug: defaultSetId,
  accent: '#3a86ff',
  accentSoft: 'rgba(58, 134, 255, 0.14)',
  glow: 'rgba(58, 134, 255, 0.42)',
  packPath: '',
  cards: {
    standard: [],
    fullArt: [],
    moment: [],
    aceTrainer: []
  }
};
