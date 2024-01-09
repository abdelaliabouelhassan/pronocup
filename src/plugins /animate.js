
const animate = {
    mounted (el) {
        
        el.style.opacity = 0
        el.style.transition = 'all 350ms ease-in-out'
        el.style.transform = 'translateY(24px)'
        let observer = new IntersectionObserver(( entries) => {

            entries.forEach( (entry) => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = 1
                entry.target.style.transform = 'translateY(0)'
                observer.disconnect()
              }
            })
        
        }, {threshold:0.4} );


        observer.observe(el);
        

      },
}
export default animate;

