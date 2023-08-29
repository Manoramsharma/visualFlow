import React, { forwardRef, useCallback, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import "./index.scss";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormControl, MenuItem, Select } from '@mui/material';
import MultipleOptions from './components/MultipleOptions';
import { useReactFlow } from 'react-flow-renderer';


export default function RightPanel({setInitialElements}){
  const [initialElements1,setInitialElements1] = useState(
    [
      {
        id: "2",
        data: {},
        type: "empty",
        position: { x: 0, y: 0 },
      },
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "condition",
      }
      // {
      //   id: "e1-2",
      //   source: "1",
      //   target: "2",
      //   type: "condition",
      // },
      // {
      //   id: "e2-3",
      //   source: "2",
      //   target: "3",
      //   type: "condition",
      // },
      // {
      //   id: "e3-4",
      //   source: "3",
      //   target: "4",
      //   type: "condition",
      //   data: {
      //     title: "Default condition",
      //     disabled: true,
      //   },
      // },
      // {
      //   id: "e3-5",
      //   source: "3",
      //   target: "5",
      //   type: "condition",
      //   data: {
      //     title: "Editable branch",
      //   },
      // },
      // {
      //   id: "e4-6",
      //   source: "4",
      //   target: "6",
      //   type: "condition",
      // },
      // {
      //   id: "e5-6",
      //   source: "5",
      //   target: "6",
      //   type: "condition",
      // },
      // {
      //   id: "e6-7",
      //   source: "6",
      //   target: "7",
      //   type: "condition",
      // },

  ]);
  const [count,setCount] = useState(1)
    let [nodeId,setNodeId] = useState(0)
    const [labelObj, setLabelObj] = useState({
      label1: '',
      label2: '',
      label3: ''
    })
    const [triggerToggle, setTriggerToggle] = useState({
      t1: true,
      t2: true,
      t3: true

    })
   
  //  React.useEffect(()=>{
   
  //  let   node=    [
  //   {
  //       id: `${nodeId}`,
  //       type: "source",
  //       data: {
  //         title: "Trigger",
  //         description: `${labelObj.label1|| labelObj.label2 || labelObj.label3}`,
  //         stats: {
  //          started:0,
  //         },
  //       },
  //       position,
  //     },
    
  //   ]
  
  //   setInitialElements(prev => [...prev,...node]);
  //  },[nodeId])
    //   const reactFlowInstance = useReactFlow();
    //   const onClick = useCallback(() => {
    //     const id = `${++nodeId}`;
    //     const newNode = {
    //       id,
    //       position: {
    //         x: 0,
    //         y: 0,
    //       },
    //       data: {
    //         title: "Trigger",
    //         description: `${labelObj.label1} || ${labelObj.label2} || ${labelObj.label3}`,
    //         stats: {
    //           started: 0,
    //         },
    //       },
    //     };
    //     reactFlowInstance.addNodes(newNode);
    //   }, []);
    const position = { x: 0, y: 0 };

 
    const handleAddTrigger = ()=>{
        setNodeId(nodeId+1);
      console.log(nodeId)
      console.log('addTriggerr');
    }
  
    const handleClick = () =>{
      setCount(prevState => prevState += 1)
    }

    const handleDelete = () => {
      setCount(prevState => prevState -= 1)
    }
    
    const handleChange1 = (event)=>{
      setLabelObj({ ...labelObj,
        label1: event.target.value})
    }
    const handleChange2 = (event)=>{
      setLabelObj({ ...labelObj,
        label2: event.target.value})
    }
    const handleChange3 = (event)=>{
      setLabelObj({ ...labelObj,
        label3: event.target.value})
    }

    const data = [
        {
          image: 'https://img.icons8.com/fluency-systems-regular/48/user--v1.png',
          label: 'When subscriber joins group(s)',
          value: 'When subscriber joins group(s)',
          description: 'Workflow triggered when a subscriber joins your subscriber group(s)',
        },
      
        {
          image: 'https://img.icons8.com/fluency-systems-regular/48/stack.png',
          label: 'When subscriber completes a form',
          value: 'When subscriber completes a form',
          description: 'Workflow triggered when a person subscribes to a form',
        },
        {
          image: 'https://img.icons8.com/ios/50/cursor--v1.png',
          label: 'When subscriber clicks a link',
          value: 'When subscriber clicks a link',
          description: 'Workflow triggered when a subscriber clicks a link in any campaign or automation workflow',
        },
        {
          image: 'https://img.icons8.com/ios-glyphs/30/create-new.png',
          label: 'Updated field',
          value: 'Updated field',
          description: 'Workflow triggered when a subscriber field is updated',
        },
        {
          image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
          label: 'The anniversary of a date',
          value: 'The anniversary of a date',
          description: 'Workflow triggered every year on specific dates (great for birthdays, wedding anniversary,etc.)',
        },
        {
          image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
          label: 'The exact match of a date',
          value: 'The exact match of a date',
          description: 'Workflow triggered on a specific date (great for subscriptions, free trials, etc.)',
        },
      ];
    
      const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#627dde',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#E9E9EA',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
    

    return (
        <div className='flex flex-col justify-between items-start py-[32px] bg-white drop-shadow-lg h-[100vh]'>
          <div className='px-[24px] my-0'>
            <FormControlLabel control={<IOSSwitch/>} />
          </div>
          <div className='w-full h-[1px] rounded-full bg-[#343638] opacity-[10%]'/>
          <div className='flex flex-col overflow-y-auto pt-[32px]'>
            <div className='flex flex-col justify-between items-start space-y-[5px] max-w-[340px] px-[24px]'>
              <h1 className= 'font-semiBold text-black font-inter text-[16px]'>Create Workflow Trigger</h1>
              <p className='font-normal font-inter text-[12px]'>Add upto 3 triggers. Define which actions will start your subscriber journey</p>
            </div>
            <div className='mx-[24px] my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[350px] flex flex-col border-opacity-10'>
              <div className='flex flex-row justify-between items-center px-[8px]'>
                <button>Trigger</button>
                {count > 1 && <button className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md flex flex-row items-center justify-between cursor-pointer font-inter text-[12px]' onClick={handleDelete}>Delete</button>}
              </div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select value={labelObj.label1} onChange={handleChange1}
                renderValue={(selected) => {
                            return <em>{labelObj.label1}</em>
                        }} 
                >
                  {data.map((item)=>{
                    return(
                        <MenuItem value = {item.value}>
                          <div className='flex flex-row justify-between items-start whitespace-normal space-x-[8px]'>
                            <img className='w-[16px] h-[16px]' src={item.image}/>
                            <div className='flex flex-col w-[300px]'>
                              <h1 className='font-semiBold font-inter text-[12px]'>{item.value}</h1>
                              <p className='font-inter text-[10px] opacity-80'>{item.description}</p>
                            </div>
                          </div>
                        </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <MultipleOptions label={labelObj.label1}/>
            </div>
            {count >= 2 && <>
              <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
              <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
              <div className='w-full h-[1px] rounded-full bg-[#343638] opacity-[10%]'></div>
            </div>
            <div className='mx-[24px] my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[350px] flex flex-col border-opacity-10'>
              <div className='flex flex-row justify-between items-center px-[8px]'>
                <button>Trigger</button>
                <button className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md flex flex-row items-center justify-between cursor-pointer font-inter text-[12px]' onClick={handleDelete}>Delete</button>
              </div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select value={labelObj.label2} onChange={handleChange2}
                renderValue={(selected) => {
                            return <em>{labelObj.label2}</em>
                        }}
                >
                  {data.map((item)=>{
                    return(
                        <MenuItem value={item.value}>
                          <div className='flex flex-row justify-between items-start whitespace-normal space-x-[8px]'>
                            <img className='w-[16px] h-[16px]' src={item.image}/>
                            <div className='flex flex-col w-[300px]'>
                              <h1 className='font-semiBold font-inter text-[12px]'>{item.value}</h1>
                              <p className='font-inter text-[10px] opacity-80'>{item.description}</p>
                            </div>
                          </div>
                        </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <MultipleOptions label={labelObj.label2}/>
            </div>
            </>}
            {count >= 3 && <>
              <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
              <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
              <div className='w-full h-[1px] rounded-full bg-[#343638] opacity-[10%]'></div>
            </div>
            <div className='mx-[24px] my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[350px] flex flex-col border-opacity-10'>
              <div className='flex flex-row justify-between items-center px-[8px]'>
                <button>Trigger</button>
                <button className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md flex flex-row items-center justify-between cursor-pointer font-inter text-[12px]' onClick={handleDelete}>Delete</button>
              </div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select 
                value={labelObj.label3} 
                onChange={handleChange3}
                renderValue={(selected) => {
                            return <em>{labelObj.label3}</em>
                        }} 
                >
                  {data.map((item)=>{
                    return(
                        <MenuItem value = {item.label}>
                          <div className='flex flex-row justify-between items-start whitespace-normal space-x-[8px]'>
                            <img className='w-[16px] h-[16px]' src={item.image}/>
                            <div className='flex flex-col w-[300px]'>
                              <h1 className='font-semiBold font-inter text-[12px]'>{item.value}</h1>
                              <p className='font-inter text-[10px] opacity-80'>{item.description}</p>
                            </div>
                          </div>
                        </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <MultipleOptions label={labelObj.label3}/>
            </div>
            </>}
            {count >= 3 ? <div className='mx-[24px] px-[8px] py-[2px] bg-[#e9eaeb] text-[#929496] rounded-md w-[150px] flex flex-row items-center justify-between opacity-50 cursor-not-allowed'>
              <img src="https://img.icons8.com/android/24/plus.png" className='w-[12px] h-[12px]'/>
              <button className='text-black font-inter text-[12px] cursor-not-allowed'>Add another trigger</button>
            </div> : <div className='mx-[24px] px-[8px] py-[2px] bg-[#d3d6d9] rounded-md w-[150px] flex flex-row items-center justify-between cursor-pointer'>
              <img src="https://img.icons8.com/android/24/plus.png" className='w-[12px] h-[12px]'/>
              <button className='text-black font-inter text-[12px]' onClick={handleClick}>Add another trigger</button>
            </div>
            }
            
            <div className='max-w-[350px] mx-[24px] my-[24px]'>
              
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div className='w-full h-[1px] rounded-full bg-[#343638] my-[32px] opacity-[10%]'/>
            <div className='flex flex-row space-x-[24px] justify-center items-center mx-[24px]'>
              <button className='px-[24px] py-[8px] text-[14px] rounded-sm font-inter'>Cancel</button>
              <button className='px-[24px] py-[8px] text-[14px] bg-[#627dde] text-white rounded-md font-inter' onClick={handleAddTrigger}>Save</button>
            </div>
          </div>
        </div>

    )
}