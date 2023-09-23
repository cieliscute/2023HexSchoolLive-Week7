import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init({
  once: true
});


// 讓index__recent__cards 卡片片尾的狀態區(開賣中...檢視活動etc)可以有hover跳動效果
let stateIcons = document.querySelectorAll('.card-footer__state');
stateIcons.forEach((item) => {
  item.addEventListener('mouseover', function () {
    this.lastElementChild.classList.add('fa-beat-fade');
    // console.log(this.lastElementChild);
  })
  item.addEventListener('mouseleave', function () {
    this.lastElementChild.classList.remove('fa-beat-fade');
  })
})
// index__追蹤訂閱的位置button的hover效果
let subscribeBtn = document.querySelector('.index__followAndSubscribe .wrap2 [type="submit"]');
subscribeBtn.addEventListener('mouseover', function () {
  this.lastElementChild.classList.add('fa-beat-fade');
})
subscribeBtn.addEventListener('mouseleave', function () {
  this.lastElementChild.classList.remove('fa-beat-fade');
})
let tests=document.querySelectorAll('.fa-angles-right');
tests.forEach((item)=>{
  item.parentElement.addEventListener('mouseover',function(e){
    console.log(this.children);
  })
})
