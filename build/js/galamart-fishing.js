const start = document.getElementById('start');

start.addEventListener('click', function (e){
    const target = e.target;
    let one = document.querySelector('.fishing-form__tab');
    target.classList.add('d-none');
    one.classList.add('d-block');
})

$(function (){
    $('.form-menu__item').on('click', function (){
        $(this).parents('.fishing-form__tab').addClass('d-none');
        $(this).parents('.fishing-form__tab').next().addClass('d-block')
        return false;
    })

    $('.js-start-menu').on('click', function (){
        let menu = $('.fishing-form__tab').data('step');
        $('.fishing-form__tab').not().addClass('d-none');

    })
})
