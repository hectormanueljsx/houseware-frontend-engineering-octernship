import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Title } from '../components';
import { validator } from '../utilities';

export const HomePage = () => {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    if (validator(text).error) {
      toast.error(validator(text).message);
      return;
    }

    navigate(`/checker/${text}`);
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='max-w-xl w-[90%] mx-auto'>
        <Title />

        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <input
            className='rounded-lg px-3 py-2 outline-none font-medium text-slate-800'
            type='text'
            value={text}
            onChange={event => setText(event.target.value.toLowerCase())}
            placeholder='aabcaccda'
            autoFocus
          />

          <input
            className='bg-teal-600 text-white rounded-lg px-3 py-2 outline-none font-semibold max-w-[320px] w-[50%] mx-auto cursor-pointer transition-all hover:bg-teal-700'
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    </div>
  );
};
