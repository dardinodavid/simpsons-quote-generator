import React from 'react';

const SiteHeading = ({ className }) => {
    return (
        <header>
              <img id="site-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Logo_The_Simpsons.svg" alt="The Simpsons logo"/>
              <h1 id="site-heading">Random Quote Generator</h1>
            </header>
    );
};

SiteHeading.displayName = 'SiteHeading';

export default SiteHeading;
