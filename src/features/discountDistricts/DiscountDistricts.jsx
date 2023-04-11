import React from 'react';

const DiscountDistricts = ({districtList}) => {
  return (
    <div>
      {districtList.map(item => <div key={item}>
        {item}
      </div>)}
    </div>
  );
};

export default DiscountDistricts;