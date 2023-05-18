let vm = new Vue({
    el: "#app",
    data: {
        title: "Data API Mahasiswa",
        description: "Data API ada di Vercel",
        dataMhs: null,
        nama: null,
        alamat: null,
        banyak_pesanan: null,
        tanggal_pesan: null,
        ucapan: null
    },
    methods: {
        savePemesanan: function() {
            console.log("Button simpan ditekan")
            let _data = {
                'nama' : this.nama,
                'alamat' : this.alamat,
                'banyak_pesanan' : this.banyak_pesanan,
                'tanggal_pesan' : this.tanggal_pesan,
                'ucapan' : this.ucapan
            }
            axios
            .post('https://node-api-uas.vercel.app/pemesanan', _data)
            .then(response => {
                console.log(response);
                $('#exampleModal').modal('hide');
            })
            .catch(error => {
                console.log(error);
            })
        },
        deletePemesanan: function(id) {
            console.log("Button hapus ditekan")
            axios
            .delete('https://node-api-uas.vercel.app/pemesanan/' + id)
            .then(response => {
                console.log(response)
                this.getPemesanan()
            })
        },
        getPemesanan() {
            axios
            .get('https://node-api-uas.vercel.app/pemesanan')
            .then(response => {
                // console.log(response);
                this.dataMhs = response.data
            })
        }
    },
    mounted() {
        this.getPemesanan()
    }
})