import React, {useEffect} from 'react';
import Table from "./components/Table/Table";
import styled from "styled-components";
import axios from "axios";
import {Navigate, Route, Routes} from "react-router-dom";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const dataAPI = {
    getData: () => {
        return instance.get<any>(`posts`)
            .then(response => {
                return response.data;
            })
    }
}

const data: any = []

;(async () => {
    const dataTable = await dataAPI.getData();
    dataTable.forEach((elem: any) => {
        data.push(Object.values(elem))
    })
})();

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

function App() {
    const header = [
        'ID',
        'ID',
        'Заголовок',
        'Описание'
    ]

    useEffect(() => {
        alert('Кликните на ID, чтобы начать работу с таблицей :)')
    }, [])

    return (
        <Container>
            <Routes>
                <Route path="/table-task" element={<Table header={header} data={data}/>}/>
                <Route path="*" element={<div>404 NOT FOUND</div>}/>
                <Route path="/" element={<Navigate to='/table-task'/>}/>
            </Routes>
        </Container>
    );
}

export default App;