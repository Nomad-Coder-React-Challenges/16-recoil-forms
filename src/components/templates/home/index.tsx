import { Title, Wrapper } from './home.styled';
import {
  LikedListState,
  VisitedListState,
  WishListState,
} from '#src/stores/countryStateStore';
import CountryList from '#components/blocks/CountryList';
import CountryForm from '#components/blocks/CountryForm';

const HomePageTemplate = () => {
  return (
    <Wrapper>
      <Title>나의 여행</Title>
      <CountryForm />
      <CountryList title='가고 싶은 나라들' contries={WishListState} />
      <CountryList title='가봤던 나라들' contries={VisitedListState} />
      <CountryList title='좋았던 나라들' contries={LikedListState} />
    </Wrapper>
  );
};

export default HomePageTemplate;
