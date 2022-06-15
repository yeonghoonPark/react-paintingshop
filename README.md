## Painting-Shop, React라이브러리를 활용한 반응형 SPA 제작

### 1. 사이트 바로가기

- 데모사이트 : <a href="https://yeonghoonpark.github.io/react-paintingshop/" target="_blank">https://yeonghoonpark.github.io/react-paintingshop/</a>

### 2. 개발목표

- React 라이브러리를 활용한 반응형 SPA(Single Page Application) 제작
- react-router-dom 라이브러리 활용 및 이해
- json파일을 이용한 data값 출력

### 3. 사용기술

- HTML
- CSS
- javaScript
- Media Query
- React, react-router-dom

### 4. 동작기능

#### 4-1. 오토 슬라이드
###### 참조코드
  ```ts
  let [zeroCount, setZeroCount] = useState(0);
  
  // setInterval을 이용, 클래스에 active를 토글하여 CSS의 opcity를 조작
  let slideMovement = () => {
    setInterval(() => {
      let slide = document.querySelectorAll('.slide');
      slide.forEach((_item, idx) => {
        slide[idx].classList.remove('active');
      })
      if (zeroCount > 2) {
        zeroCount = 0;
      }
      slide[zeroCount++].classList.add('active');
    }, 8000);
  }
  ```
---
#### 4-2. 네비게이션
###### 참조이미지 및 코드
![nav](https://user-images.githubusercontent.com/95198410/173631010-b3bed9d3-a20f-42ac-87b2-7f3b9397ebb2.jpg)
  ```ts
  // event개체 활용, 현재타겟의 active를 토글하여 CSS 조작
  let toggleActive = (event) => {
    event.currentTarget.classList.toggle('active');
  }

  let navTmCall = (event) => {
    let navTm = document.querySelector('.nav-tm');
    navTm.classList.toggle('active');
    toggleActive(event);
  }
  ```
---
#### 4-3. pageYOffset을 이용한 to-top버튼 이벤트
###### 참조이미지 및 코드
![to-top](https://user-images.githubusercontent.com/95198410/173633239-00f29c83-65c5-4622-ad43-dc7ed5d84394.jpg)
  ```ts
  // pageYOffset을 이용, pageYOffset의 조건에 따라 toTop버튼의 display를 조작
  let pageYOffsetScroll = () => {
    window.addEventListener('scroll', () => {
      let toTop = document.querySelector('.to-top');
      if (window.pageYOffset <= 0 || window.pageYOffset <= 700) {
        toTop.classList.remove('active');
      } else if (window.pageYOffset > 700) {
        toTop.classList.add('active');
      }
    });
  }
  
  let toTop = () => {
    window.scrollTo({ top: 0 });
  }
  ```
---  
#### 4-4. shop페이지의 all, watercolor, oilcolor 버튼에 따른 Item컴포넌트 필터 
###### 참조이미지 및 코드
![button](https://user-images.githubusercontent.com/95198410/173633748-bbb61828-89d7-48d9-b9ed-f75925e3561f.jpg)
  ```ts
  import productData from './data/productData.json';
  
  // useState를 이용하여 json파일의 data값 저장
  let [useProductData, setUseProductData] = useState(productData);

  // json에서 받은 data값에 map()을 이용하여 <Item />컴포넌트 반복
  let newProductData = useProductData.map((item) => {
      return (
          <Item item={item} key={item.id} />
      );
  })
  
  // 반복 된 json파일의 data값을 버튼value의 조건에 따라 filter
  let onButtonClick = (event) => {
        let value = event.target.value;
        if (value === 'all') {
            let filteredAllcolor = productData.filter(item => item.type !== null);
            // filter된 data값을 useState로 변경
            setUseProductData(filteredAllcolor);
        } else if (value === 'watercolor') {
            let filteredWatercolor = productData.filter(item => item.type === 'Watercolor');
            setUseProductData(filteredWatercolor);
        } else if (value === 'oilcolor') {
            let filteredOilcolor = productData.filter(item => item.type === 'Oilcolor');
            setUseProductData(filteredOilcolor);
        }
    }
  ```
---

### 5. Mobile, Tablet, PC Interface 미리보기

#### 5-1. Mobile
  
  ![m_shop](https://user-images.githubusercontent.com/95198410/173616610-7579020a-10bf-45f8-9f91-09021a5f1f17.jpg)
  ![m_main_top](https://user-images.githubusercontent.com/95198410/173616559-58e06858-b715-4299-a049-3a1f235ac371.jpg)
  ![m_main_bottom](https://user-images.githubusercontent.com/95198410/173616580-d2327156-855b-4a48-8a49-bdb2743ead01.jpg)
  
#### 5-2. Tablet
  
  ![t_shop_nav](https://user-images.githubusercontent.com/95198410/173617309-505eb4b6-d09d-495f-84c2-5c4b54b47427.jpg)
  ![t_shop](https://user-images.githubusercontent.com/95198410/173617317-bbcc2a95-440d-4823-9501-822a1b363adc.jpg)

#### 5-3. Desktop

  ![d_main](https://user-images.githubusercontent.com/95198410/173617447-eb168b5c-100f-4c0c-8d77-b0b17d314a8c.jpg)
  ![d_shop](https://user-images.githubusercontent.com/95198410/173617616-3cd4e25a-16cc-4374-8bb8-863696402b21.jpg)

### 6. 코드 바로가기

- App.js : https://github.com/yeonghoonPark/react-paintingshop/blob/main/src/App.js
- main.js : https://github.com/yeonghoonPark/react-paintingshop/blob/main/src/main.js
- shop.js : https://github.com/yeonghoonPark/react-paintingshop/blob/main/src/shop.js
- css : https://github.com/yeonghoonPark/react-paintingshop/tree/main/src/css
- components : https://github.com/yeonghoonPark/react-paintingshop/tree/main/src/components
- data.json : https://github.com/yeonghoonPark/react-paintingshop/tree/main/src/data
