import React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';

import Form from './Form';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should ', () => {
  const originalURL = 'www.google.com';
  mockedAxios.post.mockImplementation(() => Promise.resolve('localhost:3000/abcdefg'));
  const postFn = jest.spyOn(mockedAxios, 'post')

  const form = shallow(<Form />);

  form.find('input').simulate('change', { target: { value: originalURL } })
  form.find('button').simulate('click', { preventDefault: () => {} });

  expect(postFn).toBeCalledWith('link', {
    link: {
      original_url: originalURL
    }
  }, {
    timeout: 5000
  });
});
