const menu_gioithieu = document.querySelector('.gioithieu');
const menu_entertainment = document.querySelector('.intertainment');
const menu_jeeteak = document.querySelector('.jeeteak');
const nd_gioithieu = document.querySelector('.nd_gioithieu')
const nd_intertainment = document.querySelector('.nd_intertainment')
const nd_jeeeteak = document.querySelector('.nd_jeeteak')

menu_gioithieu.onclick = function() {
    menu_gioithieu.classList.add('click_menu')
    menu_entertainment.classList.remove('click_menu')
    menu_jeeteak.classList.remove('click_menu')

    nd_gioithieu.classList.add('click_nd')
    nd_intertainment.classList.remove('click_nd')
    nd_jeeeteak.classList.remove('click_nd')
}
menu_entertainment.onclick = function() {
    menu_gioithieu.classList.remove('click_menu')
    menu_entertainment.classList.add('click_menu')
    menu_jeeteak.classList.remove('click_menu')

    nd_gioithieu.classList.remove('click_nd')
    nd_intertainment.classList.add('click_nd')
    nd_jeeeteak.classList.remove('click_nd')
}
menu_jeeteak.onclick = function() {
    menu_gioithieu.classList.remove('click_menu')
    menu_entertainment.classList.remove('click_menu')
    menu_jeeteak.classList.add('click_menu')

    nd_gioithieu.classList.remove('click_nd')
    nd_intertainment.classList.remove('click_nd')
    nd_jeeeteak.classList.add('click_nd')
}