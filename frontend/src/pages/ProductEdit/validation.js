const rules = {
  nama_produk: {
      required: { value: true, message: 'Nama produk tidak boleh kosong.'},
      maxLength: { value: 100, message: 'Panjang nama nama produk maksimal 100 karakter'},
      minLength: { value: 3, message: 'Panjang nama nama produk minimal 3 karakter'}
  },
  price: {
      required: { value: true, message: 'Harga tidak boleh kosong.'}
  },
  discount: {
      required: { value: true, message: 'diskon tidak boleh kosong'}
  },
  category: {
      required: { value: true, message: 'kategori tidak boleh kosong,'}
  },
  tag: {
      required: { value: true, message: 'tag tidak boleh kosong.'}
  },
  image: {
    required: { value: true, message: 'image tidak boleh kosong.'}
  }
}
export { rules };