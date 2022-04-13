import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center mt-4'>
                <p><small>&#169;copyright {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;