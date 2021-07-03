import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../component/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection,ownProps,state }) => {
  const { title, items } = collection;
  console.log(ownProps);
  console.log(state);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  ownProps:ownProps,
  state:state
});

export default connect(mapStateToProps)(CollectionPage);