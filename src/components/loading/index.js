import React from 'react'
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading'
const Loading = ({src,...restProps}) => {
  console.log('src',src);
    return (
        <Spinner {...restProps}>
          <LockBody />
          <Picture src={src} data-testid="loading-picture" />
        </Spinner>
      );
}

export default Loading

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
  };