import SplitPane from '../../common/components/SplitPane/SplitPane';
import SplitPaneLayout from '../../common/components/SplitPane/SplitPaneLayout';
import ProgressCircle from './ProgressCircle';

const ProgressDetails = () => (
  <div className="progress-circle">
    <SplitPane
      layout={
        new SplitPaneLayout('row', 'col', 'col')
      }
      first={
        <ProgressCircle value="64" />
      }
      second={
        <span>64% completed</span>
      }
    />
  </div>
);

export default ProgressDetails;
