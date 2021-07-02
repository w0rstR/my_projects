﻿function slider(){
    const slides=document.querySelectorAll('.offer__slide')
    const btnNext=document.querySelector('.offer__slider-next')
    const btnPrev=document.querySelector('.offer__slider-prev')
    let slideIndex=1
    const total = document.querySelector('#total')
    const current=document.querySelector('#current')
    const slidesWrapper = document.querySelector('.offer__slider-wrapper')
    const slidesField=document.querySelector('.offer__slider-inner')
    const width=window.getComputedStyle(slidesWrapper).width
    let offset=0
    const slider=document.querySelector('.offer__slider')
    //THE SECOND OPTION
    
    // showSlides()
    // if(slides.length<10){
    //     total.textContent=`0${slides.length}`
    // }else{
    //     total.textContent=`${slides.length}`
    // }
    // function showSlides(index){
    //     if(index>slides.length){
    //         slideIndex=1
    //     }

    //     if(index<1){
    //         slideIndex=slides.length
    //     }

    //     slides.forEach(slide=>{
    //         slide.classList.add('hide')
    //     })

    //     slides[slideIndex-1].classList.remove('hide')

    //     if(slides.length<10){
    //         current.textContent=`0${slideIndex}`
    //     }else{
    //         current.textContent=slideIndex
    //     }
    // }

    // function plusSlide(n){
    //     showSlides(slideIndex+=n)
    // }

    // btnNext.addEventListener('click',()=>{
    //     plusSlide(1)
    // })
    // btnPrev.addEventListener('click',()=>{
    //     plusSlide(-1)
    // })

    //////////////////////////////////////////////////
    // THE FIRST OPTION
    // slides.forEach(slide=>{
    //     console.log(slide)
    // })

    // slides.forEach(slide=>{
    //     slide.classList.add('hide')
    // })
    // slides[0].classList.remove('hide')

    

    // btnNext.addEventListener('click',()=>{
    //     slideIndex++
    //     if(slideIndex>2){
    //         slideIndex=0
    //     }
    //     slides.forEach(slide=>{
    //         slide.classList.add('hide')
    //     })
    //     slides[slideIndex].classList.remove('hide')
    // })

    // btnPrev.addEventListener('click',()=>{
    //     slideIndex--
    //     if(slideIndex<0){
    //         slideIndex=2
    //     }
    //     slides.forEach(slide=>{
    //         slide.classList.add('hide')
    //     })
    //     slides[slideIndex].classList.remove('hide')
    // })
    ////

    // The OTHER OPTION

    function deleteNotDigits(str){
        return +str.replace(/\D/g,'')
    }

    if(slides.length<10){
        total.textContent=`0${slides.length}`
        current.textContent=`0${slideIndex}`
    }else{
        total.textContent=sldes.length
        current.textContent=slideIndex
    }

    slidesField.style.width= 100 * slides.length + '%'
    slidesField.style.display='flex'
    slidesField.style.transition='0.5s all'

    slidesWrapper.style.overflow='hidden'

    slides.forEach(slide=>{
        slide.style.width=width
    })

    slider.style.position='relative'

    const indicators = document.createElement('ol')
    const dots =[]
    indicators.classList.add('carousel-indicators')
    indicators.style.cssText =`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `
    slider.append(indicators)
    for(let i=0;i<slides.length;i++){
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to',i+1)
        dot.style.cssText=`
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `
        if(i==0){
            dot.style.opacity=1;
        }
        indicators.append(dot)
        dots.push(dot)
    }


    btnNext.addEventListener('click',()=>{
        if(offset == deleteNotDigits(width) *  (slides.length-1)){
            offset=0
        }else{
            offset += deleteNotDigits(width)
        }
        slidesField.style.transform=`translateX(-${offset}px)`

        if(slideIndex == slides.length){
            slideIndex=1;
        }else{
            slideIndex++
        }

        if(slides.length<10){
            current.textContent=`0${slideIndex}`
        }else{
            current.textContent=slideIndex
        }

        dots.forEach(dot=>{
            dot.style.opacity=`.5`
        })
        dots[slideIndex-1].style.opacity=1;
    })

    btnPrev.addEventListener('click',()=>{
        if(offset==0){
            offset =deleteNotDigits(width)*(slides.length-1)
        }else{
            offset -= deleteNotDigits(width)
        }
        slidesField.style.transform=`translateX(-${offset}px)`

        if(slideIndex == 1){
            slideIndex=slides.length
        }else{
            slideIndex--
        }

        if(slides.length<10){
            current.textContent=`0${slideIndex}`
        }else{
            current.textContent=slideIndex
        }

        dots.forEach(dot=>{
            dot.style.opacity='0.5'
        })
        dots[slideIndex].style.opacity=1
    })

    dots.forEach(dot=>{
        dot.addEventListener('click',(event)=>{
            const slideTo=event.target.getAttribute('data-slide-to')

            slideIndex=slideTo
            offset = deleteNotDigits(width)*(slideTo-1);
            slidesField.style.transform=`translateX(-${offset}px)`



            dots.forEach(dot=>{
                dot.style.opacity='.5'  
            })
            dots[slideIndex-1].style.opacity=1
        })
    })
}

module.exports = slider