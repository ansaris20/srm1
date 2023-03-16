var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_srm1_1 = new ol.format.GeoJSON();
var features_srm1_1 = format_srm1_1.readFeatures(json_srm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm1_1.addFeatures(features_srm1_1);
var lyr_srm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srm1_1, 
                style: style_srm1_1,
                interactive: true,
    title: 'srm1<br />\
    <img src="styles/legend/srm1_1_0.png" /> academic<br />\
    <img src="styles/legend/srm1_1_1.png" /> hostel<br />\
    <img src="styles/legend/srm1_1_2.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_srm1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_srm1_1];
lyr_srm1_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'class': 'class', });
lyr_srm1_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'class': 'TextEdit', });
lyr_srm1_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'class': 'no label', });
lyr_srm1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});