import React from 'react'
import { config } from '../../config'
import BounceLoader from 'react-spinners/BounceLoader';
import {LayoutOne,
  InputText,
  FormControl,
  Button,
  Text} from 'upkit';
import TopBar from '../../components/TopBar';
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { rules } from './validation';
import SelectCategory from '../../components/SelectCategory';
import SelectTags from '../../components/SelectTags';

import { getProductsId, updateProduct } from '../../api/product';

const ProductEdit = () => {
  let [product, setProduct] = React.useState(null)
  let [error, setError] = React.useState('');
  let [status, setStatus] = React.useState('process');
  let { params } = useRouteMatch();

  let history = useHistory();
  let { handleSubmit, register, errors, setValue, watch, getValues } = useForm();

  const [image, setImage] = React.useState({ preview: "", raw: "" });

  watch();

  React.useEffect(() => {
    getProductsId(params?.product_id)
      .then(({data}) => {
        if(data?.error){
          setError(data.message || "Terjadi kesalahan yang tidak diketahui");
        }

        setProduct(data);

        setValue('category', {label: data.category.name, value: data.category._id});

        setValue('tag', data.tags.map((items) => {
          return { 'label': items.name, 'value': items._id}
        }));
        
      })
      .finally(() => setStatus('idle'));

		register({name: 'category'}, rules.category);
    register({name: 'tag'}, rules.tag);
    // register({name: 'image'}, rules.image);
  }, [params, register])

  const updateValue = (field, value) => setValue(field, value, {shouldValidate: true, shouldDirty: true});

  const onChangeHandler = (e) =>{

    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }

  }


  const onSubmit = async (formHook) => {
  
    let payload = new FormData();

    payload.append('image', image.raw);
    payload.append('name', formHook.nama_produk);
    payload.append('price', formHook.price);
    payload.append('discount', formHook.discount);
    payload.append('category', formHook.category.value);
    payload.append('tags', JSON.stringify(formHook.tag));

    let { data } = await updateProduct(payload, product._id);

    if(data.error) return;

    history.push('/manajemen-produk');
  }

  if(error.length){
    return (
      <LayoutOne>
        <TopBar/>
        <Text as="h3"> Terjadi Kesalahan </Text> 
        {error}
      </LayoutOne>
    )
  }

  if(status === 'process'){
    return <LayoutOne>
      <div className="text-center py-10">
        <div className="inline-block">
          <BounceLoader color="red"/>
        </div>
      </div>
    </LayoutOne> 
  }
  
  return (
    <LayoutOne>
      <TopBar />
      <br />
      <Text as="h3">Edit Produk</Text>
      <br />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl label="Nama Produk" errorMessage={errors.nama_produk?.message} color="black">
            <InputText
              placeholder="Nama Produk"
              fitContainer
              value={product?.name}
              name="nama_produk"
              ref={register(rules.nama_produk)}
            />
          </FormControl>

          <FormControl label="Harga" errorMessage={errors.price?.message} color="black">
            <InputText
              placeholder="Harga"
              fitContainer
              value={product?.price}
              name="price"
              ref={register(rules.price)}
            />
          </FormControl>

          <FormControl label="Diskon" errorMessage={errors.discount?.message} color="black">
            <InputText
              placeholder="Diskon"
              fitContainer
              value={product?.discount}
              name="discount"
              ref={register(rules.discount)}
            />
          </FormControl>

          <FormControl label="Kategori" errorMessage={errors.category?.message} color="black" >
              <SelectCategory
                onChange={option => updateValue('category', option)}
                value={getValues().category}
                ref={register(rules.category)}
              />
          </FormControl>

          <FormControl label="Tag" errorMessage={errors.tag?.message} color="black" >
              <SelectTags
                onChange={option => updateValue('tag', option)}
                value={getValues().tag}
                ref={register(rules.tag)}
              />
          </FormControl>

          
          <FormControl label="Gambar Produk" errorMessage={errors.image?.message} color="black">
            <input type="file" name="image" required ref={register(rules.image)} onChange={onChangeHandler}/>
          </FormControl>
          <label htmlFor="upload-button">
            {(product?.image_url && !image.preview) ?
              <img src={`${config.api_host}/upload/${product.image_url}`} alt="dummy" width="300" height="300" />
            :
            image.preview ? (
              <img src={image.preview} alt="dummy" width="300" height="300" />
            ) : (
              <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <h5 className="text-left">Upload your photo</h5>
              </>
            )}
          </label>
          <br />
          
          <Button fitContainer>
              Simpan
          </Button>
        </form>
      </div>
    </LayoutOne>
  )
}

export default ProductEdit
