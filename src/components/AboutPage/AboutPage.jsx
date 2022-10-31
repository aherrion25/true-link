import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3>Technologies Used</h3>
        <br/>
        <p>Postgresql</p>
        <p>react</p>
        <p>react-redux</p>
        <p>express</p>
        <p>redux-sagas</p>
        <p>Material UI</p>
      </div>
    </div>
  );
}

export default AboutPage;
