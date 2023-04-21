import { colors } from '../utilities';

export const Card = ({ idx, char, textArray, deleteDuplicateLetter }) => {
  return (
    <div
      style={{ backgroundColor: colors[char] }}
      className='rounded-lg flex items-center justify-center w-14 h-14 relative'
    >
      <p className='text-black leading-none font-bold md:text-xl'>{char}</p>
      {textArray.filter(item => item === char).length > 1 && (
        <div
          className='bg-black h-8 w-8 flex items-center justify-center rounded-full cursor-pointer absolute top-[-16px] right-[-16px]'
          onClick={() => deleteDuplicateLetter(idx)}
        >
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            strokeWidth='4'
            stroke='#dc2626'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </div>
      )}
    </div>
  );
};
