import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { Rating } from 'react-simple-star-rating'
import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import type { DatePickerProps } from 'antd';
// import { DatePicker, Space } from 'antd';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'; // Import DatePicker directly from '@mui/x-date-pickers'


interface SkillsEditProps {
  onClose: () => void;
}


const SkillsEdit: React.FC<SkillsEditProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState<number | null>(2);
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
    glad: false,
  });

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  // const [rating, setRating] = useState(0)

  // // Catch Rating value
  // const handleRating = (rate: number) => {
  //   setRating(rate)

  //   // other logic
  // }
  // // Optinal callback functions
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value: number, index: number) => console.log(value, index)

  const handleSkillGroupCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setState({
      ...state,
      [event.target.name]: isChecked,
      gilad: isChecked,
      jason: isChecked,
      antoine: isChecked,
      glad: isChecked,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const ratingChanged = (newRating: number) => { // Explicitly define type for newRating
    console.log(newRating);
  };

  const { gilad, jason, antoine, glad } = state;

  return (
    <div className="p-4 bg-white rounded shadow mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className='d-flex'>
          <button className='text-blue-700 font-semibold'>Add new</button>
          <button
            className="text-gray-500 hover:text-red-500 ml-3"
            onClick={onClose}>
            Remove<i className="fas fa-times ml-2"></i>
          </button>
        </div>
      </div>
      <div className="flex ml-5 mt-5">
        <FormControlLabel
          control={
            <Checkbox checked={gilad} onChange={handleSkillGroupCheckboxChange} name="gilad" />
          }
          label="Skill group/name"
        />
        <p className="text-gray-400 ml-auto">
          Level <i className="fas fa-question-circle text-gray-200"></i>
        </p>
        <p className="text-gray-400 ml-auto mr-5 ">Experience Last</p>
        <p className="text-gray-400 ml-auto mr-5 "> Used</p>
      </div>
      <hr className="ml-5 mt-2 w-full border-t border-gray-200" />
      <div className="flex justify-between items-center mb-4 ml-5">
        <h3 className="text-base font-bold mr-5 mt-5">{t('SystemsDevelopment')}</h3>
      </div>
      <div className="flex ml-5 mt-2">
        <FormControlLabel
          control={
            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
          }
          label="C"
        />



        <p className="text-black-600 ml-auto mr-5">
          {/* <Stack spacing={0}> */}
          <Rating name="half-rating" className='mt-2 ml-20 text-center' defaultValue={0} precision={0.5} />

          {/* </Stack> */}
          {/* <Rating name="no-value" className='mt-2 ml-20' value={null} /> */}
        </p>
        <p className="text-black-600 ml-auto mr-5">

          <button className="border border-gray-300 text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            Years
          </button>
        </p>
        <p className="text-black-600 ml-auto mr-5  ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
              <DatePicker
                label={'2024'}
                views={['year']}
                
                
              />
            </DemoContainer>
          </LocalizationProvider>


          {/* <Space direction="vertical">


            <DatePicker onChange={onChange} picker="year" className='w-20' />
          </Space> */}
          {/* <input type="number" placeholder="YYYY" min="2017" max="2100"/> */}

          {/* <input type="number" placeholder="YYYY" min="1999" max="2020"/> */}
          {/* <input type="year" min="1900" max="2099" step="1" value="2016" /> */}
          {/* <input type='date' /> */}
          {/* <button className="border border-gray-300 text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            2024 <i className="far fa-calendar ml-2 text-blue-700" />
          </button> */}
        </p>
      </div>
      <div className="flex ml-5 mt-2">
        <FormControlLabel
          control={
            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
          }
          label="C#"
        />


        <p className="text-black-600 ml-auto mr-5">
          <Stack spacing={0}>
            <Rating name="half-rating" className='mt-2 ml-20' defaultValue={0} precision={0.5} />

          </Stack>
          {/* <Rating name="no-value" className='mt-2 ml-20' value={null} /> */}
        </p>
        {/* <Rating name="no-value" className='mt-2' value={null} /> */}
        <p className="text-black-600 ml-auto mr-5">
          <button className="border border-gray-300  text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            Years
          </button>
        </p>
        <p className="text-black-600 ml-auto mr-5">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label={'2024'}
                views={['year']}

                
              />
            </DemoContainer>
          </LocalizationProvider>
          {/* <button className="border border-gray-300 text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            2024
            <i className="far fa-calendar ml-2 text-blue-700" />
          </button> */}
        </p>
      </div>
      <div className="flex ml-5 mt-2">
        <FormControlLabel
          control={
            <Checkbox checked={jason} onChange={handleChange} name="jason" />
          }
          label="F#"
        />



        <p className="text-black-600 ml-auto mr-5">
          <Stack spacing={0}>
            <Rating name="half-rating" className='mt-2 ml-20' defaultValue={0} precision={0.5} />

          </Stack>
          {/* <Rating name="no-value" className='mt-2 ml-20' value={null} /> */}
        </p>
        <p className="text-black-600 ml-auto mr-5">
          <button className="border border-gray-300 text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            Years
          </button>
        </p>
        <p className="text-black-600 ml-auto mr-5">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label={'2024'}
                views={['year']}

                
              />
            </DemoContainer>
          </LocalizationProvider>
          {/* <button className="border border-gray-300 text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            2024 <i className="far fa-calendar ml-2 text-blue-700" />
          </button> */}
        </p>
      </div>
      <div className="flex ml-5 mt-2">
        <FormControlLabel
          control={
            <Checkbox checked={glad} onChange={handleChange} name="glad" />
          }
          label="H2"
        />



        <p className="text-black-600 ml-auto mr-5">
          <Stack spacing={0}>
            <Rating name="half-rating" className='mt-2 ml-20' defaultValue={0} precision={0.5} />

          </Stack>
          {/* <Rating name="no-value" className='mt-2 ml-20' value={null} /> */}
        </p>
        <p className="text-black-600 ml-auto mr-5">
          <button className="border border-gray-300 text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            Years
          </button>
        </p>
        <p className="text-black-600 ml-auto mr-5">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label={'2024'}
                views={['year']}

                
              />
            </DemoContainer>
          </LocalizationProvider>
          {/* <button className="border border-gray-300 text-gray-500 hover:border-blue-700 font-bold py-1 px-6 rounded">
            2024 <i className="far fa-calendar ml-2 text-blue-700" />
          </button> */}
        </p>
      </div>
    </div>
  );
};
export default SkillsEdit;