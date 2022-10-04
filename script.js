require([
  'esri/config',
  'esri/Map',
  'esri/views/MapView',
  'esri/Graphic',
  'esri/layers/GraphicsLayer',
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  const map = new Map({
    basemap: 'topo-vector',
  });
  const view = new MapView({
    container: 'viewDiv',
    map: map,
    zoom: 8,
    center: [106.10183715820308, 10.583671721437], // longitude, latitude 10.8811081,106.7976408
  });
  const graphicsLayer = new GraphicsLayer();

  const withProvince = (data) => {
    return new Graphic({
      geometry: { type: 'polygon', rings: data.rings },
      symbol: { type: 'simple-fill', color: data.color },
      attributes: data,
      popupTemplate: {
        title: '{title}',
        content: '<a>Dân số: {population} <br> Diện tích: {area}</a>',
      },
    });
  };
  const widthBridge = (data) => {
    return new Graphic({
      symbol: {
        type: 'picture-marker',
        url: bridgeImg,
        width: '48px',
        height: '48px',
      },
      geometry: { type: 'point', ...data },
    });
  };
  const withWay = (data) => {
    return new Graphic({
      symbol: { type: 'simple-line', color: data.color, width: 3 },
      attributes: { description: data.description },
      popupTemplate: { title: '{description}' },
      geometry: { type: 'polyline', paths: data.paths },
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
  graphicsLayer.add(widthBridge(binh_loi_b));
  graphicsLayer.add(widthBridge(buu_hoa_b));
  graphicsLayer.add(widthBridge(ca_mau_b));
  graphicsLayer.add(widthBridge(cao_lanh_b));
  graphicsLayer.add(widthBridge(dong_nai_b));
  graphicsLayer.add(widthBridge(kien_giang_b));
  graphicsLayer.add(widthBridge(long_binh_b));
  graphicsLayer.add(widthBridge(sai_gon_b));
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

  map.add(graphicsLayer);
});
