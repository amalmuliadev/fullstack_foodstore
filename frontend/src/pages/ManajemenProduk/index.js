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
import { Link } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config';
import {
    fetchProducts,
    setPage,
    setKeyword,
    } from '../../features/Products/actions';


const ManajemenProduk = () => {
  let dispatch = useDispatch();
  let products = useSelector(state => state.products);

  React.useEffect(() => {
    dispatch(fetchProducts());
}, [dispatch, products.currentPage,  products.keyword]);

const columns = [
  { Header: 'Gambar', accessor: items => {
  return <img style={{height: 40}} src={`${config.api_host}/upload/${items.image_url}`} alt="gambarProduk"/>
  }},
  { Header: 'Nama', accessor: 'name'},
  { Header: 'Harga', accessor: items => formatRupiah(items.price)},
  { Header: 'Diskon', accessor: 'discount'},
  { Header: 'Kategori', accessor: items => {
      return <Badge color="blue">{items.category.name}</Badge>
  }}
];

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
