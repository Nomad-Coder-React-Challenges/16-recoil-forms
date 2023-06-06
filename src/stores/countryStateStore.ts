import { atom, AtomEffect } from 'recoil';

export type CountryListType = string[];

// persist
const countryLocalStorageEffect: AtomEffect<CountryListType> = ({
  setSelf,
  onSet,
  node,
}) => {
  if (typeof window !== 'undefined') {
    const savedValue = window.localStorage.getItem(node.key);
    if (
      savedValue !== null &&
      savedValue !== 'null' &&
      JSON.parse(savedValue)
    ) {
      setSelf(JSON.parse(savedValue));
    }
  }

  onSet((newValue) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(node.key, JSON.stringify(newValue));
    }
  });
};

export const WishListState = atom<CountryListType>({
  key: 'WishListState',
  default: [],
  effects: [countryLocalStorageEffect],
});

export const VisitedListState = atom<CountryListType>({
  key: 'VisitedListState',
  default: [],
  effects: [countryLocalStorageEffect],
});

export const LikedListState = atom<CountryListType>({
  key: 'LikedListState',
  default: [],
  effects: [countryLocalStorageEffect],
});
