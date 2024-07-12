"use client";

import { Dialog, DialogContent, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { IoSend } from 'react-icons/io5';
import { FaMagic } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { API } from '@/helper/constants';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import searchMockup from '@/public/images/search-illustrator.jpg';
import Image from 'next/image';
import { BsThreeDots } from 'react-icons/bs';
import { Close } from '@mui/icons-material';
import Loader from './loader';
import { Chart } from '@/components';


const InformaBotScreen = ({ selectedDoc, documentList, getTable, rows, columns }) => {

    const [inputText, setInputText] = useState('');
    const [loader, setShowLoader] = useState(false);
    const [getQuestion, setQuestion] = useState('');
    const [getAnswer, setAnswer] = useState('');
    const [conversation, setConversations] = useState([]);
    const [isItFirstChat, setFirstChat] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLoader, setLoader] = useState(false);
    const conversationRef = useRef(null);
    const textAreaRef = useRef(null);
    const menuRef = useRef(null);

    const [selectedValue, setSelectedValue] = useState(selectedDoc);
    const [chartData, setChartData] = useState({ type: '', keys: [], Xdata: [], Ydata: [] });
    const [first, setFirst] = useState(true);


    // useEffect(() => {

    //     const setData = () => {

    //         const data = {
                        
    //             ProductName: {
    //                 0: "White Eco-Friendly Portable Air Cooler",
    //                 1: "Hose Hero 25ft Stainless Steel Garden Hose",
    //             },
            
    //             TotalSales: {
    //                 0: 677.0,
    //                 1: 588.0
    //             }
            
    //         }
    
    //         const keys = Object.keys(data);
    //         const Xdata = Object.values(data[keys[0]]);
    //         const Ydata = Object.values(data[keys[1]]);
    
    //         const newData = Xdata.map((d, i) => ({ [keys[0]]: d, [keys[1]]: Ydata[i] }));
    
    //         console.log({ keys, Xdata, Ydata })
    
    //         setChartData({ type: 'Bar', keys, Xdata, Ydata });
    
    //         setFirst(false);
    
    //         // console.log({ keys, Xdata, Ydata });
    
    //         // setChartData({
    //         //     type: "Bar",
    //         //     data:
    //         // })
    
    //     }

    //     first && setData();

    // }, []);

    useEffect(() => {

        const handleOutsideClick = (e) => {

            if(!menuRef.current?.contains(e.target)) {
                setShowDialog(false);
            }
        }

        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
        
    }, [menuRef]);

    useEffect(() => {

        if (conversationRef.current) {

            conversationRef.current.scrollTop = conversationRef.current.scrollHeight;

        }

    }, [conversation])
    
    const handleChangeText = (e) => {

        if(!textAreaRef.current) return;

        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';

        setInputText(e.target.value);

    }

    const handleClick = async () => {

        if (inputText.trim() !== '') {

            if (getQuestion !== '' && getAnswer !== '') {

                const newChats = [

                    ...conversation,

                    {
                        question: getQuestion,
                        answer: getAnswer,
                    }

                ]

                console.log(newChats)

                setConversations(newChats);
                setFirstChat(true);

            }

        }

        try {

            setShowLoader(true);
            setQuestion(inputText);
            setInputText('');

            // const resp = await API.post('/query_csv', { query: inputText });
            // typeof resp.data.response === 'string' && setAnswer(resp.data.response);
            
            // if (typeof resp.data.response === 'object') {

            //     const singleData = resp.data.response[0];
            //     const getAllKeys = Object.keys(singleData);
            //     const newObj = { };

            //     for ( let i = 0; i < getAllKeys.length; i++ ) {

            //         if ( typeof singleData[getAllKeys[i]] === 'string' ) {

            //             setXAxisName(getAllKeys[i]);
            //             newObj.XAxisName = getAllKeys[i];

            //         }

            //         if ( typeof singleData[getAllKeys[i]] === 'number' ) {

            //             setYAxisName(getAllKeys[i]);
            //             newObj.YAxisName = getAllKeys[i];

            //         }

            //     }

            //     setChartsData(resp.data.response);
            //     newObj.chartsData = resp.data.response;

            //     setAnswer(newObj);

            // }

            setShowLoader(false);


        } catch (e) {

            toast.error(e.message)

        }

    }

    const handleEnter = (e) => {

        //  ======================================================================> 
       // 👇 Functionality to move to the next line by pressing 'shift + enter' keys together
       //  ======================================================================> 
       
       if (e.key === 'Enter' && e.shiftKey) {
   
           // Move to the next line
           const cursorPosition = e.currentTarget.selectionStart;
           const text = e.currentTarget.value;
           const textBeforeCursor = text.slice(0, cursorPosition);
           const textAfterCursor = text.slice(cursorPosition);
       
           const newText = textBeforeCursor + textAfterCursor;
       
           e.currentTarget.value = newText;
       
           // Set the cursor position to the end of the inserted newline
           e.currentTarget.setSelectionRange(cursorPosition + 1, cursorPosition);
         
       } else if (e.key === 'Enter') {
           
           e.preventDefault();

           if (inputText !== '') {

               setInputText('');
    
               if(!textAreaRef.current) return;
    
               textAreaRef.current.style.height = 'auto';
               handleClick();
               
           }
   
       }

    }

    const handleModal = () => {

        setShowDialog(true);

    }

    const handleClose = () => {

        setShowDialog(false);
        setShowModal(false);

    }

    const handleDocuments = () => {

        setShowDialog(false);
        setShowModal(true);

    }

    const handleSelect = (e) => {

        setSelectedValue(e.target.value);

    }

    const handleSend = async () => {

        setLoader(true);
        getTable(selectedValue);
        setShowModal(false);
        setConversations([]);
        setFirstChat(true);
        setAnswer('');
        setQuestion('');
        setInputText('');
        setLoader(false);

    }

    return (

        <Loader show={showLoader}>

            <div className='border p-4 rounded-md h-full'>
                
                <div className='flex justify-between font-normal mb-3' style={{ letterSpacing: 0.5 }}>

                    <div>AI Assistant</div>

                </div>
                
                <hr />

                <div ref={conversationRef} className='h-[85%] overflow-y-auto border my-3 p-4 hide-scrollbar scroll-smooth'>

                    {/* {!!conversation && conversation.map((chat, index) => (

                        <div className='flex flex-col' key={`bot-chat-${index}`}>

                            <div className='flex justify-end items-end'>
                                <div className='flex justify-end items-end flex-row-reverse gap-4'>

                                    <div><RxAvatar color='#d6d6d6' size={30} /></div>

                                    <div className='bg-[#0066FF] text-white p-3 rounded-xl rounded-br-none'>
                                        {chat.question}
                                    </div>

                                </div>
                            </div>

                            <div className='flex items-end gap-4 my-5'>

                                <div><FaMagic color='#0066FF' /></div>

                                {typeof chat.answer === 'string' ? 
                                
                                    <div className='bg-gray-100 p-3 rounded-xl rounded-bl-none'>
                                        {chat.answer}
                                    </div>

                                : 

                                    <div className='overflow-auto h-[300px] w-[400px]'>
                                        <div className='flex justify-center items-center h-full'>
                                            <LineChart width={400} height={300} data={chat.answer.chartsData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey={chat.answer.XAxisName} />
                                                <YAxis />
                                                <Legend />
                                                <Line type="monotone" dataKey={chat.answer.YAxisName} stroke="#0066FF" />
                                            </LineChart>
                                        </div>
                                    </div>

                                }

                            </div>

                        </div>

                    ))} */}

                    {isItFirstChat ?

                        <>
                            {loader 
                            
                                ? 

                                <div className='flex flex-col'>

                                    <div className='flex justify-end items-end'>

                                        <div className='flex justify-end items-end flex-row-reverse gap-4'>

                                            <div><RxAvatar color='#d6d6d6' size={30} /></div>

                                            <div className='bg-[#0066FF] text-white p-3 rounded-xl rounded-br-none'>
                                                {getQuestion}
                                            </div>

                                        </div>

                                    </div>

                                    <div className='flex items-end gap-4 my-5'>

                                        <div><FaMagic color='#0066FF' /></div>

                                        <div className='bg-gray-100 p-3 rounded-xl rounded-bl-none'>
                                            
                                            <ThreeDots
                                                visible={true}
                                                height="16"
                                                width="20"
                                                color="#0066FF"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            /> 

                                        </div>

                                    </div>

                                </div>
                                    
                                : 
                                
                                getQuestion !== '' ? <div className='flex flex-col'>

                                    <div className='flex justify-end items-end'>

                                        <div className='flex justify-end items-end flex-row-reverse gap-4'>

                                            <div><RxAvatar color='#d6d6d6' size={30} /></div>

                                            <div className='bg-[#0066FF] text-white p-3 rounded-xl rounded-br-none'>

                                                {getQuestion}
                                                
                                            </div>

                                        </div>

                                    </div>

                                    <div className='flex items-end gap-4 my-5'>

                                        <div><FaMagic color='#0066FF' /></div>

                                        {typeof getAnswer === 'string'
                                        
                                        ?
                                            <div className='bg-gray-100 p-3 rounded-xl w-[25%] rounded-bl-none'>

                                                {/* {getAnswer} */}
                                                <Chart chartData={chartData} />
                                                <div className='p-3'>
                                                This SQL query retrieves the total net sales for each year from the 'shoplc_sales_salesorder' table. It first converts the 'OrderDate' to a timestamp format and then extracts the year from this timestamp. The query then groups the sales data by this extracted year. For each year, it sums up the 'TotalNetAmount' to calculate the annual sales. The result is a list of years along with their corresponding annual sales.
                                                </div>

                                            </div>

                                        :

                                            <div>
                                                <div className='flex justify-center items-center h-full'>
                                                    {/* <LineChart width={400} height={300} data={getAnswer.chartsData}>
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey={getAnswer.XAxisName} />
                                                        <YAxis />
                                                        <Legend />
                                                        <Line type="monotone" dataKey={getAnswer.YAxisName} stroke="#0066FF" />
                                                    </LineChart> */}
                                                </div>
                                            </div>

                                        }

                                        {/* <div className='bg-gray-100 p-3 rounded-xl rounded-bl-none'>

                                            {getAnswer}

                                        </div> */}

                                    </div>

                                </div> : <div className='w-full h-full flex justify-center items-center opacity-50' ><Image src={searchMockup} height={300} width={300} alt='search-illustrator' /></div>

                            }
                        </> 
                        
                        : <div className='w-full h-full flex justify-center items-center opacity-50' ><Image src={searchMockup} height={300} width={300} alt='search-illustrator' /></div>

                    }

                </div>

                <div className='w-full border p-2 rounded-md'>

                    <div className='flex justify-between items-center'>

                        <textarea ref={textAreaRef} value={inputText} rows={1} onChange={handleChangeText} onKeyDown={handleEnter} className='w-[90%] outline-none resize-none border-none' placeholder='Ask here...'></textarea>

                        <button disabled={inputText === ''} onClick={handleClick} className={`rounded-md bg-[#0066FF] p-2 w-8 h-8 flex justify-center items-center ${inputText === '' ? 'opacity-50' : 'hover:bg-[#033f9a] opacity-100 transition-all duration-200'}`}>
                            <IoSend color='#FFFFFF' size={14} />
                        </button>

                    </div>

                </div>

            </div>

        </Loader>

    )

}

export default InformaBotScreen