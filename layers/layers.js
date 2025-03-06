ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1376436.160966, 7478257.525103, 1403644.035588, 7495607.474138]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Lokalplaner_1 = new ol.format.GeoJSON();
var features_Lokalplaner_1 = format_Lokalplaner_1.readFeatures(json_Lokalplaner_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplaner_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplaner_1.addFeatures(features_Lokalplaner_1);
var lyr_Lokalplaner_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplaner_1, 
                style: style_Lokalplaner_1,
                popuplayertitle: 'Lokalplaner',
                interactive: true,
    title: 'Lokalplaner<br />\
    <img src="styles/legend/Lokalplaner_1_0.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplaner_1_1.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplaner_1_2.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplaner_1_3.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplaner_1_4.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplaner_1_5.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplaner_1_6.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplaner_1_7.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplaner_1_8.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplaner_1_9.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplaner_1_10.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplaner_1_11.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplaner_1_12.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplaner_1_13.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplaner_1_14.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplaner_1_15.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplaner_1_16.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplaner_1_17.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplaner_1_18.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplaner_1_19.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplaner_1_20.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplaner_1_21.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplaner_1_22.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplaner_1_23.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplaner_1_24.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplaner_1_25.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplaner_1_26.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplaner_1_27.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplaner_1_28.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplaner_1_29.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplaner_1_30.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplaner_1_31.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplaner_1_32.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplaner_1_33.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplaner_1_34.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplaner_1_35.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplaner_1_36.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplaner_1_37.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplaner_1_38.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplaner_1_39.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplaner_1_40.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplaner_1_41.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplaner_1_42.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplaner_1_43.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplaner_1_44.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplaner_1_45.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplaner_1_46.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplaner_1_47.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplaner_1_48.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplaner_1_49.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplaner_1_50.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplaner_1_51.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplaner_1_52.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplaner_1_53.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplaner_1_54.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplaner_1_55.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplaner_1_56.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplaner_1_57.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplaner_1_58.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplaner_1_59.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplaner_1_60.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplaner_1_61.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplaner_1_62.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplaner_1_63.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplaner_1_64.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplaner_1_65.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplaner_1_66.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplaner_1_67.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplaner_1_68.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplaner_1_69.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplaner_1_70.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplaner_1_71.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplaner_1_72.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplaner_1_73.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplaner_1_74.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplaner_1_75.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplaner_1_76.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplaner_1_77.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplaner_1_78.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplaner_1_79.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplaner_1_80.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplaner_1_81.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplaner_1_82.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplaner_1_83.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplaner_1_84.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplaner_1_85.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplaner_1_86.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplaner_1_87.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplaner_1_88.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplaner_1_89.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplaner_1_90.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplaner_1_91.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplaner_1_92.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplaner_1_93.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplaner_1_94.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplaner_1_95.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplaner_1_96.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplaner_1_97.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplaner_1_98.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplaner_1_99.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplaner_1_100.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplaner_1_101.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplaner_1_102.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplaner_1_103.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplaner_1_104.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplaner_1_105.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplaner_1_106.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplaner_1_107.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplaner_1_108.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplaner_1_109.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplaner_1_110.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplaner_1_111.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplaner_1_112.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplaner_1_113.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplaner_1_114.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplaner_1_115.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplaner_1_116.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplaner_1_117.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplaner_1_118.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplaner_1_119.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplaner_1_120.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplaner_1_121.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplaner_1_122.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplaner_1_123.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplaner_1_124.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplaner_1_125.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplaner_1_126.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplaner_1_127.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplaner_1_128.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplaner_1_129.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplaner_1_130.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplaner_1_131.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplaner_1_132.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplaner_1_133.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplaner_1_134.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplaner_1_135.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplaner_1_136.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplaner_1_137.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplaner_1_138.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplaner_1_139.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplaner_1_140.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplaner_1_141.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplaner_1_142.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplaner_1_143.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplaner_1_144.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplaner_1_145.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplaner_1_146.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplaner_1_147.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplaner_1_148.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplaner_1_149.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplaner_1_150.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplaner_1_151.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplaner_1_152.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplaner_1_153.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplaner_1_154.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplaner_1_155.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplaner_1_156.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplaner_1_157.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplaner_1_158.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplaner_1_159.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplaner_1_160.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplaner_1_161.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplaner_1_162.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplaner_1_163.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplaner_1_164.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplaner_1_165.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplaner_1_166.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplaner_1_167.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplaner_1_168.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplaner_1_169.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplaner_1_170.png" /> <br />' });
var format_Lokalplanforslag_2 = new ol.format.GeoJSON();
var features_Lokalplanforslag_2 = format_Lokalplanforslag_2.readFeatures(json_Lokalplanforslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanforslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanforslag_2.addFeatures(features_Lokalplanforslag_2);
var lyr_Lokalplanforslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanforslag_2, 
                style: style_Lokalplanforslag_2,
                popuplayertitle: 'Lokalplan forslag',
                interactive: true,
    title: 'Lokalplan forslag<br />\
    <img src="styles/legend/Lokalplanforslag_2_0.png" /> <br />' });
var format_Frededeomrder_3 = new ol.format.GeoJSON();
var features_Frededeomrder_3 = format_Frededeomrder_3.readFeatures(json_Frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_3.addFeatures(features_Frededeomrder_3);
var lyr_Frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_3, 
                style: style_Frededeomrder_3,
                popuplayertitle: 'Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrder_3.png" /> Fredede områder'
            });
