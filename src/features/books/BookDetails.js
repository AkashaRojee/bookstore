import SplitPane from '../../common/components/SplitPane/SplitPane';
import SplitPaneLayout from '../../common/components/SplitPane/SplitPaneLayout';
import BookData from './BookData';
import BookActions from './BookActions';

const BookDetails = () => (
  <div className="book-details">
    <SplitPane
      layout={
        new SplitPaneLayout('col', 'col', 'row')
      }
      first={
        <BookData category="Action" title="The Hunger Games" author="Suzanne Collins" />
      }
      second={
        <BookActions />
      }
    />
  </div>
);

export default BookDetails;
