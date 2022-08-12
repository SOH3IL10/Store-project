import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom'

export default function EmptyBasket() {
    return (
        <div className='emptyBasket'>
            <div>
                <ShoppingCartIcon color='primary' fontSize='large' />
            </div>
            <h2>
                YOUR BASKET IS EMPTY. LET'S CHANGE THAT!
            </h2>
            <Link to='/' >
                <button> <NavigateBeforeIcon /> Back to Shop</button>
            </Link>
        </div>
    )
}
