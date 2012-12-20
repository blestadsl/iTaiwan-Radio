﻿var jsonStations = [
    { id: '1001', title: 'BravoFM台北都會休閒音樂台', uri: 'mms://bcr.media.hinet.net/RADRM081' },
    { id: '1120', title: 'Classical台中古典音樂台', uri: 'mms://bcr.media.hinet.net/RADRM041' },
    { id: '228', title: 'E-Classical台北愛樂', uri: 'mms://bcr.media.hinet.net/RA000018' },
    { id: '308', title: 'KISSRADIO網路音樂台', uri: 'mms://bcr.media.hinet.net/RA000042' },
    { id: '156', title: 'KISSRADIO大眾廣播電台', uri: 'mms://bcr.media.hinet.net/RA000040' },
    { id: '206', title: '中廣音樂網iradio', uri: 'mms://bcr.media.hinet.net/RA000007' },
    { id: '205', title: '中廣流行網ilike', uri: 'mms://bcr.media.hinet.net/RA000009' },
    { id: '222', title: 'HitFM聯播網北部', uri: 'mms://bcr.media.hinet.net/RA000036' },
    { id: '88', title: 'HitFM聯播網中部', uri: 'mms://bcr.media.hinet.net/RA000035' },
    { id: '90', title: 'HitFM聯播網南部', uri: 'mms://bcr.media.hinet.net/RA000034' },
    { id: '370', title: 'POPRadio台北流行音樂電台', uri: 'mms://bcr.media.hinet.net/RA000080' },
    { id: '294', title: '奇美古典音樂網', uri: 'mms://bcr.media.hinet.net/RA000014' },
    { id: '212', title: 'BestRadio台北好事', uri: 'mms://bcr.media.hinet.net/RA000013' },
    { id: '213', title: 'BestRadio高雄港都', uri: 'mms://bcr.media.hinet.net/RADRM012' },
    { id: '211', title: 'BestRadio台中好事', uri: 'mms://bcr.media.hinet.net/RA000010' },
    { id: '303', title: 'BestRadio花蓮好事', uri: 'mms://bcr.media.hinet.net/RA000011' },
    { id: '248', title: 'AppleLine蘋果線上', uri: 'mms://bcr.media.hinet.net/RA000001' },
    { id: '321', title: 'ASIAFM衛星音樂台', uri: 'mms://bcr.media.hinet.net/RA000004' },
    { id: '357', title: 'Flyradio飛揚調頻', uri: 'mms://bcr.media.hinet.net/RA000019' },
    { id: '313', title: 'RTI央廣音樂', uri: 'mms://bcr.media.hinet.net/RA000061' },
    { id: '340', title: '佳音現代聖樂網', uri: 'mms://bcr.media.hinet.net/RA000031' },
    { id: '338', title: '全國廣播音樂網', uri: 'http://bcr.media.hinet.net/RA000047' },
    { id: '289', title: '太陽電台', uri: 'mms://bcr.media.hinet.net/RA000064' },
    { id: '1060', title: 'needsRADIO信義之聲', uri: 'mms://bcr.media.hinet.net/RADRM039' },
    { id: '1143', title: '古都電台', uri: 'mms://bcr.media.hinet.net/RADRM085' },
    { id: '232', title: '飛碟電台', uri: 'mms://bcr.media.hinet.net/RA000072' },
    { id: '210', title: 'ASIAFM亞州電台', uri: 'mms://bcr.media.hinet.net/RA000003' },
    { id: '295', title: 'ASIAFM亞太電台', uri: 'mms://bcr.media.hinet.net/RA000002' },
    { id: '148', title: 'IC之音', uri: 'mms://bcr.media.hinet.net/RA000037' },
    { id: '282', title: '環宇電台', uri: 'mms://bcr.media.hinet.net/RA000020' },
    { id: '202', title: '全國廣播', uri: 'http://bcr.media.hinet.net/RA000068' },
    { id: '201', title: '佳音電台', uri: 'mms://bcr.media.hinet.net/RA000029' },
    { id: '250', title: '佳音經典音樂網', uri: 'mms://bcr.media.hinet.net/RA000030' },
    { id: '229', title: 'GOLDFM台北健康電台', uri: 'mms://bcr.media.hinet.net/RA000027' },
    { id: '226', title: 'GOLDFM台中城市廣播', uri: 'mms://bcr.media.hinet.net/RA000028' },
    { id: '238', title: '臺北廣播電臺喔海洋頻道', uri: 'http://bcr.media.hinet.net/RADRM069' },
    { id: '208', title: '臺北廣播電臺都會資訊頻道', uri: 'http://bcr.media.hinet.net/RADRM070' },
    { id: '109', title: '大千電台', uri: 'mms://bcr.media.hinet.net/RA000067' },
    { id: '301', title: 'EZRadio宜蘭中山電台', uri: 'mms://bcr.media.hinet.net/RADRM065' },
    { id: '217', title: '真心之音廣播電台', uri: 'mms://bcr.media.hinet.net/RA000033' },
    { id: '207', title: '中廣新聞網', uri: 'mms://bcr.media.hinet.net/RA000008' },
    { id: '187', title: 'NEWS98新聞網', uri: 'mms://bcr.media.hinet.net/RA000073' },
    { id: '1080', title: '台灣之聲', uri: 'mms://bcr.media.hinet.net/RADRM046' },
    { id: '1020', title: '正義電台', uri: 'mms://bcr.media.hinet.net/RA000022' },
    { id: '198', title: '正聲台北調頻台', uri: 'mms://bcr.media.hinet.net/RA000016' },
    { id: '317', title: '正聲台北調幅台', uri: 'mms://bcr.media.hinet.net/RA000015' },
    { id: '286', title: '復興廣播電台第一網', uri: 'mms://bcr.media.hinet.net/RADRM024' },
    { id: '287', title: '復興廣播電台第二網', uri: 'mms://bcr.media.hinet.net/RA000025' },
    { id: '288', title: '復興廣播電台短波網', uri: 'mms://bcr.media.hinet.net/RA000026' },
    { id: '216', title: '漢聲廣播電台全國調頻網', uri: 'mms://bcr.media.hinet.net/RA000076' },
    { id: '215', title: '漢聲廣播電台', uri: 'mms://bcr.media.hinet.net/RA000074' },
    { id: '309', title: '漢聲光華網短波', uri: 'mms://bcr.media.hinet.net/RA000077' },
    { id: '281', title: '漢聲光華網中波', uri: 'mms://bcr.media.hinet.net/RA000075' },
    { id: '315', title: 'RTI央廣國語', uri: 'mms://bcr.media.hinet.net/RA000063' },
    { id: '327', title: '綠色和平台灣文化廣播電台', uri: 'mms://bcr.media.hinet.net/RA000032' },
    { id: '177', title: 'ICRT', uri: 'mms://bcr.media.hinet.net/RA000038' },
    { id: '314', title: 'RTI央廣歐美及方言', uri: 'mms://bcr.media.hinet.net/RA000062' },
    { id: '312', title: 'RTI央廣FM', uri: 'mms://bcr.media.hinet.net/RA000060' },
    { id: '311', title: 'RTI央廣亞洲頻道', uri: 'mms://bcr.media.hinet.net/RA000059' },
    { id: '1170', title: 'BestRadio南方之音', uri: 'http://bcr.media.hinet.net/RADRM044' },
    { id: '1180', title: 'Nice923宜蘭生活廣播', uri: 'mms://bcr.media.hinet.net/RADRM086' },
    { id: '259', title: '寶島新聲廣播電台', uri: 'mms://bcr.media.hinet.net/RA000066' },
    { id: '1140', title: '快樂聯播網－台北', uri: 'mms://bcr.media.hinet.net/RADRM082' },
    { id: '1141', title: '快樂聯播網－嘉義', uri: 'mms://bcr.media.hinet.net/RADRM083' },
    { id: '1142', title: '快樂聯播網－高雄', uri: 'mms://bcr.media.hinet.net/RADRM084' },
    { id: '1040', title: '非凡音電台', uri: 'http://bcr.media.hinet.net/RADRM071' },
    { id: '160', title: 'igo531', uri: 'mms://bcr.media.hinet.net/RA000006' },
    { id: '300', title: '大漢之音', uri: 'mms://bcr.media.hinet.net/RADRM021' },
    { id: '241', title: '寶島客家廣播電台', uri: 'http://bcr.media.hinet.net/RADRM023' },
    { id: '254', title: '新客家廣播電台', uri: 'http://bcr.media.hinet.net/RADRM048' },
    { id: '298', title: '高屏溪客家廣播電台', uri: 'mms://bcr.media.hinet.net/RADRM045' },
    { id: '356', title: '青春線上', uri: 'mms://bcr.media.hinet.net/RA000079' },
    { id: '162', title: '中廣寶島網', uri: 'mms://bcr.media.hinet.net/RA000005' },
    { id: '1100', title: '警廣全國交通網', uri: 'http://bcr.media.hinet.net/RADRM049' },
    { id: '1103', title: '警廣台中台', uri: 'http://bcr.media.hinet.net/RADRM053' },
    { id: '1101', title: '警廣台北台', uri: 'http://bcr.media.hinet.net/RADRM050' },
    { id: '1104', title: '警廣台南台', uri: 'http://bcr.media.hinet.net/RADRM054' },
    { id: '1108', title: '警廣台東台', uri: 'http://bcr.media.hinet.net/RADRM058' },
    { id: '1106', title: '警廣宜蘭台', uri: 'http://bcr.media.hinet.net/RADRM057' },
    { id: '1102', title: '警廣新竹台', uri: 'http://bcr.media.hinet.net/RADRM052' },
    { id: '1107', title: '警廣花蓮台', uri: 'http://bcr.media.hinet.net/RADRM056' },
    { id: '1109', title: '警廣長青網', uri: 'http://bcr.media.hinet.net/RADRM051' },
    { id: '1105', title: '警廣高雄台', uri: 'http://bcr.media.hinet.net/RADRM055' }];