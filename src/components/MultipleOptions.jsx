import { Padding } from '@mui/icons-material';
import { Autocomplete, FormControl, Select, TextField, MenuItem} from '@mui/material';
import React, { useState } from 'react'

const MultipleOptions = ({label}) => {
    const [data, setData] = useState([''])
    const [formData, setFormData] = useState([])
    const [item, setItem] = useState('')
    console.log(item)
    console.log(data)

    const handleClick = ()=>{
      setData([...data, item])
      setItem('')
    }

    // const handleChange = ()=>{
    //   setData
    // }
  return (
    <div>

        {label == "When subscriber joins group(s)" && 
        <>
        <FormControl sx={{ m: 1, width: 300}}>
        <Autocomplete
            multiple
            id="tags-outlined"
            options={data}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
            <div className='flex flex-col'>
            <div className='flex flex-row justify-between mb-[8px]'>
            <h1 className='font-inter text-[16px] font-semiBold'>Group</h1>
            <button onClick={handleClick} className='px-[8px] py-[12px] bg-[#d3d6d9] rounded-full cursor-pointer font-inter text-[10px]'>ADD</button>
            </div>
            <div className='w-[300px]'>
              <TextField
                  {...params}
                  variant="outlined"
                  value={item}
                  onChange={(e)=>{
                    setItem(e.target.value)
                    }}
              />
            </div>
            </div>
            )}
        />
        </FormControl>
        </>}


        {label == "When subscriber completes a form" && 
        <>
        <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <Autocomplete
            multiple
            id="tags-outlined"
            options={formData}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
            <div className='flex flex-col'>
            <div className='flex flex-row justify-between mb-[8px]'>
            <h1 className='font-inter text-[16px] font-semiBold'>Select Form</h1>
            <button onClick={handleClick} className='px-[8px] py-[12px] bg-[#d3d6d9] rounded-full cursor-pointer font-inter text-[10px]'>ADD</button>
            </div>
            <div className='flex flex-row justify-between'>
              <TextField
                  {...params}
                  variant="outlined"
                  value={item}
                  onChange={(e)=>{
                    setItem(e.target.value)
                    }}
              />
              <button className='px-[8px] py-[12px] bg-[#d3d6d9] rounded-full cursor-pointer font-inter text-[10px]'>ADD</button>
            </div>
            </div>
            )}
        />
        </FormControl>
        </>}
        
        {label == "When subscriber clicks a link" && 
        <div className='flex flex-col'>
        <div className='flex flex-col items-start justify-between px-[8px] space-y-[4px]'>
          <h1 className='font-inter text-[16px] font-semiBold'>Link</h1>
          <p className='font-inter text-[12px] font-light w-[280px]'>Automation workflow starts when subscriber clicks on the designated URL link in any of your email campaigns or automations.</p>
        </div>
        <div className='px-[8px] flex flex-row justify-between items-center space-x-[24px]'>
              <TextField
                  sx={{
                    width: '240px',
                    paddingRight: '0',
                    marginRight: '0',
                  }}
                  size="small"
                  variant="outlined"
                  value={item}
                  onChange={(e)=>{
                    setItem(e.target.value)
                    }}
              />
              <button className='w-[32px] py-[12px] bg-[#d3d6d9] rounded-sm cursor-pointer font-inter text-[14px]'>ADD</button>
            </div>
        </div>}

        {/* Automation workflow starts when subscriber
clicks on the designated URL link in any of your
email campaigns or automations. */}

        {label == "Updated field" && 
        <>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select/>
            <Select/>
        </FormControl>
        </>}

        {label == "The anniversary of a date" && 
        <>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select/>
            <Select/>
        </FormControl>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        </>}
        {label == "The exact match of a date" && 
        <>

        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        </>}
    </div>
  )
}

export default MultipleOptions