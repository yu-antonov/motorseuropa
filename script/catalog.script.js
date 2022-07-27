
(()=>{
  /*
    База данных по двигателям
  */
    const dataEngines = [
      {
        name: 'Marcedes-Benz',
        subname: 'Sprinter',
        volume: '3.0, 642',
        fuelType: 'diesel',
        year: 2017,
        image: './mercedes-sprinter/mercedes-sprinter-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'S-класс S560',
        volume: '4.0',
        fuelType: 'benzine',
        year: 2017,
        image: './mercedes-s/mercedes-s-class-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'GLE',
        volume: '3.0',
        fuelType: 'benzine',
        cusow: 'w166',
        year: 2017,
        image: './mercedes-gle/mercedes-gle-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'GLC',
        volume: '2.0',
        fuelType: 'benzine',        
        year: 2017,
        image: './mercedes-glc/mercedes-glc-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'A-класс A45 AMG',
        volume: '2.0',
        fuelType: 'benzine',
        year: 2017,
        image: './mercedes-a/mercedes-a-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'C-класс',
        volume: '2.0',
        fuelType: 'benzine',
        cusow: 'w205',
        year: 2017,
        image: './mercedes-c/mercedes-c-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'Sprinter 906',
        volume: '2.2, 651',
        fuelType: 'diesel',
        year: 2017,
        image: './mercedes-sprinter/mercedes-sprinter-906-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'S-класс',
        volume: '6.3, 177.980',
        fuelType: 'benzine',
        year: 2017,
        image: './mercedes-s/mercedes-s-amg-w.jpeg'    
      },
      {
        name: 'Marcedes-Benz',
        subname: 'GLC',
        volume: '2.2, (совместим с Sprinter 906)',
        fuelType: 'diesel',
        year: 2018,
        image: './mercedes-glc/mercedes-glc-2.2-w.jpeg'    
      }        
    ];


  /*
  * Кастомный селект
  */  
  const selectValue = document.querySelector('.current__value');
  const selectDropdown = document.getElementById('select__dropdown');
  const selectItem = document.querySelectorAll('.dropdown__item');

  selectValue.addEventListener('click', function(){
    selectDropdown.classList.toggle('selected');    
  })

  selectItem.forEach(function(item){
    item.addEventListener('click', function() {
      const allEng = document.querySelector('.allEngines');
      allEng ? allEng.remove() : null;
      selectValue.textContent = item.textContent;      
      const allEngines = document.createElement('li');
      allEngines.classList.add('dropdown__item', 'allEngines');
      allEngines.textContent = 'Убрать фильтр';
      allEngines.addEventListener('click', ()=> {
        selectValue.textContent = 'Все двигатели';
        renderEngines(dataEngines);
        allEngines.remove();
        selectDropdown.classList.remove('selected');
      })
      selectDropdown.append(allEngines);
      if(item.textContent === 'Mercedes-Benz Sprinter') {
        const newArray = dataEngines.filter(item => item.subname.includes('Sprinter'));
        renderEngines(newArray);
      }
      if (item.textContent === 'Mercedes-Benz S-class') {
        const newArray = dataEngines.filter(item => item.subname.includes('S-класс'))
        renderEngines(newArray);
      }
      if (item.textContent === 'Mercedes-Benz A-class') {
        const newArray = dataEngines.filter(item => item.subname.includes('A-класс'))
        renderEngines(newArray);
      }
      if (item.textContent === 'Mercedes-Benz C-class') {
        const newArray = dataEngines.filter(item => item.subname.includes('C-класс'))
        renderEngines(newArray);
      }
      if (item.textContent === 'Mercedes-Benz GLE') {
        const newArray = dataEngines.filter(item => item.subname.includes('GLE'))
        renderEngines(newArray);
      }
      if (item.textContent === 'Mercedes-Benz GLC') {
        const newArray = dataEngines.filter(item => item.subname.includes('GLC'))
        renderEngines(newArray);
      }
      selectDropdown.classList.remove('selected');
    })
  })
  /* ===========================================*/  

  function renderEngines(data) {
    const catalogList = document.querySelector('.catalog__list');
    const catalogRight = document.querySelector('.catalog__right');
    catalogList.textContent = '';
    if (data.length < 3) {
      catalogRight.style.height = '80vh';
    } else {
      catalogRight.style.height = 'auto';
    }

    for (let i = 0; i < data.length; i++) {
      const catalogItem = document.createElement('li');
      const catalogContent = document.createElement('div');
      const catalogImage = document.createElement('div');
      const catalogImg = document.createElement('img');
      const engineDescription = document.createElement('div');
      const engineDescr = document.createElement('div');
      const engineTitle = document.createElement('p');
      const engineYear = document.createElement('span');
      const engineValue = document.createElement('span');
      const engineType = document.createElement('span');
      const engineButton = document.createElement('button');      

      catalogItem.classList.add('catalog__item');
      catalogContent.classList.add('catalog__content');
      catalogImage.classList.add('catalog__image');
      catalogImg.classList.add('catalog__img');
      engineDescription.classList.add('engine__descr');
      engineDescr.classList.add('engine__specification');
      engineTitle.classList.add('engine__text');
      engineButton.classList.add('hero__btn', 'engine__button');
      engineYear.classList.add('engine__span');
      engineValue.classList.add('engine__span');
      engineType.classList.add('engine__span');
      catalogImg.src = data[i].image;
      catalogImg.alt = 'Engine image';
      engineTitle.textContent = data[i].name + ' ' + data[i].subname;
      engineYear.textContent = `Год: ${data[i].year}`;
      engineValue.textContent = `Объем: ${data[i].volume}`;
      engineType.textContent = `Тип топлива: ${data[i].fuelType === 'diesel' ? 'дизель' : 'бензин'}`
      engineButton.textContent = 'Узнать цену';

      catalogImg.addEventListener('click', function() {
        const modal = document.createElement('div');
        const modalWindow = document.createElement('div');
        const modalClose = document.createElement('button');
        const closeSpan = document.createElement('span');      
        
        modal.classList.add('modal');
        modalWindow.classList.add('modal__window');
        modalClose.classList.add('modal__close');
        closeSpan.classList.add('modal__span');

        modalWindow.innerHTML = `<img src=${catalogImg.src} alt="Engine image" class="modal__img">`;
        modalClose.addEventListener('click', () => {
          modal.classList.add('remove');
          document.body.style.overflow = 'visible';
          let timeout = setTimeout(() => {
            modal.remove();
          }, 300)         
        });

        modalClose.append(closeSpan);
        modal.append(modalWindow, modalClose);
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';            
      });

      engineButton.addEventListener('click', function() {
        const modal = document.createElement('div');
        const modalWindow = document.createElement('div');
        const modalClose = document.createElement('button');
        const closeSpan = document.createElement('span');
        const form = document.createElement('form');
        const inputContainerName = document.createElement('div');
        const inputContainerTel = document.createElement('div');
        const inputName = document.createElement('input');
        const inputTel = document.createElement('input');
        const cutName = document.createElement('div');
        const cutTel = document.createElement('div');
        const lableName = document.createElement('lable');
        const lableTel = document.createElement('lable');
        const logo = document.createElement('img');        
        const formTextArea = document.createElement('textarea');
        const formBtn = document.createElement('button');
        const modalDescrBlock = document.createElement('div');
        const modalSocialList = document.createElement('ul');
        const socialItemTelegram = document.createElement('li');
        const socialItemWhatsapp = document.createElement('li');   
        const socialItemViber = document.createElement('li');
        const socialLinkTelegram = document.createElement('a');
        const socialLinkWhatsapp = document.createElement('a');   
        const socialLinkViber = document.createElement('a');
        const socialIconTelegram = document.createElement('img');
        const socialIconWhatsapp = document.createElement('img');   
        const socialIconViber = document.createElement('img');                   
        
        modal.classList.add('modal');
        modalWindow.classList.add('modal__window', 'modal__catalog');
        modalClose.classList.add('modal__close');
        closeSpan.classList.add('modal__span');
        modalDescrBlock.classList.add('modal__descr');
        modalSocialList.classList.add('modal__social-list', 'social__list');
        socialItemTelegram.classList.add('social__item');
        socialItemWhatsapp.classList.add('social__item');
        socialItemViber.classList.add('social__item');
        socialLinkTelegram.classList.add('social__link');
        socialLinkTelegram.href = 'https://telegram.im/@Autombeuropa';
        socialLinkTelegram.target = '_blank'
        socialLinkWhatsapp.classList.add('social__link'); 
        socialLinkWhatsapp.href = 'https://wa.me/+375291642919';
        socialLinkWhatsapp.target = '_blank'
        socialLinkViber.classList.add('social__link');
        socialLinkViber.href = 'viber://chat?number=%2B375291642919';
        socialLinkViber.target = '_blank'
        socialIconTelegram.classList.add('social__icon');
        socialIconTelegram.src = '../images/telegram.svg';
        socialIconTelegram.alt = 'Social Icon';
        socialIconWhatsapp.classList.add('social__icon');
        socialIconWhatsapp.src = '../images/WhatsApp.svg';
        socialIconWhatsapp.alt = 'Social Icon';
        socialIconViber.classList.add('social__icon');
        socialIconViber.src = '../images/Viber.svg';
        socialIconViber.alt = 'Social Icon';
        inputContainerName.classList.add('input-container', 'ic1');
        inputContainerTel.classList.add('input-container', 'ic2');
        inputName.classList.add('input');
        inputName.type = 'text';
        inputName.placeholder = ' ';
        inputTel.classList.add('input');
        inputTel.type = 'tel';
        inputTel.placeholder = ' ';
        cutName.classList.add('cut', 'cut-short');
        cutTel.classList.add('cut');
        lableName.classList.add('placeholder');
        lableName.textContent = 'Имя';
        lableTel.classList.add('placeholder');
        lableTel.textContent = 'Телефон';
        
        form.classList.add('catalog__form');        
        formTextArea.classList.add('form__input', 'textarea', 'input');
        formBtn.classList.add('hero__btn', 'form__btn');
        logo.classList.add('modal__logo');

        logo.src = '../images/logo-white.svg';
        logo.alt = 'MotorsEuropa Logo';       

        formTextArea.value = `Здравствуйте, интересует двигатель ${data[i].name} ${data[i].subname} ${data[i].year} ${data[i].volume}`;
        formTextArea.rows = '5';

        formBtn.type = 'submit';
        formBtn.textContent = 'Запросить';

        modalDescrBlock.textContent = 'Уважаемые клиенты, для быстрого получения ответа рекомендуем общаться с нами в любом из нижеуказанных мессенджеров';

        modalClose.addEventListener('click', () => {           
          modal.remove();
          document.body.style.overflow = 'visible';
        });

        formBtn.addEventListener('click', (btn) => {
          btn.preventDefault();
        })

        modalClose.append(closeSpan);
        socialLinkTelegram.append(socialIconTelegram);
        socialLinkWhatsapp.append(socialIconWhatsapp);
        socialLinkViber.append(socialIconViber);
        socialItemTelegram.append(socialLinkTelegram);
        socialItemWhatsapp.append(socialLinkWhatsapp);   
        socialItemViber.append(socialLinkViber);
        modalSocialList.append(socialItemTelegram, socialItemWhatsapp, socialItemViber);
        modalDescrBlock.append(modalSocialList);
        inputContainerName.append(inputName, cutName, lableName);
        inputContainerTel.append(inputTel, cutTel, lableTel);
        form.append(inputContainerName, inputContainerTel, formTextArea, formBtn);        
        modalWindow.append(logo, form, modalClose, modalDescrBlock);
        modal.append(modalWindow);
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
      });
      
      engineDescr.append(engineValue, engineType, engineYear)
      engineDescription.append(engineTitle, engineDescr, engineButton);
      catalogImage.append(catalogImg);
      catalogContent.append(catalogImage, engineDescription);
      catalogItem.append(catalogContent);
      catalogList.append(catalogItem);
    }   
  }
  renderEngines(dataEngines);

  /*
  * Burger Menu
  */
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.toggle('is-active');
    this.classList.toggle('active');
  });

  /*
  * Preloader
  */
  const preloader = document.querySelector('.preloader');
  const preloaderTop = document.querySelector('.preloader__top');
  const preloaderBottom = document.querySelector('.preloader__bottom');

  let timeout = setTimeout(() =>{
    preloaderTop.classList.add('popup');
    preloaderBottom.classList.add('popdown');
  }, 2000);
  let timeout2 = setTimeout(() =>{
    preloader.style.display = 'none';
  }, 3000);
})()