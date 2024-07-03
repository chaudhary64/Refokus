import React from "react";

const Footer = () => {
  return (
    <div className="h-[10vh] px-20 w-full flex items-center relative">
      <span className="flex gap-7 font-[Satoshi-Regular] text-[#585863]">
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Impressum</p>
        <p>Terms</p>
        <p>Webflow Agency</p>
      </span>
      <svg
        className="absolute right-20"
        width="166"
        height="28"
        viewBox="0 0 166 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.675003" width="164.65" height="28" rx="2" fill="#146EF5" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.325 6L24.1404 22H16.4528L19.878 15.3689H19.7243C16.8985 19.0372 12.6824 21.452 6.675 22V15.4607C6.675 15.4607 10.5181 15.2337 12.7773 12.8584H6.675V6.00013H13.5333V11.641L13.6873 11.6404L16.4898 6.00013H21.6766V11.6052L21.8305 11.605L24.7382 6H32.325Z"
          fill="white"
        />
        <path
          d="M37.2 8.89648H43.5848V10.5371H39.1346V13.1074H43.325V14.707H39.1346V17.3594H43.6326V19H37.2V8.89648ZM46.866 19H44.9998V11.3711H46.825V12.9365L46.5242 13.0596C46.6108 12.695 46.7771 12.3737 47.0232 12.0957C47.2693 11.8132 47.5724 11.5967 47.9324 11.4463C48.2924 11.2913 48.6753 11.2161 49.0809 11.2207C49.6186 11.2207 50.0903 11.3369 50.4959 11.5693C50.9015 11.7972 51.2137 12.1276 51.4324 12.5605C51.6557 12.9935 51.7674 13.5016 51.7674 14.085V19H49.8943V14.4678C49.8943 14.1305 49.8374 13.8411 49.7234 13.5996C49.6141 13.3535 49.4523 13.1689 49.2381 13.0459C49.0284 12.9183 48.7778 12.8545 48.4861 12.8545C48.1808 12.8545 47.9051 12.9297 47.659 13.0801C47.4174 13.2259 47.2238 13.4355 47.0779 13.709C46.9367 13.9779 46.866 14.2855 46.866 14.6318V19ZM54.0643 9.51172H55.9236V19H54.0643V9.51172ZM52.6766 11.3711H57.3113V12.8955H52.6766V11.3711ZM61.7752 19.1709C61.0187 19.1709 60.3488 19.0068 59.7654 18.6787C59.1867 18.3506 58.7355 17.8857 58.4119 17.2842C58.0883 16.6826 57.9266 15.9876 57.9266 15.1992C57.9266 14.4382 58.0906 13.7568 58.4187 13.1553C58.7469 12.5492 59.2003 12.0775 59.7791 11.7402C60.3579 11.403 61.0118 11.2344 61.741 11.2344C62.5158 11.2344 63.1993 11.4053 63.7918 11.7471C64.3888 12.0889 64.8422 12.5947 65.1521 13.2646C65.462 13.93 65.5828 14.7253 65.5145 15.6504H58.7127V14.4268L64.0926 14.4131L63.6004 14.6182C63.5913 14.2445 63.5092 13.9118 63.3543 13.6201C63.2039 13.3285 62.992 13.1029 62.7186 12.9434C62.4451 12.7793 62.1307 12.6973 61.7752 12.6973C61.4015 12.6973 61.0665 12.7861 60.7703 12.9639C60.4786 13.1416 60.2485 13.39 60.0799 13.709C59.9158 14.028 59.8338 14.3835 59.8338 14.7754V15.5342C59.8292 15.9626 59.9113 16.3408 60.0799 16.6689C60.2485 16.9925 60.4809 17.2432 60.7771 17.4209C61.0779 17.5986 61.4197 17.6875 61.8025 17.6875C62.0805 17.6875 62.3357 17.6396 62.5682 17.5439C62.8051 17.4437 63.0034 17.3092 63.1629 17.1406C63.327 16.9674 63.4432 16.7669 63.5115 16.5391H65.4324C65.3322 17.0632 65.1157 17.5234 64.783 17.9199C64.4549 18.3164 64.0311 18.624 63.5115 18.8428C62.9965 19.0615 62.4178 19.1709 61.7752 19.1709ZM66.8133 11.3711H68.6043V12.9297L68.3445 12.9639C68.4266 12.6084 68.5724 12.3008 68.782 12.041C68.9962 11.7767 69.2514 11.5762 69.5477 11.4395C69.8439 11.2982 70.1652 11.2275 70.5115 11.2275C70.5708 11.2275 70.6277 11.2321 70.6824 11.2412C70.7417 11.2458 70.7964 11.2526 70.8465 11.2617V13.0049C70.8009 12.9867 70.7325 12.973 70.6414 12.9639C70.5503 12.9502 70.4614 12.9434 70.3748 12.9434C70.0284 12.9434 69.7254 13.0094 69.4656 13.1416C69.2104 13.2738 69.0099 13.4697 68.8641 13.7295C68.7228 13.9847 68.6521 14.2946 68.6521 14.6592V19H66.8133V11.3711ZM75.0506 11.4736C75.4334 11.3141 75.8276 11.2344 76.2332 11.2344C76.894 11.2344 77.4842 11.4007 78.0037 11.7334C78.5232 12.0615 78.9266 12.5264 79.2137 13.1279C79.5053 13.7249 79.6512 14.4154 79.6512 15.1992C79.6512 15.9876 79.5031 16.6826 79.2068 17.2842C78.9106 17.8812 78.5005 18.3415 77.9764 18.665C77.4568 18.9886 76.8644 19.1481 76.199 19.1436C75.7843 19.1436 75.3878 19.0661 75.0096 18.9111C74.6313 18.7516 74.31 18.5306 74.0457 18.248C73.7859 17.9655 73.6173 17.6488 73.5398 17.2979L73.868 17.3047V21.9053H71.9949V11.3711H73.8475L73.8406 13.0664L73.5125 13.0869C73.6082 12.7314 73.7928 12.4124 74.0662 12.1299C74.3442 11.8473 74.6723 11.6286 75.0506 11.4736ZM76.8143 13.1279C76.5226 12.9274 76.1853 12.8271 75.8025 12.8271C75.4288 12.8271 75.0916 12.9297 74.7908 13.1348C74.4946 13.3353 74.2599 13.6156 74.0867 13.9756C73.9135 14.3356 73.8247 14.7435 73.8201 15.1992C73.8201 15.6641 73.9044 16.0788 74.073 16.4434C74.2417 16.8034 74.4764 17.0814 74.7771 17.2773C75.0779 17.4688 75.4197 17.5645 75.8025 17.5645C76.1899 17.5645 76.5294 17.4665 76.8211 17.2705C77.1128 17.0745 77.3361 16.7965 77.491 16.4365C77.646 16.0765 77.7234 15.6641 77.7234 15.1992C77.7234 14.7344 77.6437 14.3242 77.4842 13.9688C77.3292 13.6087 77.1059 13.3285 76.8143 13.1279ZM81.0047 11.3711H82.7957V12.9297L82.5359 12.9639C82.618 12.6084 82.7638 12.3008 82.9734 12.041C83.1876 11.7767 83.4428 11.5762 83.7391 11.4395C84.0353 11.2982 84.3566 11.2275 84.7029 11.2275C84.7622 11.2275 84.8191 11.2321 84.8738 11.2412C84.9331 11.2458 84.9878 11.2526 85.0379 11.2617V13.0049C84.9923 12.9867 84.924 12.973 84.8328 12.9639C84.7417 12.9502 84.6528 12.9434 84.5662 12.9434C84.2199 12.9434 83.9168 13.0094 83.657 13.1416C83.4018 13.2738 83.2013 13.4697 83.0555 13.7295C82.9142 13.9847 82.8436 14.2946 82.8436 14.6592V19H81.0047V11.3711ZM86.2205 11.3711H88.0936V19H86.2205V11.3711ZM86.1863 8.37012H88.1619V10.2842H86.1863V8.37012ZM93.8221 13.6338C93.7902 13.4378 93.7195 13.2624 93.6102 13.1074C93.5008 12.9479 93.3549 12.8249 93.1727 12.7383C92.9949 12.6471 92.7944 12.6016 92.5711 12.6016C92.3615 12.6061 92.1769 12.6471 92.0174 12.7246C91.8579 12.7975 91.7325 12.9001 91.6414 13.0322C91.5503 13.1644 91.5047 13.3079 91.5047 13.4629C91.5047 13.6725 91.5753 13.8434 91.7166 13.9756C91.8624 14.1032 92.0949 14.2012 92.4139 14.2695L93.6443 14.543C94.3416 14.6934 94.8611 14.9508 95.2029 15.3154C95.5447 15.68 95.7156 16.1494 95.7156 16.7236C95.7111 17.1976 95.5812 17.6191 95.326 17.9883C95.0753 18.3529 94.7199 18.64 94.2596 18.8496C93.8038 19.0547 93.2797 19.1572 92.6873 19.1572C92.0675 19.1572 91.5206 19.057 91.0467 18.8564C90.5773 18.6559 90.2036 18.3734 89.9256 18.0088C89.6521 17.6396 89.4904 17.2044 89.4402 16.7031H91.2928C91.3475 17.0267 91.4978 17.2865 91.7439 17.4824C91.99 17.6738 92.3045 17.7673 92.6873 17.7627C92.9243 17.7627 93.1339 17.7285 93.3162 17.6602C93.4985 17.5872 93.6375 17.4893 93.7332 17.3662C93.8289 17.2386 93.8768 17.0951 93.8768 16.9355C93.8676 16.7259 93.7924 16.555 93.6512 16.4229C93.5099 16.2907 93.2889 16.1904 92.9881 16.1221L91.785 15.8486C91.0558 15.6846 90.518 15.4248 90.1717 15.0693C89.8253 14.7139 89.6544 14.2467 89.659 13.668C89.6544 13.1986 89.7775 12.777 90.0281 12.4033C90.2788 12.0296 90.6274 11.7402 91.074 11.5352C91.5252 11.3255 92.0402 11.2184 92.6189 11.2139C93.2023 11.2139 93.7127 11.3141 94.1502 11.5146C94.5877 11.7106 94.934 11.9909 95.1893 12.3555C95.4445 12.7201 95.5971 13.1462 95.6473 13.6338H93.8221ZM100.576 19.1709C99.8195 19.1709 99.1495 19.0068 98.5662 18.6787C97.9874 18.3506 97.5363 17.8857 97.2127 17.2842C96.8891 16.6826 96.7273 15.9876 96.7273 15.1992C96.7273 14.4382 96.8914 13.7568 97.2195 13.1553C97.5477 12.5492 98.0011 12.0775 98.5799 11.7402C99.1587 11.403 99.8126 11.2344 100.542 11.2344C101.317 11.2344 102 11.4053 102.593 11.7471C103.19 12.0889 103.643 12.5947 103.953 13.2646C104.263 13.93 104.384 14.7253 104.315 15.6504H97.5135V14.4268L102.893 14.4131L102.401 14.6182C102.392 14.2445 102.31 13.9118 102.155 13.6201C102.005 13.3285 101.793 13.1029 101.519 12.9434C101.246 12.7793 100.931 12.6973 100.576 12.6973C100.202 12.6973 99.8673 12.7861 99.5711 12.9639C99.2794 13.1416 99.0493 13.39 98.8807 13.709C98.7166 14.028 98.6346 14.3835 98.6346 14.7754V15.5342C98.63 15.9626 98.712 16.3408 98.8807 16.6689C99.0493 16.9925 99.2817 17.2432 99.5779 17.4209C99.8787 17.5986 100.221 17.6875 100.603 17.6875C100.881 17.6875 101.137 17.6396 101.369 17.5439C101.606 17.4437 101.804 17.3092 101.964 17.1406C102.128 16.9674 102.244 16.7669 102.312 16.5391H104.233C104.133 17.0632 103.916 17.5234 103.584 17.9199C103.256 18.3164 102.832 18.624 102.312 18.8428C101.797 19.0615 101.219 19.1709 100.576 19.1709ZM108.936 8.89648H112.915C113.617 8.89648 114.232 9.03776 114.761 9.32031C115.294 9.60286 115.704 9.99935 115.991 10.5098C116.283 11.0156 116.429 11.5921 116.429 12.2393C116.429 12.8864 116.283 13.4629 115.991 13.9688C115.699 14.4746 115.287 14.8711 114.754 15.1582C114.221 15.4453 113.603 15.5889 112.901 15.5889H110.201V13.9551H112.635C112.999 13.9551 113.314 13.8844 113.578 13.7432C113.847 13.5973 114.052 13.3968 114.193 13.1416C114.334 12.8864 114.407 12.5924 114.412 12.2598C114.412 11.9225 114.341 11.6263 114.2 11.3711C114.059 11.1113 113.851 10.9108 113.578 10.7695C113.309 10.6283 112.992 10.5576 112.628 10.5576H110.871V19H108.936V8.89648ZM120.612 19.1367C119.951 19.1367 119.361 18.9704 118.842 18.6377C118.327 18.305 117.921 17.8402 117.625 17.2432C117.329 16.6416 117.183 15.9489 117.187 15.165C117.187 14.3812 117.338 13.6908 117.638 13.0938C117.939 12.4967 118.349 12.0365 118.869 11.7129C119.393 11.3848 119.988 11.223 120.653 11.2275C121.091 11.2275 121.496 11.3096 121.87 11.4736C122.244 11.6331 122.554 11.8542 122.8 12.1367C123.05 12.4147 123.214 12.7178 123.292 13.0459L122.957 13.0322V11.3711H124.83V19H122.977L122.984 17.5234L123.312 17.332C123.203 17.6693 123.016 17.9746 122.752 18.248C122.487 18.5215 122.168 18.738 121.795 18.8975C121.421 19.057 121.027 19.1367 120.612 19.1367ZM121.022 17.5508C121.41 17.5508 121.754 17.4505 122.054 17.25C122.355 17.0495 122.59 16.7692 122.759 16.4092C122.927 16.0492 123.014 15.6344 123.018 15.165C123.018 14.7002 122.934 14.2878 122.765 13.9277C122.597 13.5677 122.36 13.2897 122.054 13.0938C121.754 12.8978 121.41 12.7998 121.022 12.7998C120.639 12.7998 120.304 12.9001 120.017 13.1006C119.73 13.2965 119.509 13.5745 119.354 13.9346C119.199 14.2946 119.122 14.707 119.122 15.1719C119.122 15.6367 119.199 16.0492 119.354 16.4092C119.514 16.7646 119.737 17.0449 120.024 17.25C120.311 17.4505 120.644 17.5508 121.022 17.5508ZM126.491 11.3711H128.282V12.9297L128.022 12.9639C128.104 12.6084 128.25 12.3008 128.46 12.041C128.674 11.7767 128.929 11.5762 129.225 11.4395C129.522 11.2982 129.843 11.2275 130.189 11.2275C130.248 11.2275 130.305 11.2321 130.36 11.2412C130.419 11.2458 130.474 11.2526 130.524 11.2617V13.0049C130.479 12.9867 130.41 12.973 130.319 12.9639C130.228 12.9502 130.139 12.9434 130.053 12.9434C129.706 12.9434 129.403 13.0094 129.143 13.1416C128.888 13.2738 128.688 13.4697 128.542 13.7295C128.401 13.9847 128.33 14.2946 128.33 14.6592V19H126.491V11.3711ZM132.883 9.51172H134.742V19H132.883V9.51172ZM131.495 11.3711H136.13V12.8955H131.495V11.3711ZM139.083 19H137.217V11.3711H139.042V12.9365L138.741 13.0596C138.828 12.695 138.994 12.3737 139.24 12.0957C139.486 11.8132 139.789 11.5967 140.149 11.4463C140.509 11.2913 140.892 11.2161 141.298 11.2207C141.835 11.2207 142.307 11.3369 142.713 11.5693C143.118 11.7972 143.43 12.1276 143.649 12.5605C143.873 12.9935 143.984 13.5016 143.984 14.085V19H142.111V14.4678C142.111 14.1305 142.054 13.8411 141.94 13.5996C141.831 13.3535 141.669 13.1689 141.455 13.0459C141.245 12.9183 140.995 12.8545 140.703 12.8545C140.398 12.8545 140.122 12.9297 139.876 13.0801C139.634 13.2259 139.441 13.4355 139.295 13.709C139.153 13.9779 139.083 14.2855 139.083 14.6318V19ZM149.084 19.1709C148.327 19.1709 147.657 19.0068 147.074 18.6787C146.495 18.3506 146.044 17.8857 145.721 17.2842C145.397 16.6826 145.235 15.9876 145.235 15.1992C145.235 14.4382 145.399 13.7568 145.727 13.1553C146.055 12.5492 146.509 12.0775 147.088 11.7402C147.666 11.403 148.32 11.2344 149.05 11.2344C149.824 11.2344 150.508 11.4053 151.1 11.7471C151.697 12.0889 152.151 12.5947 152.461 13.2646C152.771 13.93 152.891 14.7253 152.823 15.6504H146.021V14.4268L151.401 14.4131L150.909 14.6182C150.9 14.2445 150.818 13.9118 150.663 13.6201C150.512 13.3285 150.301 13.1029 150.027 12.9434C149.754 12.7793 149.439 12.6973 149.084 12.6973C148.71 12.6973 148.375 12.7861 148.079 12.9639C147.787 13.1416 147.557 13.39 147.388 13.709C147.224 14.028 147.142 14.3835 147.142 14.7754V15.5342C147.138 15.9626 147.22 16.3408 147.388 16.6689C147.557 16.9925 147.79 17.2432 148.086 17.4209C148.387 17.5986 148.728 17.6875 149.111 17.6875C149.389 17.6875 149.644 17.6396 149.877 17.5439C150.114 17.4437 150.312 17.3092 150.471 17.1406C150.636 16.9674 150.752 16.7669 150.82 16.5391H152.741C152.641 17.0632 152.424 17.5234 152.092 17.9199C151.763 18.3164 151.34 18.624 150.82 18.8428C150.305 19.0615 149.726 19.1709 149.084 19.1709ZM154.122 11.3711H155.913V12.9297L155.653 12.9639C155.735 12.6084 155.881 12.3008 156.091 12.041C156.305 11.7767 156.56 11.5762 156.856 11.4395C157.152 11.2982 157.474 11.2275 157.82 11.2275C157.879 11.2275 157.936 11.2321 157.991 11.2412C158.05 11.2458 158.105 11.2526 158.155 11.2617V13.0049C158.11 12.9867 158.041 12.973 157.95 12.9639C157.859 12.9502 157.77 12.9434 157.683 12.9434C157.337 12.9434 157.034 13.0094 156.774 13.1416C156.519 13.2738 156.318 13.4697 156.173 13.7295C156.031 13.9847 155.961 14.2946 155.961 14.6592V19H154.122V11.3711Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Footer;