import "./styles/main.scss";
import React from "react";
import { createRoot } from 'react-dom/client';
import {Comments} from "./components/Comments";

const domNode = document.querySelector('#app');
const root = createRoot(domNode);

root.render(
  <Comments />
);

