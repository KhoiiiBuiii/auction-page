import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    padding: '1rem',
    borderTop: '1px solid #ddd',
  },
};

export default Footer;
