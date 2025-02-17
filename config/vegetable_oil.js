import BORAGO_OFFICINALIS_SEED from "~/assets/img/BORAGO_OFFICINALIS_SEED.png";
import OENOTHERA_BIENNIS from "~/assets/img/OENOTHERA_BIENNIS.png";
import OLEA_EUROPAEA_OLIVE_FRUIT from "~/assets/img/OLEA_EUROPAEA(OLIVE)FRUIT.png";
import CALOPHYLLUM_INOPHYLLUM_SEED from "~/assets/img/CALOPHYLLUM_INOPHYLLUM_SEED.png";
import SESAMUM_INDICUM_SESAME from "~/assets/img/SESAMUM_INDICUM(SESAME).png";
import ROSA_CANINA_FRUIT from "~/assets/img/ROSA_CANINA_FRUIT.png";
import HIPPOPHAE_RHAMNOIDES_SEED from "~/assets/img/HIPPOPHAE_RHAMNOIDES_SEED.png";
import XIMENIA_AMERICANA_SEED_OIL from "~/assets/img/XIMENIA_AMERICANA_SEED_OIL.png";

export const vegetable_oil_list = [
    {
        id: 1,
        CN_name: "琉璃苣籽油",
        EN_name: "BORAGO OFFICINALIS SEED OIL",
        pic: BORAGO_OFFICINALIS_SEED,
        keyword: '琉璃苣籽油BORAGO OFFICINALIS SEED OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 1
            }
        },
        detil: {
            title: '琉璃苣籽油',
            EN_name: 'BORAGO OFFICINALIS SEED OIL',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: BORAGO_OFFICINALIS_SEED
        }
    },
    {
        id: 2,
        CN_name: "月见草油",
        EN_name: "OENOTHERA BIENNIS (EVENING PRIMROSE) OIL",
        pic: OENOTHERA_BIENNIS,
        keyword: '月见草油OENOTHERA BIENNIS (EVENING PRIMROSE) OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 2
            }
        },
        detil: {
            title: '月见草油',
            EN_name: 'OENOTHERA BIENNIS (EVENING PRIMROSE) OIL',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: OENOTHERA_BIENNIS
        }
    },
    {
        id: 3,
        CN_name: "油橄榄果油",
        EN_name: "OLEA EUROPAEA (OLIVE) FRUIT OIL",
        pic: OLEA_EUROPAEA_OLIVE_FRUIT,
        keyword: '油橄榄果油 OLEA EUROPAEA (OLIVE) FRUIT OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 3
            }
        },
        detil: {
            title: '油橄榄果油',
            EN_name: 'OLEA EUROPAEA (OLIVE) FRUIT OIL',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: OLEA_EUROPAEA_OLIVE_FRUIT
        }
    },
    {
        id: 4,
        CN_name: "海棠果籽油",
        EN_name: "CALOPHYLLUM INOPHYLLUM SEED OIL",
        pic: CALOPHYLLUM_INOPHYLLUM_SEED,
        keyword: '海棠果籽油CALOPHYLLUM INOPHYLLUM SEED OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 4
            }
        },
        detil: {
            title: '海棠果籽油',
            EN_name: 'CALOPHYLLUM INOPHYLLUM SEED OIL',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: CALOPHYLLUM_INOPHYLLUM_SEED
        }
    },
    {
        id: 5,
        CN_name: "芝麻籽油",
        EN_name: "SESAMUM INDICUM (SESAME) SEED",
        pic: SESAMUM_INDICUM_SESAME,
        keyword: '芝麻籽油BORAGO OFFICINALIS SEED OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 5
            }
        },
        detil: {
            title: '芝麻籽油',
            EN_name: 'SESAMUM INDICUM (SESAME) SEED',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: SESAMUM_INDICUM_SESAME
        }
    },
    {
        id: 6,
        CN_name: "狗牙蔷薇果油",
        EN_name: "ROSA CANINA FRUIT OIL",
        pic: ROSA_CANINA_FRUIT,
        keyword: '狗牙蔷薇果油ROSA CANINA FRUIT OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 6
            }
        },
        detil: {
            title: '狗牙蔷薇果油',
            EN_name: 'ROSA CANINA FRUIT OIL',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: ROSA_CANINA_FRUIT
        }
    },
    {
        id: 7,
        CN_name: "沙棘籽油",
        EN_name: "HIPPOPHAE RHAMNOIDES SEED OIL",
        pic: HIPPOPHAE_RHAMNOIDES_SEED,
        keyword: '沙棘籽油HIPPOPHAE RHAMNOIDES SEED OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 7
            }
        },
        detil: {
            title: '沙棘籽油',
            EN_name: 'HIPPOPHAE RHAMNOIDES SEED OIL',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: HIPPOPHAE_RHAMNOIDES_SEED
        }
    },
    {
        id: 8,
        CN_name: "海檀木籽油",
        EN_name: "XIMENIA AMERICANA SEED OIL",
        pic: XIMENIA_AMERICANA_SEED_OIL,
        keyword: '海檀木籽油XIMENIA AMERICANA SEED OIL',
        routerConfig: {
            name: 'lan-vegetable_oil-detil',
            path: '/lan/vegetable_oil/detil',
            params: {},
            query: {
                id: 8
            }
        },
        detil: {
            title: '海檀木籽油',
            EN_name: 'XIMENIA AMERICANA SEED OIL',
            simpleIntroduce: '简介:海檀木籽是全球唯一会拉丝的植物油,堪称植物界的破尿酸。海檀木籽油中含有丰富的不饱和脂肪酸(约92%)海檀木(海檀木树的灌木)分散在不同的非洲的低海拔草原地带',
            ingredient: '成分:主要包括油酸、西门木烯酸、亚油酸、亚麻酸、硬脂酸以及少量lumequic、<a href="/lan/fatty_acid/detil?id=6" class="link_field">西门木炔酸</a>、花生四烯酸、芥酸、神经酸等',
            effect: {
                fields_title: '核心功效',
                content: ['滋润养护', '内源脂肪调控']
            },
            literature: {
                fields_title: '衍生文献',
                content: ['Shivatare S R ,Musale R ,Lohakare P , et al.Isolation, Identification and Characterization of Ximenynic Acid with Anti-Aging Activity from Santalum Album[J].International Journal of Research in Pharmaceutical Sciences,2020,11(2):1394-1399.',
                    'Cai F, Liu Y, Hettiarachichi DS, Wang F, Li J, Sunderland B, Li D. Ximenynic Acid Regulation of n-3 PUFA Content in Liver and Brain. Lifestyle Genom. 2020;13(2):64-73.']
            },
            pic: XIMENIA_AMERICANA_SEED_OIL
        }
    },
]