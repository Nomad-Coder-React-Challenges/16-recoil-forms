import { Button } from '#components/atoms';
import { ButtonContainer, Container, Name } from './Country.styled';
import { TitleProps } from '../CountryList';
import useMoveCountries, { MoveActionProps } from '#hooks/useMoveCountries';

interface CountryProps {
  title: TitleProps;
  list: string;
}

const Country = ({ title, list }: CountryProps) => {
  const { onMoveCountries } = useMoveCountries();

  const handleMoveCountries = (type: MoveActionProps) => () => {
    onMoveCountries(type, list);
  };

  return (
    <Container id={list}>
      <Name>{list}</Name>
      {title === '가고 싶은 나라들' && (
        <ButtonContainer>
          <Button
            text='🗑️'
            size='sm'
            isRound
            color='text'
            onClick={handleMoveCountries('delete')}
          />
          <Button
            text='✅'
            size='sm'
            isRound
            color='text'
            onClick={handleMoveCountries('check')}
          />
        </ButtonContainer>
      )}
      {title === '가봤던 나라들' && (
        <ButtonContainer>
          <Button
            text='🤚'
            size='sm'
            isRound
            color='text'
            onClick={handleMoveCountries('yet')}
          />
          <Button
            text='👍'
            size='sm'
            isRound
            color='text'
            onClick={handleMoveCountries('good')}
          />
        </ButtonContainer>
      )}
      {title === '좋았던 나라들' && (
        <Button
          text='👎'
          size='sm'
          isRound
          color='text'
          onClick={handleMoveCountries('bad')}
        />
      )}
    </Container>
  );
};

export default Country;
