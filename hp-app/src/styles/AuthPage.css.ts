import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  maxWidth: '400px',
  margin: '50px auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  textAlign: 'center',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px',
});

export const formGroup = style({
  textAlign: 'left',
});

export const label = style({
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#555',
});

export const input = style({
  width: '100%',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxSizing: 'border-box',
});

export const button = style({
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1em',
  
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const linkText = style({
  marginTop: '20px',
  fontSize: '0.9em',
});
