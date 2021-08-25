import React from 'react';
import PropTypes from 'prop-types';
import SplitPane from '../../common/components/SplitPane/SplitPane';
import SplitPaneLayout from '../../common/components/SplitPane/SplitPaneLayout';
import BookData from './BookData';
import BookActions from './BookActions';
import styles from './BookDetails.module.scss';

const BookDetails = ({ data }) => (
  <>
    <SplitPane
      layout={
          new SplitPaneLayout('col', 'col', 'row', styles)
        }
      first={
        <BookData data={{ ...data }} />
        }
      second={
        <BookActions />
        }
    />
  </>
);

BookDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default BookDetails;
