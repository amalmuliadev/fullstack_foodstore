import React from 'react'
import { LayoutOne, Text, Card, Responsive } from 'upkit'
import TopBar from '../../components/TopBar'

import FaHome from '@meronex/icons/fa/FaHome';
import FaAddressBook from '@meronex/icons/fa/FaAddressBook';
import FaArrowRight from '@meronex/icons/fa/FaArrowRight';
import FaFileInvoice from '@meronex/icons/fa/FaFileInvoice';
import FaDatabase from '@meronex/icons/fa/FaDatabase';
import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux';


const IconWrapper = ({children}) => {
  return <div className="text-white text-5xl flex justify-center mb-5">
  {children}
  </div>
}

const menus = [
  {label: 'Beranda', icon: <IconWrapper><FaHome/></IconWrapper>, url: '/', guard:'user'},
  {label: 'Alamat', icon: <IconWrapper><FaAddressBook/></IconWrapper>, url: '/alamat-pengiriman', guard:'user'},
  {label: 'Pesanan', icon: <IconWrapper><FaFileInvoice/></IconWrapper>, url: '/pesanan', guard:'user'},
  {label: 'Manajemen Produk', icon: <IconWrapper><FaDatabase/></IconWrapper>, url: '/manajemen-produk', guard:'admin'},
  {label: 'Logout', icon: <IconWrapper><FaArrowRight/></IconWrapper>,
  url: '/logout', guard:'user'}
];


const UserAccount = () => {

  let { user } = useSelector(state => state.auth);

  return (
    <LayoutOne>
      <TopBar />
        <Text as="h3"> Akun Anda </Text>
        <br />
        <Responsive desktop={4} tablet={4} mobile={2}>
        {menus.filter(menu => menu.guard === user.role || user.role === 'admin').map((menu, index) => {
            return <div key={index} className="px-2 pb-2">
              <Link to={menu.url}>
                <Card
                  header={menu.icon}
                  body={<div className="text-center
                  font-bold text-white">
                  {menu.label}
                </div>}
                />
              </Link>
            </div>
        })}
      </Responsive>
    </LayoutOne>
  )
}

export default UserAccount
