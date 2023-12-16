const scrollrevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:1000
}

//header section
ScrollReveal().reveal(".header__content h1",{
    ...scrollrevealOption,
});
ScrollReveal().reveal(".header__content p",{
    ...scrollrevealOption,
    delay:500,
});
ScrollReveal().reveal(".header__btn",{
    ...scrollrevealOption,
    delay:1000,
});

//infromation container
ScrollReveal().reveal(".information__card",{
    ...scrollrevealOption,
    interval:1000,
});

//testimonial container
ScrollReveal().reveal(".testimonial__card",{
    ...scrollrevealOption,
    interval:500,
});

//instructor container
ScrollReveal().reveal(".instructor__card",{
    ...scrollrevealOption,
    interval:500,
});