var format_Strandbeskyttelse_4 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_4 = format_Strandbeskyttelse_4.readFeatures(json_Strandbeskyttelse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_4.addFeatures(features_Strandbeskyttelse_4);
var lyr_Strandbeskyttelse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_4, 
                style: style_Strandbeskyttelse_4,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/Strandbeskyttelse_4.png" /> Strandbeskyttelse'
            });
var format_frededeomrder_5 = new ol.format.GeoJSON();
var features_frededeomrder_5 = format_frededeomrder_5.readFeatures(json_frededeomrder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_5.addFeatures(features_frededeomrder_5);
var lyr_frededeomrder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_5, 
                style: style_frededeomrder_5,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_5_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_5_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_5_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_5_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_5_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_5_5.png" /> <br />' });
var format_kommuneplan_6 = new ol.format.GeoJSON();
var features_kommuneplan_6 = format_kommuneplan_6.readFeatures(json_kommuneplan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_6.addFeatures(features_kommuneplan_6);
var lyr_kommuneplan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_6, 
                style: style_kommuneplan_6,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_6.png" /> kommuneplan'
            });
var format_matStrandbeskyttelseFlade_Gaeldende_7 = new ol.format.GeoJSON();
var features_matStrandbeskyttelseFlade_Gaeldende_7 = format_matStrandbeskyttelseFlade_Gaeldende_7.readFeatures(json_matStrandbeskyttelseFlade_Gaeldende_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matStrandbeskyttelseFlade_Gaeldende_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matStrandbeskyttelseFlade_Gaeldende_7.addFeatures(features_matStrandbeskyttelseFlade_Gaeldende_7);
var lyr_matStrandbeskyttelseFlade_Gaeldende_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matStrandbeskyttelseFlade_Gaeldende_7, 
                style: style_matStrandbeskyttelseFlade_Gaeldende_7,
                popuplayertitle: 'mat:StrandbeskyttelseFlade_Gaeldende',
                interactive: true,
                title: '<img src="styles/legend/matStrandbeskyttelseFlade_Gaeldende_7.png" /> mat:StrandbeskyttelseFlade_Gaeldende'
            });
var format_Togstation_8 = new ol.format.GeoJSON();
var features_Togstation_8 = format_Togstation_8.readFeatures(json_Togstation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstation_8.addFeatures(features_Togstation_8);
var lyr_Togstation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstation_8, 
                style: style_Togstation_8,
                popuplayertitle: 'Togstation',
                interactive: true,
                title: '<img src="styles/legend/Togstation_8.png" /> Togstation'
            });
var format_CaferHvidore3_9 = new ol.format.GeoJSON();
var features_CaferHvidore3_9 = format_CaferHvidore3_9.readFeatures(json_CaferHvidore3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaferHvidore3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaferHvidore3_9.addFeatures(features_CaferHvidore3_9);
var lyr_CaferHvidore3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaferHvidore3_9, 
                style: style_CaferHvidore3_9,
                popuplayertitle: 'Cafer Hvidore3',
                interactive: true,
                title: '<img src="styles/legend/CaferHvidore3_9.png" /> Cafer Hvidore3'
            });
var format_supermarkeder_10 = new ol.format.GeoJSON();
var features_supermarkeder_10 = format_supermarkeder_10.readFeatures(json_supermarkeder_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_supermarkeder_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_supermarkeder_10.addFeatures(features_supermarkeder_10);
var lyr_supermarkeder_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_supermarkeder_10, 
                style: style_supermarkeder_10,
                popuplayertitle: 'supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/supermarkeder_10.png" /> supermarkeder'
            });
var format_Hospital_11 = new ol.format.GeoJSON();
var features_Hospital_11 = format_Hospital_11.readFeatures(json_Hospital_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_11.addFeatures(features_Hospital_11);
var lyr_Hospital_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_11, 
                style: style_Hospital_11,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_11.png" /> Hospital'
            });
var format_Folkeskoler2_12 = new ol.format.GeoJSON();
var features_Folkeskoler2_12 = format_Folkeskoler2_12.readFeatures(json_Folkeskoler2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler2_12.addFeatures(features_Folkeskoler2_12);
var lyr_Folkeskoler2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler2_12, 
                style: style_Folkeskoler2_12,
                popuplayertitle: 'Folkeskoler2',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler2_12.png" /> Folkeskoler2'
            });
