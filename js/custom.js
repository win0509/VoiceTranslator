//번역 API Document ; https://mymemory.translated.net/

const selectedBtns = document.querySelectorAll('.select-btns button');
const toElmt = document.querySelector('.to')
const toTextArea = document.querySelector('.lang-to textarea');
const fromTextArea = document.querySelector('.lang-from textarea');
const translateBtn = document.querySelector('.translate');


//언어 선택 버튼 활성화 및 기능 실행

selectedBtns.forEach((btn) => {
      btn.addEventListener('click', function(){
            selectedBtns.forEach((btn) => {
                  btn.classList.remove('active');

            });
            this.classList.add('active');

            const toLang = this.textContent;
            const langForm = this.getAttribute("id");
            toElmt.textContent = toLang 
            toElmt.setAttribute("value", langForm);
            toTextArea.setAttribute('placeholder', `${toLang}로 변역 됩니다.`)
      });
});

async function translateLanguage(){
      const fromTextValue = fromTextArea.value;
      alert(fromTextValue);
}

translateBtn.addEventListener('click', function(){
      if(!fromTextArea.value){
            alert('번역할 말을 입력해 주세요.');
            fromTextArea.focus();
            return
      }
      translateLanguage()
});

// https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|ko

// async function logJSONData() {
//       const response = await fetch("https://api.mymemory.translated.net/get?q=where can I take the bus?&langpair=en|ko");
//       const jsonData = await response.json();
//       console.log(jsonData);
//     }

//     logJSONData();