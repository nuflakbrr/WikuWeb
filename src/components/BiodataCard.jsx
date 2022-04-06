import React from "react";

function BiodataCard(props) {
  return (
    <div className="min-w-[20.25rem] max-w-md px-2 py-4 bg-white drop-shadow-sm shadow-[#070708]">
      <div className="w-full h-[12rem] mb-2 bg-[url('https://s3-alpha-sig.figma.com/img/4bbc/1378/7e5a1a360f1c743491a5b5635bf9c1d5?Expires=1650240000&Signature=dFvgcY1CHEe5ESHMMI6gi-YVYw-zYFVmKEnMr21Pn-Cd7686DxA59R1Immrc-ZmqB7k~CXHDlnHLH0DkANcv2XtJ0nmHjkGZXJC-wTxyK9evtRA1hb4a7XepXCxkHwpsMGjn7hj8gq4v~JpNIm2ykkoGavtNP6Yj~2F6xMsA3TdaiDgjdpte9QoMRWzKZv9lWv1FHbbgvcU0LloVctXaD5uV4kjfmP1cjVeEAIgzU3z8vgbCEQnhvOL8wc91KsJ30HuPSDQVDuVg1fuhig9Z66g5SfhSoDUyeZdFfYcBO6fuCTpzZS2hsLYBn1bE3GOzVVVPSJc5ywvz0muBCu7yhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')] bg-cover"></div>
      <div>
        <h1 className="text-[20px] font-semibold">Farhan Rian</h1>
        <div className="text-[14px] font-medium text-[#8C8C8C]">
          <p>Teknik Informatika</p>
          <p>Mokleters 2014-2016</p>
        </div>
      </div>
    </div>
  );
}

export default BiodataCard;
