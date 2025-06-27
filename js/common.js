const get = (target) =>document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
    window.scrollTo({ top:0, behavior: 'smooth' });
};

const topbar = () =>{
    const $topbtn = get('#wrap .top');
    let ty = 0;
    window.addEventListener('scroll', (e)=>{
        ty = window.scrollY;
        console.log(ty);
        if (ty > 400){
            $topbtn.classList.add('on');
        } else{
            $topbtn.classList.remove('on');
        }
        $topbtn.addEventListener('click', (e)=>{
            window.scrollTo({top:0, behavior:'smooth'});
        });
    });
};

const comInit = () => {
    topbar();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();