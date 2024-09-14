import React from "react";
import {HelloWorld} from "./components/helloWorld";
import { createRoot } from 'react-dom/client';

const domNode = document.querySelector('#app');
const root = createRoot(domNode);

root.render(
    <HelloWorld />,
);

// Почему при запуске webpack-dev-server общий размер bundle значительно увеличивается, что не дает возможности запустить приложение через сервер