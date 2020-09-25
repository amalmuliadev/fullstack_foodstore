import React from 'react'
import {formatRupiah} from '../../utils/format-rupiah'
import { LayoutOne,
  Text,
  Button,
  Table,
  InputText,
  Badge, ButtonCircle
} from 'upkit';
import FaFilter from '@meronex/icons/fa/FaFilter';
import FaEdit from '@meronex/icons/fa/FaEdit';
import FaTrash from '@meronex/icons/fa/FaTrash';
import { Link, useHistory } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config';
import {
    fetchProducts,
    setPage,
    setKeyword,
    } from '../../features/Products/actions';

import { deleteProduct } from '../../api/product';


const ManajemenProduk = () => {
  let dispatch = useDispatch();
  let products = useSelector(state => state.products);

  let [delstatus, setDelstatus ] = React.useState(0)

  React.useEffect(() => {

      dispatch(fetchProducts());
      setDelstatus(0);
      
  }, [dispatch, delstatus, products.currentPage,  products.keyword]);

const columns = [
  { Header: 'Gambar', accessor: items => {
  return <img style={{height: 40}} src={`${config.api_host}/upload/${items.image_url}`} alt="gambarProduk"/>
  }},
  { Header: 'Nama', accessor: 'name'},
  { Header: 'Harga', accessor: items => formatRupiah(items.price)},
  { Header: 'Diskon', accessor: 'discount'},
  { Header: 'Kategori', accessor: items => {
      return <Badge color="blue">{items.category.name}</Badge>
  }},
  { Header: 'Action', accessor: items => {
    return <div><Link to={`/edit-produk/${items._id}`}><ButtonCircle icon={<FaEdit/>}/></Link>
    
    <ButtonCircle onClick={() => {if(window.confirm('Delete this product ?')){deleteProduct(items._id); setDelstatus(1)}}} icon={<FaTrash/>}/></div>
}}
];

let history = useHistory();

const onSelect = (items) => {
  history.push(`/manajemen-produk/edit/${items}`);
}

  return (
    <LayoutOne size="large">
    <div>
        <TopBar/>
        <Text as="h3"> Manajemen Data Produk </Text>
        <br />
        <Link to="/manajemen-produk/tambah">
            <Button>
                Tambah baru
            </Button>
        </Link>
        <br/>
        <br/>
        <div className="w-full text-center mb-10 mt-5">
            <InputText
                fullRound
                value={products.keyword}
                placeholder="cari produk"
                fitContainer
                iconAfter={<ButtonCircle icon={<FaFilter/>}/>}
                onChange={e => {
                dispatch(setKeyword(e.target.value))
            }}
            />
        </div>
        <br />
        <Table
            items={products.data}
            columns={columns}
            totalItems={products.totalItems+15}
            page={products.currentPage}
            isLoading= {products.status === 'process'}
            perPage={products.perpage}
            onPageChange={page => dispatch(setPage(page))}
            primaryKey={'_id'}
        />
    </div>
    </LayoutOne>
  )
}

export default ManajemenProduk
