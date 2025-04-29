import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [price, setPrice] = useState(1200000);
    const maxPrice = 2000000;

    const handleSliderChange = (e) => {
        setPrice(parseInt(e.target.value));
    };

    useEffect(() => {
        const slider = document.getElementById('priceRange');
        const percentage = (price / maxPrice) * 100;
        slider.style.background = `linear-gradient(to right, #0c4a6e ${percentage}%, #d1d5db ${percentage}%)`;
    }, [price]);

    return (
        <>
            <section className='calculator-page'>
                <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842] text-center '>
                    Calculate How Much You'll Save <br className='max-sm:hidden'/> with Sukhan Estate
                </h2>
                <div className='bg-[#F0FAFF] py-3 mt-8'>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:mt-12 lg:mt-12 md:mt-12 max-sm:mt-3 sm:mt-3 max-sm:mb-3 sm:mb-3 xl:mb-12 lg:mb-12  md:mb-12'>
                        <div className='grid grid-cols-1 md:grid-cols-6 gap-8'>
                            <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 max-sm:col-span-1 sm:col-span-1'>
                                <div className='bg-sky-500 p-6 text-white max-w-md mx-auto '>
                                    <p className='text-xl  mb-2'>Home Purchase Price</p>
                                    <div className='text-4xl font-bold mb-3 mt-4' style={{ fontFamily: "'Libre Baskerville', serif" }}>${price.toLocaleString()}</div>

                                    <input
                                        type='range'
                                        id='priceRange'
                                        min='0'
                                        max={maxPrice}
                                        step='1000'
                                        value={price}
                                        onChange={handleSliderChange}
                                        className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
                                    />
                                </div>
                                <div className='bg-white h-[152px]'>
                                    <p className='text-[#001842] text-[18px] p-5'>
                                        Based on your purchase price, you'll save $18,000 when you buy with Sukhan Estate, and $97,330 over the lifetime of your mortgage.
                                    </p>
                                </div>
                            </div>
                            <div className='xl:col-span-4 lg:col-span-4 md:col-span-4 max-sm:col-span-1 sm:col-span-1'>
                                <h4 className='letsbreakdown text-[24px] text-[#001842] mb-3'>Let's Break it Down</h4>
                                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                                    {/* Down Payment Saving */}
                                    <div className='bg-white p-3 border-2 border-[#00a6f4]'>
                                        <h2 className='text-center text-[#00a6f4] text-[20px] pb-2'>Down Payment Saving</h2>
                                        <hr className='border-[#D9D9D9] pt-3' />
                                        <div className='table w-full'>
                                            <div className='table-header-group'>
                                                <div className='table-row'>
                                                    <div className='table-cell pb-3 text-left text-[#001842]'>Down Payment Needed (7.92%)</div>
                                                    <div className='table-cell text-end w-[100px] text-[#001842]'>
                                                        ${Math.round(price * 0.0792).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='table-row-group'>
                                                <div className='table-row'>
                                                    <div className='table-cell pb-3 border-b-1 border-[#D9D9D9] text-[#001842]'>Closing Costs (1.5%)</div>
                                                    <div className='table-cell text-end border-b-1 border-[#D9D9D9] text-[#001842]'>
                                                        ${Math.round(price * 0.015).toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className='table-row'>
                                                    <div className='table-cell py-3 text-[#001842]'>Total Savings Needed</div>
                                                    <div className='table-cell text-end text-[#001842]'>
                                                        ${Math.round(price * 0.0792 + price * 0.015).toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className='table-row'>
                                                    <div className='table-cell pb-3 font-bold text-[#001842]'>Sukhan Estate's Contribution</div>
                                                    <div className='table-cell font-bold text-end text-[#001842]'>
                                                        -${Math.round(price * 0.015).toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className='table-row'>
                                                    <div className='table-cell pb-3 font-bold text-[#001842]'>New Total Savings Needed</div>
                                                    <div className='table-cell font-bold text-end text-[#001842]'>
                                                        ${Math.round(price * 0.0792).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mortgage Savings */}
                                    <div className='bg-white p-3 border-2 border-[#00a6f4]'>
                                        <h2 className='text-center text-[#00a6f4] text-[20px] pb-2'>Mortgage Savings</h2>
                                        <hr className='border-[#D9D9D9] pt-3' />
                                        <div className='table w-full'>
                                            <div className='table-header-group'>
                                                <div className='table-row'>
                                                    <div className='table-cell pb-3 text-left text-[#001842]'>Without Sukhan Estate</div>
                                                    <div className='table-cell text-end text-[#001842]'>
                                                        ${Math.round((price / 1200000) * 5761).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='table-row-group'>
                                                <div className='table-row'>
                                                    <div className='table-cell pb-3 border-b-1 border-[#D9D9D9] text-[#001842]'>Monthly Payments With Sukhan Estate</div>
                                                    <div className='table-cell text-end border-b-1 border-[#D9D9D9] text-[#001842]'>
                                                        ${Math.round((price / 1200000) * 5491).toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className='table-row'>
                                                    <div className='table-cell py-3 font-bold text-[#001842]'>Total Monthly Savings</div>
                                                    <div className='table-cell font-bold text-end text-[#001842]'>
                                                        ${Math.round((price / 1200000) * (5761 - 5491)).toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className='table-row'>
                                                    <div className='table-cell pb-3 font-bold text-[#001842]'>Total Mortgage Savings (30-Years)</div>
                                                    <div className='table-cell font-bold text-end text-[#001842]'>
                                                        ${Math.round((price / 1200000) * (5761 - 5491) * 12 * 30).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider thumb and track styling */}

        </>
    );
};

export default Calculator;
