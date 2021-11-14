import {useState} from 'react';
import {CityAnswer} from '../types/user-action';

type AnserCallback = (city: string) => void;

export const useCityAnswer = ({answer}: CityAnswer): AnserCallback => {
  const [city, setCity] = useState<string>();

  const handleAnswerChange = () => {
    (city !== answer) && setCity(answer);
  };

  return handleAnswerChange;
};
