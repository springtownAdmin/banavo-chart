"use client";

import { Container, InformaBotScreen } from '@/components';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ChartsMockup from '@/public/images/charts-mockup.png';
import { API, snakeCaseToTitleCase } from '@/helper/constants';
import { toast } from 'react-toastify';
import { IoSend } from 'react-icons/io5';

const InformaBot = () => {

  const [ documentList, setDocumentList ] = useState([]);
  const [ selectedDoc, setSelectedDoc ] = useState('');
  const [ submit, setSubmit ] = useState(false);

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const getTable = async (selectedValue) => {

    try {

        const resp = await API.post('/get_csv_files', { "csv_file": selectedValue });
        const getKeys = Object.keys(resp.data[0]);
        const getColumns = getKeys.map((v) => ({

            accessorKey: v,
            header: snakeCaseToTitleCase(v)

        }));

        setRows(resp.data);
        console.log(getColumns)
        setColumns(getColumns);


    } catch (e) {

        toast.error(e.message);

    }

  }

  const handleDocChange = (e) => {

    setSelectedDoc(e.target.value);

  }

  const handleClick = () => {
  
    getTable(selectedDoc);
    setSubmit(true);
    
  }

  return (
    <Container id={2}>

        <InformaBotScreen selectedDoc={selectedDoc} documentList={documentList} rows={rows} columns={columns} />

    </Container>
  )

}

export default InformaBot