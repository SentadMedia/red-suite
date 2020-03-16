import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className={'page-404'}>
      <div className="code">404</div>
      <div className="to-home">
        Take me back to <a href="/">homepage</a>.
      </div>
    </div>
  );
};

export default NotFoundPage;
