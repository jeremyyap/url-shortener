// Run this example by adding <%= javascript_pack_tag 'react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

import Form from './react/Form';
import './react/styles';

const HomePage = () => (
  <>
    <div className="title">sho.rt</div>
    <div className="subtitle">Generate short links for easy sharing</div>
    <Form />
  </>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomePage />,
    document.body.appendChild(document.createElement('div')),
  )
})
