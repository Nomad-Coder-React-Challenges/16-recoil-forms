import { Input } from '#components/atoms';
import { IconError } from '#components/atoms/svgs';
import { ErrorMessage, Form } from './CountryForm.styled';
import { WishListState } from '#src/stores/countryStateStore';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { useTheme } from 'styled-components';
import { Button } from '#components/atoms';

interface FormProps {
  country: string;
}

const CountryForm = () => {
  const theme = useTheme();
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const { register, handleSubmit, reset, watch } = useForm<FormProps>();
  const { country } = watch();
  const [wishList, setWishList] = useRecoilState(WishListState);

  const onSubmit: SubmitHandler<FormProps> = (data: { country: string }) => {
    if (wishList.includes(data.country)) {
      setErrorMessage('이미 추가된 나라입니다.');
      return;
    }
    setWishList([...wishList, data.country]);
    reset({ country: '' });
  };

  const onError: SubmitErrorHandler<FormProps> = (error) => {
    if (error?.country) {
      setErrorMessage(error?.country?.message);
    }
  };

  useEffect(() => {
    country !== '' && setErrorMessage('');
  }, [country]);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        width={'100%'}
        placeholder='나라 이름'
        {...register('country', { required: '나라 이름을 입력해주세요.' })}
      />
      {errorMessage && (
        <ErrorMessage>
          <IconError width={16} height={16} stroke={theme.colors.error[500]} />
          {errorMessage}
        </ErrorMessage>
      )}
      <Button text='추가하기' width={'100%'} type='submit' />
    </Form>
  );
};

export default CountryForm;
