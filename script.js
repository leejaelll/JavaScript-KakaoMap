(function () {
    "use strict";

    const $map = document.getElementById("map");
    const geolocationButton = document.querySelector(".geolocation_button");

    //지도 컨테이너 만들기
    const mapContainer = new kakao.maps.Map($map, {
        center: new kakao.maps.LatLng(37.56646, 126.98121),
        level: 3,
    });

    // 성공함수
    const successGeolocation = (position) => {
        const { latitude, longitude } = position.coords;
        let currentPos = new kakao.maps.LatLng(latitude, longitude);

        // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
        mapContainer.panTo(currentPos);

        // 마커 생성
        var marker = new kakao.maps.Marker({
            position: currentPos,
        });

        // 기존에 마커가 있다면 제거
        marker.setMap(null);
        marker.setMap(mapContainer);
    };

    const errorGeolocation = (error) => {
        alert("지도 정보를 받아올수 없습니다. ");
    };
    // 실패함수
    // 현재위치 받아오기
    const getCurrentLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                successGeolocation,
                errorGeolocation
            );
        } else {
            alert("지도 관련 api를 불러올 수 없습니다. ");
        }
    };

    const init = () => {
        geolocationButton.addEventListener("click", () => {
            console.log("hi");
            getCurrentLocation();
        });
    };

    init();
})();
