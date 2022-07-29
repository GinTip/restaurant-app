import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="card m-5">
        <div className="card-header">
          Quote
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>

    </>
  );
};

export default Footer;