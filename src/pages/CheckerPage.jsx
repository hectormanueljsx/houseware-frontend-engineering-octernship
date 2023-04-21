import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Card, Title } from '../components';

export const CheckerPage = () => {
  const { text } = useParams();
  const navigate = useNavigate();

  const [textArray, setTextArray] = useState([...text]);

  const commonStyles = 'text-center text-slate-200 font-semibold sm:text-lg md:text-xl lg:text-2xl transition-all';

  const deleteDuplicateLetter = idx => {
    const letter = textArray[idx];

    textArray.forEach((item, index) => {
      if (item === letter && index !== idx) {
        textArray[index] = '';
      }

      setTextArray([...textArray].filter(item => item !== ''));
    });
  };

  const checkDuplicateLetter = () => {
    const duplicateLetters = textArray.filter((item, idx) => textArray.indexOf(item) !== idx);

    if (duplicateLetters.length === 0) {
      setTimeout(() => {
        toast.success('Yes, ¡You have removed all duplicate letters! 🎉🎉');

        setTimeout(() => {
          navigate('/');
        }, 4500);
      }, 500);
    }
  };

  useEffect(() => {
    checkDuplicateLetter();
  }, [textArray]);

  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center py-8'>
        <div className='max-w-xl w-[90%] mx-auto'>
          <Title />

          <h3 className={`${commonStyles} mb-2`}>
            Input: <span className='font-normal'>{text}</span>
          </h3>
          <h3 className={commonStyles}>
            Output: <span className='font-normal'>{textArray}</span>
          </h3>

          <div className='flex justify-center flex-wrap gap-7 mt-8'>
            {textArray.length > 0 &&
              textArray.map((item, idx) => (
                <Card
                  key={idx}
                  idx={idx}
                  char={item}
                  textArray={textArray}
                  deleteDuplicateLetter={deleteDuplicateLetter}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
