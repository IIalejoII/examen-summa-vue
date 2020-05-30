<template>
    <div class="container">
      <div class="row">
        <div class="col container">
          <h1>Summa Solutions FED Test</h1>
          <p>Lorem  ipsum dolor sit amet consectetur adipisicing elit. Maiores in, provident a iusto neque possimus doloremque hic quia nihil sunt natus aliquam voluptatum ratione quod tempore, tempora odio. Quam, nulla?</p>
          <div class="products-wrapper row d-flex align-items">
            <div class="product p-2 col-md-3 col-6 align-self-stretch" v-for="(product, index) in products" :key="index">
              <div class="content text-left">
                <div class="image-wrapper">
                  <img class="img-fluid" :src="product.image.URL" :alt="product.image.alt">
                </div>
                <h4 class="title p-3">{{ product.title}}</h4>
                <div class="product-description p-3">
                  <div class="price-box">
                    <span class="regular-price">Antes ${{ formatPrice(product.regularPrice) }}</span>
                    <span class="discount-price">${{ formatPrice(product.discountPrice) }}</span>
                  </div>
                  <button class="btn btn-primary w-100">Ver detalles</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      products() {
        return this.$store.state.products;
      }
    },
    methods: {
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 0;
  background: #f7f7f7
}

.products-wrapper {

  .product {
    
    .content {
      background: #fff;
      height:100%
    }

    .title {
      font-size: 16px;
      line-height: 1.5em;
      height: 3.5em;
      @media only screen and (min-width:768px) {
        height:4.5em
      }
      @media only screen and (min-width:992px) {
        height:3.5em
      }
      overflow: hidden;
    }

    .regular-price {
      display: block;
      color: #a5a5a5;
      font-size: 12px;
    }
    
    .discount-price {
      display: block;
      color: #333;
      font-size: 18px;
      font-weight: 700;
    }

    .btn-primary {
      background: #28a745;
      border-color: #28a745; 
      color: white;
      text-transform: uppercase;
      border-radius: 20px;
      margin-top: 10px;
      font-size: 12px;
      @media only screen and(min-width:768px) {
        font-size: 14px;
      }
      &:focus {
        border: solid 1px #28a745;
        box-shadow: none;
      }
    }
  }
}
</style>
