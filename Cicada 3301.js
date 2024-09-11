const home = document.querySelector('.home')
const enig = document.querySelector('.enig')
const mist = document.querySelector('.mist')
const obje = document.querySelector('.obje')
const join = document.querySelector('.join')

const chk = document.getElementById('chk')
chk.addEventListener('change', () =>{
    document.body.classList.toggle('claro');
})

function go(a,b)
{
    let DisplayNone, DisplayBlock
    if(b==1)
    {
        DisplayNone = home;
    }
    else if(b==2)
    {
        DisplayNone = enig;
    }
    else if(b==3)
    {
        DisplayNone = mist;
    }
    else if(b==4)
    {
        DisplayNone = obje;
    }
    else
    {
        DisplayNone = join;
    }

    DisplayNone.style.display = 'none';
    
    if(a==1)
    {
        DisplayBlock = home;
    }
    else if(a==2)
    {
        DisplayBlock = enig;
    }
    else if(a==3)
    {
        DisplayBlock = mist;
    }
    else if(a==4)
    {
        DisplayBlock = obje;
    }
    else
    {
        DisplayBlock = join;
    }
    
    DisplayBlock.style.display = 'block';
}


