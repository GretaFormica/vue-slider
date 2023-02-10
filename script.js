const app = Vue.createApp({

    data() { //metodo data

        return {
            games: {

                images: [
                    "./img/returnal-listing-thumb-01-ps5.jpg",
                    "./img/ratchet-and-clank-rift-apart-keyart.jpg",
                    "./img/crash-bandicoot-4-its-about-time-store-art.jpg",
                    "./img/it-takes-two-hero-banner-desktop.jpg",
                    "./img/playstation-store-golden-week-sale-spotlight.jpg",
                    "./img/tony-hawks-pro-skater-1-2-store-art.jpg"
                ],

                activeImage: 0
            },
        }
    },

    methods: {
        prevImage() {
            if (this.games.activeImage - 1 < 0) {
                this.games.activeImage = this.games.images.length - 1;
            } else {
                this.games.activeImage--;
            }

        },

        nextImage() {
            if (this.games.activeImage + 1 >= this.games.images.length) {
                this.games.activeImage = 0;
            } else {
                this.games.activeImage++;
            }
        },
    }

});

app.mount("#root");