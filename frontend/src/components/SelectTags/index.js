import React from 'react'
// import debounce from 'debounce-promise';
import { number, oneOfType, string, func, shape } from 'prop-types';
import { Select } from 'upkit';
import axios from 'axios';
import { config } from '../../config';

const SelectTags = ({value, onChange}) => {

  let [ tags, setTags ] = React.useState([]);
  let [ isFetching, setIsFetching ] = React.useState(false);

  React.useEffect(() => {
    setIsFetching(true);
    axios.get(`${config.api_host}/api/tags`)
    .then(({data}) => {
        if(!data.error){
            setTags(data.data)
        }
    })
    .catch(error => {
      console.log(error.response)
    })
    .finally(_ => setIsFetching(false))
  }, []);

  return (
    <Select
      options={tags.map(tag => ({ label: tag.name, value: tag._id}))}
      // data={tags.map(tag => ({ name: tag.name, _id: tag._id}))}
      value={value}
      onChange={onChange}
      isMulti
      isLoading={isFetching}
      sDisabled={isFetching || !tags.length}
    />
  )
}

SelectTags.propTypes = {
  onChange: func,
  value: shape({label: string, value: oneOfType([string, number])})
}

export default SelectTags
