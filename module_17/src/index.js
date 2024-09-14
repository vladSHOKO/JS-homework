import "./styles/main.scss";
import React from "react";
import {createStore} from 'redux';
import {createRoot} from 'react-dom/client';
import {comments} from "./reducers";
import App from "./containers/app";
import {addComment, deleteComment} from "./actions";

const domNode = document.querySelector('#app');
const root = createRoot(domNode);

const initialState = [
    {
        id: 1,
        author: 'John',
        text: 'test text',
        date: '11.12.2024',
    },
    {
        id: 2,
        author: 'Pavel',
        text: 'Text Text text',
        date: '14.08.2023',
    },
]

const store = createStore(
    comments,
    initialState
)

root.render(
    <App store={store}/>
);

