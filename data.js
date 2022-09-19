if (document.querySelector('body').id === 'electronics') {
      const laptops = [
            { type: 'Lenovo - ThinkPad P15 Gen 2', Description: 'NVIDIA 4GB graphics card, 16GB RAM, and 512GB SSD', imgSrc: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzI4OTc5fGltYWdlL3BuZ3xoZTQvaGJlLzE0MTEwNjA3NjcxMzI2LnBuZ3wwYmQwOTNmMDhiNWI3NzhkYTQ1Zjg1YzM4NzNhNDNhYTkxMTVmNWEyMmE5OWNiMzE2NDhhYTE5ZTZiMjM2ODcz/wmd00000487.png' },
            { type: 'HP - ZBook Fury G8', Description: 'Intel Xeon CPU, NVIDIA RTX, 128 GB RAM and 8TB.', imgSrc: 'https://www.notebookcheck-cn.com/uploads/tx_nbc2/zbook.jpg' },
            { type: 'Asus', Description: 'OLED HDR Panel, NVIDIA Geforce, intel core i9-8 core', imgSrc: 'https://trademark-eg.com/wp-content/uploads/2022/06/UX582H-H2007W-2-600x600.webp' },
            { type: 'Dell - Dell Precision 5760', Description: '	AI and VR optimizer, NVIDIA graphics, Intel Xeon or Core i9, and Windows11', imgSrc: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/17-5760/media-gallery/workstations_precision_17_5760_gallery_5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=620&qlt=100,0&resMode=sharp2&size=620,402' },
            { type: 'Apple - MacBook Pro 14” or 16”', Description: 'Retina XDR display, M1 Pro or Max, 21 hours of battery life', imgSrc: 'https://p.turbosquid.com/ts-thumb/9R/1CXzMq/bu/applemacbookpro14inchsilvermb3dmodel001/jpg/1644572892/600x600/fit_q87/63a65ee357a4255f72c4aa422fd0baa9d7fac246/applemacbookpro14inchsilvermb3dmodel001.jpg' },
            { type: 'Apple - MacBook Air', Description: 'M1 chip, 8-core CPU, 8-core GPU, and 18 hours of battery life.', imgSrc: 'https://iapple-eg.com/wp-content/uploads/2022/01/71jGe7roXL._AC_SL1500_.jpg' },
            { type: 'Lenovo - ThinkPad P15 Gen 2', Description: 'NVIDIA 4GB graphics card, 16GB RAM, and 512GB SSD', imgSrc: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzI4OTc5fGltYWdlL3BuZ3xoZTQvaGJlLzE0MTEwNjA3NjcxMzI2LnBuZ3wwYmQwOTNmMDhiNWI3NzhkYTQ1Zjg1YzM4NzNhNDNhYTkxMTVmNWEyMmE5OWNiMzE2NDhhYTE5ZTZiMjM2ODcz/wmd00000487.png' },
            { type: 'HP - ZBook Fury G8', Description: 'Intel Xeon CPU, NVIDIA RTX, 128 GB RAM and 8TB.', imgSrc: 'https://www.notebookcheck-cn.com/uploads/tx_nbc2/zbook.jpg' },
            { type: 'Asus', Description: 'OLED HDR Panel, NVIDIA Geforce, intel core i9-8 core', imgSrc: 'https://trademark-eg.com/wp-content/uploads/2022/06/UX582H-H2007W-2-600x600.webp' },
            { type: 'Dell - Dell Precision 5760', Description: '	AI and VR optimizer, NVIDIA graphics, Intel Xeon or Core i9, and Windows11', imgSrc: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/17-5760/media-gallery/workstations_precision_17_5760_gallery_5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=620&qlt=100,0&resMode=sharp2&size=620,402' },
            { type: 'Apple - MacBook Pro 14” or 16”', Description: 'Retina XDR display, M1 Pro or Max, 21 hours of battery life', imgSrc: 'https://p.turbosquid.com/ts-thumb/9R/1CXzMq/bu/applemacbookpro14inchsilvermb3dmodel001/jpg/1644572892/600x600/fit_q87/63a65ee357a4255f72c4aa422fd0baa9d7fac246/applemacbookpro14inchsilvermb3dmodel001.jpg' },
            { type: 'Apple - MacBook Air', Description: 'M1 chip, 8-core CPU, 8-core GPU, and 18 hours of battery life.', imgSrc: 'https://iapple-eg.com/wp-content/uploads/2022/01/71jGe7roXL._AC_SL1500_.jpg' },

      ]

      const mobiles = [
            { type: 'iPhone 13 Pro', Description: '120Hz display', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/iphone_13_pro_review_1.jpg' },
            { type: 'Samsung Galaxy S22 Ultra', Description: 'Phenomenal display', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/galaxy_s22_ultra_hands_on_19.jpg' },
            { type: 'iPhone 13 – Superb all', Description: 'Brilliant performance', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/iphone_13_review_2.jpg' },
            { type: 'Google Pixel 6a', Description: 'Solid battery life', imgSrc: 'https://b2c-contenthub.com/wp-content/uploads/2022/07/Google-Pixel-6A_review_1.jpg?quality=50&strip=all' },
            { type: 'Google Pixel 6 Pro', Description: 'Best user experience', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/google_pixel_6_pro_review_29.jpg' },
            { type: 'Oppo Find X5 Pro', Description: 'Versatile cameras', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/oppo_find_x5_pro-05.jpg' },
            { type: 'iPhone 13 Pro', Description: '120Hz display', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/iphone_13_pro_review_1.jpg' },
            { type: 'Samsung Galaxy S22 Ultra', Description: 'Phenomenal display', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/galaxy_s22_ultra_hands_on_19.jpg' },
            { type: 'iPhone 13 – Superb all', Description: 'Brilliant performance', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/iphone_13_review_2.jpg' },
            { type: 'Google Pixel 6a', Description: 'Solid battery life', imgSrc: 'https://b2c-contenthub.com/wp-content/uploads/2022/07/Google-Pixel-6A_review_1.jpg?quality=50&strip=all' },
            { type: 'Google Pixel 6 Pro', Description: 'Best user experience', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/google_pixel_6_pro_review_29.jpg' },
            { type: 'Oppo Find X5 Pro', Description: 'Versatile cameras', imgSrc: 'https://images.techadvisor.com/cmsdata/slideshow/3677861/oppo_find_x5_pro-05.jpg' },
      ]

      const laptops_container = document.getElementById('laptops-cards');
      const mobiles_container = document.getElementById('mobiles-cards');

      function viewArray(array_1, array_2) {
            for (let i = 0; i < array_1.length; i++) {
                  laptops_container.innerHTML += `
                  <div class="col-4 gy-5 d-flex justify-content-center align-items-center">
                  <div class="card product" style="width: 20rem;">
                  <img src="${array_1[i].imgSrc}" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${array_1[i].type}</h5>
                  <p class="card-text">${array_1[i].Description}</p>
                  <a href="#" class="button primary-button">Buy now</a>
                  </div>
                  </div>
                  </div>
                  `;
            }

            for (const mobile of array_2) {
                  mobiles_container.innerHTML += `
                  <div class="col-4 gy-5 d-flex justify-content-center align-items-center">
                  <div class="card product" style="width: 20rem;">
                  <img src="${mobile.imgSrc}" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${mobile.type}</h5>
                  <p class="card-text">${mobile.Description}</p>
                  <a href="#" class="button primary-button">Buy now</a>
                  </div>
                  </div>
                  </div>
                  `;
            }
      }

      viewArray(laptops, mobiles)

      function searchFor(search) {
            let filtered_array_1 = laptops.filter(function (item) { return item.type.toLowerCase().includes(search.value.toLowerCase()) });
            laptops_container.innerHTML = `
            <h1 class="products-title my-5">Laptops section</h1>
            `
            let filtered_array_2 = mobiles.filter(function (item) { return item.type.toLowerCase().includes(search.value.toLowerCase()) });
            mobiles_container.innerHTML = `
            <h1 class="products-title my-5">Mobiles section</h1>
            `
            if (filtered_array_1.length > 0 || filtered_array_2.length > 0) viewArray(filtered_array_1, filtered_array_2);
            else viewArray(laptops, mobiles);
      }

}

else {

      const T_shirts = [
            { type: 'U.S. Polo', Description: '6 -Polos', imgSrc: 'https://4.imimg.com/data4/TQ/YK/ANDROID-61712333/product-500x500.jpeg' },
            { type: 'Adidas', Description: '5 - Adidas t-shirts', imgSrc: 'https://i.ebayimg.com/images/g/IjUAAOSwBRVaYimL/s-l400.jpg' },
            { type: 'Max', Description: '5 - printed t-shirts', imgSrc: 'https://www.green-tshirts.com/images/assets/green-tshirts-gr.png' },
            { type: 'Dior', Description: 'Black Dior t-shirt', imgSrc: 'https://images.stockx.com/images/Dior-Flowers-Embroidered-T-Shirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1621451046' },
            { type: 'Pierre Cardin', Description: 'Grey round neck t-shirt', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41KTdXku2uL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg' },
            { type: 'Nike', Description: 'Nike Dark grey t-shirt', imgSrc: 'https://www.firmamentberlin.com/media/image/c6/89/b3/l_0156d0c4bfce9c5_600x600.jpg' },
            { type: 'U.S. Polo', Description: '6 -Polos', imgSrc: 'https://4.imimg.com/data4/TQ/YK/ANDROID-61712333/product-500x500.jpeg' },
            { type: 'Adidas', Description: '5 - Adidas t-shirts', imgSrc: 'https://i.ebayimg.com/images/g/IjUAAOSwBRVaYimL/s-l400.jpg' },
            { type: 'Max', Description: '5 - printed t-shirts', imgSrc: 'https://www.green-tshirts.com/images/assets/green-tshirts-gr.png' },
            { type: 'Dior', Description: 'Black Dior t-shirt', imgSrc: 'https://images.stockx.com/images/Dior-Flowers-Embroidered-T-Shirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1621451046' },
            { type: 'Pierre Cardin', Description: 'Grey round neck t-shirt', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41KTdXku2uL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg' },
            { type: 'Nike', Description: 'Nike Dark grey t-shirt', imgSrc: 'https://www.firmamentberlin.com/media/image/c6/89/b3/l_0156d0c4bfce9c5_600x600.jpg' },
      ]

      const pants = [
            { type: 'H & M', Description: '7 - blue jeans with different color grading', imgSrc: 'https://i.pinimg.com/originals/0e/6c/f1/0e6cf1a7cdeeb86c8c30d876235668c4.jpg' },
            { type: 'Max', Description: 'New jeans collection from Max', imgSrc: 'https://static6.depositphotos.com/1000291/663/i/450/depositphotos_6634332-stock-photo-jeans-clothes-on-shelf-in.jpg' },
            { type: 'Pierre Cardin', Description: 'Red chino pants for men', imgSrc: 'https://i.pinimg.com/originals/6f/81/d9/6f81d95628b5acf9f1227f32309e4117.jpg' },
            { type: 'Dior', Description: 'Last jeans piece on stock', imgSrc: 'https://media.istockphoto.com/photos/blue-mens-jeans-denim-pants-on-orange-background-contrast-saturated-picture-id915923400?k=20&m=915923400&s=612x612&w=0&h=PEBmwyzjjiMaMA57i9pCDJFBhmKgvI94ki_vJeeW3UU=' },
            { type: 'Max', Description: 'last collection of Max jeans', imgSrc: 'https://us.123rf.com/450wm/ollinka/ollinka1803/ollinka180300008/97835014-jeans-stacked-on-a-wooden-background.jpg' },
            { type: 'LC Wakiki', Description: 'Last two pieces of jeans stock', imgSrc: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            { type: 'H & M', Description: '7 - blue jeans with different color grading', imgSrc: 'https://i.pinimg.com/originals/0e/6c/f1/0e6cf1a7cdeeb86c8c30d876235668c4.jpg' },
            { type: 'Max', Description: 'New jeans collection from Max', imgSrc: 'https://static6.depositphotos.com/1000291/663/i/450/depositphotos_6634332-stock-photo-jeans-clothes-on-shelf-in.jpg' },
            { type: 'Pierre Cardin', Description: 'Red chino pants for men', imgSrc: 'https://i.pinimg.com/originals/6f/81/d9/6f81d95628b5acf9f1227f32309e4117.jpg' },
            { type: 'Dior', Description: 'Last jeans piece on stock', imgSrc: 'https://media.istockphoto.com/photos/blue-mens-jeans-denim-pants-on-orange-background-contrast-saturated-picture-id915923400?k=20&m=915923400&s=612x612&w=0&h=PEBmwyzjjiMaMA57i9pCDJFBhmKgvI94ki_vJeeW3UU=' },
            { type: 'Max', Description: 'last collection of Max jeans', imgSrc: 'https://us.123rf.com/450wm/ollinka/ollinka1803/ollinka180300008/97835014-jeans-stacked-on-a-wooden-background.jpg' },
            { type: 'LC Wakiki', Description: 'Last two pieces of jeans stock', imgSrc: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      ]


      const t_shirts_container = document.getElementById('T-shirts-cards');
      const pants_container = document.getElementById('pants-cards');

      const viewArray = (array_1, array_2) => {
            array_1.forEach((t_shirt) => {
                  t_shirts_container.innerHTML += `
      <div class="col-4 gy-5 d-flex justify-content-center align-items-center">
      <div class="card product" style="width: 20rem;">
      <img src="${t_shirt.imgSrc}" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title">${t_shirt.type}</h5>
      <p class="card-text">${t_shirt.Description}</p>
      <a href="#" class="button primary-button">Buy now</a>
      </div>
      </div>
      </div>
      `;
            }
            )

            array_2.map((pants) => {
                  pants_container.innerHTML += `
            <div class="col-4 gy-5 d-flex justify-content-center align-items-center">
            <div class="card product" style="width: 20rem;">
            <img src="${pants.imgSrc}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${pants.type}</h5>
            <p class="card-text">${pants.Description}</p>
            <a href="#" class="button primary-button">Buy now</a>
            </div>
            </div>
            </div>
            `;
            }
            )
      }

      function searchFor(search) {
            let filtered_array_1 = T_shirts.filter(item => item.type.toLowerCase().includes(search.value.toLowerCase()));
            t_shirts_container.innerHTML = `
            <h1 class="products-title my-5">T-shirts section</h1>
            `
            let filtered_array_2 = pants.filter(item => item.type.toLowerCase().includes(search.value.toLowerCase()));
            pants_container.innerHTML = `
            <h1 class="products-title my-5">Pants section</h1>
            `
            if (filtered_array_1.length > 0 || filtered_array_2.length > 0) viewArray(filtered_array_1, filtered_array_2);
            else viewArray(T_shirts, pants);
      }

      viewArray(T_shirts, pants)

}