import React, { useState, useEffect } from 'react'
import Navigation from '../components/navigation';
import { Input, Button } from '../components'

const HomeDefault = () => {
    window.onload = () => document.getElementById('home_page_button').disabled = true;

    const [inputUrl, setInputUrl] = useState('');
    const button = document.getElementById('home_page_button');

    if (button != null) button.style.opacity = inputUrl !== '' ? '1' : '0.5';
    if (button != null) button.disabled = inputUrl !== '' ? false : true;



    return (
        <Navigation>
            <div className='flex-center h20 mt-20'>
                <h1 className='font-roboto fs-52 c-primary'>Simplify your links in one click.</h1>
            </div>

            <div className='flex justify-center'>
                <Input className='w-67 h-4 br-r-25 shadow rb outline' onChange={(e) => setInputUrl(e.target.value)} placeholder='Enter the link here' />
                <Button className='op w-15 h-4 br-r-35 b-lightblue rb c-default outline' id='home_page_button' value='Shorten URL' onClick={() => alert('wtf')} />
            </div>
        </Navigation>
    )
}

export default HomeDefault;

















/*
      <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="40" fill="white"/>
        <path d="M61.6172 22.7324C61.6172 23.1556 61.6042 23.5397 61.5781 23.8848C61.5521 24.2233 61.5033 24.5358 61.4316 24.8223C61.3665 25.1022 61.2949 25.3496 61.2168 25.5645C61.1387 25.7793 61.028 25.9714 60.8848 26.1406C60.7415 26.3034 60.5983 26.4434 60.4551 26.5605C60.3184 26.6777 60.1361 26.7786 59.9082 26.8633C59.6868 26.9414 59.472 27.0033 59.2637 27.0488C59.0553 27.1009 58.7949 27.14 58.4824 27.166C58.1699 27.1921 57.8704 27.2083 57.584 27.2148C57.304 27.2279 56.959 27.2344 56.5488 27.2344C55.7741 27.2344 55.123 27.2116 54.5957 27.166C54.0749 27.1204 53.6289 27.0228 53.2578 26.873C52.8932 26.7233 52.61 26.5703 52.4082 26.4141C52.2064 26.2513 52.0469 25.9974 51.9297 25.6523C51.8125 25.3008 51.7344 24.9655 51.6953 24.6465C51.6628 24.3275 51.6335 23.875 51.6074 23.2891L53.4141 22.9961C53.4336 23.1393 53.4531 23.3411 53.4727 23.6016C53.5117 24.0052 53.5475 24.2917 53.5801 24.4609C53.6191 24.6237 53.6908 24.806 53.7949 25.0078C53.8991 25.2096 54.0618 25.3431 54.2832 25.4082C54.5046 25.4668 54.7943 25.5189 55.1523 25.5645C55.5104 25.61 55.9889 25.6328 56.5879 25.6328C57.0827 25.6328 57.4896 25.6198 57.8086 25.5938C58.1276 25.5677 58.4076 25.5156 58.6484 25.4375C58.8893 25.3529 59.0716 25.2585 59.1953 25.1543C59.319 25.0501 59.4167 24.8906 59.4883 24.6758C59.5664 24.4544 59.6152 24.2266 59.6348 23.9922C59.6543 23.7578 59.6608 23.4453 59.6543 23.0547C59.6478 22.1953 59.599 21.6029 59.5078 21.2773C59.4232 20.9453 59.2376 20.75 58.9512 20.6914L54.0879 19.8418C53.2415 19.6986 52.6523 19.3763 52.3203 18.875C51.9883 18.3737 51.8125 17.5632 51.793 16.4434C51.793 15.8444 51.8223 15.3333 51.8809 14.9102C51.946 14.4805 52.0534 14.1061 52.2031 13.7871C52.3594 13.4616 52.5482 13.2012 52.7695 13.0059C52.9974 12.8105 53.2936 12.6543 53.6582 12.5371C54.0293 12.4134 54.4329 12.332 54.8691 12.293C55.3118 12.2474 55.8522 12.2246 56.4902 12.2246C57.0111 12.2246 57.457 12.2376 57.8281 12.2637C58.2057 12.2832 58.5703 12.3223 58.9219 12.3809C59.2799 12.4395 59.5762 12.5208 59.8105 12.625C60.0449 12.7292 60.2598 12.8659 60.4551 13.0352C60.6569 13.1979 60.8132 13.3997 60.9238 13.6406C61.0345 13.875 61.1191 14.1517 61.1777 14.4707C61.2363 14.7897 61.2656 15.1576 61.2656 15.5742L59.5273 15.9746C59.4622 15.2585 59.4199 14.8516 59.4004 14.7539C59.3223 14.4219 59.1367 14.1973 58.8438 14.0801C58.5182 13.9434 57.8379 13.875 56.8027 13.875C56.2363 13.875 55.7676 13.8913 55.3965 13.9238C55.0319 13.9564 54.7324 14.0052 54.498 14.0703C54.2637 14.1289 54.0879 14.2201 53.9707 14.3438C53.86 14.4674 53.7852 14.6009 53.7461 14.7441C53.707 14.8809 53.6875 15.0632 53.6875 15.291V16.9805C53.6875 17.5924 53.9544 17.944 54.4883 18.0352L57.9844 18.6309C58.3099 18.6829 58.5703 18.7285 58.7656 18.7676C58.9609 18.8066 59.1855 18.8587 59.4395 18.9238C59.6934 18.9889 59.8919 19.0573 60.0352 19.1289C60.1784 19.2005 60.3379 19.2917 60.5137 19.4023C60.6895 19.513 60.8262 19.6367 60.9238 19.7734C61.0215 19.9102 61.1191 20.0729 61.2168 20.2617C61.321 20.4505 61.3958 20.6654 61.4414 20.9062C61.4935 21.1406 61.5358 21.4108 61.5684 21.7168C61.6009 22.0163 61.6172 22.3548 61.6172 22.7324ZM74.7812 27H72.7988V20.3203H66.2949V27H64.3125V12.4492H66.2949V18.7773H72.7988V12.4492H74.7812V27ZM83.3359 27.2344C82.7695 27.2344 82.265 27.2214 81.8223 27.1953C81.3861 27.1693 80.9824 27.1042 80.6113 27C80.2402 26.9023 79.9212 26.8112 79.6543 26.7266C79.3939 26.6419 79.1562 26.4824 78.9414 26.248C78.7331 26.0072 78.5605 25.8021 78.4238 25.6328C78.2871 25.457 78.1699 25.1706 78.0723 24.7734C77.9746 24.3698 77.903 24.028 77.8574 23.748C77.8118 23.4616 77.7728 23.0221 77.7402 22.4297C77.7142 21.8372 77.6979 21.3294 77.6914 20.9062C77.6914 20.4831 77.6914 19.8711 77.6914 19.0703C77.6914 18.1068 77.7174 17.306 77.7695 16.668C77.8216 16.0299 77.9225 15.4375 78.0723 14.8906C78.2285 14.3438 78.4303 13.9141 78.6777 13.6016C78.9316 13.2891 79.2734 13.0221 79.7031 12.8008C80.1393 12.5729 80.6439 12.4199 81.2168 12.3418C81.7962 12.2572 82.5026 12.2148 83.3359 12.2148C84.1237 12.2148 84.7975 12.2539 85.3574 12.332C85.9173 12.4102 86.4121 12.5501 86.8418 12.752C87.278 12.9473 87.6263 13.1947 87.8867 13.4941C88.1536 13.7871 88.3717 14.1745 88.541 14.6562C88.7103 15.138 88.8242 15.6784 88.8828 16.2773C88.9479 16.8698 88.9805 17.5924 88.9805 18.4453C88.9805 20.8542 88.9447 22.4395 88.873 23.2012C88.7493 24.5033 88.4499 25.4342 87.9746 25.9941C87.4733 26.5931 86.6204 26.9707 85.416 27.127C84.8431 27.1986 84.1497 27.2344 83.3359 27.2344ZM84.7324 13.7578C84.3613 13.7318 83.8958 13.7188 83.3359 13.7188C82.776 13.7188 82.3105 13.7318 81.9395 13.7578C81.5684 13.7839 81.2428 13.8392 80.9629 13.9238C80.6895 14.0085 80.4779 14.1029 80.3281 14.207C80.1784 14.3112 80.0547 14.474 79.957 14.6953C79.8659 14.9102 79.804 15.1315 79.7715 15.3594C79.7454 15.5872 79.7259 15.8965 79.7129 16.2871C79.6934 17.4915 79.6836 18.7025 79.6836 19.9199C79.6836 21.7559 79.7324 23.0124 79.8301 23.6895C79.9863 24.7051 80.2826 25.291 80.7188 25.4473C81.0443 25.6361 81.9167 25.7305 83.3359 25.7305C84.7552 25.7305 85.6276 25.6361 85.9531 25.4473C86.0768 25.4017 86.1875 25.3268 86.2852 25.2227C86.3893 25.1185 86.474 24.9785 86.5391 24.8027C86.6107 24.627 86.6725 24.4512 86.7246 24.2754C86.7767 24.0931 86.819 23.862 86.8516 23.582C86.8841 23.3021 86.9102 23.0514 86.9297 22.8301C86.9492 22.6022 86.9622 22.3158 86.9688 21.9707C86.9753 21.6191 86.9785 21.3294 86.9785 21.1016C86.985 20.8737 86.9883 20.571 86.9883 20.1934C86.9883 18.8783 86.9785 17.5762 86.959 16.2871C86.946 15.8965 86.9232 15.5872 86.8906 15.3594C86.8646 15.1315 86.8027 14.9102 86.7051 14.6953C86.6139 14.474 86.4935 14.3112 86.3438 14.207C86.194 14.1029 85.9792 14.0085 85.6992 13.9238C85.4258 13.8392 85.1035 13.7839 84.7324 13.7578ZM101.979 16.4531C101.979 17.6966 101.744 18.6211 101.275 19.2266C100.807 19.8255 100.152 20.1934 99.3125 20.3301C100.562 20.584 101.305 21.3783 101.539 22.7129L102.291 27H100.172C100.12 26.7005 100.058 26.2676 99.9863 25.7012C99.9212 25.1283 99.8594 24.6465 99.8008 24.2559C99.7422 23.8587 99.6641 23.4388 99.5664 22.9961C99.4688 22.5534 99.3385 22.1823 99.1758 21.8828C99.0195 21.5833 98.8307 21.362 98.6094 21.2188C98.2578 21.069 97.6816 20.9941 96.8809 20.9941H93.8633V27H91.8906V12.4492H96.334C96.8027 12.4492 97.1999 12.4557 97.5254 12.4688C97.8574 12.4753 98.2057 12.4948 98.5703 12.5273C98.9349 12.5599 99.2409 12.6055 99.4883 12.6641C99.7357 12.7227 99.9863 12.8008 100.24 12.8984C100.501 12.9961 100.712 13.1165 100.875 13.2598C101.044 13.403 101.204 13.5755 101.354 13.7773C101.503 13.9727 101.62 14.2005 101.705 14.4609C101.79 14.7148 101.855 15.0078 101.9 15.3398C101.952 15.6719 101.979 16.043 101.979 16.4531ZM100.025 17.2246V15.8672C100.025 15.6198 100.019 15.4277 100.006 15.291C99.9993 15.1478 99.9766 14.998 99.9375 14.8418C99.8984 14.679 99.8366 14.5586 99.752 14.4805C99.6738 14.3958 99.5664 14.3145 99.4297 14.2363C99.2995 14.1517 99.127 14.0931 98.9121 14.0605C98.7038 14.028 98.4564 14.002 98.1699 13.9824C97.89 13.9564 97.5514 13.9434 97.1543 13.9434H93.8633V19.4414H97.2715C97.7728 19.4414 98.1862 19.4154 98.5117 19.3633C98.8372 19.3112 99.1009 19.2396 99.3027 19.1484C99.5111 19.0508 99.6673 18.9076 99.7715 18.7188C99.8757 18.5234 99.944 18.3184 99.9766 18.1035C100.009 17.8822 100.025 17.5892 100.025 17.2246ZM112.633 13.9531H108.834V27H106.852V13.9531H103.131V12.4492H112.633V13.9531ZM122.535 27H114.293V12.4492H122.447L122.643 13.9531H116.275V18.6309H121.715V20.2129H116.275V25.5059H122.73L122.535 27ZM135.924 27H133.863L126.93 15.5059V27H125.191V12.4492H127.193L134.186 24.0996V12.4492H135.924V27Z" fill="#1C4EFF"/>
        <path d="M20 17.7856H20.8049C23.014 17.7856 24.8049 19.5765 24.8049 21.7856V28.956C24.8049 31.1652 23.014 32.956 20.8049 32.956H19.1951C16.986 32.956 15.1951 31.1652 15.1951 28.956V25.3708" stroke="#1C4EFF" stroke-width="2" stroke-linecap="round"/>
        <path d="M20.0001 22.2144H19.1952C16.986 22.2144 15.1952 20.4235 15.1952 18.2144L15.1952 11.044C15.1952 8.83483 16.986 7.04397 19.1952 7.04397H20.8049C23.0141 7.04397 24.8049 8.83483 24.8049 11.044V14.6292" stroke="#1C4EFF" stroke-width="2" stroke-linecap="round"/>
      </svg>
*/