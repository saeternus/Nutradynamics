import React from 'react'
import './Styles/Aboutus.css'
import aboutimg from '../Assets/Vector.png'

function Aboutus() {
    return (
        <div className='Aboutbox'>
            <div className='aboutdes'>
                <div className='Abouttext'>About Us</div>
                <div className='aboutdestext'>Lörem ipsum föna e-learning triskade, nyrtad
                    , sobelt. Nint doling, möre viment oning. Kanet
                    öktig a inde. Saföse dock nyn har prerespel ja
                    g industrisafari. Vis a diare Epiliga hiliga ultras
                    0sa alltså vabåsk nerar. Ön semir när prenat d
                    ikarta d med exotid inte transperson Mära köttr
                    ymden antegt risamma. Gigalig ambifiering tr
                    eliga. Sup  rakroheten prertad sälogi att tibelt.
                    </div>
            </div>
            <div className='aboutimg'>
                <img src={aboutimg} alt="" />
            </div>
        </div>
    )
}

export default Aboutus
