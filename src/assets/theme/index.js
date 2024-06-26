const theme = {
    color:{
        primaryColor:'#FF385C',
        secondaryColor:'#00848A'
    },
    textColor:{
        primaryColor:'#484848',
        secondaryColor:'#222',
    },
    bg:{
        primary:'#f7f7f7',
        shadow:'#f5f5f5',
    },
    mixin:{
        boxShadow:`
        transition: box - shadow 0.2s;
        &: hover{
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
        }`
    }
}

export default theme