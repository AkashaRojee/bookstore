import React from 'react';
import SplitPane from '../../common/components/SplitPane/SplitPane';
import SplitPaneLayout from '../../common/components/SplitPane/SplitPaneLayout';
import BookData from './BookData';
import BookActions from './BookActions';
import styles from './BookDetails.module.scss';

const BookDetails = () => {
  console.log(styles);
  return (
    <>
      <SplitPane
        layout={
          new SplitPaneLayout('col', 'col', 'row', styles)
        }
        first={
          <BookData category="Action" title="The Hunger Games" author="Suzanne Collins" />
        }
        second={
          <BookActions />
        }
      />
    </>
  );
};

export default BookDetails;
