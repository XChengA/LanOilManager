
import Formic_acid from "~/assets/img/molecule/Formic_acid.png";
import Acetic_acid from "~/assets/img/molecule/Acetic_acid.png";
import Propanoic_acid from "~/assets/img/molecule/Propanoic_acid.png";
import Butanoic_acid from "~/assets/img/molecule/Butanoic_acid.png";
import Pentanoic_acid from "~/assets/img/molecule/Pentanoic_acid.png";
import Ximenic_acid from "~/assets/img/molecule/Ximenic_acid.png";
import XYMENYNIC_ACID2 from "~/assets/img/molecule/XYMENYNIC_ACID2.png";

export const FATTY_ACID_LIST = [
    {
        id: 1,
        cn_name: "甲酸",
        en_name: "Formic acid",
        trivial_name: "甲酸",
        expression_way: "1:0",
        molecular_formula: "C H2 O2",
        molecular_weight: "46.03",
        CAS_number: "64-18-6",
        pic: Formic_acid,
        routerConfig: {
            name: 'lan-fatty_acid-detil',
            path: '/lan/fatty_acid/detil',
            params: {},
            query: {
                id: 1
            }
        },
        detil: {
            cn_name: "甲酸",
            en_name: "Formic acid",
            source: "<a href='/lan/vegetable_oil/detil?id=8'>植物油111脂</a>",
            efficacy: "抗衰、细胞调控",
            literature: [
                {
                    source:
                        "Fang C ,Jianying L ,Yandi L , et al.Effect of ximenynic acid on cell cycle arrest and apoptosis and COX-1 in HepG2 cells.[J].Molecular medicine reports,2016,14(6):5667-5676.",
                    des: "西门木炔酸 对 HepG2细胞周期停滞和凋亡以及 COX-1 的影响",
                },
                {
                    source:
                        "Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.",
                    des: "檀香中具有抗衰老活性的西门炔的分离、鉴定和表征",
                },
            ],
            pic: Formic_acid,
            cas: "2578-97-4",
            chemicalFormula: "C29H50O",
            molecularWeight: "414.707",
            density: "1.0±0.1 g/cm3(Predicted)",
            melting: "39-40°C(Solv; acetone(67-64-1);ligroine (8032-32-4))",
            boiling: "501.9±19.0 °C at 760 mmHg",
            acidity: "4.77+0.10(Predicted)",
        }
    },
    {
        id: 2,
        cn_name: "乙酸",
        en_name: "Acetic acid",
        trivial_name: "乙酸",
        expression_way: "2:0",
        molecular_formula: "C2 H4 O2",
        molecular_weight: "60.05",
        CAS_number: "64-19-7",
        pic: Acetic_acid,
        routerConfig: {
            name: 'lan-fatty_acid-detil',
            path: '/lan/fatty_acid/detil',
            params: {},
            query: {
                id: 2
            }
        },
        detil: {
            cn_name: "乙酸",
            en_name: "Acetic acid",
            source: "<a href='/lan/vegetable_oil/detil?id=8'>海檀木籽油</a>",
            efficacy: "抗衰、细胞调控",
            literature: [
                {
                    source:
                        "Fang C ,Jianying L ,Yandi L , et al.Effect of ximenynic acid on cell cycle arrest and apoptosis and COX-1 in HepG2 cells.[J].Molecular medicine reports,2016,14(6):5667-5676.",
                    des: "西门木炔酸 对 HepG2细胞周期停滞和凋亡以及 COX-1 的影响",
                },
                {
                    source:
                        "Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.",
                    des: "檀香中具有抗衰老活性的西门炔的分离、鉴定和表征",
                },
            ],
            pic: Acetic_acid,
            cas: "2578-97-4",
            chemicalFormula: "C29H50O",
            molecularWeight: "414.707",
            density: "1.0±0.1 g/cm3(Predicted)",
            melting: "39-40°C(Solv; acetone(67-64-1);ligroine (8032-32-4))",
            boiling: "501.9±19.0 °C at 760 mmHg",
            acidity: "4.77+0.10(Predicted)",
        }
    },
    {
        id: 3,
        cn_name: "丙酸",
        en_name: "Propanoic acid",
        trivial_name: "丙酸",
        expression_way: "3:0",
        molecular_formula: "C3 H6 O2",
        molecular_weight: "74.08",
        CAS_number: "79-09-4",
        pic: Propanoic_acid,
        routerConfig: {
            name: 'lan-fatty_acid-detil',
            path: '/lan/fatty_acid/detil',
            params: {},
            query: {
                id: 3
            }
        },
        detil: {
            cn_name: "丙酸",
            en_name: "Propanoic acid",
            source: "<a href='/lan/vegetable_oil/detil?id=8'>海檀木籽油</a>",
            efficacy: "抗衰、细胞调控",
            literature: [
                {
                    source:
                        "Fang C ,Jianying L ,Yandi L , et al.Effect of ximenynic acid on cell cycle arrest and apoptosis and COX-1 in HepG2 cells.[J].Molecular medicine reports,2016,14(6):5667-5676.",
                    des: "西门木炔酸 对 HepG2细胞周期停滞和凋亡以及 COX-1 的影响",
                },
                {
                    source:
                        "Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.",
                    des: "檀香中具有抗衰老活性的西门炔的分离、鉴定和表征",
                },
            ],
            pic: Propanoic_acid,
            cas: "2578-97-4",
            chemicalFormula: "C29H50O",
            molecularWeight: "414.707",
            density: "1.0±0.1 g/cm3(Predicted)",
            melting: "39-40°C(Solv; acetone(67-64-1);ligroine (8032-32-4))",
            boiling: "501.9±19.0 °C at 760 mmHg",
            acidity: "4.77+0.10(Predicted)",
        }
    },
    {
        id: 4,
        cn_name: "丁酸",
        en_name: "Butanoic acid",
        trivial_name: "丁酸",
        expression_way: "4:0",
        molecular_formula: "C4 H8 O2",
        molecular_weight: "88.11",
        CAS_number: "107-92-6",
        pic: Butanoic_acid,
        routerConfig: {
            name: 'lan-fatty_acid-detil',
            path: '/lan/fatty_acid/detil',
            params: {},
            query: {
                id: 4
            }
        },
        detil: {
            cn_name: "丁酸",
            en_name: "Butanoic acid",
            source: "<a href='/lan/vegetable_oil/detil?id=8'>海檀木籽油</a>",
            efficacy: "抗衰、细胞调控",
            literature: [
                {
                    source:
                        "Fang C ,Jianying L ,Yandi L , et al.Effect of ximenynic acid on cell cycle arrest and apoptosis and COX-1 in HepG2 cells.[J].Molecular medicine reports,2016,14(6):5667-5676.",
                    des: "西门木炔酸 对 HepG2细胞周期停滞和凋亡以及 COX-1 的影响",
                },
                {
                    source:
                        "Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.",
                    des: "檀香中具有抗衰老活性的西门炔的分离、鉴定和表征",
                },
            ],
            pic: Butanoic_acid,
            cas: "2578-97-4",
            chemicalFormula: "C29H50O",
            molecularWeight: "414.707",
            density: "1.0±0.1 g/cm3(Predicted)",
            melting: "39-40°C(Solv; acetone(67-64-1);ligroine (8032-32-4))",
            boiling: "501.9±19.0 °C at 760 mmHg",
            acidity: "4.77+0.10(Predicted)",
        }
    },
    {
        id: 5,
        cn_name: "戊酸",
        en_name: "Pentanoic acid",
        trivial_name: "戊酸",
        expression_way: "5:0",
        molecular_formula: "C5 H10 O2",
        molecular_weight: "102.13",
        CAS_number: "109-52-4",
        pic: Pentanoic_acid,
        routerConfig: {
            name: 'lan-fatty_acid-detil',
            path: '/lan/fatty_acid/detil',
            params: {},
            query: {
                id: 5
            }
        },
        detil: {
            cn_name: "戊酸",
            en_name: "Pentanoic acid",
            source: "<a href='/lan/vegetable_oil/detil?id=8'>海檀木籽油</a>",
            efficacy: "抗衰、细胞调控",
            literature: [
                {
                    source:
                        "Fang C ,Jianying L ,Yandi L , et al.Effect of ximenynic acid on cell cycle arrest and apoptosis and COX-1 in HepG2 cells.[J].Molecular medicine reports,2016,14(6):5667-5676.",
                    des: "西门木炔酸 对 HepG2细胞周期停滞和凋亡以及 COX-1 的影响",
                },
                {
                    source:
                        "Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.",
                    des: "檀香中具有抗衰老活性的西门炔的分离、鉴定和表征",
                },
            ],
            pic: Pentanoic_acid,
            cas: "2578-97-4",
            chemicalFormula: "C29H50O",
            molecularWeight: "414.707",
            density: "1.0±0.1 g/cm3(Predicted)",
            melting: "39-40°C(Solv; acetone(67-64-1);ligroine (8032-32-4))",
            boiling: "501.9±19.0 °C at 760 mmHg",
            acidity: "4.77+0.10(Predicted)",
        }
    },
    {
        id: 6,
        cn_name: "西门木炔酸",
        en_name: "Ximenic acid",
        trivial_name: "西门木炔酸",
        expression_way: "26:1-delta-17c",
        molecular_formula: "C26 H50 O2",
        molecular_weight: "394.67",
        CAS_number: "66274-43-9",
        pic: Ximenic_acid,
        spTag: true,
        routerConfig: {
            name: 'lan-fatty_acid-detil',
            path: '/lan/fatty_acid/detil',
            params: {},
            query: {
                id: 6
            }
        },
        detil: {
            cn_name: "西门木炔酸",
            en_name: "Ximenic acid",
            source: "<a href='/lan/vegetable_oil/detil?id=8'>海檀木籽油</a>",
            efficacy: "抗衰、细胞调控",
            literature: [
                {
                    source:
                        "Fang C ,Jianying L ,Yandi L , et al.Effect of ximenynic acid on cell cycle arrest and apoptosis and COX-1 in HepG2 cells.[J].Molecular medicine reports,2016,14(6):5667-5676.",
                    des: "西门木炔酸 对 HepG2细胞周期停滞和凋亡以及 COX-1 的影响",
                },
                {
                    source:
                        "Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.",
                    des: "檀香中具有抗衰老活性的西门炔的分离、鉴定和表征",
                },
            ],
            pic: XYMENYNIC_ACID2,
            cas: "2578-97-4",
            chemicalFormula: "C29H50O",
            molecularWeight: "414.707",
            density: "1.0±0.1 g/cm3(Predicted)",
            melting: "39-40°C(Solv; acetone(67-64-1);ligroine (8032-32-4))",
            boiling: "501.9±19.0 °C at 760 mmHg",
            acidity: "4.77+0.10(Predicted)",
        }
    },
]