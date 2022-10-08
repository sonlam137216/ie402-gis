require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  const map = new Map({
    basemap: "topo-vector",
  });
  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 8,


    center: [106.10183715820308, 10.583671721437],

  });
  const graphicsLayer = new GraphicsLayer();

  const withProvince = (data) => {
    return new Graphic({
      geometry: { type: "polygon", rings: data.rings },
      symbol: { type: "simple-fill", color: data.color },
      attributes: data,
      popupTemplate: {
        title: "{title}",
        content: "<a>Dân số: {population} <br> Diện tích: {area}</a>",
      },
    });

  const widthBridge = (data) => {
    return new Graphic({
      symbol: {
        type: "picture-marker",
        url: bridgeImg,
        width: "30px",
        height: "30px",
      },

      geometry: { type: 'point', ...data },
      attributes: data,
      popupTemplate: {
        title: '{title}',
      },

    });
  };
  const withWay = (data) => {
    return new Graphic({
      symbol: { type: "simple-line", color: data.color, width: 3 },
      attributes: { description: data.description },
      popupTemplate: { title: "{description}" },
      geometry: { type: "polyline", paths: data.paths },
    });
  };

  // tỉnh
  graphicsLayer.add(withProvince(ca_mau));
  graphicsLayer.add(withProvince(bac_lieu));
  graphicsLayer.add(withProvince(kien_giang));
  graphicsLayer.add(withProvince(an_giang));
  graphicsLayer.add(withProvince(can_tho));
  graphicsLayer.add(withProvince(hau_giang));
  graphicsLayer.add(withProvince(dong_thap));
  graphicsLayer.add(withProvince(vinh_long));
  graphicsLayer.add(withProvince(long_an));
  graphicsLayer.add(withProvince(ben_tre));
  graphicsLayer.add(withProvince(tra_vinh));
  graphicsLayer.add(withProvince(tien_giang));
  graphicsLayer.add(withProvince(soc_trang));


  // cầu
  graphicsLayer.add(widthBridge(ca_mau_b));
  graphicsLayer.add(widthBridge(cao_lanh_b));
  graphicsLayer.add(widthBridge(kien_giang_b));
  graphicsLayer.add(widthBridge(long_binh_b));
  graphicsLayer.add(widthBridge(tan_an_b));
  graphicsLayer.add(widthBridge(du_tho_b));

  // đường
  graphicsLayer.add(withWay(ql61));
  graphicsLayer.add(withWay(quan_lo_phung_hiep));
  graphicsLayer.add(withWay(ql56));
  graphicsLayer.add(withWay(tl328));
  graphicsLayer.add(withWay(ah1));
  graphicsLayer.add(withWay(tl748));
  graphicsLayer.add(withWay(ql53));
  graphicsLayer.add(withWay(ql54));
  graphicsLayer.add(withWay(ql60));
  graphicsLayer.add(withWay(ql61b));

  // city
  graphicsLayer.add(withCity(rach_gia_city));
  graphicsLayer.add(withCity(bac_lieu_city));
  graphicsLayer.add(withCity(vi_thanh_city));
  graphicsLayer.add(withCity(nga_bay_city));
  graphicsLayer.add(withCity(can_tho_city));
  graphicsLayer.add(withCity(long_xuyen_city));
  graphicsLayer.add(withCity(chau_doc_city));
  graphicsLayer.add(withCity(cao_lanh_city));
  graphicsLayer.add(withCity(sa_dec_city));
  graphicsLayer.add(withCity(hong_ngu_city));
  graphicsLayer.add(withCity(soc_trang_city));
  graphicsLayer.add(withCity(tan_an_city));
  graphicsLayer.add(withCity(my_tho_city));
  graphicsLayer.add(withCity(vinh_long_city));
  graphicsLayer.add(withCity(ben_tre_city));
  graphicsLayer.add(withCity(tra_vinh_city));
  graphicsLayer.add(withCity(ca_mau_city));

  //town
  graphicsLayer.add(withTown(gia_rai_town));
  graphicsLayer.add(withTown(nga_nam_town));
  graphicsLayer.add(withTown(vinh_chau_town));
  graphicsLayer.add(withTown(long_my_town));
  graphicsLayer.add(withTown(ha_tien_town));
  graphicsLayer.add(withTown(tan_chau_town));
  graphicsLayer.add(withTown(binh_minh_town));
  graphicsLayer.add(withTown(duyen_hai_town));
  graphicsLayer.add(withTown(go_cong_town));
  graphicsLayer.add(withTown(cai_lay_town));
  graphicsLayer.add(withTown(kien_tuong_town));

  map.add(graphicsLayer);
});
