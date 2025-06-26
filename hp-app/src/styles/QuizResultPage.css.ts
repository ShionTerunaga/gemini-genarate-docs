import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  maxWidth: '600px',
  margin: '50px auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  textAlign: 'center',
});

export const resultText = style({
  fontSize: '1.2em',
  marginBottom: '10px',
  color: '#555',
});

export const resultScore = style({
  fontSize: '2.5em',
  fontWeight: 'bold',
  color: '#007bff',
  marginBottom: '20px',
});

export const resultActions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '30px',
});

export const resultButton = style({
  padding: '12px 25px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.2em',
  textDecoration: 'none',
  display: 'inline-block',
  
  ':hover': {
    backgroundColor: '#0056b3',
  },
});
