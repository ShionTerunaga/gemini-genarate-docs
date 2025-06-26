import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: 'Arial, sans-serif',
  margin: 0,
  padding: 0,
  backgroundColor: '#f0f0f0',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  color: '#333',
});

globalStyle('a', {
  color: '#007bff',
  textDecoration: 'none',
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});
