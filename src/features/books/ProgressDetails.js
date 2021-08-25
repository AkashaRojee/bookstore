import React from 'react';
import SplitPane from '../../common/components/SplitPane/SplitPane';
import SplitPaneLayout from '../../common/components/SplitPane/SplitPaneLayout';
import ProgressCircle from './ProgressCircle';
import styles from './ProgressDetails.module.scss';

const ProgressDetails = ({ value }) => (
  <div className="progress-details">
    <SplitPane
      layout={
        new SplitPaneLayout('row', 'col', 'col', styles)
      }
      first={
        <ProgressCircle value={value} />
      }
      second={(
        <>
          <span>
            {value}
            %
          </span>
          <span>completed</span>
        </>
      )}
    />
  </div>
);

export default ProgressDetails;
