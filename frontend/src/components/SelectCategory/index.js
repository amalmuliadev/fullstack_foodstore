import React from 'react'
import { number, oneOfType, string, func, shape } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'upkit';
import { fetchCategories} from '../../features/Categories/actions'

const SelectCategory = ({value, onChange}) => {

  let dispatch = useDispatch();
  let categories = useSelector(state => state.categories);
  let [ isFetching, setIsFetching ] = React.useState(false);

  React.useEffect(() => {
    setIsFetching(true);
    dispatch(fetchCategories());
    setIsFetching(false)
  }, [])

  let { data } = categories;

  return (
    <Select
      options={data.map(category => ({
              label: category.name,
              value: category._id}))}
      value={value}
      onChange={onChange}
      isLoading={isFetching}
      sDisabled={isFetching || !data.length}
    />
  )
}

SelectCategory.propTypes = {
  onChange: func,
  value: shape({label: string, value: oneOfType([string, number])})
}

export default SelectCategory
