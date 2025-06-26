import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

export const backLink = style({
  display: 'inline-block',
  marginBottom: '20px',
  fontSize: '1.1em',
  color: '#007bff',
  textDecoration: 'none',
  
  ':hover': {
    textDecoration: 'underline',
  },
});

export const characterDetail = style({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const characterDetailImage = style({
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  borderRadius: '8px',
  objectFit: 'cover',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

export const characterDetailInfo = style({
  flex: '1',
  minWidth: '280px',
  fontSize: '1.1em',
  lineHeight: '1.6',
});

globalStyle(`${characterDetailInfo} p`, {
  marginBottom: '8px',
});

globalStyle(`${characterDetailInfo} strong`, {
  color: '#555',
});
