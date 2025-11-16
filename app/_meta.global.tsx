import {MetaRecord} from "nextra";

const DOCS_ITEMS: MetaRecord = {
    '---description': {
        type: 'separator',
        title: '연구 설명문 확인'
    },
    index: '',
    description_2_target: '',
    description_3_method: '',
    description_4_period: '',
    description_5_withdraw: '',
    description_6_side_effects: '',
    description_7_benefit: '',
    description_8_disadvantage: '',
    description_9_compensation: '',
    description_10_privacy: '',
    description_11_inquiry: '',
    '---agreement': {
        type: 'separator',
        title: '연구 동의'
    },
    agreement_1: '',
    further_process: '',
}


export default {
    index: {
        type: 'page',
        theme: {
            layout: 'full',
            toc: false,
            timestamp: false,
        }
    },
    docs: {
        type: 'page',
        title: 'Check-in',
        items: DOCS_ITEMS,
        theme: {
            timestamp: false,
            collapsed: true,
        }
    },
}