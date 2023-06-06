import { RecoilState, useRecoilValue } from 'recoil';
import { CountryListType } from '#src/stores/countryStateStore';
import Country from '../Country';
import { Wrapper, Title, ListContainer, NotYet } from './CountryList.styled';

export type TitleProps = '가고 싶은 나라들' | '가봤던 나라들' | '좋았던 나라들';

interface CountryListProps {
  title: TitleProps;
  contries: RecoilState<CountryListType>;
}

const CountryList = ({ title, contries }: CountryListProps) => {
  const list = useRecoilValue(contries);
  return (
    <Wrapper>
      <Title>{title}</Title>
      {list.length > 0 ? (
        <ListContainer>
          {list.map((list, index) => (
            <Country title={title} list={list} key={index} />
          ))}
        </ListContainer>
      ) : (
        <NotYet>아직 없어요 🥲</NotYet>
      )}
    </Wrapper>
  );
};

export default CountryList;
