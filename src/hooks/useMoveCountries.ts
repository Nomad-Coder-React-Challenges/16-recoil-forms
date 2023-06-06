import {
  WishListState,
  VisitedListState,
  LikedListState,
} from '#src/stores/countryStateStore';
import { useSetRecoilState } from 'recoil';

export type MoveActionProps = 'delete' | 'check' | 'good' | 'yet' | 'bad';

const useMoveCountries = () => {
  const setWishList = useSetRecoilState(WishListState);
  const setVisitedList = useSetRecoilState(VisitedListState);
  const setLikedList = useSetRecoilState(LikedListState);

  const handleMoveCountries = (action: MoveActionProps, country: string) => {
    switch (action) {
      case 'delete':
        setWishList((prev) => prev.filter((item) => item !== country));
        break;
      case 'check':
        setWishList((prev) => prev.filter((item) => item !== country));
        setVisitedList((prev) =>
          prev.includes(country) ? prev : [...prev, country],
        );
        break;
      case 'good':
        setVisitedList((prev) => prev.filter((item) => item !== country));
        setLikedList((prev) =>
          prev.includes(country) ? prev : [...prev, country],
        );
        break;
      case 'yet':
        setVisitedList((prev) => prev.filter((item) => item !== country));
        setWishList((prev) =>
          prev.includes(country) ? prev : [...prev, country],
        );
        break;
      case 'bad':
        setLikedList((prev) => prev.filter((item) => item !== country));
        setVisitedList((prev) =>
          prev.includes(country) ? prev : [...prev, country],
        );
        break;
      default:
        break;
    }
  };

  return {
    onMoveCountries: handleMoveCountries,
  };
};

export default useMoveCountries;
