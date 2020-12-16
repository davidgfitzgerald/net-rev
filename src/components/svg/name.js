import React, {Component} from 'react';
import './name.css'

class SVGName extends Component {
  constructor(props) {
    super(props);
    this.svg = <svg id="logo" width="283" height="30" viewBox="0 0 1132 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70.784 115C68.672 111.448 66.224 107.464 63.44 103.048C60.752 98.632 57.824 94.072 54.656 89.368C51.488 84.568 48.176 79.72 44.72 74.824C41.36 69.928 38 65.224 34.64 60.712C31.28 56.104 28.016 51.784 24.848 47.752C21.68 43.72 18.752 40.168 16.064 37.096V115H2.384V15.208H13.472C17.984 20.008 22.784 25.624 27.872 32.056C33.056 38.392 38.144 44.968 43.136 51.784C48.224 58.504 52.976 65.128 57.392 71.656C61.904 78.184 65.696 83.992 68.768 89.08V15.208H82.448V115H70.784Z" stroke="white" stroke-width="4"/>
      <path d="M102.11 77.704C102.11 71.08 103.07 65.32 104.99 60.424C106.91 55.432 109.454 51.304 112.622 48.04C115.79 44.776 119.438 42.328 123.566 40.696C127.694 39.064 131.918 38.248 136.238 38.248C146.318 38.248 154.046 41.416 159.422 47.752C164.798 53.992 167.486 63.544 167.486 76.408C167.486 76.984 167.486 77.752 167.486 78.712C167.486 79.576 167.438 80.392 167.342 81.16H116.078C116.654 88.936 118.91 94.84 122.846 98.872C126.782 102.904 132.926 104.92 141.278 104.92C145.982 104.92 149.918 104.536 153.086 103.768C156.35 102.904 158.798 102.088 160.43 101.32L162.302 112.552C160.67 113.416 157.79 114.328 153.662 115.288C149.63 116.248 145.022 116.728 139.838 116.728C133.31 116.728 127.646 115.768 122.846 113.848C118.142 111.832 114.254 109.096 111.182 105.64C108.11 102.184 105.806 98.104 104.27 93.4C102.83 88.6 102.11 83.368 102.11 77.704ZM153.518 70.36C153.614 64.312 152.078 59.368 148.91 55.528C145.838 51.592 141.566 49.624 136.094 49.624C133.022 49.624 130.286 50.248 127.886 51.496C125.582 52.648 123.614 54.184 121.982 56.104C120.35 58.024 119.054 60.232 118.094 62.728C117.23 65.224 116.654 67.768 116.366 70.36H153.518Z" stroke="white" stroke-width="4"/>
      <path d="M199.251 40.12H227.619V51.352H199.251V85.912C199.251 89.656 199.539 92.776 200.115 95.272C200.691 97.672 201.555 99.592 202.707 101.032C203.859 102.376 205.299 103.336 207.027 103.912C208.755 104.488 210.771 104.776 213.075 104.776C217.107 104.776 220.323 104.344 222.723 103.48C225.219 102.52 226.947 101.848 227.907 101.464L230.499 112.552C229.155 113.224 226.803 114.04 223.443 115C220.083 116.056 216.243 116.584 211.923 116.584C206.835 116.584 202.611 115.96 199.251 114.712C195.987 113.368 193.347 111.4 191.331 108.808C189.315 106.216 187.875 103.048 187.011 99.304C186.243 95.464 185.859 91.048 185.859 86.056V19.24L199.251 16.936V40.12Z" stroke="white" stroke-width="4"/>
      <path d="M305.861 115C303.173 108.088 300.293 100.216 297.221 91.384C294.245 82.456 291.509 73.192 289.013 63.592C286.517 73.192 283.781 82.456 280.805 91.384C277.829 100.216 274.997 108.088 272.309 115H260.645C256.229 105.112 251.909 93.832 247.685 81.16C243.461 68.488 239.477 54.808 235.733 40.12H250.133C251.093 44.632 252.245 49.528 253.589 54.808C254.933 60.088 256.325 65.368 257.765 70.648C259.301 75.928 260.885 81.016 262.517 85.912C264.149 90.808 265.685 95.08 267.125 98.728C268.757 94.216 270.341 89.464 271.877 84.472C273.509 79.384 275.045 74.296 276.485 69.208C277.925 64.024 279.269 58.984 280.517 54.088C281.861 49.096 283.013 44.44 283.973 40.12H295.061C295.925 44.44 296.981 49.096 298.229 54.088C299.477 58.984 300.821 64.024 302.261 69.208C303.701 74.296 305.189 79.384 306.725 84.472C308.357 89.464 309.989 94.216 311.621 98.728C313.061 95.08 314.549 90.808 316.085 85.912C317.717 81.016 319.301 75.928 320.837 70.648C322.373 65.368 323.813 60.088 325.157 54.808C326.501 49.528 327.653 44.632 328.613 40.12H342.437C338.693 54.808 334.709 68.488 330.485 81.16C326.261 93.832 321.941 105.112 317.525 115H305.861Z" stroke="white" stroke-width="4"/>
      <path d="M421.007 77.56C421.007 83.512 420.143 88.888 418.415 93.688C416.687 98.488 414.239 102.616 411.071 106.072C407.999 109.528 404.303 112.216 399.983 114.136C395.663 115.96 390.959 116.872 385.871 116.872C380.783 116.872 376.079 115.96 371.759 114.136C367.439 112.216 363.695 109.528 360.527 106.072C357.455 102.616 355.055 98.488 353.327 93.688C351.599 88.888 350.735 83.512 350.735 77.56C350.735 71.704 351.599 66.376 353.327 61.576C355.055 56.68 357.455 52.504 360.527 49.048C363.695 45.592 367.439 42.952 371.759 41.128C376.079 39.208 380.783 38.248 385.871 38.248C390.959 38.248 395.663 39.208 399.983 41.128C404.303 42.952 407.999 45.592 411.071 49.048C414.239 52.504 416.687 56.68 418.415 61.576C420.143 66.376 421.007 71.704 421.007 77.56ZM407.039 77.56C407.039 69.112 405.119 62.44 401.279 57.544C397.535 52.552 392.399 50.056 385.871 50.056C379.343 50.056 374.159 52.552 370.319 57.544C366.575 62.44 364.703 69.112 364.703 77.56C364.703 86.008 366.575 92.728 370.319 97.72C374.159 102.616 379.343 105.064 385.871 105.064C392.399 105.064 397.535 102.616 401.279 97.72C405.119 92.728 407.039 86.008 407.039 77.56Z" stroke="white" stroke-width="4"/>
      <path d="M467.496 38.536C468.648 38.536 469.944 38.632 471.384 38.824C472.92 38.92 474.408 39.112 475.848 39.4C477.288 39.592 478.584 39.832 479.736 40.12C480.984 40.312 481.896 40.504 482.472 40.696L480.168 52.36C479.112 51.976 477.336 51.544 474.84 51.064C472.44 50.488 469.32 50.2 465.48 50.2C462.984 50.2 460.488 50.488 457.992 51.064C455.592 51.544 454.008 51.88 453.24 52.072V115H439.848V43.288C443.016 42.136 446.952 41.08 451.656 40.12C456.36 39.064 461.64 38.536 467.496 38.536Z" stroke="white" stroke-width="4"/>
      <path d="M522.467 73.816C525.347 76.024 528.371 78.76 531.539 82.024C534.803 85.288 537.971 88.84 541.043 92.68C544.211 96.424 547.187 100.264 549.971 104.2C552.755 108.04 555.107 111.64 557.027 115H541.331C539.315 111.64 536.963 108.232 534.275 104.776C531.683 101.224 528.947 97.864 526.067 94.696C523.187 91.432 520.259 88.456 517.283 85.768C514.307 83.08 511.475 80.824 508.787 79V115H495.395V5.55998L508.787 3.25598V71.512C511.091 69.208 513.635 66.664 516.419 63.88C519.203 61.096 521.939 58.264 524.627 55.384C527.315 52.504 529.859 49.768 532.259 47.176C534.659 44.488 536.723 42.136 538.451 40.12H554.147C551.939 42.52 549.539 45.16 546.947 48.04C544.355 50.92 541.667 53.848 538.883 56.824C536.099 59.704 533.267 62.632 530.387 65.608C527.603 68.488 524.963 71.224 522.467 73.816Z" stroke="white" stroke-width="4"/>
      <path d="M653.638 73.24C655.174 75.16 657.094 77.704 659.398 80.872C661.798 83.944 664.246 87.4 666.742 91.24C669.238 94.984 671.686 98.92 674.086 103.048C676.582 107.176 678.694 111.16 680.422 115H665.158C663.238 111.352 661.126 107.656 658.822 103.912C656.614 100.168 654.358 96.616 652.054 93.256C649.75 89.8 647.446 86.584 645.142 83.608C642.934 80.632 640.918 78.04 639.094 75.832C637.846 75.928 636.55 75.976 635.206 75.976C633.958 75.976 632.662 75.976 631.318 75.976H618.79V115H604.822V16.648C608.758 15.688 613.126 15.064 617.926 14.776C622.822 14.392 627.286 14.2 631.318 14.2C645.334 14.2 655.99 16.84 663.286 22.12C670.678 27.4 674.374 35.272 674.374 45.736C674.374 52.36 672.598 58.024 669.046 62.728C665.59 67.432 660.454 70.936 653.638 73.24ZM632.47 26.44C626.518 26.44 621.958 26.584 618.79 26.872V64.456H628.726C633.526 64.456 637.846 64.216 641.686 63.736C645.526 63.256 648.742 62.344 651.334 61C654.022 59.656 656.086 57.784 657.526 55.384C658.966 52.888 659.686 49.624 659.686 45.592C659.686 41.848 658.966 38.728 657.526 36.232C656.086 33.736 654.118 31.768 651.622 30.328C649.222 28.888 646.342 27.88 642.982 27.304C639.718 26.728 636.214 26.44 632.47 26.44Z" stroke="white" stroke-width="4"/>
      <path d="M690.344 77.704C690.344 71.08 691.304 65.32 693.224 60.424C695.144 55.432 697.688 51.304 700.856 48.04C704.024 44.776 707.672 42.328 711.8 40.696C715.928 39.064 720.152 38.248 724.472 38.248C734.552 38.248 742.28 41.416 747.656 47.752C753.032 53.992 755.72 63.544 755.72 76.408C755.72 76.984 755.72 77.752 755.72 78.712C755.72 79.576 755.672 80.392 755.576 81.16H704.312C704.888 88.936 707.144 94.84 711.08 98.872C715.016 102.904 721.16 104.92 729.512 104.92C734.216 104.92 738.152 104.536 741.32 103.768C744.584 102.904 747.032 102.088 748.664 101.32L750.536 112.552C748.904 113.416 746.024 114.328 741.896 115.288C737.864 116.248 733.256 116.728 728.072 116.728C721.544 116.728 715.88 115.768 711.08 113.848C706.376 111.832 702.488 109.096 699.416 105.64C696.344 102.184 694.04 98.104 692.504 93.4C691.064 88.6 690.344 83.368 690.344 77.704ZM741.752 70.36C741.848 64.312 740.312 59.368 737.144 55.528C734.072 51.592 729.8 49.624 724.328 49.624C721.256 49.624 718.52 50.248 716.12 51.496C713.816 52.648 711.848 54.184 710.216 56.104C708.584 58.024 707.288 60.232 706.328 62.728C705.464 65.224 704.888 67.768 704.6 70.36H741.752Z" stroke="white" stroke-width="4"/>
      <path d="M833.422 40.12C829.678 54.136 825.262 67.576 820.174 80.44C815.182 93.304 810.334 104.824 805.63 115H793.534C788.83 104.824 783.934 93.304 778.846 80.44C773.854 67.576 769.486 54.136 765.742 40.12H780.142C781.294 44.824 782.638 49.864 784.174 55.24C785.806 60.52 787.486 65.8 789.214 71.08C791.038 76.264 792.862 81.304 794.686 86.2C796.51 91.096 798.238 95.464 799.87 99.304C801.502 95.464 803.23 91.096 805.054 86.2C806.878 81.304 808.654 76.264 810.382 71.08C812.206 65.8 813.886 60.52 815.422 55.24C817.054 49.864 818.446 44.824 819.598 40.12H833.422Z" stroke="white" stroke-width="4"/>
      <path d="M860.631 115H847.239V40.12H860.631V115ZM853.863 26.584C851.463 26.584 849.399 25.816 847.671 24.28C846.039 22.648 845.223 20.488 845.223 17.8C845.223 15.112 846.039 13 847.671 11.464C849.399 9.83198 851.463 9.01598 853.863 9.01598C856.263 9.01598 858.279 9.83198 859.911 11.464C861.639 13 862.503 15.112 862.503 17.8C862.503 20.488 861.639 22.648 859.911 24.28C858.279 25.816 856.263 26.584 853.863 26.584Z" stroke="white" stroke-width="4"/>
      <path d="M901.085 105.352C906.557 105.352 910.589 104.632 913.181 103.192C915.869 101.752 917.213 99.448 917.213 96.28C917.213 93.016 915.917 90.424 913.325 88.504C910.733 86.584 906.461 84.424 900.509 82.024C897.629 80.872 894.845 79.72 892.157 78.568C889.565 77.32 887.309 75.88 885.389 74.248C883.469 72.616 881.933 70.648 880.781 68.344C879.629 66.04 879.053 63.208 879.053 59.848C879.053 53.224 881.501 47.992 886.397 44.152C891.293 40.216 897.965 38.248 906.413 38.248C908.525 38.248 910.637 38.392 912.749 38.68C914.861 38.872 916.829 39.16 918.653 39.544C920.477 39.832 922.061 40.168 923.405 40.552C924.845 40.936 925.949 41.272 926.717 41.56L924.269 53.08C922.829 52.312 920.573 51.544 917.501 50.776C914.429 49.912 910.733 49.48 906.413 49.48C902.669 49.48 899.405 50.248 896.621 51.784C893.837 53.224 892.445 55.528 892.445 58.696C892.445 60.328 892.733 61.768 893.309 63.016C893.981 64.264 894.941 65.416 896.189 66.472C897.533 67.432 899.165 68.344 901.085 69.208C903.005 70.072 905.309 70.984 907.997 71.944C911.549 73.288 914.717 74.632 917.501 75.976C920.285 77.224 922.637 78.712 924.557 80.44C926.573 82.168 928.109 84.28 929.165 86.776C930.221 89.176 930.749 92.152 930.749 95.704C930.749 102.616 928.157 107.848 922.973 111.4C917.885 114.952 910.589 116.728 901.085 116.728C894.461 116.728 889.277 116.152 885.533 115C881.789 113.944 879.245 113.128 877.901 112.552L880.349 101.032C881.885 101.608 884.333 102.472 887.693 103.624C891.053 104.776 895.517 105.352 901.085 105.352Z" stroke="white" stroke-width="4"/>
      <path d="M961.318 115H947.926V40.12H961.318V115ZM954.55 26.584C952.15 26.584 950.086 25.816 948.358 24.28C946.726 22.648 945.91 20.488 945.91 17.8C945.91 15.112 946.726 13 948.358 11.464C950.086 9.83198 952.15 9.01598 954.55 9.01598C956.95 9.01598 958.966 9.83198 960.598 11.464C962.326 13 963.19 15.112 963.19 17.8C963.19 20.488 962.326 22.648 960.598 24.28C958.966 25.816 956.95 26.584 954.55 26.584Z" stroke="white" stroke-width="4"/>
      <path d="M1050.44 77.56C1050.44 83.512 1049.58 88.888 1047.85 93.688C1046.12 98.488 1043.68 102.616 1040.51 106.072C1037.44 109.528 1033.74 112.216 1029.42 114.136C1025.1 115.96 1020.4 116.872 1015.31 116.872C1010.22 116.872 1005.52 115.96 1001.2 114.136C996.876 112.216 993.132 109.528 989.964 106.072C986.892 102.616 984.492 98.488 982.764 93.688C981.036 88.888 980.172 83.512 980.172 77.56C980.172 71.704 981.036 66.376 982.764 61.576C984.492 56.68 986.892 52.504 989.964 49.048C993.132 45.592 996.876 42.952 1001.2 41.128C1005.52 39.208 1010.22 38.248 1015.31 38.248C1020.4 38.248 1025.1 39.208 1029.42 41.128C1033.74 42.952 1037.44 45.592 1040.51 49.048C1043.68 52.504 1046.12 56.68 1047.85 61.576C1049.58 66.376 1050.44 71.704 1050.44 77.56ZM1036.48 77.56C1036.48 69.112 1034.56 62.44 1030.72 57.544C1026.97 52.552 1021.84 50.056 1015.31 50.056C1008.78 50.056 1003.6 52.552 999.756 57.544C996.012 62.44 994.14 69.112 994.14 77.56C994.14 86.008 996.012 92.728 999.756 97.72C1003.6 102.616 1008.78 105.064 1015.31 105.064C1021.84 105.064 1026.97 102.616 1030.72 97.72C1034.56 92.728 1036.48 86.008 1036.48 77.56Z" stroke="white" stroke-width="4"/>
      <path d="M1069.29 42.28C1072.36 41.512 1076.44 40.696 1081.53 39.832C1086.61 38.968 1092.47 38.536 1099.09 38.536C1105.05 38.536 1109.99 39.4 1113.93 41.128C1117.86 42.76 1120.98 45.112 1123.29 48.184C1125.69 51.16 1127.37 54.76 1128.33 58.984C1129.29 63.208 1129.77 67.864 1129.77 72.952V115H1116.37V75.832C1116.37 71.224 1116.04 67.288 1115.37 64.024C1114.79 60.76 1113.78 58.12 1112.34 56.104C1110.9 54.088 1108.98 52.648 1106.58 51.784C1104.18 50.824 1101.21 50.344 1097.65 50.344C1096.21 50.344 1094.73 50.392 1093.19 50.488C1091.65 50.584 1090.17 50.728 1088.73 50.92C1087.38 51.016 1086.13 51.16 1084.98 51.352C1083.93 51.544 1083.16 51.688 1082.68 51.784V115H1069.29V42.28Z" stroke="white" stroke-width="4"/>
    </svg>

  }
  componentDidMount() {
    const logo = document.querySelectorAll("#logo path")
    console.dir(logo)
    for (let i= 0; i < logo.length; i++) {
      console.log(`${typeof logo[i]} Letter ${i} is ${logo[i].getTotalLength()}`)
    }
  }

  render() {
    return (
      <div className="svg-container">
        {this.svg}
      </div>
    );
  }
}

export default SVGName;