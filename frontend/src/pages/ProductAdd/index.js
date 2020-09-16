import React from 'react'
import {LayoutOne,
  InputText,
  FormControl,
  // Textarea,
  Button,
  Text} from 'upkit';
import TopBar from '../../components/TopBar';

import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { rules } from './validation';
import SelectCategory from '../../components/SelectCategory';
import SelectTags from '../../components/SelectTags';
// import { formatRupiah } from '../../utils/format-rupiah';

import { createProduct } from '../../api/product';

const ProductAdd = () => {

  let history = useHistory();
  let { handleSubmit, register, errors, setValue, watch, getValues } = useForm();
  let [selectedFile, setIsSelectedFile] = React.useState();
  
  let allFields = watch();

  React.useEffect(() => {
		register({name: 'category'}, rules.category);
		register({name: 'tag'}, rules.tag);
  }, [register])

  const updateValue = 
    (field, value) => setValue(field, value, {shouldValidate: true, shouldDirty: true});


  const onChangeHandler = event =>{

    // console.log(event.target.files[0]);
    setIsSelectedFile({
      data: event.target.files[0],
      loaded: 0,
    })

}


  const onSubmit = async formData => {
    let payload = {
      file: selectedFile.data,
      name: formData.nama_produk,
      price: formData.price,
      discount: formData.discount,
      category: formData.category.value,
      tags: formData.tag,
    }

    console.log(payload);

    let { data } = await createProduct(payload);

    if(data.error) return;

    history.push('/manajemen-produk');
  }
  


  return (
    <LayoutOne>
      <TopBar />
      <br />
      <Text as="h3">Tambah Produk</Text>
      <br />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="file" name="file" onChange={onChangeHandler}/>
          <FormControl label="Nama Produk" errorMessage={errors.nama_produk?.message} color="black">
            <InputText
              placeholder="Nama Produk"
              fitContainer
              name="nama_produk"
              ref={register(rules.nama_produk)}
            />
          </FormControl>

          <FormControl label="Harga" errorMessage={errors.price?.message} color="black">
            <InputText
              placeholder="Harga"
              fitContainer
              name="price"
              ref={register(rules.price)}
            />
          </FormControl>

          <FormControl label="Diskon" errorMessage={errors.discount?.message} color="black">
            <InputText
              placeholder="Diskon"
              fitContainer
              name="discount"
              ref={register(rules.discount)}
            />
          </FormControl>

          <FormControl label="Kategori" errorMessage={errors.category?.message} color="black" >
              <SelectCategory
                onChange={option => updateValue('category', option)}
                value={getValues().category}
              />
          </FormControl>

          <FormControl label="Tag" errorMessage={errors.tag?.message} color="black" >
              <SelectTags
                onChange={option => updateValue('tag', option)}
                value={getValues().tag}
              />
          </FormControl>
          
          <Button fitContainer>
              Simpan
          </Button>
        </form>
      </div>
    </LayoutOne>
  )
}

export default ProductAdd
