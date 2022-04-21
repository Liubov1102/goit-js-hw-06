
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counter = {
    counterValue: 0,
    decrement(){
        console.log('decrement => this', this);
        this.counterValue -=1;
    },
    increment(){
        console.log('increment => this', this);
        this.counterValue +=1;
    },
};

decrementBtn.addEventListener('click', function () {
    counter.decrement();
   
    valueEl.textContent = counter.counterValue;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
  
    valueEl.textContent = counter.counterValue;
});