var format_Apotekhvidore_13 = new ol.format.GeoJSON();
var features_Apotekhvidore_13 = format_Apotekhvidore_13.readFeatures(json_Apotekhvidore_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apotekhvidore_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apotekhvidore_13.addFeatures(features_Apotekhvidore_13);
var lyr_Apotekhvidore_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apotekhvidore_13, 
                style: style_Apotekhvidore_13,
                popuplayertitle: 'Apotek hvidore',
                interactive: true,
                title: '<img src="styles/legend/Apotekhvidore_13.png" /> Apotek hvidore'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Lokalplaner_1.setVisible(true);lyr_Lokalplanforslag_2.setVisible(true);lyr_Frededeomrder_3.setVisible(true);lyr_Strandbeskyttelse_4.setVisible(true);lyr_frededeomrder_5.setVisible(true);lyr_kommuneplan_6.setVisible(true);lyr_matStrandbeskyttelseFlade_Gaeldende_7.setVisible(true);lyr_Togstation_8.setVisible(true);lyr_CaferHvidore3_9.setVisible(true);lyr_supermarkeder_10.setVisible(true);lyr_Hospital_11.setVisible(true);lyr_Folkeskoler2_12.setVisible(true);lyr_Apotekhvidore_13.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Lokalplaner_1,lyr_Lokalplanforslag_2,lyr_Frededeomrder_3,lyr_Strandbeskyttelse_4,lyr_frededeomrder_5,lyr_kommuneplan_6,lyr_matStrandbeskyttelseFlade_Gaeldende_7,lyr_Togstation_8,lyr_CaferHvidore3_9,lyr_supermarkeder_10,lyr_Hospital_11,lyr_Folkeskoler2_12,lyr_Apotekhvidore_13];
lyr_Lokalplaner_1.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanforslag_2.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Frededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Strandbeskyttelse_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_frededeomrder_5.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_kommuneplan_6.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_matStrandbeskyttelseFlade_Gaeldende_7.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Togstation_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CaferHvidore3_9.set('fieldAliases', {'Cafenavn': 'Cafenavn', 'Adresse': 'Adresse', 'by': 'by', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_supermarkeder_10.set('fieldAliases', {'Butiksnavn': 'Butiksnavn', 'Adresse': 'Adresse', 'By': 'By', 'field_4': 'field_4', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Hospital_11.set('fieldAliases', {'Hospitals': 'Hospitals', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskoler2_12.set('fieldAliases', {'Skolenavne': 'Skolenavne', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Apotekhvidore_13.set('fieldAliases', {'Navn': 'Navn', 'Adresse': 'Adresse', 'by': 'by', 'website': 'website', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lokalplaner_1.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanforslag_2.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Frededeomrder_3.set('fieldImages', {'fid': '', 'Temakode': '', 'Temanavn': '', 'Objekt_id': '', 'Version_id': '', 'Systid_fra': '', 'Systid_til': '', 'Oprettet': '', 'Oprindkode': '', 'Oprindelse': '', 'Statuskode': '', 'Status': '', 'Off_kode': '', 'Offentlig': '', 'CVR_kode': '', 'CVR_navn': '', 'Bruger_id': '', 'Link': '', 'Shape_area': '', 'Shape_leng': '', 'Fred_tkode': '', 'Fred_tnavn': '', 'Reg_nr': '', 'Fred_navn': '', 'Aendr_kode': '', 'Aendrbegr': '', 'Aar_fredn': '', 'Gyldig_fra': '', 'Gyldig_til': '', });
lyr_Strandbeskyttelse_4.set('fieldImages', {'fid': '', 'oid': '', 'id': '', 'planid': '', 'objektkode': '', 'komnr': '', 'plannavn': '', 'doklink': '', 'datoforsl': '', 'datovedt': '', 'datoaflyst': '', 'datoikraft': '', 'datoslut': '', 'aktuel': '', 'datooprt': '', 'datoopdt': '', 'status': '', 'datostart': '', 'glkomnr': '', 'kommunenavn': '', 'glkomnavn': '', 'glkomnavn_besk': '', });
lyr_frededeomrder_5.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_kommuneplan_6.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_matStrandbeskyttelseFlade_Gaeldende_7.set('fieldImages', {'fid': '', 'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_Togstation_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'DateTime', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_CaferHvidore3_9.set('fieldImages', {'Cafenavn': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_supermarkeder_10.set('fieldImages', {'Butiksnavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'field_4': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Hospital_11.set('fieldImages', {'Hospitals': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Folkeskoler2_12.set('fieldImages', {'Skolenavne': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Apotekhvidore_13.set('fieldImages', {'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'website': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Lokalplaner_1.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Lokalplanforslag_2.set('fieldLabels', {'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Frededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Strandbeskyttelse_4.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_frededeomrder_5.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_kommuneplan_6.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_matStrandbeskyttelseFlade_Gaeldende_7.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_Togstation_8.set('fieldLabels', {'Name': 'no label', 'begin': 'header label - always visible', });
lyr_CaferHvidore3_9.set('fieldLabels', {'Cafenavn': 'no label', 'Adresse': 'no label', 'by': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_supermarkeder_10.set('fieldLabels', {'Butiksnavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'field_4': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Hospital_11.set('fieldLabels', {'Hospitals': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Folkeskoler2_12.set('fieldLabels', {'Skolenavne': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Apotekhvidore_13.set('fieldLabels', {'Navn': 'no label', 'Adresse': 'no label', 'by': 'no label', 'website': 'no label', });
lyr_Apotekhvidore_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'screen';
});