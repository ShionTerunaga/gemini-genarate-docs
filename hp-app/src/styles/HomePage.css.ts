import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
});

export const characterList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '20px',
  listStyle: 'none',
  padding: 0,
});

export const characterItem = style({
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  textAlign: 'center',
  paddingBottom: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s',
  
  ':hover': {
    transform: 'translateY(-5px)',
  },
});

export const characterImage = style({
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  marginBottom: '10px',
});

export const characterName = style({
  fontWeight: 'bold',
  fontSize: '1.1em',
  marginBottom: '5px',
});

export const characterHouse = style({
  fontSize: '0.9em',
  color: '#666',
});
