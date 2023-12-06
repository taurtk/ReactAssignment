// src/pages/SecondPage/SecondPage.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../DataTable/DataTable';
import DepartmentList from '../../DepartmentList/DepartmentList';
import Post from '../../models/Post';

const SecondPage: React.FC = () => {
  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Example data for demonstration purposes
  const departmentListData = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  return (
    <div>
      <h1>Second Page</h1>
      <DataTable rows={postData} />
      <DepartmentList data={departmentListData} />
    </div>
  );
};

export default SecondPage;
