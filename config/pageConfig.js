// 配置页面跳转动画, 页面seo数据，路由数据
// 页面跳转动画list
const TransitionList = {
    // 默认动画
    page: {
        name: 'page', // 过渡名称
        mode: 'out-in', // 过渡模式
    },
    // 淡入淡出
    fade: {
        name: 'fade',
        mode: 'out-in',
    },
    // 滑动
    slide: {
        name: 'slide',
        mode: 'out-in',
    },
    // 缩放效果（Zoom）
    zoom: {
        name: 'zoom',
        mode: 'out-in',
    },
    // 组合效果（Fade + Slide）
    fade_slide: {
        name: 'fade-slide',
        mode: 'out-in',
    },

    // 3D 翻转效果（Flip）
    flip: {
        name: 'flip',
        mode: 'out-in',
    },
}

// 默认的过渡方式
const defaultTransition = TransitionList.fade_slide
// 首页的过渡方式
const indexPageTransition = TransitionList.page

const pageConfigs = [
    {
        title: '首页',
        name: 'index',
        path: '/',
        pageTransitionConfig: TransitionList.page,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN',
                description: 'LAN 蘭外部植物油脂实验室',
                keywords: '蘭外部植物油脂实验室',
                canonical: ''
            }
        }
    },
    {
        title: 'about_us页面',
        name: 'lan-about_us',
        path: '/lan/about_us',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN | 关于我们',
                description: 'about us | 关于我们页面',
                keywords: 'about us',
                canonical: ''
            }
        }
    },
    {
        title: 'not_find页面',
        name: 'lan-not_find',
        path: '/lan/not_find',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN',
                description: '',
                keywords: '',
                canonical: ''
            }
        }
    },
    {
        title: '脂肪酸页面',
        name: 'lan-fatty_acid',
        path: '/lan/fatty_acid',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN | 脂肪酸',
                description: '脂肪酸列表页面',
                keywords: 'fatty acid, 脂肪酸',
                canonical: ''
            }
        }
    },
    {
        title: '脂肪酸详情页面',
        name: 'lan-fatty_acid-detil',
        path: '/lan/fatty_acid/detil',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN | 脂肪酸',
                description: '脂肪酸详情页面',
                keywords: 'fatty acid, 脂肪酸',
                canonical: ''
            }
        }
    },
    {
        title: '植物油脂页面',
        name: 'lan-vegetable_oil',
        path: '/lan/vegetable_oil',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN | 植物油脂',
                description: '植物油脂页面',
                keywords: 'vegetable oil, 植物油脂',
                canonical: ''
            }
        }
    },
    {
        title: '植物油脂详情页面',
        name: 'lan-vegetable_oil-detil',
        path: '/lan/vegetable_oil/detil',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN | 植物油脂',
                description: '植物油脂详情页面',
                keywords: 'vegetable oil, 植物油脂详情',
                canonical: ''
            }
        }
    },
    {
        title: '不皂化物页面',
        name: 'lan-unsaponifiables',
        path: '/lan/unsaponifiables',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN | 不皂化物',
                description: '不皂化物页面',
                keywords: '不皂化物， unsaponifiables',
                canonical: ''
            }
        }
    },
    {
        title: '不皂化物详情页面',
        name: 'lan-unsaponifiables-detil',
        path: '/lan/unsaponifiables/detil',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN | 不皂化物',
                description: '不皂化物详情页面',
                keywords: '不皂化物， unsaponifiables',
                canonical: ''
            }
        }
    },
    {
        title: '搜索页面',
        name: 'lan-search_result',
        path: '/lan/search_result',
        pageTransitionConfig: TransitionList.fade_slide,
        seoConfig: {
            type: 'useSeoMetaConfig',
            useHeadConfig: {},
            useSeoMetaConfig: {
                title: 'LAN ',
                description: '搜索页面',
                keywords: '搜索页面',
                canonical: ''
            }
        }
    },
    
]


/**
 * @routerName 页面路由名称
 * */
export const getPageTransition = function (routerName) {
    // 路由 / 路径不需要传path
    if (!routerName) return indexPageTransition
    let result = null
    pageConfigs.forEach(e => {
        if (e.name == routerName) result = e.pageTransitionConfig
    })
    return result || defaultTransition
}

export const getPageSeoConfig = function (routerName, seoConfigType = 'useSeoMetaConfig') {
    let result = null
    pageConfigs.forEach(e => {
        if (e.name == routerName) result = e.seoConfig
    })
    return result
}

