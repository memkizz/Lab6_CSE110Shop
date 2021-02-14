// product-item.js


class ProductItem extends HTMLElement {

  static get observedAttributes() {
    return ['src', 'title', 'price', 'id'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    let style = document.createElement('style')
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    `

  
    //List Wrapper
    const wrapper = this.appendChild(document.createElement('li'))
    wrapper.setAttribute('class', 'product')

    //Image
    const icon = wrapper.appendChild(document.createElement('img'))
    this.image = icon
    icon.alt = this.hasAttribute('title') ? this.getAttribute('title') : "undefined"
    icon.src = this.hasAttribute('img') ? this.getAttribute('img') : "undefined";

    //Title Paragraph
    const p1 = wrapper.appendChild(document.createElement('p'))
    this.tempp1 = p1;
    p1.setAttribute('class', 'title')
    p1.textContent = this.hasAttribute('title') ? this.getAttribute('title') : "undefined"

    //Price Paragraph
    const p2 = wrapper.appendChild(document.createElement('p'))
    this.tempp2 =p2;
    p2.setAttribute('class', 'price')
    p2.textContent = this.getAttribute('data-price')

    //Apply
    this.shadowRoot.append(style, wrapper)

  }

  //Register Callbacks
  attributeChangedCallback(name, oldValue, newValue) {
    //console.log(name)
    if (name === 'title') {
      this.tempp1.textContent = newValue;
      this.image.setAttribute('alt', newValue);
    }
    else if (name === 'src') {
      this.image.setAttribute('src', newValue);
    }
    else if(name === 'price') {
      this.tempp2.textContent = newValue;
    }
   
  }
}

customElements.define('product-item', ProductItem);