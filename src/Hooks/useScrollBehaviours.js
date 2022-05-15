import React from 'react'

export const useScrollBehaviours = (props) => {
    
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
            
    }

    return {ScrollToTop}
}
