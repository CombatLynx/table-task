import React from 'react';
import Table from "./components/Table/Table";
import styled from "styled-components";
import axios from "axios";
import {Route, Routes} from "react-router-dom";

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

    return (
        <Container>
            <Routes>
                <Route path="*" element={<Table header={header} data={data}/>}/>
            </Routes>
        </Container>
    );
}

export default App;