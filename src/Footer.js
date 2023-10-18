import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className='cover'>
            <div className='container'>
                <table className='table table-borderless'>
                    <thead className='table'>
                        <tr>
                            <th scope='col' className='fs-5 text-start'>Product Name</th>
                            <th scope='col' className='fs-5 text-left'>Stock</th>
                            <th scope='col' className='fs-5 text-left'>Price</th>
                            <th scope='col' className='fs-5 text-left'>Total Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <img
                                        className="rounded img-fluid"
                                        src='https://picsum.photos/150/75' // Increased image size
                                        alt='Product Image'
                                    />
                                    <div className="ml-3 text-start">
                                        <span className='fs-5'>Product 1</span><br/>
                                        <span className='fs-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                    </div>
                                </div>
                            </td>
                            <td className='fs-5 text-left'>250</td>
                            <td className='fs-5 text-left'>$19.99</td>
                            <td className='fs-5 text-left'>750</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <img
                                        className="rounded img-fluid"
                                        src='https://picsum.photos/150/75' // Increased image size
                                        alt='Product Image'
                                    />
                                    <div className="ml-3 text-start">
                                        <span className='fs-5'>Product 2</span><br/>
                                        <span className='fs-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                    </div>
                                </div>
                            </td>
                            <td className='fs-5 text-left'>150</td>
                            <td className='fs-5 text-left'>$24.99</td>
                            <td className='fs-5 text-left'>450</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <img
                                        className="rounded img-fluid"
                                        src='https://picsum.photos/150/75' // Increased image size
                                        alt='Product Image'
                                    />
                                    <div className="ml-3 text-start">
                                        <span className='fs-5'>Product 3</span><br/>
                                        <span className='fs-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                    </div>
                                </div>
                            </td>
                            <td className='fs-5 text-left'>300</td>
                            <td className='fs-5 text-left'>$29.99</td>
                            <td className='fs-5 text-left'>900</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Footer;
