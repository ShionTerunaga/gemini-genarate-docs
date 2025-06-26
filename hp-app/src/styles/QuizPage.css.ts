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

export const quizQuestion = style({
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
});

export const quizOptions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
});

export const quizOption = style({
  padding: '12px 20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  cursor: 'pointer',
  fontSize: '1.1em',
  textAlign: 'left',
  transition: 'background-color 0.2s, border-color 0.2s',
  
  ':hover': {
    backgroundColor: '#e9e9e9',
  },
  
  selectors: {
    '&.selected': {
      backgroundColor: '#007bff',
      color: 'white',
      borderColor: '#007bff',
    },
  },
});

export const quizButton = style({
  padding: '12px 25px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.2em',
  
  ':hover': {
    backgroundColor: '#218838',
  },
  
  ':disabled': {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  },
});
