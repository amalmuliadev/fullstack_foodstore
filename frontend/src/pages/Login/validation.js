

const rules = {
    email: {
        required: {value: true, message: 'Email tidak boleh kosong.'},
        maxLength: {value: 255, message: 'Panjang email maksimal 255 arakter'}
    },
    password: {
        required: {value: true, message: 'Password tidak boleh kosong.'},
        maxLength: {value: 255, message: 'Panjang password maksimal 255 karakter.'}
        }
    }

export {rules}