import React,{AsyncStorage} from 'react-native'
const storagePackageKey = 'hk_ncloud_Packagecollection'
const storageEmotionKey = 'hk_ncloud_Emotioncollection'
export default {
    emotionCache: [],
    allEmotions: [
        {
            "id": 4,
            "name": "躺枪君",
            "ATK": 60,
            "isNew": false,
            "isFighting": true,
            "items": [{
                "id": 977,
                "path": require('../Image/FaceBread4/f4a09c2c-067e-4ea6-972d-19a43127c745.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 978,
                "path": require('../Image/FaceBread4/f8b2852f-e95d-420c-8cf6-2b4044067ce1.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 975,
                "path": require('../Image/FaceBread4/d1c7db61-a932-4bb0-b596-8f909590927c.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 976,
                "path": require('../Image/FaceBread4/d56d9667-e380-4935-9498-e346812315d4.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 972,
                "path": require('../Image/FaceBread4/93762734-88d1-48fc-9d1a-bd546a354f4e.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 973,
                "path": require('../Image/FaceBread4/941c40b7-dfa8-4b47-af16-65b5d86c5fac.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 974,
                "path": require('../Image/FaceBread4/eec1250a-7dae-4c73-aa83-14e3b0410b9e.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 969,
                "path": require('../Image/FaceBread4/e3189ac7-54de-48bf-ac82-c2900b374025.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 970,
                "path": require('../Image/FaceBread4/06b254b0-6f23-4574-953d-edf268eb21d9.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }, {
                "id": 971,
                "path": require('../Image/FaceBread4/6a94b507-e960-4640-827a-d0b2727b0953.gif'),
                "tags": ["动态图", "恶搞", "躺枪君"]
            }]
        }, {
            "id": 16,
            "name": "B娘",
            "ATK": 85,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1247,
                "path": require('../Image/FaceBread16/cda8742f-2a52-4bbc-b2c7-edbe04e25aa1.jpg'),
                "tags": ["静态图", "卡通", "无语"]
            }, {
                "id": 1246,
                "path": require('../Image/FaceBread16/4c5bba8c-7f0f-4231-ad5d-6cb691cb249b.gif'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1245,
                "path": require('../Image/FaceBread16/456d14ab-039a-447e-a959-15267e0a15d5.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1244,
                "path": require('../Image/FaceBread16/89ffe728-511b-42d5-a41f-599302e99603.jpg'),
                "tags": ["静态图", "卡通", "困"]
            }, {
                "id": 1243,
                "path": require('../Image/FaceBread16/6fcb3825-db95-4421-bd18-22acc5277753.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1241,
                "path": require('../Image/FaceBread16/c8817ccc-3c14-4bcc-8bc0-665519a29568.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1242,
                "path": require('../Image/FaceBread16/6807bbd1-91fc-43cd-996b-4d79a61f14c5.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1240,
                "path": require('../Image/FaceBread16/bd5d1dcf-fd10-457d-a4c3-e51c2aadad1b.jpg'),
                "tags": ["动物", "静态图", "卡通"]
            }, {
                "id": 1239,
                "path": require('../Image/FaceBread16/690b0860-c6e5-4f2c-9755-52ebd43b5bb3.jpg'),
                "tags": ["静态图", "卡通", "许愿"]
            }, {
                "id": 1237,
                "path": require('../Image/FaceBread16/481988cc-1cbe-4710-b0b8-e99387d2aec7.jpg'),
                "tags": ["静态图", "卡通", "困"]
            }, {
                "id": 1238,
                "path": require('../Image/FaceBread16/4a522c2b-f892-42af-905f-df9c2124ce1c.jpg'),
                "tags": ["静态图", "卡通", "赞"]
            }, {
                "id": 1236,
                "path": require('../Image/FaceBread16/a2055c92-158a-424a-bdd4-1aedc68accae.jpg'),
                "tags": ["静态图", "卡通", "困"]
            }, {
                "id": 1234,
                "path": require('../Image/FaceBread16/07afe941-95b9-4bf9-b067-ab308c5d3cb3.jpg'),
                "tags": ["静态图", "卡通", "可怜"]
            }, {
                "id": 1235,
                "path": require('../Image/FaceBread16/791252d1-6db8-478a-a491-be70bb19072a.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1233,
                "path": require('../Image/FaceBread16/1d03081b-2c8a-42be-ba04-c9b81d8e6b09.jpg'),
                "tags": ["静态图", "卡通", "中箭"]
            }, {
                "id": 1232,
                "path": require('../Image/FaceBread16/1e65cea9-4799-42e8-ac78-7f82f8482c43.jpg'),
                "tags": ["静态图", "卡通", "无语"]
            }, {
                "id": 1231,
                "path": require('../Image/FaceBread16/06231d10-ff54-4d6d-8a01-7a1c3fcaf000.jpg'),
                "tags": ["静态图", "卡通", "石化"]
            }, {
                "id": 1230,
                "path": require('../Image/FaceBread16/bf04d16c-7e65-486f-a6a0-356388cc4181.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1228,
                "path": require('../Image/FaceBread16/97f63d3f-3a9f-437e-ae9c-b91e9cf49c72.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1229,
                "path": require('../Image/FaceBread16/49d04561-5556-405f-9ee7-fe4468e7b2f4.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1227,
                "path": require('../Image/FaceBread16/66d0c83e-6d8b-49f0-97c6-ee1917993ca0.jpg'),
                "tags": ["静态图", "卡通", "可怜"]
            }, {
                "id": 1225,
                "path": require('../Image/FaceBread16/177b12a9-6243-4f8b-8ab5-fd6f5f82eb74.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1226,
                "path": require('../Image/FaceBread16/70b60598-8781-4eb8-8a09-a74a1e6ac5fc.jpg'),
                "tags": ["静态图", "卡通", "羡慕"]
            }, {
                "id": 1224,
                "path": require('../Image/FaceBread16/1a1e0365-7f82-4ddc-9d43-347ba8494b3c.jpg'),
                "tags": ["静态图", "卡通", "无语"]
            }, {
                "id": 1223,
                "path": require('../Image/FaceBread16/77ad45de-e4e0-4773-924e-07693f917620.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1210,
                "path": require('../Image/FaceBread16/bf2afd1c-9197-450c-b95d-ad46351ee042.jpg'),
                "tags": ["静态图", "卡通", "无语"]
            }, {
                "id": 1209,
                "path": require('../Image/FaceBread16/94ddcbfa-e4a5-4e2e-b4e8-19356611f49d.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1208,
                "path": require('../Image/FaceBread16/6dd7fa6d-a1ea-41a8-8343-03d3046e00e6.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1207,
                "path": require('../Image/FaceBread16/82b65725-43a5-4a04-a2f7-e9c6983244e6.jpg'),
                "tags": ["补刀", "静态图", "卡通"]
            }, {
                "id": 1206,
                "path": require('../Image/FaceBread16/eafb1771-8a4d-42ce-8c44-edaa5a041420.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1205,
                "path": require('../Image/FaceBread16/55c8fa74-0681-4f24-ab12-461be5f4e46c.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1204,
                "path": require('../Image/FaceBread16/9dcd721d-c3eb-4672-bdc6-9b2884dedcba.jpg'),
                "tags": ["静态图", "卡通", "作死"]
            }, {
                "id": 1203,
                "path": require('../Image/FaceBread16/06857c35-4a57-4d34-a738-b58f9f314088.jpg'),
                "tags": ["静态图", "卡通", "生气"]
            }, {
                "id": 1201,
                "path": require('../Image/FaceBread16/0895ad23-da96-453e-9fb5-82f24754d0d3.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1202,
                "path": require('../Image/FaceBread16/92d8c6fc-ff4d-4207-94c6-969a3322f868.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1200,
                "path": require('../Image/FaceBread16/803d7dac-293d-4304-a11a-c3557f6daf39.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1199,
                "path": require('../Image/FaceBread16/6d0bf79e-a12d-4333-9dbb-50a33ed7c4e7.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1198,
                "path": require('../Image/FaceBread16/6955f057-fff9-4296-8a63-6391e9f47396.jpg'),
                "tags": ["静态图", "卡通", "睡觉"]
            }, {
                "id": 1197,
                "path": require('../Image/FaceBread16/0cce1818-1940-4025-92ab-43f921aa0c9b.jpg'),
                "tags": ["静态图", "卡通", "萌图"]
            }, {
                "id": 1196,
                "path": require('../Image/FaceBread16/a88983ad-d384-4aa4-b4bd-431e9b739321.jpg'),
                "tags": ["静态图", "卡通", "萌图"]
            }, {
                "id": 1195,
                "path": require('../Image/FaceBread16/95d5cc9c-0644-43cf-9d50-d1f4c10c0756.jpg'),
                "tags": ["静态图", "卡通", "萌图"]
            }]
        }, {
            "id": 17,
            "name": "社会主义风",
            "ATK": 75,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 923,
                "path": require('../Image/FaceBread17/622eaffe-d2b6-4125-8197-b8e608fa267a.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 924,
                "path": require('../Image/FaceBread17/202982b8-e0d7-459c-b63b-a575277f7f42.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 925,
                "path": require('../Image/FaceBread17/2bbc0482-c4f3-42f8-a962-3cc652f2f552.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 926,
                "path": require('../Image/FaceBread17/93d0bd3c-c4cc-4762-89c0-e91d6b823e50.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 921,
                "path": require('../Image/FaceBread17/c9b1e793-a9ee-4778-94b9-70fe5581125f.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 922,
                "path": require('../Image/FaceBread17/12171ad4-8811-4b76-8e07-d21875297858.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 918,
                "path": require('../Image/FaceBread17/e72d5b79-f267-41d5-9953-75f9255f03c9.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 919,
                "path": require('../Image/FaceBread17/74b7483c-e5cd-417a-96bc-57dc404edf33.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 920,
                "path": require('../Image/FaceBread17/44327c60-5944-4284-be81-4e5ddbe1e35b.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 916,
                "path": require('../Image/FaceBread17/397e965b-c7b0-4ba6-a8d6-735bda04eb40.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 917,
                "path": require('../Image/FaceBread17/dc38e925-9fb4-4e58-b372-ab4ae519d06e.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 914,
                "path": require('../Image/FaceBread17/75d30ea6-dbda-441d-9e92-15ccbc5042ac.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 915,
                "path": require('../Image/FaceBread17/9d0baede-0cd7-42f6-a340-1a958741187d.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 913,
                "path": require('../Image/FaceBread17/df1e04ed-54f4-4c1f-a9de-4cd22f7e0aa7.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 910,
                "path": require('../Image/FaceBread17/ebb65073-378a-480e-83b7-6577217e23a8.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 911,
                "path": require('../Image/FaceBread17/782bf1b4-222e-4b3d-a9a6-d56a9c84412d.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 912,
                "path": require('../Image/FaceBread17/d4cfee6c-0f4e-47d7-8d7b-d71425073797.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 909,
                "path": require('../Image/FaceBread17/e130b78f-92d6-4cab-aab6-d1dbcf92312d.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 906,
                "path": require('../Image/FaceBread17/b40cc0a2-87e9-4e2b-a61f-54158034737d.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 907,
                "path": require('../Image/FaceBread17/47b00461-a223-4e91-94e0-dc176b615021.jpg'),
                "tags": ["恶搞", "社会主义"]
            }, {
                "id": 908,
                "path": require('../Image/FaceBread17/ba5ac131-f53e-4824-a46f-498622b5d075.jpg'),
                "tags": ["恶搞", "社会主义"]
            }]
        }, {
            "id": 18,
            "name": "谢耳朵",
            "ATK": 85,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 966,
                "path": require('../Image/FaceBread18/557c365e-cd1e-4a45-a048-e196878e5d92.gif'),
                "tags": ["动态图", "恶搞", "人物"]
            }, {
                "id": 967,
                "path": require('../Image/FaceBread18/bf727c6d-b978-48aa-ba21-4c3edc8e567e.gif'),
                "tags": ["动态图", "恶搞", "贱人", "人物"]
            }, {
                "id": 968,
                "path": require('../Image/FaceBread18/4377de32-c24b-48ec-8cb4-ff61ba1618d3.gif'),
                "tags": ["动态图", "恶搞", "贱人", "人物"]
            }, {
                "id": 964,
                "path": require('../Image/FaceBread18/3e68726d-a429-4038-b196-e1ca00330d63.gif'),
                "tags": ["动态图", "恶搞", "人物"]
            }, {
                "id": 965,
                "path": require('../Image/FaceBread18/9faad024-3d76-4ea8-b70f-508abd6198b9.gif'),
                "tags": ["动态图", "恶搞", "人物"]
            }, {
                "id": 962,
                "path": require('../Image/FaceBread18/29a5a613-5efe-41a5-834c-55c734883345.gif'),
                "tags": ["动态图", "恶搞", "贱人", "人物"]
            }, {
                "id": 963,
                "path": require('../Image/FaceBread18/be04c223-ee8d-4bcb-abb1-d7aafee5d303.gif'),
                "tags": ["动态图", "恶搞", "贱人", "人物"]
            }, {
                "id": 961,
                "path": require('../Image/FaceBread18/a9a2c24d-faf9-4734-b88f-c4e70ef38d1d.gif'),
                "tags": ["动态图", "恶搞", "人物"]
            }, {
                "id": 960,
                "path": require('../Image/FaceBread18/78dc4ca6-b2f4-4b78-9dee-53d4400acfe3.gif'),
                "tags": ["动态图", "恶搞", "人物"]
            }]
        }, {
            "id": 19,
            "name": "熊本熊",
            "ATK": 60,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 959,
                "path": require('../Image/FaceBread19/f2972e95-9b25-4b31-8efc-16bc01709d1f.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 955,
                "path": require('../Image/FaceBread19/7fc3db2d-22b5-458e-85cd-da307f8f85fd.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 956,
                "path": require('../Image/FaceBread19/6ba56f10-6898-4767-b21e-a9ba0dca4103.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 957,
                "path": require('../Image/FaceBread19/8a96e4e8-99f1-4810-b44e-19b7c5739fbc.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 958,
                "path": require('../Image/FaceBread19/052efbd3-7343-469f-af29-09c006c02f0a.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 953,
                "path": require('../Image/FaceBread19/cff9b352-d142-462f-b17f-21cc42995145.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 954,
                "path": require('../Image/FaceBread19/dc203ea3-8eea-41ae-b3f3-fb3261600ffa.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 950,
                "path": require('../Image/FaceBread19/3c708eec-c31d-45ee-a51c-2dd7397d6ba0.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 951,
                "path": require('../Image/FaceBread19/93932fa8-c0d0-486e-8a42-8919c2753c90.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 952,
                "path": require('../Image/FaceBread19/b9451365-64e3-4ea5-821c-bdec9e178b3a.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 949,
                "path": require('../Image/FaceBread19/38aaff7a-c165-4506-ac21-29ac85a9b51d.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 948,
                "path": require('../Image/FaceBread19/7a6256f3-98cf-4791-ad42-09d4a3e1051b.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 946,
                "path": require('../Image/FaceBread19/4f404ebb-dc3f-441a-bfb9-397b6f84d4c0.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 947,
                "path": require('../Image/FaceBread19/4af6956b-ac60-4431-950d-187c0b932ee9.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 944,
                "path": require('../Image/FaceBread19/22079643-33eb-4854-801b-f4fe8ece195a.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 945,
                "path": require('../Image/FaceBread19/4fb97d83-1b21-4e56-b916-0824af858401.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 941,
                "path": require('../Image/FaceBread19/071beffe-dea6-4496-9b74-3bc2e84b574f.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 942,
                "path": require('../Image/FaceBread19/fdf730f7-55cc-4063-baf4-c0e705487443.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 943,
                "path": require('../Image/FaceBread19/544620c0-3035-4689-bdae-009270a99e1b.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 939,
                "path": require('../Image/FaceBread19/a5c66651-606f-412b-b38e-9d4066d74dbc.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 940,
                "path": require('../Image/FaceBread19/28bf701c-b0dc-4b89-95d6-f7f2c5040c1d.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 937,
                "path": require('../Image/FaceBread19/eab12c87-8c80-4720-88ad-81f08b1802f9.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 938,
                "path": require('../Image/FaceBread19/773531d8-9c2d-4d34-b095-6d321e60d2a2.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 934,
                "path": require('../Image/FaceBread19/f1f4a614-2f38-4c41-bc69-a0b02eeea87f.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 935,
                "path": require('../Image/FaceBread19/4033c6e1-b197-4a8f-9be7-19225d039d30.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 936,
                "path": require('../Image/FaceBread19/dad9a5d1-ae45-40c9-8396-67e4ff3275d3.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 932,
                "path": require('../Image/FaceBread19/cc61c72c-4931-4c27-be05-697c1ad79af0.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 933,
                "path": require('../Image/FaceBread19/27e6ae89-00ba-4495-b9e3-1f1ae420dae6.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 930,
                "path": require('../Image/FaceBread19/f22fd47c-b62f-46d0-9209-24be1dc2df10.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 931,
                "path": require('../Image/FaceBread19/ece3e555-a3dc-42d1-b9f7-6b1cbaca200f.jpg'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 928,
                "path": require('../Image/FaceBread19/bd1e002d-2429-4711-82aa-f2bc824b4513.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 929,
                "path": require('../Image/FaceBread19/1a1f012b-1cf3-4b2c-8242-f35a58341fed.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 927,
                "path": require('../Image/FaceBread19/80e0f53e-897d-420d-91b0-b401aee10e36.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }]
        }, {
            "id": 20,
            "name": "B娘2",
            "ATK": 60,
            "isNew": false,
            "isFighting": false,
            "items": [{
                "id": 1317,
                "path": require('../Image/FaceBread20/e5b14c69-6148-4ff1-90da-37dc9c823e23.jpg'),
                "tags": ["B娘", "惊呆", "静态图", "卡通"]
            }, {
                "id": 1315,
                "path": require('../Image/FaceBread20/4521e610-fb92-4a6b-acd0-9913dea70d58.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1316,
                "path": require('../Image/FaceBread20/5046bdb9-80e3-40cc-8f2c-900c4df59aaf.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1314,
                "path": require('../Image/FaceBread20/e3f27cef-a60e-4eaf-84cc-c63e25f35b33.jpg'),
                "tags": ["B娘", "静态图", "卡通", "睡不着"]
            }, {
                "id": 1313,
                "path": require('../Image/FaceBread20/8a765492-1c83-49f8-8109-1d92470fd746.jpg'),
                "tags": ["B娘", "动物", "静态图", "卡通"]
            }, {
                "id": 1312,
                "path": require('../Image/FaceBread20/c2e0ad69-f330-40aa-ae75-6613b8b6489d.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1311,
                "path": require('../Image/FaceBread20/a15f5c14-3f0b-408c-9402-eb1829f50f44.jpg'),
                "tags": ["B娘", "静态图", "卡通", "困"]
            }, {
                "id": 1310,
                "path": require('../Image/FaceBread20/18723042-420c-4424-904b-aa15182dd11a.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1309,
                "path": require('../Image/FaceBread20/5eb964c2-ad37-4d74-9f9d-6252db2f1c1e.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1308,
                "path": require('../Image/FaceBread20/dc053fe0-5d95-44f5-bf4f-4418f23d93d4.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1307,
                "path": require('../Image/FaceBread20/be3fe4c1-b607-4f20-8f64-38cd4b6d5656.jpg'),
                "tags": ["B娘", "害怕", "静态图", "卡通"]
            }, {
                "id": 1306,
                "path": require('../Image/FaceBread20/05ad6fcb-c19a-47eb-95b2-2937b262917e.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1305,
                "path": require('../Image/FaceBread20/778ea4f2-6035-480e-9e4a-ea2de4f7f0ae.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1304,
                "path": require('../Image/FaceBread20/10949fda-dfb5-450c-9b90-894e51eb81da.jpg'),
                "tags": ["B娘", "静态图", "卡通", "可怜"]
            }, {
                "id": 1303,
                "path": require('../Image/FaceBread20/874e43b3-14c7-42ef-b9b9-c8495e452113.jpg'),
                "tags": ["B娘", "静态图", "卡通", "石化"]
            }, {
                "id": 1302,
                "path": require('../Image/FaceBread20/707efffd-7e38-40cb-8e55-0d0acb683650.jpg'),
                "tags": ["B娘", "丑", "静态图", "卡通"]
            }, {
                "id": 1301,
                "path": require('../Image/FaceBread20/089b97b6-c5dd-46cb-83a3-ded7f415cfcb.jpg'),
                "tags": ["B娘", "静态图", "卡通", "吐血"]
            }, {
                "id": 1300,
                "path": require('../Image/FaceBread20/8674db49-ca71-42f8-a4cc-807eaea9128b.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1299,
                "path": require('../Image/FaceBread20/1046eca3-9e60-45b0-8750-e3aefe1dfad2.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1298,
                "path": require('../Image/FaceBread20/e932c3ec-d13d-4615-a653-3134086e31e7.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1297,
                "path": require('../Image/FaceBread20/78b5d1a1-a632-49db-a9ba-a4c6cfe11050.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1296,
                "path": require('../Image/FaceBread20/d587e955-9575-4915-b72d-05be435a17b4.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1295,
                "path": require('../Image/FaceBread20/66589b5e-dde0-4a67-8939-f264e3358632.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1294,
                "path": require('../Image/FaceBread20/c996aff0-7e08-48b7-871e-8b76feb9cb96.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1293,
                "path": require('../Image/FaceBread20/ca88c8e1-f04c-44de-bb3b-5f9a18981313.jpg'),
                "tags": ["B娘", "静态图", "卡通", "怒"]
            }, {
                "id": 1292,
                "path": require('../Image/FaceBread20/84d63c76-e77b-40d7-b4a4-50e6c9479cd0.jpg'),
                "tags": ["B娘", "静态图", "卡通", "疑问"]
            }, {
                "id": 1291,
                "path": require('../Image/FaceBread20/250e7195-4660-44e5-819f-454c30571a61.jpg'),
                "tags": ["B娘", "静态图", "卡通", "懵"]
            }, {
                "id": 1290,
                "path": require('../Image/FaceBread20/a78ddd4c-0fb8-48c7-8182-e3209267e536.jpg'),
                "tags": ["B娘", "静态图", "卡通", "无聊"]
            }, {
                "id": 1289,
                "path": require('../Image/FaceBread20/e5768ed4-40c4-421e-ba8d-3829412e68c4.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1288,
                "path": require('../Image/FaceBread20/7bbeb205-c858-4092-aa7d-1cb3525b369e.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1287,
                "path": require('../Image/FaceBread20/ee2a3bba-4292-4953-b78a-fbda7ee05434.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1286,
                "path": require('../Image/FaceBread20/cde6ff9c-8c10-439f-a7c2-7a355c842585.jpg'),
                "tags": ["B娘", "静态图", "卡通", "可怜"]
            }, {
                "id": 1285,
                "path": require('../Image/FaceBread20/f0547093-08db-4e24-a0e1-b9f2dd8f67e9.jpg'),
                "tags": ["B娘", "静态图", "卡通", "帅哥"]
            }, {
                "id": 1284,
                "path": require('../Image/FaceBread20/123aad49-a3e9-4b1f-ba37-0203f2f233f7.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1283,
                "path": require('../Image/FaceBread20/4bc99424-aed3-43bc-918c-41ca370e4e04.jpg'),
                "tags": ["B娘", "静态图", "卡通", "装逼"]
            }, {
                "id": 1282,
                "path": require('../Image/FaceBread20/d2d02e31-3550-4693-9c5b-a7107ca9d17f.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1281,
                "path": require('../Image/FaceBread20/069109bd-e468-401f-9b2a-4e2a8cd385e6.jpg'),
                "tags": ["B娘", "奋斗", "静态图", "卡通"]
            }, {
                "id": 1280,
                "path": require('../Image/FaceBread20/660526b2-0935-4750-9dea-1be7cc15b389.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }, {
                "id": 1279,
                "path": require('../Image/FaceBread20/e2fcab65-55d2-4398-8000-f562646b801f.jpg'),
                "tags": ["B娘", "奋斗", "静态图", "卡通"]
            }, {
                "id": 1278,
                "path": require('../Image/FaceBread20/3486295f-7b12-4980-8875-a1d03817e734.jpg'),
                "tags": ["B娘", "静态图", "卡通"]
            }]
        }, {
            "id": 21,
            "name": "阿狸",
            "ATK": 75,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1116,
                "path": require('../Image/FaceBread21/f78cb007-36c6-4df7-a0c2-b60818737674.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1114,
                "path": require('../Image/FaceBread21/100c3ee0-a2ab-49d8-a198-32e599acd789.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1115,
                "path": require('../Image/FaceBread21/0823d50d-4c09-4405-8ef1-dc1701c59b32.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1113,
                "path": require('../Image/FaceBread21/f23db4d1-a242-4e59-9015-9c8265ae76c4.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1112,
                "path": require('../Image/FaceBread21/0b088e2c-b948-4cb2-a08e-5d131b94e8dc.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1111,
                "path": require('../Image/FaceBread21/fdd55f4f-e031-4f24-830f-cdbbd1d6eff6.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1110,
                "path": require('../Image/FaceBread21/e8e5ff37-2fbf-4abe-88d4-538d0ce0cddb.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1109,
                "path": require('../Image/FaceBread21/07cb22f2-96ca-44cc-a858-d8a6845d5cb9.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1107,
                "path": require('../Image/FaceBread21/cd1f756f-2c65-4252-8aec-bebb922e216e.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1108,
                "path": require('../Image/FaceBread21/707b3745-5009-44d1-b687-3e3c026dc38e.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1106,
                "path": require('../Image/FaceBread21/12387866-6642-445a-83ed-9437aa66b038.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1105,
                "path": require('../Image/FaceBread21/332e347f-d388-4c6c-80c9-056de5460c00.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1103,
                "path": require('../Image/FaceBread21/bc243f39-3cf5-449a-a690-6865e0625941.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1104,
                "path": require('../Image/FaceBread21/f23f4fc2-7218-451b-98da-23482086f0b8.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1102,
                "path": require('../Image/FaceBread21/30cf32fb-f545-433f-a812-258470b5767a.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1101,
                "path": require('../Image/FaceBread21/57b7dc21-3fdf-4aeb-9b54-6127fb254664.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1100,
                "path": require('../Image/FaceBread21/587c983b-1cbf-434e-8e57-e290b017f43b.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1099,
                "path": require('../Image/FaceBread21/172d7f79-3b52-42a5-889a-511bed51f241.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1098,
                "path": require('../Image/FaceBread21/8ef50d15-4254-47cc-98f2-af3ba5d9fdb7.gif'),
                "tags": ["GIF动图", "卡通"]
            }, {
                "id": 1097,
                "path": require('../Image/FaceBread21/ca4f2f41-0a36-4174-94e7-f4874e12016c.gif'),
                "tags": ["GIF动图", "卡通"]
            }]
        }, {
            "id": 22,
            "name": "还珠格格",
            "ATK": 60,
            "isNew": false,
            "isFighting": true,
            "items": [{
                "id": 1194,
                "path": require('../Image/FaceBread22/7fbd611f-be1d-4d2d-9fc1-53b14d7db4d5.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1193,
                "path": require('../Image/FaceBread22/079b7601-5ff0-4242-84c5-3dc35f23110c.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1192,
                "path": require('../Image/FaceBread22/9b55eae8-8a06-4286-89d0-67db33a39b02.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1191,
                "path": require('../Image/FaceBread22/866cf205-9c2a-4c23-ac6b-4f7056186338.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1190,
                "path": require('../Image/FaceBread22/f76e446f-d141-4237-9f63-6ae3cd0328be.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1189,
                "path": require('../Image/FaceBread22/1945c53b-5773-4a93-85da-f60621386ebb.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1188,
                "path": require('../Image/FaceBread22/1e8e09d0-426b-40ef-9835-9d90f56b8e7f.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1187,
                "path": require('../Image/FaceBread22/549682f4-9bfb-4975-9b1f-e32ea98bf8c2.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1186,
                "path": require('../Image/FaceBread22/d87ca0d1-0b5a-46e3-9fd1-1d7c27579587.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1184,
                "path": require('../Image/FaceBread22/2a5e3d0f-a49f-46ff-bbf4-9b842994a342.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1185,
                "path": require('../Image/FaceBread22/b182fd9f-01ea-4f15-aacf-9b98857835cd.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1183,
                "path": require('../Image/FaceBread22/993a2d0e-06b0-4dfa-9133-1cf8f73deb66.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1181,
                "path": require('../Image/FaceBread22/c11faf1a-7c40-433b-82fa-27bb692f0928.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1182,
                "path": require('../Image/FaceBread22/37273722-156c-4fab-9734-823e0a5656ec.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1179,
                "path": require('../Image/FaceBread22/1088e0f8-b72d-4b94-ad9a-e449d04bb994.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1180,
                "path": require('../Image/FaceBread22/05f26b63-5535-4e44-a874-ae32808516a4.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1178,
                "path": require('../Image/FaceBread22/5130c0b9-8750-4f9e-8eb6-c215a53b8b66.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1176,
                "path": require('../Image/FaceBread22/6a91b525-5fa4-4910-bc85-b532c4e71587.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1177,
                "path": require('../Image/FaceBread22/236dd4be-97fe-4f0d-b94b-89c6edde9420.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1175,
                "path": require('../Image/FaceBread22/b3b0fe93-edc0-444b-9c75-0017ebc91583.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1174,
                "path": require('../Image/FaceBread22/4ad78b1d-000a-4f1e-9d8c-e9befc9442f2.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1173,
                "path": require('../Image/FaceBread22/22032055-ec95-49bd-85fc-840e3fddeb6b.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1172,
                "path": require('../Image/FaceBread22/312783ba-427b-4b91-a6cd-f86c83956479.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1171,
                "path": require('../Image/FaceBread22/0e998b29-5787-4acf-9a9c-85947db0ec10.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1170,
                "path": require('../Image/FaceBread22/4fb4d428-d3ea-499f-959d-10949a442cf1.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1168,
                "path": require('../Image/FaceBread22/e9a56b91-b4e5-47d9-a28e-c52f609cecb8.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1169,
                "path": require('../Image/FaceBread22/505b89d7-874b-4a9c-8bcf-fc11f59db5d8.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1167,
                "path": require('../Image/FaceBread22/db22712c-c25c-46c7-95f1-4c06b0b8d72e.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1166,
                "path": require('../Image/FaceBread22/c7f5078f-1da3-46ea-8963-43490d56780b.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1165,
                "path": require('../Image/FaceBread22/4cd94a54-a234-4d6a-b91c-d0c776a43ef3.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1164,
                "path": require('../Image/FaceBread22/03de0a52-c893-486c-aa09-c12ea7af4503.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1163,
                "path": require('../Image/FaceBread22/78626d7a-ff27-4979-ad6b-42f385886033.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1162,
                "path": require('../Image/FaceBread22/957a2ebf-29c8-41b2-a1fc-f49bd2f38710.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1161,
                "path": require('../Image/FaceBread22/75ed0b91-5f17-490f-9551-d05cbfd459af.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1160,
                "path": require('../Image/FaceBread22/3f3177f1-b6f5-4d35-913d-d48d939dc424.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1159,
                "path": require('../Image/FaceBread22/059ef987-903b-4c90-9b71-c1f43d7b6f15.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1158,
                "path": require('../Image/FaceBread22/2c9d0592-f068-497a-afae-26b0b5368f40.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1157,
                "path": require('../Image/FaceBread22/9cacc28f-6eb5-4471-8959-2b442df4aecd.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1156,
                "path": require('../Image/FaceBread22/10b7b3d3-7759-41ad-821b-1e96cb72296a.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1155,
                "path": require('../Image/FaceBread22/d83a6b6a-da4f-43e1-8c41-2adcbb968c14.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1154,
                "path": require('../Image/FaceBread22/8d7f57ce-ed2f-4801-af68-5f64c9e9b2b6.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1153,
                "path": require('../Image/FaceBread22/177874b9-51c2-4041-9e91-bb1ae8d36056.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1152,
                "path": require('../Image/FaceBread22/5251ea28-1fa9-4e60-a606-ef132e9196d2.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1151,
                "path": require('../Image/FaceBread22/07387f71-46ed-495f-a264-a822ee45afb9.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1150,
                "path": require('../Image/FaceBread22/f4715985-1a80-49af-83bf-8f9d8ef87a24.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1149,
                "path": require('../Image/FaceBread22/ad265546-9486-4a73-a609-2ccba5439cf9.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }]
        }, {
            "id": 23,
            "name": "cos装扮",
            "ATK": 76,
            "isNew": false,
            "isFighting": false,
            "items": [{
                "id": 1369,
                "path": require('../Image/FaceBread23/52fa442b-9bf6-4da7-8a7e-ffadbc77c048.jpg'),
                "tags": ["恶搞", "静态图", "卡通"]
            }, {
                "id": 1368,
                "path": require('../Image/FaceBread23/6cfc23b9-2f3a-4a9a-936a-fbf7ca972881.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1366,
                "path": require('../Image/FaceBread23/18aca324-444a-4a06-83c3-5db7b67efbad.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1367,
                "path": require('../Image/FaceBread23/391363b1-7a8c-4618-b674-1013d9d0dcb6.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 1365,
                "path": require('../Image/FaceBread23/495cefff-3648-4dbf-b4c6-2d512d02a32c.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1364,
                "path": require('../Image/FaceBread23/068e09e8-9e65-4524-86c4-315d01e817a9.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1363,
                "path": require('../Image/FaceBread23/29371abe-6012-49f7-adda-e96bf992b7e4.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1362,
                "path": require('../Image/FaceBread23/fb6726a8-6794-45e2-929a-d26612d3060e.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1360,
                "path": require('../Image/FaceBread23/4796dafd-b467-4d6e-a515-ebf7a4fc1033.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1361,
                "path": require('../Image/FaceBread23/5eee4fe4-830a-4c6e-8af9-64bdb0bd489b.gif'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1359,
                "path": require('../Image/FaceBread23/22d35910-02b1-4de8-988d-a53972db4fcf.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1358,
                "path": require('../Image/FaceBread23/9fed0b91-05dd-46d2-a340-9fb83f2eac88.jpg'),
                "tags": ["恶搞", "静态图", "卡通"]
            }, {
                "id": 1357,
                "path": require('../Image/FaceBread23/429a4afb-8d9d-4129-a22e-245f16b29915.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1356,
                "path": require('../Image/FaceBread23/ec1d17ab-86e0-46fc-ad8c-5574907736fa.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 1355,
                "path": require('../Image/FaceBread23/3d25187c-a0dc-4c9d-b102-10ff54bf3a0d.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }, {
                "id": 1354,
                "path": require('../Image/FaceBread23/9cc4b4de-a250-4c58-bf86-d9115aca669d.gif'),
                "tags": ["动态图", "人物"]
            }, {
                "id": 1353,
                "path": require('../Image/FaceBread23/89353b07-7089-42e8-b339-f2cab0a66170.jpg'),
                "tags": ["静态图", "人物"]
            }, {
                "id": 1352,
                "path": require('../Image/FaceBread23/4eca6f6d-9a4a-4d88-b8c0-73cdb75bc31a.jpg'),
                "tags": ["恶搞", "静态图", "卡通"]
            }, {
                "id": 1351,
                "path": require('../Image/FaceBread23/5ecfea91-7d4a-44e1-bd59-fd183270d437.png'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1350,
                "path": require('../Image/FaceBread23/527af12d-6ece-4fed-83ac-5eb822a98639.png'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1349,
                "path": require('../Image/FaceBread23/0f451046-50e4-45b7-848b-8e815f3fda36.jpg'),
                "tags": ["静态图", "卡通", "神奇"]
            }, {
                "id": 1348,
                "path": require('../Image/FaceBread23/240f87b4-7fcc-47e1-9e6f-04fab6282832.gif'),
                "tags": ["动态图", "卡通"]
            }, {
                "id": 1347,
                "path": require('../Image/FaceBread23/50e2ed84-5e69-4733-a781-5b9ff471f4b3.gif'),
                "tags": ["动态图", "卡通"]
            }, {
                "id": 1346,
                "path": require('../Image/FaceBread23/f5f2df06-6e8c-4e1e-a1ed-55850cb05a24.jpg'),
                "tags": ["静态图", "卡通", "装逼"]
            }, {
                "id": 1345,
                "path": require('../Image/FaceBread23/7f1abf32-6541-43a6-848e-ca07536c4698.jpg'),
                "tags": ["恶搞", "静态图", "卡通"]
            }, {
                "id": 1344,
                "path": require('../Image/FaceBread23/9bf6c0bd-3a46-41b2-b965-34c5a4b98413.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1343,
                "path": require('../Image/FaceBread23/b14808f2-f2b8-4668-a02b-188cc7700062.jpg'),
                "tags": ["静态图", "卡通"]
            }, {
                "id": 1342,
                "path": require('../Image/FaceBread23/8970b6d2-689c-4679-9df4-195a6a0f7cc9.jpg'),
                "tags": ["静态图", "人物"]
            }, {
                "id": 1341,
                "path": require('../Image/FaceBread23/0c518203-2911-41a4-8edc-732ee08e8fb8.gif'),
                "tags": ["动态图", "恶搞", "卡通"]
            }]
        }, {
            "id": 24,
            "name": "动图小王子",
            "ATK": 93,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1415,
                "path": require('../Image/FaceBread24/96844947-3a21-4820-b7a6-bd7df3e0b5c8.gif'),
                "tags": ["gif动图", "卡通", "谦虚"]
            }, {
                "id": 1414,
                "path": require('../Image/FaceBread24/09756a48-3cb2-4313-af5a-8aac924b0e23.gif'),
                "tags": ["gif动图", "打人", "卡通", "装逼"]
            }, {
                "id": 1413,
                "path": require('../Image/FaceBread24/407003fb-5e68-4c81-9f25-8ce5a674f117.gif'),
                "tags": ["gif动图", "嘚瑟", "卡通"]
            }, {
                "id": 1412,
                "path": require('../Image/FaceBread24/c071b428-f0f1-44af-882f-a6bfe9fe572a.gif'),
                "tags": ["gif动图", "卡通", "伤心"]
            }, {
                "id": 1411,
                "path": require('../Image/FaceBread24/e124c5a5-adfb-44c6-b911-19da39e89b02.gif'),
                "tags": ["gif动图", "卡通"]
            }, {
                "id": 1410,
                "path": require('../Image/FaceBread24/ae4778cc-96ac-470b-a89f-a191f2ab6719.gif'),
                "tags": ["gif动图", "恶心", "卡通"]
            }, {
                "id": 1409,
                "path": require('../Image/FaceBread24/19d74bc6-babd-4b72-85af-ed9085b54368.gif'),
                "tags": ["gif动图", "逗比", "卡通"]
            }, {
                "id": 1407,
                "path": require('../Image/FaceBread24/88a41ac6-221a-427f-af1f-9d16594c3443.gif'),
                "tags": ["gif动图", "围观"]
            }, {
                "id": 1408,
                "path": require('../Image/FaceBread24/ddf550d9-890c-49e5-9945-fc15f9f26fc6.gif'),
                "tags": ["gif动图", "人物"]
            }, {
                "id": 1406,
                "path": require('../Image/FaceBread24/a7dc0d3d-9bb6-4963-aef2-1fca5e44697b.gif'),
                "tags": ["gif动图", "高兴", "卡通"]
            }, {
                "id": 1404,
                "path": require('../Image/FaceBread24/94058a25-2ecc-4161-a1e3-e98b9df47e57.gif'),
                "tags": ["gif动图", "鄙视", "卡通"]
            }, {
                "id": 1405,
                "path": require('../Image/FaceBread24/087e8381-c055-4981-a9b3-f8b4f717a6e4.gif'),
                "tags": ["gif动图", "嘚瑟", "卡通"]
            }, {
                "id": 1403,
                "path": require('../Image/FaceBread24/e264897b-89ea-4029-8fb0-536842365290.gif'),
                "tags": ["gif动图", "逗比", "卡通"]
            }, {
                "id": 1402,
                "path": require('../Image/FaceBread24/aa7262fb-8f94-4822-a7a4-6806b1d8e7f9.gif'),
                "tags": ["gif动图", "卡通"]
            }, {
                "id": 1401,
                "path": require('../Image/FaceBread24/62e8a331-30c1-46a9-827b-a8264a019a78.gif'),
                "tags": ["gif动图", "卡通"]
            }, {
                "id": 1400,
                "path": require('../Image/FaceBread24/ba21978b-b846-45d6-8d46-f3c13c10cc32.gif'),
                "tags": ["gif动图", "卡通"]
            }, {
                "id": 1399,
                "path": require('../Image/FaceBread24/dcc440e1-f5ba-460f-8c3c-65b631c3e92f.gif'),
                "tags": ["gif动图", "鼓掌", "卡通"]
            }, {
                "id": 1397,
                "path": require('../Image/FaceBread24/befd7f8e-027d-428a-9478-55d6544035d2.gif'),
                "tags": ["gif动图", "装逼"]
            }, {
                "id": 1398,
                "path": require('../Image/FaceBread24/52b0fe25-272a-4e67-ad20-2c42c474273b.gif'),
                "tags": ["gif动图", "卡通"]
            }, {
                "id": 1396,
                "path": require('../Image/FaceBread24/733c2beb-d016-4aca-8621-d20787a45154.gif'),
                "tags": ["gif动图", "卡通"]
            }, {
                "id": 1394,
                "path": require('../Image/FaceBread24/924f609f-dc57-4008-8e63-459695f200b3.gif'),
                "tags": ["gif动图", "嘚瑟", "卡通"]
            }, {
                "id": 1395,
                "path": require('../Image/FaceBread24/c201ab5c-53be-42a9-a3e4-16a8ebb612d0.gif'),
                "tags": ["gif动图", "嘚瑟", "卡通"]
            }, {
                "id": 1393,
                "path": require('../Image/FaceBread24/fdae44d7-c1f0-4827-8b14-de09124fd09a.gif'),
                "tags": ["gif动图", "卡通"]
            }, {
                "id": 1392,
                "path": require('../Image/FaceBread24/40ded5ca-c695-43ac-a6fb-8f040c667b52.gif'),
                "tags": ["gif动图", "卡通"]
            }]
        }, {
            "id": 25,
            "name": "沉默无奈",
            "ATK": 82,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1127,
                "path": require('../Image/FaceBread25/9f42e619-dbc3-4824-91bc-481c922424f5.jpg'),
                "tags": ["静态图", "汪星人"]
            }, {
                "id": 1128,
                "path": require('../Image/FaceBread25/9e28173d-295a-4129-be33-3d3df42a4ab1.jpg'),
                "tags": ["静态图"]
            }, {
                "id": 1126,
                "path": require('../Image/FaceBread25/38086efe-8dad-4020-8554-d17e45d164ce.jpg'),
                "tags": ["静态图"]
            }, {
                "id": 1125,
                "path": require('../Image/FaceBread25/8b108195-8dec-40ab-8459-d669c10fecb0.jpg'),
                "tags": ["静态图", "人物"]
            }, {
                "id": 1123,
                "path": require('../Image/FaceBread25/8ca3a1d7-2942-4f0e-aed9-7720915fe905.jpg'),
                "tags": ["静态图", "人物"]
            }, {
                "id": 1124,
                "path": require('../Image/FaceBread25/5c2e2d29-3934-40e6-a814-050bbf9396f9.jpg'),
                "tags": ["静态图", "人物"]
            }, {
                "id": 1122,
                "path": require('../Image/FaceBread25/9ce26419-c73c-4a18-a5b1-bb720ec5d323.gif'),
                "tags": ["GIF动图", "人物"]
            }, {
                "id": 1121,
                "path": require('../Image/FaceBread25/1455f962-4534-40ae-a0f5-90661a6d1580.gif'),
                "tags": ["GIF动图", "汪星人"]
            }, {
                "id": 1119,
                "path": require('../Image/FaceBread25/a917a0ac-4063-4e44-bc5a-91091c7117e2.jpg'),
                "tags": ["静态图"]
            }, {
                "id": 1120,
                "path": require('../Image/FaceBread25/ffe0d903-2294-4871-a764-a85b89850fa4.gif'),
                "tags": ["GIF动图"]
            }, {
                "id": 1118,
                "path": require('../Image/FaceBread25/4efeac22-dbb6-4ec3-9a54-ea540e7a65dc.jpg'),
                "tags": ["静态图", "人物"]
            }, {
                "id": 1117,
                "path": require('../Image/FaceBread25/8e86d10b-cce9-4dc2-8086-202e8726b1d9.gif'),
                "tags": ["GIF动图"]
            }]
        }, {
            "id": 26,
            "name": "抽烟藐视",
            "ATK": 80,
            "isNew": false,
            "isFighting": true,
            "items": [{
                "id": 1145,
                "path": require('../Image/FaceBread26/54a793d4-eaad-4f77-acaa-572c70c549ab.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1146,
                "path": require('../Image/FaceBread26/672bbeae-efed-4c52-85f4-74078df94c9f.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1147,
                "path": require('../Image/FaceBread26/551f0063-db44-4763-8a61-09a5225baf89.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1148,
                "path": require('../Image/FaceBread26/9270a658-e551-4e84-8845-af46e0e0037b.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1142,
                "path": require('../Image/FaceBread26/fb299c97-5e0f-4cd0-a58c-bf297ac5411a.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1143,
                "path": require('../Image/FaceBread26/cc464a5f-3ada-4190-a08d-ed40d43a77b9.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1144,
                "path": require('../Image/FaceBread26/121581cd-1930-4891-bd33-50720552c65a.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1140,
                "path": require('../Image/FaceBread26/ce37971d-116e-4880-bb9a-5d9a37c032f2.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1141,
                "path": require('../Image/FaceBread26/a5cbac94-5bd6-407d-a607-4ee7e8886467.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1139,
                "path": require('../Image/FaceBread26/1fbe8a16-7f8a-4d83-8f7f-efcbb08460ea.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1135,
                "path": require('../Image/FaceBread26/0a330e17-842e-488f-a04f-acb638ad07a2.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1136,
                "path": require('../Image/FaceBread26/16d9926a-44f3-4dfc-90d3-f2fc7adf1bce.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1137,
                "path": require('../Image/FaceBread26/1a77fd99-b8ef-4536-9b5d-b1c231547a62.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1133,
                "path": require('../Image/FaceBread26/35a86068-38f2-4349-9c42-686cc167844c.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1134,
                "path": require('../Image/FaceBread26/696057b8-3c3f-4693-8bd8-916afc857888.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1130,
                "path": require('../Image/FaceBread26/363ce489-3546-4ee0-b50d-dc308d9a82d1.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1131,
                "path": require('../Image/FaceBread26/c85c746d-487b-4732-9df4-9fc09501fab9.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1132,
                "path": require('../Image/FaceBread26/ae0e1d17-741c-4270-994d-f147331d9f4a.jpg'),
                "tags": ["恶搞", "原创"]
            }, {
                "id": 1129,
                "path": require('../Image/FaceBread26/c9767a42-db38-4ae9-9f15-92fdc425be84.jpg'),
                "tags": ["恶搞", "原创"]
            }]
        }, {
            "id": 27,
            "name": "小幺鸡",
            "ATK": 60,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1222,
                "path": require('../Image/FaceBread27/cc769d1e-8130-4ca7-9052-00c53e18e0e2.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1221,
                "path": require('../Image/FaceBread27/1cb0139b-b6f1-499f-9d3e-2fccc6b70fe7.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1220,
                "path": require('../Image/FaceBread27/d3bfc200-5f7a-4f88-8f22-55f2d365dd9f.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1219,
                "path": require('../Image/FaceBread27/39714a82-0e91-493a-bee8-f500608d4b66.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1218,
                "path": require('../Image/FaceBread27/043241f3-6cf8-4eee-986f-cb869c427e70.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1217,
                "path": require('../Image/FaceBread27/af8626a4-f5ff-4b79-aa11-80b71f4969f0.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1216,
                "path": require('../Image/FaceBread27/8f784e80-2f62-4925-8d71-e0dfa11c1a91.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1215,
                "path": require('../Image/FaceBread27/cc80bd9c-c2cc-4b01-b184-c6d78f4d8798.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1214,
                "path": require('../Image/FaceBread27/9f9e18af-5c16-4079-b275-53a5533df6c7.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1213,
                "path": require('../Image/FaceBread27/d519fc38-3e27-468f-ad00-339c2b27e8dd.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1212,
                "path": require('../Image/FaceBread27/87cdfb6f-20a5-4423-84ea-de8ec534d4a6.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }, {
                "id": 1211,
                "path": require('../Image/FaceBread27/3e0af449-d2ae-4f72-b356-7297b34f5100.jpg'),
                "tags": ["静态图", "卡通", "小幺鸡", "新年"]
            }]
        }, {
            "id": 28,
            "name": "张翰",
            "ATK": 79,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1277,
                "path": require('../Image/FaceBread28/365d948e-af9b-4716-b61c-41b3a16c4f2d.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1276,
                "path": require('../Image/FaceBread28/210251b9-2084-4568-a52d-efcd63a81429.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1275,
                "path": require('../Image/FaceBread28/8d89558f-6ee5-4693-92fb-78a129923389.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1274,
                "path": require('../Image/FaceBread28/a6e0860a-dbe0-4bc6-9e83-62cb8a122305.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1273,
                "path": require('../Image/FaceBread28/f1d29128-b792-45d9-851f-166e39b05391.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1272,
                "path": require('../Image/FaceBread28/779ce555-2d9c-4f43-9b81-07d71fbb78d5.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1271,
                "path": require('../Image/FaceBread28/cfa17b6d-5cde-4117-b877-49493f463a0b.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1270,
                "path": require('../Image/FaceBread28/8851749b-193b-481f-bd29-9f7fe4af7418.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1269,
                "path": require('../Image/FaceBread28/06b9bff8-6760-43ce-a23e-bc5dbd1aaf7e.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1268,
                "path": require('../Image/FaceBread28/2bc936a4-ff7b-4fdd-849c-b640f770248f.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1267,
                "path": require('../Image/FaceBread28/e9824ca0-ef5a-4fc5-a3bf-1db44674097f.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1266,
                "path": require('../Image/FaceBread28/63abc4fd-695e-400b-9ead-ba00ab30d9fc.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1265,
                "path": require('../Image/FaceBread28/a6ac04ab-5e73-435b-9476-e5907ceecc8a.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1264,
                "path": require('../Image/FaceBread28/7d424304-4aaf-478c-ac09-f8f05724adf4.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1263,
                "path": require('../Image/FaceBread28/61dd2924-64e0-48ee-910f-579743768892.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1262,
                "path": require('../Image/FaceBread28/e597b2d1-e261-4b57-b19d-8939d448ff30.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1261,
                "path": require('../Image/FaceBread28/4d34fdd3-8aef-4675-a523-e0b8d981de1e.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1260,
                "path": require('../Image/FaceBread28/0d9e2db1-0231-4d4a-8f68-adf63fc8c0c3.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1259,
                "path": require('../Image/FaceBread28/54b9becb-b33a-4191-bce2-bb8a7365103e.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1258,
                "path": require('../Image/FaceBread28/e7e0e4ae-036f-4648-af46-18561f9aadb0.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1257,
                "path": require('../Image/FaceBread28/6997064b-22ae-455f-b538-214513fa3918.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1256,
                "path": require('../Image/FaceBread28/8b85e9bb-25ca-4474-8df7-a4df0d9d65e9.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1255,
                "path": require('../Image/FaceBread28/6e5b4b4f-bbc2-4dd6-88af-ff7fe28da96f.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1254,
                "path": require('../Image/FaceBread28/1581d64d-0d43-4dd2-8e8e-c23a5e5ae2c6.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1253,
                "path": require('../Image/FaceBread28/2fda21e0-59c2-4560-957c-e459a57f8c16.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1252,
                "path": require('../Image/FaceBread28/127beae6-fcc9-4237-9983-a729b29ed5b7.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1251,
                "path": require('../Image/FaceBread28/6d17863e-bbaf-416c-b8a9-1d8682b53622.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1250,
                "path": require('../Image/FaceBread28/c18df449-9176-45b7-94af-5cfcee7b9273.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1249,
                "path": require('../Image/FaceBread28/6ca5e27f-8b56-4bbe-a6b6-03ef637f7b2f.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }, {
                "id": 1248,
                "path": require('../Image/FaceBread28/21491b0f-eddd-403a-8eba-73c665024f23.gif'),
                "tags": ["GIF动图", "动态图", "人物", "帅哥", "张翰"]
            }]
        }, {
            "id": 29,
            "name": "短发小学生",
            "ATK": 90,
            "isNew": false,
            "isFighting": true,
            "items": [{
                "id": 1340,
                "path": require('../Image/FaceBread29/eba368e6-870c-4bae-8ba9-ba2bafa5c2e6.jpg'),
                "tags": ["逗比", "恶搞", "犯贱", "静态图", "人物"]
            }, {
                "id": 1339,
                "path": require('../Image/FaceBread29/7383158c-bde9-43bd-8885-d12b89b53276.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1338,
                "path": require('../Image/FaceBread29/2e2d12b7-b312-47b7-8a21-37668da9b40a.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1337,
                "path": require('../Image/FaceBread29/f1979ee1-f8e9-4401-8da9-f34a694b773b.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1336,
                "path": require('../Image/FaceBread29/a77bea06-04be-47e9-ad2b-5761601b5e16.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1335,
                "path": require('../Image/FaceBread29/defbae7e-e76d-4bbe-9e7d-3f13da30b05f.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1334,
                "path": require('../Image/FaceBread29/653c8eb6-5fd2-4b08-9bbb-5458107dc119.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1333,
                "path": require('../Image/FaceBread29/0c9a626a-787c-4286-8c38-3ab0df4c7583.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1332,
                "path": require('../Image/FaceBread29/684e4a17-7926-47c9-ba1e-244d10b8a980.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1331,
                "path": require('../Image/FaceBread29/34f94756-6288-49a8-bd1f-493a12bbec42.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1330,
                "path": require('../Image/FaceBread29/9b01cae6-4cc6-4224-bf08-45dde88eb0a8.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1329,
                "path": require('../Image/FaceBread29/b6950c05-1c5a-4951-99d7-8ef3f6e7cabd.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1328,
                "path": require('../Image/FaceBread29/fb88a474-e5b7-4e1d-9158-7f678ee62566.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1327,
                "path": require('../Image/FaceBread29/2db93a6c-05d4-4e5d-b801-fbffac5e94b9.jpg'),
                "tags": ["恶搞", "借钱", "静态图", "人物"]
            }, {
                "id": 1326,
                "path": require('../Image/FaceBread29/36e9b6b5-8c7d-4ec1-acc6-225bbf60e2ec.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1325,
                "path": require('../Image/FaceBread29/8e406fac-23f5-41b3-b61b-2dfdd41998df.jpg'),
                "tags": ["恶搞", "静态图", "良辰", "人物"]
            }, {
                "id": 1324,
                "path": require('../Image/FaceBread29/4880ea9a-c963-4a44-bb83-825c3790d101.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1323,
                "path": require('../Image/FaceBread29/6de0acd3-422b-4d3e-8dd0-96694e27b90e.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1322,
                "path": require('../Image/FaceBread29/375f1305-3667-4275-93da-a309ce424143.jpg'),
                "tags": ["恶搞", "静态图", "人物", "装逼"]
            }, {
                "id": 1321,
                "path": require('../Image/FaceBread29/6502aae0-0362-418b-9309-4b7e3620980c.jpg'),
                "tags": ["恶搞", "静态图", "人物", "装逼"]
            }, {
                "id": 1320,
                "path": require('../Image/FaceBread29/103f582b-5a67-4356-bde2-5002072fb716.jpg'),
                "tags": ["恶搞", "犯贱", "静态图", "人物"]
            }, {
                "id": 1319,
                "path": require('../Image/FaceBread29/79fd1e8e-941d-49ab-9047-de28db2b993f.jpg'),
                "tags": ["恶搞", "静态图", "人物"]
            }, {
                "id": 1318,
                "path": require('../Image/FaceBread29/badd1e14-e209-4be8-87e7-2094829a5361.jpg'),
                "tags": ["恶搞", "犯贱", "静态图", "人物"]
            }]
        }, {
            "id": 30,
            "name": "对打系列",
            "ATK": 93,
            "isNew": false,
            "isFighting": true,
            "items": [{
                "id": 1391,
                "path": require('../Image/FaceBread30/90ddc11f-d47f-4b80-bc83-614fbc200600.jpg'),
                "tags": ["静态图", "人物", "装逼"]
            }, {
                "id": 1390,
                "path": require('../Image/FaceBread30/eac581e9-335d-46ab-b5b4-c9f27861f758.jpg'),
                "tags": ["静态图", "人物", "装逼"]
            }, {
                "id": 1389,
                "path": require('../Image/FaceBread30/01e27ab7-598e-46b3-bca2-58280d90e886.jpg'),
                "tags": ["打人", "静态图", "人物"]
            }, {
                "id": 1388,
                "path": require('../Image/FaceBread30/91f60d24-37e2-4f1d-9c74-85c536344576.jpg'),
                "tags": ["静态图", "人物", "装逼"]
            }, {
                "id": 1387,
                "path": require('../Image/FaceBread30/9590b327-9e34-4a63-841a-fc3148df807d.jpg'),
                "tags": ["打人", "静态图", "人物"]
            }, {
                "id": 1385,
                "path": require('../Image/FaceBread30/120afd01-603b-4d9f-8fad-32fe51e143a2.jpg'),
                "tags": ["静态图", "人物", "装逼"]
            }, {
                "id": 1384,
                "path": require('../Image/FaceBread30/71a92e9f-dcf1-4ca7-b211-51b42cd9bfb7.jpg'),
                "tags": ["静态图", "人物", "装逼"]
            }, {
                "id": 1383,
                "path": require('../Image/FaceBread30/878e0274-c0b9-43bd-b9e2-20c9b6c3394e.jpg'),
                "tags": ["打人", "静态图", "人物"]
            }, {
                "id": 1382,
                "path": require('../Image/FaceBread30/4a7ae9f6-1551-4d75-91e5-708ce9e1de22.jpg'),
                "tags": ["打人", "犯贱", "静态图", "人物"]
            }, {
                "id": 1381,
                "path": require('../Image/FaceBread30/99e41368-fd3d-41ef-afa4-ea4b2874fc75.gif'),
                "tags": ["嘲讽", "打人", "静态图", "人物"]
            }, {
                "id": 1380,
                "path": require('../Image/FaceBread30/5fc93dc9-a4d9-459d-925e-87558cdba01e.jpg'),
                "tags": ["打人", "静态图", "人物", "装逼"]
            }, {
                "id": 1379,
                "path": require('../Image/FaceBread30/d2e1feee-ba16-4ecf-86ec-131fddf2dd95.gif'),
                "tags": ["打人", "静态图", "人物"]
            }, {
                "id": 1378,
                "path": require('../Image/FaceBread30/0f1e8395-ce1f-4ff4-b94b-52cd7daf4e2c.jpg'),
                "tags": ["傲娇", "静态图", "人物", "邪恶"]
            }, {
                "id": 1377,
                "path": require('../Image/FaceBread30/eb4b1acf-ac3e-4f76-9552-911784605aac.jpg'),
                "tags": ["静态图", "人物", "邪恶"]
            }, {
                "id": 1376,
                "path": require('../Image/FaceBread30/988c27fd-11fe-4f42-abc9-5b86d489548b.jpg'),
                "tags": ["犯贱", "静态图", "人物"]
            }, {
                "id": 1374,
                "path": require('../Image/FaceBread30/28923cfb-29ec-4f8e-9c2d-3a72f700dd06.jpg'),
                "tags": ["犯贱", "静态图", "人物"]
            }, {
                "id": 1373,
                "path": require('../Image/FaceBread30/aa7340c9-e613-4662-adab-b32b36f37877.jpg'),
                "tags": ["打人", "静态图", "可爱", "卖萌", "人物"]
            }, {
                "id": 1372,
                "path": require('../Image/FaceBread30/315d2aff-c15a-43ad-9ddd-d83fb3c29582.jpg'),
                "tags": ["嘲讽", "静态图", "可爱", "人物"]
            }, {
                "id": 1371,
                "path": require('../Image/FaceBread30/fc35abf3-eefd-4825-829c-34fa630d25d3.jpg'),
                "tags": ["静态图", "人物", "装逼"]
            }, {
                "id": 1370,
                "path": require('../Image/FaceBread30/af02cfa2-91b2-45ae-a5eb-5bfef095f212.jpg'),
                "tags": ["不服", "静态图", "人物"]
            }]
        }, {
            "id": 33,
            "name": "金馆长",
            "ATK": 60,
            "isNew": false,
            "isFighting": false,
            "items": [{
                "id": 1003,
                "path": require('../Image/FaceBread33/dce9f7c6-245c-4571-b926-9b7eeab035f7.jpg'),
                "tags": ["动图小王子"]
            }, {
                "id": 1000,
                "path": require('../Image/FaceBread33/928025dd-8247-4faf-9022-028623b0d97c.jpg'),
                "tags": ["动图小王子"]
            }, {
                "id": 1001,
                "path": require('../Image/FaceBread33/6bd5c716-a5c4-400b-b629-89c4fbbede76.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 1002,
                "path": require('../Image/FaceBread33/20eff01d-32cf-4886-8da4-c771545ad585.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 997,
                "path": require('../Image/FaceBread33/e4376c76-7cc7-406a-b6f8-06d61f19a32d.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 998,
                "path": require('../Image/FaceBread33/fc238c69-71d7-4c7a-86b1-67ea726524e1.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 999,
                "path": require('../Image/FaceBread33/b6aa4bf2-8b0c-4bcb-a9f4-af4ca4df015d.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 995,
                "path": require('../Image/FaceBread33/240dbf69-017d-40d7-a0f3-bdd5a3e5750d.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 996,
                "path": require('../Image/FaceBread33/265cb618-1f3a-4403-bff2-6189e61c8851.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 991,
                "path": require('../Image/FaceBread33/25ecc78e-dff4-4e51-9bbf-c6b50f717c1a.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 992,
                "path": require('../Image/FaceBread33/82ab23f1-77fe-4f22-947a-fb9133e5c26f.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 993,
                "path": require('../Image/FaceBread33/51100840-c478-43cb-95f4-93f89e24398a.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 994,
                "path": require('../Image/FaceBread33/5a1c9eaf-7432-4a35-9438-5f2d46cf9fd5.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 988,
                "path": require('../Image/FaceBread33/1b0267e6-27f0-40ed-9750-7fa1749dfbdc.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 989,
                "path": require('../Image/FaceBread33/c74fdd7c-6155-4d46-885d-343da51cc680.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 990,
                "path": require('../Image/FaceBread33/aa8312d1-0725-45c2-afc4-1a5c61205727.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 986,
                "path": require('../Image/FaceBread33/48004da2-27d9-4653-8b19-a7619afa400c.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 987,
                "path": require('../Image/FaceBread33/73a2e5a4-ed16-4450-9ed8-3bd82d6b4391.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 983,
                "path": require('../Image/FaceBread33/793db0de-76fb-4675-9081-1d4d07048d50.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 984,
                "path": require('../Image/FaceBread33/6e3cd2a1-142c-477e-a0e8-82b5fc1ca903.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 985,
                "path": require('../Image/FaceBread33/c4861566-378c-44d7-a353-0d36c4959421.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 981,
                "path": require('../Image/FaceBread33/b4d84bdf-e905-45ac-839d-173c23c73aac.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 982,
                "path": require('../Image/FaceBread33/dc02c244-d21b-43f3-bcb3-508c133cdfb5.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 979,
                "path": require('../Image/FaceBread33/7bc27285-61ce-45b4-b231-e7625c018285.gif'),
                "tags": ["动图小王子"]
            }, {
                "id": 980,
                "path": require('../Image/FaceBread33/1cdc4fcc-7de4-407f-885d-cab930a33c7a.gif'),
                "tags": ["动图小王子"]
            }]
        }, {
            "id": 34,
            "name": "剪刀手",
            "ATK": 65,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1042,
                "path": require('../Image/FaceBread34/46865e4a-2f3f-4f51-a16b-82d52f8f8cc7.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1039,
                "path": require('../Image/FaceBread34/9525fa6b-4a1b-46b0-8b4c-3c6482e34aee.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1040,
                "path": require('../Image/FaceBread34/1bc27097-ec3c-4136-beca-dc94023e19ee.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1041,
                "path": require('../Image/FaceBread34/a21511d8-5e91-42bb-9b14-c62d8145eaca.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1036,
                "path": require('../Image/FaceBread34/fad73a93-2c40-4159-88e6-d480070a7fe1.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1037,
                "path": require('../Image/FaceBread34/33066f86-c764-492b-af03-f120f330dcc5.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1038,
                "path": require('../Image/FaceBread34/a110e65c-cb79-4c0f-8cf2-ecf7e192910a.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1032,
                "path": require('../Image/FaceBread34/d203c6a5-5b2b-4bcf-8c19-492fa66c3908.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1033,
                "path": require('../Image/FaceBread34/d36f45fc-0522-4618-af50-f72c3202eff6.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1034,
                "path": require('../Image/FaceBread34/90e1e91e-4076-4251-bcd4-9211e8fedb44.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1035,
                "path": require('../Image/FaceBread34/e9dac2ab-ad78-45b9-a56c-5903074556b8.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1030,
                "path": require('../Image/FaceBread34/4f6003e5-a1eb-4e54-a33c-4f7234f3c428.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1031,
                "path": require('../Image/FaceBread34/b61e25bd-5659-4e5f-9d75-456989c7de9f.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1027,
                "path": require('../Image/FaceBread34/697eaf57-fc04-4481-9291-48aefdcf0c08.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1028,
                "path": require('../Image/FaceBread34/08571b78-3fd9-41ce-81c2-5f20ea6434a3.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1029,
                "path": require('../Image/FaceBread34/076b43cd-03f4-4df5-bbae-3425d2fbd00d.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1024,
                "path": require('../Image/FaceBread34/5615fff8-4942-4c33-8851-d20d7aad714e.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1025,
                "path": require('../Image/FaceBread34/fe813bd9-471b-4cad-8166-79605e086ba6.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1026,
                "path": require('../Image/FaceBread34/66c2b5cd-b706-4bb3-8890-89862d86f41b.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1021,
                "path": require('../Image/FaceBread34/748c2be5-165f-424a-9c56-356c24707c51.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1022,
                "path": require('../Image/FaceBread34/cabec62b-eec9-4a9b-a53e-2546d78ee8b6.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1023,
                "path": require('../Image/FaceBread34/95bcc23e-c025-44d8-8811-3e46add2be13.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1019,
                "path": require('../Image/FaceBread34/3300213c-ca48-4dc9-8e1b-54198313de7d.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1020,
                "path": require('../Image/FaceBread34/15efac25-7f20-49d2-80be-7ba6dafe81a4.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1015,
                "path": require('../Image/FaceBread34/bbd007c7-ed2f-463d-83a8-6a19c43b4fbb.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1016,
                "path": require('../Image/FaceBread34/d6e33b0f-2fac-4a6f-a2a2-1de4fb00c2dc.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1017,
                "path": require('../Image/FaceBread34/b7daec7f-9210-43bf-ae8e-ffb9fc7c6e6c.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1018,
                "path": require('../Image/FaceBread34/a95d1047-6779-4259-a74e-fe5be0c3e01a.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1012,
                "path": require('../Image/FaceBread34/f4af612f-f6a7-44e0-9109-b7a2bd97080f.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1013,
                "path": require('../Image/FaceBread34/b12c7463-f116-4913-a5d0-134a226bee10.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1014,
                "path": require('../Image/FaceBread34/cff5beb4-dbf4-49cb-9142-76e43c0acaf4.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1009,
                "path": require('../Image/FaceBread34/e25447a2-756e-4d77-a771-bb74fd37c772.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1010,
                "path": require('../Image/FaceBread34/aef51257-0b9f-4635-9e45-812046761a06.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1011,
                "path": require('../Image/FaceBread34/0a46e07d-8d18-46cc-af33-f2e7890da265.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1007,
                "path": require('../Image/FaceBread34/dec02c61-d389-435e-a803-e4ef5eced913.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1008,
                "path": require('../Image/FaceBread34/9e59672b-3f15-4a9b-9a17-78f58439c696.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1004,
                "path": require('../Image/FaceBread34/d0323d0b-f9ad-421e-ad9d-b5176110b87e.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1005,
                "path": require('../Image/FaceBread34/1c472c34-2f30-426c-a897-c7d689cfddd9.jpg'),
                "tags": ["剪刀手"]
            }, {
                "id": 1006,
                "path": require('../Image/FaceBread34/db5d355e-5179-4c1c-9637-82b261f072ac.jpg'),
                "tags": ["剪刀手"]
            }]
        }, {
            "id": 36,
            "name": "七分头系列",
            "ATK": 88,
            "isNew": true,
            "isFighting": false,
            "items": [{
                "id": 1094,
                "path": require('../Image/FaceBread36/765982ab-d821-4283-a293-45076bcac4fa.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1095,
                "path": require('../Image/FaceBread36/2b362dc8-9323-48f8-9ed4-fa0fcd12b59a.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1096,
                "path": require('../Image/FaceBread36/129d4cfc-cbbd-4fe6-af0f-815c50bfca87.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1092,
                "path": require('../Image/FaceBread36/43d8ca80-840e-4714-8136-c08ad26c0b8a.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1093,
                "path": require('../Image/FaceBread36/ee809278-6878-41f3-9565-abc8bcec73bd.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1090,
                "path": require('../Image/FaceBread36/56d8e971-25bb-42ab-98e1-aa2c12d44deb.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1091,
                "path": require('../Image/FaceBread36/cc476be6-d0fa-42c2-9eba-7b7d794cf1f5.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1087,
                "path": require('../Image/FaceBread36/f4afa9be-4ceb-46bd-a15a-53402a65b728.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1088,
                "path": require('../Image/FaceBread36/216923d5-c466-4c07-aac4-7e72e8bace28.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1089,
                "path": require('../Image/FaceBread36/957fac3a-956e-4fcb-8139-e1cf07cda4d5.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1085,
                "path": require('../Image/FaceBread36/10f93495-14b1-4b1b-a450-e6077a7c0b5b.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1086,
                "path": require('../Image/FaceBread36/fd571321-b35c-4216-a64e-12eb2455130d.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1082,
                "path": require('../Image/FaceBread36/88d9d08c-8c7f-47ea-8d4e-b00c16ee41ad.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1083,
                "path": require('../Image/FaceBread36/be9e4203-87c4-455d-8483-6d24bddb4cce.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1084,
                "path": require('../Image/FaceBread36/18ffc39b-b4c5-4b73-b2a1-6446c75e331f.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1081,
                "path": require('../Image/FaceBread36/374215af-25ed-400c-a5ce-f601a8f134ce.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1078,
                "path": require('../Image/FaceBread36/a05bcc72-36d9-4b8d-89ee-c6ee734e8e4f.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1079,
                "path": require('../Image/FaceBread36/80cf50bf-5522-4ec1-a44e-ae64636474de.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1080,
                "path": require('../Image/FaceBread36/5e61afdf-4aca-4a08-9b6c-0cd19dab45a6.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1076,
                "path": require('../Image/FaceBread36/5bae9ac2-e2b4-457d-a16e-b3ea1412123e.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1077,
                "path": require('../Image/FaceBread36/17b5e81f-ca23-4ef7-93e4-1693c7dec930.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1072,
                "path": require('../Image/FaceBread36/6181cc30-27ea-4d7a-8e4a-f4b946a310ef.gif'),
                "tags": ["七分头系列"]
            }, {
                "id": 1073,
                "path": require('../Image/FaceBread36/6532d0bc-7f45-4a3e-b3ed-6f0f841e2a5b.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1074,
                "path": require('../Image/FaceBread36/d4db77da-8381-4c74-85d4-3be1a7b7a972.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1075,
                "path": require('../Image/FaceBread36/6f82f089-36dd-460a-b94c-ddbac4493152.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1070,
                "path": require('../Image/FaceBread36/f9628658-a312-4e53-89c1-a700f7da5aa5.gif'),
                "tags": ["七分头系列"]
            }, {
                "id": 1071,
                "path": require('../Image/FaceBread36/5b595ccf-6fd5-4626-80ad-80453738c9ee.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1068,
                "path": require('../Image/FaceBread36/7ca5815a-b634-41e2-8621-99782241424f.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1069,
                "path": require('../Image/FaceBread36/f4a15bed-b865-42e2-ab58-f066550e78d9.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1066,
                "path": require('../Image/FaceBread36/3424edb7-8dac-486f-be4c-b6836e3f606d.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1067,
                "path": require('../Image/FaceBread36/7187413d-7892-4f94-a495-651ba177ff88.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1063,
                "path": require('../Image/FaceBread36/c66dd526-cc34-4dcb-9523-71a3abfa7f50.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1064,
                "path": require('../Image/FaceBread36/384444bd-2a7a-4605-99b3-e5aa639b9b54.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1065,
                "path": require('../Image/FaceBread36/4bc1d63a-c849-4a59-b65e-a2b2f124bd09.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1060,
                "path": require('../Image/FaceBread36/6140d8e2-f7db-47e7-b0d0-ea21465fbaac.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1061,
                "path": require('../Image/FaceBread36/53317d2c-f3d8-4850-b9ff-c663d37511e3.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1062,
                "path": require('../Image/FaceBread36/b1a66f48-d847-4304-8155-266fded06844.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1057,
                "path": require('../Image/FaceBread36/912a7de7-e6cb-46a0-9506-b189bfb9d582.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1058,
                "path": require('../Image/FaceBread36/c559cef4-01b8-4072-81af-690ae9056008.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1059,
                "path": require('../Image/FaceBread36/0837806b-7569-4016-9c0c-cc1e45940fe8.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1054,
                "path": require('../Image/FaceBread36/29139131-ae3d-40f3-bb2c-aad96e81daa3.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1055,
                "path": require('../Image/FaceBread36/029cd634-a7df-4be3-b95a-7cf9a17d11ec.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1056,
                "path": require('../Image/FaceBread36/e3187533-3a65-4636-afce-8a1e8c3c7b0b.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1053,
                "path": require('../Image/FaceBread36/fbaef544-d60f-4d10-a0fc-08d16c061bd9.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1052,
                "path": require('../Image/FaceBread36/c5284c75-e53f-4af3-8b97-9b877fe98932.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1049,
                "path": require('../Image/FaceBread36/7f039e70-e02a-4943-8317-abac8d442eea.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1050,
                "path": require('../Image/FaceBread36/b24f9e7a-7436-4f03-a425-05d60960dd16.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1051,
                "path": require('../Image/FaceBread36/6ebff19c-5c1c-45b8-8a14-3928e2c1dafc.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1047,
                "path": require('../Image/FaceBread36/3042b10c-1c65-4be6-b2ee-b85f2267028b.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1048,
                "path": require('../Image/FaceBread36/b3918edb-444d-461d-b067-df8133f77313.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1044,
                "path": require('../Image/FaceBread36/34eb3135-a058-495e-addc-4b755c61c372.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1045,
                "path": require('../Image/FaceBread36/867db1aa-cae8-4fbf-865b-0eb658a8d5fd.gif'),
                "tags": ["七分头系列"]
            }, {
                "id": 1046,
                "path": require('../Image/FaceBread36/69797260-aa29-4fd2-9218-d78916b67a27.jpg'),
                "tags": ["七分头系列"]
            }, {
                "id": 1043,
                "path": require('../Image/FaceBread36/fb9f21f2-bec3-4373-b1a1-04696e09d35b.gif'),
                "tags": ["七分头系列"]
            }]
        }],
    favoritePackages: [],

    favoriteEmotions: [],
    getAllEmotion(isfresh, callback){
        if (!isfresh && this.emotionCache[0]) {
            callback(null, this.emotionCache);
            return;
        }
        fetch('http://192.168.89.101:8083/api/api/package/get-all-package', {method: 'GET'})
            .then((response)=>response.json())
            .then(function (responseJson) {
                switch (responseJson.State) {
                    case 0:
                        this.emotionCache = responseJson.Result
                        callback(null, responseJson.Result);
                        break;
                    case 1:
                        callback('参数问题');
                        break
                    case 2:
                        callback('异常错误');
                }
            }.bind(this))


    },
    getAllEmotionPackages: function () {

        return this.allEmotions;
    },

    getNewEmotionPackages: function () {
        var result = [];
        for (var i in this.allEmotions) {
            var item = this.allEmotions[i];
            if (item.isNew) {
                result.push(item);
            }
        }
        return result;
    },

    getFightingEmotions: function () {
        var result = [];
        for (var i in this.allEmotions) {
            var item = this.allEmotions[i];
            if (item.isFighting) {
                result.push(item);
            }
        }
        return result;
    },

    getAllTags: function () {
        var result = [];
        for (var i in this.allEmotions) {
            var emotionPackage = this.allEmotions[i];
            for (var j in emotionPackage.items) {
                var item = emotionPackage.items[j];
                for (var k in item.tags) {
                    var tag = item.tags[k];
                    if (result.indexOf(tag) == -1) {
                        result.push(tag);
                    }
                }
            }
        }
        return result;
    },
    getAllTags1:function(){
        var result=[];
        for(var i in this.emotionCache){
            var emotionPackage=this.emotionCache[i];
            for(var j in emotionPackage.ListImage){
                var item=emotionPackage.ListImage[j];
                for(var k in item.Tags){
                    var Tag=item.Tags[k];
                    if(result.indexOf(Tag)==-1){
                        result.push(Tag);
                    }
                }
            }
        }
        return result;
    },
    filterEmotions: function (conditions) {
        var result = [];
        for (var i in this.allEmotions) {
            var emotion = this.allEmotions[i];
            for (var k in emotion.items) {
                var item = emotion.items[k];
                for (var j in conditions) {
                    var tag = conditions[j];
                    if (item.tags.indexOf(tag) != -1) {
                        result.push(item);
                        break;
                    }
                }
            }

        }
        console.log(JSON.stringify(this.allEmotions))
        return result;
    },
    filterEmotions1:function(conditions){
      var result=[];
      for(var i in this.emotionCache){
          var emotion=this.emotionCache[i];
          for(var k in emotion.ListImage){
              var item=emotion.ListImage[k];
              for(var j in conditions){
                  var tag=conditions[j];
                  if(item.Tags.indexOf(tag)!=-1){
                      result.push(item);
                      break;
                  }
              }
          }
      }
        return result;
    },
    loadFavorites1(){
        AsyncStorage.getItem(storagePackageKey)
            .then((item)=> {

                var packageName = JSON.parse(item);

                this.favoritePackages = packageName ? packageName : [];
                if (packageName && packageName[0]) {
                    for (var i in packageName) {
                        var emotion = this.emotionCache.filter((EmitionPackages)=> {
                            return EmitionPackages.PackageName == packageName[i]
                        })[0];
                        if (emotion) {

                            emotion.isFavorite = true;
                            console.log(JSON.stringify(emotion))

                        }

                    }
                }
            })
        AsyncStorage.getItem(storageEmotionKey)
            .then((item)=> {
                var emotionId = JSON.parse(item);

                this.favoriteEmotions = emotionId ? emotionId : [];
                if (emotionId && emotionId[0]) {
                    for (var i in emotionId) {
                        this.emotionCache.forEach(function (packages) {
                            var emotion = packages.ListImage.filter((emition)=> {
                                return emition.Id == emotionId[i]
                            })[0];
                            if (emotion) {
                                emotion.isFavorite = true;
                                console.log(JSON.stringify(emotion))
                            }
                        })
                    }
                }
            })

    },
   /* loadFavorites(){

        AsyncStorage.getItem(storagePackageKey)
            .then((item)=> {

                var packageName = JSON.parse(item);

                this.favoritePackages = packageName ? packageName : [];
                if (packageName && packageName[0]) {
                    for (var i in packageName) {
                        var emotion = this.allEmotions.filter((EmitionPackages)=> {
                            return EmitionPackages.name == packageName[i]
                        })[0];
                        if (emotion) {

                            emotion.isFavorite = true;
                            console.log(JSON.stringify(emotion))

                        }

                    }
                }
            })
        AsyncStorage.getItem(storageEmotionKey)
            .then((item)=> {
                var emotionId = JSON.parse(item);

                this.favoriteEmotions = emotionId ? emotionId : [];
                if (emotionId && emotionId[0]) {
                    for (var i in emotionId) {
                        this.allEmotions.forEach(function (packages) {
                            var emotion = packages.items.filter((emition)=> {
                                return emition.id == emotionId[i]
                            })[0];
                            if (emotion) {
                                emotion.isFavorite = true;
                                console.log(JSON.stringify(emotion))
                            }
                        })
                    }
                }
            })

    },*/
    addFavoritePackage1(packageName){
        this.favoritePackages.push(packageName);
        for (var i in this.emotionCache) {
            if (this.emotionCache[i].PackageName == packageName) {
                this.emotionCache[i].isFavorite = true
            }
        }
        return AsyncStorage.setItem(storagePackageKey, JSON.stringify(this.favoritePackages))
    },
    addFavoritePackage(packageName){
        this.favoritePackages.push(packageName);
        for (var i in this.allEmotions) {
            if (this.allEmotions[i].name == packageName) {
                this.allEmotions[i].isFavorite = true
            }

        }
        return AsyncStorage.setItem(storagePackageKey, JSON.stringify(this.favoritePackages))


    },
    removeFavoritePackage1(packageName){
        var allPackage = this.getFavoritePackages()
        this.favoritePackages.splice(allPackage.indexOf(packageName), 1)
        for (var i in this.emotionCache) {
            if (this.emotionCache[i].PackageName == packageName) {
                this.emotionCache[i].isFavorite = false
            }
        }
        return AsyncStorage.setItem(storagePackageKey, JSON.stringify(this.favoritePackages))
    },
    removeFavoritePackage(packageName){
        var allPackage = this.getFavoritePackages()
        this.favoritePackages.splice(allPackage.indexOf(packageName), 1)
        for (var i in this.allEmotions) {
            if (this.allEmotions[i].name == packageName) {
                this.allEmotions[i].isFavorite = false
            }
        }
        return AsyncStorage.setItem(storagePackageKey, JSON.stringify(this.favoritePackages))
    },
    getFavoritePackages(){
        return this.favoritePackages;

    },
    addFavoriteEmotion1(emotionId){
        this.favoriteEmotions.push(emotionId);
        for (var i in this.emotionCache) {
            for (var j in this.emotionCache[i].ListImage) {
                if (this.emotionCache[i].ListImage[j].Id == emotionId) {
                    this.emotionCache[i].ListImage[j].isFavorite = true
                }
            }
        }
        return AsyncStorage.setItem(storageEmotionKey, JSON.stringify(this.favoriteEmotions));
    },
    /*addFavoriteEmotion(emotionId){
        this.favoriteEmotions.push(emotionId);

        for (var i in this.allEmotions) {
            for (var j in this.allEmotions[i].items) {
                if (this.allEmotions[i].items[j].id == emotionId) {
                    this.allEmotions[i].items[j].isFavorite = true
                }
            }
        }

        return AsyncStorage.setItem(storageEmotionKey, JSON.stringify(this.favoriteEmotions));
    },*/
    removeEmotion1(emotionId){
        var allEmotion = this.getFavoriteEmotions()
        this.favoriteEmotions.splice(allEmotion.indexOf(emotionId), 1)
        for (var i in this.emotionCache) {
            for (var j in this.emotionCache[i].ListImage) {
                if (this.emotionCache[i].ListImage[j].Id == emotionId) {
                    this.emotionCache[i].ListImage[j].isFavorite = false
                }
            }
        }
        return AsyncStorage.setItem(storageEmotionKey, JSON.stringify(this.favoriteEmotions));
    },
    /*removeEmotion(emotionId){
        var allEmotion = this.getFavoriteEmotions()
        this.favoriteEmotions.splice(allEmotion.indexOf(emotionId), 1)
        for (var i in this.allEmotions) {
            for (var j in this.allEmotions[i].items) {
                if (this.allEmotions[i].items[j].id == emotionId) {
                    this.allEmotions[i].items[j].isFavorite = false
                }
            }
        }
        return AsyncStorage.setItem(storageEmotionKey, JSON.stringify(this.favoriteEmotions));
        console.log(this.allEmotions.isFavorite)
    },*/
    removeFavoriteEmotion(emotionId){
        AsyncStorage.removeItem(storageEmotionKey)
            .then(function () {
                this.favoriteEmotions = [];
                console.log("removeFavoriteEmotion");
            }.bind(this))
    },

    getFavoriteEmotions(){
        return this.favoriteEmotions;

    },
    /*getPhotos(){
        var result = [];
        console.log(this.favoriteEmotions);
        for (var i in this.allEmotions) {
            var emotion = this.allEmotions[i]
            for (var k in emotion.items) {
                var item = emotion.items[k]
                for (var j in this.favoriteEmotions) {
                    if (item.id == this.favoriteEmotions[j]) {

                        result.push(item)

                    }
                }
            }
        }
        console.log(result)

        return result;
    },*/
    getPhotos1(){
        var result = [];
        console.log(this.favoriteEmotions);
        for (var i in this.emotionCache) {
            var emotion = this.emotionCache[i]
            for (var k in emotion.ListImage) {
                var item = emotion.ListImage[k]
                for (var j in this.emotionCache) {
                    if (item.Id == this.favoriteEmotions[j]) {
                        result.push(item)
                    }
                }
            }
        }
        console.log(result)
        return result;
    },
   /* getPackages(){
        var result = [];
        console.log(this.favoritePackages);
        for (var i in this.allEmotions) {
            var Package = this.allEmotions[i]
            for (j in this.favoritePackages) {
                if (Package.name == this.favoritePackages[j]) {
                    result.push(Package)
                }
            }
        }
        console.log(result)
        return result;

    },*/
    getPackages1(){
        var result=[];
        for(var i in this.emotionCache){
            var Package=this.emotionCache[i]
            for(j in this.favoritePackages){
                if(Package.PackageName==this.favoritePackages[j]){
                    result.push(Package)
                }
            }
        }
        return result;
    }


};

