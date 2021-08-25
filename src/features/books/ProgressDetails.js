import React from 'react';
import SplitPane from '../../common/components/SplitPane/SplitPane';
import SplitPaneLayout from '../../common/components/SplitPane/SplitPaneLayout';
import ProgressCircle from '../../common/components/ProgressCircle/ProgressCircle';
import styles from './ProgressDetails.module.scss';

const ProgressDetails = ({ value }) => (
  <>
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
  </>
);

export default ProgressDetails;
